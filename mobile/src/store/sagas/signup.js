import { call, put } from "redux-saga/effects";
import { ToastActionsCreators } from "react-native-redux-toast";

import NavigationService from "../../services/navigation";
import api from "../../services/api";
import { Creators as SignupActions } from "../ducks/signup";

export function* Signup(action) {
  try {
    const response = yield call(api.post, "/users", action.payload.data);
    yield put(SignupActions.createAccountSuccess(response.status));
    yield put(ToastActionsCreators.displayInfo("Usuário criado com sucesso."));
    NavigationService.navigate("Login");
  } catch (err) {
    yield put(SignupActions.createAccountFailure(`Signup Saga: ${err}`));
    yield put(ToastActionsCreators.displayError("Erro ao criar usuário."));
  }
}
