'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const moment = require('moment')

class Size extends Model {
  static formatDates (field, value) {
    return moment(value)
      .utc()
      .format('YYYY-MM-DD HH:mm:ssZZ')
  }
  type () {
    return this.belongsTo('App/Models/Type')
  }
  items () {
    return this.hasMany('App/Models/Item')
  }
}

module.exports = Size
