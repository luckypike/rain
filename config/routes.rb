Rails.application.routes.draw do
  devise_for :users
  scope "(:city)", city: /nizhny/ do
    root 'pages#index'

    get :about, to: 'pages#about'
    get :career, to: 'pages#career'
    get :team, to: 'pages#team'
    get :works, to: 'pages#works'

    resources :specialists
    resources :prices

    resources :instagram, only: [:index], constraints: lambda { |req| req.format == :json }
  end
end
