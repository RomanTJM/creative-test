import React from 'react';
import './SidebarList.css'
import ComPhoto1 from "../../Assets/Icons/ComPhoto1.svg"
import ComPhoto2 from "../../Assets/Icons/ComPhoto2.svg"
import ComPhoto3 from "../../Assets/Icons/ComPhoto3.svg"
import Rectangle from "../../Assets/Icons/Rectangle.svg"

export function SidebarList() {
    return (
        <div className='sidebar-list'>
            <h1 className='margin-right'>Main</h1>
            <div className='sidebar-flex'>
                <button className='sidebar-list-btn icon-home'>Home</button>
            </div>
            <div className='sidebar-flex'>
                <button className='sidebar-list-btn icon-watch'>Watch</button>
                <h2 className='watch-subtext'>2</h2>
            </div>
            <div className='sidebar-flex'>
                <button className='sidebar-list-btn icon-com'>Community</button>
                <div className='community-photo'>
                    <img className='position' src={ComPhoto1} alt="user" width={30} height={30} />
                    <img className='position2' src={ComPhoto2} alt="user" width={30} height={30} />
                    <img className='position3' src={ComPhoto3} alt="user" width={30} height={30} />
                </div>
            </div>
            <img className='rectangle-green' src={Rectangle} alt="user" width={5} height={44} />
            <div className='sidebar-flex'>
                    <button className='sidebar-list-btn icon-help'>Help</button>
            </div>
        </div>
    )
}






