import React from 'react'
import {Link} from 'react-router-dom'
import MobileSearch from './MobileSearch';

function Participate(props) {
    const { searchOpen, expandNav } = props;
    return (
        <div>
            <div className={expandNav ? "main-container shrinkWidth bodyfixed" : "main-container expandWidth"} Style="z-index:-1">
                <div id="main-container" class="main-content  container " data-logged="true">
                {searchOpen ? <MobileSearch /> : ""}
                    <div class="ads-placment" id="header_ad_"></div>
                    <div class="announcement-renderer">

                    </div>
                    <div id="container_content"><input type="hidden" id="json-data" value="{&quot;title&quot;:&quot;Auction | ClikView - Real Content For You&quot;,&quot;description&quot;:&quot;Clikview is a Video Sharing Platform, Clikview is the best way to start your own video sharing channel! Real Content for you.&quot;,&quot;keyword&quot;:&quot;clikview,video sharing, real content&quot;,&quot;page&quot;:&quot;auction&quot;,&quot;url&quot;:&quot;https:\/\/clikview.com\/auction&quot;,&quot;is_movie&quot;:false}" />
                        {/* <style>
@media only screen and (max-width: 572px) {
    .articleBox{   
        padding: 0px 0px 0px 25px;
    }
}
</style> */}
                        <div class="pt_page_headr">
                            <h4 class="page_head">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" fill="currentColor" d="M2.62356 2.35132C2.85479 2.21713 3.13998 2.21617 3.3721 2.34882L6.5 4.13619L9.6279 2.34882C9.85847 2.21706 10.1415 2.21706 10.3721 2.34882L13.5 4.13619L16.6279 2.34882C16.86 2.21617 17.1452 2.21713 17.3764 2.35132C17.6077 2.48551 17.75 2.73265 17.75 3V11.25H21C21.4142 11.25 21.75 11.5858 21.75 12V19C21.75 20.5188 20.5188 21.75 19 21.75H9H8.94513C7.57754 21.75 6.47522 21.75 5.60825 21.6335C4.70814 21.5125 3.95027 21.2536 3.34835 20.6517C2.74643 20.0497 2.48754 19.2919 2.36652 18.3918C2.24996 17.5248 2.24998 16.4225 2.25 15.0549V15V3C2.25 2.73265 2.39232 2.48551 2.62356 2.35132ZM19 20.25C19.6904 20.25 20.25 19.6904 20.25 19V12.75H17.75V19C17.75 19.6904 18.3096 20.25 19 20.25ZM16.5499 20.25H9C7.56458 20.25 6.56347 20.2484 5.80812 20.1469C5.07435 20.0482 4.68577 19.8678 4.40901 19.591C4.13225 19.3142 3.9518 18.9257 3.85315 18.1919C3.75159 17.4365 3.75 16.4354 3.75 15V4.29238L6.1279 5.65118C6.35847 5.78294 6.64153 5.78294 6.8721 5.65118L10 3.86381L13.1279 5.65118C13.3585 5.78294 13.6415 5.78294 13.8721 5.65118L16.25 4.29239V12V19C16.25 19.4501 16.3581 19.875 16.5499 20.25ZM6.25 9C6.25 8.58579 6.58579 8.25 7 8.25H11C11.4142 8.25 11.75 8.58579 11.75 9C11.75 9.41421 11.4142 9.75 11 9.75H7C6.58579 9.75 6.25 9.41421 6.25 9ZM7 12.25C6.58579 12.25 6.25 12.5858 6.25 13C6.25 13.4142 6.58579 13.75 7 13.75H13C13.4142 13.75 13.75 13.4142 13.75 13C13.75 12.5858 13.4142 12.25 13 12.25H7ZM6.25 17C6.25 16.5858 6.58579 16.25 7 16.25H13C13.4142 16.25 13.75 16.5858 13.75 17C13.75 17.4142 13.4142 17.75 13 17.75H7C6.58579 17.75 6.25 17.4142 6.25 17Z"></path>
                                </svg>
                                Recent auctions
                            </h4>
                            <div class="desktopOnly">
                                <Link to="/home2/videostudio/yourevents" class="btn btn-main" Style="margin-right: 10px;">
                                    Event overview
                                </Link>
                                <Link to="/home2/createauction" class="btn btn-main">
                                    Create an event
                                </Link>
                            </div>
                            <div class="mobileOnly">
                                <a href="/auction_dashboard" Style="margin-right: 10px;">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M1.181 12C2.121 6.88 6.608 3 12 3c5.392 0 9.878 3.88 10.819 9-.94 5.12-5.427 9-10.819 9-5.392 0-9.878-3.88-10.819-9zM12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0-2a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"></path></svg>
                                </a>
                                <a href="https://clikview.com/auction.create">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.4267 2.24998L16.5 2.25H18.5L18.5733 2.24998C18.966 2.24978 19.269 2.24963 19.5365 2.30284C20.6274 2.51983 21.4802 3.3726 21.6972 4.4635C21.7504 4.73101 21.7502 5.034 21.75 5.42673L21.75 5.5L21.75 5.57327C21.7502 5.966 21.7504 6.26899 21.6972 6.5365C21.4802 7.6274 20.6274 8.48017 19.5365 8.69716C19.269 8.75037 18.966 8.75022 18.5733 8.75002L18.5 8.75H16.5L16.4267 8.75002C16.034 8.75022 15.731 8.75037 15.4635 8.69716C14.3726 8.48017 13.5198 7.6274 13.3028 6.5365C13.2496 6.26899 13.2498 5.966 13.25 5.57328L13.25 5.5L13.25 5.42672C13.2498 5.034 13.2496 4.73101 13.3028 4.4635C13.5198 3.3726 14.3726 2.51983 15.4635 2.30284C15.731 2.24963 16.034 2.24978 16.4267 2.24998ZM16.5 3.75C15.9994 3.75 15.8586 3.75363 15.7561 3.77402C15.2603 3.87265 14.8727 4.26027 14.774 4.75614C14.7536 4.85862 14.75 4.9994 14.75 5.5C14.75 6.0006 14.7536 6.14138 14.774 6.24386C14.8727 6.73973 15.2603 7.12735 15.7561 7.22598C15.8586 7.24637 15.9994 7.25 16.5 7.25H18.5C19.0006 7.25 19.1414 7.24637 19.2439 7.22598C19.7397 7.12735 20.1273 6.73973 20.226 6.24386C20.2464 6.14138 20.25 6.0006 20.25 5.5C20.25 4.9994 20.2464 4.85862 20.226 4.75614C20.1273 4.26027 19.7397 3.87265 19.2439 3.77402C19.1414 3.75363 19.0006 3.75 18.5 3.75H16.5ZM6.5 2.25H6.46165C5.79208 2.24998 5.23335 2.24997 4.78102 2.29598C4.30755 2.34415 3.86818 2.44886 3.47218 2.71346C3.17191 2.91409 2.91409 3.17191 2.71346 3.47218C2.44886 3.86818 2.34415 4.30755 2.29598 4.78102C2.24997 5.23335 2.24998 5.79208 2.25 6.46165V6.5V8.5V8.53835C2.24998 9.20792 2.24997 9.76665 2.29598 10.219C2.34415 10.6925 2.44886 11.1318 2.71346 11.5278C2.91409 11.8281 3.17191 12.0859 3.47218 12.2865C3.86818 12.5511 4.30755 12.6559 4.78102 12.704C5.23335 12.75 5.79207 12.75 6.46164 12.75H6.5H6.53836C7.20793 12.75 7.76665 12.75 8.21898 12.704C8.69245 12.6559 9.13182 12.5511 9.52782 12.2865C9.82809 12.0859 10.0859 11.8281 10.2865 11.5278C10.5511 11.1318 10.6559 10.6925 10.704 10.219C10.75 9.76665 10.75 9.20792 10.75 8.53834L10.75 8.5V6.5L10.75 6.46166C10.75 5.79208 10.75 5.23335 10.704 4.78102C10.6559 4.30755 10.5511 3.86818 10.2865 3.47218C10.0859 3.17191 9.82809 2.91409 9.52782 2.71346C9.13182 2.44886 8.69245 2.34415 8.21898 2.29598C7.76665 2.24997 7.20792 2.24998 6.53835 2.25H6.5ZM4.30554 3.96066C4.41399 3.8882 4.57796 3.82438 4.93283 3.78828C5.30023 3.75091 5.78216 3.75 6.5 3.75C7.21784 3.75 7.69977 3.75091 8.06717 3.78828C8.42204 3.82438 8.58601 3.8882 8.69446 3.96066C8.83095 4.05186 8.94814 4.16905 9.03934 4.30554C9.1118 4.41399 9.17562 4.57796 9.21172 4.93283C9.24909 5.30023 9.25 5.78216 9.25 6.5V8.5C9.25 9.21784 9.24909 9.69977 9.21172 10.0672C9.17562 10.422 9.1118 10.586 9.03934 10.6945C8.94814 10.8309 8.83095 10.9481 8.69446 11.0393C8.58601 11.1118 8.42204 11.1756 8.06717 11.2117C7.69977 11.2491 7.21784 11.25 6.5 11.25C5.78216 11.25 5.30023 11.2491 4.93283 11.2117C4.57796 11.1756 4.41399 11.1118 4.30554 11.0393C4.16905 10.9481 4.05186 10.8309 3.96066 10.6945C3.8882 10.586 3.82438 10.422 3.78828 10.0672C3.75091 9.69977 3.75 9.21784 3.75 8.5V6.5C3.75 5.78216 3.75091 5.30023 3.78828 4.93283C3.82438 4.57796 3.8882 4.41399 3.96066 4.30554C4.05186 4.16905 4.16905 4.05186 4.30554 3.96066ZM5.5 15.25L5.42672 15.25C5.034 15.2498 4.73101 15.2496 4.4635 15.3028C3.3726 15.5198 2.51983 16.3726 2.30284 17.4635C2.24963 17.731 2.24978 18.034 2.24998 18.4267L2.25 18.5L2.24998 18.5733C2.24978 18.966 2.24963 19.269 2.30284 19.5365C2.51983 20.6274 3.3726 21.4802 4.4635 21.6972C4.73101 21.7504 5.034 21.7502 5.42673 21.75L5.5 21.75H7.5L7.57327 21.75C7.966 21.7502 8.26899 21.7504 8.5365 21.6972C9.6274 21.4802 10.4802 20.6274 10.6972 19.5365C10.7504 19.269 10.7502 18.966 10.75 18.5733L10.75 18.5L10.75 18.4267C10.7502 18.034 10.7504 17.731 10.6972 17.4635C10.4802 16.3726 9.6274 15.5198 8.5365 15.3028C8.26899 15.2496 7.966 15.2498 7.57328 15.25L7.5 15.25H5.5ZM4.75614 16.774C4.85862 16.7536 4.9994 16.75 5.5 16.75H7.5C8.0006 16.75 8.14138 16.7536 8.24386 16.774C8.73973 16.8727 9.12735 17.2603 9.22598 17.7561C9.24637 17.8586 9.25 17.9994 9.25 18.5C9.25 19.0006 9.24637 19.1414 9.22598 19.2439C9.12735 19.7397 8.73973 20.1273 8.24386 20.226C8.14138 20.2464 8.0006 20.25 7.5 20.25H5.5C4.9994 20.25 4.85862 20.2464 4.75614 20.226C4.26027 20.1273 3.87265 19.7397 3.77402 19.2439C3.75363 19.1414 3.75 19.0006 3.75 18.5C3.75 17.9994 3.75363 17.8586 3.77402 17.7561C3.87265 17.2603 4.26027 16.8727 4.75614 16.774ZM17.5 11.25L17.4617 11.25C16.7921 11.25 16.2334 11.25 15.781 11.296C15.3075 11.3441 14.8682 11.4489 14.4722 11.7135C14.1719 11.9141 13.9141 12.1719 13.7135 12.4722C13.4489 12.8682 13.3441 13.3075 13.296 13.781C13.25 14.2334 13.25 14.7921 13.25 15.4617L13.25 15.5V17.5L13.25 17.5383C13.25 18.2079 13.25 18.7666 13.296 19.219C13.3441 19.6925 13.4489 20.1318 13.7135 20.5278C13.9141 20.8281 14.1719 21.0859 14.4722 21.2865C14.8682 21.5511 15.3075 21.6559 15.781 21.704C16.2333 21.75 16.7921 21.75 17.4616 21.75H17.5H17.5384C18.2079 21.75 18.7667 21.75 19.219 21.704C19.6925 21.6559 20.1318 21.5511 20.5278 21.2865C20.8281 21.0859 21.0859 20.8281 21.2865 20.5278C21.5511 20.1318 21.6559 19.6925 21.704 19.219C21.75 18.7666 21.75 18.2079 21.75 17.5383V17.5V15.5V15.4617C21.75 14.7921 21.75 14.2334 21.704 13.781C21.6559 13.3075 21.5511 12.8682 21.2865 12.4722C21.0859 12.1719 20.8281 11.9141 20.5278 11.7135C20.1318 11.4489 19.6925 11.3441 19.219 11.296C18.7666 11.25 18.2079 11.25 17.5383 11.25L17.5 11.25ZM15.3055 12.9607C15.414 12.8882 15.578 12.8244 15.9328 12.7883C16.3002 12.7509 16.7822 12.75 17.5 12.75C18.2178 12.75 18.6998 12.7509 19.0672 12.7883C19.422 12.8244 19.586 12.8882 19.6945 12.9607C19.8309 13.0519 19.9481 13.169 20.0393 13.3055C20.1118 13.414 20.1756 13.578 20.2117 13.9328C20.2491 14.3002 20.25 14.7822 20.25 15.5V17.5C20.25 18.2178 20.2491 18.6998 20.2117 19.0672C20.1756 19.422 20.1118 19.586 20.0393 19.6945C19.9481 19.8309 19.8309 19.9481 19.6945 20.0393C19.586 20.1118 19.422 20.1756 19.0672 20.2117C18.6998 20.2491 18.2178 20.25 17.5 20.25C16.7822 20.25 16.3002 20.2491 15.9328 20.2117C15.578 20.1756 15.414 20.1118 15.3055 20.0393C15.169 19.9481 15.0519 19.8309 14.9607 19.6945C14.8882 19.586 14.8244 19.422 14.7883 19.0672C14.7509 18.6998 14.75 18.2178 14.75 17.5V15.5C14.75 14.7822 14.7509 14.3002 14.7883 13.9328C14.8244 13.578 14.8882 13.414 14.9607 13.3055C15.0519 13.169 15.169 13.0519 15.3055 12.9607Z" fill="currentColor"></path>
                                    </svg>
                                </a>
                            </div>

                        </div>

                        <div class="row">
                            <div class="col-md-8 articleBox">
                                <div class="articles-content">
                                    <div class="row subscriptions-list author-list articles-container">
                                        <div class="text-center no-content-found empty_state" Style="margin: 0 auto"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-book-open"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>No auction found</div>
                                    </div>
                                    {/* <!--
				<div class="watch-video-show-more desc" data-type="articles"
				     onclick="PT_LoadPost('',this);">
					Show more
				</div>
            -->		 */}
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="article-categories">
                                    <div class="content width-100">
                                        <form class="form search-articles-form" method="post" action="">
                                            <div class="form-group">
                                                <input type="text" class="form-control" placeholder="Search auctions" name="q" />
                                                <button class="btn btn-main" type="submit">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search">
                                                        <circle cx="11" cy="11" r="8"></circle>
                                                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                                    </svg>
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                    <div class="pt_page_headr">
                                        <h4 class="page_head">Categories</h4>
                                    </div>
                                    <div class="pt_categories">
                                        <ul>
                                            <li>
                                                <Link to="/home2/allvideos/Film_&_Animation" data-load="?link1=auction&amp;category_id=1">
                                                    <span>Film &amp; Animation</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/home2/allvideos/Business" data-load="?link1=auction&amp;category_id=3">
                                                    <span>Business</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/home2/allvideos/Pets_&_Animals" data-load="?link1=auction&amp;category_id=4">
                                                    <span>Pets &amp; Animals</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/home2/allvideos/Sports" data-load="?link1=auction&amp;category_id=5">
                                                    <span>Sports</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/home2/allvideos/Travel_&_Events" data-load="?link1=auction&amp;category_id=6">
                                                    <span>Travel &amp; Events</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/home2/allvideos/Motivation" data-load="?link1=auction&amp;category_id=7">
                                                    <span>Motivation</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/home2/allvideos/People_&_Blogs" data-load="?link1=auction&amp;category_id=8">
                                                    <span>People &amp; Blogs</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/home2/allvideos/Advanced_Medicine" data-load="?link1=auction&amp;category_id=9">
                                                    <span>Advanced Medicine</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/home2/allvideos/Digital_Marketing" data-load="?link1=auction&amp;category_id=10">
                                                    <span>Digital Marketing</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/home2/allvideos/News_&_Politics" data-load="?link1=auction&amp;category_id=11">
                                                    <span>News &amp; Politics</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/home2/allvideos/How_to_&_Style" data-load="?link1=auction&amp;category_id=12">
                                                    <span>How-to &amp; Style</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/home2/allvideos/Non_profits_&_Activism" data-load="?link1=auction&amp;category_id=13">
                                                    <span>Non-profits &amp; Activism</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/home2/allvideos/Super_Cars" data-load="?link1=auction&amp;category_id=849">
                                                    <span>Super Cars</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/home2/allvideos/Other" data-load="?link1=auction&amp;category_id=other">
                                                    <span>Other</span>
                                                </Link>
                                            </li>
                                        </ul>
                                        <div class="clear"></div>
                                    </div>
                                    <div class="ads-placment"></div>
                                    <br />
                                    <div class="pt_page_headr">
                                        <h4 class="page_head">Most popular events</h4>
                                    </div>
                                    <div>
                                        <div class="related-article-wrapper">
                                            <div class="ra-title">
                                                <h5><a href="https://clikview.com/auction/read/mindset-key-to-successfully-addressing-cancer_11.html" data-load="?link1=auction.read&amp;id=mindset-key-to-successfully-addressing-cancer_11.html">Mindset - Key To Successfully Addressing Cancer</a></h5>
                                                <p>11/07/22</p>
                                            </div>
                                            <div class="ra-thumb" Style="background-image: url('https://clikview.com/upload/photos/2022/11/DrHF6AmtALQJ2Sbqmem1_24_fb28df0f1c934713fdefcbed1957347e_image.jpg');"></div>
                                        </div>
                                        <div class="clear"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <script>
    jQuery(document).ready(function ($) {
        $('.search-articles-form').submit(function (event) {
            const query = $(this).find('input').val();
            if (!query) {
                $(this).find('input').addClass('danger-field-border');
                return false;
            } else if (query.length > 50) {
                $(this).find('input').addClass('danger-field-border');
                return false;
            }
        });
    });
</script> */}
                    </div>
                    <input type="hidden" id="main-url" value="https://clikview.com%2F" />
                    <div class="ads-placment" id="footer_ad_"></div>
                </div>
            </div>
        </div>
    )
}

export default Participate