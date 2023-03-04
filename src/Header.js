import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import ChatIcon from '@mui/icons-material/Chat';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import NotificationsIcon from '@mui/icons-material/Notifications';
function Header() {
  return (
    <div className='header'>
        <div className="header__left">
            <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="logo"></img>
            <div className="header__search">
                <SearchIcon/>
                <input type="text" />
            </div>
        </div>
        <div className="header__right">
            <HeaderOption Icon={HomeIcon} title='Home'/>
            <HeaderOption Icon={SupervisorAccountIcon} title='My Network'/>
            <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
            <HeaderOption Icon={ChatIcon} title="Messaging"/>
            <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
            <HeaderOption avatar="https://media.licdn.com/dms/image/D5603AQEJ8Djlz_hQqQ/profile-displayphoto-shrink_800_800/0/1674143051148?e=1683158400&v=beta&t=lBll3PR1lgbJXEDO-kb5F0Axaw6kI8szKFABqssSTy4" title='me'/>
        </div>
    
    
    </div>
  )
}

export default Header