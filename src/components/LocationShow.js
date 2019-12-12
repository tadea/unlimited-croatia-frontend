import React from "react";
import BeachesContainer from '../containers/BeachesContainer.js'
import "../App.scss";


class LocationShow extends React.Component {

  render() {
    let location = this.props.locations.filter(location => location.id == this.props.match.params.id)[0];
    return (

      <div className="locationName">
        <h1><i className="fas fa-umbrella-beach"></i>
          <br />
          {location ? location.name : null}-{location ? location.city : null}</h1>

        <div>
          <BeachesContainer location={location} />
        </div>
      </div>
    );
  }

};

export default LocationShow;
