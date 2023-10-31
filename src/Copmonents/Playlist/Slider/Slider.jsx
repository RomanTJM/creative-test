import React from 'react';
import './Slider.css';
import { SliderBtn } from './SliderBtn/SliderBtn';
import { AcademyBtn } from '../AcademyBtn/AcademyBtn';

export const Slider = ({ slide_img, closeSlider, activeSleder, setActiveSleder, slide_title }) => {

    return (
        <div className='slider'>
                  <button onClick={() => closeSlider()} className='btn-beck'>Academy</button> 
            {slide_img.map((image, idx) => (
                <div className='slider'>
  

                    <div key={image.id} className={`slider-item${idx === activeSleder ? 'active' : ''}`}>
                        <img src={image.src} alt="user" width={264} height={558} />
                    </div>
                    <div className='slider-title'>{slide_title}</div>
                </div>
            ))}
            <SliderBtn activeSleder={activeSleder} setActiveSleder={setActiveSleder} slide_img={slide_img} />
        </div>
    )
}
