import { Link } from "react-router-dom";
import styles from './LandingPage.module.css';

export default function LandingPage(){
  return <div className={styles.main}>
    <h1>Welcome to Henry Countries</h1>
    <div className={styles.button}><Link to='/home/0' className={styles.button}>Go to homepage</Link></div>
  </div>
}