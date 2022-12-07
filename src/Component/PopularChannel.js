import React from 'react'
import MobileSearch from './MobileSearch';

function PopularChannel(props) {
    const { searchOpen, expandNav } = props;
    return (
        <div>
            <div className={expandNav ? "main-container shrinkWidth bodyfixed" : "main-container expandWidth"} Style="z-index:-1">
                <div id="main-container" class="main-content  container              " data-logged="true">
                    {searchOpen ? <MobileSearch /> : ""}
                    <div class="ads-placment" id="header_ad_"></div>
                    <div class="announcement-renderer">

                    </div>
                    <div id="container_content"><input type="hidden" id="json-data" value="{&quot;title&quot;:&quot;Popular Channels - ClikView - Real Content For You&quot;,&quot;description&quot;:&quot;Clikview is a Video Sharing Platform, Clikview is the best way to start your own video sharing channel! Real Content for you.&quot;,&quot;keyword&quot;:&quot;clikview,video sharing, real content&quot;,&quot;page&quot;:&quot;popular_channels&quot;,&quot;url&quot;:&quot;https:\/\/clikview.com\/popular_channels?type=views&amp;sort_type=all_time&quot;,&quot;is_movie&quot;:false}" />
                        <div class="popular_channels_prnt">
                            <div class="popular_channels">
                                <svg class="bg_trail" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 800 800"><g fill="hsl(0, 0%, 100%)"><rect width="101" height="14" x="124.5" y="544" rx="7" transform="rotate(147, 175, 551)" opacity="0.15"></rect><rect width="411" height="14" x="79.5" y="276" rx="7" transform="rotate(147, 285, 283)" opacity="0.52"></rect><rect width="170" height="14" x="45" y="736" rx="7" transform="rotate(147, 130, 743)" opacity="0.77"></rect><rect width="357" height="14" x="-48.5" y="145" rx="7" transform="rotate(147, 130, 152)" opacity="0.88"></rect><rect width="131" height="14" x="-38.5" y="103" rx="7" transform="rotate(147, 27, 110)" opacity="0.64"></rect><rect width="441" height="14" x="162.5" y="637" rx="7" transform="rotate(147, 383, 644)" opacity="0.31"></rect><rect width="129" height="14" x="23.5" y="475" rx="7" transform="rotate(147, 88, 482)" opacity="0.14"></rect><rect width="326" height="14" x="136" y="733" rx="7" transform="rotate(147, 299, 740)" opacity="0.53"></rect><rect width="370" height="14" x="198" y="377" rx="7" transform="rotate(147, 383, 384)" opacity="0.73"></rect><rect width="164" height="14" x="669" y="646" rx="7" transform="rotate(147, 751, 653)" opacity="0.81"></rect><rect width="155" height="14" x="668.5" y="254" rx="7" transform="rotate(147, 746, 261)" opacity="0.97"></rect><rect width="266" height="14" x="327" y="740" rx="7" transform="rotate(147, 460, 747)" opacity="0.35"></rect><rect width="280" height="14" x="26" y="238" rx="7" transform="rotate(147, 166, 245)" opacity="0.37"></rect><rect width="106" height="14" x="-14" y="737" rx="7" transform="rotate(147, 39, 744)" opacity="0.44"></rect><rect width="229" height="14" x="341.5" y="229" rx="7" transform="rotate(147, 456, 236)" opacity="0.49"></rect><rect width="223" height="14" x="272.5" y="519" rx="7" transform="rotate(147, 384, 526)" opacity="0.62"></rect><rect width="56" height="14" x="592" y="271" rx="7" transform="rotate(147, 620, 278)" opacity="0.48"></rect><rect width="238" height="14" x="541" y="724" rx="7" transform="rotate(147, 660, 731)" opacity="0.72"></rect><rect width="95" height="14" x="4.5" y="290" rx="7" transform="rotate(147, 52, 297)" opacity="1.00"></rect><rect width="388" height="14" x="370" y="194" rx="7" transform="rotate(147, 564, 201)" opacity="0.19"></rect><rect width="371" height="14" x="65.5" y="422" rx="7" transform="rotate(147, 251, 429)" opacity="0.73"></rect><rect width="500" height="14" x="116" y="163" rx="7" transform="rotate(147, 366, 170)" opacity="0.59"></rect><rect width="367" height="14" x="-67.5" y="38" rx="7" transform="rotate(147, 116, 45)" opacity="0.26"></rect><rect width="370" height="14" x="-31" y="359" rx="7" transform="rotate(147, 154, 366)" opacity="0.56"></rect><rect width="345" height="14" x="31.5" y="676" rx="7" transform="rotate(147, 204, 683)" opacity="0.16"></rect><rect width="465" height="14" x="271.5" y="358" rx="7" transform="rotate(147, 504, 365)" opacity="0.55"></rect><rect width="57" height="14" x="732.5" y="114" rx="7" transform="rotate(147, 761, 121)" opacity="0.98"></rect><rect width="439" height="14" x="319.5" y="75" rx="7" transform="rotate(147, 539, 82)" opacity="0.38"></rect><rect width="96" height="14" x="-2" y="544" rx="7" transform="rotate(147, 46, 551)" opacity="0.19"></rect><rect width="154" height="14" x="-10" y="629" rx="7" transform="rotate(147, 67, 636)" opacity="0.90"></rect><rect width="73" height="14" x="632.5" y="161" rx="7" transform="rotate(147, 669, 168)" opacity="0.63"></rect><rect width="254" height="14" x="555" y="37" rx="7" transform="rotate(147, 682, 44)" opacity="0.74"></rect><rect width="140" height="14" x="667" y="367" rx="7" transform="rotate(147, 737, 374)" opacity="0.92"></rect><rect width="210" height="14" x="290" y="44" rx="7" transform="rotate(147, 395, 51)" opacity="0.40"></rect><rect width="104" height="14" x="-3" y="399" rx="7" transform="rotate(147, 49, 406)" opacity="0.93"></rect><rect width="203" height="14" x="509.5" y="390" rx="7" transform="rotate(147, 611, 397)" opacity="0.18"></rect><rect width="372" height="14" x="366" y="633" rx="7" transform="rotate(147, 552, 640)" opacity="0.62"></rect><rect width="567" height="14" x="-30.5" y="100" rx="7" transform="rotate(147, 253, 107)" opacity="0.49"></rect><rect width="471" height="14" x="47.5" y="554" rx="7" transform="rotate(147, 283, 561)" opacity="0.17"></rect><rect width="606" height="14" x="393" y="500" rx="7" transform="rotate(147, 696, 507)" opacity="0.32"></rect><rect width="302" height="14" x="355" y="506" rx="7" transform="rotate(147, 506, 513)" opacity="0.33"></rect><rect width="72" height="14" x="13" y="194" rx="7" transform="rotate(147, 49, 201)" opacity="0.59"></rect></g></svg>
                                <svg height="512" viewBox="0 0 64 64" width="512" class="icon" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="m51.9944 27.467a31.1074 31.1074 0 0 1 -3.389-14.0312v-.0964l-8.2354 3.4523c-.1042-.0498 3.8715-10.7917 3.8715-10.7917-5.8787 1.02-24.7521 12.1022-28.0964 15.7463a22.4309 22.4309 0 1 0 35.8493 5.7207z" fill="#fad657"></path><g fill="#e6463c"><path d="m40.5786 33.4591a4.8527 4.8527 0 0 0 -6.8629 0l-1.7157 1.7157-1.7157-1.7157a4.8528 4.8528 0 0 0 -6.8629 6.8629l8.5786 8.7157 8.5786-8.7157a4.8527 4.8527 0 0 0 0-6.8629z"></path><circle cx="9" cy="18" r="1"></circle><circle cx="58" cy="27" r="1"></circle><circle cx="52" cy="8" r="1"></circle></g><path d="m58 17c0 1.6569-2 3-2 3s-2-1.3431-2-3 2-3 2-3 2 1.3431 2 3z" fill="#fad657"></path><path d="m19.9179 10.9179c-1.5888 1.5888-4.7947.9589-4.7947.9589s-.63-3.2059.9589-4.7947 4.7947-.9589 4.7947-.9589.6299 3.2059-.9589 4.7947z" fill="#fad657"></path></svg>
                                <h2>Popular Channels</h2>
                                <div class="vid_pop_chnl_filtr">
                                    <span>Filter By</span>
                                    <select name="type" class="form-group form-control" id="sort_channels_by">
                                        <option value="views" selected="">Views</option>
                                        <option value="subscribers">Subscribers</option>
                                        <option value="most_active">Most active</option>
                                    </select>
                                    <select id="sort_channels_type" name="type" class="form-group form-control">
                                        <option value="today">Today</option>
                                        <option value="this_week">This week</option>
                                        <option value="this_month">This month</option>
                                        <option value="this_year">This year</option>
                                        <option value="all_time" selected="">All Time</option>
                                    </select>
                                    <button id="submit" name="submit" class="btn btn-main">Submit</button>
                                </div>
                            </div>

                            <div class="row author-list popular_channels_list">
                                <div class="col-lg-4 col-md-6 col-sm-12 channels_list" data-channel-id="1839" data-channel-views="90971">
                                    <div class="content user-wrapper vid_pop_channls" data-id="1839">
                                        <div class="video-thumb">
                                            <a href="https://clikview.com/@TheBigResetMovie">
                                                <img src="https://clikview.com/upload/photos/2022/09/BsmNzZobIvczaoi6f8FX_28_6392105cf692129754d834a64c6a3698_image.png" alt="TheBigResetMovie" />
                                            </a>
                                        </div>
                                        <div class="video-title padding_popular">
                                            <a href="https://clikview.com/@TheBigResetMovie" data-load="?link1=timeline&amp;id=TheBigResetMovie"><h4>TheBigResetMovie</h4></a>
                                            <h6><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z"></path></svg> 90,971 Views</h6>
                                            <h6><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M13 11A3 3 0 1 0 10 8A3 3 0 0 0 13 11M13 7A1 1 0 1 1 12 8A1 1 0 0 1 13 7M17.11 10.86A5 5 0 0 0 17.11 5.14A2.91 2.91 0 0 1 18 5A3 3 0 0 1 18 11A2.91 2.91 0 0 1 17.11 10.86M13 13C7 13 7 17 7 17V19H19V17S19 13 13 13M9 17C9 16.71 9.32 15 13 15C16.5 15 16.94 16.56 17 17M24 17V19H21V17A5.6 5.6 0 0 0 19.2 13.06C24 13.55 24 17 24 17M8 12H5V15H3V12H0V10H3V7H5V10H8Z"></path></svg> 170 Subscribers</h6>
                                            {/* <!-- <h6 style="margin-bottom: 0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d84c47" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-clock"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>0 sec</h6> --> */}
                                        </div>
                                    </div>
                                </div><div class="col-lg-4 col-md-6 col-sm-12 channels_list" data-channel-id="3" data-channel-views="57647">
                                    <div class="content user-wrapper vid_pop_channls" data-id="3">
                                        <div class="video-thumb">
                                            <a href="https://clikview.com/@drbuttar">
                                                <img src="https://clikview.com/upload/photos/2022/08/FXJuXiblBEku8MWYkrwW_19_9b159e59a4ec0615c58464d25326bc13_image.jpeg" alt="Dr Rashid A Buttar" />
                                            </a>
                                        </div>
                                        <div class="video-title padding_popular">
                                            <a href="https://clikview.com/@drbuttar" data-load="?link1=timeline&amp;id=drbuttar"><h4>Dr Rashid A Buttar</h4></a>
                                            <h6><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z"></path></svg> 57,647 Views</h6>
                                            <h6><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M13 11A3 3 0 1 0 10 8A3 3 0 0 0 13 11M13 7A1 1 0 1 1 12 8A1 1 0 0 1 13 7M17.11 10.86A5 5 0 0 0 17.11 5.14A2.91 2.91 0 0 1 18 5A3 3 0 0 1 18 11A2.91 2.91 0 0 1 17.11 10.86M13 13C7 13 7 17 7 17V19H19V17S19 13 13 13M9 17C9 16.71 9.32 15 13 15C16.5 15 16.94 16.56 17 17M24 17V19H21V17A5.6 5.6 0 0 0 19.2 13.06C24 13.55 24 17 24 17M8 12H5V15H3V12H0V10H3V7H5V10H8Z"></path></svg> 1,299 Subscribers</h6>
                                            {/* <!-- <h6 style="margin-bottom: 0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d84c47" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-clock"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>6 min / 42 sec</h6> --> */}
                                        </div>
                                    </div>
                                </div><div class="col-lg-4 col-md-6 col-sm-12 channels_list" data-channel-id="28" data-channel-views="6675">
                                    <div class="content user-wrapper vid_pop_channls" data-id="28">
                                        <div class="video-thumb">
                                            <a href="https://clikview.com/@DrAshton">
                                                <img src="https://clikview.com/upload/photos/2022/08/7UakM99OIGbXnFGvvGDb_19_cfb11d2275a45ab40990de9e84d947a4_image.jpeg" alt="Dr Ashton " />
                                            </a>
                                        </div>
                                        <div class="video-title padding_popular">
                                            <a href="https://clikview.com/@DrAshton" data-load="?link1=timeline&amp;id=DrAshton"><h4>Dr Ashton </h4></a>
                                            <h6><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z"></path></svg> 6,675 Views</h6>
                                            <h6><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M13 11A3 3 0 1 0 10 8A3 3 0 0 0 13 11M13 7A1 1 0 1 1 12 8A1 1 0 0 1 13 7M17.11 10.86A5 5 0 0 0 17.11 5.14A2.91 2.91 0 0 1 18 5A3 3 0 0 1 18 11A2.91 2.91 0 0 1 17.11 10.86M13 13C7 13 7 17 7 17V19H19V17S19 13 13 13M9 17C9 16.71 9.32 15 13 15C16.5 15 16.94 16.56 17 17M24 17V19H21V17A5.6 5.6 0 0 0 19.2 13.06C24 13.55 24 17 24 17M8 12H5V15H3V12H0V10H3V7H5V10H8Z"></path></svg> 94 Subscribers</h6>
                                            {/* <!-- <h6 style="margin-bottom: 0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d84c47" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-clock"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>12 sec</h6> --> */}
                                        </div>
                                    </div>
                                </div><div class="col-lg-4 col-md-6 col-sm-12 channels_list" data-channel-id="692" data-channel-views="6127">
                                    <div class="content user-wrapper vid_pop_channls" data-id="692">
                                        <div class="video-thumb">
                                            <a href="https://clikview.com/@dtwalsh">
                                                <img src="https://clikview.com/upload/photos/2022/09/M2yZMc9cAjogs7O2uWig_06_5a3241b4d10d0c6ec99556b5dd372f10_image.jpg" alt="dtwalsh" />
                                            </a>
                                        </div>
                                        <div class="video-title padding_popular">
                                            <a href="https://clikview.com/@dtwalsh" data-load="?link1=timeline&amp;id=dtwalsh"><h4>dtwalsh</h4></a>
                                            <h6><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z"></path></svg> 6,127 Views</h6>
                                            <h6><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M13 11A3 3 0 1 0 10 8A3 3 0 0 0 13 11M13 7A1 1 0 1 1 12 8A1 1 0 0 1 13 7M17.11 10.86A5 5 0 0 0 17.11 5.14A2.91 2.91 0 0 1 18 5A3 3 0 0 1 18 11A2.91 2.91 0 0 1 17.11 10.86M13 13C7 13 7 17 7 17V19H19V17S19 13 13 13M9 17C9 16.71 9.32 15 13 15C16.5 15 16.94 16.56 17 17M24 17V19H21V17A5.6 5.6 0 0 0 19.2 13.06C24 13.55 24 17 24 17M8 12H5V15H3V12H0V10H3V7H5V10H8Z"></path></svg> 88 Subscribers</h6>
                                            {/* <!-- <h6 style="margin-bottom: 0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d84c47" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-clock"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>5 min</h6> --> */}
                                        </div>
                                    </div>
                                </div><div class="col-lg-4 col-md-6 col-sm-12 channels_list" data-channel-id="11" data-channel-views="5673">
                                    <div class="content user-wrapper vid_pop_channls" data-id="11">
                                        <div class="video-thumb">
                                            <a href="https://clikview.com/@Drmartin">
                                                <img src="https://clikview.com/upload/photos/2022/08/Jxy29ew6njU7GPAOLAbo_19_8e4340d3d78dd8a907c31b09be80a8c8_image.png" alt="Dr David E. Martin" />
                                            </a>
                                        </div>
                                        <div class="video-title padding_popular">
                                            <a href="https://clikview.com/@Drmartin" data-load="?link1=timeline&amp;id=Drmartin"><h4>Dr David E. Martin</h4></a>
                                            <h6><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z"></path></svg> 5,673 Views</h6>
                                            <h6><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M13 11A3 3 0 1 0 10 8A3 3 0 0 0 13 11M13 7A1 1 0 1 1 12 8A1 1 0 0 1 13 7M17.11 10.86A5 5 0 0 0 17.11 5.14A2.91 2.91 0 0 1 18 5A3 3 0 0 1 18 11A2.91 2.91 0 0 1 17.11 10.86M13 13C7 13 7 17 7 17V19H19V17S19 13 13 13M9 17C9 16.71 9.32 15 13 15C16.5 15 16.94 16.56 17 17M24 17V19H21V17A5.6 5.6 0 0 0 19.2 13.06C24 13.55 24 17 24 17M8 12H5V15H3V12H0V10H3V7H5V10H8Z"></path></svg> 356 Subscribers</h6>
                                            {/* <!-- <h6 style="margin-bottom: 0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d84c47" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-clock"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>0 sec</h6> --> */}
                                        </div>
                                    </div>
                                </div><div class="col-lg-4 col-md-6 col-sm-12 channels_list" data-channel-id="983" data-channel-views="5362">
                                    <div class="content user-wrapper vid_pop_channls" data-id="983">
                                        <div class="video-thumb">
                                            <a href="https://clikview.com/@ClayClark">
                                                <img src="https://clikview.com/upload/photos/2022/08/gPG2ue6t9Yxbu8KMgkhk_23_a7562090345a0334fe79b754ccc23291_image.jpg" alt="ClayClark" />
                                            </a>
                                        </div>
                                        <div class="video-title padding_popular">
                                            <a href="https://clikview.com/@ClayClark" data-load="?link1=timeline&amp;id=ClayClark"><h4>ClayClark</h4></a>
                                            <h6><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z"></path></svg> 5,362 Views</h6>
                                            <h6><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M13 11A3 3 0 1 0 10 8A3 3 0 0 0 13 11M13 7A1 1 0 1 1 12 8A1 1 0 0 1 13 7M17.11 10.86A5 5 0 0 0 17.11 5.14A2.91 2.91 0 0 1 18 5A3 3 0 0 1 18 11A2.91 2.91 0 0 1 17.11 10.86M13 13C7 13 7 17 7 17V19H19V17S19 13 13 13M9 17C9 16.71 9.32 15 13 15C16.5 15 16.94 16.56 17 17M24 17V19H21V17A5.6 5.6 0 0 0 19.2 13.06C24 13.55 24 17 24 17M8 12H5V15H3V12H0V10H3V7H5V10H8Z"></path></svg> 120 Subscribers</h6>
                                            {/* <!-- <h6 style="margin-bottom: 0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d84c47" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-clock"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>2 min / 54 sec</h6> --> */}
                                        </div>
                                    </div>
                                </div><div class="col-lg-4 col-md-6 col-sm-12 channels_list" data-channel-id="416" data-channel-views="5254">
                                    <div class="content user-wrapper vid_pop_channls" data-id="416">
                                        <div class="video-thumb">
                                            <a href="https://clikview.com/@Maria">
                                                <img src="https://clikview.com/upload/photos/2022/08/K8etpI855bFCYlUFWQ7k_22_434237130e2a07d62d95bd7a19d0a705_image.jpg" alt="Maria's News" />
                                            </a>
                                        </div>
                                        <div class="video-title padding_popular">
                                            <a href="https://clikview.com/@Maria" data-load="?link1=timeline&amp;id=Maria"><h4>Maria's News</h4></a>
                                            <h6><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z"></path></svg> 5,254 Views</h6>
                                            <h6><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M13 11A3 3 0 1 0 10 8A3 3 0 0 0 13 11M13 7A1 1 0 1 1 12 8A1 1 0 0 1 13 7M17.11 10.86A5 5 0 0 0 17.11 5.14A2.91 2.91 0 0 1 18 5A3 3 0 0 1 18 11A2.91 2.91 0 0 1 17.11 10.86M13 13C7 13 7 17 7 17V19H19V17S19 13 13 13M9 17C9 16.71 9.32 15 13 15C16.5 15 16.94 16.56 17 17M24 17V19H21V17A5.6 5.6 0 0 0 19.2 13.06C24 13.55 24 17 24 17M8 12H5V15H3V12H0V10H3V7H5V10H8Z"></path></svg> 157 Subscribers</h6>
                                            {/* <!-- <h6 style="margin-bottom: 0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d84c47" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-clock"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>24 min / 36 sec</h6> --> */}
                                        </div>
                                    </div>
                                </div><div class="col-lg-4 col-md-6 col-sm-12 channels_list" data-channel-id="346" data-channel-views="4722">
                                    <div class="content user-wrapper vid_pop_channls" data-id="346">
                                        <div class="video-thumb">
                                            <a href="https://clikview.com/@Tiffany">
                                                <img src="https://clikview.com/upload/photos/2022/08/cO1GtP7aWUhd75En6Ykh_21_b158fd0cdc5500fdc5964562524c97ce_image.jpeg" alt="Tiffany Shutes" />
                                            </a>
                                        </div>
                                        <div class="video-title padding_popular">
                                            <a href="https://clikview.com/@Tiffany" data-load="?link1=timeline&amp;id=Tiffany"><h4>Tiffany Shutes</h4></a>
                                            <h6><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z"></path></svg> 4,722 Views</h6>
                                            <h6><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M13 11A3 3 0 1 0 10 8A3 3 0 0 0 13 11M13 7A1 1 0 1 1 12 8A1 1 0 0 1 13 7M17.11 10.86A5 5 0 0 0 17.11 5.14A2.91 2.91 0 0 1 18 5A3 3 0 0 1 18 11A2.91 2.91 0 0 1 17.11 10.86M13 13C7 13 7 17 7 17V19H19V17S19 13 13 13M9 17C9 16.71 9.32 15 13 15C16.5 15 16.94 16.56 17 17M24 17V19H21V17A5.6 5.6 0 0 0 19.2 13.06C24 13.55 24 17 24 17M8 12H5V15H3V12H0V10H3V7H5V10H8Z"></path></svg> 120 Subscribers</h6>
                                            {/* <!-- <h6 style="margin-bottom: 0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d84c47" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-clock"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>0 sec</h6> --> */}
                                        </div>
                                    </div>
                                </div><div class="col-lg-4 col-md-6 col-sm-12 channels_list" data-channel-id="32" data-channel-views="4181">
                                    <div class="content user-wrapper vid_pop_channls" data-id="32">
                                        <div class="video-thumb">
                                            <a href="https://clikview.com/@Drgroup">
                                                <img src="https://clikview.com/upload/photos/2022/08/E9fCOQxZdSudwjkDXs1v_19_f3f3ac092f4e54513d53198e12245c04_image.jpg" alt="Dr Edward Group, DC" />
                                            </a>
                                        </div>
                                        <div class="video-title padding_popular">
                                            <a href="https://clikview.com/@Drgroup" data-load="?link1=timeline&amp;id=Drgroup"><h4>Dr Edward Group, DC</h4></a>
                                            <h6><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z"></path></svg> 4,181 Views</h6>
                                            <h6><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M13 11A3 3 0 1 0 10 8A3 3 0 0 0 13 11M13 7A1 1 0 1 1 12 8A1 1 0 0 1 13 7M17.11 10.86A5 5 0 0 0 17.11 5.14A2.91 2.91 0 0 1 18 5A3 3 0 0 1 18 11A2.91 2.91 0 0 1 17.11 10.86M13 13C7 13 7 17 7 17V19H19V17S19 13 13 13M9 17C9 16.71 9.32 15 13 15C16.5 15 16.94 16.56 17 17M24 17V19H21V17A5.6 5.6 0 0 0 19.2 13.06C24 13.55 24 17 24 17M8 12H5V15H3V12H0V10H3V7H5V10H8Z"></path></svg> 187 Subscribers</h6>
                                            {/* <!-- <h6 style="margin-bottom: 0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d84c47" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-clock"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>0 sec</h6> --> */}
                                        </div>
                                    </div>
                                </div><div class="col-lg-4 col-md-6 col-sm-12 channels_list" data-channel-id="142" data-channel-views="4139">
                                    <div class="content user-wrapper vid_pop_channls" data-id="142">
                                        <div class="video-thumb">
                                            <a href="https://clikview.com/@SharonLeonard">
                                                <img src="https://clikview.com/upload/photos/2022/08/cSMEBMWvjnCk7fw7kDI6_22_bcd130e53f942ddf2283a48884c7fc3c_image.jpeg" alt="Sharon Leonard" />
                                            </a>
                                        </div>
                                        <div class="video-title padding_popular">
                                            <a href="https://clikview.com/@SharonLeonard" data-load="?link1=timeline&amp;id=SharonLeonard"><h4>Sharon Leonard</h4></a>
                                            <h6><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z"></path></svg> 4,139 Views</h6>
                                            <h6><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M13 11A3 3 0 1 0 10 8A3 3 0 0 0 13 11M13 7A1 1 0 1 1 12 8A1 1 0 0 1 13 7M17.11 10.86A5 5 0 0 0 17.11 5.14A2.91 2.91 0 0 1 18 5A3 3 0 0 1 18 11A2.91 2.91 0 0 1 17.11 10.86M13 13C7 13 7 17 7 17V19H19V17S19 13 13 13M9 17C9 16.71 9.32 15 13 15C16.5 15 16.94 16.56 17 17M24 17V19H21V17A5.6 5.6 0 0 0 19.2 13.06C24 13.55 24 17 24 17M8 12H5V15H3V12H0V10H3V7H5V10H8Z"></path></svg> 137 Subscribers</h6>
                                            {/* <!-- <h6 style="margin-bottom: 0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d84c47" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-clock"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>15 min / 48 sec</h6> --> */}
                                        </div>
                                    </div>
                                </div><div class="col-lg-4 col-md-6 col-sm-12 channels_list" data-channel-id="491" data-channel-views="3977">
                                    <div class="content user-wrapper vid_pop_channls" data-id="491">
                                        <div class="video-thumb">
                                            <a href="https://clikview.com/@PaulaKavanagh">
                                                <img src="https://clikview.com/upload/photos/2022/08/PPm3v3C3uhOWNfcO33fr_21_bc9c334fcb959b6b24e0c000ef85ce7b_image.jpg" alt="Paula Kavanagh" />
                                            </a>
                                        </div>
                                        <div class="video-title padding_popular">
                                            <a href="https://clikview.com/@PaulaKavanagh" data-load="?link1=timeline&amp;id=PaulaKavanagh"><h4>Paula Kavanagh</h4></a>
                                            <h6><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z"></path></svg> 3,977 Views</h6>
                                            <h6><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M13 11A3 3 0 1 0 10 8A3 3 0 0 0 13 11M13 7A1 1 0 1 1 12 8A1 1 0 0 1 13 7M17.11 10.86A5 5 0 0 0 17.11 5.14A2.91 2.91 0 0 1 18 5A3 3 0 0 1 18 11A2.91 2.91 0 0 1 17.11 10.86M13 13C7 13 7 17 7 17V19H19V17S19 13 13 13M9 17C9 16.71 9.32 15 13 15C16.5 15 16.94 16.56 17 17M24 17V19H21V17A5.6 5.6 0 0 0 19.2 13.06C24 13.55 24 17 24 17M8 12H5V15H3V12H0V10H3V7H5V10H8Z"></path></svg> 209 Subscribers</h6>
                                            {/* <!-- <h6 style="margin-bottom: 0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d84c47" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-clock"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>1 min / 36 sec</h6> --> */}
                                        </div>
                                    </div>
                                </div><div class="col-lg-4 col-md-6 col-sm-12 channels_list" data-channel-id="128" data-channel-views="2921">
                                    <div class="content user-wrapper vid_pop_channls" data-id="128">
                                        <div class="video-thumb">
                                            <a href="https://clikview.com/@ValindaLynnWood">
                                                <img src="https://clikview.com/upload/photos/2022/08/1d2mxvvMbktYePh3m9Sd_20_6b3658284389cb3558d04bfbe3f9df47_image.jpeg" alt="Valinda Lynn Wood©®™.." />
                                            </a>
                                        </div>
                                        <div class="video-title padding_popular">
                                            <a href="https://clikview.com/@ValindaLynnWood" data-load="?link1=timeline&amp;id=ValindaLynnWood"><h4>Valinda Lynn Wood©®™..</h4></a>
                                            <h6><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z"></path></svg> 2,921 Views</h6>
                                            <h6><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M13 11A3 3 0 1 0 10 8A3 3 0 0 0 13 11M13 7A1 1 0 1 1 12 8A1 1 0 0 1 13 7M17.11 10.86A5 5 0 0 0 17.11 5.14A2.91 2.91 0 0 1 18 5A3 3 0 0 1 18 11A2.91 2.91 0 0 1 17.11 10.86M13 13C7 13 7 17 7 17V19H19V17S19 13 13 13M9 17C9 16.71 9.32 15 13 15C16.5 15 16.94 16.56 17 17M24 17V19H21V17A5.6 5.6 0 0 0 19.2 13.06C24 13.55 24 17 24 17M8 12H5V15H3V12H0V10H3V7H5V10H8Z"></path></svg> 148 Subscribers</h6>
                                            {/* <!-- <h6 style="margin-bottom: 0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d84c47" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-clock"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>16 min / 24 sec</h6> --> */}
                                        </div>
                                    </div>
                                </div><div class="col-lg-4 col-md-6 col-sm-12 channels_list" data-channel-id="351" data-channel-views="2871">
                                    <div class="content user-wrapper vid_pop_channls" data-id="351">
                                        <div class="video-thumb">
                                            <a href="https://clikview.com/@rau123">
                                                <img src="https://clikview.com/upload/photos/2022/08/UFgHmjkKvchDB3Tq4hKL_24_9c90df2e0bf6d851c5bae942fdc95c3c_image.jpg" alt="rau123" />
                                            </a>
                                        </div>
                                        <div class="video-title padding_popular">
                                            <a href="https://clikview.com/@rau123" data-load="?link1=timeline&amp;id=rau123"><h4>rau123</h4></a>
                                            <h6><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z"></path></svg> 2,871 Views</h6>
                                            <h6><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M13 11A3 3 0 1 0 10 8A3 3 0 0 0 13 11M13 7A1 1 0 1 1 12 8A1 1 0 0 1 13 7M17.11 10.86A5 5 0 0 0 17.11 5.14A2.91 2.91 0 0 1 18 5A3 3 0 0 1 18 11A2.91 2.91 0 0 1 17.11 10.86M13 13C7 13 7 17 7 17V19H19V17S19 13 13 13M9 17C9 16.71 9.32 15 13 15C16.5 15 16.94 16.56 17 17M24 17V19H21V17A5.6 5.6 0 0 0 19.2 13.06C24 13.55 24 17 24 17M8 12H5V15H3V12H0V10H3V7H5V10H8Z"></path></svg> 109 Subscribers</h6>
                                            {/* <!-- <h6 style="margin-bottom: 0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d84c47" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-clock"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>0 sec</h6> --> */}
                                        </div>
                                    </div>
                                </div><div class="col-lg-4 col-md-6 col-sm-12 channels_list" data-channel-id="648" data-channel-views="2059">
                                    <div class="content user-wrapper vid_pop_channls" data-id="648">
                                        <div class="video-thumb">
                                            <a href="https://clikview.com/@QuantumNurse">
                                                <img src="https://clikview.com/upload/photos/2022/08/gZsS9TR3mDtDR58a1LCg_27_9587b7ab5161a08e4bb981b5d452b19c_image.jpg" alt="Grace Asagra" />
                                            </a>
                                        </div>
                                        <div class="video-title padding_popular">
                                            <a href="https://clikview.com/@QuantumNurse" data-load="?link1=timeline&amp;id=QuantumNurse"><h4>Grace Asagra</h4></a>
                                            <h6><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z"></path></svg> 2,059 Views</h6>
                                            <h6><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M13 11A3 3 0 1 0 10 8A3 3 0 0 0 13 11M13 7A1 1 0 1 1 12 8A1 1 0 0 1 13 7M17.11 10.86A5 5 0 0 0 17.11 5.14A2.91 2.91 0 0 1 18 5A3 3 0 0 1 18 11A2.91 2.91 0 0 1 17.11 10.86M13 13C7 13 7 17 7 17V19H19V17S19 13 13 13M9 17C9 16.71 9.32 15 13 15C16.5 15 16.94 16.56 17 17M24 17V19H21V17A5.6 5.6 0 0 0 19.2 13.06C24 13.55 24 17 24 17M8 12H5V15H3V12H0V10H3V7H5V10H8Z"></path></svg> 63 Subscribers</h6>
                                            {/* <!-- <h6 style="margin-bottom: 0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d84c47" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-clock"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>1 min</h6> --> */}
                                        </div>
                                    </div>
                                </div><div class="col-lg-4 col-md-6 col-sm-12 channels_list" data-channel-id="782" data-channel-views="1794">
                                    <div class="content user-wrapper vid_pop_channls" data-id="782">
                                        <div class="video-thumb">
                                            <a href="https://clikview.com/@Healthyfrogs">
                                                <img src="https://clikview.com/upload/photos/2022/08/amBCnIs7cYnt8fAcPwoS_28_1f67eb05555b81a33372e0f0e6765099_image.jpeg" alt="Diane Rose" />
                                            </a>
                                        </div>
                                        <div class="video-title padding_popular">
                                            <a href="https://clikview.com/@Healthyfrogs" data-load="?link1=timeline&amp;id=Healthyfrogs"><h4>Diane Rose</h4></a>
                                            <h6><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z"></path></svg> 1,794 Views</h6>
                                            <h6><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M13 11A3 3 0 1 0 10 8A3 3 0 0 0 13 11M13 7A1 1 0 1 1 12 8A1 1 0 0 1 13 7M17.11 10.86A5 5 0 0 0 17.11 5.14A2.91 2.91 0 0 1 18 5A3 3 0 0 1 18 11A2.91 2.91 0 0 1 17.11 10.86M13 13C7 13 7 17 7 17V19H19V17S19 13 13 13M9 17C9 16.71 9.32 15 13 15C16.5 15 16.94 16.56 17 17M24 17V19H21V17A5.6 5.6 0 0 0 19.2 13.06C24 13.55 24 17 24 17M8 12H5V15H3V12H0V10H3V7H5V10H8Z"></path></svg> 45 Subscribers</h6>
                                            {/* <!-- <h6 style="margin-bottom: 0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d84c47" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-clock"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>48 sec</h6> --> */}
                                        </div>
                                    </div>
                                </div><div class="col-lg-4 col-md-6 col-sm-12 channels_list" data-channel-id="1996" data-channel-views="1720">
                                    <div class="content user-wrapper vid_pop_channls" data-id="1996">
                                        <div class="video-thumb">
                                            <a href="https://clikview.com/@TheResistance1776">
                                                <img src="https://clikview.com/upload/photos/2022/09/ibSSnh9ih1B7uoxWxGCM_19_35c315b89ea9f66e74a8d92c232ceee2_image.png" alt="TheResistance1776" />
                                            </a>
                                        </div>
                                        <div class="video-title padding_popular">
                                            <a href="https://clikview.com/@TheResistance1776" data-load="?link1=timeline&amp;id=TheResistance1776"><h4>TheResistance1776</h4></a>
                                            <h6><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z"></path></svg> 1,720 Views</h6>
                                            <h6><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M13 11A3 3 0 1 0 10 8A3 3 0 0 0 13 11M13 7A1 1 0 1 1 12 8A1 1 0 0 1 13 7M17.11 10.86A5 5 0 0 0 17.11 5.14A2.91 2.91 0 0 1 18 5A3 3 0 0 1 18 11A2.91 2.91 0 0 1 17.11 10.86M13 13C7 13 7 17 7 17V19H19V17S19 13 13 13M9 17C9 16.71 9.32 15 13 15C16.5 15 16.94 16.56 17 17M24 17V19H21V17A5.6 5.6 0 0 0 19.2 13.06C24 13.55 24 17 24 17M8 12H5V15H3V12H0V10H3V7H5V10H8Z"></path></svg> 34 Subscribers</h6>
                                            {/* <!-- <h6 style="margin-bottom: 0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d84c47" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-clock"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>5 min</h6> --> */}
                                        </div>
                                    </div>
                                </div><div class="col-lg-4 col-md-6 col-sm-12 channels_list" data-channel-id="1" data-channel-views="1586">
                                    <div class="content user-wrapper vid_pop_channls" data-id="1">
                                        <div class="video-thumb">
                                            <a href="https://clikview.com/@Crwd">
                                                <img src="https://clikview.com/upload/photos/2022/11/rVxBkwvol3q1kaPjEYr6_28_cba367b0684ded0e986faf97ad042981_image.jpg" alt="ClikView " />
                                            </a>
                                        </div>
                                        <div class="video-title padding_popular">
                                            <a href="https://clikview.com/@Crwd" data-load="?link1=timeline&amp;id=Crwd"><h4>ClikView </h4></a>
                                            <h6><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z"></path></svg> 1,586 Views</h6>
                                            <h6><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M13 11A3 3 0 1 0 10 8A3 3 0 0 0 13 11M13 7A1 1 0 1 1 12 8A1 1 0 0 1 13 7M17.11 10.86A5 5 0 0 0 17.11 5.14A2.91 2.91 0 0 1 18 5A3 3 0 0 1 18 11A2.91 2.91 0 0 1 17.11 10.86M13 13C7 13 7 17 7 17V19H19V17S19 13 13 13M9 17C9 16.71 9.32 15 13 15C16.5 15 16.94 16.56 17 17M24 17V19H21V17A5.6 5.6 0 0 0 19.2 13.06C24 13.55 24 17 24 17M8 12H5V15H3V12H0V10H3V7H5V10H8Z"></path></svg> 136 Subscribers</h6>
                                            {/* <!-- <h6 style="margin-bottom: 0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d84c47" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-clock"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>24 min / 48 sec</h6> --> */}
                                        </div>
                                    </div>
                                </div><div class="col-lg-4 col-md-6 col-sm-12 channels_list" data-channel-id="185" data-channel-views="1584">
                                    <div class="content user-wrapper vid_pop_channls" data-id="185">
                                        <div class="video-thumb">
                                            <a href="https://clikview.com/@Justhaveinfun">
                                                <img src="https://clikview.com/upload/photos/2022/10/Oo4NGffh6MDNvJuHa5Fi_30_3e5c513ab323a6cd00e8fe05c9adab1f_image.png" alt="Dena Thorp" />
                                            </a>
                                        </div>
                                        <div class="video-title padding_popular">
                                            <a href="https://clikview.com/@Justhaveinfun" data-load="?link1=timeline&amp;id=Justhaveinfun"><h4>Dena Thorp</h4></a>
                                            <h6><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z"></path></svg> 1,584 Views</h6>
                                            <h6><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M13 11A3 3 0 1 0 10 8A3 3 0 0 0 13 11M13 7A1 1 0 1 1 12 8A1 1 0 0 1 13 7M17.11 10.86A5 5 0 0 0 17.11 5.14A2.91 2.91 0 0 1 18 5A3 3 0 0 1 18 11A2.91 2.91 0 0 1 17.11 10.86M13 13C7 13 7 17 7 17V19H19V17S19 13 13 13M9 17C9 16.71 9.32 15 13 15C16.5 15 16.94 16.56 17 17M24 17V19H21V17A5.6 5.6 0 0 0 19.2 13.06C24 13.55 24 17 24 17M8 12H5V15H3V12H0V10H3V7H5V10H8Z"></path></svg> 92 Subscribers</h6>
                                            {/* <!-- <h6 style="margin-bottom: 0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d84c47" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-clock"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>4 min / 6 sec</h6> --> */}
                                        </div>
                                    </div>
                                </div><div class="col-lg-4 col-md-6 col-sm-12 channels_list" data-channel-id="843" data-channel-views="1469">
                                    <div class="content user-wrapper vid_pop_channls" data-id="843">
                                        <div class="video-thumb">
                                            <a href="https://clikview.com/@MarleneK">
                                                <img src="https://clikview.com/upload/photos/2022/08/horlRkK9SiiVrygcqZLN_30_df547b02728bbd0da6f8831279167b0d_image.jpg" alt="MarleneK" />
                                            </a>
                                        </div>
                                        <div class="video-title padding_popular">
                                            <a href="https://clikview.com/@MarleneK" data-load="?link1=timeline&amp;id=MarleneK"><h4>MarleneK</h4></a>
                                            <h6><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z"></path></svg> 1,469 Views</h6>
                                            <h6><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M13 11A3 3 0 1 0 10 8A3 3 0 0 0 13 11M13 7A1 1 0 1 1 12 8A1 1 0 0 1 13 7M17.11 10.86A5 5 0 0 0 17.11 5.14A2.91 2.91 0 0 1 18 5A3 3 0 0 1 18 11A2.91 2.91 0 0 1 17.11 10.86M13 13C7 13 7 17 7 17V19H19V17S19 13 13 13M9 17C9 16.71 9.32 15 13 15C16.5 15 16.94 16.56 17 17M24 17V19H21V17A5.6 5.6 0 0 0 19.2 13.06C24 13.55 24 17 24 17M8 12H5V15H3V12H0V10H3V7H5V10H8Z"></path></svg> 101 Subscribers</h6>
                                            {/* <!-- <h6 style="margin-bottom: 0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d84c47" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-clock"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>0 sec</h6> --> */}
                                        </div>
                                    </div>
                                </div><div class="col-lg-4 col-md-6 col-sm-12 channels_list" data-channel-id="110" data-channel-views="1434">
                                    <div class="content user-wrapper vid_pop_channls" data-id="110">
                                        <div class="video-thumb">
                                            <a href="https://clikview.com/@DigitalOilHunter">
                                                <img src="https://clikview.com/upload/photos/2022/08/Skuu4mRoKvqZ8lz4mdxF_21_5136e46b0f90e7f6d31f4a654967e5f7_image.jpeg" alt="DigitalOilHunter" />
                                            </a>
                                        </div>
                                        <div class="video-title padding_popular">
                                            <a href="https://clikview.com/@DigitalOilHunter" data-load="?link1=timeline&amp;id=DigitalOilHunter"><h4>DigitalOilHunter</h4></a>
                                            <h6><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z"></path></svg> 1,434 Views</h6>
                                            <h6><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M13 11A3 3 0 1 0 10 8A3 3 0 0 0 13 11M13 7A1 1 0 1 1 12 8A1 1 0 0 1 13 7M17.11 10.86A5 5 0 0 0 17.11 5.14A2.91 2.91 0 0 1 18 5A3 3 0 0 1 18 11A2.91 2.91 0 0 1 17.11 10.86M13 13C7 13 7 17 7 17V19H19V17S19 13 13 13M9 17C9 16.71 9.32 15 13 15C16.5 15 16.94 16.56 17 17M24 17V19H21V17A5.6 5.6 0 0 0 19.2 13.06C24 13.55 24 17 24 17M8 12H5V15H3V12H0V10H3V7H5V10H8Z"></path></svg> 108 Subscribers</h6>
                                            {/* <!-- <h6 style="margin-bottom: 0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d84c47" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-clock"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>0 sec</h6> --> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="clear"></div>
                        <div class="watch-video-show-more desc load-more" data-type="popular_channels" data-sort-by="views" data-sort-type="all_time">Show more</div>

                        <div class="clear"></div>

                        {/* <script type="text/javascript">
	$('#submit').on('click', function(event) {
		var sort_by = $('#sort_channels_by').val();
		var sort_type = $('#sort_channels_type').val();
		$('#link_redirect_to_page').attr('data-load', '?link1=popular_channels&type='+sort_by+'&sort_type='+sort_type);
		$('#link_redirect_to_page').click();
	});
</script> */}
                    </div>
                    <input type="hidden" id="main-url" value="https://clikview.com%2Fauction" />
                    <div class="ads-placment" id="footer_ad_"></div>
                </div>
            </div>
        </div>
    )
}

export default PopularChannel