import React from 'react';
import './sidebar.css';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import DatasetIcon from '@mui/icons-material/Dataset';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import UpdateIcon from '@mui/icons-material/Update';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CategoryIcon from '@mui/icons-material/Category';
import PersonIcon from '@mui/icons-material/Person';

function sidebar() {
  return (
    <div className='Sidebar'>
        <div className='title'>
          <AccountCircleIcon className='titleicon' style={{fontSize:80}} />
          <p className='titleheading'>Welcome!
          <h1>ADMIN</h1></p>
        </div>
        <div className='empdetail'>
            <h3 className='detailheading'><PersonIcon className='icon' style={{fontSize:20}}/>EMPLOYEE DETAILS</h3>
            <hr />
            <div className='details'>
                <h4 className='options'><DatasetIcon className='icon' style={{fontSize:15}} />See Employee Details</h4>
                <h4 className='options'><PersonAddAlt1Icon className='icon' style={{fontSize:15}} />Add New Employee</h4>
                <h4 className='options'><PersonRemoveIcon className='icon' style={{fontSize:15}} />Remove Employee</h4>
                <h4 className='options'><UpdateIcon className='icon' style={{fontSize:15}} />Update Details</h4>
            </div>
        </div>
        <br />
        <div className='prodetail'>
            <h3 className='detailheading'> <CategoryIcon className='icon' style={{fontSize:20}} />PRODUCT DETAILS</h3>
            <hr />
                <div className='details'>
                <h4 className='options'><DatasetIcon className='icon' style={{fontSize:15}} />See Product Details</h4>
                <h4 className='options'><AddCircleOutlineIcon className='icon' style={{fontSize:15}}/>Add New Product</h4>
                <h4 className='options'><RemoveCircleOutlineIcon className='icon' style={{fontSize:15}}/> Remove Product</h4>
                <h4 className='options'><UpdateIcon className='icon' style={{fontSize:15}} />Update Product Details</h4>
            </div>
        </div>

    </div>
  )
}

export default sidebar;