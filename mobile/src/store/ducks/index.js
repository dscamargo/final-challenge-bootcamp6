import { combineReducers } from "redux";

import { toastReducer as toast } from "react-native-redux-toast";
import auth from "./auth";
import forgotPassword from "./forgotPassword";
import signup from "./signup";
import products from "./products";
import types from "./types";
import sizes from "./sizes";
import cart from "./cart";
import modal from "./modal";
import orders from "./orders";
import orderDetails from "./orderDetails";
import saveOrder from "./saveOrder";

const reducers = combineReducers({
  toast,
  auth,
  forgotPassword,
  signup,
  products,
  types,
  sizes,
  cart,
  orders,
  orderDetails,
  modal,
  saveOrder
});

export default reducers;
