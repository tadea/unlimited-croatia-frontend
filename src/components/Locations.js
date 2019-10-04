import React from "react";
import { Route, Link } from 'react-router-dom'
import LocationShow from "./LocationShow.js";

const Locations = (props) => {

  return (
    <div>
      {props.locations.map(location =>
        <div className="LocationCard" key={location.id}>
          <h4><Link to={`/locations/${location.id}`}>{location.city}</Link></h4>
        </div>)}
    </div>
  );
};

export default Locations;

