import api from "../../services/api";
import { actions as toastrActions } from "react-redux-toastr";

import { call, put } from "redux-saga/effects";

import { Creators as DeliveryActions } from "../ducks/delivery";
import { Creators as OrdersListActions } from "../ducks/orders";

export function* getDelivery(action) {
  const { id } = action.payload;
  try {
    yield call(api.put, `/orders/${id}`);
    yield put(DeliveryActions.getDeliverySuccess());
    yield put(OrdersListActions.getOrdersListRequest());
    yield put(
      toastrActions.add({
        type: "success",
        title: "Sucesso",
        message: "Pedido saiu para entrega."
      })
    );
  } catch (err) {
    yield put(
      toastrActions.add({
        type: "error",
        title: "Falha",
        message: "Erro ao enviar pedido para entrega."
      })
    );
  }
}
