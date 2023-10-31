import React from 'react';
import './Playlist.css';
import { Filters } from './Filters/Filters';
import { AcademyBtn } from './AcademyBtn/AcademyBtn';
import { SeeAllBtn } from './SeeAllBtn/SeeAllBtn';
import { CardList } from './CardList/CardList';
import { cardData } from '../../Database/Database';

export function Playlist() {

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
                {cardData.map((item) => (
                    <>
                        <CardList
                            key={item.id}
                            img={item.img}
                            earn={item.earn}
                            title={item.title}
                            slide_img={item.slide_img}
                        />
                    </>
                ))}
            </div>
        </div>
    )
}
