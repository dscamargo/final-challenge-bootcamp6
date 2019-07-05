import api from "../../services/api";

import { call, put } from "redux-saga/effects";

import { Creators as ForgotPasswordActions } from "../ducks/forgotPassword";
import NavigationService from "../../services/navigation";
import { ToastActionsCreators } from "react-native-redux-toast";

export function* getForgotPassword(action) {
  const { email, redirect_url } = action.payload.data;
  try {
    yield call(api.post, `/forgot_password`, {
      email,
      redirect_url
    });
    yield put(ForgotPasswordActions.getForgotPasswordSuccess());
    yield put(ToastActionsCreators.displayInfo("Email enviado com sucesso."));
    NavigationService.navigate("Login");
  } catch (err) {
    yield put(
      ForgotPasswordActions.getForgotPasswordFailure(
        `Forgot Password Saga: ${err}`
      )
    );
    yield put(
      ToastActionsCreators.displayError(
        "Erro ao recuperar senha. Verifique seu email e tente novamente."
      )
    );
  }
}
