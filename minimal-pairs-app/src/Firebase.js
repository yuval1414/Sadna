// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, set , get, query, orderByChild, equalTo } from "firebase/database";
import { getStorage, getDownloadURL, ref as sref } from "firebase/storage";
//import readXlsxFile from 'read-excel-file/node';

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
const storage = getStorage();
const dbRef = ref(db);

async function getWordsFromDB(soundType, positionInWord, soundPair) {
  try {
      const nodesQuery = query(ref(db, 'words/' + soundType), orderByChild('sound_type'), equalTo(soundType));
      
      const snapshot = await get(nodesQuery);
      let nodes = [];

      snapshot.forEach((childSnapshot) => {    
      nodes.push(childSnapshot.val());
    });

    if (soundPair != "הכל") {
      nodes = nodes.filter(item => item.sound_pair == soundPair);
    }
    if (positionInWord != "הכל"){
      nodes = nodes.filter(item => item.position_in_word == positionInWord);
    }
    
    return nodes;
  } catch (error) {
    console.error('Error querying nodes:', error);
    return null;
  }
}

// Function to create a node from Excel data and upload it
// async function createNodesAndUpload() {
//   const filePath = 'C:/Maya/personal/Studies/סדנה/words.xlsx'; 
    
//   try {
//     const rows = await readXlsxFile(filePath);

//     for (let row of rows) {
//       const [id, word1, word1PhotoPaths, word1ManSoundPath, word1WomanSoundPath, word1Sound, word2, word2PhotoPaths, word2ManSoundPath, word2WomanSoundPath, word2Sound, soundPair, soundType, positionInWord] = row;

//       const node = {
//         id : id,
//         words: [
//           {
//             word: word1,
//             photo_paths: word1PhotoPaths,
//             man_sound_path: word1ManSoundPath,
//             woman_sound_path: word1WomanSoundPath,
//             word1_sound: word1Sound,
//           },
//           {
//             word: word2,
//             photo_paths: word2PhotoPaths,
//             man_sound_path: word2ManSoundPath,
//             woman_sound_path: word2WomanSoundPath,
//             word2_sound: word2Sound,
//           }
//         ],
//         sound_pair: soundPair,
//         sound_type: soundType,
//         position_in_word: positionInWord,
//       };
   
//       //set (ref(db, 'words/' + soundType + '/' + soundPair + '/' + positionInWord + '/' + id), node);   
//       set (ref(db, 'words/' + soundType + '/' + id), node);   
//     }
//   } catch (error) {
//     console.error('Error reading Excel file:', error);
//   }
// }

// Function to download an image from Firebase Storage
async function downloadImageFromStorage(imageUrl) {
  try {
    const ref = sref(storage, imageUrl);
    const response = await getDownloadURL(ref);
    console.log("response: " + response.toString());

    return response;

  } catch (error) {
    console.error('Error downloading image:', error);
    return null;
  }
}

// function createMinimalPairNode(id, word1, word1PhotoPaths, word1ManSoundPath, word1WomanSoundPath, word1Sound, word2, word2PhotoPaths, word2ManSoundPath, word2WomanSoundPath, word2Sound, soundPair, soundType, positionInWord) {
//   return {
//     id,
//     words: [
//       {
//         word: word1,
//         photo_paths: word1PhotoPaths,
//         man_sound_path: word1ManSoundPath,
//         woman_sound_path: word1WomanSoundPath,
//         word1_sound: word1Sound,
//       },
//       {
//         word: word2,
//         photo_paths: word2PhotoPaths,
//         man_sound_path: word2ManSoundPath,
//         woman_sound_path: word2WomanSoundPath,
//         word2_sound: word2Sound,
//       }
//     ],
//     sound_pair: soundPair,
//     sound_type: soundType,
//     position_in_word: positionInWord,
//   };
// }

// function writeWordData(id, word1, word1PhotoPaths, word1ManSoundPath, word1WomanSoundPath, word1Sound, word2, word2PhotoPaths, word2ManSoundPath, word2WomanSoundPath, word2Sound, soundPair, soundType, positionInWord) {
//   const reference = ref(db, 'words/' + soundType + '/' + id);
//   const newNode = createMinimalPairNode(id, word1, word1PhotoPaths, word1ManSoundPath, word1WomanSoundPath, word1Sound, word2, word2PhotoPaths, word2ManSoundPath, word2WomanSoundPath, word2Sound, soundPair, soundType, positionInWord);
//   set(reference, newNode);
// }

// async function getAllMinimalPairs() {
//   try {
//     const snapshot = await get(child(dbRef, `words`));
//     if (snapshot.exists()) {
//       console.log(snapshot.val());
//     } else {
//       console.log("No data available");
//     }
//   } catch (error) {
//     console.error(error);
//   }
// }







// // // Call the functions and log the filtered minimal pairs
// //
// // (async () => {
// //   const allPairs = await getAllMinimalPairs();
// //   const soundFilteredPairs = filterPairsBySoundType(allPairs, desiredSoundType);
// //   const positionFilteredPairs = filterPairsByPosition(soundFilteredPairs, desiredPosition);
// //   const soundPairFilteredPairs = filterPairsBySoundPair(positionFilteredPairs, desiredSoundPair);

// //   if (soundPairFilteredPairs.length > 0) {
// //     console.log(`Retrieved ${soundPairFilteredPairs.length} minimal pairs with sound type ${desiredSoundType}, position ${desiredPosition}, and sound pair ${desiredSoundPair}:`, soundPairFilteredPairs);
// //   } else {
// //     console.log(`No minimal pairs found with sound type ${desiredSoundType}, position ${desiredPosition}, and sound pair ${desiredSoundPair}.`);
// //   }
// // })();


function fff(category, letters, placeInWord) {
  console.log("categorys: " + category + " , " + letters + " , " + placeInWord);
  return (
    [{
      "id": 1,
      "position_in_word": "start",
      "sound_pair": "ת,ט-צ",
      "sound_type": "manner",
      "words": [
        {
          "man_sound_path": "https://firebasestorage.googleapis.com/v0/b/hear-me-out-785e2.appspot.com/o/Sounds%2FMan%2F%D7%A6%D7%91.wav?alt=media&token=9d92c53c-2cb1-4335-83a8-b524f8547522",
          "photo_paths": "https://firebasestorage.googleapis.com/v0/b/hear-me-out-785e2.appspot.com/o/Images%2Fflowers.jpeg?alt=media&token=20843e0c-8889-4c77-b20b-d9f0a09dce4d",
          "woman_sound_path": ".",
          "word": "צב",
          "sound": "TS"
        },
        {
          "man_sound_path": "https://firebasestorage.googleapis.com/v0/b/hear-me-out-785e2.appspot.com/o/Sounds%2FMan%2F%D7%AA%D7%95.wav?alt=media&token=029b4d50-271f-4a4b-8e7d-e6fc096c724a",
          "photo_paths": "https://firebasestorage.googleapis.com/v0/b/hear-me-out-785e2.appspot.com/o/Images%2Fredflower.jpg?alt=media&token=abd2b0ea-b111-401c-95b2-c8a39fc513a5",
          "woman_sound_path": ".",
          "word": "תו",
          "sound": "T"
        }
      ]
    },
    {
      "id": 2,
      "position_in_word": "start",
      "sound_pair": "ת,ט-צ",
      "sound_type": "manner",
      "words": [
        {
          "man_sound_path": ".",
          "photo_paths": ".",
          "woman_sound_path": ".",
          "word": "טבע"
        },
        {
          "man_sound_path": ".",
          "photo_paths": ".",
          "woman_sound_path": ".",
          "word": "צבע"
        }
      ]
    },
    {
      "id": 3,
      "position_in_word": "start",
      "sound_pair": "ת,ט-צ",
      "sound_type": "manner",
      "words": [
        {
          "man_sound_path": ".",
          "photo_paths": ".",
          "woman_sound_path": ".",
          "word": "צל"
        },
        {
          "man_sound_path": ".",
          "photo_paths": ".",
          "woman_sound_path": ".",
          "word": "תל"
        }
      ]
    },
    {
      "id": 4,
      "position_in_word": "start",
      "sound_pair": "ת,ט-צ",
      "sound_type": "manner",
      "words": [
        {
          "man_sound_path": ".",
          "photo_paths": ".",
          "woman_sound_path": ".",
          "word": "צופר"
        },
        {
          "man_sound_path": ".",
          "photo_paths": ".",
          "woman_sound_path": ".",
          "word": "תופר"
        }
      ]
    }]
  );
}


// // Example usage
// const sound_type = 'manner'; 
// const position_in_word = null; 
// const sound_pair = "ת,ט-צ";     

// queryNodesByCriteria(sound_type, position_in_word, sound_pair)
//   .then((nodes) => {
//     if (nodes) {
//       console.log('Nodes matching criteria:', nodes);
//     } else {
//       console.log('Query failed or no nodes found.');
//     }
//   });


export { downloadImageFromStorage, fff, getWordsFromDB };