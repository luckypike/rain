Rails.application.routes.draw do
  resources :specialists
  root 'static#index'

  get 'vacancy', to: 'static#vacancy'

  scope "(:city)", city: /nizhny/ do
    get '', to: 'static#index', as: :index 
  end

  resources :prices, :specialists

end
