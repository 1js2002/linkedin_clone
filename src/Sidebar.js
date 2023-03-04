import Avatar from '@mui/material/Avatar';
import React from 'react'
import './Sidebar.css'

function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebar__top">
            <img src="" alt="" />
            <Avatar className="sidebar__avatar"/>
            <h3>Dinesh</h3>
            <h4>dgoud99120@gmail.com</h4>
        </div>

        <div className="sidebar__stats">
            <div className="sidebar__stat">
                <p>who viewed you</p>
                <p className="sidebar__statNumber">2,344</p>
            </div>
            <div className="sidebar__stat">
                <p>views on post</p>
                <p className="side__statNumber">2,670</p>
            </div>
        </div>
        <div className="sidebar__bottom">
            <p>Recent</p>
        </div>
    </div>
  );
}

export default Sidebar