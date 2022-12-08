import './App.css';
import React, { useState, useEffect } from 'react';
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
import Participate from './Component/Participate';
import AllArticles from './Component/AllArticles';
import AllTopVideos from './Component/AllTopVideos';
import Movies from './Component/Movies';
import PopularChannel from './Component/PopularChannel';
import Live from './Component/SettingComponent/Live';
import ReportingBug from './Component/SettingComponent/ReportingBug';
import CreateAuction from './Component/CreateAuction';
import ArticleDetails from './Component/ArticleDetails';
import FooterComponent from './Component/FooterComponent';
import ShortsVideoDetails from './Component/ShortsVideoDetails';
// import { useTransition, animated, } from 'react-spring'

function App() {
  const [searchOpen, setsearchOpen] = useState(false);
  const [expandNav, setexpandNav] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [whatsnew, setwhatsNew] = useState(false);
  const [addActive, setAddActive] = useState('home_menu_');
  
  // useEffect(() => {
  //   if(darkMode){
  //     require('./DarkMode.css')
  //   }
    
  // }, [darkMode])
  function whatsnewtougle(){
    setwhatsNew(!whatsnew)
  }
  
  const enableDarkMode=()=>{
    // setDarkMode(!darkMode);
    // setTimeout(() => {
    //   window.location.reload()
    // }, 1000);
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
        <NavBar handleClick={handleClick} expandNavClick={expandNavClick} expandNav={expandNav} enableDarkMode={enableDarkMode} whatsnewtougle={whatsnewtougle} whatsnew={whatsnew}/>
        <Routes>
          <Route exact path='/home2' element={<Home searchOpen={searchOpen} expandNav={expandNav} setAddActive={setAddActive}   />} />
          <Route exact path='/home2/allvideos/:Category' element={<AllVideos searchOpen={searchOpen} expandNav={expandNav} />} />
          <Route exact path='/home2/videodetails/:id' element={<VideoDetails searchOpen={searchOpen} expandNav={expandNav} />} />
          <Route exact path='/home2/timeline' element={<TimeLine searchOpen={searchOpen} expandNav={expandNav} />} />
          <Route exact path='/home2/gopro' element={<GoPro searchOpen={searchOpen} expandNav={expandNav} />} />
          <Route exact path='/home2/likevideos' element={<LikeVideos searchOpen={searchOpen} expandNav={expandNav} />} />
          <Route exact path='/home2/myarticles' element={<MyArticles searchOpen={searchOpen} expandNav={expandNav} />} />
          <Route exact path='/home2/history' element={<HistoryVideo searchOpen={searchOpen} expandNav={expandNav} />} />
          <Route exact path='/home2/videostudio/:id' element={<VideoStudio searchOpen={searchOpen} expandNav={expandNav}/>} />
          <Route exact path='/home2/createarticle' element={<CreateArticle searchOpen={searchOpen} expandNav={expandNav} />} />
          <Route exact path='/home2/createproduct' element={<CreateProduct searchOpen={searchOpen} expandNav={expandNav} />} />
          <Route exact path='/home2/subscriptions' element={<Subscription searchOpen={searchOpen} expandNav={expandNav} />} />
          <Route exact path='/home2/cvmainwallet' element={<CvMainWallet searchOpen={searchOpen} expandNav={expandNav} />} />
          <Route exact path='/home2/advertising' element={<Advertising searchOpen={searchOpen} expandNav={expandNav} />} />
          <Route exact path='/home2/purchase' element={<Purchase searchOpen={searchOpen} expandNav={expandNav} />} />
          <Route exact path='/home2/createpost' element={<CreatePost searchOpen={searchOpen} expandNav={expandNav} />} />
          <Route exact path='/home2/messages' element={<Messages searchOpen={searchOpen} expandNav={expandNav} />} />
          <Route exact path='/home2/settings/:details' element={<Settings searchOpen={searchOpen} expandNav={expandNav} />} />
          <Route exact path='/home2/participate' element={<Participate searchOpen={searchOpen} expandNav={expandNav} />} />
          <Route exact path='/home2/allarticles' element={<AllArticles searchOpen={searchOpen} expandNav={expandNav} />} />
          <Route exact path='/home2/alltopvideos' element={<AllTopVideos searchOpen={searchOpen} expandNav={expandNav} />} />
          <Route exact path='/home2/movies' element={<Movies searchOpen={searchOpen} expandNav={expandNav} />} />
          <Route exact path='/home2/popularchannel' element={<PopularChannel searchOpen={searchOpen} expandNav={expandNav} />} />
          <Route exact path='/home2/live' element={<Live searchOpen={searchOpen} expandNav={expandNav} />} />
          <Route exact path='/home2/reportbug' element={<ReportingBug searchOpen={searchOpen} expandNav={expandNav} />} />
          <Route exact path='/home2/createauction' element={<CreateAuction searchOpen={searchOpen} expandNav={expandNav} />} />
          <Route exact path='/home2/articledetails/:articleid' element={<ArticleDetails searchOpen={searchOpen} expandNav={expandNav} />} />
          <Route exact path='/home2/footercomponent/:component' element={<FooterComponent searchOpen={searchOpen} expandNav={expandNav} />} />
          <Route exact path='/home2/shortsvideodetails' element={<ShortsVideoDetails searchOpen={searchOpen} expandNav={expandNav} />} />
        </Routes>
        {/* {transition((style, item) => { */}
          
            {expandNav ? <ExpandSideBar expandNav={expandNav} expandNavClick={expandNavClick} setAddActive={setAddActive} addActive={addActive}/> : <SideNavBar setAddActive={setAddActive} addActive={addActive}/>}
           
        {/* })} */}
      </Router>
    </div>
  );
}

export default App;
