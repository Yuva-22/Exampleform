import React from 'react';
import Form from './form';
import Navbar from './navbar';
import Sidebar from './sidebar';
import './empadd.css';

function empadd() {
  return (
    <div class="empadd">
        <Sidebar />
       <div className='barform'>
            <Navbar />
            <Form />
            empadd
        </div>  
    </div>
  )
}

export default empadd