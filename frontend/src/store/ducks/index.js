import { combineReducers } from "redux";
import { reducer as toastr } from "react-redux-toastr";
import { connectRouter } from "connected-react-router";

import auth from "./auth";
import forgotPassword from "./forgotPassword";
import delivery from "./delivery";
import orders from "./orders";
import user from "./user";

export default history =>
  combineReducers({
    auth,
    user,
    forgotPassword,
    orders,
    delivery,
    toastr,
    router: connectRouter(history)
  });
