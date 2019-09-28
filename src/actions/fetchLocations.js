export function fetchLocations() {
  return dispatch => {
    fetch("http://localhost:3001/api/v1/locations")
      .then(r => r.json())
      .then(locations =>
        dispatch({
          type: "FETCH_LOCATIONS",
          payload: locations
        })
      );
  };
}
