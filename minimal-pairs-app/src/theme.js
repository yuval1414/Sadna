import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1C4755',
    },
    secondary: {
      main: '#F66747',
    },
    // Additional colors
    text1: {
      main: '#1C4755', // dark-blue-green
    },
    text2: {
      main: '#F66747', // red-orange
    },
    text3: {
      main: '#EFC458', // yellow
    },
    text4: {
      main: '#00A087', // green
    },
    text5: {
      main: '#C2E3F3', // light-blue
    },
    // Add white and black colors
    common: {
      black: '#000000',
      white: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: [
      'Assistant bold', // First font
      'Assistant light', // Second font
      'Arial', // Fallback font
      'sans-serif', // Fallback font
    ].join(','),
  },
});

export default theme;
