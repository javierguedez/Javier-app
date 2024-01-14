import ItemCount from "../ItemCount/ItemCount";
import "bulma/css/bulma.css";
import "./ItemDetail.scss";
import { NavLink, Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";


const ItemDetail = ({id, name, category, price, stock}) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) =>{
        setQuantityAdded(quantity)
        const item = {
            id, name, price
        }

        addItem(item,quantity)
    }

    return(
        <article  className="card">
            <header className="card-header">
                <h2 className="card-header-title">{name}</h2>
            </header>
            <div className="card-img">
            {/* <picture className="image is-4by5" >
                <img src={image} alt={image}/>
            </picture> */}
            </div>
            <section className="section-detail">
                <p className="subtitle is-3">Categoria: {category}</p>
                <p className="subtitle is-5">Precio: ${price}</p>
            </section>
            <footer className="footer-detail">
            {
                    quantityAdded > 0 ? (
                        <Link to="/cart" className="Option">Terminar Compra</Link>
                    ) : (
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                    )
                }
                
            </footer>
        </article>
    )
}

export default ItemDetail;