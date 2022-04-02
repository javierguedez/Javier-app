import { useState, useEffect } from "react"
import ItemList from "./ItemList"

let productosIniciales = [
    {
        id: 1,
        nombre: " Cheesecake",
        precio: 100
    },
    {
        id: 2,
        nombre: " producto2",
        precio: 150
    },
    {
        id: 3,
        nombre: " producto3",
        precio: 100
    }
]

const ItemListContainer = () => {

    const [loading, setLoading] = useState(true)
    const [productos, setProductos] = useState([])

    useEffect(() => {

        const promesa = new Promise((res, rej) => {
            setTimeout(() => {
                res(productosIniciales)
            }, 2000);
        });

        promesa
            .then((respuestaApi) => {
                setProductos(productosIniciales)
            }).catch((errorApi) => {
                // aqui va una noti
            })
            .finally(() => {
                setLoading(false)
            })
    })


    return (
        <>
        <p>{loading ? "Cargando...": "Carga completa"}</p>
        <ItemList productosp={productos}/>
        </>
    );
}

export default ItemListContainer;