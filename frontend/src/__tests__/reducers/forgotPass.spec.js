import forgotPasswordReducers, {
  Creators as forgotPasswordActions
} from "../../store/ducks/forgotPassword";

describe("Delivery Reducer", () => {
  it("should be able to call reducer forgot password request", () => {
    const state = forgotPasswordReducers(
      { loading: false, data: {} },
      forgotPasswordActions.getNewPasswordRequest({
        email: "email@email.com.br"
      })
    );

    expect(state.loading).toBe(true);
    expect(state.data).toEqual({ email: "email@email.com.br" });
  });
  it("should be able to call reducer forgot password sucess", () => {
    const state = forgotPasswordReducers(
      { loading: true, error: true },
      forgotPasswordActions.getNewPasswordSuccess()
    );

    expect(state.loading).toBe(false);
    expect(state.error).toBe(false);
  });
  it("should be able to call reducer forgot password failure", () => {
    const state = forgotPasswordReducers(
      { loading: true, error: false, message: null },
      forgotPasswordActions.getNewPasswordFailure("error")
    );

    expect(state.loading).toBe(false);
    expect(state.error).toBe(true);
    expect(state.message).toBe("error");
  });
});
