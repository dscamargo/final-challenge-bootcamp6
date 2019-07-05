import React from "react";
import { Switch, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";

import history from "./history";
import PrivateRoute from "./private";
import GuestRoute from "./guest";

import Login from "../pages/Login";
import Order from "../pages/Dashboard";
import ForgotPassword from "../pages/ForgotPassword";

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <GuestRoute path="/signin" component={Login} />
      <PrivateRoute exact path="/" component={Order} />
      <Route path="/forgot_password" component={ForgotPassword} />
    </Switch>
  </ConnectedRouter>
);

export default Routes;
