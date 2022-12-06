import React from 'react'

function BlockedUser() {
    return (
        <div>
            <div class="user-setting-panel pt_shadow">
                <div class="yp_sett_header">
                    <h4>Blocked Users Settings</h4>
                </div>
                <div>
                    <div class="row" id="comments_container">
                        <p class="empty_state"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>No users found</p>
                        <div class="clear"></div>
                    </div>
                    <div class="clear"></div>
                    <br />
                </div>
            </div>
        </div>
    )
}

export default BlockedUser