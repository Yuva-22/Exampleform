import React from 'react';
import './App.css';
import Home from './home';
import Employeedetail from './employeedetail';
import Empadd from './empadd';
import Empremove from './empremove';
import Empupdate from './empupdate';
import { Routes,Route, BrowserRouter } from 'react-router-dom';



function App() {
  return (
    <div className="App">
       <BrowserRouter>
          <Routes>
              <Route path="/home"  element={<Home />}/>
              <Route path="/empdetail"  element={<Employeedetail />}/>
              <Route path="/empadd"  element={<Empadd />}/>
              <Route path="/empremove"  element={<Empremove />}/>
              <Route path="/empupdate"  element={<Empupdate />}/>
          </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
