import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import eventReducer from "./reducers/eventReducer";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

const store = createStore(eventReducer);

ReactDOM.render(
  <Provider store={store}>
  <Router>
    <App />
  </Router>
  </Provider>,
  document.getElementById("root")
);
