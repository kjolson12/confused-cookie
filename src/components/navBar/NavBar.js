import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='container'>
            <nav className='nav justify-content-end'>
                <Link className='nav-link fs-5 text-white' to='/'>Home</Link>
                <Link className='nav-link fs-5 text-white' to='/cookies'>Cookies</Link>
                <Link className='nav-link fs-5 text-white' to='/about'>About</Link>
            </nav>
        </div>
    );
};

export default NavBar;