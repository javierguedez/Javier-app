import { useContext } from "react";
import {CartContext} from "../../../context/CartContext";
import CartItem from "./CartIem";
import { Link } from "react-router-dom";
import "bulma/css/bulma.css";

const Cart = () => {
    const { cart, clearCart, totalQuantity, total} = useContext(CartContext)

    if(totalQuantity === (0)) {
        return(
            <div>
                <h1 className="title">No hay productos en el carrito</h1>
                <Link to="/">Pagina inicio</Link>
            </div>
        )
    }

    return(
        <div className="container">
            { cart.map(p => <CartItem key={p.id}{...p}/>) }
            <h3 className="title">Total:${total}</h3>
            <button className="button is-primary" onClick={()=> clearCart()}>Limpiar carrito</button>
            <Link className="button" to="/checkout">checkout</Link>
        </div>
    )
}

export default Cart;