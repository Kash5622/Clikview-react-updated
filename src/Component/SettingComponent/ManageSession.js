import React from 'react'

function ManageSession() {
    return (
        <div>
            <div class="form-horizontal user-setting-panel pt_forms pt_shadow">
                <div class="yp_sett_header">
                    <h4>Manage Sessions</h4>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="as_list" id="session_6014">
                            <div>
                                <div class="platform_icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M21,15 L23,15 L23,18 C23,19.1045695 22.1045695,20 21,20 L3,20 C1.8954305,20 1,19.1045695 1,18 L1,15 L3,15 L3,6 C3,4.8954305 3.8954305,4 5,4 L19,4 C20.1045695,4 21,4.8954305 21,6 L21,15 Z M19,15 L19,6 L5,6 L5,15 L19,15 Z M3,17 L3,18 L21,18 L21,17 L3,17 Z"></path></svg>			</div>
                            </div>
                            <hr />
                            <div class="session_info">
                                <h4>Windows</h4>
                                <div class="sett_sess_info">
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" title="Browser"><path fill="currentColor" d="M21,3H3A2,2 0 0,0 1,5V19A2,2 0 0,0 3,21H21A2,2 0 0,0 23,19V5A2,2 0 0,0 21,3M21,19H3V5H13V9H21V19Z"></path></svg>&nbsp;&nbsp;Google Chrome</span>

                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" title="Last Seen"><path fill="currentColor" d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"></path></svg>&nbsp;&nbsp;2 months ago</span>

                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" title="IP Address"><path fill="currentColor" d="M16,11H14V9H16V11M3,5A2,2 0 0,1 5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5M10,7H8V17H10V7M12,17H14V13H16A2,2 0 0,0 18,11V9A2,2 0 0,0 16,7H12V17Z"></path></svg>&nbsp;&nbsp;49.37.33.199				</span>
                                </div>
                            </div>
                            <button title="" class="btn btn-danger log_out_session" onclick="logOutSession(6014)"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M4 8h16v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8zm3-3V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2h5v2H2V5h5zm2-1v1h6V4H9zm0 8v6h2v-6H9zm4 0v6h2v-6h-2z"></path></svg>&nbsp;&nbsp;Delete</button>
                        </div>
                    </div><div class="col-md-4">
                        <div class="as_list" id="session_7497">
                            <div>
                                <div class="platform_icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M21,15 L23,15 L23,18 C23,19.1045695 22.1045695,20 21,20 L3,20 C1.8954305,20 1,19.1045695 1,18 L1,15 L3,15 L3,6 C3,4.8954305 3.8954305,4 5,4 L19,4 C20.1045695,4 21,4.8954305 21,6 L21,15 Z M19,15 L19,6 L5,6 L5,15 L19,15 Z M3,17 L3,18 L21,18 L21,17 L3,17 Z"></path></svg>			</div>
                            </div>
                            <hr />
                            <div class="session_info">
                                <h4>Windows</h4>
                                <div class="sett_sess_info">
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" title="Browser"><path fill="currentColor" d="M21,3H3A2,2 0 0,0 1,5V19A2,2 0 0,0 3,21H21A2,2 0 0,0 23,19V5A2,2 0 0,0 21,3M21,19H3V5H13V9H21V19Z"></path></svg>&nbsp;&nbsp;Google Chrome</span>

                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" title="Last Seen"><path fill="currentColor" d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"></path></svg>&nbsp;&nbsp;22 days ago</span>

                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" title="IP Address"><path fill="currentColor" d="M16,11H14V9H16V11M3,5A2,2 0 0,1 5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5M10,7H8V17H10V7M12,17H14V13H16A2,2 0 0,0 18,11V9A2,2 0 0,0 16,7H12V17Z"></path></svg>&nbsp;&nbsp;49.37.45.146				</span>
                                </div>
                            </div>
                            <button title="" class="btn btn-danger log_out_session" onclick="logOutSession(7497)"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M4 8h16v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8zm3-3V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2h5v2H2V5h5zm2-1v1h6V4H9zm0 8v6h2v-6H9zm4 0v6h2v-6h-2z"></path></svg>&nbsp;&nbsp;Delete</button>
                        </div>
                    </div><div class="col-md-4">
                        <div class="as_list" id="session_7828">
                            <div>
                                <div class="platform_icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M21,15 L23,15 L23,18 C23,19.1045695 22.1045695,20 21,20 L3,20 C1.8954305,20 1,19.1045695 1,18 L1,15 L3,15 L3,6 C3,4.8954305 3.8954305,4 5,4 L19,4 C20.1045695,4 21,4.8954305 21,6 L21,15 Z M19,15 L19,6 L5,6 L5,15 L19,15 Z M3,17 L3,18 L21,18 L21,17 L3,17 Z"></path></svg>			</div>
                            </div>
                            <hr />
                            <div class="session_info">
                                <h4>Windows</h4>
                                <div class="sett_sess_info">
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" title="Browser"><path fill="currentColor" d="M21,3H3A2,2 0 0,0 1,5V19A2,2 0 0,0 3,21H21A2,2 0 0,0 23,19V5A2,2 0 0,0 21,3M21,19H3V5H13V9H21V19Z"></path></svg>&nbsp;&nbsp;Google Chrome</span>

                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" title="Last Seen"><path fill="currentColor" d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"></path></svg>&nbsp;&nbsp;15 days ago</span>

                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" title="IP Address"><path fill="currentColor" d="M16,11H14V9H16V11M3,5A2,2 0 0,1 5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5M10,7H8V17H10V7M12,17H14V13H16A2,2 0 0,0 18,11V9A2,2 0 0,0 16,7H12V17Z"></path></svg>&nbsp;&nbsp;49.37.47.138				</span>
                                </div>
                            </div>
                            <button title="" class="btn btn-danger log_out_session" onclick="logOutSession(7828)"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M4 8h16v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8zm3-3V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2h5v2H2V5h5zm2-1v1h6V4H9zm0 8v6h2v-6H9zm4 0v6h2v-6h-2z"></path></svg>&nbsp;&nbsp;Delete</button>
                        </div>
                    </div><div class="col-md-4">
                        <div class="as_list" id="session_7912">
                            <div>
                                <div class="platform_icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M21,15 L23,15 L23,18 C23,19.1045695 22.1045695,20 21,20 L3,20 C1.8954305,20 1,19.1045695 1,18 L1,15 L3,15 L3,6 C3,4.8954305 3.8954305,4 5,4 L19,4 C20.1045695,4 21,4.8954305 21,6 L21,15 Z M19,15 L19,6 L5,6 L5,15 L19,15 Z M3,17 L3,18 L21,18 L21,17 L3,17 Z"></path></svg>			</div>
                            </div>
                            <hr />
                            <div class="session_info">
                                <h4>Windows</h4>
                                <div class="sett_sess_info">
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" title="Browser"><path fill="currentColor" d="M21,3H3A2,2 0 0,0 1,5V19A2,2 0 0,0 3,21H21A2,2 0 0,0 23,19V5A2,2 0 0,0 21,3M21,19H3V5H13V9H21V19Z"></path></svg>&nbsp;&nbsp;Google Chrome</span>

                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" title="Last Seen"><path fill="currentColor" d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"></path></svg>&nbsp;&nbsp;13 days ago</span>

                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" title="IP Address"><path fill="currentColor" d="M16,11H14V9H16V11M3,5A2,2 0 0,1 5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5M10,7H8V17H10V7M12,17H14V13H16A2,2 0 0,0 18,11V9A2,2 0 0,0 16,7H12V17Z"></path></svg>&nbsp;&nbsp;49.37.32.87				</span>
                                </div>
                            </div>
                            <button title="" class="btn btn-danger log_out_session" onclick="logOutSession(7912)"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M4 8h16v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8zm3-3V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2h5v2H2V5h5zm2-1v1h6V4H9zm0 8v6h2v-6H9zm4 0v6h2v-6h-2z"></path></svg>&nbsp;&nbsp;Delete</button>
                        </div>
                    </div><div class="col-md-4">
                        <div class="as_list" id="session_7934">
                            <div>
                                <div class="platform_icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M21,15 L23,15 L23,18 C23,19.1045695 22.1045695,20 21,20 L3,20 C1.8954305,20 1,19.1045695 1,18 L1,15 L3,15 L3,6 C3,4.8954305 3.8954305,4 5,4 L19,4 C20.1045695,4 21,4.8954305 21,6 L21,15 Z M19,15 L19,6 L5,6 L5,15 L19,15 Z M3,17 L3,18 L21,18 L21,17 L3,17 Z"></path></svg>			</div>
                            </div>
                            <hr />
                            <div class="session_info">
                                <h4>Windows</h4>
                                <div class="sett_sess_info">
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" title="Browser"><path fill="currentColor" d="M21,3H3A2,2 0 0,0 1,5V19A2,2 0 0,0 3,21H21A2,2 0 0,0 23,19V5A2,2 0 0,0 21,3M21,19H3V5H13V9H21V19Z"></path></svg>&nbsp;&nbsp;Google Chrome</span>

                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" title="Last Seen"><path fill="currentColor" d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"></path></svg>&nbsp;&nbsp;12 days ago</span>

                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" title="IP Address"><path fill="currentColor" d="M16,11H14V9H16V11M3,5A2,2 0 0,1 5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5M10,7H8V17H10V7M12,17H14V13H16A2,2 0 0,0 18,11V9A2,2 0 0,0 16,7H12V17Z"></path></svg>&nbsp;&nbsp;49.37.35.57				</span>
                                </div>
                            </div>
                            <button title="" class="btn btn-danger log_out_session" onclick="logOutSession(7934)"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M4 8h16v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8zm3-3V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2h5v2H2V5h5zm2-1v1h6V4H9zm0 8v6h2v-6H9zm4 0v6h2v-6h-2z"></path></svg>&nbsp;&nbsp;Delete</button>
                        </div>
                    </div><div class="col-md-4">
                        <div class="as_list" id="session_7962">
                            <div>
                                <div class="platform_icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M21,15 L23,15 L23,18 C23,19.1045695 22.1045695,20 21,20 L3,20 C1.8954305,20 1,19.1045695 1,18 L1,15 L3,15 L3,6 C3,4.8954305 3.8954305,4 5,4 L19,4 C20.1045695,4 21,4.8954305 21,6 L21,15 Z M19,15 L19,6 L5,6 L5,15 L19,15 Z M3,17 L3,18 L21,18 L21,17 L3,17 Z"></path></svg>			</div>
                            </div>
                            <hr />
                            <div class="session_info">
                                <h4>Windows</h4>
                                <div class="sett_sess_info">
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" title="Browser"><path fill="currentColor" d="M21,3H3A2,2 0 0,0 1,5V19A2,2 0 0,0 3,21H21A2,2 0 0,0 23,19V5A2,2 0 0,0 21,3M21,19H3V5H13V9H21V19Z"></path></svg>&nbsp;&nbsp;Google Chrome</span>

                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" title="Last Seen"><path fill="currentColor" d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"></path></svg>&nbsp;&nbsp;11 days ago</span>

                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" title="IP Address"><path fill="currentColor" d="M16,11H14V9H16V11M3,5A2,2 0 0,1 5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5M10,7H8V17H10V7M12,17H14V13H16A2,2 0 0,0 18,11V9A2,2 0 0,0 16,7H12V17Z"></path></svg>&nbsp;&nbsp;49.37.33.99				</span>
                                </div>
                            </div>
                            <button title="" class="btn btn-danger log_out_session" onclick="logOutSession(7962)"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M4 8h16v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8zm3-3V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2h5v2H2V5h5zm2-1v1h6V4H9zm0 8v6h2v-6H9zm4 0v6h2v-6h-2z"></path></svg>&nbsp;&nbsp;Delete</button>
                        </div>
                    </div><div class="col-md-4">
                        <div class="as_list" id="session_7963">
                            <div>
                                <div class="platform_icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M21,15 L23,15 L23,18 C23,19.1045695 22.1045695,20 21,20 L3,20 C1.8954305,20 1,19.1045695 1,18 L1,15 L3,15 L3,6 C3,4.8954305 3.8954305,4 5,4 L19,4 C20.1045695,4 21,4.8954305 21,6 L21,15 Z M19,15 L19,6 L5,6 L5,15 L19,15 Z M3,17 L3,18 L21,18 L21,17 L3,17 Z"></path></svg>			</div>
                            </div>
                            <hr />
                            <div class="session_info">
                                <h4>Windows</h4>
                                <div class="sett_sess_info">
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" title="Browser"><path fill="currentColor" d="M21,3H3A2,2 0 0,0 1,5V19A2,2 0 0,0 3,21H21A2,2 0 0,0 23,19V5A2,2 0 0,0 21,3M21,19H3V5H13V9H21V19Z"></path></svg>&nbsp;&nbsp;Google Chrome</span>

                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" title="Last Seen"><path fill="currentColor" d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"></path></svg>&nbsp;&nbsp;11 days ago</span>

                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" title="IP Address"><path fill="currentColor" d="M16,11H14V9H16V11M3,5A2,2 0 0,1 5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5M10,7H8V17H10V7M12,17H14V13H16A2,2 0 0,0 18,11V9A2,2 0 0,0 16,7H12V17Z"></path></svg>&nbsp;&nbsp;49.37.44.124				</span>
                                </div>
                            </div>
                            <button title="" class="btn btn-danger log_out_session" onclick="logOutSession(7963)"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M4 8h16v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8zm3-3V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2h5v2H2V5h5zm2-1v1h6V4H9zm0 8v6h2v-6H9zm4 0v6h2v-6h-2z"></path></svg>&nbsp;&nbsp;Delete</button>
                        </div>
                    </div><div class="col-md-4">
                        <div class="as_list" id="session_7968">
                            <div>
                                <div class="platform_icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M21,15 L23,15 L23,18 C23,19.1045695 22.1045695,20 21,20 L3,20 C1.8954305,20 1,19.1045695 1,18 L1,15 L3,15 L3,6 C3,4.8954305 3.8954305,4 5,4 L19,4 C20.1045695,4 21,4.8954305 21,6 L21,15 Z M19,15 L19,6 L5,6 L5,15 L19,15 Z M3,17 L3,18 L21,18 L21,17 L3,17 Z"></path></svg>			</div>
                            </div>
                            <hr />
                            <div class="session_info">
                                <h4>Windows</h4>
                                <div class="sett_sess_info">
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" title="Browser"><path fill="currentColor" d="M21,3H3A2,2 0 0,0 1,5V19A2,2 0 0,0 3,21H21A2,2 0 0,0 23,19V5A2,2 0 0,0 21,3M21,19H3V5H13V9H21V19Z"></path></svg>&nbsp;&nbsp;Google Chrome</span>

                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" title="Last Seen"><path fill="currentColor" d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"></path></svg>&nbsp;&nbsp;11 days ago</span>

                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" title="IP Address"><path fill="currentColor" d="M16,11H14V9H16V11M3,5A2,2 0 0,1 5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5M10,7H8V17H10V7M12,17H14V13H16A2,2 0 0,0 18,11V9A2,2 0 0,0 16,7H12V17Z"></path></svg>&nbsp;&nbsp;49.37.44.124				</span>
                                </div>
                            </div>
                            <button title="" class="btn btn-danger log_out_session" onclick="logOutSession(7968)"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M4 8h16v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8zm3-3V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2h5v2H2V5h5zm2-1v1h6V4H9zm0 8v6h2v-6H9zm4 0v6h2v-6h-2z"></path></svg>&nbsp;&nbsp;Delete</button>
                        </div>
                    </div><div class="col-md-4">
                        <div class="as_list" id="session_7971">
                            <div>
                                <div class="platform_icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M21,15 L23,15 L23,18 C23,19.1045695 22.1045695,20 21,20 L3,20 C1.8954305,20 1,19.1045695 1,18 L1,15 L3,15 L3,6 C3,4.8954305 3.8954305,4 5,4 L19,4 C20.1045695,4 21,4.8954305 21,6 L21,15 Z M19,15 L19,6 L5,6 L5,15 L19,15 Z M3,17 L3,18 L21,18 L21,17 L3,17 Z"></path></svg>			</div>
                            </div>
                            <hr />
                            <div class="session_info">
                                <h4>Windows</h4>
                                <div class="sett_sess_info">
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" title="Browser"><path fill="currentColor" d="M21,3H3A2,2 0 0,0 1,5V19A2,2 0 0,0 3,21H21A2,2 0 0,0 23,19V5A2,2 0 0,0 21,3M21,19H3V5H13V9H21V19Z"></path></svg>&nbsp;&nbsp;Google Chrome</span>

                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" title="Last Seen"><path fill="currentColor" d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"></path></svg>&nbsp;&nbsp;11 days ago</span>

                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" title="IP Address"><path fill="currentColor" d="M16,11H14V9H16V11M3,5A2,2 0 0,1 5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5M10,7H8V17H10V7M12,17H14V13H16A2,2 0 0,0 18,11V9A2,2 0 0,0 16,7H12V17Z"></path></svg>&nbsp;&nbsp;49.37.44.124				</span>
                                </div>
                            </div>
                            <button title="" class="btn btn-danger log_out_session" onclick="logOutSession(7971)"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M4 8h16v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8zm3-3V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2h5v2H2V5h5zm2-1v1h6V4H9zm0 8v6h2v-6H9zm4 0v6h2v-6h-2z"></path></svg>&nbsp;&nbsp;Delete</button>
                        </div>
                    </div><div class="col-md-4">
                        <div class="as_list" id="session_8031">
                            <div>
                                <div class="platform_icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M21,15 L23,15 L23,18 C23,19.1045695 22.1045695,20 21,20 L3,20 C1.8954305,20 1,19.1045695 1,18 L1,15 L3,15 L3,6 C3,4.8954305 3.8954305,4 5,4 L19,4 C20.1045695,4 21,4.8954305 21,6 L21,15 Z M19,15 L19,6 L5,6 L5,15 L19,15 Z M3,17 L3,18 L21,18 L21,17 L3,17 Z"></path></svg>			</div>
                            </div>
                            <hr />
                            <div class="session_info">
                                <h4>Windows</h4>
                                <div class="sett_sess_info">
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" title="Browser"><path fill="currentColor" d="M21,3H3A2,2 0 0,0 1,5V19A2,2 0 0,0 3,21H21A2,2 0 0,0 23,19V5A2,2 0 0,0 21,3M21,19H3V5H13V9H21V19Z"></path></svg>&nbsp;&nbsp;Google Chrome</span>

                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" title="Last Seen"><path fill="currentColor" d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"></path></svg>&nbsp;&nbsp;8 days ago</span>

                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" title="IP Address"><path fill="currentColor" d="M16,11H14V9H16V11M3,5A2,2 0 0,1 5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5M10,7H8V17H10V7M12,17H14V13H16A2,2 0 0,0 18,11V9A2,2 0 0,0 16,7H12V17Z"></path></svg>&nbsp;&nbsp;49.37.43.124				</span>
                                </div>
                            </div>
                            <button title="" class="btn btn-danger log_out_session" onclick="logOutSession(8031)"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M4 8h16v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8zm3-3V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2h5v2H2V5h5zm2-1v1h6V4H9zm0 8v6h2v-6H9zm4 0v6h2v-6h-2z"></path></svg>&nbsp;&nbsp;Delete</button>
                        </div>
                    </div><div class="col-md-4">
                        <div class="as_list" id="session_8104">
                            <div>
                                <div class="platform_icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M21,15 L23,15 L23,18 C23,19.1045695 22.1045695,20 21,20 L3,20 C1.8954305,20 1,19.1045695 1,18 L1,15 L3,15 L3,6 C3,4.8954305 3.8954305,4 5,4 L19,4 C20.1045695,4 21,4.8954305 21,6 L21,15 Z M19,15 L19,6 L5,6 L5,15 L19,15 Z M3,17 L3,18 L21,18 L21,17 L3,17 Z"></path></svg>			</div>
                            </div>
                            <hr />
                            <div class="session_info">
                                <h4>Windows</h4>
                                <div class="sett_sess_info">
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" title="Browser"><path fill="currentColor" d="M21,3H3A2,2 0 0,0 1,5V19A2,2 0 0,0 3,21H21A2,2 0 0,0 23,19V5A2,2 0 0,0 21,3M21,19H3V5H13V9H21V19Z"></path></svg>&nbsp;&nbsp;Google Chrome</span>

                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" title="Last Seen"><path fill="currentColor" d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"></path></svg>&nbsp;&nbsp;7 days ago</span>

                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" title="IP Address"><path fill="currentColor" d="M16,11H14V9H16V11M3,5A2,2 0 0,1 5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5M10,7H8V17H10V7M12,17H14V13H16A2,2 0 0,0 18,11V9A2,2 0 0,0 16,7H12V17Z"></path></svg>&nbsp;&nbsp;49.37.43.184				</span>
                                </div>
                            </div>
                            <button title="" class="btn btn-danger log_out_session" onclick="logOutSession(8104)"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M4 8h16v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8zm3-3V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2h5v2H2V5h5zm2-1v1h6V4H9zm0 8v6h2v-6H9zm4 0v6h2v-6h-2z"></path></svg>&nbsp;&nbsp;Delete</button>
                        </div>
                    </div><div class="col-md-4">
                        <div class="as_list" id="session_8140">
                            <div>
                                <div class="platform_icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M21,15 L23,15 L23,18 C23,19.1045695 22.1045695,20 21,20 L3,20 C1.8954305,20 1,19.1045695 1,18 L1,15 L3,15 L3,6 C3,4.8954305 3.8954305,4 5,4 L19,4 C20.1045695,4 21,4.8954305 21,6 L21,15 Z M19,15 L19,6 L5,6 L5,15 L19,15 Z M3,17 L3,18 L21,18 L21,17 L3,17 Z"></path></svg>			</div>
                            </div>
                            <hr />
                            <div class="session_info">
                                <h4>Windows</h4>
                                <div class="sett_sess_info">
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" title="Browser"><path fill="currentColor" d="M21,3H3A2,2 0 0,0 1,5V19A2,2 0 0,0 3,21H21A2,2 0 0,0 23,19V5A2,2 0 0,0 21,3M21,19H3V5H13V9H21V19Z"></path></svg>&nbsp;&nbsp;Google Chrome</span>

                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" title="Last Seen"><path fill="currentColor" d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"></path></svg>&nbsp;&nbsp;6 days ago</span>

                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" title="IP Address"><path fill="currentColor" d="M16,11H14V9H16V11M3,5A2,2 0 0,1 5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5M10,7H8V17H10V7M12,17H14V13H16A2,2 0 0,0 18,11V9A2,2 0 0,0 16,7H12V17Z"></path></svg>&nbsp;&nbsp;49.37.42.27				</span>
                                </div>
                            </div>
                            <button title="" class="btn btn-danger log_out_session" onclick="logOutSession(8140)"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M4 8h16v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8zm3-3V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2h5v2H2V5h5zm2-1v1h6V4H9zm0 8v6h2v-6H9zm4 0v6h2v-6h-2z"></path></svg>&nbsp;&nbsp;Delete</button>
                        </div>
                    </div><div class="col-md-4">
                        <div class="as_list" id="session_8156">
                            <div>
                                <div class="platform_icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M7,1 L17,1 C18.1045695,1 19,1.8954305 19,3 L19,21 C19,22.1045695 18.1045695,23 17,23 L7,23 C5.8954305,23 5,22.1045695 5,21 L5,3 C5,1.8954305 5.8954305,1 7,1 Z M10,3 L7,3 L7,21 L17,21 L17,3 L14,3 C14,3.55228475 13.5522847,4 13,4 L11,4 C10.4477153,4 10,3.55228475 10,3 Z"></path></svg>			</div>
                            </div>
                            <hr />
                            <div class="session_info">
                                <h4>Android Web</h4>
                                <div class="sett_sess_info">
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" title="Browser"><path fill="currentColor" d="M21,3H3A2,2 0 0,0 1,5V19A2,2 0 0,0 3,21H21A2,2 0 0,0 23,19V5A2,2 0 0,0 21,3M21,19H3V5H13V9H21V19Z"></path></svg>&nbsp;&nbsp;Google Chrome</span>

                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" title="Last Seen"><path fill="currentColor" d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"></path></svg>&nbsp;&nbsp;6 days ago</span>

                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" title="IP Address"><path fill="currentColor" d="M16,11H14V9H16V11M3,5A2,2 0 0,1 5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5M10,7H8V17H10V7M12,17H14V13H16A2,2 0 0,0 18,11V9A2,2 0 0,0 16,7H12V17Z"></path></svg>&nbsp;&nbsp;157.40.206.12				</span>
                                </div>
                            </div>
                            <button title="" class="btn btn-danger log_out_session" onclick="logOutSession(8156)"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M4 8h16v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8zm3-3V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2h5v2H2V5h5zm2-1v1h6V4H9zm0 8v6h2v-6H9zm4 0v6h2v-6h-2z"></path></svg>&nbsp;&nbsp;Delete</button>
                        </div>
                    </div><div class="col-md-4">
                        <div class="as_list" id="session_8173">
                            <div>
                                <div class="platform_icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M21,15 L23,15 L23,18 C23,19.1045695 22.1045695,20 21,20 L3,20 C1.8954305,20 1,19.1045695 1,18 L1,15 L3,15 L3,6 C3,4.8954305 3.8954305,4 5,4 L19,4 C20.1045695,4 21,4.8954305 21,6 L21,15 Z M19,15 L19,6 L5,6 L5,15 L19,15 Z M3,17 L3,18 L21,18 L21,17 L3,17 Z"></path></svg>			</div>
                            </div>
                            <hr />
                            <div class="session_info">
                                <h4>Linux</h4>
                                <div class="sett_sess_info">
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" title="Browser"><path fill="currentColor" d="M21,3H3A2,2 0 0,0 1,5V19A2,2 0 0,0 3,21H21A2,2 0 0,0 23,19V5A2,2 0 0,0 21,3M21,19H3V5H13V9H21V19Z"></path></svg>&nbsp;&nbsp;Google Chrome</span>

                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" title="Last Seen"><path fill="currentColor" d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"></path></svg>&nbsp;&nbsp;6 days ago</span>

                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" title="IP Address"><path fill="currentColor" d="M16,11H14V9H16V11M3,5A2,2 0 0,1 5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5M10,7H8V17H10V7M12,17H14V13H16A2,2 0 0,0 18,11V9A2,2 0 0,0 16,7H12V17Z"></path></svg>&nbsp;&nbsp;103.175.63.33				</span>
                                </div>
                            </div>
                            <button title="" class="btn btn-danger log_out_session" onclick="logOutSession(8173)"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M4 8h16v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8zm3-3V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2h5v2H2V5h5zm2-1v1h6V4H9zm0 8v6h2v-6H9zm4 0v6h2v-6h-2z"></path></svg>&nbsp;&nbsp;Delete</button>
                        </div>
                    </div><div class="col-md-4">
                        <div class="as_list" id="session_8186">
                            <div>
                                <div class="platform_icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M21,15 L23,15 L23,18 C23,19.1045695 22.1045695,20 21,20 L3,20 C1.8954305,20 1,19.1045695 1,18 L1,15 L3,15 L3,6 C3,4.8954305 3.8954305,4 5,4 L19,4 C20.1045695,4 21,4.8954305 21,6 L21,15 Z M19,15 L19,6 L5,6 L5,15 L19,15 Z M3,17 L3,18 L21,18 L21,17 L3,17 Z"></path></svg>			</div>
                            </div>
                            <hr />
                            <div class="session_info">
                                <h4>Windows</h4>
                                <div class="sett_sess_info">
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" title="Browser"><path fill="currentColor" d="M21,3H3A2,2 0 0,0 1,5V19A2,2 0 0,0 3,21H21A2,2 0 0,0 23,19V5A2,2 0 0,0 21,3M21,19H3V5H13V9H21V19Z"></path></svg>&nbsp;&nbsp;Google Chrome</span>

                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" title="Last Seen"><path fill="currentColor" d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"></path></svg>&nbsp;&nbsp;5 days ago</span>

                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" title="IP Address"><path fill="currentColor" d="M16,11H14V9H16V11M3,5A2,2 0 0,1 5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5M10,7H8V17H10V7M12,17H14V13H16A2,2 0 0,0 18,11V9A2,2 0 0,0 16,7H12V17Z"></path></svg>&nbsp;&nbsp;49.37.42.39				</span>
                                </div>
                            </div>
                            <button title="" class="btn btn-danger log_out_session" onclick="logOutSession(8186)"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M4 8h16v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8zm3-3V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2h5v2H2V5h5zm2-1v1h6V4H9zm0 8v6h2v-6H9zm4 0v6h2v-6h-2z"></path></svg>&nbsp;&nbsp;Delete</button>
                        </div>
                    </div><div class="col-md-4">
                        <div class="as_list" id="session_8188">
                            <div>
                                <div class="platform_icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M21,15 L23,15 L23,18 C23,19.1045695 22.1045695,20 21,20 L3,20 C1.8954305,20 1,19.1045695 1,18 L1,15 L3,15 L3,6 C3,4.8954305 3.8954305,4 5,4 L19,4 C20.1045695,4 21,4.8954305 21,6 L21,15 Z M19,15 L19,6 L5,6 L5,15 L19,15 Z M3,17 L3,18 L21,18 L21,17 L3,17 Z"></path></svg>			</div>
                            </div>
                            <hr />
                            <div class="session_info">
                                <h4>Windows</h4>
                                <div class="sett_sess_info">
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" title="Browser"><path fill="currentColor" d="M21,3H3A2,2 0 0,0 1,5V19A2,2 0 0,0 3,21H21A2,2 0 0,0 23,19V5A2,2 0 0,0 21,3M21,19H3V5H13V9H21V19Z"></path></svg>&nbsp;&nbsp;Google Chrome</span>

                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" title="Last Seen"><path fill="currentColor" d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"></path></svg>&nbsp;&nbsp;5 days ago</span>

                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" title="IP Address"><path fill="currentColor" d="M16,11H14V9H16V11M3,5A2,2 0 0,1 5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5M10,7H8V17H10V7M12,17H14V13H16A2,2 0 0,0 18,11V9A2,2 0 0,0 16,7H12V17Z"></path></svg>&nbsp;&nbsp;49.37.42.39				</span>
                                </div>
                            </div>
                            <button title="" class="btn btn-danger log_out_session" onclick="logOutSession(8188)"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M4 8h16v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8zm3-3V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2h5v2H2V5h5zm2-1v1h6V4H9zm0 8v6h2v-6H9zm4 0v6h2v-6h-2z"></path></svg>&nbsp;&nbsp;Delete</button>
                        </div>
                    </div><div class="col-md-4">
                        <div class="as_list" id="session_8218">
                            <div>
                                <div class="platform_icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M21,15 L23,15 L23,18 C23,19.1045695 22.1045695,20 21,20 L3,20 C1.8954305,20 1,19.1045695 1,18 L1,15 L3,15 L3,6 C3,4.8954305 3.8954305,4 5,4 L19,4 C20.1045695,4 21,4.8954305 21,6 L21,15 Z M19,15 L19,6 L5,6 L5,15 L19,15 Z M3,17 L3,18 L21,18 L21,17 L3,17 Z"></path></svg>			</div>
                            </div>
                            <hr />
                            <div class="session_info">
                                <h4>Windows</h4>
                                <div class="sett_sess_info">
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" title="Browser"><path fill="currentColor" d="M21,3H3A2,2 0 0,0 1,5V19A2,2 0 0,0 3,21H21A2,2 0 0,0 23,19V5A2,2 0 0,0 21,3M21,19H3V5H13V9H21V19Z"></path></svg>&nbsp;&nbsp;Google Chrome</span>

                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" title="Last Seen"><path fill="currentColor" d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"></path></svg>&nbsp;&nbsp;4 days ago</span>

                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" title="IP Address"><path fill="currentColor" d="M16,11H14V9H16V11M3,5A2,2 0 0,1 5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5M10,7H8V17H10V7M12,17H14V13H16A2,2 0 0,0 18,11V9A2,2 0 0,0 16,7H12V17Z"></path></svg>&nbsp;&nbsp;49.37.40.245				</span>
                                </div>
                            </div>
                            <button title="" class="btn btn-danger log_out_session" onclick="logOutSession(8218)"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M4 8h16v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8zm3-3V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2h5v2H2V5h5zm2-1v1h6V4H9zm0 8v6h2v-6H9zm4 0v6h2v-6h-2z"></path></svg>&nbsp;&nbsp;Delete</button>
                        </div>
                    </div><div class="col-md-4">
                        <div class="as_list" id="session_8298">
                            <div>
                                <div class="platform_icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M21,15 L23,15 L23,18 C23,19.1045695 22.1045695,20 21,20 L3,20 C1.8954305,20 1,19.1045695 1,18 L1,15 L3,15 L3,6 C3,4.8954305 3.8954305,4 5,4 L19,4 C20.1045695,4 21,4.8954305 21,6 L21,15 Z M19,15 L19,6 L5,6 L5,15 L19,15 Z M3,17 L3,18 L21,18 L21,17 L3,17 Z"></path></svg>			</div>
                            </div>
                            <hr />
                            <div class="session_info">
                                <h4>Windows</h4>
                                <div class="sett_sess_info">
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" title="Browser"><path fill="currentColor" d="M21,3H3A2,2 0 0,0 1,5V19A2,2 0 0,0 3,21H21A2,2 0 0,0 23,19V5A2,2 0 0,0 21,3M21,19H3V5H13V9H21V19Z"></path></svg>&nbsp;&nbsp;Google Chrome</span>

                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" title="Last Seen"><path fill="currentColor" d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"></path></svg>&nbsp;&nbsp;1 day ago</span>

                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" title="IP Address"><path fill="currentColor" d="M16,11H14V9H16V11M3,5A2,2 0 0,1 5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5M10,7H8V17H10V7M12,17H14V13H16A2,2 0 0,0 18,11V9A2,2 0 0,0 16,7H12V17Z"></path></svg>&nbsp;&nbsp;157.40.87.39				</span>
                                </div>
                            </div>
                            <button title="" class="btn btn-danger log_out_session" onclick="logOutSession(8298)"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M4 8h16v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8zm3-3V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2h5v2H2V5h5zm2-1v1h6V4H9zm0 8v6h2v-6H9zm4 0v6h2v-6h-2z"></path></svg>&nbsp;&nbsp;Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ManageSession