import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';

import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
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

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// export default theme;