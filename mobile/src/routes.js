import React from "react";
import { createAppContainer, createStackNavigator } from "react-navigation";

import LoginScreen from "./pages/Login";
import SignupScreen from "./pages/Signup";
import ProductsScreen from "./pages/Products";
import TypesScreen from "./pages/Types";
import CartScreen from "./pages/Cart";
import OrderScreen from "./pages/Order";
import SizesScreen from "./pages/Sizes";
import ProfileScreen from "./pages/Profile";
import OrderDetailsScreen from "./pages/OrderDetails";
import ForgotPasswordScreen from "./pages/ForgotPassword";

const PublicRoute = createStackNavigator(
  {
    Login: LoginScreen,
    Signup: SignupScreen,
    ForgotPassword: ForgotPasswordScreen
  },
  { initialRouteName: "Login", headerMode: "none" }
);

const PrivateRoute = createStackNavigator(
  {
    Profile: ProfileScreen,
    OrderDetails: OrderDetailsScreen,
    Products: ProductsScreen,
    Types: TypesScreen,
    Sizes: SizesScreen,
    Cart: CartScreen,
    Order: OrderScreen
  },
  { initialRouteName: "Products", headerMode: "none" }
);

export default function createNavigator(isLogged) {
  return createAppContainer(
    createStackNavigator(
      {
        Public: PublicRoute,
        Private: PrivateRoute
      },
      {
        initialRouteName: isLogged ? "Private" : "Public",
        headerMode: "none"
      }
    )
  );
}
