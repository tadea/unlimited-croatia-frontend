import React from "react";
import BeachesContainer from '../containers/BeachesContainer.js'

const LocationShow = (props) => {
  console.log(props);

  let location = props.locations[props.match.params.id - 1]
  console.log(location)

  return (
    <div>
      <li>
        {location ? location.name : null} - {location ? location.city : null}
      </li>
      <BeachesContainer location={location} />
    </div>
  );
};

export default LocationShow;
