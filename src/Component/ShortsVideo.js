import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ShortsVideo() {
    const data = [
        {
            videoId: "1",
            videoImg: "https://clikview.com/upload/photos/2022/11/754d88f34cf6f1dedf47c3d0324311ca2045985c7nWpuXQvJnkG96VLccDF.video_thumb_7300_11.jpeg",
            title: "How to Relax an Overactive Mind",
            duration: "0:59",
            owner: "Jill Gordon",
            views: "17",
            publish: "2",
        },
        {
            videoId: "2",
            videoImg: "https://clikview.com/upload/photos/2022/11/754d88f34cf6f1dedf47c3d0324311ca2045985c7nWpuXQvJnkG96VLccDF.video_thumb_7300_11.jpeg",
            title: "How to Relax an Overactive Mind",
            duration: "0:59",
            owner: "Jill Gordon",
            views: "17",
            publish: "2",
        },
        {
            videoId: "3",
            videoImg: "https://clikview.com/upload/photos/2022/11/754d88f34cf6f1dedf47c3d0324311ca2045985c7nWpuXQvJnkG96VLccDF.video_thumb_7300_11.jpeg",
            title: "How to Relax an Overactive Mind",
            duration: "0:59",
            owner: "Jill Gordon",
            views: "17",
            publish: "2",
        },
        {
            videoId: "4",
            videoImg: "https://clikview.com/upload/photos/2022/11/754d88f34cf6f1dedf47c3d0324311ca2045985c7nWpuXQvJnkG96VLccDF.video_thumb_7300_11.jpeg",
            title: "How to Relax an Overactive Mind",
            duration: "0:59",
            owner: "Jill Gordon",
            views: "17",
            publish: "2",
        },
        {
            videoId: "5",
            videoImg: "https://clikview.com/upload/photos/2022/11/754d88f34cf6f1dedf47c3d0324311ca2045985c7nWpuXQvJnkG96VLccDF.video_thumb_7300_11.jpeg",
            title: "How to Relax an Overactive Mind",
            duration: "0:59",
            owner: "Jill Gordon",
            views: "17",
            publish: "2",
        },
        {
            videoId: "6",
            videoImg: "https://clikview.com/upload/photos/2022/11/754d88f34cf6f1dedf47c3d0324311ca2045985c7nWpuXQvJnkG96VLccDF.video_thumb_7300_11.jpeg",
            title: "How to Relax an Overactive Mind",
            duration: "0:59",
            owner: "Jill Gordon",
            views: "17",
            publish: "2",
        }
    ]
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
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
        let divId="shorts"+id;
        document.getElementById(`${divId}`).classList.add('activePlayBtn');
      }
      function removePlayBtn(id){
        let divId="shorts"+id;
        document.getElementById(`${divId}`).classList.remove('activePlayBtn');
      }
    return (
        <div className="container-home hide_trend">
            <div className="content pt_shadow yp_trans">
                <div className="home-page-categories">
                    <div className="title short-title">
                        <h4>
                            <div Style="background:blueviolet"><svg version="1.1" className="feather shortVideoPath"
                                xmlns="http://www.w3.org/2000/svg" x="0px"
                                y="0px" viewBox="0 0 168.071 168.071" Style="fill: currentColor;" >
                                <g>
                                    <g>
                                        <path opacity="0.5" Style="fill: currentColor;"
                                            d="M154.932,91.819L42.473,27.483c-2.219-1.26-4.93-1.26-7.121-0.027 c-2.219,1.233-3.588,3.533-3.615,6.026L31.08,161.059c0,0,0,0,0,0.027c0,2.465,1.369,4.766,3.533,6.026 c1.123,0.63,2.355,0.959,3.615,0.959c1.205,0,2.438-0.301,3.533-0.931l113.116-63.214c2.219-1.26,3.588-3.533,3.588-6.053 c0,0,0,0,0-0.027C158.465,95.38,157.123,93.079,154.932,91.819z">
                                        </path>
                                        <g id="XMLID_15_">
                                            <g>
                                                <path Style="fill:currentColor;"
                                                    d="M79.952,44.888L79.952,44.888c3.273-3.273,2.539-8.762-1.479-11.06l-7.288-4.171 c-2.75-1.572-6.212-1.109-8.452,1.128l0,0c-3.273,3.273-2.539,8.762,1.479,11.06l7.291,4.169 C74.25,47.589,77.712,47.126,79.952,44.888z">
                                                </path>
                                                <path Style="fill:currentColor;"
                                                    d="M133.459,65.285L99.103,45.631c-2.75-1.572-6.209-1.109-8.449,1.128l0,0 c-3.273,3.273-2.539,8.759,1.479,11.057l23.497,13.44L23.931,122.5l0.52-103.393l19.172,10.964 c2.722,1.558,6.152,1.098,8.367-1.12l0.104-0.104c3.24-3.24,2.514-8.674-1.463-10.95L21,0.948 c-2.219-1.26-4.93-1.26-7.121-0.027c-2.219,1.233-3.588,3.533-3.615,6.026L9.607,134.524c0,0,0,0,0,0.027 c0,2.465,1.369,4.766,3.533,6.026c1.123,0.63,2.355,0.959,3.615,0.959c1.205,0,2.438-0.301,3.533-0.931l113.116-63.214 c2.219-1.26,3.588-3.533,3.588-6.053c0,0,0,0,0-0.027C136.992,68.845,135.65,66.545,133.459,65.285z">
                                                </path>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg></div> Shorts

                            <span className="view_more_link"><a href="https://clikview.com/shorts"
                                data-load="?link1=shorts&amp;id=">Explore more <svg xmlns="http://www.w3.org/2000/svg"
                                    width="24" height="24" viewBox="0 0 24 24">
                                    <path fill="currentColor"
                                        d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z">
                                    </path>
                                </svg></a></span>

                        </h4>

                    </div>

                    <div className="videos">

                        <div className="row pt_four_videos_top cus_story_slider slick-initialized slick-slider">

                            <Slider {...settings}>
                                {data.map((element) => {
                                    return <div key={element.videoId}>
                                        <div className="col-md-3 col-sm-6 col-xs-6 keep-padding" data-id="4789"
                                            Style="width: 100%; display: inline-block;">
                                            <div className="video-list short">
                                                <div className="video-list-image" onMouseEnter={()=>{addPlayBtn(element.videoId)}} onMouseLeave={()=>{removePlayBtn(element.videoId)}}>
                                                    <a href={element.videoImg}
                                                        data-load="?link1=shorts&amp;id=grand-canyon-travel-photography_V2RXS52aPovo7f6.html"
                                                        tabIndex="0">
                                                        <img src={element.videoImg}
                                                            alt="Grand Canyon Travel Photography" />
                                                        <div className="play_hover_btn" id={"shorts"+element.videoId} >
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="feather"
                                                                width="24" height="24" viewBox="0 0 24 24"
                                                                fill="rgba(255, 255, 255, 0.8)">
                                                                <path d="M8,5.14V19.14L19,12.14L8,5.14Z"></path>
                                                            </svg>
                                                        </div>
                                                        <span className="duration">0:12</span>
                                                        <div className="shorts_badge">
                                                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" Style="fill: currentColor;" x="0px" y="0px" viewBox="0 0 168.071 168.071">
                                                                <g>
                                                                    <g className='shortVideoPath'>
                                                                        <path opacity="0.5" Style="fill: currentColor;" className='shortVideoPath'
                                                                            d="M154.932,91.819L42.473,27.483c-2.219-1.26-4.93-1.26-7.121-0.027 c-2.219,1.233-3.588,3.533-3.615,6.026L31.08,161.059c0,0,0,0,0,0.027c0,2.465,1.369,4.766,3.533,6.026 c1.123,0.63,2.355,0.959,3.615,0.959c1.205,0,2.438-0.301,3.533-0.931l113.116-63.214c2.219-1.26,3.588-3.533,3.588-6.053 c0,0,0,0,0-0.027C158.465,95.38,157.123,93.079,154.932,91.819z">
                                                                        </path>
                                                                        <g id="XMLID_15_">
                                                                            <g className='shortVideoPath'>
                                                                                <path Style="fill: currentColor;" className='shortVideoPath'
                                                                                    d="M79.952,44.888L79.952,44.888c3.273-3.273,2.539-8.762-1.479-11.06l-7.288-4.171 c-2.75-1.572-6.212-1.109-8.452,1.128l0,0c-3.273,3.273-2.539,8.762,1.479,11.06l7.291,4.169 C74.25,47.589,77.712,47.126,79.952,44.888z">
                                                                                </path>
                                                                                <path Style="fill: currentColor;" className='shortVideoPath'
                                                                                    d="M133.459,65.285L99.103,45.631c-2.75-1.572-6.209-1.109-8.449,1.128l0,0 c-3.273,3.273-2.539,8.759,1.479,11.057l23.497,13.44L23.931,122.5l0.52-103.393l19.172,10.964 c2.722,1.558,6.152,1.098,8.367-1.12l0.104-0.104c3.24-3.24,2.514-8.674-1.463-10.95L21,0.948 c-2.219-1.26-4.93-1.26-7.121-0.027c-2.219,1.233-3.588,3.533-3.615,6.026L9.607,134.524c0,0,0,0,0,0.027 c0,2.465,1.369,4.766,3.533,6.026c1.123,0.63,2.355,0.959,3.615,0.959c1.205,0,2.438-0.301,3.533-0.931l113.116-63.214 c2.219-1.26,3.588-3.533,3.588-6.053c0,0,0,0,0-0.027C136.992,68.845,135.65,66.545,133.459,65.285z">
                                                                                </path>
                                                                            </g>
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </svg>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="pt_vid_fixed_height">
                                                    <div className="video-list-title">
                                                        <a href="https://clikview.com/shorts/grand-canyon-travel-photography_V2RXS52aPovo7f6.html"
                                                            data-load="?link1=shorts&amp;id=grand-canyon-travel-photography_V2RXS52aPovo7f6.html"
                                                            tabIndex="0">
                                                            <h4 title="Grand Canyon Travel Photography">Grand Canyon
                                                                Travel Photography</h4>
                                                        </a>
                                                    </div>
                                                    <div className="video-list-by">
                                                        <span><a href="https://clikview.com/@KajaTravelPhotography"
                                                            data-load="?link1=timeline&amp;id=KajaTravelPhotography"
                                                            tabIndex="0">KajaTravelPhotography</a></span><br />
                                                        <div><span>4 Views</span> <span className="bold">·</span> <span>6
                                                            hours ago</span></div>
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

export default ShortsVideo