import './App.css';
import React, { useState } from 'react';
import Home from './Component/Home';
import NavBar from './Component/NavBar';
import SideNavBar from './Component/SideNavBar';
import ExpandSideBar from './Component/ExpandSideBar';
import AllVideos from './Component/AllVideos';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VideoDetails from './Component/VideoDetails';
import TimeLine from './Component/TimeLine';
import './DarkMode.css'
import GoPro from './Component/GoPro';
import LikeVideos from './Component/LikeVideos';
import MyArticles from './Component/MyArticles';
import HistoryVideo from './Component/HistoryVideo';
import CreateArticle from './Component/CreateArticle';
import VideoStudio from './Component/VideoStudio';
import CreateProduct from './Component/CreateProduct';
import Subscription from './Component/Subscription';
import CvMainWallet from './Component/CvMainWallet';
import Advertising from './Component/Advertising';
import Purchase from './Component/Purchase';
import CreatePost from './Component/CreatePost';
import Messages from './Component/Messages';
import Settings from './Component/Settings';
// import { useTransition, animated, } from 'react-spring'

function App() {
  const [searchOpen, setsearchOpen] = useState(false);
  const [expandNav, setexpandNav] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const enableDarkMode=()=>{
    setDarkMode(!darkMode);
    console.log("clicked")
  }
  const handleClick = () => {
    setsearchOpen(!searchOpen);
  }
  const expandNavClick = () => {
    setexpandNav(!expandNav);
    // document.getElementsByClassName("main-container").Style.width="83%"
  }
  // const transition = useTransition(expandNav, {
  //   from: {},
  //   enter: {},
  //   leave: {}
  // })
  
  return (
    <div className='mainContainer' Style="overflow:hidden">
      <Router>
        <NavBar handleClick={handleClick} expandNavClick={expandNavClick} expandNav={expandNav} enableDarkMode={enableDarkMode} />
        <Routes>
          <Route exact path='/home2' element={<Home searchOpen={searchOpen} expandNav={expandNav}  />} />
          <Route exact path='/home2/allvideos/:Category' element={<AllVideos searchOpen={searchOpen} expandNav={expandNav} />} />
          <Route exact path='/home2/videodetails' element={<VideoDetails searchOpen={searchOpen} expandNav={expandNav} />} />
          <Route exact path='/home2/timeline' element={<TimeLine searchOpen={searchOpen} expandNav={expandNav} />} />
          <Route exact path='/home2/gopro' element={<GoPro searchOpen={searchOpen} expandNav={expandNav} />} />
          <Route exact path='/home2/likevideos' element={<LikeVideos searchOpen={searchOpen} expandNav={expandNav} />} />
          <Route exact path='/home2/myarticles' element={<MyArticles searchOpen={searchOpen} expandNav={expandNav} />} />
          <Route exact path='/home2/history' element={<HistoryVideo searchOpen={searchOpen} expandNav={expandNav} />} />
          <Route exact path='/home2/videoStudio' element={<VideoStudio searchOpen={searchOpen} expandNav={expandNav}/>} />
          <Route exact path='/home2/createarticle' element={<CreateArticle searchOpen={searchOpen} expandNav={expandNav} />} />
          <Route exact path='/home2/createproduct' element={<CreateProduct searchOpen={searchOpen} expandNav={expandNav} />} />
          <Route exact path='/home2/subscriptions' element={<Subscription searchOpen={searchOpen} expandNav={expandNav} />} />
          <Route exact path='/home2/cvmainwallet' element={<CvMainWallet searchOpen={searchOpen} expandNav={expandNav} />} />
          <Route exact path='/home2/advertising' element={<Advertising searchOpen={searchOpen} expandNav={expandNav} />} />
          <Route exact path='/home2/purchase' element={<Purchase searchOpen={searchOpen} expandNav={expandNav} />} />
          <Route exact path='/home2/createpost' element={<CreatePost searchOpen={searchOpen} expandNav={expandNav} />} />
          <Route exact path='/home2/messages' element={<Messages searchOpen={searchOpen} expandNav={expandNav} />} />
          <Route exact path='/home2/settings' element={<Settings searchOpen={searchOpen} expandNav={expandNav} />} />
        </Routes>
        {/* {transition((style, item) => { */}
          
            {expandNav ? <ExpandSideBar expandNav={expandNav} expandNavClick={expandNavClick} /> : <SideNavBar />}
           
        {/* })} */}
      </Router>
    </div>
  );
}

export default App;
