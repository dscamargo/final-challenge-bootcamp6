'use strict'

const Order = use('App/Models/Order')

class OrderController {
  async index ({ response, auth }) {
    const { admin, id } = auth.user

    let orders = Order.query()
      .with('items.size.type.product')
      .orderBy('id', 'desc')

    if (admin) {
      orders = orders
        .with('user', data => {
          return data.select(['id', 'username', 'email'])
        })
        .fetch()
      return orders
    }

    orders = orders
      .where('user_id', id)
      .orderBy('created_at', 'desc')
      .fetch()

    return orders
  }
  async store ({ response, request, auth }) {
    const { admin, id } = auth.user
    const { data, observation, address, payment_method } = request.all()
    let total = 0
    if (admin) {
      return response.status(401).send({ message: 'Acesso não permitido.' })
    }

    const order = await Order.create({
      user_id: id,
      total: '0.00',
      observation,
      address,
      payment_method,
      outToDelivery: false
    })

    await order.items().createMany(data)

    await order.load('items.size')

    const orderJSON = order.toJSON()

    orderJSON.items.map(item => {
      total += parseFloat(item.size.price)
    })

    order.total = parseFloat(total).toFixed(2)

    await order.save()

    return order
  }

  async show ({ params, response, auth }) {
    const order = await Order.query()
      .where('id', params.id)
      .with('items.size.type.product')
      .first()

    if (!auth.user.admin) {
      if (order.user_id !== auth.user.id) {
        return response.status(401).send({ message: 'Acesso não permitido.' })
      }
    }

    return order
  }
  async update ({ params, response, auth }) {
    if (!auth.current.user.admin) {
      return response.status(401).send({
        message: 'Ação não permitida.'
      })
    }
    const order = await Order.findByOrFail('id', params.id)
    const data = {
      outToDelivery: true
    }

    await order.merge(data)

    await order.save()
    return order
  }
}

module.exports = OrderController
