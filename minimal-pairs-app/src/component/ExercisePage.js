
// 2ND ATTEMPT
import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { Button, Typography, AppBar, Toolbar, IconButton, Menu, MenuItem, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import VolumeUp from '@mui/icons-material/VolumeUp';
//import { Menu as MenuIcon, VolumeUp } from '@material-ui/icons';
import Replay from '@mui/icons-material/ReplayRounded';
import Next from '@mui/icons-material/ArrowBackTwoTone'; // ArrowBackIosTwoTone // ArrowBackTwoTone
import Previous from '@mui/icons-material/ArrowForwardTwoTone'; // ArrowBackIosTwoTone // ArrowBackTwoTone
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
  const imageStyle = {
    maxWidth: '60%',
    maxHeight: '60%',
  };

  // --------------------NAVIGATE--------------------------
  const navigate = useNavigate();
  const navigateHome = () => {
    navigate('/');
  };
  const navigateAbout = () => {
    navigate('/AboutPage');
  };
  const navigateHelp = () => {
    navigate('/HelpPage');
  };
  const navigateExercise = () => {
    navigate('/ExerciseOptionsPage');
  };
  const navigateGamesOptions = () => {
    navigate('/GamesOptionsPage');
  };
  const navigateExerciseOptions = () => {
    navigate('/ExerciseOptionsPage');
  }

  // -------------HANDLERS----------------
  const [soundAnchorEl, setSoundAnchorEl] = useState(null); 
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);

  const handleSoundClick = (event) => {
    setSoundAnchorEl(event.currentTarget);
  };

  const handleMenuClick = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleSoundClose = () => {
    setSoundAnchorEl(null);
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
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
    <body style={{ backgroundImage: `url(${exercisePage})`, height: '100vh', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div>
        <Toolbar variant="dense">
          <div style={{ flexGrow: 1 }}>
            <IconButton color="inherit" onClick={handleSoundClick}>
              <VolumeUp />
            </IconButton>
          </div>
          <Menu
            anchorEl={soundAnchorEl}
            open={Boolean(soundAnchorEl)}
            onClose={handleSoundClose}
          >
            <MenuItem onClick={handleSoundClose} >Man</MenuItem>
            <MenuItem onClick={handleSoundClose}>Woman</MenuItem>
            <MenuItem onClick={handleSoundClose}>Both</MenuItem>
            <MenuItem onClick={handleSoundClose}>No sound</MenuItem>
          </Menu>

          <IconButton color="inherit" onClick={handleMenuClick}>
            <MenuIcon style={{ maxWidth: '100%', display: 'flex' }} />
          </IconButton>
          <Menu
            anchorEl={menuAnchorEl}
            open={Boolean(menuAnchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={navigateHome} style={{ justifyContent: 'center' }}>ראשי</MenuItem>
              <MenuItem onClick={navigateExerciseOptions} style={{ justifyContent: 'center' }}>תרגול</MenuItem>
              <MenuItem onClick={navigateGamesOptions} style={{ justifyContent: 'center' }}>משחקים</MenuItem>
              <MenuItem onClick={navigateHelp} style={{ justifyContent: 'center' }}>עזרה</MenuItem>
              <MenuItem onClick={navigateAbout} style={{ justifyContent: 'center' }}>אודות</MenuItem>
          </Menu>

        </Toolbar>
        <div style={{ margin: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ maxWidth: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

            <Typography fontSize={'170%'} fontWeight="bold" color={theme.palette.darkBlue}>
              הקשיבו ובחרו את התמונה הנכונה
            </Typography>

            {/* <img src={exerciseText} style={{ display: 'flex', width: '100%' }} /> */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '9%' }}>
              <div>
                <Button onClick={() => handleImageClick}>
                  <div style={{ backgroundImage: `url(${imgBg})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', width: '330px', height: '330px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img
                      src={selectedImages.image1?.src}
                      alt="Left"
                      data-image="0"
                      style={imageStyle}
                      onClick={handleImageClick}
                    />
                  </div>

                </Button>
                <div>
                  <Typography variant="subtitle1" style={{ display: 'flex', justifyContent: 'center', width: '100%', marginRight: '50%', scale: '160%' }}>
                    {selectedImages.image1?.description}
                  </Typography>
                </div>
              </div>
              <div>
                <Button onClick={() => handleImageClick}>
                  <div style={{ backgroundImage: `url(${imgBg})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', width: '330px', height: '330px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img 
                      src={selectedImages.image2?.src}
                      alt="Right"
                      data-image="1"
                      style={imageStyle}
                      onClick={handleImageClick}
                      id="right"
                    />
                  </div>
                </Button>
                <Typography variant="subtitle1" style={{ display: 'flex', justifyContent: 'center', width: '100%', marginRight: '50%', scale: '160%' }}>
                  {selectedImages.image2?.description}
                </Typography>
              </div>
            </div>
            <Grid container justifyContent="center" style={{ margin: '5%', marginLeft: '18%' }}>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                  <IconButton color="inherit" onClick={handleNextClick}>
                    <img src={nextBtn} style={{ width: '100%', height: '100%' }} />
                  </IconButton>
                </Grid>
                <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                  <IconButton color="inherit" onClick={handleListenAgainClick}>
                    <img src={replaySound} style={{ width: '100%', height: '100%' }} />
                  </IconButton>
                </Grid>
                <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                  <IconButton color="inherit" onClick={handleNextClick}>
                    <img src={prevBtn} style={{ width: '100%', height: '100%' }} />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>

          </div>
        </div>
      </div>
    </body >
  );
}

export default ExercisePage;