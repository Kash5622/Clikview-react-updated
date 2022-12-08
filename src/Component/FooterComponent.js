import React from 'react'
import { useState,useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Aboutus from './FooterComponents/Aboutus';
import Faq from './FooterComponents/Faq';
import Feature from './FooterComponents/Feature';
import PrivacyPolicy from './FooterComponents/PrivacyPolicy';
import RefundPolicy from './FooterComponents/RefundPolicy';
import Termsofuse from './FooterComponents/Termsofuse';
import MobileSearch from './MobileSearch';

function FooterComponent(props) {
    const { searchOpen, expandNav } = props;
    const searchData = useLocation().pathname.slice(23);
    console.log(searchData)
    const [footerSection, setFooterSection] = useState(searchData)
    useEffect(() => {
        setFooterSection(searchData)
    
    }, [searchData])
    const search=searchData.replace(/_/g," ");
    // setFooterSection(searchData);
    let footercomponent;
    if (footerSection === "About_us") {
        footercomponent = <Aboutus />
    }
    else if (footerSection === "Faq") {
        footercomponent = <Faq />
    }
    else if (footerSection === "Privacy_Policy") {
        footercomponent = <PrivacyPolicy />
    }
    else if (footerSection === "Refund_Policy") {
        footercomponent = <RefundPolicy />
    }
    else if (footerSection === "Terma_Of_Use") {
        footercomponent = <Termsofuse />
    }
    else if (footerSection === "Contact_Us") {
        footercomponent = <Aboutus />
    }
    else if (footerSection === "Feature") {
        footercomponent = <Feature/>
    }

    return (
        <div>
            <div className={expandNav ? "main-container shrinkWidth bodyfixed" : "main-container expandWidth"} Style="z-index:-1">
                <div id="main-container" class="main-content  container " data-logged="true">
                    {searchOpen ? <MobileSearch /> : ""}
                    <div class="ads-placment" id="header_ad_"></div>
                    <div class="announcement-renderer">

                    </div>
                    <div id="container_content"><input type="hidden" id="json-data" value="{&quot;title&quot;:&quot;ClikView | Refund Policy&quot;,&quot;description&quot;:&quot;Clikview is a Video Sharing Platform, Clikview is the best way to start your own video sharing channel! Real Content for you.&quot;,&quot;keyword&quot;:&quot;clikview,video sharing, real content&quot;,&quot;page&quot;:&quot;terms&quot;,&quot;url&quot;:&quot;https:\/\/clikview.com\/terms\/refund-policy&quot;,&quot;is_movie&quot;:false}" />
                        <div class="wo_about_wrapper_parent">
                            <div class="wo_about_wrapper">
                                <div class="hero hero-overlay" Style="background-color: #82b652;"></div>
                            </div>
                        </div>
                        <div class="pt_page_margin row sett_row_rev">
                            <div class="mat_header">
                                <h1><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" Style="color: #82b652;"><path fill="currentColor" d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"></path></svg> {search}</h1>
                            </div>
                            <div class="col-md-2"></div>
                            {footercomponent}
                            <div class="col-md-2"></div>
                        </div>
                    </div>
                    <input type="hidden" id="main-url" value="https://clikview.com%2F" />
                    <div class="ads-placment" id="footer_ad_"></div>
                </div>
            </div>
        </div>
    )
}

export default FooterComponent