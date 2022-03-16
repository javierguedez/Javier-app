import NavBar from "./componentes/NavBar.js";
import { Container, Button } from 'react-bootstrap';
import ItemListContainer from "./componentes/ItemListContainer.js";
import ItemCount from "./componentes/ItemCount.js";


function App(){
  const miOnAdd = () => {}
    return <>
    <NavBar/>
    <ItemListContainer contenido= "clase" onAdd= {miOnAdd}  clase= "componentes"  />
    <ItemCount inicial= {1}/>
    </>
  }
  export default App