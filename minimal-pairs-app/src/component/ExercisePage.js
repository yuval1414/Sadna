
// 2ND ATTEMPT
import React from 'react';
import { Button, Typography, AppBar, Toolbar, IconButton, Menu, MenuItem, Grid } from '@mui/material';
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
import menuBtn from './../images/buttons/menuBtn.png';
import soundBtn from './../images/buttons/soundBtn.png';
import ImagePlaceHolder from './ImagePlaceHolder';
import { makeStyles } from '@mui/styles';

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
    //'-webkit-text-stroke: 1px font-size: x-large -webkit-text-stroke-color: rgb(36 71 88)'
  },
  selectedImage: {
    backgroundImage: `url(${imgBg})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center',
    width: '330px', height: '330px', display: 'flex', alignItems: 'center', justifyContent: 'center'
  }
}));

const images = [
  {
    image1: {
      src: Train, description: 'רכבת'
    },
    image2: {
      src: Rakefet, description: 'רקפת'
    }
  },
  {
    image1: {
      src: Monkey, description: 'קוף'
    },
    image2: {
      src: Drum, description: 'תוף'
    },
  }
];
let dupImages = [...images];
const selectRandomImages = () => { // !
  if (dupImages.length === 0) {
    dupImages = [...images];
  }
  const shuffledImages = dupImages.sort(() => 0.5 - Math.random());
  const selected = shuffledImages.pop();
  return selected;
};

const randomImages = selectRandomImages();

function ExercisePage() {  // START OF THE RUN
  const theme = useTheme();
  const classes = useStyles();
  const imageStyle = {
    maxWidth: '60%',
    maxHeight: '60%',
  };

  function handleImageClick(event) {
    //const clickedImage = event.target.getAttribute('data-image'); // 0 or 1, can help identify the clicked image, can be use later
    if (event.target.id === 'right') {
      alert('Good job!');
      //setImageClicked(true);
    } else {
      alert('Try again');
    }
  };

  const handleListenAgainClick = () => {

    alert('listen again');
  };

  const [selectedImages, setSelectedImages] = React.useState(randomImages); // !

  const handleNextClick = () => {
    setSelectedImages(selectRandomImages());
  };
  const handlePreviousClick = () => {
    setSelectedImages(selectRandomImages());
  };

  return (
    <div style={{ backgroundImage: `url(${exercisePage})`, height: '100vh', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div style={{ margin: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
        <div style={{ marginTop: '30px', maxWidth: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', height: '90%', width: '80%' }}>

          <Typography fontSize={'170%'} fontWeight="bold" color={theme.palette.darkBlue}>
            הקשיבו ובחרו את התמונה הנכונה
          </Typography>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', justifyContent: 'center', height: '100%', width: '70%' }}>
            <ImagePlaceHolder
              innerImage={selectedImages.image1?.src}
              textColor={theme.palette.yellow}
              imageText={selectedImages.image1?.description}
              handleClick={handleImageClick}
            />
            <ImagePlaceHolder
              innerImage={selectedImages.image2?.src}
              textColor={theme.palette.yellow}
              imageText={selectedImages.image2?.description}
              handleClick={handleImageClick}
            />
          </div>
          <Grid container justifyContent='center' style={{ textAlign: 'center', width: '50%' }}>
            <Grid item xs={4}>
              <IconButton color="inherit" onClick={handleNextClick}>
                <img src={nextBtn} style={{ width: '100%', height: '100%' }} />
              </IconButton>
            </Grid>
            <Grid item xs={4}>
              <IconButton color="inherit" onClick={handleListenAgainClick}>
                <img src={replaySound} style={{ width: '100%', height: '100%' }} />
              </IconButton>
            </Grid>
            <Grid item xs={4}>
              <IconButton color="inherit" onClick={handleNextClick}>
                <img src={prevBtn} style={{ width: '100%', height: '100%' }} />
              </IconButton>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default ExercisePage;