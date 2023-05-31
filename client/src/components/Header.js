import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

export default function Header() {
    const logout = (e) => {
        e.preventDefault();
        Auth.logout();
    };
    return (
        <header>
            <div>
                <Link to="/">
                    <h1>Buy the Way</h1>
                </Link>
            </div>
            <div>
                {Auth.loggedIn() ? (
                    <>
                        <button
                            className='btn btn-md m-2'
                            onClick={logout}>
                            Log out</button></>
                ) : (
                    <>
                    <Link
                    className='btn btn-md m-2' to='/login'>Login</Link>
                    <Link
                    className='btn btn-md m-2' to='/signup'>Signup</Link></>
                )}
            </div>
        </header>
    )
}