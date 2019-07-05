'use strict'

const Antl = use('Antl')

class OrderStore {
  get validateAll () {
    return true
  }
  get messages () {
    return Antl.list('validation')
  }
  get rules () {
    return {
      data: 'required',
      observation: 'required',
      address: 'required'
    }
  }
}

module.exports = OrderStore
