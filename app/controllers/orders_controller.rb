class OrdersController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :set_order, only: %i[paid]

  def create
    @order = Order.new(order_params)

    sleep 2

    if @order.save
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
            "value": @order.city === 'moscow' ? @order.sale.price_sale_msk : @order.sale.price_sale_nn,
            "currency": 'RUB'
          },
          "capture": true,
          "confirmation": {
            "type": 'redirect',
            "return_url": 'http://127.0.0.1:3000/orders/' + (@order.id).to_s + '/paid'
          },
          "description": 'Заказ №' + (@order.id).to_s
        }.to_json
      )

      return nil unless response

      data = response.parsed_response

      @order.update(payment_id: data['id'])
      render json: @order, status: :ok, location: data['confirmation']['confirmation_url']
    else
      render json: @order.errors, status: :unprocessable_entity
    end
  end

  def paid
    if @order.paid['status'] === 'succeeded'
      pp 'succeeded'
    else
      head :unprocessable_entity
    end
  end

  private

  def set_order
    @order = Order.find(params[:id])
  end

  def order_params
    params.require(:order).permit(:sale_id, :name, :surname, :phone, :email, :city)
  end
end
