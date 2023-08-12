
// 2ND ATTEMPT
import React, { useEffect } from 'react';
import { IconButton, List } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import gamesOptionsPage from './../images/pagesBg/gamesBg.png';

import ImagePlaceHolder from './ImagePlaceHolder';
import imgBg from './../images/buttons/imgBg.png';
import gamePuzzle from './../images/buttons/game_puzzle.png';
import gameHitTheMole from './../images/buttons/game_hitTheMole.png';
import gameMemoryGame from './../images/buttons/game_memoryGame.png';
import gameSnakeAndLadders from './../images/buttons/game_snakeAndLadders.png';
import gameTicTacToe from './../images/buttons/game_ticTacToe.png';
import gameRexy from './../images/buttons/game_rexy.png';

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
          {/* <div style={{ margin: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>


            <div id="iconButton" className={classes.background}>
              <div className={classes.iconButton} align="center">
                <List >
                  <IconButton color="inherit" onClick={null} >
                    משחקים
                  </IconButton>
                </List>
              </div>
            </div>
          </div> */}

          <div style={{ margin: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ maxWidth: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

              <Typography fontSize={'450%'} fontWeight="bold" color={theme.palette.darkBlue}>
                משחקים
              </Typography>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', columnGap: '20px', justifyContent: 'center', marginTop: '10px' }}>
                {/* First Row */}
                <ImagePlaceHolder
                  innerImage={gamePuzzle}
                  textColor={theme.palette.darkBlue}
                  imageText={"פאזל"}
                  //handleClick={}
                />
                <ImagePlaceHolder
                  innerImage={gameHitTheMole}
                  textColor={theme.palette.darkBlue}
                  imageText={"הכה בחפרפרת"}
                  //handleClick={}
                />
                <ImagePlaceHolder
                  innerImage={gameMemoryGame}
                  textColor={theme.palette.darkBlue}
                  imageText={"משחק הזיכרון"}
                  //handleClick={}
                />

                {/* Second Row */}
                <ImagePlaceHolder
                  innerImage={gameSnakeAndLadders}
                  textColor={theme.palette.darkBlue}
                  imageText={"סולמות ונחשים"}
                  //handleClick={}
                />
                <ImagePlaceHolder
                  innerImage={gameTicTacToe}
                  textColor={theme.palette.darkBlue}
                  imageText={"איקס עיגול"}
                  //handleClick={}
                />
                <ImagePlaceHolder
                  innerImage={gameRexy}
                  textColor={theme.palette.darkBlue}
                  imageText={"טפלו ברקסי"}
                  //handleClick={}
                />
              </div>

              {/* <Grid container justifyContent="center" style={{ margin: '5%', marginLeft: '18%' }}>
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                    <IconButton color="inherit" onClick={handleNextClick}>
                      <img src={nextBtn} style={{ width: '100%', height: '100%' }} />
                    </IconButton>
                  </Grid>
                  <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                    <IconButton color="inherit" onClick={handleListenAgainClick}>
                      <img src={replaySound} style={{ width: '100%', height: '100%' }} />
                    </IconButton>
                  </Grid>
                  <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                    <IconButton color="inherit" onClick={handleNextClick}>
                      <img src={prevBtn} style={{ width: '100%', height: '100%' }} />
                    </IconButton>
                  </Grid>
                </Grid>
              </Grid> */}
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default GamesOptionsPage;