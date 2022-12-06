import React from 'react'

function Videos() {
  return (
    <div>
        <div class="user-setting-panel pt_shadow">
			<div class="yp_sett_header">
				<div class="pull-right dropdown">
					<span class="dropdown-toggle" data-toggle="dropdown" role="button" title="Sort By"><svg class="feather feather-filter" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg></span>
					<div class="dropdown-menu dropdown-menu-right vid_stud_filtr">
						<form class="search_filter_form" method="POST" action="">
							<div class="dropdown-item">
								<label for="_views_">
								<input type="radio" name="type" id="_views_" value="views"/>
								<span>Views</span>
								</label>
							</div>
							<div class="dropdown-item">
								<label for="_likes_">
								<input type="radio" name="type" id="_likes_" value="likes"/>
								<span>Likes</span>
								</label>
							</div>
							<div class="dropdown-item">
								<label for="_dislikes_">
								<input type="radio" name="type" id="_dislikes_" value="dislikes"/>
								<span>Dislikes</span>
								</label>
							</div>
							<div class="dropdown-item">
								<label for="_comments_">
								<input type="radio" name="type" id="_comments_" value="comments"/>
								<span>Comments</span>
								</label>
							</div>
						</form>
					</div>
				</div>
				<h4><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M16 4a1 1 0 0 1 1 1v4.2l5.213-3.65a.5.5 0 0 1 .787.41v12.08a.5.5 0 0 1-.787.41L17 14.8V19a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h14zM7.4 8.829a.4.4 0 0 0-.392.32L7 9.228v5.542a.4.4 0 0 0 .542.374l.073-.036 4.355-2.772a.4.4 0 0 0 .063-.624l-.063-.05L7.615 8.89A.4.4 0 0 0 7.4 8.83z"></path></svg> Videos</h4>
			</div>
			<div class="vid_stud_divider">Manage My Videos</div>
			<div class="subscriptions-list">
				<div class="row author-list">
					<div class="text-center no-content-found empty_state"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-video-off"><path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>No videos found for now!</div>
				</div>
							</div>
			<div class="clear"></div>
		</div>
    </div>
  )
}

export default Videos