Rails.application.routes.draw do
  devise_for :users
  scope "(:city)", city: /nizhny/ do
    root 'pages#index'

    get :about, to: 'pages#about'
    get :career, to: 'pages#career'
    get :team, to: 'pages#team'

    resources :specialists
    resources :prices

    resources :works, only: [:index], constraints: lambda { |req| req.format == :json }
  end
end
