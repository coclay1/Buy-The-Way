import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { useMutation } from '@apollo/client';
import { ADD_ITEM } from '../utils/mutations';
import { QUERY_SINGLE_SHOP } from '../utils/queries';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Theme } from '../utils/theme';
import Shop from '../components/Shop';
import ItemForm from '../components/ItemForm';



const SingleShop = () => {

  const { shopId } = useParams()
  console.log(shopId);

  const { loading, errors, data } = useQuery(QUERY_SINGLE_SHOP, {
    variables: { shopId: shopId }
  });
  console.log(data);


  if (loading) {
    return <div>Loading...</div>; // Show a loading state while data is being fetched
  }

  const shops = data?.shop || [];

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
        
        
        <Shop
          items={shops.items}
          shopName={shops.shopsName}
        />
        <ItemForm />
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );

}

export default SingleShop;
