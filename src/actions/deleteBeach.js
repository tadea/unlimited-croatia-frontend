export const deleteBeach = (beachId, locationId) => {
    console.log("this deleteBeach action", beachId, locationId)

    return (dispatch) => {
        return fetch(`http://localhost:3001/api/v1/locations/${locationId}/beaches/${beachId}`, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(location => dispatch({ type: 'DELETE_BEACH', payload: location }))
    }
}
