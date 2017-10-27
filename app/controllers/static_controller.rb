class StaticController < ApplicationController
  def index
    # @prices = YAML.load_file('config/prices.yml')
    @prices = Price.all

    if params[:city].presence && params[:city] == 'nizhny'
      @city = 'nn'
    else @city = 'msk'
    end

    @specialists = Specialist.where(city: @city)

  end

  def vacancy
  end
end
