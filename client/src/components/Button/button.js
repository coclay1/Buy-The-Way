import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
// import Link from '@mui/material/Link';
import { Link } from 'react-router-dom';

export default function BasicButtons() {
    return (
        <Stack spacing={4} direction="row">
            <Link to='/login'>
                <Button variant="contained">Login</Button>
            </Link>
            <Link to='/signup'>
                <Button variant="contained">Signup</Button>
            </Link>
        </Stack>
    );
}