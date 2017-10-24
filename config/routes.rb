Rails.application.routes.draw do
  root 'static#index'

  get 'vacancy', to: 'static#vacancy'

  get 'nn', to: 'static#indexnn'

  resources :prices

end
