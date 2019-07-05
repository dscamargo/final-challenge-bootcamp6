'use strict'

const Size = use('App/Models/Size')

class SizeController {
  async show ({ params }) {
    const { id } = params

    const sizes = await Size.query()
      .where('type_id', id)
      .with('type.product', item => {
        return item.orderBy('id', 'asc')
      })
      .orderBy('id', 'desc')
      .fetch()

    return sizes
  }
}

module.exports = SizeController
