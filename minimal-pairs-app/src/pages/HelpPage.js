import React, { useEffect } from 'react';
import { Typography, List } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import PageBg from './../images/pagesBg/skyAndCloudsBg.png';
import HelpBg from './../images/pagesBg/helpBgWithoutText.png';
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
    top: '50%',
    transform: 'translate(-50%, -50%)',
  },
  backgroundSquare: {
    width: '100%',
    maxHeight: '100%',
  },
}));
function HelpPage() {
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
      <div className={classes.mainMenu}>
        <center><img className={classes.backgroundSquare} src={HelpBg}></img></center>
        <div className={classes.iconButton} >
        <Typography fontSize={'250%'} fontWeight="bold" color={theme.palette.darkBlue}>
          עזרה
        </Typography>
          <List >
            <Typography>
              שימוש באפליקציה:<br/><br/>
            
              תרגולים:<br/><br/>

              משחקים:<br/><br/>
            </Typography>
          </List>
        </div>
      </div>
    </div>
  );
}

export default HelpPage;