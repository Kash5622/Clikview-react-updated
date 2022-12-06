import React from 'react'

function Comments() {
  return (
    <div>
        <div class="user-setting-panel pt_shadow">
			<div class="yp_sett_header">
				<h4><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M6.455 19L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455zM7 10v2h2v-2H7zm4 0v2h2v-2h-2zm4 0v2h2v-2h-2z"></path></svg> Comments</h4>
			</div>
			<div class="mb_50">
				<div class="row pt_vid_stud_row">
					<div class="col-md-4 col-sm-6">
						<div class="vid_analts_stat" Style="background: transparent linear-gradient(309deg, #E95F8A 0%, #FE82A9 100%) 0% 0% no-repeat padding-box;">
							<div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M8 18h10.237L20 19.385V9h1a1 1 0 0 1 1 1v13.5L17.545 20H9a1 1 0 0 1-1-1v-1zm-2.545-2L1 19.5V4a1 1 0 0 1 1-1h15a1 1 0 0 1 1 1v12H5.455z"></path></svg> <h2>Comments Today</h2></div>
							<p>0</p>
						</div>
					</div>
					<div class="col-md-4 col-sm-6">
						<div class="vid_analts_stat" Style="background: transparent linear-gradient(308deg, #55479F 0%, #7569B3 100%) 0% 0% no-repeat padding-box;">
							<div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M8 18h10.237L20 19.385V9h1a1 1 0 0 1 1 1v13.5L17.545 20H9a1 1 0 0 1-1-1v-1zm-2.545-2L1 19.5V4a1 1 0 0 1 1-1h15a1 1 0 0 1 1 1v12H5.455z"></path></svg> <h2>Comments This Month</h2></div>
							<p>0</p>
						</div>
					</div>
					<div class="col-md-4 col-sm-6">
						<div class="vid_analts_stat" Style="background: transparent linear-gradient(309deg, #FE513F 0%, #FE8248 100%) 0% 0% no-repeat padding-box;">
							<div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M8 18h10.237L20 19.385V9h1a1 1 0 0 1 1 1v13.5L17.545 20H9a1 1 0 0 1-1-1v-1zm-2.545-2L1 19.5V4a1 1 0 0 1 1-1h15a1 1 0 0 1 1 1v12H5.455z"></path></svg> <h2>Comments This Year</h2></div>
							<p>0</p>
						</div>
					</div>
				</div>
			</div>
			<div class="vid_stud_divider">Latest Comments</div>
			<div class="form-group" id="comments_container">
				
				<div class="clear"></div>
			</div>
			<div class="clear"></div>
					</div>
    </div>
  )
}

export default Comments