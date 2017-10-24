class StaticController < ApplicationController
  def index
    # @prices = YAML.load_file('config/prices.yml')
    @prices = Price.all
  end

  def vacancy
  end

  def indexnn
    @prices = YAML.load_file('config/prices.yml')
  end
end
