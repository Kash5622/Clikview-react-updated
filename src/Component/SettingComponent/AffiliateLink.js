import React from 'react'

function AffiliateLink() {
    return (
        <div>
            <div class="form-horizontal user-setting-panel pt_forms pt_shadow">
                <div class="yp_sett_header">
                    <h4>Affiliate Link</h4>
                    <p>Go ahead and generate your Affiliate Link</p>
                </div>
                <div class="setting-links-alert"></div>

                {/* <!-- <div class="earn_points">
		<div class="row">
			<div class="col-md-4">
				<div class="pt_invit_link green">
					<div>Available Links <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M10.59,13.41C11,13.8 11,14.44 10.59,14.83C10.2,15.22 9.56,15.22 9.17,14.83C7.22,12.88 7.22,9.71 9.17,7.76V7.76L12.71,4.22C14.66,2.27 17.83,2.27 19.78,4.22C21.73,6.17 21.73,9.34 19.78,11.29L18.29,12.78C18.3,11.96 18.17,11.14 17.89,10.36L18.36,9.88C19.54,8.71 19.54,6.81 18.36,5.64C17.19,4.46 15.29,4.46 14.12,5.64L10.59,9.17C9.41,10.34 9.41,12.24 10.59,13.41M13.41,9.17C13.8,8.78 14.44,8.78 14.83,9.17C16.78,11.12 16.78,14.29 14.83,16.24V16.24L11.29,19.78C9.34,21.73 6.17,21.73 4.22,19.78C2.27,17.83 2.27,14.66 4.22,12.71L5.71,11.22C5.7,12.04 5.83,12.86 6.11,13.65L5.64,14.12C4.46,15.29 4.46,17.19 5.64,18.36C6.81,19.54 8.71,19.54 9.88,18.36L13.41,14.83C14.59,13.66 14.59,11.76 13.41,10.59C13,10.2 13,9.56 13.41,9.17Z" ></path></svg></div>
					<span id="available_links">1</span>
				</div>
			</div>
			<div class="col-md-4">
				<div class="pt_invit_link blue">
					<div>Generated Links <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M10.6 13.4A1 1 0 0 1 9.2 14.8A4.8 4.8 0 0 1 9.2 7.8L12.7 4.2A5.1 5.1 0 0 1 19.8 4.2A5.1 5.1 0 0 1 19.8 11.3L18.3 12.8A6.4 6.4 0 0 0 17.9 10.4L18.4 9.9A3.2 3.2 0 0 0 18.4 5.6A3.2 3.2 0 0 0 14.1 5.6L10.6 9.2A2.9 2.9 0 0 0 10.6 13.4M23 18V20H20V23H18V20H15V18H18V15H20V18M16.2 13.7A4.8 4.8 0 0 0 14.8 9.2A1 1 0 0 0 13.4 10.6A2.9 2.9 0 0 1 13.4 14.8L9.9 18.4A3.2 3.2 0 0 1 5.6 18.4A3.2 3.2 0 0 1 5.6 14.1L6.1 13.7A7.3 7.3 0 0 1 5.7 11.2L4.2 12.7A5.1 5.1 0 0 0 4.2 19.8A5.1 5.1 0 0 0 11.3 19.8L13.1 18A6 6 0 0 1 16.2 13.7Z" ></path></svg></div>
					<span id="generated_links">0</span>
				</div>
			</div>
			<div class="col-md-4">
				<div class="pt_invit_link red">
					<div>Used Links <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M10.6 13.4A1 1 0 0 1 9.2 14.8A4.8 4.8 0 0 1 9.2 7.8L12.7 4.2A5.1 5.1 0 0 1 19.8 4.2A5.1 5.1 0 0 1 19.8 11.3L18.3 12.8A6.4 6.4 0 0 0 17.9 10.4L18.4 9.9A3.2 3.2 0 0 0 18.4 5.6A3.2 3.2 0 0 0 14.1 5.6L10.6 9.2A2.9 2.9 0 0 0 10.6 13.4M23 18V20H15V18M16.2 13.7A4.8 4.8 0 0 0 14.8 9.2A1 1 0 0 0 13.4 10.6A2.9 2.9 0 0 1 13.4 14.8L9.9 18.4A3.2 3.2 0 0 1 5.6 18.4A3.2 3.2 0 0 1 5.6 14.1L6.1 13.7A7.3 7.3 0 0 1 5.7 11.2L4.2 12.7A5.1 5.1 0 0 0 4.2 19.8A5.1 5.1 0 0 0 11.3 19.8L13.1 18A6 6 0 0 1 16.2 13.7Z" ></path></svg></div>
					<span id="used_links">0</span>
				</div>
			</div>
		</div>
	</div> --> */}
                <div class="row" Style="padding: 0 10px;">


                    <div class="text-center col-md-12">
                        <button type="button" class="btn btn-main btn-mat pt_invit_link_btn add_wow_loader" onclick="GenerateLink()" Style="margin-top: 0;">Generate Link</button>
                    </div>
                </div>
                <br />
                <div class="table-responsive ads-cont-wrapper">
                </div>


                <div class="clear"></div>
            </div>
            <div class="form-horizontal user-setting-panel pt_forms pt_shadow">
                <div class="yp_sett_header">
                    <h4>Affiliate Users</h4>
                </div>

                <div class="table-responsive ads-cont-wrapper">
                </div>
                <div class="clear"></div>
            </div>
        </div>
    )
}

export default AffiliateLink