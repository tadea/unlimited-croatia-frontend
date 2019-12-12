export const addLocation = (data, history) => {
  return dispatch => {
    fetch("http://localhost:3001/api/v1/locations", {
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(location => {
        if (location.error) {
          alert(location.error)
        } else {
          dispatch({ type: "ADD_LOCATION", payload: location })
          history.push(`/locations/${location.id}`)
        }
      })
  };

};

export default addLocation;

