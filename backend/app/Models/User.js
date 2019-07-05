'use strict'

const Model = use('Model')

const Hash = use('Hash')
const moment = require('moment')

class User extends Model {
  static formatDates (field, value) {
    return moment(value)
      .utc()
      .format('YYYY-MM-DD HH:mm:ssZZ')
  }
  static boot () {
    super.boot()
    this.addHook('beforeSave', async userInstance => {
      if (userInstance.dirty.password) {
        userInstance.password = await Hash.make(userInstance.password)
      }
    })
  }
  tokens () {
    return this.hasMany('App/Models/Token')
  }
  orders () {
    return this.hasMany('App/Models/Order')
  }
}

module.exports = User
