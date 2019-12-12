
import React from "react";
import LocationCard from './LocationCard'


class Location extends React.Component {

  render() {

    return (
      <div>
        {this.props.locations.map(location =>
          <LocationCard key={location.id} location={location}></LocationCard>
        )}
      </div>
    );
  }
};

export default Location;

