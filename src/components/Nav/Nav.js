import React from 'react';
import { Link } from 'react-router-dom';

import './Nav.scss';

export default function Nav() {

    return (
        <header className='navbar'>
            <div className="container">
                <nav>
                <Link to='/'><h4 className="siteName">Deakin University Indian Club</h4></Link>
                    <ul className='navLinks'>
                        <Link to='/about-us'><li>About Us</li></Link>
                        <Link to='/events'><li>Events</li></Link>
                    </ul>
                </nav>
            </div>
        </header>
    )
}