
// 2ND ATTEMPT
import React, { useEffect } from 'react';
import { Typography, List } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Next from '@mui/icons-material/ArrowBackTwoTone'; // ArrowBackIosTwoTone // ArrowBackTwoTone
//import AboutPageBg from './../images/pagesBg/projectBackgroundWithoutTextClean.png';
import PageBg from './../images/pagesBg/skyAndCloudsBg.png';
import AboutBg from './../images/pagesBg/aboutPageSquar.png';
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
  mainMenu: {
    position: 'relative',
    width: '75%',
    left: '50%',
    top: '45%',
    transform: 'translate(-50%, -50%)',
  },
  backgroundSquare: {
    width: '100%',
    maxHeight: '100%',
  },
}));
function AboutPage() {  // START OF THE RUN
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
    <div className={classes.background}>
      <div className={classes.mainMenu}>
        <center><img className={classes.backgroundSquare} src={AboutBg}></img></center>
        <div className={classes.iconButton} >
        <Typography fontSize={'250%'} fontWeight="bold" color={theme.palette.darkBlue}>
          אודות
        </Typography>
          <List >
            <Typography>
              על האפליקציה:<br/><br/>
            
              רקע:<br/><br/>

              המפתחות:<br/><br/>

            </Typography>
          </List>
        </div>
      </div>
    </div>

  );
}

export default AboutPage;