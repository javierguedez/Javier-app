//import Header from "./componentes/header/Header";
import NavBar from "./componentes/header/NavBar/NavBar";
//import Home from "./componentes/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./componentes/home/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./componentes/home/ItemDetailContainer";

function App() {

      return (
      <div>
        <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
          <Route path="/Item/:ItemId" element={<ItemDetailContainer/>}/>
          <Route path="*" element={<h1>404 pagina no encontrada</h1>}/>
        </Routes>
        </BrowserRouter>
      </div>
      
      
  )}

  export default App