class StaticController < ApplicationController
  def index
    @prices = YAML.load_file('config/prices.yml')
  end

  def vacancy
  end
end
