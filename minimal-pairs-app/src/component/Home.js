import React, { useEffect } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { IconButton, Typography, Replay, Button, Container, Toolbar, Grid } from '@mui/material';
import homePage from './../images/pagesBg/homePage.png';
import homePageBg from './../images/pagesBg/homePageBg.png';
import homePageSquare from './../images/pagesBg/homePageSquare.png';
import gamesIcon from './../images/buttons/gamesBtn.png';
import exerciseIcon from './../images/buttons/exercisesBtn.png';
import helpIcon from './../images/buttons/helpBtn.png';
import infoIcon from './../images/buttons/infoBtn.png';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    position: 'relative',
  },
  background: {
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    width: '100vw',
    height: '100vh',
    backgroundImage: `url(${homePageBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },
  mainMenu: {
    position: 'relative',
    width: '75%',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
  },
  backgroundSquare: {
    width: '100%',
    maxHeight: '100%',


    // position: 'absolute',
    // display: 'flex',
    // flexDirection: 'column',
    // alignItems: 'center',
    // justifyContent: 'flex-end',
    // top: '15%',
    // left: '15%',
    // width: '70%',
    // height: '70%',
    // scale: '120%',
    // backgroundImage: `url(${homePageSquare})`,
    // backgroundSize: '100%',
    // backgroundPosition: 'center',
    // backgroundRepeat: 'no-repeat',
    // justifyContent: 'flex-end',
  },
  title: {
    position: 'absolute',
    top: '10%',
    left: '10%',
    color: '#fff',
    fontSize: 24,
  },
  iconButton: {
    gap: '7%',
    scale: '1rem',
    display: 'flex',
    position: 'absolute',
    maxHeight: '100px',
    justifyContent: 'center',
    margin: 'auto',
    bottom: '0',
    left: '0',
    right: '0',

  },
}));

function Home() {
  const classes = useStyles();

  useEffect(() => {
    const handleResize = () => {
      // Adjust the positions of the title and button when the window is resized
      //const title = document.getElementById('title');
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

  const navigate = useNavigate();
  const navigateExercise = () => {
    navigate('/ExerciseOptionsPage');
  };
  const navigateGamesOptions = () => {
    navigate('/GamesOptionsPage');
  };
  return (

    <div className={classes.background} >
      <div style={{ height: '10%' }}>
        <IconButton color="inherit" onClick={null} alignt="left" >
          <img src={infoIcon} style={{ width: '70%', height: '70%' }} />
        </IconButton>
      </div>
      <div style={{ height: '90%' }}>
        <div className={classes.mainMenu}>
          <center><img className={classes.backgroundSquare} src={homePageSquare}></img></center>
          {/* <div id="backgroundSquare" className={classes.backgroundSquare}></div> */}
          <div className={classes.iconButton} >
            <IconButton id="iconButton" className={classes.iconButton} onClick={navigateExercise} >
              <img src={helpIcon} />
            </IconButton>
            <IconButton id="iconButton" className={classes.iconButton} onClick={navigateExercise} >
              <img src={exerciseIcon} />
            </IconButton>
            <IconButton id="iconButton" className={classes.iconButton} onClick={navigateGamesOptions} >
              <img src={gamesIcon} />
            </IconButton>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Home;