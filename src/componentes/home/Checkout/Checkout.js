import { useState, useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../config/firebase";
import { collection, Timestamp, writeBatch, getDocs, query, where, documentId, addDoc  } from "firebase/firestore";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import "bulma/css/bulma.css";



const Checkout = ()  => {
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState('');
    const {cart, total, clearCart} = useContext(CartContext)

    const createOrder = async ({user, phone, email }) => {
        setLoading(true)

        try{
            const objOrder ={
                buyer: {
                    user, phone, email
                },
                items: cart,
                total: total,
                date: Timestamp.fromDate(new Date()),
            };

            const batch = writeBatch(db);
            const outOfStock = [];
            const ids  = cart.map(prod => prod.id)
            const ItemsRef = collection(db, 'Items')
            const ItemsAddedFromFirestore = await getDocs(query(ItemsRef, where(documentId(), 'in', ids)));

            const { docs } = ItemsAddedFromFirestore;
            docs.forEach(doc => {
                const dataDoc = doc.data();
                const stockDb = dataDoc.stock;
                const ItemsAddedToCart = cart.find(prod => prod.id === doc.id);
                const prodQuantity = ItemsAddedToCart?.quantity;

                if(stockDb >= prodQuantity){
                    batch.update(doc.ref, { stock: stockDb - prodQuantity});
                }else{
                    outOfStock.push({ id: doc.id, ...dataDoc});
                }
            });

            if(outOfStock.length === 0){
                await batch.commit();
                const orderRef = collection(db, 'orders');

                const orderAdded = await  addDoc(orderRef, objOrder);
                setOrderId(orderAdded.id);
                clearCart();
            }else{
                console.error("Hay productos fuera de stock")
            }
    }catch(error) {
        console.log(error)
    }finally{
        setLoading(false)
    }
    }

    if(loading) {
        return <h1>Se esta generando la orden...</h1>
    }

    if(orderId) {
        return <h1>El id de su orden es : {orderId}</h1>
    }

    return (

        <div className="container">
            <h1 className="title has-text-centered is-primary">Checkout</h1>
            <CheckoutForm onConfirm={createOrder}/>
        </div>
    )
}

export default Checkout;