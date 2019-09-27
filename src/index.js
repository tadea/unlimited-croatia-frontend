import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux"; //any component that we wrap will have acces to our store

ReactDOM.render(<App />, document.getElementById("root"));
