class Order < ApplicationRecord
  belongs_to :sale

  def paid
    auth = {
      username: '710076',
      password: 'test_ttrd29_NJ0k2GEYzS4t-9ht9RdXOOBnoIWUotIQ1dDc'
    }

    HTTParty.get(
      'https://payment.yandex.net/api/v3/payments/' + (self.payment_id).to_s,
      basic_auth: auth,
      headers: {
        'Content-Type': 'application/json'
      }
    )
  end
end
