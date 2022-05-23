import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCountry, setLoader } from '../../store/actions/index.js';
import styles from './CountryDetails.module.css';

export default function CountryDetails(){
  const { id } = useParams();
  let details = useSelector((state) => state.country);
  let loading = useSelector((state) => state.loading);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountry(id))
    return dispatch(setLoader());
  }, [])
  
  if(loading === true) return <div className={styles.loading}>
    <img src={process.env.PUBLIC_URL + '/loading.gif'} alt='loading' className={styles.gif}/>
    Loading...
    </div>
  else {
    if(Object.keys(details).length){
      return <div className={styles.main}>
      <img src={details.flag} alt={`${details.name} flag`}/>
      <h1>Name: {details.name}</h1>
      <h3>Code: {details.id}</h3>
      <h3>Capital city: {details.capitalCity}</h3>
      <h3>Subregion: {details.subregion}</h3>
      <h3>Area: {details.area} km<sup>2</sup></h3>
      <h3>Population: {details.population} people</h3>
      <h3>Activities: <ul>{details.activities ? details.activities.map(a => {return <li className={styles.activity} key={a.id}>Activity: {a.name} Length: {a.lengthD} Difficulty: {a.difficulty} Season: {a.season}</li>}) : null}</ul></h3>
    </div>
    }
    else{
      return null;
    }
  }
}
