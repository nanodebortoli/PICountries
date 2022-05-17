import { Link } from 'react-router-dom';
import styles from './Country.module.css';

export default function Country({ id, name, continent, flag }){
  return(
  <div className={styles.main}>
    <img src={flag} alt={`${name} flag`}/>
    <h1><Link to={`/countries/${id}`}>{name}</Link></h1>
    <h3>Continent: {continent}</h3>
    <br/>
  </div>
  )
}