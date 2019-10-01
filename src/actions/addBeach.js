export const addBeach = (beach, locationId) => {
    return dispatch => {
        fetch(`http://localhost:3001/api/v1/locations/${locationId}/beaches`, {
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify(beach)
        })
            .then(response => response.json())
            .then(location => dispatch({ type: "ADD_BEACH", payload: location }));
    };
};

export default addBeach;
