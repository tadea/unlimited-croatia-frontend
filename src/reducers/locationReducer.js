export default function locationReducer(state = { locations: [] }, action) {
  switch (action.type) {
    case "FETCH_LOCATIONS":
      return { locations: action.payload };
    case "ADD_LOCATION":
      return { ...state, locations: [...state.locations, action.payload] };
    case "ADD_BEACH":
      let locations = state.locations.map(location => {
        if (location.id === action.payload.id) {
          return action.payload
        } else {
          return location
        }
      })
      return { ...state, locations: locations }
    case "DELETE_BEACH":

      let locationsTwo = state.locations.map(location => {
        if (location.id === action.payload.id) {
          return action.payload
        } else {
          return location
        }
      })
      return { ...state, locations: locationsTwo }
    default:
      return state;
  }
}

