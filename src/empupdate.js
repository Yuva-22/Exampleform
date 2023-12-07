import React from 'react';
import Form from './form';
import Navbar from './navbar';
import Sidebar from './sidebar';
import './empupdate.css';

function empupdate() {
  return (
    <div className='empupdate'>
        <Sidebar />
       <div className='barform'>
            <Navbar />
            <Form />
            empupdate
        </div>
    </div>
  )
}

export default empupdate