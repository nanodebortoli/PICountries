import axios from 'axios';
export const GET_COUNTRIES = 'GET_COUNTRIES';
export const GET_COUNTRY = 'GET_COUNTRY';

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