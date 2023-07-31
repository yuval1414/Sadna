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
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Button, Typography, AppBar, Toolbar, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import VolumeUp from '@mui/icons-material/VolumeUp';
//import { Menu as MenuIcon, VolumeUp } from '@material-ui/icons';
import Replay from '@mui/icons-material/ReplayRounded';
import Next from '@mui/icons-material/ArrowBackTwoTone'; // ArrowBackIosTwoTone // ArrowBackTwoTone

import Drum from './images/1_1.jpg'; // !
import Monkey from './images/1_0.jpg'; // !
import Rakefet from './images/2_1.jpg'; // !
import Train from './images/2_0.jpg'; // !
import bg from './images/bg.jpg'; // !

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
  if(dupImages.length === 0)
  {
    dupImages = [...images];
  }
  const shuffledImages = dupImages.sort(() => 0.5 - Math.random());
  const selected = shuffledImages.pop();
  return selected;
};

const randomImages = selectRandomImages();

function App() {
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

  const handleListenAgainClick = () => {
    alert('listen again');
  };

  const [selectedImages, setSelectedImages] = React.useState(randomImages); // !
  
  const handleNextClick = () => {
    setSelectedImages(selectRandomImages());
  };

  const handleOptionClick = (path) => { // relete to home page
    //history.push(path);
  };

  return (
    <div style={{ backgroundImage: `url(${bg})`, height: '100vh', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div style={{ margin: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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
        <div style={{ maxWidth: '800px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="h4" gutterBottom>
            Choose the correct image
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

            {/* -------------------------HOME PAGE----------------------- */}
            <Typography variant="h4" gutterBottom>
              MY-APP (home page)
            </Typography>
            <Button
              variant="contained"
              color="info"
              size="large"
              fullWidth
              onClick={() => handleOptionClick('/exercises')}
              sx={{ mb: 2 }}
            >
              Exercises
            </Button>
            <Button
              variant="contained"
              color="info"
              size="large"
              fullWidth
              onClick={() => handleOptionClick('/games')}
              sx={{ mb: 2 }}
            >
              Games
            </Button>
            <Button
              variant="contained"
              color="info"
              size="large"
              fullWidth
              onClick={() => handleOptionClick('/help')}
            >
              Help
            </Button>
            {/* -------------------------HOME PAGE----------------------- */}

            {/* -------------------------EXERCISE OPTIONS PAGE----------------------- */}
            <Typography variant="h4" gutterBottom>
              MY-APP (exercise options page)
            </Typography>
            <Button
              variant="contained"
              color="info"
              size="large"
              fullWidth
              onClick={() => handleOptionClick('/exercises')}
              sx={{ mb: 2 }}
            >
              Exercises
            </Button>
            <Button
              variant="contained"
              color="info"
              size="large"
              fullWidth
              onClick={() => handleOptionClick('/games')}
              sx={{ mb: 2 }}
            >
              Games
            </Button>
            <Button
              variant="contained"
              color="info"
              size="large"
              fullWidth
              onClick={() => handleOptionClick('/help')}
            >
              Help
            </Button>
            {/* ------------------------------------------------ */}
        </div>
      </div>
    </div>
  );
}

export default App;