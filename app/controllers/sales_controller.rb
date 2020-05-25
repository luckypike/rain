class SalesController < ApplicationController
  before_action :set_specialists, only: %i[index show]
  before_action :set_sale, only: %i[show]

  def index; end

  def show; end

  private

  def set_sale
    @sale = Sale.find(params[:id])
  end

  def set_specialists
    @specialists = Specialist.with_attached_photo.where(city: @city_key)
  end
end
