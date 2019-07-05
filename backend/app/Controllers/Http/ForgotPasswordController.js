'use strict'

const User = use('App/Models/User')
const crypto = require('crypto')
const moment = require('moment')
const Kue = use('Kue')
const Job = use('App/Jobs/ForgotPasswordMail')

class ForgotPasswordController {
  async store ({ request, response }) {
    const { email, redirect_url } = request.only(['email', 'redirect_url'])

    try {
      const user = await User.findByOrFail('email', email)
      user.token = crypto.randomBytes(10).toString('hex')
      user.token_created_at = new Date()

      await user.save()

      Kue.dispatch(
        Job.key,
        { token: user.token, email, redirect_url },
        { attempts: 3 }
      )

      return response
        .status(200)
        .send({ success: { message: 'Email enviado com sucesso.' } })
    } catch (error) {
      return response
        .status(error.status)
        .send({ error: { message: 'Erro ao resetar senha.' } })
    }
  }

  async update ({ request, response }) {
    try {
      const { token, password } = request.all()
      const user = await User.findByOrFail('token', token)

      const tokenExpired = moment()
        .subtract('2', 'days')
        .isAfter(user.token_created_at)

      if (tokenExpired) {
        return response
          .status(401)
          .send({ error: { message: 'Token expirou.' } })
      }

      user.token = null
      user.token_created_at = null
      user.password = password
      await user.save()
      return response
        .status(200)
        .send({ success: { message: 'Senha alterada com sucesso.' } })
    } catch (error) {
      return response
        .status(error.status)
        .send({ error: { message: 'Erro ao resetar senha.' } })
    }
  }
}

module.exports = ForgotPasswordController
