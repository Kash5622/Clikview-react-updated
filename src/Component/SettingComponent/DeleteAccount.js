import React from 'react'

function DeleteAccount() {
    return (
        <div>
            <form class="form-horizontal user-setting-panel pt_forms pt_shadow" id="delete-settings" method="POST">
                <div class="yp_sett_header">
                    <h4>Delete account</h4>
                </div>
                <div class="setting-delete-alert"></div>
                <div class="form-group">
                    <label class="col-md-12" for="current_password">Current Passowrd</label>
                    <div class="col-md-12">
                        <input id="current_password" name="current_password" type="password" placeholder="" class="form-control input-md" />
                    </div>
                </div>
                <input type="hidden" name="hash_id" value="d0b4db2bc4e12a863e48a7d375e595b36af9b69a" />
                <input type="hidden" name="user_id" value="2822" />
                <hr />

                <div class="col-md-12">
                    <button id="submit" name="submit" class="btn btn-main setting-panel-mdbtn"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> Delete</button>
                </div>
                <div class="clear"></div>
            </form>
        </div>
    )
}

export default DeleteAccount