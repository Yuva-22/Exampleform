import React from 'react';
import './navbar.css';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function navbar()
{
    return(
     <div className='Navbar'>
        <div className="search">
             <input type="text" id="searchbar" placeholder="Search here..." />
             <SearchIcon className='searchicon' style={{fontSize:18}} />
        </div>
        <div className='othercomponents'>
            <NotificationsActiveIcon className='icon' style={{fontSize:18}}  />
            <AccountCircleIcon className='icon' style={{fontSize:18}} />
        </div>
       
        
        
     </div>
    );
}

export default navbar;


