'use strict'

const User = use('App/Models/User')

const { test, trait } = use('Test/Suite')('Product')

trait('Test/ApiClient')
trait('Auth/Client')

test('should be able to list all products', async ({ client }) => {
  const user = await User.find(1)
  const response = await client
    .get('/products')
    .loginVia(user)
    .end()

  response.assertStatus(200)
})
