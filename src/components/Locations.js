
import React from "react";
import { Link } from 'react-router-dom'
import LocationCard from './LocationCard'


class Location extends React.Component {

  render() {
    return (
      <div>
        {this.props.locations.map(location =>
          <LocationCard location={location}></LocationCard>
        )}
      </div>
    );
  }
};

export default Location;

