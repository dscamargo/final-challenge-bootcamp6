import api from "../../services/api";

import { call, put } from "redux-saga/effects";

import { Creators as UserActions } from "../ducks/user";

export function* searchUser() {
  try {
    const response = yield call(api.get, `/users`);
    yield put(UserActions.loadUserSucess(response.data));
  } catch (err) {
    yield put(UserActions.loadUserFailure("Erro ao carregar dados do usuário"));
  }
}
