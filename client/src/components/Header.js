import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../utils/auth';
import BasicButtons from '../../src/components/Button/button.js';

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
                    {Auth.getProfile().data.username}'s profile
                        <button
                            className='btn btn-md m-2'
                            onClick={logout}>
                            Log out</button></>
                ) : (
                   <BasicButtons/>
                )}
            </div>
        </header>
    )
}