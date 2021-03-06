import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import Reducers from "./reducers";

const store = createStore(Reducers, compose(applyMiddleware(thunk)));

export type ReducerType = ReturnType<typeof Reducers>;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
