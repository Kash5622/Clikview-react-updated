import React from 'react'
import {Link} from 'react-router-dom'
import MobileSearch from './MobileSearch';

function MyArticles(props) {
    const { searchOpen, expandNav } = props;
    return (
        <div>
            <div className={expandNav ? "main-container shrinkWidth bodyfixed" : "main-container expandWidth"} Style="z-index:-1">
            <div id="main-container" className="main-content  container">
            {searchOpen ? <MobileSearch /> : ""}
                    <div class="ads-placment" id="header_ad_"></div>
                    <div class="announcement-renderer">

                    </div>
                    <div id="container_content">
                        <div class="col-md-12">
                            <div class="articles-content">
                                <div class="subscriptions-list author-list articles-container">
                                    <h3 class="recent-articles" Style="display: block;">My articles
                                        <Link to="/home2/createarticle" class="btn btn-main pull-right" data-load="?link1=create_article">Create article </Link><div class="clear"></div>
                                    </h3>
                                    <br />
                                    <div class="row">
                                        <div class="text-center no-content-found empty_state"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-book-open"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>No posts found!</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <script type="text/javascript">
	function PT_DeleteArticle(id) {
	  if (!id) {
	    return false;
	  }
	  if (!confirm("Are you sure you want to delete this article? This action can't be undo")) {
	    return false;
	  }
	  $.post('https://clikview.com/aj/articles/delete-article', {id: id}, function(data, textStatus, xhr) {
	    if (data.status == 200) {
	        window.location.href = 'https://clikview.com/my_articles';
	    }
	  });
	}
</script> */}
                    </div>
                    <input type="hidden" id="main-url" value="https://clikview.com%2Fmy_articles%3Fpage_id%3D1" />
                    <div class="ads-placment" id="footer_ad_"></div>
                </div>
            </div>
        </div>
    )
}

export default MyArticles