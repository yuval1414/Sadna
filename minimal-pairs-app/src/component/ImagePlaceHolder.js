import { Typography, Button, } from '@mui/material';
import { makeStyles } from '@mui/styles';
  
import imgWhiteBg from './../images/buttons/imgBg.png';
import imgGreenBg from './../images/buttons/imgGreenBg.png';
import imgRedBg from './../images/buttons/imgRedBg.png';

const useStyles = makeStyles(() => ({
    imageButton: {
      '&:hover': {
        filter: 'drop-shadow(0px 0px 16px #68859A) brightness(1.1)',
        backgroundColor: 'transparent !important',
      }
    },
    descriptionTypography:{
      display: 'flex', justifyContent: 'center', width: '100%', marginRight: '50%', scale: '160%',
      WebkitTextStroke: '1px', fontSize: 'x-large', WebkitTextStrokeColor: 'rgb(36 71 88)',
      //'-webkit-text-stroke: 1px font-size: x-large -webkit-text-stroke-color: rgb(36 71 88)'
    },
    selectedImage:{
      backgroundImage: `url(${imgWhiteBg})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', 
      width: '330px', height: '330px', display: 'flex', alignItems: 'center', justifyContent: 'center' 
    }
  }));
  
function ImagePlaceHolder({
innerImage,
textColor,
imageText,
handleClick,
}) {
const classes = useStyles();
const imageStyle = {
    maxWidth: '60%',
    maxHeight: '60%',
  };

return (
    <Button className={classes.imageButton} onClick={handleClick} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className={classes.selectedImage} style={{ backgroundImage: `url(${imgWhiteBg})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', width: '340px', height: '340px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img
            src={innerImage}
            alt="Right"
            data-image="1"
            style={imageStyle}
        />
        </div>
        <Typography color={textColor} style={{ marginTop: '-30px', fontSize: '200%', fontWeight: 'bold' }}>
        {imageText}
        </Typography>
    </Button>
);
}

export default ImagePlaceHolder;
