import React from 'react'

function Avatar() {
    return (
        <div>
            <form class="form-horizontal user-setting-panel pt_forms pt_shadow" id="avatar-settings" method="POST">
                <div class="yp_sett_header">
                    <h4>Avatar &amp; Cover Settings</h4>
                </div>
                <div class="setting-avatar-alert"></div>
                <div class="row pt_upload_vdo">
                    <div class="progress hidden">
                        <span class="percent">0%</span>
                        <div class="progress_bar_parent">
                            <div class="bar upload-progress-bar progress-bar active"></div>
                        </div>
                        <div class="clear"></div>
                        <div class="text-center pt_prcs_vdo"></div>
                    </div>

                    <div class="wow_cset_cover" title="Cover">
                        <div class="wow_cset_cover_hdr">
                            <span class="btn btn-file" id="coverimage-holder" onclick="$('#cover').trigger('click'); return false;">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M14,6L10.25,11L13.1,14.8L11.5,16C9.81,13.75 7,10 7,10L1,18H23L14,6Z"></path></svg>
                            </span>
                            <input type="file" class="hidden" id="cover" accept="image/x-png, image/gif, image/jpeg" name="cover" />
                        </div>
                        <div class="avatar-read" id="cover-form"><p></p></div>
                    </div>



                    <div class="wow_cset_avtr">
                        <div class="wow_cset_avtr_hdr">
                            <span class="btn btn-file" id="avatarimage-holder" onclick="$('#avatar').trigger('click'); return false;" title="Avatar">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M4,4H7L9,2H15L17,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9Z"></path></svg>
                            </span>
                            <input type="file" class="hidden" id="avatar" accept="image/x-png, image/gif, image/jpeg" name="avatar" />
                            <b>Soma Chakraborty</b>
                        </div>
                        <div class="avatar-read" id="photo-form"><p></p></div>
                    </div>
                </div>
                <hr />
                <input type="hidden" name="hash_id" value="d0b4db2bc4e12a863e48a7d375e595b36af9b69a" />
                <input type="hidden" name="user_id" value="2822" />
                {/* <!-- Button (Double) --> */}
                <button id="submit" name="submit" class="btn btn-main setting-panel-mdbtn"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> Save</button>
            </form>
        </div>
    )
}

export default Avatar