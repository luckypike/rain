class PagesController < ApplicationController
  before_action :set_specialists, only: %i[index team]

  def index
    @prices = Price.all.order(:order)
  end

  def career; end

  def about; end

  def team; end

  def works; end

  def sale; end

  private

  def set_specialists
    @specialists = Specialist.with_attached_photo.where(city: @city_key)
  end
end
