import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations'
import Auth from '../utils/auth';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

export default function Login() {
  const [formState, setFormState] = useState({
    email: '',
    password: '',
  });
  const [login, { err, data }] = useMutation(LOGIN_USER);


  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await login({
        variables: { ...formState }
      });
      Auth.login(data.login.token)
    } catch (err) {
      console.log(err);
    }
    setFormState({
      email: '',
      password: '',
    });
  };

  const defaultTheme = createTheme();

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}></Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleFormSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
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
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
          <Grid item>
            <Link href="#" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Box>
      </Container>
    </ThemeProvider>
  )
}



// import React, { useState } from 'react';
// import { useMutation } from '@apollo/client';
// import { ADD_USER } from '../utils/mutations';
// import Auth from '../utils/auth';
// import { Link } from 'react-router-dom';


// export default SignUp = () => {
//   const [formState, setFormState] = useState({
//       username: '',
//       email: '',
//       password: ''
//   });
//   const [addUser, { error, data }] = useMutation(ADD_USER);
//   const handleChange = (e) => {
//       const { name, value } = e.target;
//       setFormState({
//           ...formState,
//           [name]: value,
//       });
//   };

//   const handleFormSubmit = async (e) => {
//       e.preventDefault();

//       try {
//           const { data } = await addUser({
//               variables: { ...formState },
//           });
//           Auth.login(data.addUser.token)
//       } catch (err) {
//           console.log(err);
//       }
//   }

//   return (
//       <main className='flex-row justify-center mb-4'>
//           <div className='col-12 col-lg-10'>
//               <div className='card'>
//                   <h2 className='card-header'>Sign Up</h2>
//                   <div className='card-body'>
//                       {data ? (
//                           <p>Thank you for signing up!</p>
//                       ) : (
//                           <form onSubmit={handleFormSubmit}>
//                               <input
//                                   className='form-input'
//                                   placeholder='username'
//                                   name='username'
//                                   type='text'
//                                   value={formState.name}
//                                   onChange={handleChange} />
//                               <input
//                                   className='form-input'
//                                   placeholder='email'
//                                   name='email'
//                                   type='email'
//                                   value={formState.email}
//                                   onChange={handleChange} />
//                               <input
//                                   className='form-input'
//                                   placeholder='******'
//                                   name='password'
//                                   type='password'
//                                   value={formState.password}
//                                   onChange={handleChange} />
//                               <button
//                                   className='btn btn-block btn-primary'
//                                   type='submit'> Sign Up
//                               </button>
//                               <div>
//                                   <p>
//                                       Already have an account?
//                                       <Link to="#">Sign In</Link>
//                                   </p>
//                               </div>
//                           </form>
//                       )}
//                   </div>
//               </div>
//           </div>
//       </main>
//   )
// }