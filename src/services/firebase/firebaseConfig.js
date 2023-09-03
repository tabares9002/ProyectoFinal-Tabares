import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyANovlyv-OxfHr2l6J7gX6liO8-rn6udJs",
    authDomain: "proyectofinaltabares.firebaseapp.com",
    projectId: "proyectofinaltabares",
    storageBucket: "proyectofinaltabares.appspot.com",
    messagingSenderId: "32779583586",
    appId: "1:32779583586:web:71931542a19516ecdf913b"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)