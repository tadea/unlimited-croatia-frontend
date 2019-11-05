import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux"; //any component that we wrap will have acces to our store
import locationReducer from "./reducers/locationReducer";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import Clock from './components/Clock'
import Locations from "./components/Locations";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(
  locationReducer,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Clock />
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
