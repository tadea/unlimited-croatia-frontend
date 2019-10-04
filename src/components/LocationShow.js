import React from "react";
import BeachesContainer from '../containers/BeachesContainer.js'
import "../App.scss";

const LocationShow = (props) => {
  console.log(props);

  let location = props.locations[props.match.params.id - 1]
  // let location = props.locations.filter(location => location.id === props.match.params.id)[0]
  console.log(location)

  return (
    <React.Fragment>
      <div className="locationName">
        <h1><i class="fas fa-umbrella-beach"></i><br></br>{location ? location.name : null}-{location ? location.city : null}</h1>
      </div>
      <div>
        <BeachesContainer location={location} />
      </div>
    </React.Fragment>

  );
};

export default LocationShow;
