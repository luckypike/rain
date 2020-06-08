class OrdersController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :set_order, only: %i[show]

  def create
    @order = Order.new(order_params)

    sleep 2

    if @order.save
      @order.create_payment
      render json: @order, status: :ok, location: @order.url
    else
      render json: @order.errors, status: :unprocessable_entity
    end
  end

  def show; end

  def pay
    ip = request.remote_ip
    ips = [
      '185.71.76.0/27', '185.71.77.0/27', '77.75.153.0/25', '77.75.154.128/25',
      '2a02:5180:0:1509::/64', '2a02:5180:0:2655::/64', '2a02:5180:0:1533::/64',
      '2a02:5180:0:2669::/64', '127.0.0.1/8', '::1'
    ]

    request = ips.map { |i| IPAddr.new(i).include?(ip) }

    if request.include?(true)
      data = params[:object]
      @order = Order.find_by(payment_id: data[:id])

      if data[:status].eql?('succeeded')
        @order.pay
      else
        @order.cancel
      end
    else
      head :unprocessable_entity
    end
  end

  private

  def set_order
    @order = Order.find(params[:id])
  end

  def order_params
    permitted = %i[
      sale_id name surname phone
      email city uuid url state
    ]

    params.require(:order).permit(*permitted)
  end
end
