'use strict'

const Product = use('App/Models/Product')
const Type = use('App/Models/Type')

class AlcooholicsDrinkSeeder {
  async run () {
    const product = await Product.create({
      name: 'Bebidas alcoólicas',
      image: 'bebida_alcoolica.png',
      description: 'Cervejas artesanais, vinhos e destilados.',
      timeToReady: '5 minutos'
    })

    const types = [
      {
        image: 'cerveja.png',
        product_id: product.id,
        name: 'Cerveja'
      }
    ]

    const sizes = [
      // INDEX 0
      [
        {
          name: '275 ML',
          price: '5.00',
          image: 'cerveja-275ml.png'
        },
        {
          name: '350 ML',
          price: '10.00',
          image: 'cerveja-350ml.png'
        },
        {
          name: '600 ML',
          price: '15.00',
          image: 'cerveja-600ml.png'
        },
        {
          name: '1 Litro',
          price: '20.00',
          image: 'cerveja-1litro.png'
        }
      ]
    ]

    for (let index = 0; index < types.length; index++) {
      const type = await Type.create(types[index])
      await type.sizes().createMany(sizes[index])
    }
  }
}

module.exports = AlcooholicsDrinkSeeder
