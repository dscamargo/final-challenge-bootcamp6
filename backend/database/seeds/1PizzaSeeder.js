"use strict";

const Product = use("App/Models/Product");
const Type = use("App/Models/Type");

class PizzaSeeder {
  async run() {
    const product = await Product.create({
      name: "Pizza",
      image: "pizza.png",
      description:
        "Variados sabores de pizza em até 4 tamanhos diferentes de fome.",
      timeToReady: "30 minutos"
    });

    const types = [
      {
        product_id: product.id,
        name: "5 Queijos",
        image: "5_queijos.png",
        ingredients:
          "Molho ao sugo, mussarela, parmesão, provolone, catupiry, gorgonzola e orégano."
      },
      {
        product_id: product.id,
        name: "Calabresa",
        image: "calabresa.png",
        ingredients:
          "Molho ao sugo, mussarela, cebola, azeitona, calabresa fatiada e orégano."
      },
      {
        product_id: product.id,
        name: "Frango",
        image: "frango.png",
        ingredients: "Molho ao sugo, mussarela, frango desfiado e orégano."
      },
      {
        product_id: product.id,
        name: "Moda da Casa",
        image: "moda_da_casa.png",
        ingredients:
          "Molho ao sugo, mussarela, calabresa, cebola, ovo cozido e orégano."
      },
      {
        product_id: product.id,
        name: "Napolitana",
        image: "napolitana.png",
        ingredients: "Molho ao sugo, mussarela, tomate em rodelas e orégano."
      },
      {
        product_id: product.id,
        name: "Portuguesa",
        image: "portuguesa.png",
        ingredients:
          "Molho ao sugo, mussarela, presunto, cebola em rodelas, ovo cozido e orégano."
      },
      {
        product_id: product.id,
        name: "Marguerita",
        image: "marguerita.png",
        ingredients:
          "Molho ao sugo, mussarela, tomate, manjericão, alho, azeite de oliva e orégano."
      },
      {
        product_id: product.id,
        name: "Lombo com abacaxi",
        image: "lombo_com_abacaxi.png",
        ingredients: "Molho ao sugo, mussarela, lombo defumado e abacaxi."
      },
      {
        product_id: product.id,
        name: "Prestígio",
        image: "prestigio.png",
        ingredients:
          "Molho ao sugo, mussarela, leite condensado com coco e chocolate."
      },
      {
        product_id: product.id,
        name: "Tentação",
        image: "tentacao.png",
        ingredients:
          "Molho ao sugo, mussarela, leite condensado, morango em pedaços e chocolate branco."
      }
    ];

    const sizes = [
      // INDEX 0
      [
        {
          name: "25 cm",
          price: "23.90",
          image: "tamanho-p@3x.png"
        },
        {
          name: "30 cm",
          price: "30.89",
          image: "tamanho-m@3x.png"
        },
        {
          name: "35 cm",
          price: "37.50",
          image: "tamanho-g@3x.png"
        },
        {
          name: "40 cm",
          price: "43.99",
          image: "tamanho-gg@3x.png"
        }
      ],
      // INDEX 1
      [
        {
          name: "25 cm",
          price: "24.50",
          image: "tamanho-p@3x.png"
        },
        {
          name: "30 cm",
          price: "31.88",
          image: "tamanho-m@3x.png"
        },
        {
          name: "35 cm",
          price: "38.99",
          image: "tamanho-g@3x.png"
        },
        {
          name: "40 cm",
          price: "44.99",
          image: "tamanho-gg@3x.png"
        }
      ],
      // INDEX 2
      [
        {
          name: "25 cm",
          price: "25.99",
          image: "tamanho-p@3x.png"
        },
        {
          name: "30 cm",
          price: "32.99",
          image: "tamanho-m@3x.png"
        },
        {
          name: "35 cm",
          price: "39.99",
          image: "tamanho-g@3x.png"
        },
        {
          name: "40 cm",
          price: "45.99",
          image: "tamanho-gg@3x.png"
        }
      ],
      // INDEX 3
      [
        {
          name: "25 cm",
          price: "26.99",
          image: "tamanho-p@3x.png"
        },
        {
          name: "30 cm",
          price: "32.99",
          image: "tamanho-m@3x.png"
        },
        {
          name: "35 cm",
          price: "40.99",
          image: "tamanho-g@3x.png"
        },
        {
          name: "40 cm",
          price: "46.99",
          image: "tamanho-gg@3x.png"
        }
      ],
      // INDEX 4
      [
        {
          name: "25 cm",
          price: "27.99",
          image: "tamanho-p@3x.png"
        },
        {
          name: "30 cm",
          price: "33.99",
          image: "tamanho-m@3x.png"
        },
        {
          name: "35 cm",
          price: "41.99",
          image: "tamanho-g@3x.png"
        },
        {
          name: "40 cm",
          price: "47.99",
          image: "tamanho-gg@3x.png"
        }
      ],
      // INDEX 5
      [
        {
          name: "25 cm",
          price: "28.99",
          image: "tamanho-p@3x.png"
        },
        {
          name: "30 cm",
          price: "34.99",
          image: "tamanho-m@3x.png"
        },
        {
          name: "35 cm",
          price: "42.99",
          image: "tamanho-g@3x.png"
        },
        {
          name: "40 cm",
          price: "48.99",
          image: "tamanho-gg@3x.png"
        }
      ],
      // INDEX 6
      [
        {
          name: "25 cm",
          price: "28.99",
          image: "tamanho-p@3x.png"
        },
        {
          name: "30 cm",
          price: "34.99",
          image: "tamanho-m@3x.png"
        },
        {
          name: "35 cm",
          price: "42.99",
          image: "tamanho-g@3x.png"
        },
        {
          name: "40 cm",
          price: "48.99",
          image: "tamanho-gg@3x.png"
        }
      ],
      // INDEX 7
      [
        {
          name: "25 cm",
          price: "28.99",
          image: "tamanho-p@3x.png"
        },
        {
          name: "30 cm",
          price: "34.99",
          image: "tamanho-m@3x.png"
        },
        {
          name: "35 cm",
          price: "42.99",
          image: "tamanho-g@3x.png"
        },
        {
          name: "40 cm",
          price: "48.99",
          image: "tamanho-gg@3x.png"
        }
      ],
      // INDEX 8
      [
        {
          name: "25 cm",
          price: "28.99",
          image: "tamanho-p@3x.png"
        },
        {
          name: "30 cm",
          price: "34.99",
          image: "tamanho-m@3x.png"
        },
        {
          name: "35 cm",
          price: "42.99",
          image: "tamanho-g@3x.png"
        },
        {
          name: "40 cm",
          price: "48.99",
          image: "tamanho-gg@3x.png"
        }
      ],
      // INDEX 9
      [
        {
          name: "25 cm",
          price: "28.99",
          image: "tamanho-p@3x.png"
        },
        {
          name: "30 cm",
          price: "34.99",
          image: "tamanho-m@3x.png"
        },
        {
          name: "35 cm",
          price: "42.99",
          image: "tamanho-g@3x.png"
        },
        {
          name: "40 cm",
          price: "48.99",
          image: "tamanho-gg@3x.png"
        }
      ]
    ];

    for (let index = 0; index < types.length; index++) {
      const type = await Type.create(types[index]);
      await type.sizes().createMany(sizes[index]);
    }
  }
}

module.exports = PizzaSeeder;
