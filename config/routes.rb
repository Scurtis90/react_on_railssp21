Rails.application.routes.draw do

  #no longer for navigation, api call, api routes
  namespace :api do
    resources :todos
  end

end
