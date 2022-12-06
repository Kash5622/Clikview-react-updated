import React from 'react'

function Profile() {
    return (
        <div>
            <form class="form-horizontal user-setting-panel pt_forms pt_shadow" id="profile-settings" method="POST">
                <div class="yp_sett_header">
                    <h4>Profile Settings</h4>
                </div>
                <div class="setting-profile-alert"></div>
                <div class="form-group col-lg-6">
                    <label class="col-md-12" for="first_name">First Name</label>
                    <div class="col-md-12">
                        <input id="first_name" name="first_name" type="text" placeholder="" class="form-control input-md" value="Soma" />
                    </div>
                </div>
                <div class="form-group col-lg-6">
                    <label class="col-md-12" for="last_name">Last Name</label>
                    <div class="col-md-12">
                        <input id="last_name" name="last_name" type="text" placeholder="" class="form-control input-md" value="Chakraborty" />
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-md-12" for="about">About</label>
                    <div class="col-md-12">
                        <textarea name="about" id="about" cols="20" class="form-control" rows="5"></textarea>
                    </div>
                </div>
                <hr />
                <div class="form-group">
                    <label class="col-md-12" for="facebook">Facebook</label>
                    <div class="col-md-12">
                        <input id="facebook" name="facebook" type="text" placeholder="Username" class="form-control input-md" value="" />
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-md-12" for="google">Google</label>
                    <div class="col-md-12">
                        <input id="google" name="google" type="text" placeholder="Username" class="form-control input-md" value="" />
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-md-12" for="twitter">Twitter</label>
                    <div class="col-md-12">
                        <input id="twitter" name="twitter" type="text" placeholder="Username" class="form-control input-md" value="" />
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-md-12" for="instagram">Instagram</label>
                    <div class="col-md-12">
                        <input id="instagram" name="instagram" type="text" placeholder="Username" class="form-control input-md" value="" />
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-md-12" for="geo_blocking">Favourite category</label>
                    <div class="col-md-12">
                        <div class="form-group-rs" id="geo_blocking">
                            <div class="dropdown bootstrap-select show-tick form-control show-menu-arrow"><select class="form-control selectpicker show-menu-arrow show-tick" multiple="" name="fav_category[]" data-live-search="true" title="Favourite category" data-actions-box="true" tabindex="-98">
                                <option value="1">

                                    Film &amp; Animation
                                </option>
                                <option value="3">

                                    Business
                                </option>
                                <option value="4">

                                    Pets &amp; Animals
                                </option>
                                <option value="5">

                                    Sports
                                </option>
                                <option value="6">

                                    Travel &amp; Events
                                </option>
                                <option value="7">

                                    Motivation
                                </option>
                                <option value="8">

                                    People &amp; Blogs
                                </option>
                                <option value="9">

                                    Advanced Medicine
                                </option>
                                <option value="10">

                                    Digital Marketing
                                </option>
                                <option value="11">

                                    News &amp; Politics
                                </option>
                                <option value="12">

                                    How-to &amp; Style
                                </option>
                                <option value="13">

                                    Non-profits &amp; Activism
                                </option>
                                <option value="849">

                                    Super Cars
                                </option>
                            </select><button type="button" class="btn dropdown-toggle bs-placeholder btn-default" data-toggle="dropdown" role="button" title="Favourite category"><div class="filter-option"><div class="filter-option-inner"><div class="filter-option-inner-inner">Favourite category</div></div> </div><span class="bs-caret"><span class="caret"></span></span></button><div class="dropdown-menu open" role="combobox"><div class="bs-searchbox"><input type="text" class="form-control" autocomplete="off" role="textbox" aria-label="Search" /></div><div class="bs-actionsbox"><div class="btn-group btn-group-sm btn-block"><button type="button" class="actions-btn bs-select-all btn btn-default">Select All</button><button type="button" class="actions-btn bs-deselect-all btn btn-default">Deselect All</button></div></div><div class="inner open" role="listbox" aria-expanded="false" tabindex="-1"><ul class="dropdown-menu inner "></ul></div></div></div>
                            <span class="help-block" Style="opacity: 1;margin-top: 10px;">Choose which categories you would like to see on your home page.</span>
                            <div class="clear"></div>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-md-12" for="google_tracking_code">Google Tracking Id</label>
                    <div class="col-md-12">
                        <input id="google_tracking_code" name="google_tracking_code" type="text" class="form-control input-md" value="" />
                        <span class="help-block" Style="opacity: 1;margin-top: 10px;">You can track your own profile and videos with Google Analytics!</span>
                        <div class="clear"></div>
                    </div>
                </div>
                <hr />

                <input type="hidden" name="hash_id" value="d0b4db2bc4e12a863e48a7d375e595b36af9b69a" />
                <input type="hidden" name="user_id" value="2822" />
                <input type="hidden" name="cf" value="0" />
                <div class="form-group">
                    <div class="col-md-12">
                        <button id="submit" name="submit" class="btn btn-main setting-panel-mdbtn"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> Save</button>
                    </div>
                    <div class="clear"></div>
                </div>
            </form>
        </div>
    )
}

export default Profile