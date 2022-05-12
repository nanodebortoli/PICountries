import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountry } from '../store/actions';

export default function CountryDetails(props){
  const id = props.match.params.id
  let details = useSelector((state) => state.country);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountry(id))
  }, [])
  return <div>
    <img src={details.flag} alt={`${details.name} flag`}/>
    <h1>Name: {details.name}</h1>
    <h3>Code: {details.id}</h3>
    <h3>Capital city: {details.capitalCity}</h3>
    <h3>Subregion: {details.subregion}</h3>
    <h3>Area: {details.area} km2</h3>
    <h3>Population: {details.population} people</h3>
    <h3>Activities: {details.activities ? details.activities.map(a => {return <ul key={a.id}>{a.name}</ul>}) : null}</h3>
  </div>
}
