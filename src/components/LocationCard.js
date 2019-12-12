import React from "react";
import { Link } from 'react-router-dom'



class LocationCard extends React.Component {


    state = { likes: 0 }

    onLike = () => {
        this.setState((state) => {
            return { likes: state.likes + 1 }
        })
    }

    render() {
        return (
            <div className="LocationCard" key={this.props.location.id}>
                <h4><Link to={`/locations/${this.props.location.id}`}>{this.props.location.city} </Link></h4>
                <button onClick={() => { this.onLike() }}>Like</button>
                <p>Likes: {this.state.likes}</p>
            </div>
        );
    }
};

export default LocationCard; 