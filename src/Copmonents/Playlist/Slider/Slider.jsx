import React, { useState } from 'react';
import './Slider.css'
import { ImageSlider } from '../ImageSlider/ImageSlider';
// import { SliderBtn } from '../SliderBtn/SliderBtn';
// import { cardData } from '../../../Database/Database';


export const Slider = ({ src, id, handleButtonClick }) => {

    // const [activeSleder, setActiveSleder] = useState(0);

    return (
        <div className='slider'>
            <button onClick={() => handleButtonClick()} className='btn-beck'>Academy</button>
            <div className='slider-item'>
                <ImageSlider                 
                key={id}
                src={src}
                />
            {/* <img
                key={id}
                src={src}
            />
            <div className='slide-title'>{title}</div> */}
            </div>

        </div>
    )
}
