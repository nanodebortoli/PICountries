import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

export default function NavBar(){
  return <div>
    <Link to='/home/0'>Home</Link>
    <Link to='/form'>Add activities</Link>
    <SearchBar />
  </div>
}