import { Link, NavLink, useHref } from "react-router-dom";


const NavBar =() =>{
    return  ( 
       <nav>
         <Link to="/"> 
      <label class="logo">Proyecto React</label>
      </Link>
        <NavLink to="Menu">Menu</NavLink>
        <NavLink to="contactanos">Contactanos</NavLink>
        <NavLink to="Quienes somos">Quienes Somos</NavLink>
        </nav>
    );
  };

export default NavBar