import { Link } from "react-router-dom";

export default function NotFound(){
  return <div>
    <img src={process.env.PUBLIC_URL + '/404.png'} alt='404'/>
    <h1>ERROR 404: page not found</h1>
    <p>The page you're looking for does not exist! Maybe you'd like to return to the <Link to='/home/0'>homepage</Link></p>
  </div>
}