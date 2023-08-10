import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import './index.css';
import theme from './theme';
import App from './App';
import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <ThemeProvider theme={theme}>
//     <React.StrictMode>
//       <App />

//     </React.StrictMode>
//   </ThemeProvider>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

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

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

function writeWordData (wordId, name , db) {
    const reference = ref(db, 'words/' + wordId);
    
    set (reference, {
        word: name        
    });        
}

writeWordData('Monkey', 'url');



async function getAllMinimalPairs() {
  const databaseRef = ref(db, 'minimal_pairs');
  
  try {
    const snapshot = await databaseRef.once('value');
    const minimalPairsData = snapshot.val();

    if (minimalPairsData) {
      return Object.values(minimalPairsData);
    } else {
      throw new Error('No minimal pairs found.');
    }
  } catch (error) {
    console.error('Error fetching minimal pairs:', error);
    return [];
  }
}

const minimalPairs = getAllMinimalPairs();

// Function to filter minimal pairs by sound type
function filterPairsBySoundType(minimalPairs, soundType) {
  return minimalPairs.filter(pair => pair.sound_type === soundType);
}

// Function to filter minimal pairs by position in word
function filterPairsByPosition(minimalPairs, position) {
  return minimalPairs.filter(pair => pair.position_in_word === position);
}

// Function to filter minimal pairs by a specific pair of sounds
function filterPairsBySoundPair(minimalPairs, soundPair) {
  return minimalPairs.filter(pair =>
    pair.sound_pair === soundPair
  );
}