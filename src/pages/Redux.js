import React from "react";
import { Provider } from "react-redux";
import { CounterButtonRedux } from "../CounterButtonRedux";
import { store } from "../store";

export const Redux = () => {
  return (
    <Provider store={store}>
      <h1>Redux</h1>
      <h2>Implement Counter with Redux</h2>
      <CounterButtonRedux />
    </Provider>
  );
};
