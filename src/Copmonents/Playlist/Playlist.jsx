import React, { useState } from 'react';
import './Playlist.css';
import { Filters } from './Filters/Filters';
import { AcademyBtn } from './AcademyBtn/AcademyBtn';
import { SeeAllBtn } from './SeeAllBtn/SeeAllBtn';
import { CardList } from './CardList/CardList';
import { cardData } from '../../Database/Database';
import { Slider } from './Slider/Slider';


export function Playlist() {

    const [isOpenSlider, setOpenSlider] = useState(false)

    //     const handleSliderOpen = () => {
    //     setOpenSlider(false)
    // }

    const [isStyled, setIsStyled] = useState(false);

    const handleButtonClick = () => {
        setIsStyled(!isStyled); 
    };

    const style = {
        display: isStyled ? 'flex' : 'none', 

      };

    return (
        <div className='playlist'>
            <div className='playlist-up'>
                <AcademyBtn />
                <Filters />
            </div>
            <div className='playlist-flex'>
                <h1 className='playlist-text'>New Playlist</h1>
                <SeeAllBtn />
            </div>


            <div className='playlist-card'>
                {/* {isOpenSlider ? (
                    <>
                        {cardData.map((item) => (
                            <CardList
                                key={item.id}
                                img={item.img}
                                title={item.title}
                                earn={item.earn}
                            // handleSliderOpen={handleSliderOpen}
                            />))}
                    </>


                ) : (
                    <>
                        {cardData.map((prop) => (
                            <>
                                {prop.slide_img.map((image) => (
                                    <Slider
                                        key={image.id}
                                        src={image.src} />
                                ))}
                            </>
                        ))}
                    </>
                )} */}

                {cardData.map((item) => (
                    <>
                        <CardList
                            key={item.id}
                            img={item.img}
                            earn={item.earn}
                            title={item.title}
                            handleButtonClick={handleButtonClick}
                        />

                        {item.slide_img.map((image) => (
                            <div style={style}>
                                <Slider
                                    key={image.id}
                                    src={image.src}
                                    handleButtonClick={handleButtonClick}
                                    
                                    />
                            </div>

                        ))}
                    </>
                ))}
            </div>
        </div>
    )
}
