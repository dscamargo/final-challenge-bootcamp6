import { all, takeLatest } from "redux-saga/effects";

import { Types as ProductsTypes } from "../ducks/products";
import { getProductsList } from "./products";

import { Types as OrdersListTypes } from "../ducks/orders";
import { getOrdersList } from "./orders";

import { Types as SaveOrderTypes } from "../ducks/saveOrder";
import { saveOrder } from "./saveOrder";

import { Types as OrderDetailsTypes } from "../ducks/orderDetails";
import { getOrderDetails } from "./orderDetails";

import { Types as TypesListTypes } from "../ducks/types";
import { getTypesList } from "./types";

import { Types as SizeListTypes } from "../ducks/sizes";
import { getSizesList } from "./sizes";

import { Types as AuthTypes } from "../ducks/auth";
import { SignIn, InitCheckAuth, SignOut } from "./auth";

import { Types as SignupTypes } from "../ducks/signup";
import { Signup } from "./signup";

import { Types as ForgotPasswordActions } from "../ducks/forgotPassword";
import { getForgotPassword } from "./forgotPassword";

export default function* rootSaga() {
  yield all([
    InitCheckAuth(),
    takeLatest(ProductsTypes.GET_REQUEST, getProductsList),
    takeLatest(OrdersListTypes.GET_REQUEST, getOrdersList),
    takeLatest(OrderDetailsTypes.GET_REQUEST, getOrderDetails),
    takeLatest(TypesListTypes.GET_REQUEST, getTypesList),
    takeLatest(SizeListTypes.GET_REQUEST, getSizesList),
    takeLatest(SaveOrderTypes.SAVE_REQUEST, saveOrder),
    takeLatest(AuthTypes.SIGN_IN_REQUEST, SignIn),
    takeLatest(AuthTypes.SIGN_OUT_SUCCESS, SignOut),
    takeLatest(SignupTypes.GET_REQUEST, Signup),
    takeLatest(ForgotPasswordActions.GET_REQUEST, getForgotPassword)
  ]);
}
