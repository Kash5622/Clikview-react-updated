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
  const {searchOpen,expandNav,enableDarkMode,setAddActive,}=props;

  useEffect(() => {
    
    return () => {
      
    }

  }, [expandNav])
  

  return (
    <>
    <div className={expandNav?"main-container shrinkWidth bodyfixed":"main-container expandWidth"} Style="z-index:-1">
        {searchOpen?<MobileSearch/>:<Category/>}
        
        <HomeBanner setAddActive={setAddActive}/>
        <Featuredvideo/>
{/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Launch static backdrop modal
</button>
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Understood</button>
      </div>
    </div>
  </div>
</div> */}
        <TrendingVideo setAddActive={setAddActive}/>
        <ShortsVideo/>
        <TopVideo setAddActive={setAddActive}/>
        <Articles setAddActive={setAddActive}/>
        <LatestVideo setAddActive={setAddActive}/>
        <Sports/>
        <TravelsandEvents/>
        <Motivation/>
        <PeopleandBlog/>
    </div>
    </>
  )
}

export default Home