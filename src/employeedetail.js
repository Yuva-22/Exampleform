import React from 'react';
import Form from './form';
import Navbar from './navbar';
import Sidebar from './sidebar';
import './employeedetail.css';

function employeedetail() {
  return (
    <div className='employeedetail'>
        <Sidebar />
        <div className='barform'>
            <Navbar />
            <Form />
            empdetail
        </div>
    </div>
  )
}

export default employeedetail;