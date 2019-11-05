import React from "react";
import { Link } from 'react-router-dom'



class Locations extends React.Component {

  constructor(props) {
    super(props);
    let location = props.locations.filter(location => location.id == props.match.params.id)[0]
    this.state = {
      like: 0,
      location: location
    };



  }
  IncrementItem = (id) => {
    let locations = this.state.location;
    locations.find(l => l.id === id).like++;
    this.setState({ location: locations });
  }

  render() {
    return (
      <div>
        {this.props.locations.map(location =>
          <div className="LocationCard" key={location.id} onVote={this.handleEvent}>
            <h4><Link to={`/locations/${location.id}`}>{location.city} </Link></h4>
            <button onClick={() => this.IncrementItem(location.id)}>Like</button>
            {/* <button onClick={() => this.upVote(location.id)}>VoteUp</button> */}
            <p>Likes:{location.like}</p>



          </div>)}
      </div>
    );
  }
};

export default Locations;

