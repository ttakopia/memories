Rails.application.routes.draw do
  root 'trips#index'
  resources :trips
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
