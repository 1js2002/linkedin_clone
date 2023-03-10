import Avatar from '@mui/material/Avatar';
import React from 'react'
import './Sidebar.css'

function Sidebar() {
    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
          <span className="sidebar__hash">#</span>
          <p>{topic}</p>
        </div>
      );
  return (
    <div className="sidebar">
        <div className="sidebar__top">
            <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80" alt="" />
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
            {recentItem("reactjs")}
            {recentItem("programming")}
            {recentItem("softwareengineering")}
            {recentItem("design")}
            {recentItem("developer")}
        </div>
    </div>
  );
}

export default Sidebar