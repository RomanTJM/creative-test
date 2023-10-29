import React from 'react';
import UserPhoto from "../../Assets/Icons/UserPhoto.svg";
import './User.css';

export function User() {
  return (
    <div className='user'>
      <img src={UserPhoto} alt="user" width={30} height={30}/>
    </div>
  )
}
