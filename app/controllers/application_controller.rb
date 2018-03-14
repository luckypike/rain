class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  before_action :set_variables

  def set_variables
    if params[:city].present? && params[:city] == 'nizhny'
      @city = 'nn'
    else @city = 'msk'
    end

    @switcher = {
      msk: {
        key: nil,
        title: 'Moscow',
        title_rus: 'Москва',
        title_in: 'в Москве',
        link: '/',
        address: ['Духовской переулок', 'дом 17', 'строение 15'],
        phone: '+7 926 042-58-85',
        yclients: 'w81206',
        video: 'fgeYJU9x8wY'},
      nn: {
        key: :nizhny,
        title: 'Nizhny Novgorod',
        title_rus: 'Нижний Новгород',
        title_in: 'в Нижнем Новгороде',
        link: '/nizhny',
        address: ['улица Новая', 'дом 28', '1 подъезд', '5 этаж'],
        phone: '+7 920 111-56-88',
        yclients: 'w81206',
        video: 'qkuyIJWJbk0'
      },
    }
  end
end
