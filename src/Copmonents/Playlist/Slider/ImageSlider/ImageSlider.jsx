import React from 'react';
import './ImageSlider.css';

export const ImageSlider = ( { id, src } ) => {
    return (
        <div className='flex'>
            <img
                key={id}
                src={src}
                className='slider-img'
            />
        </div>
    )
}
