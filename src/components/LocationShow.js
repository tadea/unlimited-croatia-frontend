import React from "react";

const LocationShow = props => {
  console.log(props);
  return (
    <li>
      {props.location.name} - {props.location.city}
    </li>
  );
};

export default LocationShow;
