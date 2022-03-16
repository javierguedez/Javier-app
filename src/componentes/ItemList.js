import Items from "./Items"


const ItemList = ({ productosp }) => {
    return (
        <ul>
            {productosp.map((product, index)=>(
                <Items producto={product} key={index}></Items>
            ))}

        </ul>)
}

export default ItemList