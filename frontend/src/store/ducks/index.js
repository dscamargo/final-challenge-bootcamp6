import { combineReducers } from "redux";
import { reducer as toastr } from "react-redux-toastr";
import { connectRouter } from "connected-react-router";

import auth from "./auth";
import forgotPassword from "./forgotPassword";
import delivery from "./delivery";
import orders from "./orders";

export default history =>
  combineReducers({
    auth,
    forgotPassword,
    orders,
    delivery,
    toastr,
    router: connectRouter(history)
  });
