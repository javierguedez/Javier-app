import { useState } from "react";
import "bulma/css/bulma.css";

const CheckoutForm = ({onConfirm}) => {
    const [ user, setUser] = useState ('')
    const [ phone, setPhone] = useState ('')
    const [ email, setEmail] = useState ('')

    const handleConfirm = (event) =>{
        event.preventDefault()
        const userData = {
            user, phone, email
        }
        onConfirm(userData)
    }

    return(
        
        <div className="box">
            <div className="container">
            <form onSubmit={handleConfirm} method="post">

                <div className="field">
                <label className="label">Nombre</label>
                    <input className="input is-primary" type="text" required value={user} onchange={({ target }) => setUser(target.value)}/> 
                </div>

                <div className="field">
                <label className="label">Telefono</label>
                    <input className="input is-primary" type="text" required value={phone} onchange={({ target }) => setPhone(target.value)}/>
                </div>

                <div className="field">
                    <label className="label">Correo</label>
                    <div className="control">
                    <input className="input is-primary" type="text" required value={email} onchange={({ target }) => setEmail(target.value)}/>
                    </div>
                    
                </div>
                <input className="button is-primary" type="submit" value="crear compra" />
            </form>
            </div>
        </div>

    )
}

export default CheckoutForm;