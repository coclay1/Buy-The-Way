import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

export default function Login() {
    const [formState, setFormState] = useState({
        email: '',
        password: '',
    });
    const [login, { err, data }] = useMutation(LOGIN_USER);

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

    return (
        <main className='flex-row justify-center mb-4'>
            <div className='col-12 col-lg-10'>
                <div className='card'>
                    <h2 className='card-header'>
                        Login
                    </h2>
                    <div className='card-body'>
                        {data ? (
                            <p> Successfully Logged In</p>
                        ) : (
                            <form onSubmit={handleFormSubmit}>
                                <input
                                    className='form-input'
                                    placeholder='Email'
                                    name='email'
                                    type='email'
                                    value={formState.email}
                                    onChange={handleChange} />
                                <input
                                    className='form-input'
                                    placeholder='*****'
                                    name='password'
                                    type='password'
                                    value={formState.password}
                                    onChange={handleChange} />
                                <button
                                    className='btn btn-block btn-primary'
                                    type='submit'>
                                    Submit</button>
                            </form>
                        )}
                        {err && (
                            <div className='bg-danger text-white'>
                                {err.message}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </main>
    )
}