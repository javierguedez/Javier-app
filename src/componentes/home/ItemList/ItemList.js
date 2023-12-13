import Item from "../Item";
import "./ItemList.scss";

const ItemList = ({products}) =>{
    return(
        <div className="container-item-list">
            {products.map(prod=> <Item key={prod.id} {...prod}/>)}
        </div>
    )
}

export default ItemList;