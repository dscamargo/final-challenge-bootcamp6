const { test, trait } = use("Test/Suite")("Create User");

trait("Test/ApiClient");

test("should be able to create a user", async ({ client }) => {
  const response = await client
    .post("/users")
    .send({
      username: "Teste",
      email: "teste@teste.com.br",
      password: "teste",
      password_confirmation: "teste",
      admin: false
    })
    .end();

  response.assertStatus(200);
  response.assertJSONSubset({
    username: "Teste",
    email: "teste@teste.com.br"
  });
});

test("should not be able to create a user", async ({ client, assert }) => {
  const response = await client.post("/users").end();

  response.assertStatus(400);
});
