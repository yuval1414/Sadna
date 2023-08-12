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
const databaseRef = ref(db, 'minimal_pairs');

function writeWordData (wordId, name , db) {
    const reference = ref(db, 'words/' + wordId);
    
    set (reference, {
        word: name        
    });        
}

writeWordData('Monkey', 'url');


// Function to add a new minimal pair to the Firebase Realtime Database
async function addMinimalPair(databaseRef, pairData) {
  try {    
    const newPairRef = databaseRef.push();

    await newPairRef.set(pairData);
    console.log('New minimal pair added to the database.');

    // TODO return the unique key. Not sure if we need it.
    //return newPairRef.key;
  } catch (error) {
    console.error('Error adding minimal pair:', error);
    return null;
  }
}

async function getAllMinimalPairs(databaseRef) { 
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

// // Call the functions and log the filtered minimal pairs
//
// (async () => {
//   const allPairs = await getAllMinimalPairs();
//   const soundFilteredPairs = filterPairsBySoundType(allPairs, desiredSoundType);
//   const positionFilteredPairs = filterPairsByPosition(soundFilteredPairs, desiredPosition);
//   const soundPairFilteredPairs = filterPairsBySoundPair(positionFilteredPairs, desiredSoundPair);

//   if (soundPairFilteredPairs.length > 0) {
//     console.log(`Retrieved ${soundPairFilteredPairs.length} minimal pairs with sound type ${desiredSoundType}, position ${desiredPosition}, and sound pair ${desiredSoundPair}:`, soundPairFilteredPairs);
//   } else {
//     console.log(`No minimal pairs found with sound type ${desiredSoundType}, position ${desiredPosition}, and sound pair ${desiredSoundPair}.`);
//   }
// })();