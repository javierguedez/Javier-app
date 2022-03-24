import React from 'react'
import imagen1 from '../imagenes/imagen1.jpg'

function ItemDetail() {
    return (
    <div className="card text-center" >
       <img src={imagen1} alt="cheesecake" />
        <div className="card-body">
            <h4 className="card-title">Cheesecake</h4>
            <p>Postre de frutos rojos</p>
            <p>100$</p>
            <a href="#!" className="btn btn-primary ">
                comprar
            </a>

        </div>
    
</div>
    )
}
    export default ItemDetail
