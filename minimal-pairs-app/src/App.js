import * as React from 'react';
import Button from '@mui/material/Button';
import Train from './images/train.jpg';
import Rakefet from './images/rakefet.jpg';
import Drum from './images/drum.jpg';
import Monkey from './images/monkey.jpg';
import { Box, Container, Grid, IconButton, Paper, Typography } from '@mui/material';

// export default function MyApp() {
//   return (
//     <Container maxWidth="sm">

//       <div className='App'>

//         <header className="App-header">Welcome</header>
//         <body>
//           <Button variant="contained">Hello World 2 </Button>

//           <Grid container spacing={8} justify={"center"} >

//             <Grid item >
//               <Box sx={{width: "200px", height: "200px", position: "relative", }}>
//               <img src={Train} alt="cur" style={{maxWidth: "100%", maxHeight: "100%", objectFit: "contain", position: "absolute", top: 0, left: 0,}} border="1"/>
//               <IconButton variant="text" color = "secondary">Train </IconButton>
//               </Box>


//             </Grid>

//             <Grid item  >
//             {/* <div> */}
//             <Box sx={{width: "200px", height: "200px", position: "relative",}}>
//               <img src={Rakefet} alt="cur" style={{maxWidth: "100%", maxHeight: "100%", objectFit: "contain", position: "absolute", top: 0, left: 0,}} border="1" />
//               <IconButton variant="text" color = "secondary" >Rakefet </IconButton>
//               </Box>
//               {/* </div> */}
//             </Grid>

//           </Grid>
//         </body>
//       </div>

//     </Container>
//   );
// }

const App = () => {
  const images = [
    { src: Train, alt: 'Image 1', description: 'train' },
    { src: Rakefet, alt: 'Image 2', description: 'rakefet' },
  ];
  const [selectedImage, setSelectedImage] = React.useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
      <header>
      <Typography variant="h4" gutterBottom>
        Choose the right image
      </Typography>
      </header>
      <Box display="flex" justifyContent="center" mt={4}>
        {images.map((image) => (
          <Box key={image.alt} mr={2}>
            <Button onClick={() => handleImageClick(image)}>
              <img src={image.src} alt={image.alt} width={300} height={200} />
            </Button>
            <Typography variant="subtitle1" align="center">
              {image.description}
            </Typography>
          </Box>
        ))}
      </Box>
      {selectedImage && (
        <Box mt={4}>
          <Typography variant="subtitle1" gutterBottom>
            You have selected:
          </Typography>
          <img src={selectedImage.src} alt={selectedImage.alt} width={600} height={400} />
          <Typography variant="h6" align="center">
            {selectedImage.description}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default App;

