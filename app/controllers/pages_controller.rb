class PagesController < ApplicationController
  before_action :set_specialists, only: [:index, :team]

  def index
    @prices = Price.all
  end

  def career
  end

  def about
  end

  def team
  end

  private
  def set_specialists
    @specialists = Specialist.with_attached_photo.where(city: @city_key)
  end
end
