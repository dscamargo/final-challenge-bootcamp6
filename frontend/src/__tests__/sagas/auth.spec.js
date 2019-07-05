import { runSaga } from "redux-saga";
import mockAdapter from "axios-mock-adapter";
import api from "../../services/api";

import { SignIn, SignOut } from "../../store/sagas/auth";
import { Creators as AuthActions } from "../../store/ducks/auth";

const apiMock = new mockAdapter(api);

describe("SignIn Saga", () => {
  it("should be able to authenticate", async () => {
    const getItemMock = jest.fn();

    global.localStorage.__proto__.setItem = getItemMock;
    const dispatched = [];
    const data = { email: "email@email.com.br", password: "email" };
    const { email, password } = data;

    apiMock.onPost("/sessions", { email, password }).reply(200, {
      admin: true,
      token: "123",
      user: { username: "admin" }
    });

    await runSaga(
      {
        dispatch: action => dispatched.push(action)
      },
      SignIn,
      { payload: { email, password } }
    ).toPromise();

    expect(dispatched[0]).toEqual(AuthActions.signInSuccess("123"));
    expect(getItemMock).toHaveBeenCalledWith("@Desafio:token", "123");
  });
  it("should not be able to authenticate when user isn't administrador", async () => {
    const dispatched = [];
    const data = { email: "email@email.com.br", password: "email" };
    const { email, password } = data;

    apiMock.onPost("/sessions", { email, password }).reply(401, {
      admin: false,
      token: "123",
      user: { username: "admin" }
    });

    await runSaga(
      {
        dispatch: action => dispatched.push(action)
      },
      SignIn,
      { payload: { email, password } }
    ).toPromise();

    expect(dispatched[0]).toEqual(
      AuthActions.signInFailure("Erro na autenticação")
    );
  });
});

describe("SignOut Saga", () => {
  it("should be able to logout", async () => {
    const removeItemMock = jest.fn();

    global.localStorage.__proto__.removeItem = removeItemMock;
    const dispatched = [];

    await runSaga(
      {
        dispatch: action => dispatched.push(action)
      },
      SignOut
    ).toPromise();

    expect(removeItemMock).toHaveBeenCalledWith("@Desafio:token");
  });
});
