import React from 'react'

function MyChannel() {
    return (
        <div>
            <div class="videos-latest-list play_list">
                <h3 class="recent-articles"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="20" width="20" fill="#04abf2"><path d="M19,9H2V11H19V9M19,5H2V7H19V5M2,15H15V13H2V15M17,13V19L22,16L17,13Z"></path></svg>&nbsp;&nbsp;&nbsp;My Channels</h3>
                <div class="row pt_timeline_vids">
                    <div class="text-center no-content-found empty_state"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-video-off"><path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>No videos found for now!</div>
                </div>
            </div>
        </div>
    )
}

export default MyChannel