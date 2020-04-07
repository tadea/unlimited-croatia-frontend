import React from "react";
import "../App.scss";
import Clock from "./Clock";

const Home = () => {
  return (
    <div className="banner">
      <div className="row">
        <h1>UNLIMITED CROATIA</h1>
        <p>Full of Life</p>
      </div>
      <Clock />
    </div>
  );
};

export default Home;
