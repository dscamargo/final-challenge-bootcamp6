'use strict'

const Antl = use('Antl')

class ForgotPasswordStore {
  get validateAll () {
    return true
  }
  get message () {
    return Antl.list('validation.json')
  }
  get rules () {
    return {
      email: 'required|email',
      redirect_url: 'required'
    }
  }
}

module.exports = ForgotPasswordStore
