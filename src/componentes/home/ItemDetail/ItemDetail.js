import ItemCount from "../ItemCount/ItemCount";
import "bulma/css/bulma.css";
import "./ItemDetail.scss";


const ItemDetail = ({id, name, img, category, description, price, stock}) => {

    return(
        <article  className="card">
            <header className="card-header">
                <h2 className="card-header-title">{name}</h2>
            </header>
            <div className="card-img">
            <picture className="image is-4by5" >
                <img src={img} alt={img}/>
            </picture>
            </div>
            <section className="section-detail">
                <p className="subtitle is-3">Categoria: {category}</p>
                <p className="subtitle is-5">Descripción: {description}</p>
                <p className="subtitle is-5">Precio: ${price}</p>
            </section>
            <footer className="footer-detail">
                <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad agregada', quantity)}/>
            </footer>
        </article>
    )
}

export default ItemDetail;