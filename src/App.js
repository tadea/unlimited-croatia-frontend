import React from "react";
import "./App.css";
import LocationsContainer from "./containers/LocationsContainer.js";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <LocationsContainer />
        </header>
      </div>
    );
  }
}

export default App;
