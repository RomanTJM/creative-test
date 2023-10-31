import React, { useState } from 'react';
import './CardList.css';
import EarnIcon from '../../Assets/Icons/EarnIcon.svg';
import AcademicCap from '../../Assets/Icons/AcademicCap.svg';
import { Slider } from '../Slider/Slider';
// import ImageSlider from '../Slider/ImageSlider/ImageSlider';
// import { SliderBtn } from '../SliderBtn/SliderBtn';

export const CardList = ({ 
    img,
    title,
    earn,
    slide_img,
    slide_title }) => {

    const [isOpenSlider, setOpenSlider] = useState(false)
    const [activeSleder, setActiveSleder] = useState(0);

    const closeSlider = () => {
        setOpenSlider(false);
    }

    return (
        <div className='card-list'>
            {isOpenSlider ? (
                <Slider
                    slide_img={slide_img}
                    slide_title={slide_title}
                    activeSleder={activeSleder}
                    setActiveSleder={setActiveSleder}
                    closeSlider={closeSlider}
                />
            ) : (
                <div className='card-item' >
                    <img
                        onClick={() => setOpenSlider(!isOpenSlider)}
                        className='card-img'
                        src={img}
                    />
                    <div className='earn'>
                        <img src={EarnIcon} alt="user" width={24} height={24} />
                        <div className='card-earn'>{earn}</div>
                    </div>
                    <img className='academic-cap' src={AcademicCap} alt="user" width={18} height={18} />
                    <div className='card-title'>{title}</div>
                </div>
            )}
        </div>
    )
}
