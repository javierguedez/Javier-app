import { useState, useEffect } from "react"; 
import { getProducts, getProductsByCategory } from "../asyncMock";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.scss"
import { useParams } from "react-router-dom";

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])

    const {categoryId} = useParams()

    useEffect(() => {
        const asyncFunc = categoryId ? getProductsByCategory : getProducts

        asyncFunc(categoryId)
        .then(response => {
            setProducts(response)
        })
        .catch(error=> {
            console.error(error)
            })
},[categoryId])

//console.log("products",products)

    return (
        <div> 
            <h1 className="welcome">{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer