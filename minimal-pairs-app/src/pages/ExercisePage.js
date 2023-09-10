import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import { Typography, IconButton, Grid, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import replaySound from './../images/buttons/replaySoundBtn.png';
import exercisePage from './../images/pagesBg/exercisePageWithoutText.png';
import nextBtn from './../images/buttons/leftArrowBlueBtn.png';
import prevBtn from './../images/buttons/rightArrowBlueBtn.png';
import returnSettingsBtn from './../images/buttons/leftArrowBtn.png';
import ImagePlaceHolder from '../component/ImagePlaceHolder';
import { downloadImageFromStorage, getWordsFromDB } from '../Firebase.js';
import Confetti from 'react-confetti';
import { randomReaction } from '../component/utils/Reaction';
import { useNavigate } from 'react-router-dom';

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
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    const getFromDB = async () => {
      console.log(`${location.state.category}, ${location.state.placeInWord}, ${location.state.letters}`);
      const wordsJSON = await getWordsFromDB(location.state.category, location.state.placeInWord, location.state.letters);
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
            id: 0, src: await getImageFromStorage(w[0].photo_paths), description: w[0].word
          },
          image1: {
            id: 1, src: w[1].photo_paths, description: w[1].word
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
        console.log("voice to send: " + voice);
        playAudio(randomReaction(true, voice)); ///!!!!!!!!!!!!
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
        playAudio(randomReaction(false, voice)); //!!!!!!!!
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

  const navigate = useNavigate();
  const navigateBackToSetting = () => {
    navigate("/ExerciseOptionsPage");
  };

  return (
    <div className="App" style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      position: 'absolute',
      width: '100%',
      backgroundImage: `url(${exercisePage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      zIndex: -1,
      direction: 'rtl',
    }}>
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
      <div className="board-container" style={{ 
        justifyContent: 'center', 
        alignItems: 'center', 
        maxWidth: '1000px',
        maxHeight: '700px', 
        margin: '0 auto', 
        padding: '20px',
        textAlign: 'center',
      }}>
        <Typography fontSize={'350%'} color={theme.palette.darkBlue}>
          הקשיבו ובחרו את התמונה הנכונה
        </Typography>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '80px', height: '50%', width: '100%' }}>
          {(images) && (
            <>
              <ImagePlaceHolder
                innerImage={images[currentIndex]?.image0?.src}
                textColor={theme.palette.yellow}
                imageText={images[currentIndex]?.image0?.description}
                handleClick={() => handleImageClick(images[currentIndex]?.image0.id)}
                borderColor={borderColorImg[0]}
                isInExercise={true}
              />
              <ImagePlaceHolder
                innerImage={images[currentIndex]?.image1?.src}
                textColor={theme.palette.yellow}
                imageText={images[currentIndex]?.image1?.description}
                handleClick={() => handleImageClick(images[currentIndex]?.image1.id)}
                borderColor={borderColorImg[1]}
                isInExercise={true}
              />
            </>
          )}
        </div>
        <Grid container justifyContent='center' style={{ textAlign: 'center', marginTop: '40px' }}>
          <Grid item xs={4}>
            <IconButton onClick={handlePreviousClick} style={{
              left: '130px',
              opacity: currentIndex === 0 ? 0.5 : 1,
              pointerEvents: currentIndex === 0 ? 'none' : 'auto',
            }}>
              <img src={prevBtn} style={{ width: '100%', height: '100%' }} />
            </IconButton>
          </Grid>
          <Grid item xs={4}>
            <IconButton onClick={handleListenClick}>
              <img src={replaySound} style={{ width: '100%', height: '100%' }} />
            </IconButton>
          </Grid>
          { currentIndex === images?.length - 1 ? 
            (<Grid item xs={4}>
              <IconButton onClick={navigateBackToSetting} style={{
                right: '130px',
              }}>
                <img src={returnSettingsBtn} style={{ width: '80px', height: '100%' }} />
              </IconButton>
            </Grid>) :
            (<Grid item xs={4}>
              <IconButton onClick={handleNextClick} style={{
                right: '130px',
              }}>
                <img src={nextBtn} style={{ width: '100%', height: '100%' }} />
              </IconButton>
            </Grid>)
          }
        </Grid>
      </div>
    </div>
  );
}