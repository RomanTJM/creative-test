import React from 'react';
import './Sidebar.css'
import { Notifications } from './Notifications/Notifications';
import { User } from './User/User';
import { Search } from './Search/Search';
import { SidebarList } from './SidebarList/SidebarList';

export function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebar-up'>
                <Notifications />
                <User />
            </div>
            <Search />
            <SidebarList />
        </div>
    )
}
