import { createTheme } from '@mui/material/styles';

const commonFontFamilies = [
  'Assistant Extra Bold',
  'Assistant Bold',
  'Assistant Semi Bold',
  'Assistant',
  'Assistant Light',
  'Assistant Extra Light',
  'Arial', // Fallback font
  'sans-serif', // Fallback font
];

const theme = createTheme({
  palette: {
    black: '#000000',
    white: '#FFFFFF',
    darkBlue: '#1C4755',
    redOrange: '#F66747',
    yellow: '#EFC458',
    green: '#00A087',
    lightBlue: '#C2E3F3',
  },
  typography: {
    fontFamily: commonFontFamilies.join(','),
  },
  components: {
    MuiIconButton: {
      styleOverrides: {
        root: {
          fontFamily: commonFontFamilies.join(','),
        },
      },
    },
  },
});

export default theme;
