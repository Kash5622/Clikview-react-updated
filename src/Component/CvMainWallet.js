import React from 'react'
import MobileSearch from './MobileSearch';

function CvMainWallet(props) {
    const { searchOpen, expandNav } = props;
    return (
        <div>
            <div className={expandNav ? "main-container shrinkWidth bodyfixed" : "main-container expandWidth"} Style="z-index:-1">
                <div id="main-container" class="main-content  container" data-logged="true">
                    {searchOpen ? <MobileSearch /> : ""}
                    <div class="ads-placment" id="header_ad_"></div>
                    <div class="announcement-renderer">

                    </div>
                    <div id="container_content"><input type="hidden" id="json-data" value="{&quot;title&quot;:&quot;ClikView | ClikView - Real Content For You&quot;,&quot;description&quot;:&quot;Clikview is a Video Sharing Platform, Clikview is the best way to start your own video sharing channel! Real Content for you.&quot;,&quot;keyword&quot;:&quot;clikview,video sharing, real content&quot;,&quot;page&quot;:&quot;wallet&quot;,&quot;url&quot;:&quot;https:\/\/clikview.com\/wallet&quot;,&quot;is_movie&quot;:false}" />
                        {/* <link href="https://clikview.com/themes/youplay/js/lib/jquery-datatable/skin/bootstrap/css/dataTables.bootstrap.min.css" rel="stylesheet">
<script src="https://clikview.com/themes/youplay/js/lib/jquery-datatable/jquery.dataTables.js"></script>
<script src="https://clikview.com/themes/youplay/js/lib/jquery-datatable/skin/bootstrap/js/dataTables.bootstrap.js"></script>
<script src="https://js.stripe.com/v3/"></script> */}

                        <div class="user-setting-panel pt_shadow">
                            <div class="yp_sett_header">
                                <h4><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M21,18V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5A2,2 0 0,1 5,3H19A2,2 0 0,1 21,5V6H12C10.89,6 10,6.9 10,8V16A2,2 0 0,0 12,18M12,16H22V8H12M16,13.5A1.5,1.5 0 0,1 14.5,12A1.5,1.5 0 0,1 16,10.5A1.5,1.5 0 0,1 17.5,12A1.5,1.5 0 0,1 16,13.5Z"></path></svg> CV Main Wallet </h4>
                            </div>

                            <div class="row">
                                <div class="col-md-6">
                                    <div class="pt_invit_link green wallet">
                                        <div>CV Main Wallet
                                            <svg viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M21,18V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5A2,2 0 0,1 5,3H19A2,2 0 0,1 21,5V6H12C10.89,6 10,6.9 10,8V16A2,2 0 0,0 12,18M12,16H22V8H12M16,13.5A1.5,1.5 0 0,1 14.5,12A1.5,1.5 0 0,1 16,10.5A1.5,1.5 0 0,1 17.5,12A1.5,1.5 0 0,1 16,13.5Z"></path></svg>
                                        </div>
                                        <span>$310.05</span>
                                        <button class="btn" Style="background-color: #ffffff33;" type="button" data-toggle="modal" data-target="#cvmainwallet">Replenish</button>
                                        <button class="btn" Style="background-color: #90c5e733;" type="button" onclick="PT_TransferBalance();">Transfer To Balance</button>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="pt_invit_link blue wallet">
                                        <div>Available balance
                                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 486.404 486.404" >
                                                <path Style="fill:#FFFFFF;" d="M486.404,317.919v55.38c0,18.808-50.155,34.482-111.804,34.482s-110.759-15.151-110.759-33.959 v-6.269l-1.045-43.886h0.522c8.359,16.196,54.335,28.735,109.714,28.735s112.327-15.673,112.327-34.482H486.404z"></path> <path Style="fill:#FFFFFF;" d="M371.465,112.074v54.857h-1.045c0,19.331-51.722,34.482-112.849,34.482 c-23.51,0.522-47.543-2.09-70.531-7.837l-1.045,1.045c-11.494-9.404-24.555-16.718-38.661-21.42v-1.045l-1.567-57.992 c3.657,17.763,52.245,31.869,111.282,31.869s113.371-15.151,113.371-33.959H371.465z"></path> <path Style="fill:#FFFFFF;" d="M371.465,113.119L371.465,113.119c0,18.808-51.722,33.959-113.371,33.959 s-108.147-14.106-111.804-31.869c0-0.522-0.522-1.567-0.522-2.09c0-18.808,50.155-34.482,112.327-34.482 C320.265,78.115,371.465,93.788,371.465,113.119z"></path> <path Style="fill:#FFFFFF;" d="M263.318,323.666L263.318,323.666l-0.522-11.494l-1.045-47.02 c3.657,17.763,52.245,31.869,111.282,31.869s111.282-15.151,112.849-33.437h0.522v54.335h-1.045 c0,18.808-50.678,34.482-112.327,34.482C311.384,352.4,271.678,339.862,263.318,323.666z"></path> <path Style="fill:#FFFFFF;" d="M188.608,358.67c14.106-13.061,25.078-29.78,30.824-48.065h2.612 c11.494,1.045,22.988,1.567,35.527,1.567h5.224v11.494l1.045,43.886h-5.747c-22.988,0.522-45.453-2.09-67.918-7.314L188.608,358.67z "></path> <path Style="fill:#FFFFFF;" d="M263.318,260.972v2.612l1.045,48.588h-5.225c-13.061,0-25.078-0.522-36.571-1.567h-2.612 c3.657-10.971,5.224-22.465,5.224-33.959c0-7.837-1.045-15.151-2.612-22.465h2.612c10.971,1.045,21.943,1.567,33.959,1.567 l4.702,2.612C263.318,259.404,263.318,260.449,263.318,260.972z"></path> <path Style="fill:#FFFFFF;" d="M187.041,193.576c22.988,5.747,47.02,8.359,70.531,7.837c61.126,0,112.849-15.151,112.849-34.482 h1.045v61.649c-56.947,0-103.445,13.584-109.192,30.824l-4.702-2.612c-11.494,0-22.465-0.522-32.914-1.567h-2.612 c-4.702-24.033-17.241-45.453-36.049-61.127L187.041,193.576z"></path> <g>
                                                    <path Style="fill:#FFFFFF;" d="M223.09,255.225L223.09,255.225c-5.224-24.033-18.286-45.975-37.094-62.171 c-11.494-10.449-25.078-17.763-39.706-21.943c-10.449-3.657-21.943-5.224-32.914-5.224C51.204,165.363,0.526,214.996,0.004,277.167 c-0.522,62.171,49.11,112.849,111.282,113.371c28.735,0,55.902-10.449,77.322-29.78c14.629-13.584,25.6-30.824,31.347-49.633 c3.657-10.971,5.224-21.943,5.224-33.437C225.18,270.376,223.09,262.539,223.09,255.225z"></path> <path Style="fill:#FFFFFF;" d="M485.882,262.539v1.045c-1.567,18.286-52.245,33.437-112.849,33.437s-107.625-14.106-111.282-31.869 v-2.612c0-1.045,0-2.09,0.522-3.135c5.747-17.241,52.245-30.824,109.192-30.824h1.567 C434.682,228.58,485.882,243.731,485.882,262.539z"></path> </g> <path Style="fill:#787878;" d="M113.376,264.106c-9.404,0-17.241-7.837-17.241-17.241c0-9.404,7.837-17.241,17.241-17.241 s17.241,7.837,17.241,17.241c0,5.747,4.702,10.449,10.449,10.449c5.747,0,10.449-4.702,10.449-10.449 c0-16.718-11.494-31.869-27.69-36.571v-4.18c0-5.747-4.702-10.449-10.449-10.449s-10.449,4.702-10.449,10.449v4.18 c-16.718,4.18-28.212,19.331-27.69,36.571c0,20.898,17.241,38.139,38.139,38.139c9.404,0,17.241,7.837,17.241,17.241 c0,9.404-7.837,17.241-17.241,17.241l0,0c-9.404,0-17.241-7.837-17.241-17.241c0-5.747-4.702-10.449-10.449-10.449 s-10.449,4.702-10.449,10.449c0,17.241,11.494,31.869,27.69,36.571v8.359c0,5.747,4.702,10.449,10.449,10.449 s10.449-4.702,10.449-10.449v-8.359c20.375-5.747,31.869-27.167,25.6-47.543C144.723,275.6,130.094,264.106,113.376,264.106z"></path></svg>
                                        </div>
                                        <span>&dollar;10.01</span>
                                        <button class="btn" Style="background-color: #ffffff33;" type="button" onclick="PT_ReplenishBalance();">Transfer To Main Wallet</button>
                                        <button class="btn" Style="background-color: #90c5e733;" type="button" onclick="location.href = 'https://clikview.com/settings/balance/somac';">Withdraw out of ClikView</button>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="user-setting-panel pt_shadow" Style="margin-top:20px;">
                            <div class="yp_sett_header">
                                <h4><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M21,18V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5A2,2 0 0,1 5,3H19A2,2 0 0,1 21,5V6H12C10.89,6 10,6.9 10,8V16A2,2 0 0,0 12,18M12,16H22V8H12M16,13.5A1.5,1.5 0 0,1 14.5,12A1.5,1.5 0 0,1 16,10.5A1.5,1.5 0 0,1 17.5,12A1.5,1.5 0 0,1 16,13.5Z"></path></svg> ClikView Gold &amp; Silver Token</h4>
                            </div>

                            <div class="row">
                                <div class="col-md-6">
                                    <div class="pt_invit_link green wallet">
                                        <div>ClikView Gold Token <svg viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M21,18V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5A2,2 0 0,1 5,3H19A2,2 0 0,1 21,5V6H12C10.89,6 10,6.9 10,8V16A2,2 0 0,0 12,18M12,16H22V8H12M16,13.5A1.5,1.5 0 0,1 14.5,12A1.5,1.5 0 0,1 16,10.5A1.5,1.5 0 0,1 17.5,12A1.5,1.5 0 0,1 16,13.5Z"></path></svg></div>
                                        <span>714</span>
                                        <button class="btn" Style="background-color: #ffffff33;" type="button" onclick="PT_ReplenishGoldTokenWallet();">Buy Gold Tokens</button>
                                        {/* <!--<button class="btn" Style="background-color: #ffffff33;" type="button" onclick="location.href = 'https://clikview.com/settings/balance/somac';">Withdraw Token</button>--> */}
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="pt_invit_link blue wallet text-center">
                                        {/* <div>Available balance 
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 486.404 486.404" xml:space="preserve"> <path Style="fill:#E2A63B;" d="M486.404,317.919v55.38c0,18.808-50.155,34.482-111.804,34.482s-110.759-15.151-110.759-33.959 v-6.269l-1.045-43.886h0.522c8.359,16.196,54.335,28.735,109.714,28.735s112.327-15.673,112.327-34.482H486.404z"></path> <path Style="fill:#F4B844;" d="M371.465,112.074v54.857h-1.045c0,19.331-51.722,34.482-112.849,34.482 c-23.51,0.522-47.543-2.09-70.531-7.837l-1.045,1.045c-11.494-9.404-24.555-16.718-38.661-21.42v-1.045l-1.567-57.992 c3.657,17.763,52.245,31.869,111.282,31.869s113.371-15.151,113.371-33.959H371.465z"></path> <path Style="fill:#FEDB41;" d="M371.465,113.119L371.465,113.119c0,18.808-51.722,33.959-113.371,33.959 s-108.147-14.106-111.804-31.869c0-0.522-0.522-1.567-0.522-2.09c0-18.808,50.155-34.482,112.327-34.482 C320.265,78.115,371.465,93.788,371.465,113.119z"></path>
                 <path Style="fill:#F4B844;" d="M263.318,323.666L263.318,323.666l-0.522-11.494l-1.045-47.02 c3.657,17.763,52.245,31.869,111.282,31.869s111.282-15.151,112.849-33.437h0.522v54.335h-1.045 c0,18.808-50.678,34.482-112.327,34.482C311.384,352.4,271.678,339.862,263.318,323.666z"></path> <path Style="fill:#E2A63B;" d="M188.608,358.67c14.106-13.061,25.078-29.78,30.824-48.065h2.612 c11.494,1.045,22.988,1.567,35.527,1.567h5.224v11.494l1.045,43.886h-5.747c-22.988,0.522-45.453-2.09-67.918-7.314L188.608,358.67z "></path> 
                 <path Style="fill:#F4B844;" d="M263.318,260.972v2.612l1.045,48.588h-5.225c-13.061,0-25.078-0.522-36.571-1.567h-2.612 c3.657-10.971,5.224-22.465,5.224-33.959c0-7.837-1.045-15.151-2.612-22.465h2.612c10.971,1.045,21.943,1.567,33.959,1.567 l4.702,2.612C263.318,259.404,263.318,260.449,263.318,260.972z"></path> <path Style="fill:#E2A63B;" d="M187.041,193.576c22.988,5.747,47.02,8.359,70.531,7.837c61.126,0,112.849-15.151,112.849-34.482 h1.045v61.649c-56.947,0-103.445,13.584-109.192,30.824l-4.702-2.612c-11.494,0-22.465-0.522-32.914-1.567h-2.612 c-4.702-24.033-17.241-45.453-36.049-61.127L187.041,193.576z"></path> <g> <path Style="fill:#FEDB41;" d="M223.09,255.225L223.09,255.225c-5.224-24.033-18.286-45.975-37.094-62.171 c-11.494-10.449-25.078-17.763-39.706-21.943c-10.449-3.657-21.943-5.224-32.914-5.224C51.204,165.363,0.526,214.996,0.004,277.167 c-0.522,62.171,49.11,112.849,111.282,113.371c28.735,0,55.902-10.449,77.322-29.78c14.629-13.584,25.6-30.824,31.347-49.633 c3.657-10.971,5.224-21.943,5.224-33.437C225.18,270.376,223.09,262.539,223.09,255.225z"></path> <path Style="fill:#FEDB41;" d="M485.882,262.539v1.045c-1.567,18.286-52.245,33.437-112.849,33.437s-107.625-14.106-111.282-31.869 v-2.612c0-1.045,0-2.09,0.522-3.135c5.747-17.241,52.245-30.824,109.192-30.824h1.567 C434.682,228.58,485.882,243.731,485.882,262.539z"></path> </g> <path Style="fill:#E2A63B;" d="M113.376,264.106c-9.404,0-17.241-7.837-17.241-17.241c0-9.404,7.837-17.241,17.241-17.241 s17.241,7.837,17.241,17.241c0,5.747,4.702,10.449,10.449,10.449c5.747,0,10.449-4.702,10.449-10.449 c0-16.718-11.494-31.869-27.69-36.571v-4.18c0-5.747-4.702-10.449-10.449-10.449s-10.449,4.702-10.449,10.449v4.18 c-16.718,4.18-28.212,19.331-27.69,36.571c0,20.898,17.241,38.139,38.139,38.139c9.404,0,17.241,7.837,17.241,17.241 c0,9.404-7.837,17.241-17.241,17.241l0,0c-9.404,0-17.241-7.837-17.241-17.241c0-5.747-4.702-10.449-10.449-10.449 s-10.449,4.702-10.449,10.449c0,17.241,11.494,31.869,27.69,36.571v8.359c0,5.747,4.702,10.449,10.449,10.449 s10.449-4.702,10.449-10.449v-8.359c20.375-5.747,31.869-27.167,25.6-47.543C144.723,275.6,130.094,264.106,113.376,264.106z"></path></svg></div>
				<span>$10.01</span>
				<button class="btn btn-main" type="button" onclick="PT_ReplenishBalance();">Transfer</button>
				<button class="btn btn-main" type="button" onclick="location.href = 'https://clikview.com/settings/balance/somac';">Withdrawl</button> */}

                                        <img src="https://clikview.com/upload/gold_token.png" Style="width:53%;" alt='' />
                                        <p Style=" font-weight: bold; font-size: 2rem; ">Gold Tokens</p>

                                    </div>
                                    {/* <!--<button data-toggle="collapse" data-target="#chartCollapse" aria-expanded="true" aria-controls="chartCollapse" Style="font-size: 1.2rem;font-style: italic;background-color: #04abf2;border-radius: 100px;margin-left: auto;padding: 0.4rem 1rem;display: block;">Chart</button> --> */}
                                </div>

                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="pt_invit_link green wallet">
                                        <div>ClikView Silver Token <svg viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M21,18V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5A2,2 0 0,1 5,3H19A2,2 0 0,1 21,5V6H12C10.89,6 10,6.9 10,8V16A2,2 0 0,0 12,18M12,16H22V8H12M16,13.5A1.5,1.5 0 0,1 14.5,12A1.5,1.5 0 0,1 16,10.5A1.5,1.5 0 0,1 17.5,12A1.5,1.5 0 0,1 16,13.5Z"></path></svg></div>
                                        <p Style="font-size: 1.3rem; margin-top: .6rem;">Silver tokens can be earned by participating on ClikView platforms e.g. uploading videos, commenting on videos and <a Style="color:#2fc8e1!important;" href="/home2">more.</a></p>
                                        <span>45</span>
                                        <p Style="margin: 0.5rem 0 0 0;">200 silver tokens = 1 gold token</p>
                                        <button class="btn" Style="background-color: #90c5e733;" type="button" onclick="PT_ConvertGoldToken();">Convert to Gold Tokens</button>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="pt_invit_link blue wallet text-center">
                                        {/* <div>Available balance 
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 486.404 486.404" xml:space="preserve"> <path Style="fill:#E2A63B;" d="M486.404,317.919v55.38c0,18.808-50.155,34.482-111.804,34.482s-110.759-15.151-110.759-33.959 v-6.269l-1.045-43.886h0.522c8.359,16.196,54.335,28.735,109.714,28.735s112.327-15.673,112.327-34.482H486.404z"></path>
                <path Style="fill:#F4B844;" d="M371.465,112.074v54.857h-1.045c0,19.331-51.722,34.482-112.849,34.482 c-23.51,0.522-47.543-2.09-70.531-7.837l-1.045,1.045c-11.494-9.404-24.555-16.718-38.661-21.42v-1.045l-1.567-57.992 c3.657,17.763,52.245,31.869,111.282,31.869s113.371-15.151,113.371-33.959H371.465z"></path> <path Style="fill:#FEDB41;" d="M371.465,113.119L371.465,113.119c0,18.808-51.722,33.959-113.371,33.959 s-108.147-14.106-111.804-31.869c0-0.522-0.522-1.567-0.522-2.09c0-18.808,50.155-34.482,112.327-34.482 C320.265,78.115,371.465,93.788,371.465,113.119z"></path>
                 <path Style="fill:#F4B844;" d="M263.318,323.666L263.318,323.666l-0.522-11.494l-1.045-47.02 c3.657,17.763,52.245,31.869,111.282,31.869s111.282-15.151,112.849-33.437h0.522v54.335h-1.045 c0,18.808-50.678,34.482-112.327,34.482C311.384,352.4,271.678,339.862,263.318,323.666z"></path> <path Style="fill:#E2A63B;" d="M188.608,358.67c14.106-13.061,25.078-29.78,30.824-48.065h2.612 c11.494,1.045,22.988,1.567,35.527,1.567h5.224v11.494l1.045,43.886h-5.747c-22.988,0.522-45.453-2.09-67.918-7.314L188.608,358.67z "></path> <path Style="fill:#F4B844;" d="M263.318,260.972v2.612l1.045,48.588h-5.225c-13.061,0-25.078-0.522-36.571-1.567h-2.612 c3.657-10.971,5.224-22.465,5.224-33.959c0-7.837-1.045-15.151-2.612-22.465h2.612c10.971,1.045,21.943,1.567,33.959,1.567 l4.702,2.612C263.318,259.404,263.318,260.449,263.318,260.972z"></path> <path Style="fill:#E2A63B;" d="M187.041,193.576c22.988,5.747,47.02,8.359,70.531,7.837c61.126,0,112.849-15.151,112.849-34.482 h1.045v61.649c-56.947,0-103.445,13.584-109.192,30.824l-4.702-2.612c-11.494,0-22.465-0.522-32.914-1.567h-2.612 c-4.702-24.033-17.241-45.453-36.049-61.127L187.041,193.576z"></path> <g>
                  <path Style="fill:#FEDB41;" d="M223.09,255.225L223.09,255.225c-5.224-24.033-18.286-45.975-37.094-62.171 c-11.494-10.449-25.078-17.763-39.706-21.943c-10.449-3.657-21.943-5.224-32.914-5.224C51.204,165.363,0.526,214.996,0.004,277.167 c-0.522,62.171,49.11,112.849,111.282,113.371c28.735,0,55.902-10.449,77.322-29.78c14.629-13.584,25.6-30.824,31.347-49.633 c3.657-10.971,5.224-21.943,5.224-33.437C225.18,270.376,223.09,262.539,223.09,255.225z"></path> <path Style="fill:#FEDB41;" d="M485.882,262.539v1.045c-1.567,18.286-52.245,33.437-112.849,33.437s-107.625-14.106-111.282-31.869 v-2.612c0-1.045,0-2.09,0.522-3.135c5.747-17.241,52.245-30.824,109.192-30.824h1.567 C434.682,228.58,485.882,243.731,485.882,262.539z"></path> </g> <path Style="fill:#E2A63B;" d="M113.376,264.106c-9.404,0-17.241-7.837-17.241-17.241c0-9.404,7.837-17.241,17.241-17.241 s17.241,7.837,17.241,17.241c0,5.747,4.702,10.449,10.449,10.449c5.747,0,10.449-4.702,10.449-10.449 c0-16.718-11.494-31.869-27.69-36.571v-4.18c0-5.747-4.702-10.449-10.449-10.449s-10.449,4.702-10.449,10.449v4.18 c-16.718,4.18-28.212,19.331-27.69,36.571c0,20.898,17.241,38.139,38.139,38.139c9.404,0,17.241,7.837,17.241,17.241 c0,9.404-7.837,17.241-17.241,17.241l0,0c-9.404,0-17.241-7.837-17.241-17.241c0-5.747-4.702-10.449-10.449-10.449 s-10.449,4.702-10.449,10.449c0,17.241,11.494,31.869,27.69,36.571v8.359c0,5.747,4.702,10.449,10.449,10.449 s10.449-4.702,10.449-10.449v-8.359c20.375-5.747,31.869-27.167,25.6-47.543C144.723,275.6,130.094,264.106,113.376,264.106z"></path></svg>
                </div>
				<span>$10.01</span>
				<button class="btn btn-main" type="button" onclick="PT_ReplenishBalance();">Transfer</button>
				<button class="btn btn-main" type="button" onclick="location.href = 'https://clikview.com/settings/balance/somac';">Withdrawl</button> */}

                                        <img src="https://clikview.com/upload/silver_token.png" Style="width:53%;" alt='' />
                                        <p Style=" font-weight: bold; font-size: 2rem; ">Silver Tokens</p>

                                    </div>
                                    <button data-toggle="collapse" data-target="#chartCollapse" aria-expanded="true" aria-controls="chartCollapse" Style="font-size: 1.2rem;font-style: italic;background-color: #04abf2;border-radius: 100px;margin-left: auto;padding: 0.4rem 1rem;display: block;">Chart</button>
                                </div>

                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="collapse in" id="chartCollapse" Style="border-radius: 5px;overflow: hidden;" aria-expanded="true">
                                        <div class="card card-body">
                                            {/* <!-- TradingView Widget BEGIN --> */}
                                            <div class="tradingview-widget-container">
                                                <div id="tradingview_47396" Style="height: 60rem;"><div id="tradingview_d724d-wrapper" Style="position: relative;box-sizing: content-box;width: 100%;height: 100%;margin: 0 auto !important;padding: 0 !important;font-family: -apple-system, BlinkMacSystemFont, 'Trebuchet MS', Roboto, Ubuntu, sans-serif;"><div Style="width: 100%;height: 100%;background: transparent;padding: 0 !important;">
                                                    <iframe title='iframeTitle' id="tradingview_d724d" src="https://www.tradingview.com/widgetembed/?frameElementId=tradingview_d724d&amp;symbol=TVC%3ASILVER&amp;interval=1&amp;range=12M&amp;hidesidetoolbar=0&amp;symboledit=1&amp;saveimage=1&amp;toolbarbg=f1f3f6&amp;watchlist=TVC%3ASILVER%1FTVC%3AGOLD%1FOANDA%3ASPX500USD%1FOANDA%3ANAS100USD%1FFX%3AGBPUSD%1FFX%3AEURUSD%1FFOREXCOM%3AXAUUSD%1FFOREXCOM%3AXAGUSD%1FBITSTAMP%3ABTCUSD%1FBITSTAMP%3AETHUSD&amp;studies=StochasticRSI%40tv-basicstudies&amp;theme=dark&amp;Style=1&amp;timezone=America%2FNew_York&amp;withdateranges=1&amp;showpopupbutton=1&amp;studies_overrides=%7B%7D&amp;overrides=%7B%7D&amp;enabled_features=%5B%5D&amp;disabled_features=%5B%5D&amp;showpopupbutton=1&amp;enablepublishing=true&amp;locale=en&amp;utm_source=clikview.com&amp;utm_medium=widget_new&amp;utm_campaign=chart&amp;utm_term=TVC%3ASILVER#%7B%22page-uri%22%3A%22clikview.com%2Fwallet%22%7D" Style="width: 100%; height: 100%; margin: 0 !important; padding: 0 !important;" frameborder="0" allowtransparency="true" scrolling="no" allowfullscreen=""></iframe></div></div></div>
                                                <div class="tradingview-widget-copyright" Style="width: 100%;"><a href="https://www.tradingview.com/symbols/TVC-SILVER/" rel="noopener" ><span class="blue-text">SILVER Chart</span></a> by TradingView</div>

                                            </div>
                                            {/* <!-- TradingView Widget END --> */}
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>


                        <div class="user-setting-panel pt_shadow" Style="margin-top:20px;">
                            <div class="yp_sett_header">
                                <h4><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M21,18V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5A2,2 0 0,1 5,3H19A2,2 0 0,1 21,5V6H12C10.89,6 10,6.9 10,8V16A2,2 0 0,0 12,18M12,16H22V8H12M16,13.5A1.5,1.5 0 0,1 14.5,12A1.5,1.5 0 0,1 16,10.5A1.5,1.5 0 0,1 17.5,12A1.5,1.5 0 0,1 16,13.5Z"></path></svg> CV Arbitrage Wallet (Coming soon)</h4>
                            </div>

                            <div class="row">
                                <div class="col-md-12">
                                    <div class="pt_invit_link green wallet">
                                        <div>CV Arbitrage Wallet <svg viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M21,18V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5A2,2 0 0,1 5,3H19A2,2 0 0,1 21,5V6H12C10.89,6 10,6.9 10,8V16A2,2 0 0,0 12,18M12,16H22V8H12M16,13.5A1.5,1.5 0 0,1 14.5,12A1.5,1.5 0 0,1 16,10.5A1.5,1.5 0 0,1 17.5,12A1.5,1.5 0 0,1 16,13.5Z"></path></svg></div>
                                        <span>$0.00</span>




                                        <button class="btn" Style="background-color: #ffffff33;" type="button" onclick="PT_Upgrade();">Replenish</button>

                                        <button class="btn" Style="background-color: #2981d578;" type="button" onclick="PT_Upgrade();">Lock</button>
                                        <button class="btn" Style="background-color: #ffffff33;" type="button" onclick="PT_Upgrade();">Withdraw</button>
                                    </div>
                                </div>

                            </div>
                            <br />



                        </div>


                        <div class="modal fade matdialog" id="upgrade_modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                            <div class="modal-dialog modal-sm" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h4>Please upgrade your package</h4>
                                    </div>
                                    <div class="modal-body">
                                        To use arbitrage, minimum requirement is basic package page. Please upgrade

                                    </div>

                                    <div class="modal-footer">
                                        <a href="https://clikview.com/go_pro" class="btn btn btn-success">Upgrade</a>
                                        <button type="button" class="matbtn btn btn-default" data-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="modal fade matdialog" id="2checkout_modal" role="dialog" data-keyboard="false" Style="overflow-y: auto;">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></span></button>
                                        <h4 class="modal-title">2Checkout</h4>
                                    </div>
                                    <form class="form form-horizontal" method="post" id="2checkout_form" action="#">
                                        <div class="modal-body twocheckout_modal">
                                            <div id="2checkout_alert"></div>
                                            <div class="clear"></div>
                                            <div class="sun_input col-md-6">
                                                <input id="card_name" type="text" class="form-control input-md" autocomplete="off" placeholder="Name" value="Soma Chakraborty" />
                                            </div>
                                            <div class="sun_input col-md-6">
                                                <input id="card_address" type="text" class="form-control input-md" autocomplete="off" placeholder="Address" />
                                            </div>
                                            <div class="sun_input col-md-6">
                                                <input id="card_city" type="text" class="form-control input-md" autocomplete="off" placeholder="City" />
                                            </div>
                                            <div class="sun_input col-md-6">
                                                <input id="card_state" type="text" class="form-control input-md" autocomplete="off" placeholder="State" />
                                            </div>
                                            <div class="sun_input col-md-6">
                                                <input id="card_zip" type="text" class="form-control input-md" autocomplete="off" placeholder="Zip" />
                                            </div>
                                            <div class="sun_input col-md-6">
                                                <select id="card_country" name="card_country" class="form-control"><option value="0">Select Country</option><option value="1">United States</option><option value="2">Canada</option><option value="3">Afghanistan</option><option value="4">Albania</option><option value="5">Algeria</option><option value="6">American Samoa</option><option value="7">Andorra</option><option value="8">Angola</option><option value="9">Anguilla</option><option value="10">Antarctica</option><option value="11">Antigua and/or Barbuda</option><option value="12">Argentina</option><option value="13">Armenia</option><option value="14">Aruba</option><option value="15">Australia</option><option value="16">Austria</option><option value="17">Azerbaijan</option><option value="18">Bahamas</option><option value="19">Bahrain</option><option value="20">Bangladesh</option><option value="21">Barbados</option><option value="22">Belarus</option><option value="23">Belgium</option><option value="24">Belize</option><option value="25">Benin</option><option value="26">Bermuda</option><option value="27">Bhutan</option><option value="28">Bolivia</option><option value="29">Bosnia and Herzegovina</option><option value="30">Botswana</option><option value="31">Bouvet Island</option><option value="32">Brazil</option><option value="34">Brunei Darussalam</option><option value="35">Bulgaria</option><option value="36">Burkina Faso</option><option value="37">Burundi</option><option value="38">Cambodia</option><option value="39">Cameroon</option><option value="40">Cape Verde</option><option value="41">Cayman Islands</option><option value="42">Central African Republic</option><option value="43">Chad</option><option value="44">Chile</option><option value="45">China</option><option value="46">Christmas Island</option><option value="47">Cocos (Keeling) Islands</option><option value="48">Colombia</option><option value="49">Comoros</option><option value="50">Congo</option><option value="51">Cook Islands</option><option value="52">Costa Rica</option><option value="53">Croatia (Hrvatska)</option><option value="54">Cuba</option><option value="55">Cyprus</option><option value="56">Czech Republic</option><option value="57">Denmark</option><option value="58">Djibouti</option><option value="59">Dominica</option><option value="60">Dominican Republic</option><option value="61">East Timor</option><option value="62">Ecuador</option><option value="63">Egypt</option><option value="64">El Salvador</option><option value="65">Equatorial Guinea</option><option value="66">Eritrea</option><option value="67">Estonia</option><option value="68">Ethiopia</option><option value="69">Falkland Islands (Malvinas)</option><option value="70">Faroe Islands</option><option value="71">Fiji</option><option value="72">Finland</option><option value="73">France</option><option value="74">France, Metropolitan</option><option value="75">French Guiana</option><option value="76">French Polynesia</option><option value="77">French Southern Territories</option><option value="78">Gabon</option><option value="79">Gambia</option><option value="80">Georgia</option><option value="81">Germany</option><option value="82">Ghana</option><option value="83">Gibraltar</option><option value="84">Greece</option><option value="85">Greenland</option><option value="86">Grenada</option><option value="87">Guadeloupe</option><option value="88">Guam</option><option value="89">Guatemala</option><option value="90">Guinea</option><option value="91">Guinea-Bissau</option><option value="92">Guyana</option><option value="93">Haiti</option><option value="94">Heard and Mc Donald Islands</option><option value="95">Honduras</option><option value="96">Hong Kong</option><option value="97">Hungary</option><option value="98">Iceland</option><option value="99" selected="">India</option><option value="100">Indonesia</option><option value="101">Iran (Islamic Republic of)</option><option value="102">Iraq</option><option value="103">Ireland</option><option value="104">Israel</option><option value="105">Italy</option><option value="106">Ivory Coast</option><option value="107">Jamaica</option><option value="108">Japan</option><option value="109">Jordan</option><option value="110">Kazakhstan</option><option value="111">Kenya</option><option value="112">Kiribati</option><option value="113">Korea, Democratic People's Republic of</option><option value="114">Korea, Republic of</option><option value="115">Kosovo</option><option value="116">Kuwait</option><option value="117">Kyrgyzstan</option><option value="118">Lao People's Democratic Republic</option><option value="119">Latvia</option><option value="120">Lebanon</option><option value="121">Lesotho</option><option value="122">Liberia</option><option value="123">Libyan Arab Jamahiriya</option><option value="124">Liechtenstein</option><option value="125">Lithuania</option><option value="126">Luxembourg</option><option value="127">Macau</option><option value="128">Macedonia</option><option value="129">Madagascar</option><option value="130">Malawi</option><option value="131">Malaysia</option><option value="132">Maldives</option><option value="133">Mali</option><option value="134">Malta</option><option value="135">Marshall Islands</option><option value="136">Martinique</option><option value="137">Mauritania</option><option value="138">Mauritius</option><option value="139">Mayotte</option><option value="140">Mexico</option><option value="141">Micronesia, Federated States of</option><option value="142">Moldova, Republic of</option><option value="143">Monaco</option><option value="144">Mongolia</option><option value="145">Montenegro</option><option value="146">Montserrat</option><option value="147">Morocco</option><option value="148">Mozambique</option><option value="149">Myanmar</option><option value="150">Namibia</option><option value="151">Nauru</option><option value="152">Nepal</option><option value="153">Netherlands</option><option value="154">Netherlands Antilles</option><option value="155">New Caledonia</option><option value="156">New Zealand</option><option value="157">Nicaragua</option><option value="158">Niger</option><option value="159">Nigeria</option><option value="160">Niue</option><option value="161">Norfork Island</option><option value="162">Northern Mariana Islands</option><option value="163">Norway</option><option value="164">Oman</option><option value="165">Pakistan</option><option value="166">Palau</option><option value="167">Panama</option><option value="168">Papua New Guinea</option><option value="169">Paraguay</option><option value="170">Peru</option><option value="171">Philippines</option><option value="172">Pitcairn</option><option value="173">Poland</option><option value="174">Portugal</option><option value="175">Puerto Rico</option><option value="176">Qatar</option><option value="177">Reunion</option><option value="178">Romania</option><option value="179">Russian Federation</option><option value="180">Rwanda</option><option value="181">Saint Kitts and Nevis</option><option value="182">Saint Lucia</option><option value="183">Saint Vincent and the Grenadines</option><option value="184">Samoa</option><option value="185">San Marino</option><option value="186">Sao Tome and Principe</option><option value="187">Saudi Arabia</option><option value="188">Senegal</option><option value="189">Serbia</option><option value="190">Seychelles</option><option value="191">Sierra Leone</option><option value="192">Singapore</option><option value="193">Slovakia</option><option value="194">Slovenia</option><option value="195">Solomon Islands</option><option value="196">Somalia</option><option value="197">South Africa</option><option value="198">South Georgia South Sandwich Islands</option><option value="199">Spain</option><option value="200">Sri Lanka</option><option value="201">St. Helena</option><option value="202">St. Pierre and Miquelon</option><option value="203">Sudan</option><option value="204">Suriname</option><option value="205">Svalbarn and Jan Mayen Islands</option><option value="206">Swaziland</option><option value="207">Sweden</option><option value="208">Switzerland</option><option value="209">Syrian Arab Republic</option><option value="210">Taiwan</option><option value="211">Tajikistan</option><option value="212">Tanzania, United Republic of</option><option value="213">Thailand</option><option value="214">Togo</option><option value="215">Tokelau</option><option value="216">Tonga</option><option value="217">Trinidad and Tobago</option><option value="218">Tunisia</option><option value="219">Turkey</option><option value="220">Turkmenistan</option><option value="221">Turks and Caicos Islands</option><option value="222">Tuvalu</option><option value="223">Uganda</option><option value="224">Ukraine</option><option value="225">United Arab Emirates</option><option value="226">United Kingdom</option><option value="227">United States minor outlying islands</option><option value="228">Uruguay</option><option value="229">Uzbekistan</option><option value="230">Vanuatu</option><option value="231">Vatican City State</option><option value="232">Venezuela</option><option value="233">Vietnam</option><option value="238">Yemen</option><option value="239">Yugoslavia</option><option value="240">Zaire</option><option value="241">Zambia</option><option value="242">Zimbabwe</option></select>
                                            </div>
                                            <div class="sun_input col-md-6">
                                                <input id="card_email" type="text" class="form-control input-md" autocomplete="off" placeholder="E-mail" value="somac089@gmail.com" />
                                            </div>
                                            <div class="sun_input col-md-6">
                                                <input id="card_phone" type="text" class="form-control input-md" autocomplete="off" placeholder="Phone" value="" />
                                            </div>
                                            <div class="clear"></div>
                                            <hr />
                                            <div class="row two_check_card">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20,8H4V6H20M20,18H4V12H20M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"></path></svg>
                                                <div class="sun_input col-xs-12">
                                                    <input id="_number_" type="text" class="form-control input-md" autocomplete="off" placeholder="Card Number" />
                                                    <input id="card_number" name="card_number" type="hidden" class="form-control input-md" autocomplete="off" />
                                                </div>
                                                <div class="sun_input col-xs-4">
                                                    <select id="card_month" name="card_month" type="text" class="form-control input-md" autocomplete="off" placeholder="month (01)">
                                                        <option value="01">01</option>
                                                        <option value="02">02</option>
                                                        <option value="03">03</option>
                                                        <option value="04">04</option>
                                                        <option value="05">05</option>
                                                        <option value="06">06</option>
                                                        <option value="07">07</option>
                                                        <option value="08">08</option>
                                                        <option value="09">09</option>
                                                        <option value="10">10</option>
                                                        <option value="11">11</option>
                                                        <option value="12">12</option>
                                                    </select>
                                                </div>
                                                <div class="sun_input col-xs-4 no-padding-both">
                                                    <select id="card_year" name="card_year" type="text" class="form-control input-md" autocomplete="off" placeholder="year (2019)">
                                                        <option value="2022">2022</option>
                                                        <option value="2023">2023</option>
                                                        <option value="2024">2024</option>
                                                        <option value="2025">2025</option>
                                                        <option value="2026">2026</option>
                                                        <option value="2027">2027</option>
                                                        <option value="2028">2028</option>
                                                        <option value="2029">2029</option>
                                                        <option value="2030">2030</option>
                                                        <option value="2031">2031</option>
                                                        <option value="2032">2032</option>
                                                        <option value="2033">2033</option>
                                                        <option value="2034">2034</option>
                                                        <option value="2035">2035</option>
                                                        <option value="2036">2036</option>
                                                        <option value="2037">2037</option>
                                                    </select>
                                                </div>
                                                <div class="sun_input col-xs-4">
                                                    <input id="card_cvc" name="card_cvc" type="text" class="form-control input-md" autocomplete="off" placeholder="CVC" maxlength="3" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');" />
                                                </div>
                                            </div>
                                            <div class="clear"></div>
                                            <input type="text" id="2checkout_type" class="hidden" name="type" />
                                            <input id="card_token" name="token" type="hidden" value="" />
                                        </div>
                                        <div class="clear"></div>
                                        <div class="modal-footer">
                                            <div class="ball-pulse"><div></div><div></div><div></div></div>
                                            <button type="button" class="btn btn-main" onclick="tokenRequest()" id="2checkout_btn">Purchase</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div class="modal fade matdialog" id="authorize_modal" role="dialog" data-keyboard="false" Style="overflow-y: auto;">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <h4 class="modal-title">Authorize.Net</h4>
                                    <form class="form form-horizontal" method="post" id="authorize_form" action="#">
                                        <div class="modal-body authorize_modal">
                                            <div id="authorize_alert"></div>
                                            <div class="clear"></div>
                                            <div class="row">
                                                <div class="input-field col s12">
                                                    <input id="authorize_number" type="text" class="form-control input-md" autocomplete="off" placeholder="Card Number" />
                                                </div>
                                                <div class="input-field col s4">
                                                    <select id="authorize_month" name="card_month" type="text" class="browser-default" autocomplete="off" placeholder="month (01)">
                                                        <option value="01">01</option>
                                                        <option value="02">02</option>
                                                        <option value="03">03</option>
                                                        <option value="04">04</option>
                                                        <option value="05">05</option>
                                                        <option value="06">06</option>
                                                        <option value="07">07</option>
                                                        <option value="08">08</option>
                                                        <option value="09">09</option>
                                                        <option value="10">10</option>
                                                        <option value="11">11</option>
                                                        <option value="12">12</option>
                                                    </select>
                                                </div>
                                                <div class="input-field col s4 no-padding-both">
                                                    <select id="authorize_year" name="card_year" type="text" class="browser-default" autocomplete="off" placeholder="year (2021)">
                                                        <option value="2022">2022</option>
                                                        <option value="2023">2023</option>
                                                        <option value="2024">2024</option>
                                                        <option value="2025">2025</option>
                                                        <option value="2026">2026</option>
                                                        <option value="2027">2027</option>
                                                        <option value="2028">2028</option>
                                                        <option value="2029">2029</option>
                                                        <option value="2030">2030</option>
                                                        <option value="2031">2031</option>
                                                        <option value="2032">2032</option>
                                                        <option value="2033">2033</option>
                                                        <option value="2034">2034</option>
                                                        <option value="2035">2035</option>
                                                        <option value="2036">2036</option>
                                                        <option value="2037">2037</option>
                                                    </select>
                                                </div>
                                                <div class="input-field col s4">
                                                    <input id="authorize_cvc" name="card_cvc" type="text" class="form-control input-md" autocomplete="off" placeholder="CVC" maxlength="3" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="clear"></div>
                                        <div class="modal-footer">
                                            <div class="ball-pulse"><div></div><div></div><div></div></div>
                                            <button type="button" class="btn btn-main" onclick="AuthorizeRequest()" id="authorize_btn">Purchase</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="modal fade matdialog" id="aamarpay_modal" tabindex="-1" role="dialog" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered" role="document">
                                <div class="modal-content add_money_modal add_address_modal">
                                    <h5 class="modal-title text-center">Aamarpay</h5>
                                    <div class="modal-body">
                                        <div id="aamarpay_alert" Style="    color: red;"></div>
                                        <form id="aamarpay_form" method="post">
                                            <div class="form-group">
                                                <input class="form-control shop_input" type="text" placeholder="Name" value="Soma Chakraborty" id="aamarpay_name" />
                                            </div>
                                            <div class="form-group">
                                                <input class="form-control shop_input" type="email" placeholder="E-mail" value="somac089@gmail.com" id="aamarpay_email" />
                                            </div>
                                            <div class="form-group">
                                                <input id="aamarpay_number" class="form-control shop_input" type="text" placeholder="Phone" value="" />
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-main" onclick="AamarpayRequest()" id="aamarpay_button">Purchase</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal fade" id="cvmainwallet" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <form class="replenish-wallet-form pt_wallet_forms hidden">
                                            <div class="form-group">
                                                <label>
                                                    <span>CV Main Wallet</span>
                                                </label>
                                            </div>
                                            <div class="form-group">
                                                <small>Type the amount you want to replenish</small>
                                                <input type="number" class="form-control" placeholder="05.00" value="05.00" />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <form class="replenish-gold-token-wallet-form pt_wallet_forms hidden">
                            <div class="form-group">
                                <label>
                                    <span>Buy Gold Token</span>
                                </label>
                            </div>
                            <div class="form-group">
                                <small>Replenish My Balance</small>

                                <label class="radio-label">
                                    <input type="radio" name="amount" value="100" checked="" />
                                    <span class="btn radio-btn">100 ClikView gold tokens ($100)</span>
                                </label>
                                <label class="radio-label">
                                    <input type="radio" name="amount" value="500" />
                                    <span class="btn radio-btn">500 ClikView gold tokens ($500)</span>
                                </label>
                                <label class="radio-label">
                                    <input type="radio" name="amount" value="1000" />
                                    <span class="btn radio-btn">1000 ClikView gold tokens ($1000)</span>
                                </label>
                            </div>
                        </form>

                        <form class="replenish-gold-token-balance-form pt_wallet_forms hidden">
                            <div class="form-group">
                                <label>
                                    <span>Buy Gold Token</span>
                                </label>
                            </div>
                            <div class="form-group">
                                <small>Replenish My Balance</small>

                                <label class="radio-label">
                                    <input type="radio" name="amount" value="100" checked="" />
                                    <span class="btn radio-btn">100 ClikView gold tokens ($100)</span>
                                </label>
                                <label class="radio-label">
                                    <input type="radio" name="amount" value="500" />
                                    <span class="btn radio-btn">500 ClikView gold tokens ($500)</span>
                                </label>
                                <label class="radio-label">
                                    <input type="radio" name="amount" value="1000" />
                                    <span class="btn radio-btn">1000 ClikView gold tokens ($1000)</span>
                                </label>
                            </div>
                        </form>

                        <form class="gift-gold-form pt_wallet_forms1 hidden">
                            <div class="form-group">
                                <label>
                                    <span>Gift gold tokens</span>
                                </label>
                            </div>
                            <div class="form-group">
                                <input type="email" class="form-control" name="gift_email" placeholder="Enter email" value="" />
                            </div>
                            <div class="form-group">
                                <input type="number" class="form-control" name="no_of_gold_token" placeholder="No of gold token" value="" />
                            </div>
                        </form>

                        <form class="replenish-balance-form pt_wallet_forms hidden">
                            <div class="form-group">
                                <label>
                                    <span>MY BALANCE</span>
                                </label>
                            </div>
                            <div class="form-group">
                                <small>Move your balance to your wallet so you can use it to create ads and use other features.</small>
                                <input type="number" class="form-control" placeholder="00.00" />
                            </div>
                        </form>

                        <form class="transfer-balance-form pt_wallet_forms hidden">
                            <div class="form-group">
                                <label>
                                    <span>Transfer Balance</span>
                                </label>
                            </div>
                            <div class="form-group">
                                <small>Move your wallet to your balance so you can use it to create ads and use other features.</small>
                                <input type="number" class="form-control" placeholder="00.00" />
                            </div>
                        </form>

                        <form class="replenish-arbitrage-wallet-form pt_wallet_forms hidden">
                            <div class="form-group">
                                <label>
                                    <span>CV Main Wallet</span>
                                </label>
                            </div>
                            <div class="form-group">
                                <small>Replenish My Balance</small>
                                <input type="number" class="form-control" placeholder="00.00" />
                            </div>
                        </form>

                        <form class="lock-arbitrage-wallet-form pt_wallet_forms hidden">
                            <div class="form-group">
                                <label>
                                    <span>Lock Arbitrage Wallet</span>
                                </label>
                            </div>
                            <div class="form-group">
                                <h2>$0.00</h2>
                                <p>Are you sure want to lock $0.00</p>
                                <small Style="margin-top: 20px;">Note : Please note this amount will be locked till 2023-01-08. Amount can not be withdrawn / transfered during lock period. </small>

                            </div>
                        </form>

                        <form class="withdrawl-arbitrage-wallet-form pt_wallet_forms hidden">
                            <div class="form-group">
                                <label>
                                    <span>Withdraw</span>
                                </label>
                            </div>
                            <div class="form-group">
                                <small>Move your Arbitrage amount to either your wallet or balance so you can use it to create ads and use other features or for Withdraw.</small>
                                <small>Amount</small>
                                <input type="number" class="form-control" placeholder="00.00" id="withdrawAmount" />
                            </div>


                            <div class="form-group">
                                <small>Move to</small>
                                <select class="form-control" name="withdrawOption" id="withdrawOption">
                                    <option value="1">Wallet</option>
                                    <option value="2">Balance</option>
                                </select>
                            </div>
                        </form>

                        <form class="convert-gold-token-form pt_wallet_forms hidden">
                            <div class="form-group">
                                <label>
                                    <span>Convert To Gold Token</span>
                                </label>
                            </div>
                            <div class="form-group">
                                <small id="token_text"></small>
                            </div>
                        </form>

                        <div class="modal fade matdialog" id="bank_transfer_modal" role="dialog" data-keyboard="false" Style="overflow-y: auto;">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></span></button>
                                        <h4 class="modal-title">Bank transfer</h4>
                                    </div>
                                    <form class="form form-horizontal" method="post" id="bank_transfer_form" action="#">
                                        <div id="blog-alert"></div>
                                        <div class="modal-body dt_bank_trans_modal">


                                            <div class="bank_info"><div class="dt_settings_header bg_gradient"><div class="dt_settings_circle-1"></div><div class="dt_settings_circle-2"></div><div class="bank_info_innr"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M11.5,1L2,6V8H21V6M16,10V17H19V10M2,22H21V19H2M10,10V17H13V10M4,10V17H7V10H4Z"></path></svg><h4 class="bank_name">Garanti Bank</h4><div class="row"><div class="col col-md-12"><div class="bank_account"><p>4796824372433055</p><span class="help-block">Account number / IBAN</span></div></div><div class="col col-md-12"><div class="bank_account_holder"><p>Antoian Kordiyal</p><span class="help-block">Account name</span></div></div><div class="col col-md-6"><div class="bank_account_code"><p>TGBATRISXXX</p><span class="help-block">Routing code</span></div></div><div class="col col-md-6"><div class="bank_account_country"><p>United States</p><span class="help-block">Country</span></div></div></div></div></div></div>
                                            <div class="dt_user_profile hide_alert_info_bank_trans">
                                                <span class="valign-wrapper">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"></path></svg> Note:
                                                </span>
                                                <ul class="dt_prof_vrfy">
                                                    <li>In order to confirm the bank transfer, you will need to upload a receipt or take a screenshot of your transfer within 1 day from your payment date. If a bank transfer is made but no receipt is uploaded within this period, your order will be cancelled. We will verify and confirm your receipt within 3 working days from the date you upload it.</li>
                                                </ul>
                                            </div>
                                            <p class="dt_bank_trans_upl_rec"><a href="/home2" onclick="$('#bank_transfer_modal').addClass('up_rec_active'); return false"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M13.5,16V19H10.5V16H8L12,12L16,16H13.5M13,9V3.5L18.5,9H13Z"></path></svg> Upload</a></p>
                                            <div class="upload_bank_receipts">
                                                <div onclick="document.getElementById('thumbnail').click(); return false">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M13.5,16V19H10.5V16H8L12,12L16,16H13.5M13,9V3.5L18.5,9H13Z"></path></svg>
                                                    <p>Browse To Upload</p>
                                                    <img id="receipt_img_preview" src="" alt='' />
                                                </div>
                                            </div>
                                            <input type="file" class="hidden" id="thumbnail" name="thumbnail" accept="image/*" />
                                            <input name="image" type="file" id="upload" class="hidden" />
                                            <input name="type" type="hidden" id="bank_transfer_type" class="hidden" />
                                            <input name="description" type="hidden" id="bank_transfer_des" class="hidden" />
                                            <input name="amount" type="hidden" id="bank_transfer_amount" class="hidden" />
                                            <input type="reset" id="configreset" value="Reset" class="hidden" />
                                        </div>
                                        <div class="modal-footer">
                                            <div class="ball-pulse"><div></div><div></div><div></div></div>
                                            <button type="submit" class="btn btn-main">Publish</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div class="modal fade matdialog" id="token_convert" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                            <div class="modal-dialog modal-sm" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                    </div>
                                    <div class="modal-body">
                                        You don't have sufficient silver token to convert.

                                    </div>

                                    <div class="modal-footer">
                                        <button type="button" class="matbtn btn btn-default" data-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <input type="hidden" id="main-url" value="https://clikview.com%2Fwallet" />
                    <div class="ads-placment" id="footer_ad_"></div>
                </div>
                
            </div>
        </div>
    )
}

export default CvMainWallet