class PricesController < ApplicationController
  before_action :authenticate_user!
  before_action :set_price, only: [:edit, :update, :destroy]

  def index
    @prices = Price.order(position: :asc, order: :desc, id: :asc).all
  end

  def new
    @price = Price.new
  end

  def create
    @price = Price.new(price_params)

    @price.save
    redirect_to [:prices]
  end

  def edit
  end

  def update
    if @price.update(price_params)
      redirect_to [:prices], notice: 'Prices was successfully updated.'
    else
      render 'edit'
    end
  end

  def destroy
    @price.destroy

    redirect_to [:prices]
  end

  private
    def price_params
      params.require(:price).permit(:title, :price_msk, :price_nn, :description, :position, :order)
    end

    def set_price
      @price = Price.find(params[:id])
    end
end
