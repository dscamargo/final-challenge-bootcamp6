'use strict'

const Product = use('App/Models/Product')
const Type = use('App/Models/Type')

class DrinkSeeder {
  async run () {
    const product = await Product.create({
      name: 'Bebidas não alcoólicas',
      image: 'bebida_nao_alcoolica.png',
      description: 'Refrigerantes, sucos, chá gelado, energéticos e água.',
      timeToReady: '5 minutos'
    })

    const types = [
      {
        image: 'coca-cola-2litros.png',
        name: 'Refrigerante',
        product_id: product.id
      }
    ]

    const sizes = [
      // INDEX 0
      [
        {
          image: 'coca-cola-2litros.png',
          name: '2 Litros',
          price: '10.00'
        },
        {
          image: 'coca-cola-600ml.png',
          name: '600 ML',
          price: '7.00'
        },
        {
          image: 'coca-cola-350ml.png',
          name: '350 ML',
          price: '5.00'
        }
      ]
    ]

    for (let index = 0; index < types.length; index++) {
      const type = await Type.create(types[index])
      await type.sizes().createMany(sizes[index])
    }
  }
}

module.exports = DrinkSeeder
