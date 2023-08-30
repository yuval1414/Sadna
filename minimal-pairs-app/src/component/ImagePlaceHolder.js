// import { Typography, Button, } from '@mui/material';
// import { makeStyles } from '@mui/styles';
// import imgWhiteBg from './../images/buttons/imgBg.png';

// const useStyles = makeStyles(() => ({
//   imageButton: {
//     '&:hover': {
//       filter: 'drop-shadow(0px 0px 16px #68859A) brightness(1.1)',
//       backgroundColor: 'transparent',
//     }
//   },
//   imageStyle: {
//     maxWidth: '50%',
//     maxHeight: '50%',
//     position: 'absolute',
//   },
//   descriptionTypography: {
//     display: 'flex', justifyContent: 'center', width: '100%', marginRight: '50%', scale: '160%',
//     WebkitTextStroke: '1px', fontSize: 'x-large', WebkitTextStrokeColor: 'rgb(36 71 88)',
//   },
//   selectedImage: {
//     backgroundImage: `url(${imgWhiteBg})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center',
//     width: '330px', height: '330px', display: 'flex', alignItems: 'center', justifyContent: 'center'
//   }
// }));

// function ImagePlaceHolder({
//   innerImage,
//   textColor,
//   imageText,
//   handleClick,
//   borderColor,
// }) {
//   const classes = useStyles();

//   return (
//     <Button disableRipple className={classes.imageButton} onClick={handleClick} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',  height: '90%', width: '100%' }}>
//       <img src={imgWhiteBg} style={{ width: '80%',  position: 'absolute', filter: borderColor ? `drop-shadow(2px 4px 6px ${borderColor})` : undefined }}></img>
//       <img
//         src={innerImage}
//         alt={imageText}
//         data-image="1"
//         className={classes.imageStyle}
//       />
//       <Typography color={textColor} style={{ fontSize: '300%', fontWeight: 'bold' ,position: 'absolute', bottom: 9}}>
//         {imageText}
//       </Typography>
//     </Button>
//   );
// }

// export default ImagePlaceHolder;

// ----------------------------------------------------

// import { Typography, Button, } from '@mui/material';
// import { makeStyles } from '@mui/styles';
// import imgWhiteBg from './../images/buttons/imgBg.png';

// const useStyles = makeStyles(() => ({
//   container: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     position: 'relative',
//     height: '60vh',
//   },
//   imageButton: {
//     '&:hover': {
//       filter: 'drop-shadow(0px 0px 16px #68859A) brightness(1.1)',
//       backgroundColor: 'transparent',
//     },
//   },
//   imageStyle: {
//     maxWidth: '50%',
//     maxHeight: '50%',
//     position: 'absolute',
//   },
// }));

// function ImagePlaceHolder({
//   innerImage,
//   textColor,
//   imageText,
//   handleClick,
//   borderColor,
// }) {
//   const classes = useStyles();

//   return (
//     <div className={classes.container}>
//       <Button disableRipple className={classes.imageButton} onClick={handleClick} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',  height: '90%', width: '100%' }}>
//         <img src={imgWhiteBg} style={{ width: '90%',  position: 'absolute', filter: borderColor ? `drop-shadow(2px 4px 6px ${borderColor})` : undefined }}></img>
//         <img
//           src={innerImage}
//           alt={imageText}
//           data-image="1"
//           className={classes.imageStyle}
//         />
//         <Typography color={textColor} style={{ fontSize: '300%', fontWeight: 'bold' ,position: 'absolute', paddingTop: 300}}>
//           {imageText}
//         </Typography>
//       </Button>
//     </div>
//   );
// }

// export default ImagePlaceHolder;

// ----------------------------------------------------

// import { Typography, Button } from '@mui/material';
// import { makeStyles } from '@mui/styles';
// import imgWhiteBg from './../images/buttons/imgBg.png';

// const useStyles = makeStyles(() => ({
//   container: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     position: 'relative',
//     height: '60vh',
//     width: '350px',//'280px', // Fixed width as per your requirement
//   },
//   imageButton: {
//     '&:hover': {
//       filter: 'drop-shadow(0px 0px 16px #68859A) brightness(1.1)',
//       backgroundColor: 'transparent',
//     },
//     position: 'relative', // Position relative to enable absolute positioning for children
//   },
//   imageStyle: {
//     maxWidth: '230px', // Adjust as needed
//     maxHeight: '230px', // Adjust as needed
//     position: 'relative',
//   },
//   text: {
//     position: 'absolute',
//     top: 'calc(90% + 5px)',//top: '325px', 
//     left: '50%',
//     transform: 'translateX(-50%)',
//     fontSize: '30px', // Set the font size as desired
//     fontWeight: 'bold',
//   },
// }));

// function ImagePlaceHolder({
//   innerImage,
//   textColor,
//   imageText,
//   handleClick,
//   borderColor,
//   isInExercise
// }) {
//   const classes = useStyles();

//   return (
//     <div className={classes.container}>
//       <Button
//         disableRipple
//         className={classes.imageButton}
//         onClick={handleClick}
//         style={{
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           height: '90%',
//           width: '100%',
//         }}
//       >
//         <img
//           src={imgWhiteBg}
//           alt="Background"
//           style={{
//             width: isInExercise ? '100%' : '80%',
//             position: 'absolute',
//             filter: borderColor
//               ? `drop-shadow(2px 4px 6px ${borderColor})`
//               : undefined,
//           }}
//         />
//         <img
//           src={innerImage}
//           alt={imageText}
//           data-image="1"
//           className={classes.imageStyle}
//         />
//         <Typography color={textColor} className={classes.text}>
//           {imageText}
//         </Typography>
//       </Button>
//     </div>
//   );
// }

// export default ImagePlaceHolder;

// ----------------------------------------------------

import { Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import imgWhiteBg from './../images/buttons/imgBg.png';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    // height: '370px',
    width: '350px', //'280px', // Fixed width as per your requirement
  },
  imageButton: {
    '&:hover': {
      filter: 'drop-shadow(0px 0px 16px #68859A) brightness(1.1)',
      backgroundColor: 'transparent',
    },
    position: 'relative', // Position relative to enable absolute positioning for children
  },
  imageStyle: {
    maxWidth: '230px', // Adjust as needed
    maxHeight: '230px', // Adjust as needed
    position: 'relative',
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    position: 'absolute',
    bottom: -15,
    //marginTop: '10px', // Fixed spacing of 5px
    //top: '100%',
    //left: '50%',
    //transform: 'translateX(-50%)',
    //width: '100%',
  },
  text: {
    //fontSize: '30px', // Set the font size as desired
    fontWeight: 'bold',
  },
}));

function ImagePlaceHolder({
  innerImage,
  textColor,
  imageText,
  handleClick,
  borderColor,
  isInExercise,
}) {
  const classes = useStyles();

  return (
    <div className={classes.container} style={{ height: isInExercise ? '390px' : '260px' }}>
      <Button
        disableRipple
        className={classes.imageButton}
        onClick={handleClick}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          height: '90%',
          width: '100%',
        }}
      >
        <img
          src={imgWhiteBg}
          alt="Background"
          style={{
            width: isInExercise ? '100%' : '75%',
            position: 'absolute',
            filter: borderColor
              ? `drop-shadow(2px 4px 6px ${borderColor})`
              : undefined,
          }}
        />
        <img
          src={innerImage}
          alt={imageText}
          data-image="1"
          className={classes.imageStyle}
        />
      </Button>
      
      <div className={classes.textContainer}>
          <Typography color={textColor} fontSize={isInExercise ? '40px' : '30px'} className={classes.text}>
            {imageText}
          </Typography>
        </div>
    </div>
  );
}

export default ImagePlaceHolder;


