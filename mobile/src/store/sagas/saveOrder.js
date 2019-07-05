import api from "../../services/api";
import NavigationService from "../../services/navigation";

import { call, put } from "redux-saga/effects";

import { Creators as SaveOrderActions } from "../ducks/saveOrder";
import { Creators as CartActions } from "../ducks/cart";
import { Creators as TypesListActions } from "../ducks/types";
import { Creators as SizesListActions } from "../ducks/sizes";
import { ToastActionsCreators } from "react-native-redux-toast";

export function* saveOrder(action) {
  try {
    yield call(api.post, "/orders", action.payload.data);
    yield put(SaveOrderActions.saveOrderSuccess());
    NavigationService.navigate("Products");
    yield put(ToastActionsCreators.displayInfo("Pedido realizado com sucesso"));
    yield put(CartActions.clearCart());
    yield put(TypesListActions.clearTypesList());
    yield put(SizesListActions.clearSizesList());
  } catch (err) {
    yield put(SaveOrderActions.saveOrderFailure(`Save Order Saga: ${err}`));
    yield put(ToastActionsCreators.displayError("Erro ao realizar pedido"));
  }
}
