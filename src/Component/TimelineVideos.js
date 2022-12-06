import React from 'react'

function TimelineVideos() {
    return (
        <div>
            <div class="videos-latest-list">
                <h3 class="recent-articles"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 426.667 426.667" height="20" width="20" fill="#04abf2"> <g> <g> <g> <path d="M42.667,85.333H0V384c0,23.573,19.093,42.667,42.667,42.667h298.667V384H42.667V85.333z"></path> <path d="M384,0H128c-23.573,0-42.667,19.093-42.667,42.667v256c0,23.573,19.093,42.667,42.667,42.667h256 c23.573,0,42.667-19.093,42.667-42.667v-256C426.667,19.093,407.573,0,384,0z M213.333,266.667v-192l128,96L213.333,266.667z"></path> </g> </g> </g></svg>&nbsp;&nbsp;&nbsp;Latest videos</h3>
                <div class="row pt_timeline_vids pt_timeline_latest_vids">
                    <div class="text-center no-content-found empty_state"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-video-off"><path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>No videos found for now!</div>
                </div>
            </div>
        </div>
    )
}

export default TimelineVideos