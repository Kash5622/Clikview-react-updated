import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MobileSearch from './MobileSearch';


function ShortsVideoDetails(props) {
    const { searchOpen, expandNav } = props;
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
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        adaptiveHeight: true,
        draggable: true,
        swipeToSlide: true,
        vertical: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false,
                    adaptiveHeight: true,
                    draggable: true,
                    swipeToSlide: true,
                    vertical: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false,
                    adaptiveHeight: true,
                    draggable: true,
                    swipeToSlide: true,
                    vertical: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false,
                    adaptiveHeight: true,
                    draggable: true,
                    swipeToSlide: true,
                    vertical: true,
                }
            }
        ]
    };
    function addPlayBtn(id) {
        let divId = "shorts" + id;
        let divopacityId="shortvideoDetailsList"+id;
        document.getElementById(`${divId}`).classList.add('activePlayBtn');
        document.getElementById(`${divopacityId}`).classList.add('hoverOnVideo');
    }
    function removePlayBtn(id) {
        let divId = "shorts" + id;
        let divopacityId="shortvideoDetailsList"+id;
        document.getElementById(`${divId}`).classList.remove('activePlayBtn');
        document.getElementById(`${divopacityId}`).classList.remove('hoverOnVideo');
    }
    return (
        <div className={expandNav ? "main-container shrinkWidth bodyfixed" : "main-container expandWidth"} Style="z-index:-1">
            <div id="main-container" className="main-content  container">
                {searchOpen ? <MobileSearch /> : ""}
                <div className="quickView">
                    <div className='quickviewheader'>
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
                        </svg></div>
                        <span>Quick View</span>
                    </div>
                    <div className="container-home-2 hide_trend">

                        {/* <div className="content pt_shadow yp_trans"> */}
                        <div className="home-page-categories">


                            <div className="videos">

                                <Slider {...settings}>
                                    {data.map((element) => {
                                        return <div key={element.videoId}>
                                            <div className="col-md-3 col-sm-6 col-xs-6 keep-padding" data-id="4789"
                                                Style="width: 100%; display: inline-block;">
                                                <div className="video-list short">
                                                    <div className="video-list-image" id={"shortvideoDetailsList"+element.videoId} onMouseEnter={() => { addPlayBtn(element.videoId) }} onMouseLeave={() => { removePlayBtn(element.videoId) }}>
                                                        <a href={element.videoImg}
                                                            data-load="?link1=shorts&amp;id=grand-canyon-travel-photography_V2RXS52aPovo7f6.html"
                                                            tabIndex="0">
                                                            <img src={element.videoImg}
                                                                alt="Grand Canyon Travel Photography" />
                                                            <div className="play_hover_btn_svg"  >
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
                                                    <div class="shorts_events">
                                                        <p>I went to take my grandkids picture and this is what happened.</p>
                                                        <div>
                                                            <div class="user_avatar">
                                                                <a href="https://clikview.com/@Healthyfrogs" data-load="?link1=timeline&amp;id=Healthyfrogs"><img src="https://clikview.com/upload/photos/2022/08/amBCnIs7cYnt8fAcPwoS_28_1f67eb05555b81a33372e0f0e6765099_image.jpeg" alt="Diane Rose" /></a>
                                                            </div>
                                                            <div class="like-btn-1173  pointer" onclick="ShortLikeSystem('1173', 'like', this)" data-likes="10">
                                                                <svg xmlns="http://www.w3.org/2000/svg" class="feather-thumbs-up" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M23,10C23,8.89 22.1,8 21,8H14.68L15.64,3.43C15.66,3.33 15.67,3.22 15.67,3.11C15.67,2.7 15.5,2.32 15.23,2.05L14.17,1L7.59,7.58C7.22,7.95 7,8.45 7,9V19A2,2 0 0,0 9,21H18C18.83,21 19.54,20.5 19.84,19.78L22.86,12.73C22.95,12.5 23,12.26 23,12V10M1,21H5V9H1V21Z"></path></svg>
                                                                <p class="short_likes">10</p>
                                                            </div>
                                                            <div class="dislike-btn-1173  pointer" onclick="ShortLikeSystem('1173', 'dislike', this)" data-likes="0">
                                                                <svg xmlns="http://www.w3.org/2000/svg" class="feather-thumbs-down" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19,15H23V3H19M15,3H6C5.17,3 4.46,3.5 4.16,4.22L1.14,11.27C1.05,11.5 1,11.74 1,12V14A2,2 0 0,0 3,16H9.31L8.36,20.57C8.34,20.67 8.33,20.77 8.33,20.88C8.33,21.3 8.5,21.67 8.77,21.94L9.83,23L16.41,16.41C16.78,16.05 17,15.55 17,15V5C17,3.89 16.1,3 15,3Z"></path></svg>
                                                                <p class="short_dislikes">0</p>
                                                            </div>
                                                            <div class="pointer" onclick="OpenCommentsModal('1173')">
                                                                <svg xmlns="http://www.w3.org/2000/svg" class="feather-thumbs-down" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M9,22A1,1 0 0,1 8,21V18H4A2,2 0 0,1 2,16V4C2,2.89 2.9,2 4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22V22H9M5,5V7H19V5H5M5,9V11H13V9H5M5,13V15H15V13H5Z"></path></svg>
                                                                <p>4</p>
                                                            </div>
                                                            <div>
                                                                <svg xmlns="http://www.w3.org/2000/svg" class="feather-thumbs-down" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"></path></svg>
                                                                <p id="video-views-count-1173">67</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    })}
                                </Slider>

                            </div>
                        </div>
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShortsVideoDetails