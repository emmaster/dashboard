Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'first_test#index'
  get '/baby', to: 'first_test#baby'
  get '/yout', to: 'first_test#yout'
end
