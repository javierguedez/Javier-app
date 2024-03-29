import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import Cart from "./NavBar/Cart";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const{ totalQuantity } = useContext(CartContext)

  return (
    
      <Link to="/cart" className="car" style={{display: totalQuantity > 0 ? 'block' : 'none'}}>
      <FontAwesomeIcon icon={faCartShopping} />
      { totalQuantity }
    </Link>    
    
  )
}

export default CartWidget;