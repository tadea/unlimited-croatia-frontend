import React from "react";
import { connect } from "react-redux";
import { addLocation } from "../actions/addLocation.js";

class LocationsForm extends React.Component {
  state = {
    name: "",
    city: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addLocation(this.state);
    this.setState({
      name: "",
      city: ""
    });
  };

  render() {
    return (
      <div className="createLocation">
        <form onSubmit={this.handleSubmit}>
          <label>Region Name</label>
          <input
            placeholder="region name"
            value={this.state.name}
            name="name"
            type="text"
            onChange={this.handleChange}
          /><br></br><br></br>
          <label>City Name</label>
          <input
            placeholder="city name"
            value={this.state.city}
            name="city"
            type="text"
            onChange={this.handleChange}
          /><br></br><br></br>
          <input type="submit" value="Submit" />
          <br></br>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { addLocation }
)(LocationsForm);
