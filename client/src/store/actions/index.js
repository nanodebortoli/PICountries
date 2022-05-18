import axios from 'axios';
export const GET_COUNTRIES = 'GET_COUNTRIES';
export const GET_COUNTRY = 'GET_COUNTRY';
export const SEARCH_COUNTRIES = 'SEARCH_COUNTRIES';
export const GET_ACTIVITIES = 'GET_ACTIVITIES';
export const POST_ACTIVITY = 'POST_ACTIVITY';
export const FILTER_COUNTRIES = 'FILTER_COUNTRIES';
export const SORT = 'SORT';
export const FILTER_ACTIVITY = 'FILTER_ACTIVITY';

export function getCountries(){
  return function(dispatch){
    axios.get('http://localhost:3001/countries')
    .then(countries => dispatch({type: GET_COUNTRIES, payload: countries.data}))
    .catch(err => console.log(err))
  }
};

export function getCountry(id){
  return function(dispatch){
    axios.get(`http://localhost:3001/countries/${id}`)
    .then(country => dispatch({type: GET_COUNTRY, payload: country.data}))
    .catch(err => console.log(err))
  }
};

export function searchCountries(name){
  return function(dispatch){
    axios.get(`http://localhost:3001/countries?name=${name}`)
    .then(countries => dispatch({type: SEARCH_COUNTRIES, payload: countries.data}))
    .catch(err => dispatch({type: SEARCH_COUNTRIES, payload: []}))
  }
};

export function getActivities(){
  return function(dispatch){
    axios.get('http://localhost:3001/activity')
    .then(data => dispatch({type: GET_ACTIVITIES, payload: data.data}))
    .catch(err => console.log(err))
  }
}

export function postActivity(obj){
  return function(dispatch){
    axios.post('http://localhost:3001/activity', {
      name: obj.name,
      length: obj.length,
      difficulty: obj.difficulty,
      season: obj.season,
      countries: obj.ids
    }).then(dispatch({type: POST_ACTIVITY, payload: obj}))
    .catch(err => console.log(err))
  }
};

export function filterCountries(continent){
  return function(dispatch){
    dispatch({type: FILTER_COUNTRIES, payload: continent})
  }
};

export function sort(method){
  return function(dispatch){
    dispatch({type: SORT, payload: method})
  }
};

export function filterByAct(act){
  return function(dispatch){
    dispatch({type: FILTER_ACTIVITY, payload: act})
  }
}