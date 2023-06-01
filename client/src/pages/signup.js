import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function SignUp() {
    const [formState, setFormState] = useState({
        username: '',
        email: '',
        password: ''
    });
    const [addUser, { error, data }] = useMutation(ADD_USER);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            const { data } = await addUser({
                variables: { ...formState },
            });
            Auth.login(data.addUser.token)
        } catch (err) {
            console.log(err);
        }
    }
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
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}></Avatar>
                    <Typography component="h1" variant="h5">Sign up</Typography>
                    <Box component="form" noValidate onSubmit={handleFormSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="password"
                                    label="Password"
                                    name="password"
                                    type="password"
                                    autoComplete="new-password"
                                />
                            </Grid>
                            <Button>

                            </Button>
                            <Grid>
                                <Link>
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    )
}