Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  post 'register', to: "users#register"
  post 'login', to: "users#login"

  post 'admin/register', to: "admins#register"
  post 'admin/login', to: "admins#login"

  get 'v1/locations', to: "locations#index"
  get 'v1/venues', to: "venues#index"
  get 'v1/categories', to: "categories#index"
  post '/admin/event', to: "events#create"

  post '/admin/events', to: "events#index"
end
