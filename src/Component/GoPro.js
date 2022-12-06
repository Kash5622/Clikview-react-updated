import React from 'react'
import MobileSearch from './MobileSearch';

function GoPro(props) {
    const { searchOpen, expandNav } = props;
    return (
        <div>
            <div className={expandNav ? "main-container shrinkWidth bodyfixed" : "main-container expandWidth"} Style="z-index:-1">
            <div id="main-container" className="main-content  container">
            {searchOpen ? <MobileSearch /> : ""}
                    <div className="ads-placment" id="header_ad_"></div>
                    <div className="announcement-renderer">

                    </div>
                    <div id="container_content"><input type="hidden" id="json-data" value="{&quot;title&quot;:&quot;Go Pro - ClikView - Real Content For You&quot;,&quot;description&quot;:&quot;Clikview is a Video Sharing Platform, Clikview is the best way to start your own video sharing channel! Real Content for you.&quot;,&quot;keyword&quot;:&quot;clikview,video sharing, real content&quot;,&quot;page&quot;:&quot;go_pro&quot;,&quot;url&quot;:&quot;https:\/\/clikview.com\/go_pro&quot;,&quot;is_movie&quot;:false}" />

                        <div className="pt_go_pro">

                            <div className="go-pro-head">
                                <div>
                                    <img className="logo" src="https://clikview.com/themes/youplay/img/logo-light.png" alt="ClikView - Real Content For You" />
                                    <span Style="text-transform:uppercase;">FREE</span></div>
                                <h4>Discover more features with ClikView Pro package!</h4>
                                <img className="icon" src="https://clikview.com/themes/youplay/img/pro.png" alt='' />
                            </div>
                            <div className="go-pro-body">
                                <div className="go-pro-packages">
                                    {/* <!--<form
                                        Style="display: flex; justify-content: end; align-items: center; margin-right: 2rem; background-color: #043d5ae8; padding: 1rem 4rem; border-radius: 50px; width: 25rem; justify-self: end;">
                                        <label className="toggler toggler--is-active" id="filt-monthly">Monthly</label>
                                        <label className="switcher">
                                            <input className="package-duration" type="checkbox" name="sub" id="package-duration">
                                                <span className="slider round"></span>
                                        </label>
                                        <label className="toggler toggler--is-active" id="filt-monthly">Yearly</label>
                                    </form>--> */}
                                    <div className="content go-pro-pkg bg-active">
                                        <div>
                                            <div className="left-block free-bg">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                    <path fill="currentColor" d="M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z"></path>
                                                </svg>
                                                <span className="go-pro-pkg-price">Free</span>
                                                <p className="active-plan">
                                                </p>
                                            </div>
                                            <div className="go-pro-pkg-features">
                                                <div className="go-pro-features-list">

                                                    <p>
                                                        Upload up to
                                                        10GB															</p>
                                                    <p>Videos ads will show up</p>
                                                    <p>Not featured videos</p>
                                                    <p>No verified badge</p>
                                                </div>
                                            </div>
                                            <div className="right-block">
                                                <h5 className="package-price"><span>$</span><b>0</b></h5>
                                                <div className="go-pro-pkg-purchase">
                                                    <button className="btn btn-main free-bg" onclick="stayFree()">
                                                        Stay Free
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div Style="text-align:center;">
                                        <h1>Choose a package that suits you</h1>
                                        <p>Get 2 months free with the yearly package</p>
                                    </div>
                                    <form Style="display: flex; justify-content: end; align-items: center; margin-right: 2rem; background-color: #043d5ae8; padding: 1rem 4rem; border: 2px solid gold; border-radius: 50px; width: 25rem; justify-self: center;">
                                        <label className="toggler toggler--is-active" id="filt-monthly">Monthly</label>
                                        <label className="switcher">
                                            <input className="package-duration" type="checkbox" name="sub" id="package-duration" value="0" />
                                            <span className="slider round"></span>
                                        </label>
                                        <label className="toggler toggler--is-active" id="filt-monthly">Yearly</label>
                                    </form>


                                    <div className="content go-pro-pkg ">
                                        <div>
                                            <div className="left-block pro-bg">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" Style="background: #BF40BF;" viewBox="0 0 24 24">
                                                    <path fill-rule="evenodd" fill="currentColor" d="M12 1.25C7.71979 1.25 4.25 4.71979 4.25 9C4.25 11.4799 5.41481 13.6878 7.22718 15.1064L6.25754 21.8939C6.21967 22.159 6.32601 22.4242 6.53656 22.5897C6.74711 22.7552 7.02991 22.7958 7.27854 22.6964L12 20.8078L16.7215 22.6964C16.9701 22.7958 17.2529 22.7552 17.4634 22.5897C17.674 22.4242 17.7803 22.159 17.7425 21.8939L16.7728 15.1064C18.5852 13.6878 19.75 11.4799 19.75 9C19.75 4.71979 16.2802 1.25 12 1.25ZM15.3817 15.9752C14.3598 16.4716 13.2124 16.75 12 16.75C10.7876 16.75 9.64021 16.4716 8.61829 15.9752L7.92592 20.8219L11.7215 19.3036C11.9003 19.2321 12.0997 19.2321 12.2785 19.3036L16.0741 20.8219L15.3817 15.9752ZM5.75 9C5.75 5.54822 8.54822 2.75 12 2.75C15.4518 2.75 18.25 5.54822 18.25 9C18.25 12.4518 15.4518 15.25 12 15.25C8.54822 15.25 5.75 12.4518 5.75 9Z"></path>
                                                </svg>
                                                <span className="go-pro-pkg-price">
                                                    Basic
                                                    <p className="active-plan">
                                                    </p>
                                                </span>
                                            </div>
                                            <div className="go-pro-pkg-features">
                                                <div className="go-pro-features-list" Style="display: none;">
                                                    <p>
                                                        2 Featured Videos
                                                    </p>
                                                    <p>
                                                        1 Products (eCommerce)
                                                    </p>
                                                    <p>
                                                        1 x Go Live
                                                    </p>
                                                    <p>Access to Arbitrage Wallet</p>
                                                    <p>Create Auction</p>
                                                    {/* <!--	<p>Up to 3 people (Audio Chat)</p>-->
                                                    <!--	<p>30 min video calls (max 5 people) </p>--> */}
                                                    <p>
                                                        Upload up to
                                                        10GB															</p>
                                                    <p>No ads will show up</p>
                                                    {/* <!--<p>Featured videos</p>--> */}
                                                    <p>Verified badge</p>
                                                    <p>Sell videos at any price</p>
                                                </div>
                                                <div className="go-pro-features-list">
                                                    <p> 								2 Spotlight Videos 							</p> 							<p> 								Sell 4 Products 							</p> 							<p> 								1 x Go Live per month							</p> 							<p>Access to Arbitrage Wallet</p> 							<p>Create Auction</p> 							 														<p> 								Upload up to 15GB per month						</p> 							<p>No ads will show up</p> 													<p>Verified badge</p> 	<p>Share Feature Ideas</p> <p>Withdraw Affiliate Commissions</p> 						 							<p>Sell videos at any price</p> 																					</div>
                                            </div>
                                            <div className="right-block">
                                                <h5 className="package-price monthly"><span>$</span><b>
                                                    19.95 /mo
                                                </b></h5>
                                                <input type="hidden" name="monthly_package" id="monthly_package" value="19.95" />
                                                <h5 className="package-price annual" Style="display: none;"><span>$</span><b>
                                                    199.50 /yr
                                                </b></h5>
                                                <input type="hidden" name="annual_package" id="annual_package" value="199.50" />
                                                <div className="go-pro-pkg-purchase">
                                                    {/* <!--<button className="btn btn-main pro-bg monthly" Style="background: #BF40BF;"
                                                                onclick="PayUsingWalletV2('basic','show',0,'19.95');">
                                                                Upgrade
                                                            </button>
                                                            <button className="btn btn-main pro-bg annual"
                                                                Style="display: none; background: #BF40BF;"
                                                                onclick="PayUsingWalletV2('basic','show',0,'199.50');">
                                                                Upgrade
                                                            </button>--> */}

                                                    <button className="btn btn-main pro-bg monthly" Style="background: #BF40BF;" onclick="PayWithV2('19.95','basic','monthly');">
                                                        Upgrade
                                                    </button>
                                                    <button className="btn btn-main pro-bg annual" Style="display: none; background: #BF40BF;" onclick="PayWithV2('199.50','basic','annual');">
                                                        Upgrade
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="content go-pro-pkg ">
                                        <div>
                                            <div className="left-block pro-bg">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" Style="background: #cf8402;" viewBox="0 0 24 24">
                                                    <path fill-rule="evenodd" fill="currentColor" d="M12 1.25C7.71979 1.25 4.25 4.71979 4.25 9C4.25 11.4799 5.41481 13.6878 7.22718 15.1064L6.25754 21.8939C6.21967 22.159 6.32601 22.4242 6.53656 22.5897C6.74711 22.7552 7.02991 22.7958 7.27854 22.6964L12 20.8078L16.7215 22.6964C16.9701 22.7958 17.2529 22.7552 17.4634 22.5897C17.674 22.4242 17.7803 22.159 17.7425 21.8939L16.7728 15.1064C18.5852 13.6878 19.75 11.4799 19.75 9C19.75 4.71979 16.2802 1.25 12 1.25ZM15.3817 15.9752C14.3598 16.4716 13.2124 16.75 12 16.75C10.7876 16.75 9.64021 16.4716 8.61829 15.9752L7.92592 20.8219L11.7215 19.3036C11.9003 19.2321 12.0997 19.2321 12.2785 19.3036L16.0741 20.8219L15.3817 15.9752ZM5.75 9C5.75 5.54822 8.54822 2.75 12 2.75C15.4518 2.75 18.25 5.54822 18.25 9C18.25 12.4518 15.4518 15.25 12 15.25C8.54822 15.25 5.75 12.4518 5.75 9Z"></path>
                                                </svg>
                                                <span className="go-pro-pkg-price">
                                                    Advanced
                                                    <p className="active-plan">
                                                    </p>
                                                </span>
                                            </div>
                                            <div className="go-pro-pkg-features">
                                                <div className="go-pro-features-list" Style="display: none;">
                                                    <p>
                                                        10 Featured Videos
                                                    </p>
                                                    <p>
                                                        10 Products (eCommerce)
                                                    </p>
                                                    <p>
                                                        4 x Go Live
                                                    </p>
                                                    <p>Access to Arbitrage Wallet</p>
                                                    <p>Create Auction</p>
                                                    {/* <!--	<p>Up to 20 people (Audio Chat)</p>-->
                                                        <!--	<p>Unlimited video calls (1000) </p>--> */}
                                                    <p>
                                                        Upload up to
                                                        10GB															</p>
                                                    <p>No ads will show up</p>
                                                    {/* <!--<p>Featured videos</p>--> */}
                                                    <p>Verified badge</p>
                                                    <p>Sell videos at any price</p>
                                                </div>
                                                <div className="go-pro-features-list">
                                                    <p> 								5 Spotlight Videos 							</p> 							<p> 								Sell 8 Products 							</p> 							<p> 								2 x Go Live per month							</p> 							<p>Access to Arbitrage Wallet</p> 							<p>Create Auction</p> 							 														<p> 								Upload up to 20GB per month						</p> 							<p>No ads will show up</p> 													<p>Verified badge</p> <p>Share Feature Ideas</p> <p>Withdraw Affiliate Commissions</p> 							 							<p>Sell videos at any price</p> 																	</div>
                                            </div>
                                            <div className="right-block">
                                                <h5 className="package-price monthly"><span>$</span><b>
                                                    39.95 /mo
                                                </b></h5>
                                                <input type="hidden" name="monthly_package" id="monthly_package" value="39.95" />
                                                <h5 className="package-price annual" Style="display: none;"><span>$</span><b>
                                                    399.50 /yr
                                                </b></h5>
                                                <input type="hidden" name="annual_package" id="annual_package" value="399.50" />
                                                <div className="go-pro-pkg-purchase">
                                                    {/* <!--<button className="btn btn-main pro-bg monthly" Style="background: #cf8402;"
                                                                    onclick="PayUsingWalletV2('advanced','show',0,'39.95');">
                                                                    Upgrade
                                                                </button>
                                                                <button className="btn btn-main pro-bg annual"
                                                                    Style="display: none; background: #cf8402;"
                                                                    onclick="PayUsingWalletV2('advanced','show',0,'399.50');">
                                                                    Upgrade
                                                                </button>--> */}

                                                    <button className="btn btn-main pro-bg monthly" Style="background: #cf8402;" onclick="PayWithV2('39.95','advanced','monthly');">
                                                        Upgrade
                                                    </button>
                                                    <button className="btn btn-main pro-bg annual" Style="display: none; background: #cf8402;" onclick="PayWithV2('399.50','advanced','annual');">
                                                        Upgrade
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="content go-pro-pkg ">
                                        <div>
                                            <div className="left-block pro-bg">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" Style="background: #FF0000;" viewBox="0 0 24 24">
                                                    <path fill-rule="evenodd" fill="currentColor" d="M12 1.25C7.71979 1.25 4.25 4.71979 4.25 9C4.25 11.4799 5.41481 13.6878 7.22718 15.1064L6.25754 21.8939C6.21967 22.159 6.32601 22.4242 6.53656 22.5897C6.74711 22.7552 7.02991 22.7958 7.27854 22.6964L12 20.8078L16.7215 22.6964C16.9701 22.7958 17.2529 22.7552 17.4634 22.5897C17.674 22.4242 17.7803 22.159 17.7425 21.8939L16.7728 15.1064C18.5852 13.6878 19.75 11.4799 19.75 9C19.75 4.71979 16.2802 1.25 12 1.25ZM15.3817 15.9752C14.3598 16.4716 13.2124 16.75 12 16.75C10.7876 16.75 9.64021 16.4716 8.61829 15.9752L7.92592 20.8219L11.7215 19.3036C11.9003 19.2321 12.0997 19.2321 12.2785 19.3036L16.0741 20.8219L15.3817 15.9752ZM5.75 9C5.75 5.54822 8.54822 2.75 12 2.75C15.4518 2.75 18.25 5.54822 18.25 9C18.25 12.4518 15.4518 15.25 12 15.25C8.54822 15.25 5.75 12.4518 5.75 9Z"></path>
                                                </svg>
                                                <span className="go-pro-pkg-price">
                                                    Professional
                                                    <p className="active-plan">
                                                    </p>
                                                </span>
                                            </div>
                                            <div className="go-pro-pkg-features">
                                                <div className="go-pro-features-list" Style="display: none;">
                                                    <p>
                                                        5 Featured Videos
                                                    </p>
                                                    <p>
                                                        3 Products (eCommerce)
                                                    </p>
                                                    <p>
                                                        2 x Go Live
                                                    </p>
                                                    <p>Access to Arbitrage Wallet</p>
                                                    <p>Create Auction</p>
                                                    {/* <!--	<p>Up to 10 people (Audio Chat)</p>-->
                                                            <!--	<p>60 min video calls (max 200 people) </p>--> */}
                                                    <p>
                                                        Upload up to
                                                        10GB															</p>
                                                    <p>No ads will show up</p>
                                                    {/* <!--<p>Featured videos</p>--> */}
                                                    <p>Verified badge</p>
                                                    <p>Sell videos at any price</p>
                                                </div>
                                                <div className="go-pro-features-list">
                                                    <p>10 Featured Videos </p> 							<p> 								Sell 20 Products 							</p> 							<p> 								4 x Go Live per month 							</p> 							<p>Access to Arbitrage Wallet</p> 							<p>Create Auction</p> 							 														<p> 								Upload up to 50GB						</p> 							<p>No ads will show up</p> 													<p>Verified badge</p><p>Share Feature Ideas</p> 	<p>Withdraw Affiliate Commissions</p> 						 							<p>Sell videos at any price</p> 																	</div>
                                            </div>
                                            <div className="right-block">
                                                <h5 className="package-price monthly"><span>$</span><b>
                                                    59.95 /mo
                                                </b></h5>
                                                <input type="hidden" name="monthly_package" id="monthly_package" value="59.95" />
                                                <h5 className="package-price annual" Style="display: none;"><span>$</span><b>
                                                    599.50 /yr
                                                </b></h5>
                                                <input type="hidden" name="annual_package" id="annual_package" value="599.50" />
                                                <div className="go-pro-pkg-purchase">
                                                    {/* <!--<button className="btn btn-main pro-bg monthly" Style="background: #FF0000;"
                                                                        onclick="PayUsingWalletV2('professional','show',0,'59.95');">
                                                                        Upgrade
                                                                    </button>
                                                                    <button className="btn btn-main pro-bg annual"
                                                                        Style="display: none; background: #FF0000;"
                                                                        onclick="PayUsingWalletV2('professional','show',0,'599.50');">
                                                                        Upgrade
                                                                    </button>--> */}

                                                    <button className="btn btn-main pro-bg monthly" Style="background: #FF0000;" onclick="PayWithV2('59.95','professional','monthly');">
                                                        Upgrade
                                                    </button>
                                                    <button className="btn btn-main pro-bg annual" Style="display: none; background: #FF0000;" onclick="PayWithV2('599.50','professional','annual');">
                                                        Upgrade
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- lifetime offer--> */}
                                    <div className="content go-pro-pkg live-active">
                                        <div>
                                            <div className="left-block free-bg">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                    <path fill="currentColor" d="M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z"></path>
                                                </svg>
                                                <span className="go-pro-pkg-price">Life Time</span>
                                                <p className="active-plan">
                                                </p>
                                            </div>
                                            <div className="go-pro-pkg-features">
                                                <div className="" Style="font-size: 16px;">


                                                    Everything in <span Style="color: #d48103 !important; font-weight: 700;">Advanced Package</span> forever! no hidden charges.


                                                </div>
                                            </div>
                                            <div className="right-block">
                                                <h5 className="package-price" id="upgrade_amount1"><span>$</span><b>2,997.00</b></h5>
                                                <input type="hidden" className="form-control" id="upgrade_amount" value="2997.00" />
                                                <div className="go-pro-pkg-purchase">
                                                    {/* <!--<button className="btn btn-main free-bg" onclick="PayUsingWalletV2('LIFE','show',0,'2997.00')">
                                                                        Upgrade
                                                                    </button>--> */}
                                                    <button className="btn btn-main free-bg" onclick="payupgradewallet();">
                                                        Upgrade
                                                    </button>
                                                    <button id="payButton" Style="display: none;">Pay</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!--<div className="content go-pro-pkg">
                                                    <div>
                                                        <div className="left-block pro-bg">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill-rule="evenodd" fill="currentColor" d="M12 1.25C7.71979 1.25 4.25 4.71979 4.25 9C4.25 11.4799 5.41481 13.6878 7.22718 15.1064L6.25754 21.8939C6.21967 22.159 6.32601 22.4242 6.53656 22.5897C6.74711 22.7552 7.02991 22.7958 7.27854 22.6964L12 20.8078L16.7215 22.6964C16.9701 22.7958 17.2529 22.7552 17.4634 22.5897C17.674 22.4242 17.7803 22.159 17.7425 21.8939L16.7728 15.1064C18.5852 13.6878 19.75 11.4799 19.75 9C19.75 4.71979 16.2802 1.25 12 1.25ZM15.3817 15.9752C14.3598 16.4716 13.2124 16.75 12 16.75C10.7876 16.75 9.64021 16.4716 8.61829 15.9752L7.92592 20.8219L11.7215 19.3036C11.9003 19.2321 12.0997 19.2321 12.2785 19.3036L16.0741 20.8219L15.3817 15.9752ZM5.75 9C5.75 5.54822 8.54822 2.75 12 2.75C15.4518 2.75 18.25 5.54822 18.25 9C18.25 12.4518 15.4518 15.25 12 15.25C8.54822 15.25 5.75 12.4518 5.75 9Z" ></path></svg>
                                                            <span className="go-pro-pkg-price">Pro Member</span>
                                                        </div>
                                                        <div className="go-pro-pkg-features">
                                                            <div className="go-pro-features-list">
                                                                <p>  Upload up to 10GB </p>
                                                                <p>No ads will show up</p>
                                                                <p>Featured videos</p>
                                                                <p>Verified badge</p>
                                                                <p>Sell videos at any price</p>
                                                            </div>
                                                        </div>
                                                        <div className="right-block">
                                                            <h5 className="package-price"><span>$</span><b>39</b></h5>
                                                            <div className="go-pro-pkg-purchase">
                                                                <button className="btn btn-main pro-bg" onclick="PayUsingWallet('pro','show');">
                                                                    Upgrade
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>--> */}

                                </div>
                            </div>
                        </div>






                        <form className="go_pro_form pt_wallet_forms d-none">
                            <div className="form-group">
                                <label>
                                    <span>Upgrade to Life Time</span>
                                </label>
                            </div>
                            <div className="form-group">
                                <small>You have made a brilliant choice</small>
                                {/* <!--<span id="life_amount1"></span>--> */}
                                <input type="hidden" name="amount" className="form-control" id="life_amount" value="" disabled="" />
                            </div>
                        </form>

                        <form className="go_pro_payment_form pt_wallet_forms d-none">
                            <input type="hidden" name="pkg_val" id="pkg_val" />
                            <input type="hidden" name="pkg_id" id="pkg_id" />
                            <div className="form-group">
                                <label>
                                    <span id="upgrade_plan_name"></span>
                                </label>
                            </div>
                            <div className="form-group" id="paymentProcess">
                                <small id="plan_text"></small>
                                <label className="radio-label" Style="display:none">
                                    <input type="radio" name="upgrade_plan" id="upgrade_plan_wallet" value="1" />
                                    <span className="btn radio-btn">Purchase from Wallet</span>
                                </label>
                                <label className="radio-label">
                                    <input type="radio" name="upgrade_plan" id="upgrade_plan_card" value="2" checked="" />
                                    <span className="btn radio-btn">Purchase with Credit / Debit card</span>
                                </label>
                            </div>
                            <div className="form-group" id="insufficientWallet" Style="display:none;">
                                {/* <div className="wallet_empty_state">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve"> <path Style="fill:#455A64;" d="M394.667,73.532H117.333C52.561,73.603,0.071,126.093,0,190.865v21.333 c0,5.891,4.776,10.667,10.667,10.667h490.667c5.891,0,10.667-4.776,10.667-10.667v-21.333 C511.929,126.093,459.439,73.603,394.667,73.532z"></path> <path Style="fill:#4CAF50;" d="M436.203,143.42L391.04,53.095C372.599,16.21,327.75,1.259,290.865,19.699 c-0.669,0.334-1.332,0.679-1.991,1.033L69.611,138.791c-5.184,2.798-7.118,9.269-4.32,14.453c1.86,3.447,5.46,5.596,9.376,5.6h352 c5.891,0,10.667-4.776,10.666-10.667c0-1.659-0.387-3.295-1.13-4.778V143.42z"></path> <path Style="fill:#607D8B;" d="M74.667,137.532h362.667c41.237,0,74.667,33.429,74.667,74.667v213.333 c0,41.237-33.429,74.667-74.667,74.667H74.667C33.429,500.199,0,466.769,0,425.532V212.199C0,170.961,33.429,137.532,74.667,137.532 z"></path> <path Style="fill:#455A64;" d="M501.333,244.199H416c-41.237,0.022-74.649,33.468-74.628,74.706 c0.022,41.207,33.421,74.606,74.628,74.628h85.333c5.891,0,10.667-4.776,10.667-10.667v-128 C512,248.974,507.224,244.199,501.333,244.199z"></path> <circle Style="fill:#90A4AE;" cx="416" cy="318.865" r="32"></circle></svg>
                                    You don't have enough balance to purchase, please top up your wallet.
                                    <a href="https://clikview.com/wallet" onclick="SetPageCookie(''+type+'',''+id+'')" className="btn btn-main">CV Main Wallet
                                    </a>
                                </div> */}
                            </div>
                        </form>

                        <form className="replenish-wallet-form pt_wallet_forms d-none">
                            <div className="form-group">
                                <label>
                                    <span>Top Up CV Main Wallet</span>
                                    <small>Your Current Balance is </small>
                                </label>
                            </div>
                            <div className="form-group">
                                <small>Type the amount you want to replenish</small>
                                <input type="number" className="form-control" id="wallet_balance" placeholder="05.00" value="05.00" />
                            </div>
                        </form>


                    </div>
                    <input type="hidden" id="main-url" value="https://clikview.com%2F" />
                    <div className="ads-placment" id="footer_ad_"></div>
                </div>
            </div>
        </div>
    )
}

export default GoPro