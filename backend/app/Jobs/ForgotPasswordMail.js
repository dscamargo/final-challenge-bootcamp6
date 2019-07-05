'use strict'

const Mail = use('Mail')

class ForgotPasswordMail {
  static get concurrency () {
    return 1
  }

  static get key () {
    return 'ForgotPasswordMail-job'
  }

  async handle ({ token, email, redirect_url }) {
    await Mail.send(
      ['emails.forgot_password', 'emails.forgot_password-text'],
      {
        email,
        token,
        link: `${redirect_url}?token=${token}`
      },
      message => {
        message
          .to(email)
          .from('Pizza Don Juan | donjuanpizzaria@gmail.com')
          .subject('Recuperação de senha')
      }
    )
  }
}

module.exports = ForgotPasswordMail
