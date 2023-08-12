import {
    Typography,
    Button,
} from '@mui/material';

  
import imgWhiteBg from './../images/buttons/imgBg.png';
import imgGreenBg from './../images/buttons/imgGreenBg.png';
import imgRedBg from './../images/buttons/imgRedBg.png';
  
function ImagePlaceHolder({
innerImage,
textColor,
imageText,
//handleClick,
}) {

return (
    <Button style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ backgroundImage: `url(${imgWhiteBg})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', width: '340px', height: '340px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img
            src={innerImage}
            //onClick={handleClick}
        />
        </div>
        <Typography color={textColor} style={{ marginTop: '-30px', fontSize: '200%', fontWeight: 'bold' }}>
        {imageText}
        </Typography>
    </Button>
);
}

export default ImagePlaceHolder;
