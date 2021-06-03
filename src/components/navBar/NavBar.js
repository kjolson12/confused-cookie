import React from 'react';
import { Link } from 'react-router-dom';

import './NavBar.css';

const NavBar = () => {
    const renderActive = path => {
        if (window.location.pathname === path) return 'active';
        return '';
    };

    return (
        <div className='container'>
            <nav className='nav justify-content-end'>
                <Link className={`nav-link fs-5 me-1 ${renderActive('/')}`} to='/'>Home</Link>
                <Link className={`nav-link fs-5 me-1 ${renderActive('/cookies')}`} to='/cookies'>Cookies</Link>
                <Link className={`nav-link fs-5 me-1 ${renderActive('/about')}`} to='/about'>About</Link>
                <Link className={`nav-link fs-5 me-1 ${renderActive('/about')}`} to='/contact'>Contact</Link>
            </nav>
        </div>
    );
};

export default NavBar;