import React, { useEffect } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { IconButton, Typography, Replay, Button, Container } from '@mui/material';
import homePage from './../images/home-page.jpg';
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
    backgroundImage: `url(${homePage})`,
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
    top: '80%',
    left: '6%',
    zIndex: 1,
  },
}));

function Home() {
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

  const navigate = useNavigate();
  const navigateExercise = () => {
    navigate('/exercisePage');
  };
  return (

    //<body>
      <div id="container" className={classes.container}>
        <div id="background" className={classes.background}>
          <IconButton id="iconButton" className={classes.iconButton} onClick={navigateExercise} >
            <Typography align="center">
              Exercise
            </Typography>

          </IconButton>
        </div>
      </div>

    //</body>
  )
}

export default Home;