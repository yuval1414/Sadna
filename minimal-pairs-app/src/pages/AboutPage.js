
// 2ND ATTEMPT
import React, { useEffect } from 'react';
import { Typography, List } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import PageBg from './../images/pagesBg/skyAndCloudsBg.png';
import AboutBg from './../images/pagesBg/aboutPageSquar.png';
import { makeStyles } from '@mui/styles';
import hearMeOutIcon from './../images/kids/HEARMEOUT-Icon.png';
const useStyles = makeStyles((theme) => ({
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
  icon: {
    position: 'absolute',
    top: '6%',
    left: '46%',
    zIndex: 1,
    height: '114px', 
    width: '114px',
  },
  mainMenu: {
    position: 'absolute',
    width: '75%',
    left: '50%',
    top: '45%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'right',
  },
  backgroundSquare: {
    width: '100%',
    maxHeight: '100%',
  },
  typography: {
    position: 'absolute',
    top: '21%',
    left: '45%',
    zIndex: 1,
   
  },
}));
function AboutPage() {
  const classes = useStyles();
  const theme = useTheme();

  useEffect(() => {
    const handleResize = () => {
      const title = document.getElementById('title');
      const iconButton = document.getElementById('iconButton');
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={classes.background}>
       <img src={hearMeOutIcon} className={classes.icon} />
      <div className={classes.mainMenu}>
        <center><img className={classes.backgroundSquare} src={AboutBg}></img></center>
        <div className={classes.typography} >
          <Typography fontSize={'250%'} fontWeight="bold" color={theme.palette.darkBlue}>
            אודות
          </Typography>
          <Typography>
            על האפליקציה:<br /><br />

            רקע:<br /><br />

            המפתחות:<br /><br />
        </Typography>
        </div>
      </div>
    </div>

  );
}

export default AboutPage;