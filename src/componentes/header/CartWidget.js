import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";

const CartWidget = () => {

  return (
    <div className="car" style={{fontSize:'2rem', color:'white'}}>
      <FontAwesomeIcon icon={faCartShopping} />
      0
    </div>
  )
}

export default CartWidget;