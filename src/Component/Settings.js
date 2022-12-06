import {React,useState} from 'react'
import AffiliateLink from './SettingComponent/AffiliateLink';
import Avatar from './SettingComponent/Avatar';
import Balance from './SettingComponent/Balance';
import BlockedUser from './SettingComponent/BlockedUser';
import ClickviewSliverToken from './SettingComponent/ClickviewSliverToken';
import DeleteAccount from './SettingComponent/DeleteAccount';
import GeneralSettings from './SettingComponent/GeneralSettings';
import ManageSession from './SettingComponent/ManageSession';
import Monitization from './SettingComponent/Monitization';
import MyInformation from './SettingComponent/MyInformation';
import Password from './SettingComponent/Password';
import Profile from './SettingComponent/Profile';
import TwoFactorAuthentication from './SettingComponent/TwoFactorAuthentication';
import Verification from './SettingComponent/Verification';

function Settings() {
    const [settingSection, setSettingsSection] = useState("generalsetting")
    let settingComponent;
    if(settingSection==="generalsetting"){
        settingComponent=<GeneralSettings/>
    }
    else if(settingSection==="profile"){
        settingComponent=<Profile/>
    }
    else if(settingSection==="monitization"){
        settingComponent=<Monitization/>
    }
    else if(settingSection==="password"){
        settingComponent=<Password/>
    }
    else if(settingSection==="balance"){
        settingComponent=<Balance/>
    }
    else if(settingSection==="verification"){
        settingComponent=<Verification/>
    }
    else if(settingSection==="clikviewsilvertoken"){
        settingComponent=<ClickviewSliverToken/>
    }
    else if(settingSection==="twofactorauthentication"){
        settingComponent=<TwoFactorAuthentication/>
    }
    else if(settingSection==="blockeduser"){
        settingComponent=<BlockedUser/>
    }
    else if(settingSection==="affiliatelink"){
        settingComponent=<AffiliateLink/>
    }
    else if(settingSection==="managesession"){
        settingComponent=<ManageSession/>
    }
    else if(settingSection==="myinformation"){
        settingComponent=<MyInformation/>
    }
    else if(settingSection==="deleteaccount"){
        settingComponent=<DeleteAccount/>
    }
    else if(settingSection==="avatar"){
        settingComponent=<Avatar/>
    }
    return (
        <div>
            <div class="yp_side_menu has_side_menu">
                <div id="main-container" class="main-content  container " data-logged="true">
                    <div class="ads-placment" id="header_ad_"></div>
                    <div class="announcement-renderer">

                    </div>
                    <div id="container_content"><input type="hidden" id="json-data" value="{&quot;title&quot;:&quot;Settings - ClikView - Real Content For You&quot;,&quot;description&quot;:&quot;Clikview is a Video Sharing Platform, Clikview is the best way to start your own video sharing channel! Real Content for you.&quot;,&quot;keyword&quot;:&quot;clikview,video sharing, real content&quot;,&quot;page&quot;:&quot;settings&quot;,&quot;url&quot;:&quot;https:\/\/clikview.com\/settings&quot;,&quot;is_movie&quot;:false}" />
                        <div class="page-margin">
                            <div class="row sett_row_rev">
                                <div class="col-sm-4">
                                    <div class="settings-sidebar" id="mobi-set-side">
                                        <ul class="list-group scrollmenu" Style="width: 360px;">
                                            <li class="list-group-item active" onClick={()=>{setSettingsSection("generalsetting")}}>
                                                <span href="https://clikview.com/settings/general/somac" data-load="?link1=settings&amp;page=general"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M8.686 4l2.607-2.607a1 1 0 0 1 1.414 0L15.314 4H19a1 1 0 0 1 1 1v3.686l2.607 2.607a1 1 0 0 1 0 1.414L20 15.314V19a1 1 0 0 1-1 1h-3.686l-2.607 2.607a1 1 0 0 1-1.414 0L8.686 20H5a1 1 0 0 1-1-1v-3.686l-2.607-2.607a1 1 0 0 1 0-1.414L4 8.686V5a1 1 0 0 1 1-1h3.686zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path></svg> General</span>
                                            </li>
                                            {/* <!--<li class="list-group-item ">
						<a href="https://clikview.com/settings/invoice/somac" data-load="?link1=settings&page=invoice&user=somac"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg> Invoices</a>
					</li>--> */}
                                            <li class="list-group-item " onClick={()=>{setSettingsSection("profile")}}>
                                                <span href="https://clikview.com/settings/profile/somac" data-load="?link1=settings&amp;page=profile&amp;user=somac"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M6,22h12h1c1.104,0,2-0.896,2-2V4c0-1.104-0.896-2-2-2h-1H6H5C3.896,2,3,2.896,3,4v16c0,1.104,0.896,2,2,2H6z M12,4.999 c1.647,0,3,1.351,3,3C15,9.647,13.647,11,12,11S9,9.647,9,7.999C9,6.35,10.353,4.999,12,4.999z M6,17.25c0-2.219,2.705-4.5,6-4.5 s6,2.281,6,4.5V18H6V17.25z"></path></svg> Profile</span>
                                            </li>
                                            <li class="list-group-item " onClick={()=>{setSettingsSection("monitization")}}>
                                                <span href="https://clikview.com/settings/monetization/somac" data-load="?link1=settings&amp;page=monetization&amp;user=somac"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M14 2a8 8 0 0 1 3.292 15.293A8 8 0 1 1 6.706 6.707 8.003 8.003 0 0 1 14 2zm-3 7H9v1a2.5 2.5 0 0 0-.164 4.995L9 15h2l.09.008a.5.5 0 0 1 0 .984L11 16H7v2h2v1h2v-1a2.5 2.5 0 0 0 .164-4.995L11 13H9l-.09-.008a.5.5 0 0 1 0-.984L9 12h4v-2h-2V9zm3-5a5.985 5.985 0 0 0-4.484 2.013 8 8 0 0 1 8.47 8.471A6 6 0 0 0 14 4z"></path></svg> Monetization</span>
                                            </li>
                                            <li class="list-group-item " onClick={()=>{setSettingsSection("password")}}>
                                                <span href="https://clikview.com/settings/password/somac" data-load="?link1=settings&amp;page=password&amp;user=somac"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10 0 2.136-.67 4.116-1.811 5.741L17 12h3a8 8 0 1 0-2.46 5.772l.998 1.795A9.961 9.961 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2zm0 5a3 3 0 0 1 3 3v1h1v5H8v-5h1v-1a3 3 0 0 1 3-3zm0 2a1 1 0 0 0-.993.883L11 10v1h2v-1a1 1 0 0 0-.883-.993L12 9z"></path></svg> Password</span>
                                            </li>
                                            <li class="list-group-item " onClick={()=>{setSettingsSection("balance")}}>
                                                <span href="https://clikview.com/settings/balance/somac" data-load="?link1=settings&amp;page=balance&amp;user=somac"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M22 6h-7a6 6 0 1 0 0 12h7v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2zm-7 2h8v8h-8a4 4 0 1 1 0-8zm0 3v2h3v-2h-3z"></path></svg> Balance</span>
                                            </li>
                                            <li class="list-group-item " onClick={()=>{setSettingsSection("avatar")}}>
                                                <span href="https://clikview.com/settings/avatar/somac" data-load="?link1=settings&amp;page=avatar&amp;user=somac"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M20 5H4v14l9.292-9.294a1 1 0 0 1 1.414 0L20 15.01V5zM2 3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V3.993zM8 11a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"></path></svg> Avatar &amp; Cover</span>
                                            </li>

                                            <li class="list-group-item " onClick={()=>{setSettingsSection("verification")}}>
                                                <span href="https://clikview.com/settings/verification/somac" data-load="?link1=settings&amp;page=verification&amp;user=somac"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-.997-6l7.07-7.071-1.414-1.414-5.656 5.657-2.829-2.829-1.414 1.414L11.003 16z"></path></svg> Verification</span>
                                            </li>

                                            <li class="list-group-item " onClick={()=>{setSettingsSection("clikviewsilvertoken")}}>
                                                <span href="https://clikview.com/settings/points/somac" data-load="?link1=settings&amp;page=points&amp;user=somac"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M12 15.968l4.247 2.377-.949-4.773 3.573-3.305-4.833-.573L12 5.275v10.693zm0 2.292l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928L12 18.26z"></path></svg> ClikView Silver Tokens</span>
                                            </li>

                                            <li class="list-group-item " onClick={()=>{setSettingsSection("twofactorauthentication")}}>
                                                <span href="https://clikview.com/settings/two_factor/somac" data-load="?link1=settings&amp;page=two_factor&amp;user=somac"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M7 7V3a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-4v3.993c0 .556-.449 1.007-1.007 1.007H3.007A1.006 1.006 0 0 1 2 20.993l.003-12.986C2.003 7.451 2.452 7 3.01 7H7zm2 0h6.993C16.549 7 17 7.449 17 8.007V15h3V4H9v3zm-.497 11l5.656-5.657-1.414-1.414-4.242 4.243L6.38 13.05l-1.414 1.414L8.503 18z"></path></svg> Two-factor authentication</span>
                                            </li>

                                            <li class="list-group-item " onClick={()=>{setSettingsSection("blockeduser")}}>
                                                <span href="https://clikview.com/settings/blocked_users/somac" data-load="?link1=settings&amp;page=blocked_users&amp;user=somac"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M18 8h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2V7a6 6 0 1 1 12 0v1zM5 10v10h14V10H5zm6 4h2v2h-2v-2zm-4 0h2v2H7v-2zm8 0h2v2h-2v-2zm1-6V7a4 4 0 1 0-8 0v1h8z"></path></svg> Blocked Users</span>
                                            </li>

                                            <li class="list-group-item " onClick={()=>{setSettingsSection("affiliatelink")}}>
                                                <span href="https://clikview.com/settings/invitation_links/somac" data-load="?link1=settings&amp;page=invitation_links&amp;user=somac"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg> Affiliate Link</span>
                                            </li>
                                            <li class="list-group-item " onClick={()=>{setSettingsSection("managesession")}}>
                                                <span href="https://clikview.com/settings/manage_sessions/somac" data-load="?link1=settings&amp;page=manage_sessions&amp;user=somac"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M17 13v1c0 2.77-.664 5.445-1.915 7.846l-.227.42-1.747-.974c1.16-2.08 1.81-4.41 1.882-6.836L15 14v-1h2zm-6-3h2v4l-.005.379a12.941 12.941 0 0 1-2.691 7.549l-.231.29-1.55-1.264a10.944 10.944 0 0 0 2.471-6.588L11 14v-4zm1-4a5 5 0 0 1 5 5h-2a3 3 0 0 0-6 0v3c0 2.235-.82 4.344-2.271 5.977l-.212.23-1.448-1.38a6.969 6.969 0 0 0 1.925-4.524L7 14v-3a5 5 0 0 1 5-5zm0-4a9 9 0 0 1 9 9v3c0 1.698-.202 3.37-.597 4.99l-.139.539-1.93-.526c.392-1.437.613-2.922.658-4.435L19 14v-3A7 7 0 0 0 7.808 5.394L6.383 3.968A8.962 8.962 0 0 1 12 2zM4.968 5.383l1.426 1.425a6.966 6.966 0 0 0-1.39 3.951L5 11 5.004 13c0 1.12-.264 2.203-.762 3.177l-.156.29-1.737-.992c.38-.665.602-1.407.646-2.183L3.004 13v-2a8.94 8.94 0 0 1 1.964-5.617z"></path></svg> Manage Sessions</span>
                                            </li>
                                            <li class="list-group-item " onClick={()=>{setSettingsSection("myinformation")}}>
                                                <span href="https://clikview.com/settings/my_info/somac" data-load="?link1=settings&amp;page=my_info&amp;user=somac"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M21 8v12.993A1 1 0 0 1 20.007 22H3.993A.993.993 0 0 1 3 21.008V2.992C3 2.455 3.449 2 4.002 2h10.995L21 8zm-2 1h-5V4H5v16h14V9zM8 7h3v2H8V7zm0 4h8v2H8v-2zm0 4h8v2H8v-2z"></path></svg> My Information</span>
                                            </li>
                                            <li class="list-group-item " onClick={()=>{setSettingsSection("deleteaccount")}}>
                                                <span href="https://clikview.com/settings/delete/somac" data-load="?link1=settings&amp;page=delete&amp;user=somac"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3zm-8 5v6h2v-6H9zm4 0v6h2v-6h-2zM9 4v2h6V4H9z"></path></svg> Delete account</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-sm-8 pt_forms_large_btns">
                                    {settingComponent}

                                </div>
                                <br />
                                <br />
                                <br />
                            </div>
                            <input type="hidden" id="main-url" value="https://clikview.com%2Fimport-video" />
                            <div class="ads-placment" id="footer_ad_"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settings