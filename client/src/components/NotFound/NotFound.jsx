import { Link } from "react-router-dom";

export default function NotFound(){
  return <div>
    <h1>ERROR 404: page not found</h1>
    <p>The page you're looking for does not exist! Maybe you'd like to return to the <Link to='/home/0'>homepage</Link></p>
  </div>
}