import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { getCountries, postActivity } from "../../store/actions/index.js";

export default function Form(){
  let dispatch = useDispatch();
  let countryList = useSelector((state) => state.countries)
  const [state, setState] = useState({countries: [], ids: [], difficulty: 1});
  const [errors, setErrors] = useState({name: 'Name must not be empty', difficulty: 'You must select a difficulty level', length: 'Length must not be empty', season: 'You must select a season', countries: 'You must select at least one country'});
  useEffect(() => dispatch(getCountries()), [])
  function handleChange(e){
    if(e.target.name !== 'countries'){
      setState({
        ...state,
        [e.target.name]: e.target.value
      })
    }
    else if (e.target.value){
      state.countries.push(e.target.value);
      state.ids.push(e.target.selectedOptions[0].id);
    }
    setErrors(formValidator({
      ...state,
      [e.target.name]: e.target.value
    }))
  }
  function formValidator(value){
    let errors = {};
    if(!value.name) errors.name = 'Name must not be empty';
    else if(!/^[A-Za-z]+$/.test(value.name)) errors.name = 'Name is invalid';
    if(!value.difficulty) errors.difficulty = 'You must select a difficulty level';
    if(!value.length) errors.length = 'Length must not be empty';
    else if(!/^[0-9]+$/.test(value.length)) errors.length = 'Length must be a number';
    if(!value.season) errors.season = 'You must select a season';
    if(!value.countries.length) errors.countries = 'You must select at least one country';
    return errors;
  }
  function handleSubmit(e){
    e.preventDefault();
    dispatch(postActivity(state));
    setState({name: '', difficulty: 1, length: '', season: '', countries: [], ids: []});
  }
  return <form onSubmit={(e) => handleSubmit(e)}>
    <label>Name</label>
    <input onChange={(e) => handleChange(e)} type='text' name='name' value={state.name}/> <span>{errors.name ? errors.name : null}</span>
    <br/>
    <label>Difficulty</label>
    <input onChange={(e) => handleChange(e)} type='range' min='1' max='5' name='difficulty' value={state.difficulty}/> <span>{state.difficulty}</span> <span>{errors.difficulty ? errors.difficulty : null}</span>
    <br/>
    <label>Length</label>
    <input onChange={(e) => handleChange(e)} type='text' name='length' value={state.length}/> <span>{errors.length ? errors.length : null}</span>
    <br/>
    <label>Season</label>
    <select onChange={(e) => handleChange(e)} name='season' value={state.season}><option value=''>Please select a season</option> <option value='Summer'>Summer</option> <option value='Fall'>Fall</option> <option value='Winter'>Winter</option><option value='Spring'>Spring</option> </select> <span>{errors.season ? errors.season : null}</span>
    <br/>
    <p>Selected countries: {state.countries.map(country => {return <span>{country}</span>})}</p>
    <label>Countries</label>
    <select onChange={(e) => handleChange(e)} name='countries' value={state.countries}><option value=''>Please select a country</option>{countryList.map(country => {return <option key={country.id} id={country.id} value={country.name}>{country.name}</option>})}</select> <span>{errors.countries ? errors.countries : null}</span>
    <br/>
    <input onChange={(e) => handleChange(e)} type='submit' value='Create activity' disabled={Object.keys(errors).length > 0 ? true : false}/>
  </form>
}
