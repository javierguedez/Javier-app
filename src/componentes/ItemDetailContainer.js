import React from 'react';
import { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'

const item1 = { nombre:"Cheesecake",
                sabor:"Frutos rojos",
                precio:100

}

const ItemDetailContainer = () => {

    const [loading, setLoading] = useState(true)
    const [producto, setProducto] = useState(null)

    useEffect(() => {

        const promise = new Promise((res, rej) => {
            setTimeout(() => {
                res(item1)
            }, 3000);
        });

        promise
            .then((respuestaApi) => {
                setProducto(item1)
            }).catch((errorApi) => {
            })
            .finally(() => {
                setLoading(false)
            })
    })


    return (
        <div className="container justify-content-center align-items-center">
            <div className="row">
                <div className="col-md-4">
                    {producto?
                <ItemDetail></ItemDetail>:
                <div>Cargando producto...</div>}
                </div>
            </div>
        </div>
    );
}

export default ItemDetailContainer