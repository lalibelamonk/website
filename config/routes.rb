Rails.application.routes.draw do
  namespace :api do
    api_version(:module => "v1", :header => {:name => "version", :value => "1"}, defaults: {format: :json}) do
     resources :compositions
     post 'authenticate', to: 'authentication#authenticate'
    end
  end
end
