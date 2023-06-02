import { createTheme} from '@mui/material/styles';



export const Theme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#392203',
        contrastText: '#efcc99',
      },
      secondary: {
        main: '#f50057',
      },
      background: {
        default: '#85643C',
        paper: '#f3d0a9',
      },
    },
  });