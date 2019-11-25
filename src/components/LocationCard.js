import React from "react";
import { Link } from 'react-router-dom'


class LocationCard extends React.Component {

    render() {
        return (
            <div className="LocationCard" key={this.props.location.id} onVote={this.handleEvent}>
                <h4><Link to={`/locations/${this.props.location.id}`}>{this.props.location.city} </Link></h4>
            </div>
        );
    }
};

export default LocationCard; 