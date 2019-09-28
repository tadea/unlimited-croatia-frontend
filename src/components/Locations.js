import React from "react";

const Locations = props => {
  return (
    <div>
      {props.locations.map(location => (
        <li key={location.id}>
          {location.name} - {location.city}
        </li>
      ))}
    </div>
  );
};

export default Locations;
