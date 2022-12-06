import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function PeopleandBlog() {
    const data = [
        {
          videoId: "1",
          videoImg: "https://i.ytimg.com/vi/-_XIHB6CFgg/maxresdefault.jpg",
          title: "They are sounding the alarm that this is going to get DANGEROUS | Redacted with Clayton Morris",
          duration: "0:59",
          owner: "Jill Gordon",
          views: "17",
          publish: "2",
        },
        {
          videoId: "2",
          videoImg: "https://i.ytimg.com/vi/-_XIHB6CFgg/maxresdefault.jpg",
          title: "They are sounding the alarm that this is going to get DANGEROUS | Redacted with Clayton Morris",
          duration: "0:59",
          owner: "Jill Gordon",
          views: "17",
          publish: "2",
        },
        {
          videoId: "3",
          videoImg: "https://i.ytimg.com/vi/-_XIHB6CFgg/maxresdefault.jpg",
          title: "They are sounding the alarm that this is going to get DANGEROUS | Redacted with Clayton Morris",
          duration: "0:59",
          owner: "Jill Gordon",
          views: "17",
          publish: "2",
        },
        {
          videoId: "4",
          videoImg: "https://i.ytimg.com/vi/-_XIHB6CFgg/maxresdefault.jpg",
          title: "They are sounding the alarm that this is going to get DANGEROUS | Redacted with Clayton Morris",
          duration: "0:59",
          owner: "Jill Gordon",
          views: "17",
          publish: "2",
        },
        {
          videoId: "5",
          videoImg: "https://i.ytimg.com/vi/-_XIHB6CFgg/maxresdefault.jpg",
          title: "They are sounding the alarm that this is going to get DANGEROUS | Redacted with Clayton Morris",
          duration: "0:59",
          owner: "Jill Gordon",
          views: "17",
          publish: "2",
        },
        {
          videoId: "6",
          videoImg: "https://i.ytimg.com/vi/-_XIHB6CFgg/maxresdefault.jpg",
          title: "They are sounding the alarm that this is going to get DANGEROUS | Redacted with Clayton Morris",
          duration: "0:59",
          owner: "Jill Gordon",
          views: "17",
          publish: "2",
        },
        {
          videoId: "7",
          videoImg: "https://i.ytimg.com/vi/-_XIHB6CFgg/maxresdefault.jpg",
          title: "They are sounding the alarm that this is going to get DANGEROUS | Redacted with Clayton Morris",
          duration: "0:59",
          owner: "Jill Gordon",
          views: "17",
          publish: "2",
        },
        {
          videoId: "8",
          videoImg: "https://i.ytimg.com/vi/-_XIHB6CFgg/maxresdefault.jpg",
          title: "They are sounding the alarm that this is going to get DANGEROUS | Redacted with Clayton Morris",
          duration: "0:59",
          owner: "Jill Gordon",
          views: "17",
          publish: "2",
        },
        {
          videoId: "9",
          videoImg: "https://i.ytimg.com/vi/-_XIHB6CFgg/maxresdefault.jpg",
          title: "They are sounding the alarm that this is going to get DANGEROUS | Redacted with Clayton Morris",
          duration: "0:59",
          owner: "Jill Gordon",
          views: "17",
          publish: "2",
        },
      ]
      var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
              infinite: false,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
              infinite: false,
              dots: false
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: false,
              dots: false
            }
          }
        ]
      };
      function addPlayBtn(id){
        let divId="peopleAndBlog"+id;
        document.getElementById(`${divId}`).classList.add('activePlayBtn');
      }
      function removePlayBtn(id){
        let divId="peopleAndBlog"+id;
        document.getElementById(`${divId}`).classList.remove('activePlayBtn');
      }
      return (
        <div className=" container-home hide_trend">
    
          <div className="content pt_shadow yp_trans">
    
            <div className="home-page-categories">
    
              <div className="title white">
                <h4>
    
                <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-tag"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7" y2="7"></line></svg></div>  People & Blog
    
                  <span className="view_more_link"><a href="https://clikview.com/videos/featured" data-load="?link1=videos&amp;page=featured">Explore more <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path></svg></a></span>
    
                </h4>
    
              </div>
    
              <div className="videos">
    
                <div className="row ">
                  <Slider {...settings}>
                    {data.map((element) => {
                      return <div key={element.videoId}>
                        <div className="col-md-3 col-sm-6 col-xs-6 keep-padding" data-id="4547" Style="width: 100%; display: inline-block;">
                          <div className="video-list">
                            <div className="video-list-image" onMouseEnter={()=>{addPlayBtn(element.videoId)}} onMouseLeave={()=>{removePlayBtn(element.videoId)}}>
                              <a href="https://clikview.com/watch/how-to-relax-a-overactive-mind_p7gNF3uhQx7lTgm.html" data-load="?link1=watch&amp;id=how-to-relax-a-overactive-mind_p7gNF3uhQx7lTgm.html" tabIndex="0">
                                <img src={element.videoImg} alt="How to Relax an Overactive Mind" />
                                <div className="play_hover_btn" id={"peopleAndBlog"+element.videoId} >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather-play-circle feather"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
                                </div>
                                <span className="duration">{element.duration}</span>
                              </a>
                            </div>
                            <div className="pt_vid_fixed_height">
                              <div className="video-list-title">
                                <a href="https://clikview.com/watch/how-to-relax-a-overactive-mind_p7gNF3uhQx7lTgm.html" data-load="?link1=watch&amp;id=how-to-relax-a-overactive-mind_p7gNF3uhQx7lTgm.html" tabIndex="0"><h4 title="How to Relax an Overactive Mind" id="short_title4547">{element.title}</h4></a>
                              </div>
                              <div className="video-list-by">
                                <span><a href="https://clikview.com/@JilltheHealthCoach" data-load="?link1=timeline&amp;id=JilltheHealthCoach" tabIndex="0">{element.owner} <i className="fa fa-check-circle fa-fw verified"></i></a></span><br />
                                <span>{element.views} Views</span> <span className="bold">·</span> <span>{element.publish} days ago</span>
                              </div>
                            </div>
                          </div>
    
                        </div>
                      </div>
                    })}
    
                  </Slider>
                </div>
    
              </div>
    
            </div>
    
            <div className="clear"></div>
    
          </div>
    
          <hr className="dark_hr" />
    
        </div>
    
      )
}

export default PeopleandBlog