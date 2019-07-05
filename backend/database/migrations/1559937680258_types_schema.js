'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TypesSchema extends Schema {
  up () {
    this.create('types', table => {
      table.increments()

      table
        .integer('product_id')
        .unsigned()
        .references('id')
        .inTable('products')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('name').notNullable()
      table.string('image').notNullable()
      table.string('ingredients')
      table.timestamps()
    })
  }

  down () {
    this.drop('types')
  }
}

module.exports = TypesSchema
