
// 2ND ATTEMPT
import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { Button, Typography, AppBar, Toolbar, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import VolumeUp from '@mui/icons-material/VolumeUp';
//import { Menu as MenuIcon, VolumeUp } from '@material-ui/icons';
import Replay from '@mui/icons-material/ReplayRounded';
import Next from '@mui/icons-material/ArrowBackTwoTone'; // ArrowBackIosTwoTone // ArrowBackTwoTone

import Drum from './../images/1_1.jpg';
import Monkey from './../images/1_0.jpg';
import Rakefet from './../images/2_1.jpg';
import Train from './../images/2_0.jpg';
import bg6 from './../images/bg6.jpg';

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
  const imageStyle = {
    maxWidth: '100%',
    maxHeight: '100%',
  };

  const [soundAnchorEl, setSoundAnchorEl] = useState(null); // -----------------------------
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



  // ----------------------------------------------
  const navigate = useNavigate();
  const navigateHome = () => {
    navigate('/');
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

  return (
    <body style={{ backgroundImage: `url(${bg6})`, height: '100vh', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div>
        <Toolbar variant="dense">
          <IconButton color="inherit" onClick={handleSoundClick}>
            <VolumeUp />
          </IconButton>
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
          <div style={{ flexGrow: 1, textAlign: 'center' }}>EXERCISE</div>
          <IconButton color="inherit" onClick={handleMenuClick}>
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={menuAnchorEl}
            open={Boolean(menuAnchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={navigateHome} >Home</MenuItem>
            <MenuItem onClick={handleMenuClose}>Exercise</MenuItem>
            <MenuItem onClick={handleMenuClose}>Games</MenuItem>
            <MenuItem onClick={handleMenuClose}>Help</MenuItem>
          </Menu>
        </Toolbar>
        <div style={{ margin: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {/* <AppBar position="static" color="transparent"> */}
          {/* </AppBar> */}
          <div style={{ maxWidth: '800px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h4" gutterBottom>
              Choose the right image
            </Typography>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', width: '100%' }}>
              <div>
                <Button onClick={() => handleImageClick}>
                  <div style={{ border: '1px solid black', width: '300px', height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img
                      src={selectedImages.image1?.src} // ???
                      alt="Left"
                      data-image="0"
                      style={imageStyle}
                      onClick={handleImageClick}
                    />
                    {/* {selectedImages.map((image) => (
                  <img src={process.env.PUBLIC_URL + Monkey} alt={"Left"} data-image="0" style={imageStyle} onClick={handleImageClick} />))} */}
                  </div>
                </Button>
                <Typography variant="subtitle1" align="center">
                  {selectedImages.image1?.description}
                </Typography>
              </div>
              <div>
                <Button onClick={() => handleImageClick}>
                  <div style={{ border: '1px solid black', width: '300px', height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
                <Typography variant="subtitle1" align="center">
                  {selectedImages.image2?.description}
                </Typography>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <IconButton color="inherit" onClick={handleListenAgainClick}>
                  <Typography align="center">
                    השמע שוב
                  </Typography>
                  <Replay />
                </IconButton>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-start', width: '100%', marginLeft: '20px' }}>
              <IconButton color="inherit" onClick={handleNextClick}>
                <Next /> Next
              </IconButton>
            </div>

          </div>
        </div>
      </div>
    </body>
  );
}

export default ExercisePage;