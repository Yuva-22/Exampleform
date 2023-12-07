import React from 'react';
import Form from './form';
import Navbar from './navbar';
import Sidebar from './sidebar';
import './empremove.css';

function empremove() {
  return (
    <div className='empremove'>
        <Sidebar />
       <div className='barform'>
            <Navbar />
            <Form />
            empremove
        </div>
    </div>
  )
}

export default empremove