class StaticController < ApplicationController
  http_basic_authenticate_with name: Rails.application.secrets[:admin_name], password: Rails.application.secrets[:admin_pass], only: :vacancy

  def index
    # @prices = YAML.load_file('config/prices.yml')
    @prices = Price.all

    @specialists = Specialist.where(city: @city)

  end

  def vacancy
  end
end
