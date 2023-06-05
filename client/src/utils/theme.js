import { createTheme} from '@mui/material/styles';



export const Theme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#392203',
        contrastText: '#efcc99',
        light: '#e2cb92',
      },
      secondary: {
        main: '#392203',
      },
      background: {
        default: '#85643C',
        paper: '#f3d0a9',
      },
    },
    typography: {
      h1: {
        fontFamily: 'MedievalSharp',
      },
      h5: {
        fontFamily: 'MedievalSharp',
      },
      body1: {
        fontFamily: 'MedievalSharp',
      },
    },
  });