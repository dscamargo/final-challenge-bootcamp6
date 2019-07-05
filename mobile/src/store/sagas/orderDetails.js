import api from "../../services/api";

import { call, put } from "redux-saga/effects";

import { Creators as OrderDetailsActions } from "../ducks/orderDetails";

export function* getOrderDetails(action) {
  try {
    const response = yield call(api.get, `/orders/${action.payload.id}`);
    yield put(OrderDetailsActions.getOrderDetailsSuccess(response.data));
  } catch (err) {
    yield put(
      OrderDetailsActions.getOrderDetailsFailure(`Order Details Saga: ${err}`)
    );
  }
}
