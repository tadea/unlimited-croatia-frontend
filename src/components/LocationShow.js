import React from "react";

const LocationShow = (props) => {
  console.log(props);

  let location = props.locations[props.match.params.id - 1]
  console.log(location)

  return (
    <li>
      {location ? location.name : null} - {location ? location.city : null}
    </li>
  );
};

export default LocationShow;
