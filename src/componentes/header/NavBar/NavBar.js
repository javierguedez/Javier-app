import "bulma/css/bulma.css";
import "./NavBar.scss";
import { NavLink, Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

function NavBar() {
  return(

<nav className="navbar is-primary">
  <Link to='/'>
    <h3 className="bt-home">Pasteleria</h3>
  </Link>
  
  <div className="bt-category">

    <NavLink to={`/category/bebidas`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Bebidas</NavLink>
    <NavLink to={`/category/postres`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Postres</NavLink>
    <NavLink to={`/category/helados`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Helados</NavLink>
    
  </div> 
  <button className="button is-primary is-outlined">
  <Link to="/cart" className="Option">
    <FaShoppingCart className="shoping-car"/>
  </Link>
  
  </button>
</nav>      
  )
}

export default NavBar;


