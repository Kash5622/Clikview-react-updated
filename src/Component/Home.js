import React,{useEffect} from 'react'
import Articles from './Articles'
import Category from './Category'
import Featuredvideo from './Featuredvideo'
import HomeBanner from './HomeBanner'
import LatestVideo from './LatestVideo'
import MobileSearch from './MobileSearch'
import Motivation from './Motivation'
import PeopleandBlog from './PeopleandBlog'
import ShortsVideo from './ShortsVideo'
import Sports from './Sports'
import TopVideo from './TopVideo'
import TravelsandEvents from './TravelandEvents'
import TrendingVideo from './TrendingVideo'

function Home(props) {
  const {searchOpen,expandNav}=props;
  useEffect(() => {
    
    return () => {
      
    }

  }, [expandNav])
  
  return (
    <>
    <div className={expandNav?"main-container shrinkWidth bodyfixed":"main-container expandWidth"} Style="z-index:-1">
        {searchOpen?<MobileSearch/>:<Category/>}
        <HomeBanner/>
        <Featuredvideo/>
        <TrendingVideo/>
        <ShortsVideo/>
        <TopVideo/>
        <Articles/>
        <LatestVideo/>
        <Sports/>
        <TravelsandEvents/>
        <Motivation/>
        <PeopleandBlog/>
    </div>
    </>
  )
}

export default Home