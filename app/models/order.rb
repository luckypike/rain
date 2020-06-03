class Order < ApplicationRecord
  belongs_to :sale

  enum state: { active: 0, paid: 1, canceled: 2 } do
    event :pay do
      transition active: :paid

      after do
        OrderMailer.pay(self).deliver
        OrderMailer.customer_notice(self).deliver
      end
    end

    event :cancel do
      transition active: :canceled
    end
  end

  def create_payment
    self.uuid ||= SecureRandom.uuid

    authorization = {
      username: Rails.application.credentials.payment[:username].to_s,
      password: Rails.application.credentials.payment[:password]
    }

    response = HTTParty.post(
      'https://payment.yandex.net/api/v3/payments',
      basic_auth:
        authorization,
      headers: {
        'Content-Type': 'application/json',
        'Idempotence-Key': uuid.to_s
      },
      body: {
        "amount": {
          "value": city.eql?('moscow') ? sale.price_sale_msk : sale.price_sale_nn,
          "currency": 'RUB'
        },
        "capture": true,
        "confirmation": {
          "type": 'redirect',
          "return_url": "http://127.0.0.1:3000/orders/#{id}"
        },
        "description": "Заказ №#{id}"
      }.to_json
    )

    return nil unless response

    response.parsed_response

    self.payment_id = response['id']
    self.url = response['confirmation']['confirmation_url']
    save
  end
end
