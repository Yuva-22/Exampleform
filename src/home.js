import React from 'react'
import Form from './form';
import Navbar from './navbar';
import Sidebar from './sidebar';
import './home.css';

function home() {
  return (
    <div className="home">
       <Sidebar />
       <div className='barform'>
            <Navbar />
            <Form />
            home
      </div>
    </div>
  )
}

export default home;