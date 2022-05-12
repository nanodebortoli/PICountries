import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries } from '../store/actions';
import Country from './Country';

export default function Home(){
  let countries = useSelector((state) => state.countries)
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountries())
  }, [])
  return <div> 
    {countries.map((country) => {return <Country key={country.id} id={country.id} name={country.name} continent={country.continent} flag={country.flag}/>})}
  </div>
}