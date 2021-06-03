import React from 'react';

const ImageSection = ({ image, alt }) => {
    return (
        <div className='col'>
            <img src={image} className='img-fluid' alt={alt} />
        </div>
    );
};

export default ImageSection;