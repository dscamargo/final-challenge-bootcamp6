import api from "../../services/api";

import { call, put } from "redux-saga/effects";

import { Creators as OrdersListActions } from "../ducks/orders";

export function* getOrdersList() {
  try {
    const response = yield call(api.get, "/orders");
    yield put(OrdersListActions.getOrdersListSuccess(response.data));
  } catch (err) {
    yield put(OrdersListActions.getOrdersListFailure(`Orders Saga: ${err}`));
  }
}
