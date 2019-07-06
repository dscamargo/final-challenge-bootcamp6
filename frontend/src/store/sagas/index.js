import { all, takeLatest } from "redux-saga/effects";

import { Types as AuthTypes } from "../ducks/auth";
import { SignIn, SignOut } from "./auth";

import { Types as ForgotPassword } from "../ducks/forgotPassword";
import { getNewPassword } from "./forgotPassword";

import { Types as DeliveryActions } from "../ducks/delivery";
import { getDelivery } from "./delivery";

import { Types as OrdersListActions } from "../ducks/orders";
import { getOrdersList } from "./orders";

import { searchUser } from "./user";

export default function* rootSaga() {
  yield all([
    searchUser(),
    takeLatest(AuthTypes.SIGN_IN_REQUEST, SignIn),
    takeLatest(AuthTypes.SIGN_OUT_SUCCESS, SignOut),
    takeLatest(ForgotPassword.GET_REQUEST, getNewPassword),
    takeLatest(DeliveryActions.GET_REQUEST, getDelivery),
    takeLatest(OrdersListActions.GET_REQUEST, getOrdersList)
  ]);
}
