import NavBar from "./componentes/NavBar.js";
import { Container } from 'react-bootstrap';
import ItemListContainer from "./componentes/ItemListContainer.js";

function App(){
    return <>
    <NavBar/>
    <ItemListContainer contenido= "clase"  clase= "componentes" />
    </>
  }
  export default App