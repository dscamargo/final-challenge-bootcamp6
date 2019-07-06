"use strict";

const User = use("App/Models/User");

const { test, trait } = use("Test/Suite")("Types");

trait("Test/ApiClient");
trait("Auth/Client");

test("should be able to list all types", async ({ client }) => {
  const user = await User.find(1);
  const response = await client
    .get("/types/1")
    .loginVia(user)
    .end();

  response.assertStatus(200);
});
