import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { searchCountries } from '../store/actions';

export default function SearchBar(){
  let dispatch = useDispatch();
  let filtered = useSelector((state) => state.filteredCountries)
  const [search, setSearch] = useState('');
  function onChange(e){
    e.preventDefault();
    setSearch(e.target.value);
  }
  function onSearch(e){
    e.preventDefault();
    dispatch(searchCountries(search))
    console.log(filtered)
  }
  return <div>
    <input onChange={(e) => onChange(e)} value={search} placeholder='Insert a country...'></input>
    <button onClick={onSearch}>Search</button>
  </div>
}