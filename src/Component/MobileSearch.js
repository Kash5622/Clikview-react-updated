import React from 'react'

function MobileSearch() {
    return (
        <div>
            <nav className="navbar navbar-findcond navbar-fixed-top search-bar hidden">
                <div className="container-fluid">
                    <form className="search-header-mobile" role="search" action="https://clikview.com/search" method="GET" Style="width:100%">
                        <div className="form-group">
                            <input type="text" className="form-control" id="search-bar-mobile" name="keyword" placeholder="Search for videos" autocomplete="off" value="" autofocus="" Style="border-color: #545454 !important;background-color: #303233 !important;" />
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                        </div>
                        <div className="search-dropdown hidden"></div>
                    </form>
                </div>
            </nav>
        </div>
    )
}

export default MobileSearch