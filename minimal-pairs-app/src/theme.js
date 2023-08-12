import { createTheme } from '@mui/material/styles';
import AssistantFont from './fonts/Assistant-Regular.ttf'

const commonFontFamilies = [
  './fonts/Assistant-Extra-Bold',
  './fonts/Assistant-Bold',
  './fonts/Assistant-Semi-Bold',
  './fonts/Assistant-Regular',
  './fonts/Assistant-Light',
  './fonts/Assistant-Extra-Light',
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

// import { createTheme } from '@mui/material/styles';
// import AssistantFont from './fonts/Assistant-Regular.ttf';
// import './fonts/Assistant-Extra-Bold.ttf';
// import './fonts/Assistant-Bold.ttf';
// import './fonts/Assistant-Semi-Bold.ttf';
// import './fonts/Assistant-Regular.ttf';
// import './fonts/Assistant-Light.ttf';
// import './fonts/Assistant-Extra-Light.ttf';


// const theme = createTheme({
//   palette: {
//     black: '#000000',
//     white: '#FFFFFF',
//     darkBlue: '#1C4755',
//     redOrange: '#F66747',
//     yellow: '#EFC458',
//     green: '#00A087',
//     lightBlue: '#C2E3F3',
//   },
//   typography: {
//     fontFamily: 'Assistant, Arial',
//   },
//   components: {
//     MuiCssBaseline: {
//       styleOverrides: `
//         @font-face {
//           font-family: 'Assistant';
//           font-style: normal;
//           font-display: swap;
//           font-weight: 400;
//           src: local('Assistant'), local('Assistant'), url(${AssistantFont}) format('ttf');
//           unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
//         }
//       `,
//     },
//   },
// });

//fontFamily: 'Assistant'
export default theme;