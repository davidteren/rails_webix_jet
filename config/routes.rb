Rails.application.routes.draw do
  get 'jet/index'
  
  root 'jet#index'
end
