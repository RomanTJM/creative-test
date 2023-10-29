import React from 'react'
import Bell from "../../Assets/Icons/Bell.svg";
import './Notifications.css';

export function Notifications() {
  return (
    <div className='notifications'>
      <img src={Bell} alt="Bell" width={11} height={12}/>
      <div className='dot'></div>
    </div>
  )
}