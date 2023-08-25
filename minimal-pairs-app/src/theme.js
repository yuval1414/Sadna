import { createTheme } from '@mui/material/styles';

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
    fontFamily: 'Assistant',
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [
          {
            fontFamily: 'Assistant',
            src: `url('./fonts/Assistant-Regular.ttf') format('truetype')`, // TTF format
            fontWeight: 'normal',
            fontStyle: 'normal',
          },
          {
            fontFamily: 'YourPreferredFontFamily',
            src: `url('./fonts/Assistant-Regular.woff') format('woff')`, // WOFF format
            fontWeight: 'normal',
            fontStyle: 'normal',
          },
        ],
      },
    },
  },
});

export default theme;