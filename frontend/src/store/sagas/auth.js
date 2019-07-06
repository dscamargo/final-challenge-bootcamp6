import { call, put } from "redux-saga/effects";
import { actions as toastrActions } from "react-redux-toastr";
import { push } from "connected-react-router";

import api from "../../services/api";
import { Creators as AuthActions } from "../ducks/auth";

export function* SignOut() {
  localStorage.removeItem("@Desafio:token");
  yield put(push("/signin"));
}

export function* SignIn(action) {
  const { email, password } = action.payload;

  try {
    const response = yield call(api.post, "sessions", { email, password });
    if (response.data.admin) {
      localStorage.setItem("@Desafio:token", response.data.token);
      yield put(AuthActions.signInSuccess(response.data.token));
      yield put(push("/"));
      yield put(
        toastrActions.add({
          type: "success",
          title: "Login",
          message: `Bem vindo, ${response.data.user.username}.`
        })
      );
    } else {
      yield put(
        toastrActions.add({
          type: "error",
          title: "Falha no login",
          message: "Acesso não permitido."
        })
      );
    }
  } catch (err) {
    yield put(
      toastrActions.add({
        type: "error",
        title: "Falha no login",
        message: "Credenciais inválidas."
      })
    );
    yield put(AuthActions.signInFailure("Erro na autenticação"));
  }
}
