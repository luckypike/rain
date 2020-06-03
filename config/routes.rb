Rails.application.routes.draw do
  devise_for :users
  scope '(:city)', city: /nizhny/ do
    root 'pages#index'

    get :about, to: 'pages#about'
    get :career, to: 'pages#career'
    get :team, to: 'pages#team'
    get :works, to: 'pages#works'
    get :sale, to: 'pages#sale'

    resources :specialists
    resources :prices

    resources :sales, only: %i[index show]

    resources :orders, only: %i[create show] do
      collection do
        get :pay
      end
    end

    resources :instagram, only: [:index], constraints: lambda { |req| req.format == :json }
  end
end
