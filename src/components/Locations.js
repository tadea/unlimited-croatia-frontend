import React from "react";
import LocationShow from "./LocationShow.js";

const Locations = props => {
  return (
    <div>
      {props.locations.map(location => (
        <div key={location.id}>
          <LocationShow location={location} />
        </div>
      ))}
    </div>
  );
};

export default Locations;
