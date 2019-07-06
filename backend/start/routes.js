'use strict'

const Route = use('Route')

Route.post('users', 'UserController.store').validator('UserStore')
Route.post('sessions', 'SessionController.store').validator('SessionStore')
Route.post('forgot_password', 'ForgotPasswordController.store')
Route.put('forgot_password', 'ForgotPasswordController.update')

Route.group(() => {
  Route.get('products', 'ProductController.index')

  Route.get('types/:id', 'TypeController.show')

  Route.get('sizes/:id', 'SizeController.show')

  Route.get('orders', 'OrderController.index')

  Route.get('orders/:id', 'OrderController.show')

  Route.put('orders/:id', 'OrderController.update')

  Route.post('orders', 'OrderController.store').validator('OrderStore')
}).middleware(['auth'])
