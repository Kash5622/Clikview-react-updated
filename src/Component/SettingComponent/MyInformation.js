import React from 'react'

function MyInformation() {
    return (
        <div>
            <form class="form-horizontal user-setting-panel pt_forms pt_shadow" id="info-settings" method="POST">
                <div class="yp_sett_header">
                    <h4>My Information Settings</h4>
                </div>
                <div class="setting-info-alert"></div>
                <div class="form_info">
                    <div class="select_radio_btn small_rbtn setting_down_info_btns" id="download_steps_comp">
                        <h4>Please choose which information you would like to download</h4>
                        <div class="select_radio_btn_innr">
                            <label>
                                <input type="checkbox" name="my_information" id="my_information" value="1" />
                                <div class="sr_btn_lab_innr">
                                    <div class="sr_btn_img">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#4d91ea" d="M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"></path></svg>
                                    </div>
                                    <span>My Information</span>
                                </div>
                            </label>
                            <label>
                                <input type="checkbox" name="videos" id="videos" value="1" />
                                <div class="sr_btn_lab_innr">
                                    <div class="sr_btn_img">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#4caf50" d="M17,10.5V7A1,1 0 0,0 16,6H4A1,1 0 0,0 3,7V17A1,1 0 0,0 4,18H16A1,1 0 0,0 17,17V13.5L21,17.5V6.5L17,10.5Z"></path></svg>
                                    </div>
                                    <span>Videos</span>
                                </div>
                            </label>
                            <label>
                                <input type="checkbox" name="subscribe" id="subscribe" value="1" />
                                <div class="sr_btn_lab_innr">
                                    <div class="sr_btn_img">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#b228c9" d="M21,19V17H8V19H21M21,13V11H8V13H21M8,7H21V5H8V7M4,5V7H6V5H4M3,5A1,1 0 0,1 4,4H6A1,1 0 0,1 7,5V7A1,1 0 0,1 6,8H4A1,1 0 0,1 3,7V5M4,11V13H6V11H4M3,11A1,1 0 0,1 4,10H6A1,1 0 0,1 7,11V13A1,1 0 0,1 6,14H4A1,1 0 0,1 3,13V11M4,17V19H6V17H4M3,17A1,1 0 0,1 4,16H6A1,1 0 0,1 7,17V19A1,1 0 0,1 6,20H4A1,1 0 0,1 3,19V17Z"></path></svg>
                                    </div>
                                    <span>Subscriptions</span>
                                </div>
                            </label>
                            <label>
                                <input type="checkbox" name="posts" id="posts" value="1" />
                                <div class="sr_btn_lab_innr">
                                    <div class="sr_btn_img">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#ee457e" d="M20,11H4V8H20M20,15H13V13H20M20,19H13V17H20M11,19H4V13H11M20.33,4.67L18.67,3L17,4.67L15.33,3L13.67,4.67L12,3L10.33,4.67L8.67,3L7,4.67L5.33,3L3.67,4.67L2,3V19A2,2 0 0,0 4,21H20A2,2 0 0,0 22,19V3L20.33,4.67Z"></path></svg>
                                    </div>
                                    <span>Articles</span>
                                </div>
                            </label>
                            <label>
                                <input type="checkbox" name="history" id="history" value="1" />
                                <div class="sr_btn_lab_innr">
                                    <div class="sr_btn_img">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#ff5722" d="M13.5,8H12V13L16.28,15.54L17,14.33L13.5,12.25V8M13,3A9,9 0 0,0 4,12H1L4.96,16.03L9,12H6A7,7 0 0,1 13,5A7,7 0 0,1 20,12A7,7 0 0,1 13,19C11.07,19 9.32,18.21 8.06,16.94L6.64,18.36C8.27,20 10.5,21 13,21A9,9 0 0,0 22,12A9,9 0 0,0 13,3"></path></svg>
                                    </div>
                                    <span>History</span>
                                </div>
                            </label>
                        </div><br />
                    </div>
                    <input type="hidden" name="hash_id" value="d0b4db2bc4e12a863e48a7d375e595b36af9b69a" />
                    <input type="hidden" name="user_id" value="2822" />
                    <div>
                        <button id="submit" name="submit" class="btn btn-main setting-panel-mdbtn"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> Generate file</button>
                    </div>
                </div>
                <div class="ready_to_down_info">
                    <svg height="130px" viewBox="-8 0 480 480.00012" width="130px" xmlns="http://www.w3.org/2000/svg"><g fill="#9bc9ff"><path d="m56.011719 176v232l176 64v-232zm0 0"></path><path d="m408.011719 176v232l-176 64v-232zm0 0"></path><path d="m8.011719 216 176 64 48-40-176-64zm0 0"></path><path d="m280.011719 280 176-64-48-40-176 64zm0 0"></path><path d="m280.011719 72-48 40 176 64 48-40zm0 0"></path><path d="m184.011719 72-176 64 48 40 176-64zm0 0"></path></g><path d="m420.507812 176 40.621094-33.847656c2.199219-1.835938 3.25-4.707032 2.753906-7.527344-.492187-2.820312-2.460937-5.160156-5.152343-6.136719l-176-64c-2.675781-.976562-5.664063-.460937-7.855469 1.359375l-34.863281 29.074219v-22.921875h-16v22.921875l-34.882813-29.074219c-2.1875-1.820312-5.179687-2.335937-7.855468-1.359375l-176 64c-2.691407.976563-4.65625 3.316407-5.152344 6.136719s.554687 5.691406 2.753906 7.527344l40.640625 33.847656-40.625 33.847656c-2.199219 1.835938-3.25 4.707032-2.753906 7.527344.496093 2.820312 2.460937 5.160156 5.152343 6.136719l42.722657 15.542969v168.945312c0 3.359375 2.105469 6.363281 5.261719 7.511719l176 64c1.765624.652343 3.707031.652343 5.472656 0l176-64c3.160156-1.148438 5.261718-4.152344 5.265625-7.511719v-168.945312l42.734375-15.542969c2.695312-.976563 4.660156-3.316407 5.15625-6.136719.492187-2.820312-.554688-5.691406-2.753906-7.527344zm-138.898437-94.902344 158.59375 57.671875-33.792969 28.132813-158.582031-57.671875zm-57.597656 99.589844-20.289063-20.28125-11.3125 11.3125 39.601563 39.59375 39.597656-39.59375-11.3125-11.3125-20.285156 20.28125v-57.273438l144.597656 52.585938-152.597656 55.488281-152.601563-55.488281 144.601563-52.585938zm-41.601563-99.589844 33.777344 28.132813-158.578125 57.671875-33.78125-28.132813zm-124.800781 104 158.59375 57.671875-33.792969 28.132813-158.582031-57.671875zm6.402344 59.773438 117.261719 42.640625c.878906.324219 1.804687.488281 2.738281.488281 1.871093 0 3.679687-.652344 5.117187-1.847656l34.882813-29.074219v203.496094l-160-58.175781zm336 157.527344-160 58.175781v-203.496094l34.878906 29.074219c1.4375 1.195312 3.25 1.847656 5.121094 1.847656.933593 0 1.859375-.164062 2.734375-.488281l117.265625-42.640625zm-118.402344-131.496094-33.773437-28.132813 158.574218-57.671875 33.777344 28.132813zm0 0" fill="#1e81ce"></path><path d="m248.011719 432c0 4.417969 3.582031 8 8 8 7.886719 0 75.574219-26.398438 130.976562-48.566406 4.101563-1.644532 6.097657-6.304688 4.453125-10.410156-1.640625-4.105469-6.300781-6.097657-10.40625-4.457032-55.136718 22.066406-117.601562 46.089844-125.488281 47.449219-4.230469.246094-7.535156 3.746094-7.535156 7.984375zm0 0" fill="#1e81ce"></path><path d="m224.011719 0h16v16h-16zm0 0" fill="#1e81ce"></path><path d="m224.011719 24h16v16h-16zm0 0" fill="#1e81ce"></path><path d="m224.011719 48h16v16h-16zm0 0" fill="#1e81ce"></path></svg>
                    <p>Your file is ready to download!</p>
                    <a href="https://clikview.com/aj/user/download_user_info" class="btn btn-main setting-panel-mdbtn" id="download_file" target="_blank" onclick="DeleteUserFile()">Download File</a>
                </div>
            </form>
        </div>
    )
}

export default MyInformation