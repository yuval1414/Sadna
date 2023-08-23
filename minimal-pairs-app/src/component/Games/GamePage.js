import React, { useEffect } from 'react';
import { Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import PageBg from './../../images/pagesBg/gameBg.png';
//import HelpBg from './../images/pagesBg/helpBgWithoutText.png';
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
    backgroundImage: `url(${PageBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    zIndex: -1,
  },
//   title: { //fontSize={'250%'} fontWeight="bold" color={theme.palette.darkBlue}
//     position: 'absolute',
//     top: 20,
//     left: 20,
//     fontSize: '250%',
//     color: '#fff',
//     fontSize: 24,
//     zIndex: 1,
//   },
  iconButton: {
    position: 'absolute',
    top: '21%',
    left: '45%',
    zIndex: 1,
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
  },
}));
function GamePage() {  // START OF THE RUN
  const classes = useStyles();
  const theme = useTheme();

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

  return (
    <div className={classes.background} align="center" style={{ maxWidth: '100%', flexDirection: 'column', alignItems: 'center' }}>
        <Typography marginTop={"2%"} fontSize={'250%'} fontWeight="bold" color={theme.palette.darkBlue}>
            שם המשחק
        </Typography>
        <div className={classes.mainMenu}>
        {/* <center><img className={classes.backgroundSquare} src={HelpBg}></img></center> */}
            <div className={classes.iconButton} >
            
            </div>
        </div>
    </div>
  );
}

export default GamePage;