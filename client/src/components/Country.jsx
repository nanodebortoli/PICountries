import { Link } from 'react-router-dom';

export default function Country({ id, name, continent, flag }){
  return(
  <div>
    <img src={flag} alt={`${name} flag`}/>
    <Link to={`/countries/${id}`}><h1>Name: {name}</h1></Link>
    <h3>Continent: {continent}</h3>
    <br/>
  </div>
  )
}