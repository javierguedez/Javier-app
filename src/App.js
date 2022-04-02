import Header from "./componentes/Header"
import Main from "./componentes/Main"
import Footer from './componentes/Footer'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route , Routes } from "react-router-dom";
import Carrito from "./componentes/Carrito"
import ItemDetailContainer from "./componentes/ItemDetailContainer";
import ItemListContainer from "./componentes/ItemListContainer";


function App() {

      return (
      <BrowserRouter>
      <Header/>
      <Main className="container justify-content-center align-items-center">
     {/* <Routes>
       <Route path="/"element={<ItemListContainer/>}/>
       <Route path="/Categoria:id"element={<ItemListContainer/>}/>
       <Route path="/Item:id"element={<ItemDetailContainer/>}/> 
       <Route path="/Carrito"element={<Carrito/>}/>
     </Routes> */}
      </Main>
      
      <Footer/>
      <ToastContainer/>
    </BrowserRouter>
  )}

  export default App