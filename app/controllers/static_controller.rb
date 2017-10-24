class StaticController < ApplicationController
  def index
    # @prices = YAML.load_file('config/prices.yml')
    @prices = Price.all

    if params[:city].presence
      @city = params[:city]
    else @city = 'msk'
    end
  end

  def vacancy
  end
end
