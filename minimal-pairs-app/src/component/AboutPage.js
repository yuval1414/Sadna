
// 2ND ATTEMPT
import React, { useEffect } from 'react';
import { Typography, List } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import Next from '@mui/icons-material/ArrowBackTwoTone'; // ArrowBackIosTwoTone // ArrowBackTwoTone
import AboutPageBg from './../images/pagesBg/projectBackgroundBg.png';
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
    backgroundImage: `url(${AboutPageBg})`,
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
    <div id="container" className={classes.container}>
      <div id="background" className={classes.background}>
        <div className={classes.background} align="center">
          <div style={{ margin: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {/* <AppBar position="static" color="transparent"> */}
            {/* </AppBar> */}


            <div id="iconButton" className={classes.background}>
              <div className={classes.iconButton} align="center">
                <List >
                  <Typography >
                    <br/><br/>
                    

                  </Typography>
                </List>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default AboutPage;