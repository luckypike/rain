class Order < ApplicationRecord
  belongs_to :sale

  def create_payment
    self.uuid = SecureRandom.uuid

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
        'Idempotence-Key': "#{self.uuid}"
      },
      body: {
        "amount": {
          "value": self.city === 'moscow' ? self.sale.price_sale_msk : self.sale.price_sale_nn,
          "currency": "RUB"
        },
        "capture": true,
        "confirmation": {
          "type": "redirect",
          "return_url": "http://127.0.0.1:3000/orders/#{self.id}"
        },
        "description": "Заказ №#{self.id}"
      }.to_json
    )

    return nil unless response

    response.parsed_response

    self.payment_id = response["id"]
    self.url = response["confirmation"]["confirmation_url"]
    self.save
  end

  def payed

  end
end
