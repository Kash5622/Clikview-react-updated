import React from 'react'

function Articles() {
    const data=[
        {
            articleId:1,
            articleImg:"https://clikview.com/upload/photos/2022/10/FWZN5FKMP7mSrtmlZoQQ_16_fdea892b50e1e93450c117ed6cde81c0_image.png",
            articleTitle:"The Real Dr.  Fauci - The Movie",
            articleDesc:"COLLUDING BIG TECH, BIG PHARMA &amp; BIG GOVERNMENT EXPOSED - THEY PRAY YOU NEVER WATCH THIS",
            userName:"Xileen",
            userImg:"https://clikview.com/upload/photos/f-avatar.png",
            publish:"16/10/22",
        },
        {
            articleId:2,
            articleImg:"https://clikview.com/upload/photos/2022/10/T6LbcwdCLHpHDrHdsjgc_16_1c1bfd4f97387cd1ef001cb6efe2051c_image.jpeg",
            articleTitle:"Gen. Flynn exposes the truth about the FBI",
            articleDesc:"Gen. Flynn: Explosive Truth About FBI Has Been Revealed in Durham Trial... They're Not Acting Alone in This Coup",
            userName:"RealGenFlynn",
            userImg:"https://clikview.com/upload/photos/2022/10/NBDp1o2TVUn5KRMDsXB1_16_270ba19f7e89bc79c0a0e44104611dae_image.jpg",
            publish:"16/10/22",
        },
        {
            articleId:3,
            articleImg:"https://clikview.com/upload/photos/2022/10/bhDBOYKKnDxsT1eS5kMc_14_1051006a2d388260604636a00ad40d71_image.png",
            articleTitle:"How To Find Peace Within Yourself",
            articleDesc:"There are many things in life that can prevent you from finding inner peace. Let's examine why you need to find peace within yourself, the benefits of finding inner peace, and how to ge..",
            userName:"Joyce Becker",
            userImg:"https://clikview.com/upload/photos/2022/08/JdPopD1WHOjUEPmjQjaq_23_1babdf388d1b7966ae192b037af9cd15_image.jpg",
            publish:"14/10/22",
        },
        {
            articleId:4,
            articleImg:"https://clikview.com/upload/photos/2022/10/RnYEslJNFRWdt1bKqdlC_13_d7ee7b8f55544fa5779f7f507cb35076_image.png",
            articleTitle:"CCP Opens Police Department in the US: Free Viewing to the Epoch Times Documentary  (see below)",
            articleDesc:'"CCP Opens Police Department in the US; COVID-19 Vaccine Autopsy Reports Hidden From Public" <br/> CROSSROADS <br />by JOSHUA PHILIPP of the Epoch Times <br /> "The Chinese Communis..',
            userName:"Sharon Leonard",
            userImg:"https://clikview.com/upload/photos/2022/08/cSMEBMWvjnCk7fw7kDI6_22_bcd130e53f942ddf2283a48884c7fc3c_image.jpeg",
            publish:"13/10/22",
        },
    ]
    function addPlayBtn(id){
        let divId="articles"+id;
        document.getElementById(`${divId}`).classList.add('articleHover');
      }
      function removePlayBtn(id){
        let divId="articles"+id;
        document.getElementById(`${divId}`).classList.remove('articleHover');
      }
    return (
            <div className="hide_top container-home" >

                <div className="content pt_shadow yp_trans">

                    <div className="home-page-categories">

                        <div className="title">

                            <h4>

                                <div Style="background:#673ab7"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-bar-chart"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg></div> Articles

                                <span className="view_more_link"><a href="https://clikview.com/articles" data-load="?link1=articles">Explore more <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path></svg></a></span>

                            </h4>

                        </div>

                        <div className="articles-content pt_homep_articls">

                            <div className="row">
                                {data.map((element)=>{
                                    return <div className="col-md-6  col-lg-3 video-wrapper article-wrapper pt_article_list" data-id="104" id="article-104" key={element.articleId}>
                                    <div className="pt_article_h_list" Style="background: #303233; border-color: #3d3d3d;">
                                        <div className="video-thumb">
                                            <a href="https://clikview.com/articles/read/the-real-dr-fauci-the-movie_104.html" onMouseEnter={()=>{addPlayBtn(element.articleId)}} onMouseLeave={()=>{removePlayBtn(element.articleId)}} data-load="?link1=read&amp;id=the-real-dr-fauci-the-movie_104.html">
                                                <img width="200" height="170" src={element.articleImg} className="" id={"articles"+element.articleId}  alt="The Real Dr.  Fauci - The Movie"/></a>
                                        </div>
                                        <div className="video-info">
                                            <div className="article-title">
                                                <h4><a href="https://clikview.com/articles/read/the-real-dr-fauci-the-movie_104.html" data-load="?link1=read&amp;id=the-real-dr-fauci-the-movie_104.html">{element.articleTitle}</a> </h4>
                                            </div>
                                            <div className="article-desc" Style="color:white">
                                                <p>{element.articleDesc}</p>
                                            </div>
                                            <div className="postFooter">
                                                <div className="article_pub_user">
                                                    <a href="https://clikview.com/@Xileen" data-load="?link1=timeline&amp;id=Xileen">
                                                        <img src={element.userImg} alt="Xileen avatar" />
                                                    </a>&nbsp;&nbsp;
                                                    <div>
                                                        <h6><a href="https://clikview.com/@Xileen" >{element.userName}</a></h6>
                                                        <span className="article-views">{element.publish}</span>
                                                    </div>
                                                </div>
                                                <div className="u-floatLeft">
                                                    <a href="https://clikview.com/articles/read/the-real-dr-fauci-the-movie_104.html" data-load="?link1=read&amp;id=the-real-dr-fauci-the-movie_104.html" className="btn btn-sm btn-mat btn-default">
                                                        Read more <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="clear"></div>
                                </div>
                                })}
                            </div>

                        </div>

                    </div>

                    <div className="clear"></div>

                </div>

                <hr className="dark_hr" />

            </div>

    )
}
export default Articles