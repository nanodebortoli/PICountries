import { Link } from "react-router-dom";

export default function NavBar(){
  return <nav>
    <Link to='/home/0'>Home</Link>
    <Link to='/form'>Add activities</Link>
  </nav>
}