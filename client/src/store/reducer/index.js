import { GET_COUNTRIES, GET_COUNTRY, POST_ACTIVITY, SEARCH_COUNTRIES, GET_ACTIVITIES, FILTER_COUNTRIES, SORT, FILTER_ACTIVITY } from "../actions";
const initialState = {
  allCountries: [], //cuando se filtra se cambia el array countries asi que allcountries es un array que siempre va a tener todos los paises
  countries: [],
  country: {},
  activities: []
}

const reducer = (state = initialState, action) => {
  switch(action.type){
    case GET_COUNTRIES:
      return{
        ...state,
        countries: action.payload.sort((a, b) => a.name.localeCompare(b.name)), //por defecto son ordenados a-z
        allCountries: action.payload
      }
    case GET_COUNTRY:
      return{
        ...state,
        country: action.payload
      }
    case SEARCH_COUNTRIES:
      return{
        ...state,
        countries: action.payload.sort((a, b) => a.name.localeCompare(b.name))
      }
    case GET_ACTIVITIES:
      return{
        ...state,
        activities: action.payload
      }
    case POST_ACTIVITY:
      return{
        ...state
      }
    case FILTER_COUNTRIES:
      return{
        ...state,
        countries: state.allCountries.filter(country => country.continent === action.payload)
      }
    case SORT:
      let orderedCountries = [...state.countries];
      if(action.payload === 'az') orderedCountries = orderedCountries.sort((a, b) => a.name.localeCompare(b.name));
      if(action.payload === 'za') orderedCountries = orderedCountries.sort((a, b) => b.name.localeCompare(a.name));
      if(action.payload === 'popAsc') orderedCountries = orderedCountries.sort((a, b) => a.population > b.population);
      if(action.payload === 'popDes') orderedCountries = orderedCountries.sort((a, b) => b.population > a.population);
      return{
        ...state,
        countries: orderedCountries
      }
    case FILTER_ACTIVITY:
      return{
        ...state,
        countries: state.allCountries.filter(country => country.activities.some(act => act.name ? act.name === action.payload : null))
      }
    default:
      return state;
  }
}

export default reducer;