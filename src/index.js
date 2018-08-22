import { Provider } from "react-redux";
import Router from "./Router";
import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import storeFactory from './store';

const store = storeFactory();
window.store = store;

ReactDOM.render(
  <Provider store={ store }>
    <Router />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();