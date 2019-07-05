"use strict";

const { test, trait } = use("Test/Suite")("Sizes");
const User = use("App/Models/User");

trait("Test/ApiClient");
trait("Auth/Client");

test("should be able to list all sizes", async ({ client }) => {
  const user = await User.find(1);
  const response = await client
    .get("/sizes/1")
    .loginVia(user)
    .end();

  response.assertStatus(200);
});
