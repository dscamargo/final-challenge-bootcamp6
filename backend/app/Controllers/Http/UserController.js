'use strict'

const User = use('App/Models/User')

class UserController {
  async show ({ request, response, auth }) {
    const { admin, email } = auth.current.user
    if (!admin) {
      return response.status(401).send({
        message: 'Acesso não permitido'
      })
    }

    const user = await User.findBy('email', email)
    return { username: user.username }
  }
  async store ({ request, response, auth }) {
    const { username, email, password } = request.all()

    const user = await User.create({ username, email, password, admin: false })

    return user
  }
}

module.exports = UserController
