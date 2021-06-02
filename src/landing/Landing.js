import React from 'react';
import './Landing.css';

import NavBar from '../components/navBar/NavBar';

const Landing = () => {
    return (
        <div id='rootLanding'>
            <NavBar />
            <div id='displayContainer'>
                <h1 className='display-1 text-white text-center'>The Confused Cookie</h1>
                <h2 className='display-6 text-white-50'>Crafted in Aliso Viejo California</h2>
            </div>
        </div>
    );
};

export default Landing;