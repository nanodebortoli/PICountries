import { Link } from 'react-router-dom';
import styles from './Country.module.css';

export default function Country({ id, name, continent, flag }){
  return(
  <div className={styles.main}>
    <img src={flag} alt={`${name} flag`} className={styles.flag}/>
    <div className={styles.container}>
      <h1 className={styles.name}><Link to={`/countries/${id}`} className={styles.name}>{name}</Link></h1>
      <h3>Continent: {continent}</h3>
    </div>
  </div>
  )
}