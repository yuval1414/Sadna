
// 2ND ATTEMPT
import React, { useState, useEffect } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { Button, Typography, AppBar, Toolbar, IconButton, Menu, MenuItem, List } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Next from '@mui/icons-material/ArrowBackTwoTone'; // ArrowBackIosTwoTone // ArrowBackTwoTone
import gamesOptionsPage from './../images/pagesBg/gamesBg.png';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    position: 'relative',
  },
  background: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: `url(${gamesOptionsPage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    zIndex: -1,
  },
  title: {
    position: 'absolute',
    top: 20,
    left: 20,
    color: '#fff',
    fontSize: 24,
    zIndex: 1,
  },
  iconButton: {
    position: 'absolute',
    top: '21%',
    left: '45%',
    zIndex: 1,
  },
}));
function GamesOptionsPage() {  // START OF THE RUN
  const classes = useStyles();

  useEffect(() => {
    const handleResize = () => {
      // Adjust the positions of the title and button when the window is resized
      const title = document.getElementById('title');
      const iconButton = document.getElementById('iconButton');
      // Set the positions based on the new window dimensions
      // title.style.top = '20px';
      // title.style.left = '20px';
    };
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  //---------------NAVIGATE-------------------
  const navigate = useNavigate();
  const navigateHome = () => {
    navigate('/');
  };

  const navigateExerciseOptions = () => {
    navigate('/ExerciseOptionsPage');
  }
  //---------------HANDLERS-------------------
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

  return (
    <div id="container" className={classes.container}>
      <div id="background" className={classes.background}>
        <div className={classes.background} align="center">
          <Toolbar variant="dense">
            <IconButton color="inherit" onClick={handleMenuClick}>
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={menuAnchorEl}
              open={Boolean(menuAnchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={navigateHome} >Home</MenuItem>
              <MenuItem onClick={navigateExerciseOptions}>Exercise</MenuItem>
              <MenuItem onClick={handleMenuClose}>Games</MenuItem>
              <MenuItem onClick={handleMenuClose}>Help</MenuItem>
            </Menu>
          </Toolbar>
          <div style={{ margin: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {/* <AppBar position="static" color="transparent"> */}
            {/* </AppBar> */}


            <div id="iconButton" className={classes.background}>
              <div className={classes.iconButton} align="center">
                <List >
                  <IconButton color="inherit" onClick={null} >
                    game1
                  </IconButton>
                </List>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default GamesOptionsPage;