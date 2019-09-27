import React from "react";
import "./App.css";

class App extends React.Component {
  componentDidMount() {
    fetch("http://localhost:3001/api/v1/locations", {
      method: "GET"
    })
      .then(response => response.json())
      .then(data => console.log(data));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">App</header>
      </div>
    );
  }
}

export default App;
