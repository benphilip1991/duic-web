import React from 'react';
import { Link } from 'react-router-dom';

import './Nav.scss';

export default function Nav() {

    return (
        <header className='navbar'>
            <div className="container">
                <nav>
                    <Link to='/'><h5 className="siteName">Deakin University Indian Club</h5></Link>
                    <ul className='navLinks'>
                        <Link to='/events'><li><h5>Events</h5></li></Link>
                        <Link to='/media'><li><h5>Media</h5></li></Link>
                        <Link to='/about-us'><li><h5>About Us</h5></li></Link>
                        <Link to='/login'><li><h5>Login</h5></li></Link>
                    </ul>
                </nav>
            </div>
        </header>
    )
}