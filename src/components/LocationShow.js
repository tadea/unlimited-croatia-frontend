import React from "react";
import BeachesContainer from '../containers/BeachesContainer.js'
import "../App.scss";
import { Link } from "react-router-dom"

class LocationShow extends React.Component {


  // let location = props.locations.filter(location => location.id == props.match.params.id)[0]
  render() {
    let location = this.props.locations.filter(location => location.id == this.props.match.params.id)[0];

    return (

      <div className="locationName">
        <h1><i className="fas fa-umbrella-beach"></i>
          <br></br>
          {location ? location.name : null}-{location ? location.city : null}</h1>
        <div>
          <BeachesContainer location={location} />
        </div>
      </div>
    );
  }

};

export default LocationShow;
