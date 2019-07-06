'use strict'

const { test, trait } = use('Test/Suite')('Order')
const User = use('App/Models/User')

trait('Test/ApiClient')
trait('Auth/Client')

test('should be able to create a order', async ({ client }) => {
  const user = await User.find(2)
  const response = await client
    .post('/orders')
    .send({
      data: [{ size_id: 10 }],
      observation: 'Observação',
      address: 'Endereço',
      payment_method: 'Dinheiro'
    })
    .loginVia(user)
    .end()

  response.assertStatus(200)
})

test('should not be able to create a order when logged as administrador', async ({
  client
}) => {
  const user = await User.find(1)
  const response = await client
    .post('/orders')
    .send({
      data: [{ size_id: 10 }],
      observation: 'Observação',
      address: 'Endereço',
      payment_method: 'Dinheiro'
    })
    .loginVia(user)
    .end()

  response.assertStatus(401)
})

test('should be able to list all orders when logged as administrador', async ({
  client
}) => {
  const admin = await User.find(1)
  const response = await client
    .get('/orders')
    .loginVia(admin)
    .end()

  response.assertStatus(200)
})

test('should be able to list all orders that you are the owner', async ({
  client
}) => {
  const user = await User.find(2)
  const response = await client
    .get('/orders')
    .loginVia(user)
    .end()

  response.assertStatus(200)
})

test('should not be able to list order when you are not logged in', async ({
  client
}) => {
  const response = await client.get('/orders').end()

  response.assertStatus(204)
})

test('should be able to show a order detail', async ({ client }) => {
  const user = await User.find(1)
  const response = await client
    .get('/orders/1')
    .loginVia(user)
    .end()

  response.assertStatus(200)
})

test('should not be able to show a order detail', async ({ client }) => {
  const response = await client.get('/orders/1').end()

  response.assertStatus(204)
})
