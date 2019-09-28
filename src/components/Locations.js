import React from "react";
import { Route, Link } from 'react-router-dom'
import LocationShow from "./LocationShow.js";

const Locations = (props) => {

  return (
    <div>
      {props.locations.map(location =>
        <div key={location.id}>
          <Link to={`/locations/${location.id}`}>{location.name}</Link>
        </div>)}
    </div>
  );
};

export default Locations;

