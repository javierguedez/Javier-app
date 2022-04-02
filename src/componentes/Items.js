const Items =({producto}) =>{
  return(
    <div>
      <p>{producto.nombre}</p>
      <p>Precio: {producto.precio}$</p>
    </div>
  )
}


// import React from 'react'

// export const Items = ({producto}) => {
//   return (
//     <li>{producto.nombre}</li>
//   )
// }

export default Items