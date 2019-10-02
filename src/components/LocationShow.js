import React from "react";
import BeachesContainer from '../containers/BeachesContainer.js'

const LocationShow = (props) => {
  console.log(props);

  let location = props.locations[props.match.params.id - 1]
  // let location = props.locations.filter(location => location.id === props.match.params.id)[0]
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
