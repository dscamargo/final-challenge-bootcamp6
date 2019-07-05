'use strict'

const Type = use('App/Models/Type')

class TypeController {
  async show ({ params }) {
    const { id } = params

    const types = await Type.query()
      .where('product_id', id)
      .orderBy('id', 'asc')
      .fetch()

    return types
  }
}

module.exports = TypeController
