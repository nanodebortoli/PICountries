import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SearchBar(){
  const [search, setSearch] = useState();
  function onSearch(e){
    e.preventDefault();
    setSearch(e.target.value);
  }
  function onSubmit(e){
    e.preventDefault();
    
  }
  return <div>
    <input onChange={onSearch} value={search} placeholder='Insert a country...'></input>
    <button onSubmit={onSubmit}>Search</button>
  </div>
}