import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import { Link } from 'react-router-dom';


export default function SignUp () {
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
    
}