import api from "../../services/api";

import { call, put } from "redux-saga/effects";

import { Creators as SizesListActions } from "../ducks/sizes";

export function* getSizesList(action) {
  try {
    const response = yield call(api.get, `/sizes/${action.payload.id}`);
    yield put(SizesListActions.getSizesListSuccess(response.data));
  } catch (err) {
    yield put(SizesListActions.getSizesListFailure(`Sizes Saga: ${err}`));
  }
}
