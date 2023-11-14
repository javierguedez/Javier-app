import Header from "./componentes/header/Header";
import ItemListContainer from "./componentes/home/ItemListContainer";

function App() {

      return (
      <div>
        <Header/>
        <div className="item-list">
            <ItemListContainer greeting={'Bienvenidos'}/>
            </div>
      </div>
      
      
  )}

  export default App