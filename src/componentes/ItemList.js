import Items from "./Items"


const ItemList = ({ productosp }) => {
    return (
        <ul>
            {productosp.map((product, index)=>{
               return <Items producto={product} key={index}></Items>
             } )}

        </ul>)
}

export default ItemList 