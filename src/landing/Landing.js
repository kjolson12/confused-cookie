import React from 'react';
import './Landing.css';

import NavBar from '../components/navBar/NavBar';
import ImageSection from '../components/imageSection/ImageSection';

import redPlate from '../images/IMG_0194.jpeg';
import brownCookies from '../images/IMG_0192.jpeg';
import cupCakes from '../images/IMG_0193.jpeg';


const Landing = () => {
    return (
        <div>
            <div id='rootLanding'>
                <NavBar />
                <div id='displayContainer'>
                    <h1 className='display-1 text-white text-center'>The Confused Cookie</h1>
                    <h2 className='display-6 text-white-50'>Crafted in Aliso Viejo California</h2>
                </div>
            </div>
            <div className='row row-cols-1 row-cols-md-3'>
                <ImageSection image={brownCookies} alt='a plate of cookies' />
                <ImageSection image={redPlate} alt='a box of brown cookies' />
                <ImageSection image={cupCakes} alt='a plate of cupcakes' />
            </div>
        </div>
    );
};

export default Landing;