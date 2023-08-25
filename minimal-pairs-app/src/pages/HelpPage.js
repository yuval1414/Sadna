import React, { useEffect, useState } from 'react';
import { Typography, List, IconButton, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import PageBg from './../images/pagesBg/skyAndCloudsBg.png';
import HelpBg from './../images/pagesBg/helpBgWithoutText.png';
import nextBtn from './../images/buttons/leftArrowBlueBtn.png';
import prevBtn from './../images/buttons/rightArrowBlueBtn.png';
import { makeStyles } from '@mui/styles';

const helpSections = [
  "מעבר בין המסכים השונים יתבצע דרך כפתור התפריט הממוקם בראש כל מסך מצד ימין.\n  בכל שלב ניתן לעבור למסך אחר דרך כפתור זה.  ",
  "תרגול: על הילד לזהות...",
  "בכניסה לעמוד יש לבחור...",
];

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
  const [currentSection, setCurrentSection] = useState(0);

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

  const goToNextSection = () => {
    if (currentSection < helpSections.length - 1) {
      setCurrentSection(currentSection + 1);
    }
  };

  const goToPreviousSection = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

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
          {/* <div>{helpSections[currentSection]}</div>
          <Grid container justifyContent='center' style={{ textAlign: 'center', width: '50%', height: '20%' }}>
            <Grid item xs={4}>
              <IconButton color="inherit" onClick={goToNextSection}>
                <img src={nextBtn} style={{ width: '100%', height: '100%' }} />
              </IconButton>
            </Grid>
            <Grid item xs={4}>
              <IconButton color="inherit" onClick={goToPreviousSection}>
                <img src={prevBtn} style={{ width: '100%', height: '100%' }} />
              </IconButton>
            </Grid>
          </Grid> */}
        </div>
      </div>
    </div>
  );
}

export default HelpPage;