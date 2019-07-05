import authReducers, { Creators as AuthActions } from "../../store/ducks/auth";

describe("Authentication Reducer", () => {
  it("should be able to call reducer auth request", () => {
    const state = authReducers(
      { loading: false, email: null, password: null },
      AuthActions.signInRequest("email@email.com.br", "password")
    );

    expect(state.loading).toBe(true);
    expect(state.email).toEqual("email@email.com.br");
    expect(state.password).toEqual("password");
  });
  it("should be able to call reducer auth success", () => {
    const state = authReducers(
      { token: null, loading: false, signedIn: false },
      AuthActions.signInSuccess("token")
    );

    expect(state.loading).toBe(false);
    expect(state.token).toEqual("token");
    expect(state.signedIn).toEqual(true);
  });
  it("should be able to call reducer auth failure", () => {
    const state = authReducers(
      { loading: true, error: false, message: null, token: "123" },
      AuthActions.signInFailure("error")
    );

    expect(state.loading).toBe(false);
    expect(state.message).toEqual("error");
    expect(state.error).toEqual(true);
    expect(state.token).toEqual(null);
  });
  it("should be able to call reducer auth logout", () => {
    const state = authReducers(
      {
        signedIn: true,
        token: "123",
        error: true
      },
      AuthActions.logout()
    );

    expect(state.error).toEqual(false);
    expect(state.token).toEqual(null);
    expect(state.signedIn).toEqual(false);
  });
});
