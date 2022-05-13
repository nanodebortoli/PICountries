import { GET_COUNTRIES, GET_COUNTRY, POST_ACTIVITY, SEARCH_COUNTRIES } from "../actions";
const initialState = {
  countries: [],
  country: {}
}

const reducer = (state = initialState, action) => {
  switch(action.type){
    case GET_COUNTRIES:
      return{
        ...state,
        countries: action.payload
      }
    case GET_COUNTRY:
      return{
        ...state,
        country: action.payload
      }
    case SEARCH_COUNTRIES:
      return{
        ...state,
        countries: action.payload
      }
    case POST_ACTIVITY:
      return {
        ...state
      }
    default:
      return state;
  }
}

export default reducer;