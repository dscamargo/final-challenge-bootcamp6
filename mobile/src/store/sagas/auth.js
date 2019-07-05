import { call, put } from "redux-saga/effects";
import { AsyncStorage } from "react-native";
import { ToastActionsCreators } from "react-native-redux-toast";

import { Creators as AuthActions } from "../ducks/auth";
import api from "../../services/api";
import NavigationService from "../../services/navigation";

export function* InitCheckAuth() {
  const token = yield call([AsyncStorage, "getItem"], "@Desafio:token");

  if (token) {
    yield put(AuthActions.signInSuccess(token));
  }

  yield put(AuthActions.initCheckSuccess());
}

export function* SignOut() {
  yield call([AsyncStorage, "clear"]);
  yield put(ToastActionsCreators.displayInfo("Logout realizado com sucesso."));
}

export function* SignIn(action) {
  const { email, password } = action.payload;

  try {
    const response = yield call(api.post, `/sessions`, {
      email,
      password
    });
    const {
      admin,
      user: { username }
    } = response.data;
    if (!admin) {
      yield call(
        [AsyncStorage, "setItem"],
        "@Desafio:token",
        response.data.token
      );
      yield put(AuthActions.signInSuccess(response.data.token));

      NavigationService.navigate("Products");

      yield put(ToastActionsCreators.displayInfo(`Bem vindo, ${username}.`));
    } else {
      yield put(AuthActions.signInFailure("Login with administrator account."));
      yield put(
        ToastActionsCreators.displayWarning(
          "Acesso não permitido para administradores."
        )
      );
    }
  } catch (err) {
    yield put(AuthActions.signInFailure(`Auth Saga: ${err}`));

    yield put(ToastActionsCreators.displayError("Erro ao realizar login"));
  }
}
