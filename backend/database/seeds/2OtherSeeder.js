"use strict";

const Product = use("App/Models/Product");
const Type = use("App/Models/Type");

class OtherSeeder {
  async run() {
    const product = await Product.create({
      name: "Lasanha",
      image: "lasanha.jpg",
      description: "Lasanhas com diferentes molhos para te satisfazer.",
      timeToReady: "15 minutos"
    });

    const types = [
      {
        image: "lasanha-carne.png",
        name: "Carne",
        product_id: product.id
      },
      {
        image: "lasanha-frango.png",
        name: "Frango",
        product_id: product.id
      }
    ];
    const sizes = [
      [
        {
          image: "lasanha-carne.png",
          name: "Grande",
          price: "25.00"
        },
        {
          image: "lasanha-carne.png",
          name: "Médio",
          price: "15.00"
        },
        {
          image: "lasanha-carne.png",
          name: "Pequeno",
          price: "7.50"
        }
      ],
      [
        {
          image: "lasanha-frango.png",
          name: "Grande",
          price: "30.00"
        },
        {
          image: "lasanha-frango.png",
          name: "Médio",
          price: "20.00"
        },
        {
          image: "lasanha-frango.png",
          name: "Pequeno",
          price: "10.00"
        }
      ]
    ];

    for (let index = 0; index < types.length; index++) {
      const type = await Type.create(types[index]);
      await type.sizes().createMany(sizes[index]);
    }
  }
}

module.exports = OtherSeeder;
