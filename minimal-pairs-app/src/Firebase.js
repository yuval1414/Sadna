// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get, child } from "firebase/database";
import { getStorage, getDownloadURL, ref as sref } from "firebase/storage";

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

function createMinimalPairNode(id, word1, word1PhotoPaths, word1ManSoundPath, word1WomanSoundPath, word2, word2PhotoPaths, word2ManSoundPath, word2WomanSoundPath, soundPair, soundType, positionInWord) {
  return {
    id,
    words: [
      {
        word: word1,
        photo_paths: word1PhotoPaths,
        man_sound_path: word1ManSoundPath,
        woman_sound_path: word1WomanSoundPath,
      },
      {
        word: word2,
        photo_paths: word2PhotoPaths,
        man_sound_path: word2ManSoundPath,
        woman_sound_path: word2WomanSoundPath,
      }
    ],
    sound_pair: soundPair,
    sound_type: soundType,
    position_in_word: positionInWord,
  };
}

function writeWordData(id, word1, word1PhotoPaths, word1ManSoundPath, word1WomanSoundPath, word2, word2PhotoPaths, word2ManSoundPath, word2WomanSoundPath, soundPair, soundType, positionInWord) {
  const reference = ref(db, 'words/' + soundType + '/' + id);
  const newNode = createMinimalPairNode(id, word1, word1PhotoPaths, word1ManSoundPath, word1WomanSoundPath, word2, word2PhotoPaths, word2ManSoundPath, word2WomanSoundPath, soundPair, soundType, positionInWord);
  set(reference, newNode);
}

async function getAllMinimalPairs() {
  try {
    const snapshot = await get(child(dbRef, `words`));
    if (snapshot.exists()) {
      console.log(snapshot.val());
    } else {
      console.log("No data available");
    }
  } catch (error) {
    console.error(error);
  }
}

// const minimalPairs = getAllMinimalPairs();

// // Function to filter minimal pairs by sound type
// function filterPairsBySoundType(minimalPairs, soundType) {
//   return minimalPairs.filter(pair => pair.sound_type === soundType);
// }

// // Function to filter minimal pairs by position in word
// function filterPairsByPosition(minimalPairs, position) {
//   return minimalPairs.filter(pair => pair.position_in_word === position);
// }

// // Function to filter minimal pairs by a specific pair of sounds
// function filterPairsBySoundPair(minimalPairs, soundPair) {
//   return minimalPairs.filter(pair =>
//     pair.sound_pair === soundPair
//   );
// }

// // Function to get minimal pairs based on sound pair, sound type, and position in word
// async function getPairsByCriteria(soundType, soundPair, positionInWord) {
//     try {
//       const snapshot = await databaseRef.once('value');
//       const minimalPairsData = snapshot.val();

//       if (minimalPairsData) {
//         const minimalPairs = Object.values(minimalPairsData);   

//          // Filter minimal pairs based on provided criteria
//       const filteredPairs = minimalPairs.filter(pair =>
//         (soundPair === null || pair.sound_pair === soundPair) &&
//         (soundType === null || pair.sound_type === soundType) &&
//         (positionInWord === null || pair.position_in_word === positionInWord)
//       );

//         return filteredPairs;
//       } else {
//         throw new Error('No minimal pairs found.');
//       }
//     } catch (error) {
//       console.error('Error getting minimal pairs:', error);
//       return [];
//     }
//   }

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
          "word": "צב"
        },
        {
          "man_sound_path": "https://firebasestorage.googleapis.com/v0/b/hear-me-out-785e2.appspot.com/o/Sounds%2FMan%2F%D7%AA%D7%95.wav?alt=media&token=029b4d50-271f-4a4b-8e7d-e6fc096c724a",
          "photo_paths": "https://firebasestorage.googleapis.com/v0/b/hear-me-out-785e2.appspot.com/o/Images%2Fredflower.jpg?alt=media&token=abd2b0ea-b111-401c-95b2-c8a39fc513a5",
          "woman_sound_path": ".",
          "word": "תו"
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

// async function queryNodesByCriteria(sound_type, position_in_word, sound_pair) {
//   try {
//     let child = sound_pair;
//     let childFilter;
//     let pathName = sound_type;
//     let nodesQuery;

//     if (sound_pair !== null) {
//       pathName += '/' + sound_pair;
//       child = sound_type;
//       childFilter = sound_pair;

//       if (position_in_word !== null) {
//         pathName += '/' + position_in_word;
//         child = sound_pair;
//         childFilter = position_in_word;
//       }

//       nodesQuery = query(ref(db, 'words/' + pathName), orderByChild(child), equalTo(childFilter));
//     }
//     else {
//       //let nodesQuery = ref(db, 'words/'+ pathName);
//       nodesQuery = query(ref(db, 'words/' + pathName), orderByChild('sound_type'));
//     }

//     const snapshot = await get(nodesQuery);
//     const nodes = [];

//     snapshot.forEach((childSnapshot) => {
//       nodes.push(childSnapshot.val());
//     });

//     return nodes;
//   } catch (error) {
//     console.error('Error querying nodes:', error);
//     return null;
//   }
// }

// async function createNodesAndUpload() {
//   const filePath = 'words.xlsx'; // Replace with the actual file path  

//   try {
//     const rows = await readXlsxFile(filePath);
//     rows.shift(); // Remove header row

//     for (let row of rows) {
//       const [id, word1, word1PhotoPaths, word1ManSoundPath, word1WomanSoundPath, word2, word2PhotoPaths, word2ManSoundPath, word2WomanSoundPath, soundPair, soundType, positionInWord] = row;

//       const node = {
//         id,
//         words: [
//           {
//             word: word1,
//             photo_paths: word1PhotoPaths,
//             man_sound_path: word1ManSoundPath,
//             woman_sound_path: word1WomanSoundPath,
//           },
//           {
//             word: word2,
//             photo_paths: word2PhotoPaths,
//             man_sound_path: word2ManSoundPath,
//             woman_sound_path: word2WomanSoundPath,
//           }
//         ],
//         sound_pair: soundPair,
//         sound_type: soundType,
//         position_in_word: positionInWord,
//       };

//       console.log('Node:', node);
//       set(ref(db, 'words/' + soundType + '/' + soundPair + '/' + positionInWord + '/' + id), node);
//     }
//   } catch (error) {
//     console.error('Error reading Excel file:', error);
//   }
// }

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


export { downloadImageFromStorage, getAllMinimalPairs, fff };