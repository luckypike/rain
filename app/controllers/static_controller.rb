class StaticController < ApplicationController
  http_basic_authenticate_with name: Rails.application.secrets[:admin_name], password: Rails.application.secrets[:admin_pass], only: :vacancy

  def index
    @page_title       = 'RAIN — ногтевая студия. Заботливый маникюр и педикюр ' + @switcher[@city.to_sym][:title_in] + '.'
    @page_description = 'Заботливый маникюр и педикюр ' + @switcher[@city.to_sym][:title_in] + '. Маникюр, покрытие гелем, френч, дизайн ногтей, лунки, шлифовка.'
    @page_keywords    = 'Маникюр, покрытие гелем, френч, дизайн ногтей, лунки, шлифовка'
    # @prices = YAML.load_file('config/prices.yml')
    @prices = Price.all

    @specialists = Specialist.where(city: @city)

  end

  def vacancy
  end
end
