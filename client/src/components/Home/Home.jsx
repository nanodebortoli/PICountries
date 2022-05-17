import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries } from '../../store/actions/index.js';
import Country from '../Country/Country.jsx';
import { Link, useParams } from 'react-router-dom';
import styles from './Home.module.css';

export default function Home(){
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountries());
  }, []);
  const { page } = useParams();
  let countries = useSelector((state) => state.countries);
  let countriesPerPage;
  if(page === '0') countriesPerPage = countries.slice(0, 9); //en la primera página solo se muestran 9 paises
  else countriesPerPage = countries.slice(((page) * 10) -1, ((parseInt(page) + 1) * 10) - 1); 
  let maxPages = Math.ceil(countries.length / 10);
  if(countries.length) return <div>
    {countriesPerPage.map((country) => {return <Country key={country.id} id={country.id} name={country.name} continent={country.continent} flag={country.flag}/>})}
    {maxPages === 1 && countries.length === 10 && page === '0' ? <><div>{parseInt(page) + 1}</div> <Link to='/home/1'><div>Next</div></Link></> : maxPages === 1 ? <div>{parseInt(page) + 1}</div> : page === '0' ? <><div>{parseInt(page) + 1}</div> <Link to='/home/1'><div>Next</div></Link></> : page === maxPages.toString() ? <> <Link to={`/home/${page - 1}`}><div>Prev</div></Link><div>{parseInt(page) + 1}</div> </> : <> <Link to={`/home/${page - 1}`}><div>Prev</div></Link> <div>{parseInt(page) + 1}</div> <Link to={`/home/${parseInt(page) + 1}`}><div>Next</div></Link> </>}
  </div>
  else return <div className={styles.notfound}>
    El pais ingresado no existe
  </div>
}
