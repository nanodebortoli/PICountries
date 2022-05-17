import { Link } from "react-router-dom";
import styles from './NavBar.module.css';

export default function NavBar(){
  return <nav className={styles.back}>
    <Link to='/'><img src={process.env.PUBLIC_URL + '/logo.png'} alt='logo' className={styles.logo}/></Link>
    <div className={styles.buttons}><Link to='/home/0' className={styles.buttons}>Home</Link></div>
    <div className={styles.buttons}><Link to='/form' className={styles.buttons}>Add activities</Link></div>
  </nav>
}