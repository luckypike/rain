class OrdersController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    @order = Order.new(order_params)

    sleep 2

    if @order.save
      @order.create_payment
      @order.update(payment_id: @order.create_payment['id'])
      @order.save
      render json: @order, status: :ok, location: @order.create_payment['confirmation']['confirmation_url']
    else
      render json: @order.errors, status: :unprocessable_entity
    end
  end

  private

  def order_params
    params.require(:order).permit(:sale_id, :name, :surname, :phone, :email)
  end
end
