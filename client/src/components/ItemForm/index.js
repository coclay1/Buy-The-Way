import React, { useState } from 'react';
import { useMutation } from '@apollo/client';

import { ADD_ITEM } from '../../utils/mutations';

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
    <Container component="main">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          bgcolor: 'background.paper'
        }}>
        <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}></Avatar>
        <Typography component="h1" variant="h5">
          Sign in
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
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
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

export default ThoughtForm;