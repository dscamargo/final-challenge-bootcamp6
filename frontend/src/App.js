import React from "react";
import ReduxToastr from "react-redux-toastr";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import "./config/reactotron";

import GlobalStyle from "./styles/global";
import "react-toastify/dist/ReactToastify.css";
import Routes from "./routes";
import store from "./store";

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
      <ReduxToastr
        timeOut={4000}
        position="top-center"
        progressBar
        closeOnToastrClick
      />{" "}
      <GlobalStyle />
    </BrowserRouter>
  </Provider>
);

export default App;
