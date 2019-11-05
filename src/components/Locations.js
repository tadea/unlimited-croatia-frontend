import React from "react";
import { Link } from 'react-router-dom'



class Locations extends React.Component {



  render() {
    return (
      <div>
        {this.props.locations.map(location =>
          <div className="LocationCard" key={location.id} onVote={this.handleEvent}>
            <h4><Link to={`/locations/${location.id}`}>{location.city} </Link></h4>
          </div>)}
      </div>
    );
  }
};

export default Locations;

