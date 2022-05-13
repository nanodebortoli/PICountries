import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries } from '../store/actions';
import Country from './Country';
import { Link } from 'react-router-dom';

export default function Home(props){
  const page = props.match.params.page;
  let countries = useSelector((state) => state.countries);
  let countriesPerPage;
  if(page === '0') countriesPerPage = countries.slice(0, 9);
  else countriesPerPage = countries.slice(((page) * 10) -1, ((parseInt(page) + 1) * 10) - 1);
  let maxPages = Math.ceil(countries.length / 10);
  console.log(maxPages)
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountries())
  }, [])
  if(countries.length) return <div>
    {countriesPerPage.map((country) => {return <Country key={country.id} id={country.id} name={country.name} continent={country.continent} flag={country.flag}/>})}
    {maxPages === 1 ? <div>{parseInt(page) + 1}</div> : page === '0' ? <><div>{parseInt(page) + 1}</div> <Link to='/home/1'><button>Next</button></Link></> : page === maxPages.toString() ? <> <Link to={`/home/${page - 1}`}><button>Prev</button></Link><div>{parseInt(page) + 1}</div> </> : <> <Link to={`/home/${page - 1}`}><button>Prev</button></Link> <div>{parseInt(page) + 1}</div> <Link to={`/home/${parseInt(page) + 1}`}><button>Next</button></Link> </>}
  </div>
  else return <div>
    El pais ingresado no existe
  </div>
}