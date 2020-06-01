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

  private

  def set_order
    @order = Order.find(params[:id])
  end

  def order_params
    params.require(:order).permit(:sale_id, :name, :surname, :phone, :email, :city, :uuid, :url)
  end
end
