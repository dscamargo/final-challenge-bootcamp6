'use strict'
const Antl = use('Antl')

class ForgotPasswordUpdate {
  get validateAll () {
    return true
  }
  get message () {
    return Antl.list('validation.json')
  }
  get rules () {
    return {
      redirect_url: 'required',
      password: 'required|confirmed'
    }
  }
}

module.exports = ForgotPasswordUpdate
