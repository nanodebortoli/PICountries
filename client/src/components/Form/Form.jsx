import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { getCountries, postActivity } from "../../store/actions/index.js";
import styles from './Form.module.css';

export default function Form(){
  let dispatch = useDispatch();
  let countryList = useSelector((state) => state.countries);

  const [state, setState] = useState({countries: [], ids: [], difficulty: 1});
  const [errors, setErrors] = useState({name: 'Name must not be empty', lengthD: 'Length must not be empty', season: 'You must select a season', countries: 'You must select at least one country'});
  
  useEffect(() => dispatch(getCountries()), []);

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

  function deleteCountry(e){
    e.preventDefault();
    state.countries = state.countries.filter(country => country !== e.target.textContent);
    state.ids = state.ids.filter(country => country !== e.target.value);
    setErrors(formValidator(state));
  }

  function formValidator(value){
    let errors = {};
    if(!value.name || !value.name.trim().length) errors.name = 'Name must not be empty';
    else if(!/^[A-Za-z\s]+$/.test(value.name)) errors.name = 'Name is invalid';
    if(!value.difficulty) errors.difficulty = 'You must select a difficulty level';
    if(!value.lengthD) errors.lengthD = 'Length must not be empty';
    else if(!/^[0-9]+$/.test(value.lengthD)) errors.lengthD = 'Length must be a number';
    if(!value.season) errors.season = 'You must select a season';
    if(value.countries.length === 0) errors.countries = 'You must select at least one country';
    return errors;
  }

  function handleSubmit(e){
    e.preventDefault();
    dispatch(postActivity(state));
    setState({name: '', difficulty: 1, lengthD: '', season: '', countries: [], ids: []});
    setErrors(formValidator({name: '', difficulty: 1, lengthD: '', season: '', countries: [], ids: []}));
  }

  return <form onSubmit={(e) => handleSubmit(e)} className={styles.main}>
    <div className={styles.entry}>
      <label className={styles.item}>Name</label>
      <input onChange={(e) => handleChange(e)} className={styles.item} type='text' name='name' value={state.name}/>
      <span className={styles.item}>{errors.name ? errors.name : null}</span> 
    </div>
    <div className={styles.entry}>
      <label className={styles.item}>Difficulty</label>
      <input onChange={(e) => handleChange(e)} className={styles.item} type='range' min='1' max='5' name='difficulty' value={state.difficulty}/> <span>{state.difficulty}</span> 
      <span className={styles.item}>{errors.difficulty ? errors.difficulty : null}</span>
    </div>
    <div className={styles.entry}>
      <label className={styles.item}>Length</label>
      <input onChange={(e) => handleChange(e)} className={styles.item} type='text' name='lengthD' value={state.lengthD}/>
      <span className={styles.item}>{errors.lengthD ? errors.lengthD : null}</span>
    </div>
    <div className={styles.entry}>
      <label className={styles.item}>Season</label>
      <select onChange={(e) => handleChange(e)} className={styles.item} name='season' value={state.season}><option value=''>Please select a season</option> <option value='Summer'>Summer</option> <option value='Fall'>Fall</option> <option value='Winter'>Winter</option><option value='Spring'>Spring</option> </select>
      <span className={styles.item}>{errors.season ? errors.season : null}</span>
    </div>
    <div className={styles.entry}>
      <label className={styles.item}>Countries</label>
      <select onChange={(e) => handleChange(e)} className={styles.item} name='countries' value={state.countries}><option value=''>Please select a country</option>{countryList.map(country => {return <option key={country.id} id={country.id} value={country.name}>{country.name}</option>})}</select>
      <span className={styles.item}>{errors.countries ? errors.countries : null}</span>
      <p>You can delete a country by clicking on it</p>
    </div>
    <div className={styles.entry}>
      <p>Selected countries: {state.countries.map(country => {return <button value={state.ids[state.countries.indexOf(country)]} className={styles.selected} onClick={(e) => deleteCountry(e)}>{country}</button>})}</p>
    </div>
    <input className={styles.send} onChange={(e) => handleChange(e)} type='submit' value='Create activity' disabled={Object.keys(errors).length > 0 ? true : false}/>
  </form>
}