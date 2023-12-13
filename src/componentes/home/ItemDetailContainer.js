import { useState , useEffect } from "react";
import { getProductsById } from "./asyncMock";
import ItemDetail from "./ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import "./ItemDetailContainer.scss";


const ItemDetailContainer = ()=>{
    const [product, setProducts] = useState(null)
    const {ItemId} = useParams()

    useEffect(() =>{
        getProductsById(ItemId)
        .then(response =>{
            setProducts(response)
        })
        .catch(error =>{
            console.error(error)
        })
    },[ItemId])

    return(
        <div className="container-detail">
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer