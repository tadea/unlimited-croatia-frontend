export const addBeach = (beach, locationId) => {
    return dispatch => {
        fetch(`http://localhost:3001/api/v1/locations/${locationId}/beaches`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(beach)
        })
            .then(response => response.json())
            .then(location => dispatch({ type: "ADD_BEACH", payload: location }));
    };
};

export default addBeach;
