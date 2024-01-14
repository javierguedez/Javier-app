import ItemDetail from "./ItemDetail/ItemDetail";
import "./item.scss"
import { Link } from "react-router-dom";



const Item = ({id, name, image, price, stock }) =>{

    return(
        
        <div className="container-item">
        <article className="card">
            <header className="card-header">
                <h2 className="card-header-2">{name}</h2>
            </header>
            <div className="card-img">
            <picture className="image is-4by3">
                <img src={image} alt={name}/>
            </picture>
            </div>
            <section className="section-card">
                <p className="subtitle is-4">Precio: ${price}</p>
                <p className="subtitle is-5">Stock: {stock}</p>
            </section>
                <footer className="footer-card">
                    <Link to={"/item/" + ItemDetail.id} className="button is-primary is-outlined">Ver detalle</Link>
                </footer>
            
        </article>
        </div>       
    )
}

export default Item;