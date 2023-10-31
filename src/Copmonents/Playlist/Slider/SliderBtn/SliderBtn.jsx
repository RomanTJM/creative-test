import React from 'react';
import './SliderBtn.css';

export const SliderBtn = ({ activeSleder, setActiveSleder, slide_img }) => {

    const changeSlide = (direction = 1) => {
        let slideNumber = 0;

        if (activeSleder + direction < 0) {
            slideNumber = slide_img.length - 1;
        } else {
            slideNumber = (activeSleder + direction) % slide_img.length;
        }

        setActiveSleder(slideNumber);
    };

    return (
        <div className='arrow-button'>
            <button className='arrow-left' onClick={() => changeSlide(- 1)}>Prev</button>
            <button className='arrow-right' onClick={() => changeSlide(+ 1)}>Next</button>
        </div>
    )
}