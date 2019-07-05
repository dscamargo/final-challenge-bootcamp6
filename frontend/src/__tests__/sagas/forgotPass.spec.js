import { runSaga } from "redux-saga";
import mockAdapter from "axios-mock-adapter";
import api from "../../services/api";

import { getNewPassword } from "../../store/sagas/forgotPassword";
import { Creators as ForgotPasswordActions } from "../../store/ducks/forgotPassword";

const apiMock = new mockAdapter(api);

describe("Forgot Password Saga", () => {
  it("should be able to recovery password", async () => {
    const data = {
      token: "123",
      password: "123",
      password_confirmation: "123"
    };
    const { token, password, password_confirmation } = data;

    const dispatched = [];

    apiMock
      .onPut(`/forgot_password`, { token, password, password_confirmation })
      .reply(200);

    await runSaga(
      {
        dispatch: action => dispatched.push(action)
      },
      getNewPassword,
      { payload: { data: { token, password, password_confirmation } } }
    ).toPromise();

    expect(dispatched).toContainEqual(
      ForgotPasswordActions.getNewPasswordSuccess()
    );
  });
});
