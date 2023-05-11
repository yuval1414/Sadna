/*import * as React from 'react';
import Button from '@mui/material/Button';
import Train from './images/1_0.jpg';
import Rakefet from './images/1_1.jpg';
import Drum from './images/2_0.jpg';
import Monkey from './images/2_1.jpg';
import { Box, Container, Grid, IconButton, Paper, Typography } from '@mui/material';

const App = () => {
  const images = [
    { src: Train, alt: 'Image 1', description: 'train' },
    { src: Rakefet, alt: 'Image 2', description: 'rakefet' },
    { src: Monkey, alt: 'Image 1', description: 'monkey' },
    { src: Drum, alt: 'Image 2', description: 'drum' },
  ];
  const [selectedImages, setSelectedImages] = React.useState([]);

  const selectRandomImages = () => {
    const shuffledImages = images.sort(() => 0.5 - Math.random());
    const selected = shuffledImages.slice(0, 2);
    setSelectedImages(selected);
  };

  React.useEffect(() => {
    selectRandomImages();
  }, []);

  const handleImageClick = (image) => {
    selectRandomImages();
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
      <header>
        <Typography variant="h4" gutterBottom>
          Choose the right image
        </Typography>
      </header>
      <Box display="flex" justifyContent="center" mt={4}>
        {selectedImages.map((image) => (
          <Box key={image.alt} mr={2}>
            <Button onClick={() => handleImageClick(image)}>
              <img src={process.env.PUBLIC_URL + image.src} alt={image.alt} width={300} height={200} />
            </Button>
            <Typography variant="subtitle1" align="center">
              {image.description}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default App;*/



/* 1ST ATTEMPT
import React, { useState } from 'react';

function ImageGuessingGame() {
  const [imagePair, setImagePair] = useState(1);
  const [imageClicked, setImageClicked] = useState(false);
  const [message, setMessage] = useState('');
  
  function handleImageClick(event) {
    if (event.target.id === 'right') {
      setMessage('Good job!');
      setImageClicked(true);
    } else {
      setMessage('Try again');
    }
  }
  
  function handleContinueClick() {
    setImagePair(imagePair + 1);
    setImageClicked(false);
    setMessage('');
  }
  
  function handlePlayAgainClick() {
    setMessage('Listen again');
  }
  
  const leftImage = './images/${imagePair}_0.jpg';
  const rightImage = './images/${imagePair}_1.jpg';
  
  return (
    <div style={{backgroundImage: 'url(./images/bg.jpeg)'}}>
      <div>
        <img src={leftImage} alt="Left" onClick={handleImageClick} />
        <img src={rightImage} alt="Right" onClick={handleImageClick} id="right" />
      </div>
      <button onClick={handlePlayAgainClick}>Play Sound Again</button>
      <button onClick={handleContinueClick}>Continue</button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default ImageGuessingGame;*/


// 2ND ATTEMPT
import React, { useState } from 'react';
import { Button, Typography, AppBar, Toolbar, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import VolumeUp from '@mui/icons-material/VolumeUp';
//import { Menu as MenuIcon, VolumeUp } from '@material-ui/icons';
import Monkey from './images/1_1.jpg'; // !

function App() {
  const images = [
    { src: Monkey, alt: 'Image 1', description: 'monkey' },
  ];
  
  const [currentPair, setCurrentPair] = useState(1);
  const [correctImage, setCorrectImage] = useState(0); // correctImage = 0 WHY DO I NEED THIS?

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
  }; // ----------------------------------------------

  function handleImageClick(event) {
    //const clickedImage = event.target.getAttribute('data-image'); // 0 or 1, can help identify the clicked image, can be use later
    if (event.target.id === 'right') {
      alert('Good job!');
      //setImageClicked(true);
    } else {
      alert('Try again');
    }
  };

  const handleNextClick = () => {
    setCurrentPair(currentPair + 1);
    setCorrectImage(Math.round(Math.random()));
  };

  const handleListenAgainClick = () => {
    alert('listen again');
  };

  const [selectedImages, setSelectedImages] = React.useState([]); // !

  const selectRandomImages = () => { // !
    const shuffledImages = images.sort(() => 0.5 - Math.random());
    const selected = shuffledImages.slice(0, 2);
    setSelectedImages(selected);
  };

  React.useEffect(() => { // !
    selectRandomImages();
  }, []);
 
  return (
    <div style={{ backgroundImage: `url(./images/bg.jpeg)`, height: '100vh', backgroundSize: 'cover' }}>
      <div style={{ maxWidth: '800px', margin: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* <AppBar position="static" color="warning">
          <Toolbar variant="dense">
            <div style={{ display: 'flex', justifyContent: 'center', width: '100%', border: '1px solid black' }}>
              <Typography variant="h6" color="inherit" component="div" >
                My App Name
              </Typography>
              <div style={{ display: 'flex', justifyContent: 'right', border: '1px solid black' }}>
                <IconButton edge="end" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                  <MenuIcon color="inherit" />
                </IconButton>
              </div>
            </div>
          </Toolbar>
        </AppBar> */}
        <AppBar position="static" color="info">
          <Toolbar variant="dense">
            <IconButton color="inherit" onClick={handleSoundClick}>
              <VolumeUp />
            </IconButton>
            <Menu
              anchorEl={soundAnchorEl}
              open={Boolean(soundAnchorEl)}
              onClose={handleSoundClose}
            >
              <MenuItem onClick={handleSoundClose}>Man</MenuItem>
              <MenuItem onClick={handleSoundClose}>Woman</MenuItem>
              <MenuItem onClick={handleSoundClose}>Both</MenuItem>
              <MenuItem onClick={handleSoundClose}>No sound</MenuItem>
            </Menu>
            <div style={{ flexGrow: 1, textAlign: 'center' }}>MY-APP-NAME</div>
            <IconButton color="inherit" onClick={handleMenuClick}>
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={menuAnchorEl}
              open={Boolean(menuAnchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose}>Home</MenuItem>
              <MenuItem onClick={handleMenuClose}>Exercise</MenuItem>
              <MenuItem onClick={handleMenuClose}>Games</MenuItem>
              <MenuItem onClick={handleMenuClose}>Help</MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
        <header>
          <Typography variant="h4" gutterBottom>
            Choose the right image
          </Typography>
        </header>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', width: '100%' }}>
          <div>
            <Button onClick={() => handleImageClick}>
              <div style={{ border: '1px solid black', width: '300px', height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img
                  src={process.env.PUBLIC_URL + `./images/${currentPair}_0.jpg`} // ???
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
              {"image1"}
            </Typography>
          </div>
          <div>
            <Button onClick={() => handleImageClick}>
              <div style={{ border: '1px solid black', width: '300px', height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img
                  src={process.env.PUBLIC_URL + `./images/${currentPair}_1.jpg`}
                  alt="Right"
                  data-image="1"
                  style={imageStyle}
                  onClick={handleImageClick}
                  //object-fit="contain"
                  id="right"
                />
              </div>
            </Button>
            <Typography variant="subtitle1" align="center">
              {"image2"}
            </Typography>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
          <button onClick={handleListenAgainClick}>Listen Again</button>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-start', width: '100%', marginTop: '20px' }}>
          <button onClick={handleNextClick}>Next Pair</button>
        </div>
      </div>
    </div>
  );
}

export default App;