import api from "../../services/api";

import { call, put } from "redux-saga/effects";

import { Creators as TypesActions } from "../ducks/types";

export function* getTypesList(action) {
  try {
    const response = yield call(api.get, `/types/${action.payload.id}`);
    yield put(TypesActions.getTypesListSuccess(response.data));
  } catch (err) {
    yield put(TypesActions.getTypesListFailure(`Types Saga: ${err}`));
  }
}
