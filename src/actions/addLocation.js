export const addLocation = data => {
  return dispatch => {
    fetch("http://localhost:3001/api/v1/locations", {
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(location => dispatch({ type: "ADD_LOCATION", payload: location }));
  };
};

export default addLocation;
