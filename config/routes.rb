Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do # /api/data
    get '/data', to: 'tests#index'

    resources :users, only: [:create, :show, :update] do
      get '/getCloseFriends', to: 'users#getCloseFriends'
    end

    resources :areas, only: [:create, :show, :destroy]
    end

  end

  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
end
