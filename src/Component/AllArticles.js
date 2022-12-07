import React from 'react'
import MobileSearch from './MobileSearch';
import { Link } from "react-router-dom"

function AllArticles(props) {
    const { searchOpen, expandNav } = props;
    return (
        <div>
            <div className={expandNav ? "main-container shrinkWidth bodyfixed" : "main-container expandWidth"} Style="z-index:-1">
                <div id="main-container" class="main-content  container " data-logged="true">
                    {searchOpen ? <MobileSearch /> : ""}
                    <div class="ads-placment" id="header_ad_"></div>
                    <div class="announcement-renderer">

                    </div>
                    <div id="container_content"><input type="hidden" id="json-data" value="{&quot;title&quot;:&quot;Articles - ClikView - Real Content For You&quot;,&quot;description&quot;:&quot;Clikview is a Video Sharing Platform, Clikview is the best way to start your own video sharing channel! Real Content for you.&quot;,&quot;keyword&quot;:&quot;clikview,video sharing, real content&quot;,&quot;page&quot;:&quot;articles&quot;,&quot;url&quot;:&quot;https:\/\/clikview.com\/articles&quot;,&quot;is_movie&quot;:false}" />
                        <div class="pt_page_headr">
                            <h4 class="page_head"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill-rule="evenodd" fill="currentColor" d="M2.62356 2.35132C2.85479 2.21713 3.13998 2.21617 3.3721 2.34882L6.5 4.13619L9.6279 2.34882C9.85847 2.21706 10.1415 2.21706 10.3721 2.34882L13.5 4.13619L16.6279 2.34882C16.86 2.21617 17.1452 2.21713 17.3764 2.35132C17.6077 2.48551 17.75 2.73265 17.75 3V11.25H21C21.4142 11.25 21.75 11.5858 21.75 12V19C21.75 20.5188 20.5188 21.75 19 21.75H9H8.94513C7.57754 21.75 6.47522 21.75 5.60825 21.6335C4.70814 21.5125 3.95027 21.2536 3.34835 20.6517C2.74643 20.0497 2.48754 19.2919 2.36652 18.3918C2.24996 17.5248 2.24998 16.4225 2.25 15.0549V15V3C2.25 2.73265 2.39232 2.48551 2.62356 2.35132ZM19 20.25C19.6904 20.25 20.25 19.6904 20.25 19V12.75H17.75V19C17.75 19.6904 18.3096 20.25 19 20.25ZM16.5499 20.25H9C7.56458 20.25 6.56347 20.2484 5.80812 20.1469C5.07435 20.0482 4.68577 19.8678 4.40901 19.591C4.13225 19.3142 3.9518 18.9257 3.85315 18.1919C3.75159 17.4365 3.75 16.4354 3.75 15V4.29238L6.1279 5.65118C6.35847 5.78294 6.64153 5.78294 6.8721 5.65118L10 3.86381L13.1279 5.65118C13.3585 5.78294 13.6415 5.78294 13.8721 5.65118L16.25 4.29239V12V19C16.25 19.4501 16.3581 19.875 16.5499 20.25ZM6.25 9C6.25 8.58579 6.58579 8.25 7 8.25H11C11.4142 8.25 11.75 8.58579 11.75 9C11.75 9.41421 11.4142 9.75 11 9.75H7C6.58579 9.75 6.25 9.41421 6.25 9ZM7 12.25C6.58579 12.25 6.25 12.5858 6.25 13C6.25 13.4142 6.58579 13.75 7 13.75H13C13.4142 13.75 13.75 13.4142 13.75 13C13.75 12.5858 13.4142 12.25 13 12.25H7ZM6.25 17C6.25 16.5858 6.58579 16.25 7 16.25H13C13.4142 16.25 13.75 16.5858 13.75 17C13.75 17.4142 13.4142 17.75 13 17.75H7C6.58579 17.75 6.25 17.4142 6.25 17Z"></path></svg> Most recent articles</h4>
                            <Link to="/home2/createarticle" class="btn btn-main" data-load="?link1=create_article">Create article </Link>
                        </div>

                        <div class="row">
                            <div class="col-md-8">
                                <div class="articles-content">
                                    <div class="row subscriptions-list author-list articles-container">
                                        <div class="col-md-6 video-wrapper article-wrapper pt_article_list" data-id="179" id="article-179">
                                            <div class="pt_article_h_list">
                                                <div class="video-thumb">
                                                    <a href="https://clikview.com/articles/read/water-039-s-journey-by-dennis-binns_179.html" data-load="?link1=read&amp;id=water-039-s-journey-by-dennis-binns_179.html"><img width="200" height="170" src="https://clikview.com/upload/photos/2022/12/zXvLg3MYvvsHKjWjdL4a_06_ddb67daacc04789ebd55f2f49e3a7fbc_image.jpg" alt="Water's Journey - by Dennis Binns" /></a>
                                                </div>
                                                <div class="video-info">
                                                    <div class="article-title">
                                                        <h4><a href="https://clikview.com/articles/read/water-039-s-journey-by-dennis-binns_179.html" data-load="?link1=read&amp;id=water-039-s-journey-by-dennis-binns_179.html">Water's Journey - by Dennis Binns</a> </h4>
                                                    </div>
                                                    <div class="article-desc">
                                                        <p>A Poem about life's journey of both water and mankind.</p>
                                                    </div>
                                                    <div class="postFooter">
                                                        <div class="u-floatRight">
                                                            <div class="article-views">12/06/22</div>
                                                        </div>
                                                        <div class="u-floatLeft">
                                                            <Link to="/home2/articledetails/articleid'">
                                                                Read more <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="clear"></div>
                                        </div>

                                        <div class="col-md-6 video-wrapper article-wrapper pt_article_list" data-id="178" id="article-178">
                                            <div class="pt_article_h_list">
                                                <div class="video-thumb">
                                                    <a href="https://clikview.com/articles/read/a-pondering-moment_178.html" data-load="?link1=read&amp;id=a-pondering-moment_178.html"><img width="200" height="170" src="https://clikview.com/upload/photos/2022/12/VUmEitiBJezUlE7ZJi1W_04_9e9cbefbbf1462f9c13ed7b3e57c73b2_image.jpg" alt="A Pondering Moment" /></a>
                                                </div>
                                                <div class="video-info">
                                                    <div class="article-title">
                                                        <h4><a href="https://clikview.com/articles/read/a-pondering-moment_178.html" data-load="?link1=read&amp;id=a-pondering-moment_178.html">A Pondering Moment</a> </h4>
                                                    </div>
                                                    <div class="article-desc">
                                                        <p>The Spider's Web</p>
                                                    </div>
                                                    <div class="postFooter">
                                                        <div class="u-floatRight">
                                                            <div class="article-views">12/04/22</div>
                                                        </div>
                                                        <div class="u-floatLeft">
                                                            <Link to="/home2/articledetails/articleid'">
                                                                Read more <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="clear"></div>
                                        </div>

                                        <div class="col-md-6 video-wrapper article-wrapper pt_article_list" data-id="177" id="article-177">
                                            <div class="pt_article_h_list">
                                                <div class="video-thumb">
                                                    <a href="https://clikview.com/articles/read/rancid-piles-of-donated-clothes-litter-developing-countries_177.html" data-load="?link1=read&amp;id=rancid-piles-of-donated-clothes-litter-developing-countries_177.html"><img width="200" height="170" src="https://clikview.com/upload/photos/2022/12/G47VF26wzVVz4yoYRpCR_03_242076197f291b13d7f4143e7424f0e4_image.jpg" alt="Rancid Piles of Donated Clothes Litter Developing Countries" /></a>
                                                </div>
                                                <div class="video-info">
                                                    <div class="article-title">
                                                        <h4><a href="https://clikview.com/articles/read/rancid-piles-of-donated-clothes-litter-developing-countries_177.html" data-load="?link1=read&amp;id=rancid-piles-of-donated-clothes-litter-developing-countries_177.html">Rancid Piles of Donated Clothes Litter Developing Countries</a> </h4>
                                                    </div>
                                                    <div class="article-desc">
                                                        <p>Donated clothing enters a stream of garments, many of which are shipped to poor countries where they are sorted and sold or dumped in landfills creating small mountains of waste along beache..</p>
                                                    </div>
                                                    <div class="postFooter">
                                                        <div class="u-floatRight">
                                                            <div class="article-views">12/03/22</div>
                                                        </div>
                                                        <div class="u-floatLeft">
                                                            <Link to="/home2/articledetails/articleid'">
                                                                Read more <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="clear"></div>
                                        </div>

                                        <div class="col-md-6 video-wrapper article-wrapper pt_article_list" data-id="176" id="article-176">
                                            <div class="pt_article_h_list">
                                                <div class="video-thumb">
                                                    <a href="https://clikview.com/articles/read/quot-grandma-039-s-two-cents-quot-crwdunits-are-finally-here-gateway-to-a-better-world_176.html" data-load="?link1=read&amp;id=quot-grandma-039-s-two-cents-quot-crwdunits-are-finally-here-gateway-to-a-better-world_176.html"><img width="200" height="170" src="https://clikview.com/upload/photos/2022/12/9TmfPfvji84gfIuybOYX_02_055d74f49c435c331beea88412b2af7f_image.png" alt="&quot;Grandma's Two Cents&quot; --CrwdUnits are finally here. Gateway To a Better World." /></a>
                                                </div>
                                                <div class="video-info">
                                                    <div class="article-title">
                                                        <h4><a href="https://clikview.com/articles/read/quot-grandma-039-s-two-cents-quot-crwdunits-are-finally-here-gateway-to-a-better-world_176.html" data-load="?link1=read&amp;id=quot-grandma-039-s-two-cents-quot-crwdunits-are-finally-here-gateway-to-a-better-world_176.html">"Grandma's Two Cents" --CrwdUnits are finally here. Gateway To a Better World.</a> </h4>
                                                    </div>
                                                    <div class="article-desc">
                                                        <p>This blog is named for my Irish Grandmother, Mary Ellen Lee-Hughes, who taught me to use logic and common sense when navigating through life situations.</p>
                                                    </div>
                                                    <div class="postFooter">
                                                        <div class="u-floatRight">
                                                            <div class="article-views">12/02/22</div>
                                                        </div>
                                                        <div class="u-floatLeft">
                                                            <Link to="/home2/articledetails/articleid'">
                                                                Read more <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="clear"></div>
                                        </div>

                                        <div class="col-md-6 video-wrapper article-wrapper pt_article_list" data-id="175" id="article-175">
                                            <div class="pt_article_h_list">
                                                <div class="video-thumb">
                                                    <a href="https://clikview.com/articles/read/all-covid-shots-contain-nanotechnology-and-graphene-oxide-scientists-claim_175.html" data-load="?link1=read&amp;id=all-covid-shots-contain-nanotechnology-and-graphene-oxide-scientists-claim_175.html"><img width="200" height="170" src="https://clikview.com/upload/photos/2022/12/4AxCxmiubLoI6Ky2mgcZ_01_ab442cdc87b2b391e6758d28c6d6fd30_image.png" alt="All COVID shots contain nanotechnology and graphene oxide, scientists claim" /></a>
                                                </div>
                                                <div class="video-info">
                                                    <div class="article-title">
                                                        <h4><a href="https://clikview.com/articles/read/all-covid-shots-contain-nanotechnology-and-graphene-oxide-scientists-claim_175.html" data-load="?link1=read&amp;id=all-covid-shots-contain-nanotechnology-and-graphene-oxide-scientists-claim_175.html">All COVID shots contain nanotechnology and graphene oxide, scientists claim</a> </h4>
                                                    </div>
                                                    <div class="article-desc">
                                                        <p>Elon Musk has admitted mRNA-based vaxxes can be used to manipulate and possibly even control the human body.</p>
                                                    </div>
                                                    <div class="postFooter">
                                                        <div class="u-floatRight">
                                                            <div class="article-views">12/01/22</div>
                                                        </div>
                                                        <div class="u-floatLeft">
                                                            <Link to="/home2/articledetails/articleid'">
                                                                Read more <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="clear"></div>
                                        </div>

                                        <div class="col-md-6 video-wrapper article-wrapper pt_article_list" data-id="174" id="article-174">
                                            <div class="pt_article_h_list">
                                                <div class="video-thumb">
                                                    <a href="https://clikview.com/articles/read/are-you-feeding-your-baby-mrna-via-breast-milk_174.html" data-load="?link1=read&amp;id=are-you-feeding-your-baby-mrna-via-breast-milk_174.html"><img width="200" height="170" src="https://clikview.com/upload/photos/2022/11/nhJjxIzU58KkCpEAxzNV_30_ebe3bfc995f5a12253580c23e23ff310_image.jpg" alt="Are you feeding your baby mRNA via breast milk?" /></a>
                                                </div>
                                                <div class="video-info">
                                                    <div class="article-title">
                                                        <h4><a href="https://clikview.com/articles/read/are-you-feeding-your-baby-mrna-via-breast-milk_174.html" data-load="?link1=read&amp;id=are-you-feeding-your-baby-mrna-via-breast-milk_174.html">Are you feeding your baby mRNA via breast milk?</a> </h4>
                                                    </div>
                                                    <div class="article-desc">
                                                        <p>“The researchers speculated that lipid nanoparticles containing mRNA, once injected into the arm, are transported via the lymphatic system to the mammary glands and expressed into breast mil..</p>
                                                    </div>
                                                    <div class="postFooter">
                                                        <div class="u-floatRight">
                                                            <div class="article-views">11/30/22</div>
                                                        </div>
                                                        <div class="u-floatLeft">
                                                            <Link to="/home2/articledetails/articleid'">
                                                                Read more <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="clear"></div>
                                        </div>

                                        <div class="col-md-6 video-wrapper article-wrapper pt_article_list" data-id="173" id="article-173">
                                            <div class="pt_article_h_list">
                                                <div class="video-thumb">
                                                    <a href="https://clikview.com/articles/read/a-pondering-moment_173.html" data-load="?link1=read&amp;id=a-pondering-moment_173.html"><img width="200" height="170" src="https://clikview.com/upload/photos/2022/11/7pXfaOpnOjDxwZiLMOw4_29_ba9b18cf5fc33fcf793c0c7931ebef35_image.jpg" alt="A Pondering Moment" /></a>
                                                </div>
                                                <div class="video-info">
                                                    <div class="article-title">
                                                        <h4><a href="https://clikview.com/articles/read/a-pondering-moment_173.html" data-load="?link1=read&amp;id=a-pondering-moment_173.html">A Pondering Moment</a> </h4>
                                                    </div>
                                                    <div class="article-desc">
                                                        <p>Change Requires Sacrifice</p>
                                                    </div>
                                                    <div class="postFooter">
                                                        <div class="u-floatRight">
                                                            <div class="article-views">11/29/22</div>
                                                        </div>
                                                        <div class="u-floatLeft">
                                                            <Link to="/home2/articledetails/articleid'">
                                                                Read more <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="clear"></div>
                                        </div>

                                        <div class="col-md-6 video-wrapper article-wrapper pt_article_list" data-id="172" id="article-172">
                                            <div class="pt_article_h_list">
                                                <div class="video-thumb">
                                                    <a href="https://clikview.com/articles/read/inspired-landscaping-how-your-archetypes-influence-design_172.html" data-load="?link1=read&amp;id=inspired-landscaping-how-your-archetypes-influence-design_172.html"><img width="200" height="170" src="https://clikview.com/upload/photos/2022/11/uzd3NPvOPICSjqj5DNXx_28_abf4f9d8f3dae5945e0dc8a7080bf14c_image.jpg" alt="Inspired Landscaping: How Your Archetypes Influence Design" /></a>
                                                </div>
                                                <div class="video-info">
                                                    <div class="article-title">
                                                        <h4><a href="https://clikview.com/articles/read/inspired-landscaping-how-your-archetypes-influence-design_172.html" data-load="?link1=read&amp;id=inspired-landscaping-how-your-archetypes-influence-design_172.html">Inspired Landscaping: How Your Archetypes Influence Design</a> </h4>
                                                    </div>
                                                    <div class="article-desc">
                                                        <p>What does your archetype have to do with landscaping? EVERYTHING! Your landscaping should be an expression of your soul...and your soul is expressed through archetypes.</p>
                                                    </div>
                                                    <div class="postFooter">
                                                        <div class="u-floatRight">
                                                            <div class="article-views">11/28/22</div>
                                                        </div>
                                                        <div class="u-floatLeft">
                                                            <Link to="/home2/articledetails/articleid'">
                                                                Read more <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="clear"></div>
                                        </div>

                                        <div class="col-md-6 video-wrapper article-wrapper pt_article_list" data-id="171" id="article-171">
                                            <div class="pt_article_h_list">
                                                <div class="video-thumb">
                                                    <a href="https://clikview.com/articles/read/free-will_171.html" data-load="?link1=read&amp;id=free-will_171.html"><img width="200" height="170" src="https://clikview.com/upload/photos/2022/11/CCNAf3vmMCWM47Z4vPiI_26_677c062908f5cc845bab0b74b7febd45_image.jpg" alt="Free Will" /></a>
                                                </div>
                                                <div class="video-info">
                                                    <div class="article-title">
                                                        <h4><a href="https://clikview.com/articles/read/free-will_171.html" data-load="?link1=read&amp;id=free-will_171.html">Free Will</a> </h4>
                                                    </div>
                                                    <div class="article-desc">
                                                        <p>A short dissertation on our use of this God-given gift.</p>
                                                    </div>
                                                    <div class="postFooter">
                                                        <div class="u-floatRight">
                                                            <div class="article-views">11/26/22</div>
                                                        </div>
                                                        <div class="u-floatLeft">
                                                            <Link to="/home2/articledetails/articleid'">
                                                                Read more <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="clear"></div>
                                        </div>

                                        <div class="col-md-6 video-wrapper article-wrapper pt_article_list" data-id="170" id="article-170">
                                            <div class="pt_article_h_list">
                                                <div class="video-thumb">
                                                    <a href="https://clikview.com/articles/read/sticky-putty-to-clean-your-keyboard_170.html" data-load="?link1=read&amp;id=sticky-putty-to-clean-your-keyboard_170.html"><img width="200" height="170" src="https://clikview.com/upload/photos/2022/11/h5Px6EbTZclwqVmZq8zG_25_523c07c5558f6723ba598d277e4f5082_image.jpg" alt="Sticky putty to clean your keyboard" /></a>
                                                </div>
                                                <div class="video-info">
                                                    <div class="article-title">
                                                        <h4><a href="https://clikview.com/articles/read/sticky-putty-to-clean-your-keyboard_170.html" data-load="?link1=read&amp;id=sticky-putty-to-clean-your-keyboard_170.html">Sticky putty to clean your keyboard</a> </h4>
                                                    </div>
                                                    <div class="article-desc">
                                                        <p>Found an old piece of paper I kept on how to make your own sticky putty.</p>
                                                    </div>
                                                    <div class="postFooter">
                                                        <div class="u-floatRight">
                                                            <div class="article-views">11/25/22</div>
                                                        </div>
                                                        <div class="u-floatLeft">
                                                            <Link to="/home2/articledetails/articleid'">
                                                                Read more <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="clear"></div>
                                        </div>

                                        <div class="col-md-6 video-wrapper article-wrapper pt_article_list" data-id="169" id="article-169">
                                            <div class="pt_article_h_list">
                                                <div class="video-thumb">
                                                    <a href="https://clikview.com/articles/read/more-than-200-million-doses-of-covid-shots-dumped-due-to-diminishing-demand_169.html" data-load="?link1=read&amp;id=more-than-200-million-doses-of-covid-shots-dumped-due-to-diminishing-demand_169.html"><img width="200" height="170" src="https://clikview.com/upload/photos/2022/11/qfTWeDn6BEPLmcsm6Fea_23_098e24ce05825073d10f9ceb8a523f5e_image.jpg" alt="More Than 200 Million Doses of COVID Shots Dumped Due to Diminishing Demand" /></a>
                                                </div>
                                                <div class="video-info">
                                                    <div class="article-title">
                                                        <h4><a href="https://clikview.com/articles/read/more-than-200-million-doses-of-covid-shots-dumped-due-to-diminishing-demand_169.html" data-load="?link1=read&amp;id=more-than-200-million-doses-of-covid-shots-dumped-due-to-diminishing-demand_169.html">More Than 200 Million Doses of COVID Shots Dumped Due to Diminishing Demand</a> </h4>
                                                    </div>
                                                    <div class="article-desc">
                                                        <p>U.S. Discarded 81.1 Million Doses of COVID Shots <br />Canada Disposes of More Than 25 Million COVID Shot Doses <br />Switzerland Will Throw Away 9 Million Doses of Spikevax <br />India Threw Away..</p>
                                                    </div>
                                                    <div class="postFooter">
                                                        <div class="u-floatRight">
                                                            <div class="article-views">11/23/22</div>
                                                        </div>
                                                        <div class="u-floatLeft">
                                                            <Link to="/home2/articledetails/articleid'">
                                                                Read more <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="clear"></div>
                                        </div>

                                        <div class="col-md-6 video-wrapper article-wrapper pt_article_list" data-id="168" id="article-168">
                                            <div class="pt_article_h_list">
                                                <div class="video-thumb">
                                                    <a href="https://clikview.com/articles/read/can-your-breast-implants-cause-cancer_168.html" data-load="?link1=read&amp;id=can-your-breast-implants-cause-cancer_168.html"><img width="200" height="170" src="https://clikview.com/upload/photos/2022/11/dneeo8zWhO9AgXD45TFy_23_97d24e5ba6f653481de4d644a9843fae_image.png" alt="Can your Breast Implants cause Cancer?" /></a>
                                                </div>
                                                <div class="video-info">
                                                    <div class="article-title">
                                                        <h4><a href="https://clikview.com/articles/read/can-your-breast-implants-cause-cancer_168.html" data-load="?link1=read&amp;id=can-your-breast-implants-cause-cancer_168.html">Can your Breast Implants cause Cancer?</a> </h4>
                                                    </div>
                                                    <div class="article-desc">
                                                        <p>Black Box Warning Placed on Breast Implants in 2021</p>
                                                    </div>
                                                    <div class="postFooter">
                                                        <div class="u-floatRight">
                                                            <div class="article-views">11/23/22</div>
                                                        </div>
                                                        <div class="u-floatLeft">
                                                            <Link to="/home2/articledetails/articleid'">
                                                                Read more <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="clear"></div>
                                        </div>

                                        <div class="col-md-6 video-wrapper article-wrapper pt_article_list" data-id="167" id="article-167">
                                            <div class="pt_article_h_list">
                                                <div class="video-thumb">
                                                    <a href="https://clikview.com/articles/read/grandma-039-s-two-cents-quot-a-prayer-a-day-helps-keep-the-doctor-away-quot-fit-focused-intentional_167.html" data-load="?link1=read&amp;id=grandma-039-s-two-cents-quot-a-prayer-a-day-helps-keep-the-doctor-away-quot-fit-focused-intentional_167.html"><img width="200" height="170" src="https://clikview.com/upload/photos/2022/11/PAlLlzafxbWlJxn8DolZ_22_5638e527963082f4522c148243b02ceb_image.png" alt="Grandma's Two Cents   &quot;A Prayer a Day Helps Keep the Doctor Away&quot;    (FIT Focused Intentional Thought)  Tues Eve." /></a>
                                                </div>
                                                <div class="video-info">
                                                    <div class="article-title">
                                                        <h4><a href="https://clikview.com/articles/read/grandma-039-s-two-cents-quot-a-prayer-a-day-helps-keep-the-doctor-away-quot-fit-focused-intentional_167.html" data-load="?link1=read&amp;id=grandma-039-s-two-cents-quot-a-prayer-a-day-helps-keep-the-doctor-away-quot-fit-focused-intentional_167.html">Grandma's Two Cents   "A Prayer a Day Helps Keep the Doctor Away"    (FIT Focused Intentional Thought)  Tues Eve.</a> </h4>
                                                    </div>
                                                    <div class="article-desc">
                                                        <p>This blog is named for my Irish Grandmother, Mary Ellen Lee-Hughes, who taught me to use logic and common sense when navigating through life situations.    https://askdrbuttar.com/meditate</p>
                                                    </div>
                                                    <div class="postFooter">
                                                        <div class="u-floatRight">
                                                            <div class="article-views">12/07/22</div>
                                                        </div>
                                                        <div class="u-floatLeft">
                                                            <Link to="/home2/articledetails/articleid'">
                                                                Read more <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="clear"></div>
                                        </div>

                                        <div class="col-md-6 video-wrapper article-wrapper pt_article_list" data-id="166" id="article-166">
                                            <div class="pt_article_h_list">
                                                <div class="video-thumb">
                                                    <a href="https://clikview.com/articles/read/is-clean-unvaccinated-blood-becoming-a-hot-high-dollar-commodity_166.html" data-load="?link1=read&amp;id=is-clean-unvaccinated-blood-becoming-a-hot-high-dollar-commodity_166.html"><img width="200" height="170" src="https://clikview.com/upload/photos/2022/11/PdkPy3Psuydtg14KVlaq_21_0ac2a245a759e8c14c451d91ffbb79f6_image.png" alt="Is clean, unvaccinated blood becoming a hot high-dollar commodity?" /></a>
                                                </div>
                                                <div class="video-info">
                                                    <div class="article-title">
                                                        <h4><a href="https://clikview.com/articles/read/is-clean-unvaccinated-blood-becoming-a-hot-high-dollar-commodity_166.html" data-load="?link1=read&amp;id=is-clean-unvaccinated-blood-becoming-a-hot-high-dollar-commodity_166.html">Is clean, unvaccinated blood becoming a hot high-dollar commodity?</a> </h4>
                                                    </div>
                                                    <div class="article-desc">
                                                        <p>Unvaccinated blood banks? Learn about the growing movement for clean transfusions <br /> <br />Swiss naturopath George Della Pietra has started a new “SafeBlood Donation” service to provide clea..</p>
                                                    </div>
                                                    <div class="postFooter">
                                                        <div class="u-floatRight">
                                                            <div class="article-views">11/21/22</div>
                                                        </div>
                                                        <div class="u-floatLeft">
                                                            <Link to="/home2/articledetails/articleid'">
                                                                Read more <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="clear"></div>
                                        </div>

                                        <div class="col-md-6 video-wrapper article-wrapper pt_article_list" data-id="165" id="article-165">
                                            <div class="pt_article_h_list">
                                                <div class="video-thumb">
                                                    <a href="https://clikview.com/articles/read/ftx-was-heavy-into-funding-vaccine-research-biotech-engineering-and-other-globalist-depopulation-age_165.html" data-load="?link1=read&amp;id=ftx-was-heavy-into-funding-vaccine-research-biotech-engineering-and-other-globalist-depopulation-age_165.html"><img width="200" height="170" src="https://clikview.com/upload/photos/2022/11/lbIwNurosBMa62a2sN9C_21_436896b26023e80cd2c5fda54f2015a5_image.png" alt="FTX was HEAVY into funding vaccine research, biotech engineering and other globalist depopulation agendas through the “scientific research” community.." /></a>
                                                </div>
                                                <div class="video-info">
                                                    <div class="article-title">
                                                        <h4><a href="https://clikview.com/articles/read/ftx-was-heavy-into-funding-vaccine-research-biotech-engineering-and-other-globalist-depopulation-age_165.html" data-load="?link1=read&amp;id=ftx-was-heavy-into-funding-vaccine-research-biotech-engineering-and-other-globalist-depopulation-age_165.html">FTX was HEAVY into funding vaccine research, biotech engineering and other globalist depopulation agendas through the “scientific research” community..</a> </h4>
                                                    </div>
                                                    <div class="article-desc">
                                                        <p>The hundreds of grants and investments totaling at least $132 million that were earmarked by the FTX Foundation and its FTX Future Fund for use in developing new bioweapons, “vaccines” and o..</p>
                                                    </div>
                                                    <div class="postFooter">
                                                        <div class="u-floatRight">
                                                            <div class="article-views">11/21/22</div>
                                                        </div>
                                                        <div class="u-floatLeft">
                                                            <Link to="/home2/articledetails/articleid'">
                                                                Read more <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="clear"></div>
                                        </div>

                                        <div class="col-md-6 video-wrapper article-wrapper pt_article_list" data-id="164" id="article-164">
                                            <div class="pt_article_h_list">
                                                <div class="video-thumb">
                                                    <a href="https://clikview.com/articles/read/medical-warning-lung-transplant-recipients-develop-respiratory-distress-and-organ-rejection-after-se_164.html" data-load="?link1=read&amp;id=medical-warning-lung-transplant-recipients-develop-respiratory-distress-and-organ-rejection-after-se_164.html"><img width="200" height="170" src="https://clikview.com/upload/photos/2022/11/COE3JFYgshGUCzPwukMQ_21_a839206a0258a2650ae2464842799229_image.png" alt="MEDICAL WARNING: Lung transplant recipients develop respiratory distress and organ rejection after second dose of covid-19 vaccine" /></a>
                                                </div>
                                                <div class="video-info">
                                                    <div class="article-title">
                                                        <h4><a href="https://clikview.com/articles/read/medical-warning-lung-transplant-recipients-develop-respiratory-distress-and-organ-rejection-after-se_164.html" data-load="?link1=read&amp;id=medical-warning-lung-transplant-recipients-develop-respiratory-distress-and-organ-rejection-after-se_164.html">MEDICAL WARNING: Lung transplant recipients develop respiratory distress and organ rejection after second dose of covid-19 vaccine</a> </h4>
                                                    </div>
                                                    <div class="article-desc">
                                                        <p>Three female lung transplant recipients suffer respiratory distress caused by the covid-19 vaccines</p>
                                                    </div>
                                                    <div class="postFooter">
                                                        <div class="u-floatRight">
                                                            <div class="article-views">11/21/22</div>
                                                        </div>
                                                        <div class="u-floatLeft">
                                                            <Link to="/home2/articledetails/articleid'">
                                                                Read more <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="clear"></div>
                                        </div>

                                        <div class="col-md-6 video-wrapper article-wrapper pt_article_list" data-id="163" id="article-163">
                                            <div class="pt_article_h_list">
                                                <div class="video-thumb">
                                                    <a href="https://clikview.com/articles/read/this-is-why-the-new-world-order-is-doomed-to-fail_163.html" data-load="?link1=read&amp;id=this-is-why-the-new-world-order-is-doomed-to-fail_163.html"><img width="200" height="170" src="https://clikview.com/upload/photos/2022/11/6AWMLxHEBz8KSG7pXFis_20_2d9e4f12a80e975efe4a1d3d5e7b7db5_image.jpg" alt="This is why the New World Order is doomed to fail…" /></a>
                                                </div>
                                                <div class="video-info">
                                                    <div class="article-title">
                                                        <h4><a href="https://clikview.com/articles/read/this-is-why-the-new-world-order-is-doomed-to-fail_163.html" data-load="?link1=read&amp;id=this-is-why-the-new-world-order-is-doomed-to-fail_163.html">This is why the New World Order is doomed to fail…</a> </h4>
                                                    </div>
                                                    <div class="article-desc">
                                                        <p>There is no doubt that the criminal New World Order that is being established all around us, will come crashing down on the heads of those who built it.</p>
                                                    </div>
                                                    <div class="postFooter">
                                                        <div class="u-floatRight">
                                                            <div class="article-views">11/20/22</div>
                                                        </div>
                                                        <div class="u-floatLeft">
                                                            <Link to="/home2/articledetails/articleid'">
                                                                Read more <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="clear"></div>
                                        </div>

                                        <div class="col-md-6 video-wrapper article-wrapper pt_article_list" data-id="162" id="article-162">
                                            <div class="pt_article_h_list">
                                                <div class="video-thumb">
                                                    <a href="https://clikview.com/articles/read/a-pondering-moment_162.html" data-load="?link1=read&amp;id=a-pondering-moment_162.html"><img width="200" height="170" src="https://clikview.com/upload/photos/2022/11/vlQo7QweC4Lp1IZLnhm8_19_6f4f41bd05562812aa4606eda9820477_image.jpg" alt="A Pondering Moment" /></a>
                                                </div>
                                                <div class="video-info">
                                                    <div class="article-title">
                                                        <h4><a href="https://clikview.com/articles/read/a-pondering-moment_162.html" data-load="?link1=read&amp;id=a-pondering-moment_162.html">A Pondering Moment</a> </h4>
                                                    </div>
                                                    <div class="article-desc">
                                                        <p>The effects of lying to others</p>
                                                    </div>
                                                    <div class="postFooter">
                                                        <div class="u-floatRight">
                                                            <div class="article-views">11/19/22</div>
                                                        </div>
                                                        <div class="u-floatLeft">
                                                            <Link to="/home2/articledetails/articleid'">
                                                                Read more <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="clear"></div>
                                        </div>

                                        <div class="col-md-6 video-wrapper article-wrapper pt_article_list" data-id="161" id="article-161">
                                            <div class="pt_article_h_list">
                                                <div class="video-thumb">
                                                    <a href="https://clikview.com/articles/read/natural-views-and-the-science-of-stress-reduction_161.html" data-load="?link1=read&amp;id=natural-views-and-the-science-of-stress-reduction_161.html"><img width="200" height="170" src="https://clikview.com/upload/photos/2022/11/b7cYAfcmWlgLFkQieDav_18_a62ee74f066a75163b00f07ef4f602a0_image.jpg" alt="Natural Views and the Science of Stress Reduction" /></a>
                                                </div>
                                                <div class="video-info">
                                                    <div class="article-title">
                                                        <h4><a href="https://clikview.com/articles/read/natural-views-and-the-science-of-stress-reduction_161.html" data-load="?link1=read&amp;id=natural-views-and-the-science-of-stress-reduction_161.html">Natural Views and the Science of Stress Reduction</a> </h4>
                                                    </div>
                                                    <div class="article-desc">
                                                        <p>What if I told you a simple view of nature from your home can reduce your stress levels? That’s right! Your home can be designed to alleviate stress through the strategic use of views from k..</p>
                                                    </div>
                                                    <div class="postFooter">
                                                        <div class="u-floatRight">
                                                            <div class="article-views">11/28/22</div>
                                                        </div>
                                                        <div class="u-floatLeft">
                                                            <Link to="/home2/articledetails/articleid'">
                                                                Read more <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="clear"></div>
                                        </div>

                                        <div class="col-md-6 video-wrapper article-wrapper pt_article_list" data-id="160" id="article-160">
                                            <div class="pt_article_h_list">
                                                <div class="video-thumb">
                                                    <a href="https://clikview.com/articles/read/thrombotic-thrombocytopenia-horrific-illness-from-covid-vac-also-a-article-by-dr-peter-mccullough-li_160.html" data-load="?link1=read&amp;id=thrombotic-thrombocytopenia-horrific-illness-from-covid-vac-also-a-article-by-dr-peter-mccullough-li_160.html"><img width="200" height="170" src="https://clikview.com/upload/photos/2022/11/4YmRyN57eicgsPCglWLn_18_b3cd1c8e0acc8e2bc55421951cff9f2c_image.png" alt="Thrombotic Thrombocytopenia, Horrific Illness From Covid Vac. Also, an article  by Dr Peter McCullough (link below)" /></a>
                                                </div>
                                                <div class="video-info">
                                                    <div class="article-title">
                                                        <h4><a href="https://clikview.com/articles/read/thrombotic-thrombocytopenia-horrific-illness-from-covid-vac-also-a-article-by-dr-peter-mccullough-li_160.html" data-load="?link1=read&amp;id=thrombotic-thrombocytopenia-horrific-illness-from-covid-vac-also-a-article-by-dr-peter-mccullough-li_160.html">Thrombotic Thrombocytopenia, Horrific Illness From Covid Vac. Also, an article  by Dr Peter McCullough (link below)</a> </h4>
                                                    </div>
                                                    <div class="article-desc">
                                                        <p>A look at how vaccine induced Thrombotic Thrombocytopenia is not only a  real Covid vaccine side effect --there are medical peer-reviewed published papers in PUBMED...Horrific complications ..</p>
                                                    </div>
                                                    <div class="postFooter">
                                                        <div class="u-floatRight">
                                                            <div class="article-views">11/18/22</div>
                                                        </div>
                                                        <div class="u-floatLeft">
                                                            <Link to="/home2/articledetails/articleid'">
                                                                Read more <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="clear"></div>
                                        </div>


                                    </div>
                                    <div class="watch-video-show-more desc" data-type="articles" onclick="PT_LoadPost('0',this);">
                                        Show more
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="article-categories">
                                    <div class="content width-100">
                                        <form class="form search-articles-form" method="post" action="">
                                            <div class="form-group">
                                                <input type="text" class="form-control" placeholder="Search for articles" name="q" />
                                                <button class="btn btn-main" type="submit">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
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
                                        <h4 class="page_head">Most popular</h4>
                                    </div>
                                    <div>
                                        <div class="related-article-wrapper">
                                            <div class="ra-title">
                                                <h5><a href="https://clikview.com/articles/read/thriving-in-a-world-of-change_2.html" data-load="?link1=read&amp;id=thriving-in-a-world-of-change_2.html">Thriving in a world of change</a></h5>
                                                <p>08/22/22</p>
                                            </div>
                                            <div class="ra-thumb" Style="background-image: url('https://clikview.com/upload/photos/2022/08/vxXsJlEUNDATZIW5lYmo_18_9cf6e0613b8af4b35067a7468e099412_image.png');"></div>
                                        </div><div class="related-article-wrapper">
                                            <div class="ra-title">
                                                <h5><a href="https://clikview.com/articles/read/get-busy-living_5.html" data-load="?link1=read&amp;id=get-busy-living_5.html">Get Busy Living</a></h5>
                                                <p>08/22/22</p>
                                            </div>
                                            <div class="ra-thumb" Style="background-image: url('https://clikview.com/upload/photos/2022/08/ahR1hu8g97FQ7oBOy91o_22_884ea6fd4020bfe0875f879add442ced_image.jpg');"></div>
                                        </div><div class="related-article-wrapper">
                                            <div class="ra-title">
                                                <h5><a href="https://clikview.com/articles/read/business-3-0_7.html" data-load="?link1=read&amp;id=business-3-0_7.html">BUSINESS 3.0</a></h5>
                                                <p>08/22/22</p>
                                            </div>
                                            <div class="ra-thumb" Style="background-image: url('https://clikview.com/upload/photos/2022/08/mSJ6mi8dQRJfYTbefoYN_22_3e30b1dec41d458bfc6e7100746abed4_image.jpg');"></div>
                                        </div><div class="related-article-wrapper">
                                            <div class="ra-title">
                                                <h5><a href="https://clikview.com/articles/read/the-real-dr-fauci-the-movie_104.html" data-load="?link1=read&amp;id=the-real-dr-fauci-the-movie_104.html">The Real Dr.  Fauci - The Movie</a></h5>
                                                <p>10/16/22</p>
                                            </div>
                                            <div class="ra-thumb" Style="background-image: url('https://clikview.com/upload/photos/2022/10/FWZN5FKMP7mSrtmlZoQQ_16_fdea892b50e1e93450c117ed6cde81c0_image.png');"></div>
                                        </div><div class="related-article-wrapper">
                                            <div class="ra-title">
                                                <h5><a href="https://clikview.com/articles/read/ccp-opens-police-department-in-the-us-free-viewing-to-the-epoch-times-documentary-see-below_101.html" data-load="?link1=read&amp;id=ccp-opens-police-department-in-the-us-free-viewing-to-the-epoch-times-documentary-see-below_101.html">CCP Opens Police Department in the US: Free Viewing to the Epoch Times Documentary  (see below)</a></h5>
                                                <p>10/13/22</p>
                                            </div>
                                            <div class="ra-thumb" Style="background-image: url('https://clikview.com/upload/photos/2022/10/RnYEslJNFRWdt1bKqdlC_13_d7ee7b8f55544fa5779f7f507cb35076_image.png');"></div>
                                        </div><div class="related-article-wrapper">
                                            <div class="ra-title">
                                                <h5><a href="https://clikview.com/articles/read/executive-order-biden-unleashes-transhuman-genetic-modification-firestorm-on-america_44.html" data-load="?link1=read&amp;id=executive-order-biden-unleashes-transhuman-genetic-modification-firestorm-on-america_44.html">Executive Order: Biden Unleashes Transhuman, Genetic Modification Firestorm On America</a></h5>
                                                <p>09/13/22</p>
                                            </div>
                                            <div class="ra-thumb" Style="background-image: url('https://clikview.com/upload/photos/2022/09/DnrOeCt8fKdE1Q14bDLu_13_66d2b83c34208eae1502397dd76082a1_image.jpg');"></div>
                                        </div><div class="related-article-wrapper">
                                            <div class="ra-title">
                                                <h5><a href="https://clikview.com/articles/read/shoulders-of-giants-dtwalsh-response-to-dr-buttar_130.html" data-load="?link1=read&amp;id=shoulders-of-giants-dtwalsh-response-to-dr-buttar_130.html">Shoulders of Giants: dtwalsh response to Dr. Buttar</a></h5>
                                                <p>10/29/22</p>
                                            </div>
                                            <div class="ra-thumb" Style="background-image: url('https://clikview.com/upload/photos/2022/10/SbZjuDldgDP5LclCUGOa_29_9f3ce5e3af820f00fcc85c05cd733ddf_image.jpg');"></div>
                                        </div>
                                        <div class="clear"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <script>
   jQuery(document).ready(function($) {
      $('.search-articles-form').submit(function(event) {
         var query = $(this).find('input').val();
         if (!query){
            $(this).find('input').addClass('danger-field-border');
            return false;
         }
         else if(query.length > 50){
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

export default AllArticles