import ItemListContainer from "./ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";

function Home() {

    return (

        <div>

            <section>
                <div>
                    <div>
                    <ItemListContainer greeting={'Bienvenidos'} />
                    </div>
                    <div className="itemdetailcontainer">
                    <ItemDetailContainer />    
                    </div>
                    
                </div>
            </section>
        </div>
    )
}

export default Home;