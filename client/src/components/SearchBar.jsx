import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchCountries } from '../store/actions';

export default function SearchBar(){
  let dispatch = useDispatch();
  const [search, setSearch] = useState('');
  function onChange(e){
    e.preventDefault();
    setSearch(e.target.value);
  }
  useEffect(() => dispatch(searchCountries(search)), [search]);
  return <div>
    <input onChange={(e) => onChange(e)} value={search} placeholder='Insert a country...'></input>
    <button>Search</button>
  </div>
}