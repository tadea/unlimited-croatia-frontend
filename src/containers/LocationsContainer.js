import React from "react";
import Locations from "../components/Locations.js";
import LocationsForm from "../components/LocationsForm.js";
import { connect } from "react-redux";
import { fetchLocations } from "../actions/fetchLocations.js";

class LocationsContainer extends React.Component {
  componentDidMount() {
    this.props.fetchLocations();
  }

  render() {
    return (
      <div>
        <Locations locations={this.props.locations} />
        <LocationsForm />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    locations: state.locations
  };
};
export default connect(
  mapStateToProps,
  { fetchLocations }
)(LocationsContainer);
