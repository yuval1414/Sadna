// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBdpchf45b6z7_wEa-E3vO_fv0JuEwK1dw",
    authDomain: "hear-me-out-785e2.firebaseapp.com",
    projectId: "hear-me-out-785e2",
    storageBucket: "hear-me-out-785e2.appspot.com",
    messagingSenderId: "994012007554",
    appId: "1:994012007554:web:35d88c91c2fcdbcd4bf89b",
    databaseURL: "https://hear-me-out-785e2-default-rtdb.europe-west1.firebasedatabase.app",
};

export default function FirebaseLauncher() {
    const app = initializeApp(firebaseConfig);
    const db = getDatabase(app);
    const reference = ref(db, 'words');

    set (reference, {
        
    })
    return (
        // Initialize Firebase

        console.log(reference.key)
    );
    }
