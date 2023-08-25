
import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import { Typography, IconButton, Grid, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import replaySound from './../images/buttons/replaySoundBtn.png';
import exercisePage from './../images/pagesBg/exercisePageWithoutText.png';
import imgBg from './../images/buttons/imgBg.png';
import nextBtn from './../images/buttons/leftArrowBlueBtn.png';
import prevBtn from './../images/buttons/rightArrowBlueBtn.png';
import ImagePlaceHolder from '../component/ImagePlaceHolder';
import { makeStyles } from '@mui/styles';
import { downloadImageFromStorage, fff, getAllMinimalPairs, getWordsFromDB } from '../Firebase.js';
import Confetti from 'react-confetti';

const useStyles = makeStyles(() => ({
  imageButton: {
    '&:hover': {
      filter: 'drop-shadow(0px 0px 16px #68859A) brightness(1.1)',
      backgroundColor: 'transparent !important',
    }
  },
  descriptionTypography: {
    display: 'flex', justifyContent: 'center', width: '100%', marginRight: '50%', scale: '160%',
    WebkitTextStroke: '1px', fontSize: 'x-large', WebkitTextStrokeColor: 'rgb(36 71 88)',
  },
  selectedImage: {
    backgroundImage: `url(${imgBg})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center',
    width: '330px', height: '330px', display: 'flex', alignItems: 'center', justifyContent: 'center'
  }
}));


function playAudio(voice) {
  let audio = new Audio(voice);
  if (audio) {
    audio.play();
  }
}

function getImageFromStorage(path) {
  return downloadImageFromStorage(path);
}


export default function ExercisePage() {
  const location = useLocation();
  const theme = useTheme();
  const [words, setWords] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [images, setImages] = useState(null);
  const [voice, setVoice] = useState(null);
  const [borderColorImg, setBorderColorImg] = useState([null, null]);
  const [imgSelected, setImgSelected] = useState(null);
  const [confetti, setConfetti] = useState(false);
  const [enteringPageAudio, setEnteringPageAudio] = useState(true);
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    const getFromDB = async () => {
      console.log(`${location.state.category}, ${location.state.placeInWord}, ${location.state.letters}`);
      const wordsJSON = await getWordsFromDB(location.state.category, location.state.placeInWord, location.state.letters);
      //fff(location.state.category, location.state.letters, location.state.placeInWord);
      setWords(wordsJSON.map((i) => i.words));
      setVoice(location.state.voice);
    }

    getFromDB();

  }, []);

  useEffect(() => {
    const getImageData = async () => {
      const imagesData = await Promise.all(words?.map(async (w) => {
        const primaryId = Math.round(Math.random());
        return {
          image0: {
            id: 0, src: await getImageFromStorage(w[0].photo_paths), description: `${w[0].word} ${w[0].word1_sound}`
          },
          image1: {
            id: 1, src: w[1].photo_paths, description: `${w[1].word} ${w[1].word2_sound}`
          },
          primaryImg: {
            primaryId,
            ManVoice: w[primaryId].man_sound_path,
            WomanVoice: w[primaryId].woman_sound_path,
          }
        }
      }
      ))
      setImages(imagesData);
    }
    if (words) {
     
      getImageData();
    }
  }, [words]);

  useEffect(() => {
    confetti && setTimeout(() => {
      setConfetti(false);
    }, 3000);
  }, [confetti]);

  const handleStartExercise = () => {
    setShowPopup(false);
    const playWordAudio = async () => {
      await Promise.all(images);
      if ((currentIndex === 0) && (images !== null)) {
        handleListenClick();
      }
    }
      playWordAudio();
  };

  function handleImageClick(id) {
    if (imgSelected === null) {
      if (id === images[currentIndex].primaryImg.primaryId) {
        setImgSelected(true);
        setBorderColorImg((colors) => {
          colors[id] = "green";
          return [...colors];
        })
        setTimeout(() => {
          setConfetti(true);
        }, 0);
        console.log('Good job!');
      } else {
        setImgSelected(false);
        setBorderColorImg((colors) => {
          colors[id] = "red";
          return [...colors];
        })
        setTimeout(() => {
          setImgSelected(null);
          setBorderColorImg((colors) => {
            colors[id] = "";
            return [...colors];
          })
        }, 2000);
        console.log('Try again');

      }
    }

  };

  const handleListenClick = () => {
    playAudio(voice === 'גבר' ? images[currentIndex]?.primaryImg.ManVoice : images[currentIndex]?.primaryImg.WomanVoice);
  };

  const handleNextClick = () => {
    if (currentIndex !== words.length - 1) {
      setImgSelected(null);
      setBorderColorImg([null, null]);
      setCurrentIndex((i) => i + 1);
      playAudio(voice === 'גבר' ? images[currentIndex + 1]?.primaryImg.ManVoice : images[currentIndex + 1]?.primaryImg.WomanVoice);
    }
    //end of words
  };
  const handlePreviousClick = () => {
    if (currentIndex !== 0) {
      setImgSelected(null);
      setBorderColorImg([null, null]);
      setCurrentIndex((i) => i - 1);
      playAudio(voice === 'גבר' ? images[currentIndex - 1]?.primaryImg.ManVoice : images[currentIndex - 1]?.primaryImg.WomanVoice);
    }
  };

  return (
    <div style={{ backgroundImage: `url(${exercisePage})`, height: '100vh', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div style={{ margin: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
        {showPopup && (
          <div className="overlay" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1 }}>
            <div className="popup" style={{ backgroundColor: theme.palette.white, border: '2px solid #ccc', padding: '20px', textAlign: 'center', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)' }}>
              <Typography variant="h4" gutterBottom>
                תרגול זוגות מינימלים
              </Typography>
              <Button variant="contained" style={{ backgroundColor: theme.palette.darkBlue, width: "90px" }} onClick={() => handleStartExercise()}>
                התחל
              </Button>
            </div>
          </div>
        )}
        {confetti && <Confetti tweenDuration={10000} gravity={0.45} />}
        <div style={{ marginTop: '30px', maxWidth: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', height: '85%', width: '80%' }}>

          <Typography fontSize={'170%'} fontWeight="bold" color={theme.palette.darkBlue}>
            הקשיבו ובחרו את התמונה הנכונה
          </Typography>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', justifyContent: 'center', height: '100%', width: '70%' }}>
            {(images) && (
              <><ImagePlaceHolder
                innerImage={images[currentIndex]?.image0?.src}
                textColor={theme.palette.yellow}
                imageText={images[currentIndex]?.image0?.description}
                handleClick={() => handleImageClick(images[currentIndex]?.image0.id)}
                borderColor={borderColorImg[0]}
              />
                <ImagePlaceHolder
                  innerImage={images[currentIndex]?.image1?.src}
                  textColor={theme.palette.yellow}
                  imageText={images[currentIndex]?.image1?.description}
                  handleClick={() => handleImageClick(images[currentIndex]?.image1.id)}
                  borderColor={borderColorImg[1]}
                /></>
            )}
          </div>
          <Grid container justifyContent='center' style={{ textAlign: 'center', width: '50%', height: '20%' }}>
            <Grid item xs={4}>
              <IconButton color="inherit" onClick={handleNextClick}>
                <img src={nextBtn} style={{ width: '100%', height: '100%' }} />
              </IconButton>
            </Grid>
            <Grid item xs={4}>
              <IconButton color="inherit" onClick={handleListenClick}>
                <img src={replaySound} style={{ width: '100%', height: '100%' }} />
              </IconButton>
            </Grid>
            <Grid item xs={4}>
              <IconButton color="inherit" onClick={handlePreviousClick}>
                <img src={prevBtn} style={{ width: '100%', height: '100%' }} />
              </IconButton>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}