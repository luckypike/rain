class ApplicationController < ActionController::Base
  before_action :set_city

  def set_city
    @cities = YAML.load_file(Rails.root.join('config', 'cities.yml')).with_indifferent_access
    @city_default = :moscow
    @city_key = (params[:city].presence || @city_default).to_sym
    @city = @cities[@city_key]
  end

  def default_url_options
    { city: @city_default == @city_key ? nil : @city_key }
  end
end
