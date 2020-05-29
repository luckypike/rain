class Order < ApplicationRecord
  belongs_to :sale

  def create_payment
    auth = {
      username: '710076',
      password: 'test_ttrd29_NJ0k2GEYzS4t-9ht9RdXOOBnoIWUotIQ1dDc'
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
          "return_url": 'https://irinarain.com/team'
        }
      }.to_json
    )

    return nil unless response

    response.parsed_response
  end
end
