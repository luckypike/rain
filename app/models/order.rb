class Order < ApplicationRecord
  belongs_to :sale

  def create_payment
    auth = {
      username: '687091',
      password: 'live_4Q-vfaQXnjFoAn_ez7I-zq635EmLXktIJae8_ljsz7o'
    }

    response = HTTParty.post(
      'https://payment.yandex.net/api/v3/payments',
      basic_auth: auth,
      headers: {
        'Content-Type': 'application/json',
        'Idempotence-Key': SecureRandom.uuid
      },
      body: {
        "amount": {
          "value": '1.00',
          "currency": 'RUB'
        },
        "capture": true,
        "confirmation": {
          "type": 'redirect',
          "return_url": 'https://www.merchant-website.com/return_url'
        }
      }.to_json
    )

    return nil unless response

    response.parsed_response['confirmation']['confirmation_url']
  end
end
