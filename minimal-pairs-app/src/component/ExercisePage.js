
// 2ND ATTEMPT
import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import { Typography, AppBar, Toolbar, IconButton, Menu, MenuItem, Grid, colors } from '@mui/material';
import { useTheme } from '@mui/material/styles';
//import { Menu as MenuIcon, VolumeUp } from '@material-ui/icons';
import replaySound from './../images/buttons/replaySoundBtn.png';
import Drum from './../images/wordImages/drum.png';
import Monkey from './../images/wordImages/monkey.png';
import Rakefet from './../images/wordImages/cyclamen.png';
import Train from './../images/wordImages/train.png';
import exercisePage from './../images/pagesBg/exercisePageWithoutText.png';
import imgBg from './../images/buttons/imgBg.png';
import nextBtn from './../images/buttons/leftArrowBlueBtn.png';
import prevBtn from './../images/buttons/rightArrowBlueBtn.png';
import ImagePlaceHolder from './ImagePlaceHolder';
import { makeStyles } from '@mui/styles';
import { downloadImageFromStorage, fff, getAllMinimalPairs } from './../Firebase.js';
import { green } from '@mui/material/colors';

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
  console.log(voice);
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
  useEffect(() => {
    const wordsJSON = fff(location.state.category, location.state.letters, location.state.placeInWord);
    setWords(wordsJSON.map((i) => i.words));
    setVoice(location.state.voice);
  }, []);

  useEffect(() => {
    const getImageData = async () => {
      const imagesData = await Promise.all(words?.map(async (w) => {
        const primaryId = Math.round(Math.random())
        return {
          image1: {
            src: await getImageFromStorage(w[0].photo_paths), description: w[0].word
          },
          image2: {
            src: w[1].photo_paths, description: w[1].word
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


  function handleImageClick(id) {
    if (imgSelected === null) {
      if (id === images[currentIndex].primaryImg.primaryId) {
        setImgSelected(true);
        setBorderColorImg((colors) => {
          colors[id] = "green";
          return [...colors];
        })
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
    //TODO:
    //make sound for man /woman
    console.log('listen to man in path: ' + images[currentIndex]?.primaryImg.ManVoice);
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
  //getImageFromStorage();
  //getAllMinimalPairs();
  return (
    <div style={{ backgroundImage: `url(${exercisePage})`, height: '100vh', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div style={{ margin: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
        <div style={{ marginTop: '30px', maxWidth: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', height: '90%', width: '80%' }}>

          <Typography fontSize={'170%'} fontWeight="bold" color={theme.palette.darkBlue}>
            הקשיבו ובחרו את התמונה הנכונה
          </Typography>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', justifyContent: 'center', height: '100%', width: '70%' }}>
            {(images) && (
              <><ImagePlaceHolder
                innerImage={images[currentIndex]?.image1?.src}
                textColor={theme.palette.yellow}
                imageText={images[currentIndex]?.image1?.description}
                handleClick={() => handleImageClick(0)}
                borderColor={borderColorImg[0]}
              />
                <ImagePlaceHolder
                  innerImage={images[currentIndex]?.image2?.src}
                  textColor={theme.palette.yellow}
                  imageText={images[currentIndex]?.image2?.description}
                  handleClick={() => handleImageClick(1)}
                  borderColor={borderColorImg[1]}
                /></>
            )}
          </div>
          <Grid container justifyContent='center' style={{ textAlign: 'center', width: '50%' }}>
            <Grid item xs={4}>
              <IconButton color="inherit" onClick={handleNextClick}>
                <img src={nextBtn} style={{ width: '100%', height: '100%' }} />
              </IconButton>
            </Grid>
            <Grid item xs={4}>
              <IconButton color="inherit" onClick={handleListenClick}>
                <img src={replaySound} style={{ width: '100%', height: '100%' }} />
                {/* <embed src={images[currentIndex].primaryImg.ManVoice} loop="false" autostart="true" width="2" height="0" /> */}
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