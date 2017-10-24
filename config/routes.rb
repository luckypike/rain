Rails.application.routes.draw do
  root 'static#index'

  get 'vacancy', to: 'static#vacancy'

  scope "(:city)", city: /nn/ do
    get '', to: 'static#index' 
  end

  resources :prices

end
