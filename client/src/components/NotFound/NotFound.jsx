import { Link } from "react-router-dom";
import styles from './NotFound.module.css';

export default function NotFound(){
  return <div className={styles.main}>
    <img className={styles.img} src={process.env.PUBLIC_URL + '/404.png'} alt='404'/>
    <h1>ERROR 404: page not found</h1>
    <span>The page you're looking for does not exist! Maybe you'd like to return to the <Link className={styles.link} to='/home'>homepage</Link></span>
  </div>
}