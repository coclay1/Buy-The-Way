import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_ITEM } from '../../utils/mutations';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Theme } from '../../utils/theme'
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const ItemForm = () => {
    const [formState, setFormState] = useState({
        itemName: '',
        itemPrice: '',
      });
    
      // Set up our mutation with an option to handle errors
      const [addItem, { error }] = useMutation(ADD_ITEM);
    
      const handleFormSubmit = async (event) => {
        event.preventDefault();
    
        // On form submit, perform mutation and pass in form data object as arguments
        // It is important that the object fields are match the defined parameters in `ADD_THOUGHT` mutation
        try {
          const { data } = addItem({
            variables: { itemName: formState.itemName, itemPrice: formState.itemPrice },
          });
    
          window.location.reload();
        } catch (err) {
          console.error(err);
        }
      };
    
      const handleChange = (event) => {
        const { name, value } = event.target;
    
        if (name === 'itemName' && value.length <= 280) {
          setFormState({ ...formState, [name]: value });
        } else if (name !== 'itemName') {
          setFormState({ ...formState, [name]: value });
        }
      };

  return (
    <ThemeProvider theme={Theme}>
    <Container component="main" sx={{ p: 6 }}>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          bgcolor: 'background.paper'
        }}>
        
        <Typography component="h1" variant="h5">
          Create Your Item!
        </Typography>
        <Box component="form" onSubmit={handleFormSubmit} noValidate sx={{ mt: 1, bgcolor: 'background.paper' }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="itemName"
            label="Item Name"
            name="itemName"
            autoComplete="itemName"
            autoFocus
            
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="itemPrice"
            label="Item Price"
            type="itemPrice"
            id="itemPrice"
            autoComplete="itemName"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Create Item
          </Button>
        </Box>
        
      </Box>
    </Container>
  </ThemeProvider>
  );
};

export default ItemForm;