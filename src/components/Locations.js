import React from "react";
import { Link } from 'react-router-dom'


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

