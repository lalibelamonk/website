Rails.application.routes.draw do
  mount Rswag::Ui::Engine => '/api-docs'
  mount Rswag::Api::Engine => '/api-docs'
  namespace :api do
    api_version(:module => "v1", :header => {:name => "version", :value => "1"}, defaults: {format: :json}) do
     resources :compositions
    end
  end
end
