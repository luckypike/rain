Rails.application.routes.draw do
  scope "(:city)", city: /nizhny/ do
    root 'pages#index'

    get :about, to: 'pages#about'
    get :career, to: 'pages#career'
  end
end
