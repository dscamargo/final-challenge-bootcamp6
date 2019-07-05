import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import createStore from "redux-mock-store";

import Login from "../../pages/Login";

const mockStore = createStore();

const INITIAL_STATE = {
  email: "",
  password: ""
};

const store = mockStore(INITIAL_STATE);

describe("Login Page", () => {
  it("shoube render without crash", () => {
    const wrapper = mount(
      <Provider store={store}>
        <Login />
      </Provider>
    );

    expect(wrapper.find("input").exists()).toBe(true);
    expect(wrapper.find("input").exists()).toBe(true);
    expect(wrapper.find("button").exists()).toBe(true);
  });
});
