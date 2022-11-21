import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Link} from 'react-router-dom';

function Featuredvideo() {
  const data = [
    {
      videoId: "1",
      videoImg: "https://clikview.com/upload/photos/2022/10/bF8jHdT67wbHfPQQmpGD_21_7bc8c3be3a6b778394207f32e4efc23d_image.png",
      title: "How to Relax an Overactive Mind",
      duration: "0:59",
      owner: "Jill Gordon",
      views: "17",
      publish: "2",
    },
    {
      videoId: "2",
      videoImg: "https://clikview.com/upload/photos/2022/10/bF8jHdT67wbHfPQQmpGD_21_7bc8c3be3a6b778394207f32e4efc23d_image.png",
      title: "How to Relax an Overactive Mind",
      duration: "0:59",
      owner: "Jill Gordon",
      views: "17",
      publish: "2",
    },
    {
      videoId: "3",
      videoImg: "https://clikview.com/upload/photos/2022/10/bF8jHdT67wbHfPQQmpGD_21_7bc8c3be3a6b778394207f32e4efc23d_image.png",
      title: "How to Relax an Overactive Mind",
      duration: "0:59",
      owner: "Jill Gordon",
      views: "17",
      publish: "2",
    },
    {
      videoId: "4",
      videoImg: "https://clikview.com/upload/photos/2022/10/bF8jHdT67wbHfPQQmpGD_21_7bc8c3be3a6b778394207f32e4efc23d_image.png",
      title: "How to Relax an Overactive Mind",
      duration: "0:59",
      owner: "Jill Gordon",
      views: "17",
      publish: "2",
    },
    {
      videoId: "5",
      videoImg: "https://clikview.com/upload/photos/2022/10/bF8jHdT67wbHfPQQmpGD_21_7bc8c3be3a6b778394207f32e4efc23d_image.png",
      title: "How to Relax an Overactive Mind",
      duration: "0:59",
      owner: "Jill Gordon",
      views: "17",
      publish: "2",
    },
    {
      videoId: "9",
      videoImg: "https://clikview.com/upload/photos/2022/10/bF8jHdT67wbHfPQQmpGD_21_7bc8c3be3a6b778394207f32e4efc23d_image.png",
      title: "How to Relax an Overactive Mind",
      duration: "0:59",
      owner: "Jill Gordon",
      views: "17",
      publish: "2",
    },
    {
      videoId: "6",
      videoImg: "https://clikview.com/upload/photos/2022/10/bF8jHdT67wbHfPQQmpGD_21_7bc8c3be3a6b778394207f32e4efc23d_image.png",
      title: "How to Relax an Overactive Mind",
      duration: "0:59",
      owner: "Jill Gordon",
      views: "17",
      publish: "2",
    },
    {
      videoId: "7",
      videoImg: "https://clikview.com/upload/photos/2022/10/bF8jHdT67wbHfPQQmpGD_21_7bc8c3be3a6b778394207f32e4efc23d_image.png",
      title: "How to Relax an Overactive Mind",
      duration: "0:59",
      owner: "Jill Gordon",
      views: "17",
      publish: "2",
    },
    {
      videoId: "8",
      videoImg: "https://clikview.com/upload/photos/2022/10/bF8jHdT67wbHfPQQmpGD_21_7bc8c3be3a6b778394207f32e4efc23d_image.png",
      title: "How to Relax an Overactive Mind",
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
  return (
    <div className=" container-home hide_trend" Style="position: relative; background: transparent; margin-top: -6%;">

      <div className="content pt_shadow yp_trans">

        <div className="home-page-categories">

          <div className="title white">
            <h4>

              <div Style="background:#D84E82"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="19" height="19"><path fill="currentColor" d="M12 16a8 8 0 118-8 8.009 8.009 0 01-8 8zm0 2a9.938 9.938 0 01-6-2.019V21.5a2.5 2.5 0 004.062 1.952l1.626-1.3a.5.5 0 01.624 0l1.626 1.3A2.5 2.5 0 0018 21.5v-5.519A9.94 9.94 0 0112 18z"></path></svg></div> Featured video

              <span className="view_more_link"><Link to="/" data-load="?link1=videos&amp;page=featured">Explore more <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path></svg></Link></span>

            </h4>

          </div>

          <div className="videos">

            <div className="row ">
              <Slider {...settings}>
                {data.map((element) => {
                  return <div key={element.index}>
                    <div className="col-md-3 col-sm-6 col-xs-6 keep-padding" data-id="4547" Style="width: 100%; display: inline-block;">
                      <div className="video-list">
                        <div className="video-list-image">
                          <Link to="/" data-load="?link1=watch&amp;id=how-to-relax-a-overactive-mind_p7gNF3uhQx7lTgm.html" tabIndex="0">
                            <img src={element.videoImg} alt="How to Relax an Overactive Mind" />
                            <div className="play_hover_btn" onMouseEnter="show_gif(this,'https://clikview.com/upload/videos/2022/10/bUMXp4QF8aqtZO86uUOU_21_bf2030127e2335e388591ef555122fdd6c3b51b5ba4d1bb7ac9e97b09eff6d_small_video_.gif')" onmouseleave="hide_gif(this)">
                              <svg xmlns="http://www.w3.org/2000/svg" className="feather" width="24" height="24" viewBox="0 0 24 24" fill="rgba(255, 255, 255, 0.8)"><path d="M8,5.14V19.14L19,12.14L8,5.14Z"></path></svg>
                            </div>
                            <span className="duration">{element.duration}</span>
                          </Link>
                        </div>
                        <div className="pt_vid_fixed_height">
                          <div className="video-list-title">
                            <Link to="/" data-load="?link1=watch&amp;id=how-to-relax-a-overactive-mind_p7gNF3uhQx7lTgm.html" tabIndex="0"><h4 title="How to Relax an Overactive Mind" id="short_title4547">{element.title}</h4></Link>
                          </div>
                          <div className="video-list-by">
                            <span><Link to="/" data-load="?link1=timeline&amp;id=JilltheHealthCoach" tabIndex="0">{element.owner} <i className="fa fa-check-circle fa-fw verified"></i></Link></span><br />
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

export default Featuredvideo