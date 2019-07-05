'use strict'

const Product = use('App/Models/Product')

class ProductController {
  async index () {
    let products = Product.query().fetch()

    return products
  }
}

module.exports = ProductController
