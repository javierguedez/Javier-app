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
            })
            .finally(() => {
                setLoading(false)
            })
    })


    return (
        <main className="containerlist">
            <h2>Bienvenido,</h2>
            {productos.length>0?
            <ItemList productosp={productos}> </ItemList>:
            <div>cargando productos...</div>}
            
        </main>
    );
}

export default ItemListContainer;