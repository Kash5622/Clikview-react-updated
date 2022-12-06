import React from 'react'

function Verification() {
    return (
        <div>
            <form class="form-horizontal user-setting-panel verifiacation-request-form pt_forms pt_shadow" id="verifiacation-request-form" method="POST">
                <div class="yp_sett_header">
                    <h4>Verification Settings</h4>
                </div>
                <div class="setting-delete-alert"></div>
                <div class="verifiacation-request-alert"></div>
                <div class="fluid">
                    <div class="upload-files">
                        <div class="col-md-4 no-padding-both">
                            <div class="image-renderer" id="image-renderer">
                                <div>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file-text"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                                    </span>
                                </div>
                            </div>
                            <div class="clear"></div>
                        </div>
                        <div class="col-md-8">
                            <h4>Upload Drivers Licence or ID Card</h4>
                            <p>Please select a recent picture of your driver licence or id card</p>
                            <div>
                                <button class="btn btn-main btn-lg" type="button" onclick="$('#identity').trigger('click');">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-upload"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>&nbsp; Choose File
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div class="form-group">
                    <div class="col-md-6">
                        <input id="first_name" name="first_name" type="text" placeholder="First Name" class="form-control input-md" />
                    </div>
                    <div class="col-md-6">
                        <input id="last_name" name="last_name" type="text" placeholder="Last Name" class="form-control input-md" />
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-md-12">
                        <textarea name="message" rows="10" class="form-control" placeholder="Message..."></textarea>
                    </div>
                </div>
                <div>
                    <button id="submit" name="submit" class="btn btn-main setting-panel-mdbtn"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-send"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg> Submit request</button>
                </div>

                <input type="hidden" name="hash_id" value="d0b4db2bc4e12a863e48a7d375e595b36af9b69a" />
                <input type="hidden" name="user_id" value="2822" />
                <input type="file" name="identity" id="identity" class="hidden" accept="image/*" />

                <div class="clear"></div>
            </form>
        </div>
    )
}

export default Verification