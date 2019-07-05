import api from "../../services/api";
import { actions as toastrActions } from "react-redux-toastr";

import { call, put } from "redux-saga/effects";

import { Creators as ForgotPasswordActions } from "../ducks/forgotPassword";

export function* getNewPassword(action) {
  const { token, password, password_confirmation } = action.payload.data;
  try {
    yield call(api.put, `/forgot_password`, {
      token,
      password,
      password_confirmation
    });
    yield put(ForgotPasswordActions.getNewPasswordSuccess());
    yield put(
      toastrActions.add({
        type: "success",
        title: "Sucesso",
        message: "Senha alterada com sucesso."
      })
    );
  } catch (err) {
    yield put(
      toastrActions.add({
        type: "error",
        title: "Falha",
        message: "Erro na recuperação da senha"
      })
    );
  }
}
