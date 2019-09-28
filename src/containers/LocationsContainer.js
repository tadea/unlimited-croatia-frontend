import React from "react";
import Locations from "../components/Locations.js";
import LocationShow from "../components/LocationShow.js";
import LocationsForm from "../components/LocationsForm.js";
import { connect } from "react-redux";
import { fetchLocations } from "../actions/fetchLocations.js";
import { Route } from "react-router-dom";

class LocationsContainer extends React.Component {
  componentDidMount() {
    this.props.fetchLocations();
  }

  render() {
    return (
      <div>
        <Route path='/locations/new' component={LocationsForm} />
        <Route path='/locations/:id' render={(routerProps) => <LocationShow {...routerProps} locations={this.props.locations} />} />
        <Route exact path='/locations' render={(routerProps) => <Locations {...routerProps} locations={this.props.locations} />} />
        <br></br>
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
