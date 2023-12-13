import { useState } from "react";
import "./ItemCount.scss";


const ItemCount = ({ stock, initial, onAdd }) => {

    const [ quantity, setQuantity ] = useState(initial)

    const increment= () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }
    const decrement= () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }
    return (
        <div>
            <div className="columns">
                <div className="column">
                    <button onClick={decrement} className="button is-primary is-outlined">
                        <p>-</p>
                    </button>
                </div>
                <p className="cantidad">{quantity}</p>
                <div className="column">
                    <button onClick={increment} className="button is-primary is-outlined">
                        <p>+</p>
                    </button>
                </div>
            </div>
            <div className="btn-car">
                <button onClick={() => onAdd(quantity)} disabled={!stock} className="button is-primary is-outlined">
                    Agragar al carrito
                </button>
            </div>
        </div>
    )
}

export default ItemCount;