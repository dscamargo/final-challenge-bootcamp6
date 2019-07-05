'use strict'

const Model = use('Model')
const moment = require('moment')

class Order extends Model {
  static boot () {
    super.boot()
    this.addHook('afterCreate', 'OrderHook.sendWs')
  }
  static formatDates (field, value) {
    return moment(value)
      .utc()
      .format('YYYY-MM-DD HH:mm:ssZZ')
  }

  items () {
    return this.hasMany('App/Models/Item')
  }
  user () {
    return this.belongsTo('App/Models/User')
  }
}

module.exports = Order
