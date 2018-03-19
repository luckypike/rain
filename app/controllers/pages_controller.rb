class PagesController < ApplicationController
  def index
    @specialists = Specialist.where(city: @city_key)
  end

  def career
  end

  def about
  end
end
