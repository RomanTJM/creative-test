import React from 'react';
import './Main.css'
import { Sidebar } from '../Sidebar/Sidebar';
import { Playlist } from '../Playlist/Playlist';

export function Main() {
  return (
    <div className='main'>
        <Sidebar />
        <Playlist />
    </div>
  )
}
