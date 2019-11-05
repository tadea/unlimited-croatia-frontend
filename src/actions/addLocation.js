export const addLocation = data => {
  return dispatch => {
    console.log('C');
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
          console.log('D')
          dispatch({ type: "ADD_LOCATION", payload: location })
        }
      })
  };
  console.log('E')
};

export default addLocation;

