import React from "react";

class LocationsForm extends React.Component {
  state = {
    name: "",
    city: ""
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Region Name</label>
          <input
            placeholder="region name"
            value={this.state.name}
            name="name"
            type="text"
            onChange={this.handleChange}
          />
          <label>City Name</label>
          <input
            placeholder="city name"
            value={this.state.city}
            name="city"
            type="text"
            onChange={this.handleChange}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default LocationsForm;
