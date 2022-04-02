import ItemListContainer from "./ItemListContainer"
import ItemCount from "./ItemCount";
import ItemDetailContainer from "./ItemDetailContainer"
import Carrito from "./Carrito"
import { BrowserRouter, Route , Routes } from "react-router-dom";


const Main = (props) => {
    return(

        <Main className="container justify-content-center align-items-center">
     <Routes>
       <Route path="/"element={<ItemListContainer/>}/>
       <Route path="/Categoria:id"element={<ItemListContainer/>}/>
       <Route path="/Item:id"element={<ItemDetailContainer/>}/> 
       <Route path="/Carrito"element={<Carrito/>}/>
     </Routes>
      </Main>

        // <main>
        //     <div>
        //     <h2>Biemvenido {props.nombre} {props.alpellido}</h2>
        //     <ItemListContainer/>
        //     <ItemCount inicial= {1}/>
        //     <ItemDetailContainer/>
        //     </div>
        // </main>
    )
}

export default Main;