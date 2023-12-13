import ItemListContainer from "./ItemListContainer/ItemListContainer";
 //import ProfileCards from "./ProfileCards";
// import imgQueso from "../../imagenes/batido.1.jpg";
//import  imgCheesecake from "../../imagenes/cheescake.jpg";
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

            {/* <div className="container">
                <div className="columns">
                    <div className="column is-4">
                        <ProfileCards titulo="titulo 1" img={imgQueso} />
                    </div>
                    <div className="column is-4">
                        <ProfileCards titulo="titulo 2" img={imgCheesecake} />
                    </div>
                    <div className="column is-4">
                        <ProfileCards titulo="titulo 3" img={imgQueso} />
                    </div>

                </div>
            </div> */}

        </div>
    )
}

export default Home;