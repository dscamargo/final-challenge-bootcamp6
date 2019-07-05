'use strict'

const User = use('App/Models/User')

class SessionController {
  async store ({ request, auth }) {
    const { email, password } = request.all()

    const token = await auth.attempt(email, password)

    let user = await User.query()
      .where('email', email)
      .first()

    user = user.toJSON()

    const { username } = user
    const data = {
      username,
      email
    }

    return { ...token, admin: user.admin, user: data }
  }
}

module.exports = SessionController
