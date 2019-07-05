'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const moment = require('moment')

class Item extends Model {
  static formatDates (field, value) {
    return moment(value)
      .utc()
      .format('YYYY-MM-DD HH:mm:ssZZ')
  }
  order () {
    return this.belongsTo('App/Models/Order')
  }
  size () {
    return this.belongsTo('App/Models/Size')
  }
}

module.exports = Item
