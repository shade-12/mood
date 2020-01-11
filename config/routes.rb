Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do # /api/data
    get '/data', to: 'tests#index'

    resources :users, only: [:create, :show] do
      get '/getCloseFriends', to: 'users#getCloseFriends'
      post '/updateHearts', to: 'users#updateHearts'
      post '/updateJoyLevel', to: 'users#updateJoyLevel'
      get '/getMonsters', to: 'users#getMonsters'
    end

    resources :closefriends, only: [:create, :destroy] do
    end

    resources :areas, only: [:create, :update, :destroy] do
    end

    resources :monsters, only: [:create, :update, :destroy] do
    end

  end

  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
end
