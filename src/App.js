import './App.css';
import React, { useState } from 'react';
import Home from './Component/Home';
import NavBar from './Component/NavBar';
import SideNavBar from './Component/SideNavBar';
import ExpandSideBar from './Component/ExpandSideBar';
import AllVideos from './Component/AllVideos';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [searchOpen, setsearchOpen] = useState(false);
  const [expandNav, setexpandNav] = useState(false);
  const handleClick = () => {
    setsearchOpen(!searchOpen);
  }
  const expandNavClick = () => {
    setexpandNav(!expandNav);
    // document.getElementsByClassName("main-container").Style.width="83%"
  }
  return (
    <div className='mainContainer' Style="overflow:hidden">
      <Router>
        <NavBar handleClick={handleClick} expandNavClick={expandNavClick} expandNav={expandNav}/>
        <Routes>
          <Route exact path='/home2' element={<Home searchOpen={searchOpen} expandNav={expandNav}/>} />
          <Route exact path='/home2/allvideos/:Category' element={ <AllVideos searchOpen={searchOpen} expandNav={expandNav}/>}/>
        </Routes>
        {expandNav ? <ExpandSideBar expandNavClick={expandNavClick}/> : <SideNavBar />}
      </Router>
    </div>
  );
}

export default App;
