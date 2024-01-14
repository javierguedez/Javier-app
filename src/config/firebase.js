import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA0uhThViYIlT4Dz6hQavCqzDwhIfhnioo",
    authDomain: "proyecto-coder-42733.firebaseapp.com",
    projectId: "proyecto-coder-42733",
    storageBucket: "proyecto-coder-42733.appspot.com",
    messagingSenderId: "983186670581",
    appId: "1:983186670581:web:6df6deb6369f66638e96bc"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)