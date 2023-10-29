import React, { useState } from 'react';
import './CardList.css';
import EarnIcon from '../../Assets/Icons/EarnIcon.svg';
import AcademicCap from '../../Assets/Icons/AcademicCap.svg';

export const CardList = ({ img, title, earn, handleButtonClick }) => {

    return (
        <div className='card-list'>
                <div className='card-item' >
                <img
                    onClick={() => handleButtonClick()}
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
        </div>
    )
}
