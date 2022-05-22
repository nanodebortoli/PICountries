import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getActivities, getCountries } from '../../store/actions/index.js';
import Country from '../Country/Country.jsx';
import styles from './Home.module.css';

export default function Home(){
  let dispatch = useDispatch();
  let countries = useSelector((state) => state.countries);

  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getCountries());
    dispatch(getActivities());
  }, []);

  useEffect(() => {
    setPage(1);
  }, [countries]); //esto hace que cuando realicemos una busqueda o un filtrado se vuelva a la pagina 1

  let countriesPerPage;
  if(page === 1) countriesPerPage = countries.slice(0, 9); //en la primera página solo se muestran 9 paises
  else countriesPerPage = countries.slice(((page) * 10) - 11, ((page + 1) * 10) - 11); 

  let maxPages = Math.floor(countries.length / 10) + 1;

  function prevPage(){
    if(page > 1) setPage(page - 1);
  }
  function nextPage(){
    if(page < maxPages) setPage(page + 1);
  }

  if(countries.length) return <div className={styles.container}>
    <div className={styles.navCont}><button onClick={prevPage} className={styles.navBtn}>Prev</button> <div className={styles.nav}>{page}</div> <button onClick={nextPage} className={styles.navBtn}>Next</button></div>
    {countriesPerPage.map((country) => {return <Country key={country.id} id={country.id} name={country.name} continent={country.continent} flag={country.flag}/>})}
  </div>
  else{
    return <div className={styles.notFound}>
      The country does not exist.
    </div>
  }
}
