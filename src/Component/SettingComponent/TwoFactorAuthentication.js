import React from 'react'

function TwoFactorAuthentication() {
    return (
        <div>
            <form class="form-horizontal user-setting-panel pt_forms pt_shadow" id="two-factor" method="POST">
                <div class="yp_sett_header">
                    <h4>Two-factor authentication Settings</h4>
                </div>
                <div class="alert alert-info">
                    Turn on 2-step login to level-up your account's security, Once turned on, you'll use both your password and a 6-digit security code sent to your email to log in.
                </div>
                <div class="two-factor-alert"></div>
                <div class="row">
                    <div class="form-group col-lg-7">
                        <label class="col-md-12" for="two_factor">Two-factor authentication</label>
                        <div class="col-md-12">
                            <select id="two_factor" name="two_factor" class="form-control">
                                <option value="0" selected="">Disable</option>
                                <option value="1">Enable</option>
                            </select>
                        </div>
                    </div>
                    <div class="clear"></div>
                    <hr />

                </div>
                <input type="hidden" name="hash_id" value="d0b4db2bc4e12a863e48a7d375e595b36af9b69a" />
                <input type="hidden" name="user_id" value="2822" />
                <div>
                    <button id="submit" name="submit" class="btn btn-main setting-panel-mdbtn"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> Save</button>
                </div>
            </form>
        </div>
    )
}

export default TwoFactorAuthentication