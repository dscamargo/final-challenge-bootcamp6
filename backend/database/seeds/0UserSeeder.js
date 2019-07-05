"use strict";

const User = use("App/Models/User");

class UserSeeder {
  async run() {
    await User.create({
      email: "admin@admin.com.br",
      username: "admin",
      password: "admin",
      admin: true
    });
    await User.create({
      email: "douglas@email.com.br",
      username: "Douglas Simon Camargo",
      password: "douglas",
      admin: false
    });
    await User.create({
      email: "test@test.com.br",
      username: "Test",
      password: "test",
      admin: false
    });
  }
}

module.exports = UserSeeder;
