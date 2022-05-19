import { useDispatch, useSelector } from 'react-redux';
import { searchCountries, filterCountries, getCountries, sort, filterByAct } from '../../store/actions/index.js';
import styles from './SearchBar.module.css';

export default function SearchBar(){
  let dispatch = useDispatch();
  let activities = useSelector(state => state.activities)
  function onChange(e){
    dispatch(searchCountries(e.target.value))
  }
  function onChangeSelect(e){
    if(!e.target.value) dispatch(getCountries());
    else dispatch(filterCountries(e.target.value));
  }
  function onChangeAct(e){
    if(!e.target.value) dispatch(getCountries());
    else dispatch(filterByAct(e.target.value))
  }
  function onChangeSort(e){
    dispatch(sort(e.target.value));
  }
  return <div className={styles.bar}>
    <input onChange={(e) => onChange(e)} placeholder='Insert a country...' className={styles.search}/>
    <div className={styles.labeldiv}>
      <label className={styles.labels}>Filter by continent</label>
      <label className={styles.labels}>Filter by activity</label>
      <label className={styles.labels}>Sort by</label>
    </div>
    <div className={styles.filterdiv}>
      <select onChange={(e) => onChangeSelect(e)} name='continent' className={styles.filters}> <option value=''>Select a continent</option> <option value='Africa'>Africa</option> <option value='Antarctica'>Antarctica</option> <option value='Asia'>Asia</option> <option value='Europe'>Europe</option> <option value='North America'>North America</option> <option value='Oceania'>Oceania</option> <option value='South America'>South America</option> </select>
      <select onChange={(e) => onChangeAct(e)} name='activity' className={styles.filters}> <option value=''>Select an activity</option> {activities.map(activity => {return <option value={activity.name}>{activity.name}</option>})} </select>
      <select onChange={(e) => onChangeSort(e)} name='sort' className={styles.filters}> <option value='az'>A-Z</option> <option value='za'>Z-A</option> <option value='popAsc'>Population asc</option> <option value='popDes'>Population des</option> </select>
    </div>
  </div>
}