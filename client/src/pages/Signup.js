import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import { Link } from 'react-router-dom';

export default SignUp = () => {
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

    return (
        <main className='flex-row justify-center mb-4'>
            <div className='col-12 col-lg-10'>
                <div className='card'>
                    <h2 className='card-header'>Sign Up</h2>
                    <div className='card-body'>
                        {data ? (
                            <p>Thank you for signing up!</p>
                        ) : (
                            <form onSubmit={handleFormSubmit}>
                                <input
                                    className='form-input'
                                    placeholder='username'
                                    name='username'
                                    type='text'
                                    value={formState.name}
                                    onChange={handleChange} />
                                <input
                                    className='form-input'
                                    placeholder='email'
                                    name='email'
                                    type='email'
                                    value={formState.email}
                                    onChange={handleChange} />
                                <input
                                    className='form-input'
                                    placeholder='******'
                                    name='password'
                                    type='password'
                                    value={formState.password}
                                    onChange={handleChange} />
                                <button
                                    className='btn btn-block btn-primary'
                                    type='submit'> Sign Up
                                </button>
                                <div>
                                    <p>
                                        Already have an account?
                                        <Link to="#">Sign In</Link>
                                    </p>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </main>
    )
}