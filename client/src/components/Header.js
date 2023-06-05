import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/signBuyTheWay.jpg'

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
                    <h1><img src={Logo} width= "300px"/></h1>
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
                   <BasicButtons/>
                )}
            </div>
        </header>
    )
}