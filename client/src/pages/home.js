import React from 'react'
import { useQuery } from '@apollo/client'
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
// import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Theme } from '../utils/theme'
import { QUERY_SHOPS } from '../utils/queries';
import ShopList from '../components/ShopList';
import Logo from '../images/buy-the-way-2.png'
// import theme from '../index'

import { GiAnvil, GiPotionBall, GiTargetArrows, GiScrollQuill, FaRegGem } from "react-icons/fa";


function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}



const Home = () => {
  const { loading, data } = useQuery(QUERY_SHOPS);
  const shops = data?.shops || [];



  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>

          <Typography variant="h6" color="inherit" noWrap>
            Buy the Way
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Your Shops:
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Pick a Shop Below to See What Items are Available!
            </Typography>
          </Container>
        </Box>
                <ShopList
                  shops={shops}
                />
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
        <img src={Logo} width= "100px"/>
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Thanks for visiting our page!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}

export default Home;



