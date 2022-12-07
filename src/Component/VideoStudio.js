import React, { useState } from 'react'
import {Link,useLocation} from 'react-router-dom'
import Comments from './Comments';
import Dashboard from './Dashboard';
import Earning from './Earning';
import MobileSearch from './MobileSearch';
import MyDraftVideo from './MyDraftVideo';
import Videos from './Videos';
import WonEvents from './WonEvents';
import YourEvents from './YourEvents';

function VideoStudio(props) {
    const searchData = useLocation().pathname.slice(19);
    console.log(searchData);
    const { searchOpen, expandNav } = props;
    const [vStudio, setVStudio] = useState(searchData);
    let preview;
    if (vStudio === "dashboard") {
        preview = <Dashboard />;
    }
    else if (vStudio === 'videos') {
        preview = <Videos/>
    }
    else if (vStudio === 'mydraftvideos') {
        preview = <MyDraftVideo />
    }
    else if (vStudio === 'comments') {
        preview = <Comments />
    }
    else if (vStudio === 'earning') {
        preview = <Earning />
    }
    else if (vStudio === 'yourevents') {
        preview = <YourEvents />
    }
    else if (vStudio === 'wonevents') {
        preview = <WonEvents />
    }
    return (
        <div>
            <div className={expandNav ? "main-container shrinkWidth bodyfixed" : "main-container expandWidth"} Style="z-index:-1">
                <div id="main-container" className="main-content  container">
                    {searchOpen ? <MobileSearch /> : ""}
                    <div class="ads-placment" id="header_ad_"></div>
                    <div class="announcement-renderer">

                    </div>
                    <div id="container_content"><input type="hidden" id="json-data" value="{&quot;title&quot;:&quot;Dashboard - ClikView - Real Content For You&quot;,&quot;description&quot;:&quot;Clikview is a Video Sharing Platform, Clikview is the best way to start your own video sharing channel! Real Content for you.&quot;,&quot;keyword&quot;:&quot;clikview,video sharing, real content&quot;,&quot;page&quot;:&quot;dashboard&quot;,&quot;url&quot;:&quot;https:\/\/clikview.com\/dashboard&quot;,&quot;is_movie&quot;:false}" />
                        <script src="https://clikview.com/themes/youplay/js/highcharts/highcharts.js"></script>
                        <script src="https://clikview.com/themes/youplay/js/highcharts/exporting.js"></script>
                        <div class="row">
                            <div class="col-md-3">
                                <div class="settings-sidebar">
                                    <ul class="list-group">
                                        <li class="list-group-item active" onClick={() => { setVStudio('dashboard') }}>
                                            <span href="" data-load="?link1=dashboard"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"></path></svg> Dashboard</span>
                                        </li>
                                        <li class="list-group-item" onClick={() => { setVStudio('videos') }}>
                                            <span href="https://clikview.com/video_studio" data-load="?link1=video_studio"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M16 4a1 1 0 0 1 1 1v4.2l5.213-3.65a.5.5 0 0 1 .787.41v12.08a.5.5 0 0 1-.787.41L17 14.8V19a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h14zM7.4 8.829a.4.4 0 0 0-.392.32L7 9.228v5.542a.4.4 0 0 0 .542.374l.073-.036 4.355-2.772a.4.4 0 0 0 .063-.624l-.063-.05L7.615 8.89A.4.4 0 0 0 7.4 8.83z"></path></svg> Videos</span>
                                        </li>
                                        <li class="list-group-item" onClick={() => { setVStudio('mydraftvideos') }}>
                                            <span href="https://clikview.com/my_draft" data-load="?link1=my_draft"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M16 4a1 1 0 0 1 1 1v4.2l5.213-3.65a.5.5 0 0 1 .787.41v12.08a.5.5 0 0 1-.787.41L17 14.8V19a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h14zM7.4 8.829a.4.4 0 0 0-.392.32L7 9.228v5.542a.4.4 0 0 0 .542.374l.073-.036 4.355-2.772a.4.4 0 0 0 .063-.624l-.063-.05L7.615 8.89A.4.4 0 0 0 7.4 8.83z"></path></svg> My draft video</span>
                                        </li>
                                        <li class="list-group-item" onClick={() => { setVStudio('comments') }}>
                                            <span href="https://clikview.com/comments" data-load="?link1=comments"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M6.455 19L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455zM7 10v2h2v-2H7zm4 0v2h2v-2h-2zm4 0v2h2v-2h-2z"></path></svg> Comments</span>
                                        </li>
                                        <li class="list-group-item" onClick={() => { setVStudio('earning') }}>
                                            <span href="https://clikview.com/transactions" data-load="?link1=transactions"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M14 2a8 8 0 0 1 3.292 15.293A8 8 0 1 1 6.706 6.707 8.003 8.003 0 0 1 14 2zm-3 7H9v1a2.5 2.5 0 0 0-.164 4.995L9 15h2l.09.008a.5.5 0 0 1 0 .984L11 16H7v2h2v1h2v-1a2.5 2.5 0 0 0 .164-4.995L11 13H9l-.09-.008a.5.5 0 0 1 0-.984L9 12h4v-2h-2V9zm3-5a5.985 5.985 0 0 0-4.484 2.013 8 8 0 0 1 8.47 8.471A6 6 0 0 0 14 4z"></path></svg> Earnings</span>
                                        </li>
                                        <li class="list-group-item" onClick={() => { setVStudio('yourevents') }}>
                                            <span href="https://clikview.com/auction_dashboard" data-load="?link1=auction_dashboard">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.4267 2.24998L16.5 2.25H18.5L18.5733 2.24998C18.966 2.24978 19.269 2.24963 19.5365 2.30284C20.6274 2.51983 21.4802 3.3726 21.6972 4.4635C21.7504 4.73101 21.7502 5.034 21.75 5.42673L21.75 5.5L21.75 5.57327C21.7502 5.966 21.7504 6.26899 21.6972 6.5365C21.4802 7.6274 20.6274 8.48017 19.5365 8.69716C19.269 8.75037 18.966 8.75022 18.5733 8.75002L18.5 8.75H16.5L16.4267 8.75002C16.034 8.75022 15.731 8.75037 15.4635 8.69716C14.3726 8.48017 13.5198 7.6274 13.3028 6.5365C13.2496 6.26899 13.2498 5.966 13.25 5.57328L13.25 5.5L13.25 5.42672C13.2498 5.034 13.2496 4.73101 13.3028 4.4635C13.5198 3.3726 14.3726 2.51983 15.4635 2.30284C15.731 2.24963 16.034 2.24978 16.4267 2.24998ZM16.5 3.75C15.9994 3.75 15.8586 3.75363 15.7561 3.77402C15.2603 3.87265 14.8727 4.26027 14.774 4.75614C14.7536 4.85862 14.75 4.9994 14.75 5.5C14.75 6.0006 14.7536 6.14138 14.774 6.24386C14.8727 6.73973 15.2603 7.12735 15.7561 7.22598C15.8586 7.24637 15.9994 7.25 16.5 7.25H18.5C19.0006 7.25 19.1414 7.24637 19.2439 7.22598C19.7397 7.12735 20.1273 6.73973 20.226 6.24386C20.2464 6.14138 20.25 6.0006 20.25 5.5C20.25 4.9994 20.2464 4.85862 20.226 4.75614C20.1273 4.26027 19.7397 3.87265 19.2439 3.77402C19.1414 3.75363 19.0006 3.75 18.5 3.75H16.5ZM6.5 2.25H6.46165C5.79208 2.24998 5.23335 2.24997 4.78102 2.29598C4.30755 2.34415 3.86818 2.44886 3.47218 2.71346C3.17191 2.91409 2.91409 3.17191 2.71346 3.47218C2.44886 3.86818 2.34415 4.30755 2.29598 4.78102C2.24997 5.23335 2.24998 5.79208 2.25 6.46165V6.5V8.5V8.53835C2.24998 9.20792 2.24997 9.76665 2.29598 10.219C2.34415 10.6925 2.44886 11.1318 2.71346 11.5278C2.91409 11.8281 3.17191 12.0859 3.47218 12.2865C3.86818 12.5511 4.30755 12.6559 4.78102 12.704C5.23335 12.75 5.79207 12.75 6.46164 12.75H6.5H6.53836C7.20793 12.75 7.76665 12.75 8.21898 12.704C8.69245 12.6559 9.13182 12.5511 9.52782 12.2865C9.82809 12.0859 10.0859 11.8281 10.2865 11.5278C10.5511 11.1318 10.6559 10.6925 10.704 10.219C10.75 9.76665 10.75 9.20792 10.75 8.53834L10.75 8.5V6.5L10.75 6.46166C10.75 5.79208 10.75 5.23335 10.704 4.78102C10.6559 4.30755 10.5511 3.86818 10.2865 3.47218C10.0859 3.17191 9.82809 2.91409 9.52782 2.71346C9.13182 2.44886 8.69245 2.34415 8.21898 2.29598C7.76665 2.24997 7.20792 2.24998 6.53835 2.25H6.5ZM4.30554 3.96066C4.41399 3.8882 4.57796 3.82438 4.93283 3.78828C5.30023 3.75091 5.78216 3.75 6.5 3.75C7.21784 3.75 7.69977 3.75091 8.06717 3.78828C8.42204 3.82438 8.58601 3.8882 8.69446 3.96066C8.83095 4.05186 8.94814 4.16905 9.03934 4.30554C9.1118 4.41399 9.17562 4.57796 9.21172 4.93283C9.24909 5.30023 9.25 5.78216 9.25 6.5V8.5C9.25 9.21784 9.24909 9.69977 9.21172 10.0672C9.17562 10.422 9.1118 10.586 9.03934 10.6945C8.94814 10.8309 8.83095 10.9481 8.69446 11.0393C8.58601 11.1118 8.42204 11.1756 8.06717 11.2117C7.69977 11.2491 7.21784 11.25 6.5 11.25C5.78216 11.25 5.30023 11.2491 4.93283 11.2117C4.57796 11.1756 4.41399 11.1118 4.30554 11.0393C4.16905 10.9481 4.05186 10.8309 3.96066 10.6945C3.8882 10.586 3.82438 10.422 3.78828 10.0672C3.75091 9.69977 3.75 9.21784 3.75 8.5V6.5C3.75 5.78216 3.75091 5.30023 3.78828 4.93283C3.82438 4.57796 3.8882 4.41399 3.96066 4.30554C4.05186 4.16905 4.16905 4.05186 4.30554 3.96066ZM5.5 15.25L5.42672 15.25C5.034 15.2498 4.73101 15.2496 4.4635 15.3028C3.3726 15.5198 2.51983 16.3726 2.30284 17.4635C2.24963 17.731 2.24978 18.034 2.24998 18.4267L2.25 18.5L2.24998 18.5733C2.24978 18.966 2.24963 19.269 2.30284 19.5365C2.51983 20.6274 3.3726 21.4802 4.4635 21.6972C4.73101 21.7504 5.034 21.7502 5.42673 21.75L5.5 21.75H7.5L7.57327 21.75C7.966 21.7502 8.26899 21.7504 8.5365 21.6972C9.6274 21.4802 10.4802 20.6274 10.6972 19.5365C10.7504 19.269 10.7502 18.966 10.75 18.5733L10.75 18.5L10.75 18.4267C10.7502 18.034 10.7504 17.731 10.6972 17.4635C10.4802 16.3726 9.6274 15.5198 8.5365 15.3028C8.26899 15.2496 7.966 15.2498 7.57328 15.25L7.5 15.25H5.5ZM4.75614 16.774C4.85862 16.7536 4.9994 16.75 5.5 16.75H7.5C8.0006 16.75 8.14138 16.7536 8.24386 16.774C8.73973 16.8727 9.12735 17.2603 9.22598 17.7561C9.24637 17.8586 9.25 17.9994 9.25 18.5C9.25 19.0006 9.24637 19.1414 9.22598 19.2439C9.12735 19.7397 8.73973 20.1273 8.24386 20.226C8.14138 20.2464 8.0006 20.25 7.5 20.25H5.5C4.9994 20.25 4.85862 20.2464 4.75614 20.226C4.26027 20.1273 3.87265 19.7397 3.77402 19.2439C3.75363 19.1414 3.75 19.0006 3.75 18.5C3.75 17.9994 3.75363 17.8586 3.77402 17.7561C3.87265 17.2603 4.26027 16.8727 4.75614 16.774ZM17.5 11.25L17.4617 11.25C16.7921 11.25 16.2334 11.25 15.781 11.296C15.3075 11.3441 14.8682 11.4489 14.4722 11.7135C14.1719 11.9141 13.9141 12.1719 13.7135 12.4722C13.4489 12.8682 13.3441 13.3075 13.296 13.781C13.25 14.2334 13.25 14.7921 13.25 15.4617L13.25 15.5V17.5L13.25 17.5383C13.25 18.2079 13.25 18.7666 13.296 19.219C13.3441 19.6925 13.4489 20.1318 13.7135 20.5278C13.9141 20.8281 14.1719 21.0859 14.4722 21.2865C14.8682 21.5511 15.3075 21.6559 15.781 21.704C16.2333 21.75 16.7921 21.75 17.4616 21.75H17.5H17.5384C18.2079 21.75 18.7667 21.75 19.219 21.704C19.6925 21.6559 20.1318 21.5511 20.5278 21.2865C20.8281 21.0859 21.0859 20.8281 21.2865 20.5278C21.5511 20.1318 21.6559 19.6925 21.704 19.219C21.75 18.7666 21.75 18.2079 21.75 17.5383V17.5V15.5V15.4617C21.75 14.7921 21.75 14.2334 21.704 13.781C21.6559 13.3075 21.5511 12.8682 21.2865 12.4722C21.0859 12.1719 20.8281 11.9141 20.5278 11.7135C20.1318 11.4489 19.6925 11.3441 19.219 11.296C18.7666 11.25 18.2079 11.25 17.5383 11.25L17.5 11.25ZM15.3055 12.9607C15.414 12.8882 15.578 12.8244 15.9328 12.7883C16.3002 12.7509 16.7822 12.75 17.5 12.75C18.2178 12.75 18.6998 12.7509 19.0672 12.7883C19.422 12.8244 19.586 12.8882 19.6945 12.9607C19.8309 13.0519 19.9481 13.169 20.0393 13.3055C20.1118 13.414 20.1756 13.578 20.2117 13.9328C20.2491 14.3002 20.25 14.7822 20.25 15.5V17.5C20.25 18.2178 20.2491 18.6998 20.2117 19.0672C20.1756 19.422 20.1118 19.586 20.0393 19.6945C19.9481 19.8309 19.8309 19.9481 19.6945 20.0393C19.586 20.1118 19.422 20.1756 19.0672 20.2117C18.6998 20.2491 18.2178 20.25 17.5 20.25C16.7822 20.25 16.3002 20.2491 15.9328 20.2117C15.578 20.1756 15.414 20.1118 15.3055 20.0393C15.169 19.9481 15.0519 19.8309 14.9607 19.6945C14.8882 19.586 14.8244 19.422 14.7883 19.0672C14.7509 18.6998 14.75 18.2178 14.75 17.5V15.5C14.75 14.7822 14.7509 14.3002 14.7883 13.9328C14.8244 13.578 14.8882 13.414 14.9607 13.3055C15.0519 13.169 15.169 13.0519 15.3055 12.9607Z" fill="currentColor"></path>
                                                </svg>
                                                Your events
                                            </span>
                                        </li>

                                        <li class="list-group-item" onClick={() => { setVStudio('wonevents') }}>
                                            <span href="https://clikview.com/won_auction" data-load="?link1=won_auction">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.4267 2.24998L16.5 2.25H18.5L18.5733 2.24998C18.966 2.24978 19.269 2.24963 19.5365 2.30284C20.6274 2.51983 21.4802 3.3726 21.6972 4.4635C21.7504 4.73101 21.7502 5.034 21.75 5.42673L21.75 5.5L21.75 5.57327C21.7502 5.966 21.7504 6.26899 21.6972 6.5365C21.4802 7.6274 20.6274 8.48017 19.5365 8.69716C19.269 8.75037 18.966 8.75022 18.5733 8.75002L18.5 8.75H16.5L16.4267 8.75002C16.034 8.75022 15.731 8.75037 15.4635 8.69716C14.3726 8.48017 13.5198 7.6274 13.3028 6.5365C13.2496 6.26899 13.2498 5.966 13.25 5.57328L13.25 5.5L13.25 5.42672C13.2498 5.034 13.2496 4.73101 13.3028 4.4635C13.5198 3.3726 14.3726 2.51983 15.4635 2.30284C15.731 2.24963 16.034 2.24978 16.4267 2.24998ZM16.5 3.75C15.9994 3.75 15.8586 3.75363 15.7561 3.77402C15.2603 3.87265 14.8727 4.26027 14.774 4.75614C14.7536 4.85862 14.75 4.9994 14.75 5.5C14.75 6.0006 14.7536 6.14138 14.774 6.24386C14.8727 6.73973 15.2603 7.12735 15.7561 7.22598C15.8586 7.24637 15.9994 7.25 16.5 7.25H18.5C19.0006 7.25 19.1414 7.24637 19.2439 7.22598C19.7397 7.12735 20.1273 6.73973 20.226 6.24386C20.2464 6.14138 20.25 6.0006 20.25 5.5C20.25 4.9994 20.2464 4.85862 20.226 4.75614C20.1273 4.26027 19.7397 3.87265 19.2439 3.77402C19.1414 3.75363 19.0006 3.75 18.5 3.75H16.5ZM6.5 2.25H6.46165C5.79208 2.24998 5.23335 2.24997 4.78102 2.29598C4.30755 2.34415 3.86818 2.44886 3.47218 2.71346C3.17191 2.91409 2.91409 3.17191 2.71346 3.47218C2.44886 3.86818 2.34415 4.30755 2.29598 4.78102C2.24997 5.23335 2.24998 5.79208 2.25 6.46165V6.5V8.5V8.53835C2.24998 9.20792 2.24997 9.76665 2.29598 10.219C2.34415 10.6925 2.44886 11.1318 2.71346 11.5278C2.91409 11.8281 3.17191 12.0859 3.47218 12.2865C3.86818 12.5511 4.30755 12.6559 4.78102 12.704C5.23335 12.75 5.79207 12.75 6.46164 12.75H6.5H6.53836C7.20793 12.75 7.76665 12.75 8.21898 12.704C8.69245 12.6559 9.13182 12.5511 9.52782 12.2865C9.82809 12.0859 10.0859 11.8281 10.2865 11.5278C10.5511 11.1318 10.6559 10.6925 10.704 10.219C10.75 9.76665 10.75 9.20792 10.75 8.53834L10.75 8.5V6.5L10.75 6.46166C10.75 5.79208 10.75 5.23335 10.704 4.78102C10.6559 4.30755 10.5511 3.86818 10.2865 3.47218C10.0859 3.17191 9.82809 2.91409 9.52782 2.71346C9.13182 2.44886 8.69245 2.34415 8.21898 2.29598C7.76665 2.24997 7.20792 2.24998 6.53835 2.25H6.5ZM4.30554 3.96066C4.41399 3.8882 4.57796 3.82438 4.93283 3.78828C5.30023 3.75091 5.78216 3.75 6.5 3.75C7.21784 3.75 7.69977 3.75091 8.06717 3.78828C8.42204 3.82438 8.58601 3.8882 8.69446 3.96066C8.83095 4.05186 8.94814 4.16905 9.03934 4.30554C9.1118 4.41399 9.17562 4.57796 9.21172 4.93283C9.24909 5.30023 9.25 5.78216 9.25 6.5V8.5C9.25 9.21784 9.24909 9.69977 9.21172 10.0672C9.17562 10.422 9.1118 10.586 9.03934 10.6945C8.94814 10.8309 8.83095 10.9481 8.69446 11.0393C8.58601 11.1118 8.42204 11.1756 8.06717 11.2117C7.69977 11.2491 7.21784 11.25 6.5 11.25C5.78216 11.25 5.30023 11.2491 4.93283 11.2117C4.57796 11.1756 4.41399 11.1118 4.30554 11.0393C4.16905 10.9481 4.05186 10.8309 3.96066 10.6945C3.8882 10.586 3.82438 10.422 3.78828 10.0672C3.75091 9.69977 3.75 9.21784 3.75 8.5V6.5C3.75 5.78216 3.75091 5.30023 3.78828 4.93283C3.82438 4.57796 3.8882 4.41399 3.96066 4.30554C4.05186 4.16905 4.16905 4.05186 4.30554 3.96066ZM5.5 15.25L5.42672 15.25C5.034 15.2498 4.73101 15.2496 4.4635 15.3028C3.3726 15.5198 2.51983 16.3726 2.30284 17.4635C2.24963 17.731 2.24978 18.034 2.24998 18.4267L2.25 18.5L2.24998 18.5733C2.24978 18.966 2.24963 19.269 2.30284 19.5365C2.51983 20.6274 3.3726 21.4802 4.4635 21.6972C4.73101 21.7504 5.034 21.7502 5.42673 21.75L5.5 21.75H7.5L7.57327 21.75C7.966 21.7502 8.26899 21.7504 8.5365 21.6972C9.6274 21.4802 10.4802 20.6274 10.6972 19.5365C10.7504 19.269 10.7502 18.966 10.75 18.5733L10.75 18.5L10.75 18.4267C10.7502 18.034 10.7504 17.731 10.6972 17.4635C10.4802 16.3726 9.6274 15.5198 8.5365 15.3028C8.26899 15.2496 7.966 15.2498 7.57328 15.25L7.5 15.25H5.5ZM4.75614 16.774C4.85862 16.7536 4.9994 16.75 5.5 16.75H7.5C8.0006 16.75 8.14138 16.7536 8.24386 16.774C8.73973 16.8727 9.12735 17.2603 9.22598 17.7561C9.24637 17.8586 9.25 17.9994 9.25 18.5C9.25 19.0006 9.24637 19.1414 9.22598 19.2439C9.12735 19.7397 8.73973 20.1273 8.24386 20.226C8.14138 20.2464 8.0006 20.25 7.5 20.25H5.5C4.9994 20.25 4.85862 20.2464 4.75614 20.226C4.26027 20.1273 3.87265 19.7397 3.77402 19.2439C3.75363 19.1414 3.75 19.0006 3.75 18.5C3.75 17.9994 3.75363 17.8586 3.77402 17.7561C3.87265 17.2603 4.26027 16.8727 4.75614 16.774ZM17.5 11.25L17.4617 11.25C16.7921 11.25 16.2334 11.25 15.781 11.296C15.3075 11.3441 14.8682 11.4489 14.4722 11.7135C14.1719 11.9141 13.9141 12.1719 13.7135 12.4722C13.4489 12.8682 13.3441 13.3075 13.296 13.781C13.25 14.2334 13.25 14.7921 13.25 15.4617L13.25 15.5V17.5L13.25 17.5383C13.25 18.2079 13.25 18.7666 13.296 19.219C13.3441 19.6925 13.4489 20.1318 13.7135 20.5278C13.9141 20.8281 14.1719 21.0859 14.4722 21.2865C14.8682 21.5511 15.3075 21.6559 15.781 21.704C16.2333 21.75 16.7921 21.75 17.4616 21.75H17.5H17.5384C18.2079 21.75 18.7667 21.75 19.219 21.704C19.6925 21.6559 20.1318 21.5511 20.5278 21.2865C20.8281 21.0859 21.0859 20.8281 21.2865 20.5278C21.5511 20.1318 21.6559 19.6925 21.704 19.219C21.75 18.7666 21.75 18.2079 21.75 17.5383V17.5V15.5V15.4617C21.75 14.7921 21.75 14.2334 21.704 13.781C21.6559 13.3075 21.5511 12.8682 21.2865 12.4722C21.0859 12.1719 20.8281 11.9141 20.5278 11.7135C20.1318 11.4489 19.6925 11.3441 19.219 11.296C18.7666 11.25 18.2079 11.25 17.5383 11.25L17.5 11.25ZM15.3055 12.9607C15.414 12.8882 15.578 12.8244 15.9328 12.7883C16.3002 12.7509 16.7822 12.75 17.5 12.75C18.2178 12.75 18.6998 12.7509 19.0672 12.7883C19.422 12.8244 19.586 12.8882 19.6945 12.9607C19.8309 13.0519 19.9481 13.169 20.0393 13.3055C20.1118 13.414 20.1756 13.578 20.2117 13.9328C20.2491 14.3002 20.25 14.7822 20.25 15.5V17.5C20.25 18.2178 20.2491 18.6998 20.2117 19.0672C20.1756 19.422 20.1118 19.586 20.0393 19.6945C19.9481 19.8309 19.8309 19.9481 19.6945 20.0393C19.586 20.1118 19.422 20.1756 19.0672 20.2117C18.6998 20.2491 18.2178 20.25 17.5 20.25C16.7822 20.25 16.3002 20.2491 15.9328 20.2117C15.578 20.1756 15.414 20.1118 15.3055 20.0393C15.169 19.9481 15.0519 19.8309 14.9607 19.6945C14.8882 19.586 14.8244 19.422 14.7883 19.0672C14.7509 18.6998 14.75 18.2178 14.75 17.5V15.5C14.75 14.7822 14.7509 14.3002 14.7883 13.9328C14.8244 13.578 14.8882 13.414 14.9607 13.3055C15.0519 13.169 15.169 13.0519 15.3055 12.9607Z" fill="currentColor"></path>
                                                </svg>
                                                Won events
                                            </span>
                                        </li>

                                        <li class="list-group-item" >
                                            <Link to='/home2/createproduct'>
                                                <span href="https://clikview.com/store.create" data-load="?link1=store.create"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M14 2a8 8 0 0 1 3.292 15.293A8 8 0 1 1 6.706 6.707 8.003 8.003 0 0 1 14 2zm-3 7H9v1a2.5 2.5 0 0 0-.164 4.995L9 15h2l.09.008a.5.5 0 0 1 0 .984L11 16H7v2h2v1h2v-1a2.5 2.5 0 0 0 .164-4.995L11 13H9l-.09-.008a.5.5 0 0 1 0-.984L9 12h4v-2h-2V9zm3-5a5.985 5.985 0 0 0-4.484 2.013 8 8 0 0 1 8.47 8.471A6 6 0 0 0 14 4z"></path></svg> Create Product</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-9">
                                {preview}
                            </div>
                        </div>

                        <br />
                        {/* <script> */}
                        {/* $("select#type").change(function(){
		var type = $('#type').val();
		window.location.href = site_url+"/dashboard?type="+type;
	});

	$(function () {
		Highcharts.setOptions({
			colors: ['#6abd46', '#ce3d3d', '#f2b92b', '#6abd46']
		});
		$('#chart-container').highcharts({
			chart: {
				type: 'column'
			},
			title: {
				text: 'Today (Based on UTC timezone)'
			},
			xAxis: {
					categories: [
				'00 AM',
				'1 AM',
				'2 AM',
				'3 AM',
				'4 AM',
				'5 AM',
				'6 AM',
				'7 AM',
				'8 AM',
				'9 AM',
				'10 AM',
				'11 AM',
				'12 PM',
				'1 PM',
				'2 PM',
				'3 PM',
				'4 PM',
				'5 PM',
				'6 PM',
				'7 PM',
				'8 PM',
				'9 PM',
				'10 PM',
				'11 PM'
			]
			,
		crosshair: true
	},
		yAxis: {
			min: 0,
					title: {
				text: 'Monday'
			}
		},
		tooltip: {
			headerFormat: '<span Style="font-size:10px;color:#fff;">{point.key}</span><table>',
					pointFormat: '<tr><td Style="color:#fff;padding:0">{series.name}: </td>' +
			'<td Style="padding:0;color:#fff;"><b>{point.y}</b></td></tr>',
					footerFormat: '</table>',
					shared: true,
					useHTML: true,
					backgroundColor: '#444'
		},
		plotOptions: {
			column: {
				pointPadding: 0.2,
						borderWidth: 0
			}
		},
		series: [{
			name: 'Subscribers',
			data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

	}]
	});
	});
</script> */}

                    </div>
                    <input type="hidden" id="main-url" value="https://clikview.com%2Fhistory" />
                    <div class="ads-placment" id="footer_ad_"></div>
                </div>
            </div>
        </div>
    )
}

export default VideoStudio