class PricesController < ApplicationController
  http_basic_authenticate_with name: Rails.application.secrets[:admin_name], password: Rails.application.secrets[:admin_pass]

  def index
    @prices = Price.order(position: :asc, order: :desc, id: :asc).all
  end

  def new
    @price = Price.new
  end

  def create
    @price = Price.new(price_params)

    @price.save
    redirect_to prices_path
  end

  def edit
    @price = Price.find(params[:id])
  end

  def update
    @price = Price.find(params[:id])

    if @price.update(price_params)
      redirect_to prices_path, notice: 'Prices was successfully updated.'
    else
      render 'edit'
    end
  end

  def destroy
    @price = Price.find(params[:id])
    @price.destroy

    redirect_to prices_path
  end

  private
    def price_params
      params.require(:price).permit(:title, :price, :pricenn, :description, :position, :order)
    end
end
