'use strict'

const User = use('App/Models/User')

class UserController {
  async store ({ request, response, auth }) {
    const { username, email, password } = request.all()

    const user = await User.create({ username, email, password, admin: false })

    return user
  }
}

module.exports = UserController
