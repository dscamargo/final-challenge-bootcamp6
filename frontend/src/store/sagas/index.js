import { all, takeLatest } from "redux-saga/effects";

import { Types as AuthTypes } from "../ducks/auth";
import { SignIn, SignOut } from "./auth";

import { Types as ForgotPassword } from "../ducks/forgotPassword";
import { getNewPassword } from "./forgotPassword";

import { Types as DeliveryActions } from "../ducks/delivery";
import { getDelivery } from "./delivery";

import { Types as OrdersListActions } from "../ducks/orders";
import { getOrdersList } from "./orders";

import { Types as UserActions } from "../ducks/user";
import { searchUser } from "./user";

export default function* rootSaga() {
  yield all([
    takeLatest(AuthTypes.SIGN_IN_REQUEST, SignIn),
    takeLatest(AuthTypes.SIGN_OUT_SUCCESS, SignOut),
    takeLatest(UserActions.LOAD_USER_REQUEST, searchUser),
    takeLatest(ForgotPassword.GET_REQUEST, getNewPassword),
    takeLatest(DeliveryActions.GET_REQUEST, getDelivery),
    takeLatest(OrdersListActions.GET_REQUEST, getOrdersList)
  ]);
}
