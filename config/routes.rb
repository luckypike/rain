Rails.application.routes.draw do
  devise_for :users
  scope "(:city)", city: /nizhny/ do
    root 'pages#index'

    get :about, to: 'pages#about'
    get :career, to: 'pages#career'

    resources :specialists
    resources :prices
  end
end
