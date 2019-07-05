'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const moment = require('moment')

class Product extends Model {
  static formatDates (field, value) {
    return moment(value)
      .utc()
      .format('YYYY-MM-DD HH:mm:ssZZ')
  }
  types () {
    return this.hasMany('App/Models/Type')
  }
}

module.exports = Product
