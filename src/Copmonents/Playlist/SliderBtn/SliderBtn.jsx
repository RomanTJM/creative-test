import React from 'react';
import './SliderBtn.css';
import {cardData } from '../../../Database/Database';


export const SliderBtn = ({ activeSleder, setActiveSleder }) => {

    const changeSlide = (direction = 1) => {
        let slideNumber = 0;

        if (activeSleder + direction < 0) {
            slideNumber = cardData.length - 1;
        } else {
            slideNumber = (activeSleder + direction) % cardData.length;
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