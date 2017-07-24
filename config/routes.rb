Rails.application.routes.draw do
  root 'static#index'

  get 'vacancy', to: 'static#vacancy'
end
