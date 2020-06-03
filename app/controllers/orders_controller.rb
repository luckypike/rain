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
    data = params[:object]
    @order = Order.find_by(payment_id: data[:id])

    if data[:status].eql?('succeeded')
      @order.pay
    else
      @order.cancel
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
