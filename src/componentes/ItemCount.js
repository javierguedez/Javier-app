import {useState} from "react"



const ItemCount = (props) => {
   const [contador,setContador] = useState(props.inicial)


   const useclick  = ()=> {
       setContador(contador + 1) 
 }

    const restar = () =>{
    setContador(contador - 1) 
 }

    const onAdd = (miOnAdd) => {
        console.log("compra exitosa");
    }
    return (
        <main className="container">
            <p>Mi contador actual : {contador} </p>
            <button onClick={useclick}>+</button>
            <button onClick={onAdd}>comprar</button>
            <button onClick={restar}>-</button>
            
            </main>
    );
} 


export default ItemCount;