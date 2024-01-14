//import Header from "./componentes/header/Header";
import NavBar from "./componentes/header/NavBar/NavBar";
//import Home from "./componentes/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./componentes/home/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./componentes/home/ItemDetailContainer";
import Cart from "./componentes/header/NavBar/Cart";
import Checkout from "./componentes/home/Checkout/Checkout";
import { CartProvider } from "./context/CartContext";

function App() {

      return (
      <div>
        <BrowserRouter>
        <CartProvider>
          <NavBar/>
          <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
          <Route path="/Item/:ItemId" element={<ItemDetailContainer/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="*" element={<h1>404 pagina no encontrada</h1>}/>
        </Routes>
        </CartProvider>
        
        
        </BrowserRouter>
      </div>
      
      
  )}

  export default App