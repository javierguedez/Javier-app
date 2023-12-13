import "bulma/css/bulma.css";
import { useState } from "react";


function ProfileCards(props) {
    const { titulo, img } = props;

    const [count, setCount] = useState(0);

    function handleClickSuma() {
        setCount(count + 1);
    }

    function handleClickResta() {

        if (count > 0) {

            setCount(count - 1);
        }
    }

    return (

        <div className="card">
            <div className="card-img">
                <figure>
                    <img src={img} />
                </figure>
            </div>
            <div className="card-content">
                <div className="media-content">
                    <h3 className="title is-4">Titulo:{titulo}</h3>
                </div>
                <div className="columns">
                    <div className="column">
                        <button className="button is-primary is-outlined is-fullwidth is-medium" onClick={handleClickSuma}>
                            <p>agregar</p>
                        </button>
                    </div>
                    <div className="column">
                        <p className="subtitle is-4">{count}</p>
                    </div>
                    <div className="column">
                        <button className="button is-primary is-outlined is-fullwidth is-medium" onClick={handleClickResta}>
                            <p>quitar</p>
                        </button>

                    </div>

                </div>



            </div>

        </div>
    )
}

export default ProfileCards;