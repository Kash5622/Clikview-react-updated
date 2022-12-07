import React from 'react'
import MobileSearch from './MobileSearch'
import {Link,useLocation} from 'react-router-dom';

function AllVideos(props) {
    const { searchOpen, expandNav} = props;
    const searchData = useLocation().pathname.slice(17);
    const search=searchData.replace(/_/g," ");
    // console.log(search)
    // console.log(useLocation().pathname)
    const data = [
        {
            videoId: 1,
            videoImg: "https://i.ytimg.com/vi/9Cm9gZWt5rA/hqdefault.jpg",
            altText: "MARKETS A LOOK AHEAD: Expect MORE Propaganda And Higher Stock Prices. Here's Why. Mannarino",
            duration: "00:15:41",
            videoTitle: "MARKETS A LOOK AHEAD: Expect MORE Propaganda And Higher Stock Prices. Here's Why. Mannarino",
            owner: "dtwalsh",
            views: "3",
            publish: "6"
        },
        {
            videoId: 2,
            videoImg: "https://i.ytimg.com/vi/bEHNu5Zv4GM/maxresdefault.jpg",
            altText: "Do These Conservative And Liberal Women Agree On MY BODY, MY CHOICE?",
            duration: "00:02:59",
            videoTitle: "Do These Conservative And Liberal Women Agree On MY BODY, MY CHOICE?",
            owner: "dtwalsh",
            views: "19",
            publish: "6"
        },
        {
            videoId: 3,
            videoImg: "https://i.ytimg.com/vi/Pa9MVYWH_KU/maxresdefault.jpg",
            altText: "Paul Pelosi attack is a wakeup call for Democrats: Leo Terrell",
            duration: "00:05:22",
            videoTitle: "Paul Pelosi attack is a wakeup call for Democrats: Leo Terrell",
            owner: "Sharon Leonard",
            views: "7",
            publish: "3"
        },
        {
            videoId: 4,
            videoImg: "https://i.ytimg.com/vi/9Cm9gZWt5rA/hqdefault.jpg",
            altText: "MARKETS A LOOK AHEAD: Expect MORE Propaganda And Higher Stock Prices. Here's Why. Mannarino",
            duration: "00:15:41",
            videoTitle: "MARKETS A LOOK AHEAD: Expect MORE Propaganda And Higher Stock Prices. Here's Why. Mannarino",
            owner: "dtwalsh",
            views: "3",
            publish: "6"
        },
        {
            videoId: 5,
            videoImg: "https://i.ytimg.com/vi/bEHNu5Zv4GM/maxresdefault.jpg",
            altText: "Do These Conservative And Liberal Women Agree On MY BODY, MY CHOICE?",
            duration: "00:02:59",
            videoTitle: "Do These Conservative And Liberal Women Agree On MY BODY, MY CHOICE?",
            owner: "dtwalsh",
            views: "19",
            publish: "6"
        },
        {
            videoId: 6,
            videoImg: "https://i.ytimg.com/vi/Pa9MVYWH_KU/maxresdefault.jpg",
            altText: "Paul Pelosi attack is a wakeup call for Democrats: Leo Terrell",
            duration: "00:05:22",
            videoTitle: "Paul Pelosi attack is a wakeup call for Democrats: Leo Terrell",
            owner: "Sharon Leonard",
            views: "7",
            publish: "3"
        },
        {
            videoId: 7,
            videoImg: "https://i.ytimg.com/vi/9Cm9gZWt5rA/hqdefault.jpg",
            altText: "MARKETS A LOOK AHEAD: Expect MORE Propaganda And Higher Stock Prices. Here's Why. Mannarino",
            duration: "00:15:41",
            videoTitle: "MARKETS A LOOK AHEAD: Expect MORE Propaganda And Higher Stock Prices. Here's Why. Mannarino",
            owner: "dtwalsh",
            views: "3",
            publish: "6"
        },
        {
            videoId: 8,
            videoImg: "https://i.ytimg.com/vi/bEHNu5Zv4GM/maxresdefault.jpg",
            altText: "Do These Conservative And Liberal Women Agree On MY BODY, MY CHOICE?",
            duration: "00:02:59",
            videoTitle: "Do These Conservative And Liberal Women Agree On MY BODY, MY CHOICE?",
            owner: "dtwalsh",
            views: "19",
            publish: "6"
        },
        {
            videoId: 9,
            videoImg: "https://i.ytimg.com/vi/Pa9MVYWH_KU/maxresdefault.jpg",
            altText: "Paul Pelosi attack is a wakeup call for Democrats: Leo Terrell",
            duration: "00:05:22",
            videoTitle: "Paul Pelosi attack is a wakeup call for Democrats: Leo Terrell",
            owner: "Sharon Leonard",
            views: "7",
            publish: "3"
        },
        {
            videoId: 10,
            videoImg: "https://i.ytimg.com/vi/9Cm9gZWt5rA/hqdefault.jpg",
            altText: "MARKETS A LOOK AHEAD: Expect MORE Propaganda And Higher Stock Prices. Here's Why. Mannarino",
            duration: "00:15:41",
            videoTitle: "MARKETS A LOOK AHEAD: Expect MORE Propaganda And Higher Stock Prices. Here's Why. Mannarino",
            owner: "dtwalsh",
            views: "3",
            publish: "6"
        },
        {
            videoId: 11,
            videoImg: "https://i.ytimg.com/vi/bEHNu5Zv4GM/maxresdefault.jpg",
            altText: "Do These Conservative And Liberal Women Agree On MY BODY, MY CHOICE?",
            duration: "00:02:59",
            videoTitle: "Do These Conservative And Liberal Women Agree On MY BODY, MY CHOICE?",
            owner: "dtwalsh",
            views: "19",
            publish: "6"
        },
        {
            videoId: 12,
            videoImg: "https://i.ytimg.com/vi/Pa9MVYWH_KU/maxresdefault.jpg",
            altText: "Paul Pelosi attack is a wakeup call for Democrats: Leo Terrell",
            duration: "00:05:22",
            videoTitle: "Paul Pelosi attack is a wakeup call for Democrats: Leo Terrell",
            owner: "Sharon Leonard",
            views: "7",
            publish: "3"
        },
        {
            videoId: 13,
            videoImg: "https://i.ytimg.com/vi/9Cm9gZWt5rA/hqdefault.jpg",
            altText: "MARKETS A LOOK AHEAD: Expect MORE Propaganda And Higher Stock Prices. Here's Why. Mannarino",
            duration: "00:15:41",
            videoTitle: "MARKETS A LOOK AHEAD: Expect MORE Propaganda And Higher Stock Prices. Here's Why. Mannarino",
            owner: "dtwalsh",
            views: "3",
            publish: "6"
        },
        {
            videoId: 14,
            videoImg: "https://i.ytimg.com/vi/bEHNu5Zv4GM/maxresdefault.jpg",
            altText: "Do These Conservative And Liberal Women Agree On MY BODY, MY CHOICE?",
            duration: "00:02:59",
            videoTitle: "Do These Conservative And Liberal Women Agree On MY BODY, MY CHOICE?",
            owner: "dtwalsh",
            views: "19",
            publish: "6"
        },
        {
            videoId: 15,
            videoImg: "https://i.ytimg.com/vi/Pa9MVYWH_KU/maxresdefault.jpg",
            altText: "Paul Pelosi attack is a wakeup call for Democrats: Leo Terrell",
            duration: "00:05:22",
            videoTitle: "Paul Pelosi attack is a wakeup call for Democrats: Leo Terrell",
            owner: "Sharon Leonard",
            views: "7",
            publish: "3"
        },
        {
            videoId: 16,
            videoImg: "https://i.ytimg.com/vi/9Cm9gZWt5rA/hqdefault.jpg",
            altText: "MARKETS A LOOK AHEAD: Expect MORE Propaganda And Higher Stock Prices. Here's Why. Mannarino",
            duration: "00:15:41",
            videoTitle: "MARKETS A LOOK AHEAD: Expect MORE Propaganda And Higher Stock Prices. Here's Why. Mannarino",
            owner: "dtwalsh",
            views: "3",
            publish: "6"
        },
        {
            videoId: 17,
            videoImg: "https://i.ytimg.com/vi/bEHNu5Zv4GM/maxresdefault.jpg",
            altText: "Do These Conservative And Liberal Women Agree On MY BODY, MY CHOICE?",
            duration: "00:02:59",
            videoTitle: "Do These Conservative And Liberal Women Agree On MY BODY, MY CHOICE?",
            owner: "dtwalsh",
            views: "19",
            publish: "6"
        },
        {
            videoId: 18,
            videoImg: "https://i.ytimg.com/vi/Pa9MVYWH_KU/maxresdefault.jpg",
            altText: "Paul Pelosi attack is a wakeup call for Democrats: Leo Terrell",
            duration: "00:05:22",
            videoTitle: "Paul Pelosi attack is a wakeup call for Democrats: Leo Terrell",
            owner: "Sharon Leonard",
            views: "7",
            publish: "3"
        },
        {
            videoId: 19,
            videoImg: "https://i.ytimg.com/vi/9Cm9gZWt5rA/hqdefault.jpg",
            altText: "MARKETS A LOOK AHEAD: Expect MORE Propaganda And Higher Stock Prices. Here's Why. Mannarino",
            duration: "00:15:41",
            videoTitle: "MARKETS A LOOK AHEAD: Expect MORE Propaganda And Higher Stock Prices. Here's Why. Mannarino",
            owner: "dtwalsh",
            views: "3",
            publish: "6"
        },
        {
            videoId: 20,
            videoImg: "https://i.ytimg.com/vi/bEHNu5Zv4GM/maxresdefault.jpg",
            altText: "Do These Conservative And Liberal Women Agree On MY BODY, MY CHOICE?",
            duration: "00:02:59",
            videoTitle: "Do These Conservative And Liberal Women Agree On MY BODY, MY CHOICE?",
            owner: "dtwalsh",
            views: "19",
            publish: "6"
        },
        {
            videoId: 21,
            videoImg: "https://i.ytimg.com/vi/Pa9MVYWH_KU/maxresdefault.jpg",
            altText: "Paul Pelosi attack is a wakeup call for Democrats: Leo Terrell",
            duration: "00:05:22",
            videoTitle: "Paul Pelosi attack is a wakeup call for Democrats: Leo Terrell",
            owner: "Sharon Leonard",
            views: "7",
            publish: "3"
        },
        {
            videoId: 22,
            videoImg: "https://i.ytimg.com/vi/9Cm9gZWt5rA/hqdefault.jpg",
            altText: "MARKETS A LOOK AHEAD: Expect MORE Propaganda And Higher Stock Prices. Here's Why. Mannarino",
            duration: "00:15:41",
            videoTitle: "MARKETS A LOOK AHEAD: Expect MORE Propaganda And Higher Stock Prices. Here's Why. Mannarino",
            owner: "dtwalsh",
            views: "3",
            publish: "6"
        },
        {
            videoId: 23,
            videoImg: "https://i.ytimg.com/vi/bEHNu5Zv4GM/maxresdefault.jpg",
            altText: "Do These Conservative And Liberal Women Agree On MY BODY, MY CHOICE?",
            duration: "00:02:59",
            videoTitle: "Do These Conservative And Liberal Women Agree On MY BODY, MY CHOICE?",
            owner: "dtwalsh",
            views: "19",
            publish: "6"
        },
        {
            videoId: 24,
            videoImg: "https://i.ytimg.com/vi/Pa9MVYWH_KU/maxresdefault.jpg",
            altText: "Paul Pelosi attack is a wakeup call for Democrats: Leo Terrell",
            duration: "00:05:22",
            videoTitle: "Paul Pelosi attack is a wakeup call for Democrats: Leo Terrell",
            owner: "Sharon Leonard",
            views: "7",
            publish: "3"
        },
        {
            videoId: 25,
            videoImg: "https://i.ytimg.com/vi/9Cm9gZWt5rA/hqdefault.jpg",
            altText: "MARKETS A LOOK AHEAD: Expect MORE Propaganda And Higher Stock Prices. Here's Why. Mannarino",
            duration: "00:15:41",
            videoTitle: "MARKETS A LOOK AHEAD: Expect MORE Propaganda And Higher Stock Prices. Here's Why. Mannarino",
            owner: "dtwalsh",
            views: "3",
            publish: "6"
        },
        {
            videoId: 26,
            videoImg: "https://i.ytimg.com/vi/bEHNu5Zv4GM/maxresdefault.jpg",
            altText: "Do These Conservative And Liberal Women Agree On MY BODY, MY CHOICE?",
            duration: "00:02:59",
            videoTitle: "Do These Conservative And Liberal Women Agree On MY BODY, MY CHOICE?",
            owner: "dtwalsh",
            views: "19",
            publish: "6"
        },
        {
            videoId: 27,
            videoImg: "https://i.ytimg.com/vi/Pa9MVYWH_KU/maxresdefault.jpg",
            altText: "Paul Pelosi attack is a wakeup call for Democrats: Leo Terrell",
            duration: "00:05:22",
            videoTitle: "Paul Pelosi attack is a wakeup call for Democrats: Leo Terrell",
            owner: "Sharon Leonard",
            views: "7",
            publish: "3"
        },
        {
            videoId: 28,
            videoImg: "https://i.ytimg.com/vi/9Cm9gZWt5rA/hqdefault.jpg",
            altText: "MARKETS A LOOK AHEAD: Expect MORE Propaganda And Higher Stock Prices. Here's Why. Mannarino",
            duration: "00:15:41",
            videoTitle: "MARKETS A LOOK AHEAD: Expect MORE Propaganda And Higher Stock Prices. Here's Why. Mannarino",
            owner: "dtwalsh",
            views: "3",
            publish: "6"
        },
        {
            videoId: 29,
            videoImg: "https://i.ytimg.com/vi/bEHNu5Zv4GM/maxresdefault.jpg",
            altText: "Do These Conservative And Liberal Women Agree On MY BODY, MY CHOICE?",
            duration: "00:02:59",
            videoTitle: "Do These Conservative And Liberal Women Agree On MY BODY, MY CHOICE?",
            owner: "dtwalsh",
            views: "19",
            publish: "6"
        },
        {
            videoId: 30,
            videoImg: "https://i.ytimg.com/vi/Pa9MVYWH_KU/maxresdefault.jpg",
            altText: "Paul Pelosi attack is a wakeup call for Democrats: Leo Terrell",
            duration: "00:05:22",
            videoTitle: "Paul Pelosi attack is a wakeup call for Democrats: Leo Terrell",
            owner: "Sharon Leonard",
            views: "7",
            publish: "3"
        },
        {
            videoId: 31,
            videoImg: "https://i.ytimg.com/vi/9Cm9gZWt5rA/hqdefault.jpg",
            altText: "MARKETS A LOOK AHEAD: Expect MORE Propaganda And Higher Stock Prices. Here's Why. Mannarino",
            duration: "00:15:41",
            videoTitle: "MARKETS A LOOK AHEAD: Expect MORE Propaganda And Higher Stock Prices. Here's Why. Mannarino",
            owner: "dtwalsh",
            views: "3",
            publish: "6"
        },
        {
            videoId: 32,
            videoImg: "https://i.ytimg.com/vi/bEHNu5Zv4GM/maxresdefault.jpg",
            altText: "Do These Conservative And Liberal Women Agree On MY BODY, MY CHOICE?",
            duration: "00:02:59",
            videoTitle: "Do These Conservative And Liberal Women Agree On MY BODY, MY CHOICE?",
            owner: "dtwalsh",
            views: "19",
            publish: "6"
        },
        {
            videoId: 33,
            videoImg: "https://i.ytimg.com/vi/Pa9MVYWH_KU/maxresdefault.jpg",
            altText: "Paul Pelosi attack is a wakeup call for Democrats: Leo Terrell",
            duration: "00:05:22",
            videoTitle: "Paul Pelosi attack is a wakeup call for Democrats: Leo Terrell",
            owner: "Sharon Leonard",
            views: "7",
            publish: "3"
        },
    ]
    return (
        <div className={expandNav?"main-container shrinkWidth bodyfixed":"main-container expandWidth"} Style="z-index:-1">
            {searchOpen ? <MobileSearch /> : <></>}
            <div className='container-home'>
                <div className="pt_page_headr">
                    <h4 className="page_head" Style="color:white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fillRule="evenodd" fill="currentColor" d="M10 3.25L9.94358 3.25L9.94356 3.25C8.10581 3.24999 6.65019 3.24997 5.51098 3.40314C4.33855 3.56077 3.38961 3.89288 2.64124 4.64125C1.89288 5.38961 1.56076 6.33856 1.40313 7.51098C1.24997 8.65019 1.24998 10.1058 1.25 11.9436L1.25 11.9436L1.25 12L1.25 12.0564L1.25 12.0565C1.24998 13.8942 1.24997 15.3498 1.40313 16.489C1.56076 17.6614 1.89288 18.6104 2.64124 19.3588C3.38961 20.1071 4.33855 20.4392 5.51098 20.5969C6.65019 20.75 8.10583 20.75 9.94359 20.75L10 20.75L10.0564 20.75L10.0565 20.75C11.8942 20.75 13.3498 20.75 14.489 20.5969C15.6614 20.4392 16.6104 20.1071 17.3588 19.3588C18.1071 18.6104 18.4392 17.6614 18.5969 16.489C18.6011 16.4577 18.6052 16.4261 18.6092 16.3943C19.1758 16.8183 19.6658 17.1765 20.0818 17.4026C20.5551 17.6598 21.1632 17.875 21.7826 17.5653C22.402 17.2556 22.5947 16.64 22.673 16.107C22.7501 15.5813 22.75 14.8815 22.75 14.0604L22.75 14L22.75 9.99999L22.75 9.93961C22.75 9.11853 22.7501 8.41864 22.673 7.893C22.5947 7.35998 22.402 6.74439 21.7826 6.4347C21.1632 6.12501 20.5551 6.34019 20.0818 6.59743C19.6658 6.82352 19.1758 7.18169 18.6092 7.60572C18.6052 7.5739 18.6011 7.54232 18.5969 7.51098C18.4392 6.33856 18.1071 5.38961 17.3588 4.64125C16.6104 3.89288 15.6614 3.56077 14.489 3.40314C13.3498 3.24997 11.8942 3.24999 10.0564 3.25L10.0564 3.25L10 3.25ZM18.75 11.8488L18.75 11.8418L18.75 11.8335L18.75 11.8251L18.75 11.8168L18.75 11.8084L18.75 11.8L18.75 11.7917L18.75 11.7833L18.75 11.7749L18.75 11.7666L18.75 11.7582L18.75 11.7498L18.75 11.7414L18.75 11.733L18.75 11.7246L18.75 11.7162L18.75 11.7078L18.75 11.6994L18.75 11.691L18.75 11.6825L18.75 11.6741L18.75 11.6657L18.75 11.6573L18.75 11.6488L18.75 11.6404L18.75 11.632L18.75 11.6235L18.75 11.6151L18.75 11.6066L18.75 11.5982L18.75 11.5897L18.75 11.5813L18.75 11.5728L18.75 11.5643L18.75 11.5559L18.75 11.5474L18.75 11.5389L18.75 11.5304L18.75 11.522L18.75 11.5135L18.75 11.505L18.75 11.4965L18.75 11.488L18.75 11.4795L18.75 11.471L18.75 11.4625L18.75 11.454L18.75 11.4455L18.75 11.437L18.75 11.4285L18.75 11.4199L18.75 11.4114L18.75 11.4029L18.75 11.3944L18.75 11.3858L18.75 11.3773L18.75 11.3688L18.75 11.3602L18.75 11.3517L18.75 11.3432L18.75 11.3346L18.75 11.3261L18.75 11.3175L18.75 11.309L18.75 11.3004L18.75 11.2919L18.75 11.2833L18.75 11.2748L18.75 11.2662L18.75 11.2576L18.75 11.2491L18.75 11.2405L18.75 11.2319L18.75 11.2234L18.75 11.2148L18.75 11.2062L18.75 11.1976L18.75 11.1891L18.75 11.1805L18.75 11.1719L18.75 11.1633L18.75 11.1547L18.75 11.1461L18.75 11.1375L18.75 11.1289L18.75 11.1203L18.75 11.1117L18.75 11.1032L18.75 11.0946L18.75 11.086L18.75 11.0773L18.75 11.0687L18.75 11.0601L18.75 11.0515L18.75 11.0429L18.75 11.0343L18.75 11.0257L18.75 11.0171L18.75 11.0085L18.75 10.9999L18.75 10.9912L18.75 10.9826L18.75 10.974L18.75 10.9654L18.75 10.9568L18.75 10.9481L18.75 10.9395L18.75 10.9309L18.75 10.9223L18.75 10.9137L18.75 10.905L18.75 10.8964L18.75 10.8878L18.75 10.8791L18.75 10.8705L18.75 10.8619L18.75 10.8532L18.75 10.8446L18.75 10.836L18.75 10.8273L18.75 10.8187L18.75 10.8101L18.75 10.8014L18.75 10.7928L18.75 10.7842L18.75 10.7755L18.75 10.7669L18.75 10.7583L18.75 10.7496L18.75 10.741L18.75 10.7323L18.75 10.7237L18.75 10.7151L18.75 10.7064L18.75 10.6978L18.75 10.6891L18.75 10.6805L18.75 10.6719L18.75 10.6632L18.75 10.6546L18.75 10.6459L18.75 10.6373L18.75 10.6286L18.75 10.62L18.75 10.6114L18.75 10.6027L18.75 10.5941L18.75 10.5854L18.75 10.5768L18.75 10.5682L18.75 10.5595L18.75 10.5509L18.75 10.5422L18.75 10.5336L18.75 10.525L18.75 10.5163L18.75 10.5077L18.75 10.4991L18.75 10.4904L18.75 10.4818L18.75 10.4731L18.75 10.4645L18.75 10.4559L18.75 10.4472L18.75 10.4386L18.75 10.43L18.75 10.4213L18.75 10.4127L18.75 10.4041L18.75 10.3955L18.75 10.3868L18.75 10.3782L18.75 10.3696L18.75 10.361L18.75 10.3523L18.75 10.3437L18.75 10.3351L18.75 10.3265L18.75 10.3178L18.75 10.3092L18.75 10.3006L18.75 10.292L18.75 10.2834L18.75 10.2748L18.75 10.2661L18.75 10.2575L18.75 10.2489L18.75 10.2403L18.75 10.2317L18.75 10.2231L18.75 10.2145L18.75 10.2059L18.75 10.1973L18.75 10.1887L18.75 10.1801L18.75 10.1715L18.75 10.1629L18.75 10.1543L18.75 10.1457L18.75 10.1371L18.75 10.1285L18.75 10.12L18.75 10.1114L18.75 10.1028L18.75 10.0942L18.75 10.0856L18.75 10.0771L18.75 10.0685L18.75 10.0599L18.75 10.0513L18.75 10.0428L18.75 10.0342L18.75 10.0256L18.75 10.0171L18.75 10.0085L18.75 9.99996C18.75 9.74167 18.7507 9.59613 18.7603 9.48769C18.7646 9.43923 18.7696 9.41311 18.7728 9.39999C18.7744 9.3938 18.7754 9.39062 18.7758 9.38956L18.7764 9.3882L18.7771 9.38693C18.7778 9.38599 18.7797 9.38321 18.7837 9.37828C18.7922 9.36782 18.8101 9.34811 18.8463 9.31561C18.9273 9.24286 19.0433 9.15498 19.25 9C19.9685 8.46106 20.4399 8.11002 20.798 7.91537C20.9675 7.82328 21.0616 7.79413 21.1071 7.78583C21.1277 7.82716 21.1608 7.91996 21.1888 8.11077C21.248 8.51408 21.25 9.10178 21.25 9.99999L21.25 14C21.25 14.8982 21.248 15.4859 21.1888 15.8892C21.1608 16.08 21.1277 16.1728 21.1071 16.2141C21.0616 16.2058 20.9675 16.1767 20.798 16.0846C20.4399 15.89 19.9686 15.5389 19.25 15C19.0434 14.845 18.9273 14.7572 18.8463 14.6844C18.8101 14.6519 18.7922 14.6322 18.7837 14.6217C18.7817 14.6193 18.7803 14.6175 18.7792 14.616C18.7781 14.6145 18.7775 14.6136 18.7771 14.6131L18.7764 14.6118L18.7758 14.6104C18.7754 14.6093 18.7743 14.6061 18.7728 14.6C18.7696 14.5869 18.7646 14.5608 18.7603 14.5125C18.7507 14.4043 18.75 14.2591 18.75 14.0012L18.75 13.9954L18.75 13.9896L18.75 13.9838L18.75 13.978L18.75 13.9722L18.75 13.9664L18.75 13.9606L18.75 13.9547L18.75 13.9489L18.75 13.943L18.75 13.9371L18.75 13.9312L18.75 13.9253L18.75 13.9193L18.75 13.9134L18.75 13.9075L18.75 13.9015L18.75 13.8955L18.75 13.8895L18.75 13.8835L18.75 13.8775L18.75 13.8715L18.75 13.8654L18.75 13.8594L18.75 13.8533L18.75 13.8472L18.75 13.8411L18.75 13.835L18.75 13.8289L18.75 13.8228L18.75 13.8166L18.75 13.8105L18.75 13.8043L18.75 13.7981L18.75 13.792L18.75 13.7857L18.75 13.7795L18.75 13.7733L18.75 13.7671L18.75 13.7608L18.75 13.7546L18.75 13.7483L18.75 13.742L18.75 13.7357L18.75 13.7294L18.75 13.7231L18.75 13.7167L18.75 13.7104L18.75 13.704L18.75 13.6977L18.75 13.6913L18.75 13.6849L18.75 13.6785L18.75 13.6721L18.75 13.6656L18.75 13.6592L18.75 13.6527L18.75 13.6463L18.75 13.6398L18.75 13.6333L18.75 13.6268L18.75 13.6203L18.75 13.6138L18.75 13.6073L18.75 13.6007L18.75 13.5942L18.75 13.5876L18.75 13.581L18.75 13.5744L18.75 13.5678L18.75 13.5612L18.75 13.5546L18.75 13.548L18.75 13.5413L18.75 13.5347L18.75 13.528L18.75 13.5214L18.75 13.5147L18.75 13.508L18.75 13.5013L18.75 13.4945L18.75 13.4878L18.75 13.4811L18.75 13.4743L18.75 13.4676L18.75 13.4608L18.75 13.454L18.75 13.4472L18.75 13.4404L18.75 13.4336L18.75 13.4268L18.75 13.4199L18.75 13.4131L18.75 13.4062L18.75 13.3994L18.75 13.3925L18.75 13.3856L18.75 13.3787L18.75 13.3718L18.75 13.3649L18.75 13.358L18.75 13.351L18.75 13.3441L18.75 13.3371L18.75 13.3301L18.75 13.3232L18.75 13.3162L18.75 13.3092L18.75 13.3022L18.75 13.2952L18.75 13.2881L18.75 13.2811L18.75 13.274L18.75 13.267L18.75 13.2599L18.75 13.2528L18.75 13.2458L18.75 13.2387L18.75 13.2315L18.75 13.2244L18.75 13.2173L18.75 13.2102L18.75 13.203L18.75 13.1959L18.75 13.1887L18.75 13.1815L18.75 13.1744L18.75 13.1672L18.75 13.16L18.75 13.1528L18.75 13.1455L18.75 13.1383L18.75 13.1311L18.75 13.1238L18.75 13.1166L18.75 13.1093L18.75 13.102L18.75 13.0947L18.75 13.0874L18.75 13.0801L18.75 13.0728L18.75 13.0655L18.75 13.0582L18.75 13.0508L18.75 13.0435L18.75 13.0361L18.75 13.0288L18.75 13.0214L18.75 13.014L18.75 13.0066L18.75 12.9992L18.75 12.9918L18.75 12.9844L18.75 12.977L18.75 12.9696L18.75 12.9621L18.75 12.9547L18.75 12.9472L18.75 12.9397L18.75 12.9323L18.75 12.9248L18.75 12.9173L18.75 12.9098L18.75 12.9023L18.75 12.8948L18.75 12.8872L18.75 12.8797L18.75 12.8722L18.75 12.8646L18.75 12.857L18.75 12.8495L18.75 12.8419L18.75 12.8343L18.75 12.8267L18.75 12.8191L18.75 12.8115L18.75 12.8039L18.75 12.7963L18.75 12.7887L18.75 12.781L18.75 12.7734L18.75 12.7657L18.75 12.7581L18.75 12.7504L18.75 12.7427L18.75 12.735L18.75 12.7273L18.75 12.7196L18.75 12.7119L18.75 12.7042L18.75 12.6965L18.75 12.6888L18.75 12.681L18.75 12.6733L18.75 12.6655L18.75 12.6578L18.75 12.65L18.75 12.6422L18.75 12.6345L18.75 12.6267L18.75 12.6189L18.75 12.6111L18.75 12.6033L18.75 12.5955L18.75 12.5876L18.75 12.5798L18.75 12.572L18.75 12.5641L18.75 12.5563L18.75 12.5484L18.75 12.5405L18.75 12.5327L18.75 12.5248L18.75 12.5169L18.75 12.509L18.75 12.5011L18.75 12.4932L18.75 12.4853L18.75 12.4774L18.75 12.4695L18.75 12.4615L18.75 12.4536L18.75 12.4456L18.75 12.4377L18.75 12.4297L18.75 12.4218L18.75 12.4138L18.75 12.4058L18.75 12.3978L18.75 12.3899L18.75 12.3819L18.75 12.3739L18.75 12.3659L18.75 12.3578L18.75 12.3498L18.75 12.3418L18.75 12.3338L18.75 12.3257L18.75 12.3177L18.75 12.3096L18.75 12.3016L18.75 12.2935L18.75 12.2854L18.75 12.2774L18.75 12.2693L18.75 12.2612L18.75 12.2531L18.75 12.245L18.75 12.2369L18.75 12.2288L18.75 12.2207L18.75 12.2126L18.75 12.2044L18.75 12.1963L18.75 12.1882L18.75 12.18L18.75 12.1719L18.75 12.1637L18.75 12.1556L18.75 12.1512M17.25 12C17.25 13.9068 17.2484 15.2615 17.1102 16.2892C16.975 17.2952 16.7213 17.8749 16.2981 18.2981C15.8749 18.7213 15.2952 18.975 14.2892 19.1102C13.2615 19.2484 11.9068 19.25 10 19.25C8.09318 19.25 6.73851 19.2484 5.71085 19.1102C4.70476 18.975 4.12511 18.7213 3.7019 18.2981C3.27869 17.8749 3.02502 17.2952 2.88976 16.2892C2.75159 15.2615 2.75 13.9068 2.75 12C2.75 10.0932 2.75159 8.73852 2.88976 7.71085C3.02502 6.70476 3.27869 6.12512 3.7019 5.70191C4.12511 5.2787 4.70476 5.02503 5.71085 4.88976C6.73851 4.7516 8.09318 4.75 10 4.75C11.9068 4.75 13.2615 4.7516 14.2892 4.88976C15.2952 5.02503 15.8749 5.2787 16.2981 5.70191C16.7213 6.12512 16.975 6.70476 17.1102 7.71085C17.2484 8.73852 17.25 10.0932 17.25 12ZM21.1422 7.78417C21.1418 7.78483 21.137 7.78511 21.129 7.783C21.1387 7.78245 21.1427 7.7835 21.1422 7.78417ZM21.0962 7.76658C21.0897 7.76146 21.087 7.75743 21.0873 7.7567C21.0876 7.75596 21.0908 7.75852 21.0962 7.76658ZM21.0873 16.2433C21.087 16.2425 21.0897 16.2385 21.0962 16.2334C21.0908 16.2414 21.0876 16.244 21.0873 16.2433ZM21.129 16.217C21.137 16.2148 21.1418 16.2151 21.1422 16.2158C21.1427 16.2165 21.1387 16.2175 21.129 16.217Z"></path></svg>
                             {search}</h4>
                </div>
                <div className='videos-latest-list row pt_timeline_vids '>
                    {data.map((element) => {
                        return <div className="col-md-3 col-sm-4 no-padding-right-at-all no-padding-mobile-left" key={element.videoId}>
                            <div className="video-latest-list video-wrapper " data-id="4848" data-views="3">
                                <div className="video-thumb">
                                    <Link to="/">
                                        <img src={element.videoImg} alt={element.altText} />
                                        <div className="play_hover_btn" onmouseenter="show_gif(this,'')" onmouseleave="hide_gif(this)">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="feather" width="24" height="24" viewBox="0 0 24 24" fill="rgba(255, 255, 255, 0.8)"><path d="M8,5.14V19.14L19,12.14L8,5.14Z"></path></svg>
                                        </div>
                                        <div className="video-duration">{element.duration}</div>
                                    </Link>
                                </div>
                                <div>
                                    <div className="video-list-title">
                                        <Link to="/">
                                            <h4 >{element.videoTitle.slice(0,63)+"..."}</h4>
                                        </Link>
                                    </div>
                                    <div className="video-info">
                                        <div>
                                            <Link to="/" data-load="?link1=timeline&amp;id=dtwalsh">dtwalsh <i className="fa fa-check-circle fa-fw verified"></i></Link><br />
                                            <span>3 Views</span> <span className="bold">·</span> <span>6 hours ago</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default AllVideos