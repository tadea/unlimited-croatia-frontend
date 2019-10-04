import React from "react";
import "./index.scss";
import "./App.scss";
import Home from "./components/Home.js";
import About from "./components/About.js";
import LocationsContainer from "./containers/LocationsContainer.js";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar.js"

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route excat path="/locations" component={LocationsContainer} />
        </Switch>
      </div>
    )
  }
}

export default App;
