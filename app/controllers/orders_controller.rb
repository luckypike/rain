class OrdersController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    @order = Order.new(order_params)

    sleep 2

    if @order.save
      head :created
    else
      render json: @order.errors, status: :unprocessable_entity
    end
  end

  private

  def order_params
    params.require(:orders).permit(:name, :surname, :phone, :email)
  end
end
