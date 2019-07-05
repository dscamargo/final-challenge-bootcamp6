import api from "../../services/api";

import { call, put } from "redux-saga/effects";

import { Creators as ProductsActions } from "../ducks/products";

export function* getProductsList() {
  try {
    const response = yield call(api.get, "/products");

    yield put(ProductsActions.getProductsListSuccess(response.data));
  } catch (err) {
    console.tron.log(err);
  }
}
