import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const CartItem =({ name, price, id, quantity}) => {
    const {removeItem} = useContext(CartContext)

    return(
        <div>

        <h2>{name}</h2>
        <p>{quantity}</p>
        <p>Subtotal: ${price * quantity}</p>
        <button onClick={() => removeItem(id)}>Eliminar</button>

        </div>
    )
}

export default CartItem;