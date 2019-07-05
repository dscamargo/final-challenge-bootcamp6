'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const moment = require('moment')

class Type extends Model {
  static formatDates (field, value) {
    return moment(value)
      .utc()
      .format('YYYY-MM-DD HH:mm:ssZZ')
  }
  product () {
    return this.belongsTo('App/Models/Product')
  }
  sizes () {
    return this.hasMany('App/Models/Size')
  }
}

module.exports = Type
