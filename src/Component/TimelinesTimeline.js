import {React }from 'react'
import {Link} from 'react-router-dom'

function TimelinesTimeline() {
    return (
        <div>
            <div class="videos-latest-list">
                <div class="pt_chnl_actvty">
                    <h3 class="recent-articles"><svg height="20" viewBox="-11 0 512 512" width="20" xmlns="http://www.w3.org/2000/svg">
                        
                        <path d="m298.667969 426.667969c0 47.128906-38.207031 85.332031-85.335938 85.332031-47.128906 0-85.332031-38.203125-85.332031-85.332031 0-47.128907 38.203125-85.335938 85.332031-85.335938 47.128907 0 85.335938 38.207031 85.335938 85.335938zm0 0" fill="#238AB8"></path><path d="m362.835938 254.316406c-72.320313-10.328125-128.167969-72.515625-128.167969-147.648437 0-21.335938 4.5625-41.578125 12.648437-59.949219-10.921875-2.558594-22.269531-4.050781-33.984375-4.050781-82.34375 0-149.332031 66.984375-149.332031 149.332031v59.476562c0 42.21875-18.496094 82.070313-50.945312 109.503907-8.296876 7.082031-13.054688 17.429687-13.054688 28.351562 0 20.589844 16.746094 37.335938 37.332031 37.335938h352c20.589844 0 37.335938-16.746094 37.335938-37.335938 0-10.921875-4.757813-21.269531-13.269531-28.542969-31.488282-26.644531-49.75-65.324218-50.5625-106.472656zm0 0" fill="#0099DC"></path><path d="m490.667969 106.667969c0 58.910156-47.757813 106.664062-106.667969 106.664062s-106.667969-47.753906-106.667969-106.664062c0-58.910157 47.757813-106.667969 106.667969-106.667969s106.667969 47.757812 106.667969 106.667969zm0 0" fill="#59CDFF"></path></svg>
                        &nbsp;&nbsp;&nbsp;Most recent activities
                        <Link to="/home2/createpost" class="btn btn-main pull-right" Style="float:right" >Create Post</Link>
                        <div class="clear"></div>
                    </h3>
                    <div class="articles-container pt_actv_prnt">
                        <div class="text-center no-content-found empty_state"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-video-off"><path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>No activities found for now.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TimelinesTimeline