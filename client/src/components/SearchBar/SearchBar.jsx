import { useDispatch } from 'react-redux';
import { searchCountries, filterCountries, getCountries, sort } from '../../store/actions/index.js';

export default function SearchBar(){
  let dispatch = useDispatch();
  function onChange(e){
    dispatch(searchCountries(e.target.value))
  }
  function onChangeSelect(e){
    if(!e.target.value) dispatch(getCountries());
    else dispatch(filterCountries(e.target.value));
  }
  function onChangeSort(e){
    dispatch(sort(e.target.value));
  }
  return <div>
    <input onChange={(e) => onChange(e)}  placeholder='Insert a country...'></input>
    <button>Search</button>
    <select onChange={(e) => onChangeSelect(e)} name='continent'> <option value=''>Select a continent</option> <option value='Africa'>Africa</option> <option value='Antarctica'>Antarctica</option> <option value='Asia'>Asia</option> <option value='Europe'>Europe</option> <option value='North America'>North America</option> <option value='Oceania'>Oceania</option> <option value='South America'>South America</option> </select>
    <select onChange={(e) => onChangeSort(e)} name='sort'> <option value='az'>A-Z</option> <option value='za'>Z-A</option> <option value='popAsc'>Population asc</option> <option value='popDes'>Population des</option> </select>
  </div>
}