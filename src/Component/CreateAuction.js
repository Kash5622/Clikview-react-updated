import React from 'react'
import MobileSearch from './MobileSearch';

function CreateAuction(props) {
    const { searchOpen, expandNav } = props;
    return (
        <div>
            <div className={expandNav ? "main-container shrinkWidth bodyfixed" : "main-container expandWidth"} Style="z-index:-1">
                <div id="main-container" class="container main-content" data-logged="true">
                    {searchOpen ? <MobileSearch /> : ""}
                    <div class="ads-placment" id="header_ad_"></div>
                    <div class="announcement-renderer">

                    </div>
                    <div id="container_content">
                        <div class="row auction_create_form">
                            <div class="col-md-1"></div>
                            <div class="col-md-10">
                                <div class="content pt_shadow">
                                    <div class="col-md-12 padding-none-mobile">
                                        <div class="upload-head">
                                            <h4 class="edit-video-title">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                                    <path fill="currentColor" d="M9.243 19H21v2H3v-4.243l9.9-9.9 4.242 4.244L9.242 19zm5.07-13.556l2.122-2.122a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414l-2.122 2.121-4.242-4.242z"></path>
                                                </svg>
                                                Create auction
                                            </h4>
                                            <hr />
                                        </div>
                                        <div class="pt_forms_large_btns" id="upload-form">
                                            <form action="" class="form-horizontal pt_forms" id="create_participate" method="POST">
                                                <div class="pp_mat_input">
                                                    <input id="title" name="title" type="text" placeholder=" " />
                                                    <label for="title">Auction title</label>
                                                </div>
                                                <div class="pp_mat_input">
                                                    <textarea name="description" id="description" cols="30" rows="5"></textarea>
                                                    <label for="description">Auction brief</label>
                                                </div>
                                                <div class="pp_mat_input">
                                                    <textarea name="auction_details" id="text" Style="display: none;" aria-hidden="true"></textarea><div role="application" class="tox tox-tinymce" Style="visibility: hidden; height: 500px;"><div class="tox-editor-container"><div data-alloy-vertical-dir="toptobottom" class="tox-editor-header"><div role="menubar" data-alloy-tabstop="true" class="tox-menubar"><button aria-haspopup="true" role="menuitem" type="button" data-alloy-tabstop="true" unselectable="on" tabindex="-1" class="tox-mbtn tox-mbtn--select" aria-expanded="false" Style="user-select: none;"><span class="tox-mbtn__select-label">File</span><div class="tox-mbtn__select-chevron"><svg width="10" height="10"><path d="M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 010-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z" fill-rule="nonzero"></path></svg></div></button><button aria-haspopup="true" role="menuitem" type="button" data-alloy-tabstop="true" unselectable="on" tabindex="-1" class="tox-mbtn tox-mbtn--select" aria-expanded="false" Style="user-select: none;"><span class="tox-mbtn__select-label">Edit</span><div class="tox-mbtn__select-chevron"><svg width="10" height="10"><path d="M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 010-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z" fill-rule="nonzero"></path></svg></div></button><button aria-haspopup="true" role="menuitem" type="button" data-alloy-tabstop="true" unselectable="on" tabindex="-1" class="tox-mbtn tox-mbtn--select" aria-expanded="false" Style="user-select: none;"><span class="tox-mbtn__select-label">View</span><div class="tox-mbtn__select-chevron"><svg width="10" height="10"><path d="M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 010-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z" fill-rule="nonzero"></path></svg></div></button><button aria-haspopup="true" role="menuitem" type="button" data-alloy-tabstop="true" unselectable="on" tabindex="-1" class="tox-mbtn tox-mbtn--select" aria-expanded="false" Style="user-select: none;"><span class="tox-mbtn__select-label">Insert</span><div class="tox-mbtn__select-chevron"><svg width="10" height="10"><path d="M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 010-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z" fill-rule="nonzero"></path></svg></div></button><button aria-haspopup="true" role="menuitem" type="button" data-alloy-tabstop="true" unselectable="on" tabindex="-1" class="tox-mbtn tox-mbtn--select" aria-expanded="false" Style="user-select: none;"><span class="tox-mbtn__select-label">Format</span><div class="tox-mbtn__select-chevron"><svg width="10" height="10"><path d="M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 010-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z" fill-rule="nonzero"></path></svg></div></button><button aria-haspopup="true" role="menuitem" type="button" data-alloy-tabstop="true" unselectable="on" tabindex="-1" class="tox-mbtn tox-mbtn--select" aria-expanded="false" Style="user-select: none;"><span class="tox-mbtn__select-label">Tools</span><div class="tox-mbtn__select-chevron"><svg width="10" height="10"><path d="M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 010-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z" fill-rule="nonzero"></path></svg></div></button><button aria-haspopup="true" role="menuitem" type="button" data-alloy-tabstop="true" unselectable="on" tabindex="-1" class="tox-mbtn tox-mbtn--select" aria-expanded="false" Style="user-select: none;"><span class="tox-mbtn__select-label">Table</span><div class="tox-mbtn__select-chevron"><svg width="10" height="10"><path d="M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 010-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z" fill-rule="nonzero"></path></svg></div></button></div><div role="group" class="tox-toolbar-overlord"  ><div role="group" class="tox-toolbar__primary"><div title="" role="toolbar" data-alloy-tabstop="true" tabindex="-1" class="tox-toolbar__group"><button aria-label="Undo" title="Undo" type="button" tabindex="-1" class="tox-tbtn tox-tbtn--disabled"  ><span class="tox-icon tox-tbtn__icon-wrap"><svg width="24" height="24"><path d="M6.4 8H12c3.7 0 6.2 2 6.8 5.1.6 2.7-.4 5.6-2.3 6.8a1 1 0 01-1-1.8c1.1-.6 1.8-2.7 1.4-4.6-.5-2.1-2.1-3.5-4.9-3.5H6.4l3.3 3.3a1 1 0 11-1.4 1.4l-5-5a1 1 0 010-1.4l5-5a1 1 0 011.4 1.4L6.4 8z" fill-rule="nonzero"></path></svg></span></button><button aria-label="Redo" title="Redo" type="button" tabindex="-1" class="tox-tbtn tox-tbtn--disabled"  ><span class="tox-icon tox-tbtn__icon-wrap"><svg width="24" height="24"><path d="M17.6 10H12c-2.8 0-4.4 1.4-4.9 3.5-.4 2 .3 4 1.4 4.6a1 1 0 11-1 1.8c-2-1.2-2.9-4.1-2.3-6.8.6-3 3-5.1 6.8-5.1h5.6l-3.3-3.3a1 1 0 111.4-1.4l5 5a1 1 0 010 1.4l-5 5a1 1 0 01-1.4-1.4l3.3-3.3z" fill-rule="nonzero"></path></svg></span></button></div><div title="" role="toolbar" data-alloy-tabstop="true" tabindex="-1" class="tox-toolbar__group"><button title="Formats" aria-label="Formats" aria-haspopup="true" type="button" unselectable="on" tabindex="-1" class="tox-tbtn tox-tbtn--select tox-tbtn--bespoke" aria-expanded="false" Style="user-select: none;"><span class="tox-tbtn__select-label">Paragraph</span><div class="tox-tbtn__select-chevron"><svg width="10" height="10"><path d="M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 010-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z" fill-rule="nonzero"></path></svg></div></button></div><div title="" role="toolbar" data-alloy-tabstop="true" tabindex="-1" class="tox-toolbar__group"><button aria-label="Bold" title="Bold" type="button" tabindex="-1" class="tox-tbtn" aria-pressed="false"><span class="tox-icon tox-tbtn__icon-wrap"><svg width="24" height="24"><path d="M7.8 19c-.3 0-.5 0-.6-.2l-.2-.5V5.7c0-.2 0-.4.2-.5l.6-.2h5c1.5 0 2.7.3 3.5 1 .7.6 1.1 1.4 1.1 2.5a3 3 0 01-.6 1.9c-.4.6-1 1-1.6 1.2.4.1.9.3 1.3.6s.8.7 1 1.2c.4.4.5 1 .5 1.6 0 1.3-.4 2.3-1.3 3-.8.7-2.1 1-3.8 1H7.8zm5-8.3c.6 0 1.2-.1 1.6-.5.4-.3.6-.7.6-1.3 0-1.1-.8-1.7-2.3-1.7H9.3v3.5h3.4zm.5 6c.7 0 1.3-.1 1.7-.4.4-.4.6-.9.6-1.5s-.2-1-.7-1.4c-.4-.3-1-.4-2-.4H9.4v3.8h4z" fill-rule="evenodd"></path></svg></span></button><button aria-label="Italic" title="Italic" type="button" tabindex="-1" class="tox-tbtn" aria-pressed="false"><span class="tox-icon tox-tbtn__icon-wrap"><svg width="24" height="24"><path d="M16.7 4.7l-.1.9h-.3c-.6 0-1 0-1.4.3-.3.3-.4.6-.5 1.1l-2.1 9.8v.6c0 .5.4.8 1.4.8h.2l-.2.8H8l.2-.8h.2c1.1 0 1.8-.5 2-1.5l2-9.8.1-.5c0-.6-.4-.8-1.4-.8h-.3l.2-.9h5.8z" fill-rule="evenodd"></path></svg></span></button></div><div title="" role="toolbar" data-alloy-tabstop="true" tabindex="-1" class="tox-toolbar__group"><button aria-label="Align left" title="Align left" type="button" tabindex="-1" class="tox-tbtn" aria-pressed="false"><span class="tox-icon tox-tbtn__icon-wrap"><svg width="24" height="24"><path d="M5 5h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 110-2zm0 4h8c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 110-2zm0 8h8c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 010-2zm0-4h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 010-2z" fill-rule="evenodd"></path></svg></span></button><button aria-label="Align center" title="Align center" type="button" tabindex="-1" class="tox-tbtn" aria-pressed="false"><span class="tox-icon tox-tbtn__icon-wrap"><svg width="24" height="24"><path d="M5 5h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 110-2zm3 4h8c.6 0 1 .4 1 1s-.4 1-1 1H8a1 1 0 110-2zm0 8h8c.6 0 1 .4 1 1s-.4 1-1 1H8a1 1 0 010-2zm-3-4h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 010-2z" fill-rule="evenodd"></path></svg></span></button><button aria-label="Align right" title="Align right" type="button" tabindex="-1" class="tox-tbtn" aria-pressed="false"><span class="tox-icon tox-tbtn__icon-wrap"><svg width="24" height="24"><path d="M5 5h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 110-2zm6 4h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zm0 8h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zm-6-4h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 010-2z" fill-rule="evenodd"></path></svg></span></button><button aria-label="Justify" title="Justify" type="button" tabindex="-1" class="tox-tbtn" aria-pressed="false"><span class="tox-icon tox-tbtn__icon-wrap"><svg width="24" height="24"><path d="M5 5h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 110-2zm0 4h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 110-2zm0 4h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 010-2zm0 4h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 010-2z" fill-rule="evenodd"></path></svg></span></button></div><div title="" role="toolbar" data-alloy-tabstop="true" tabindex="-1" class="tox-toolbar__group"><div aria-pressed="false" aria-label="Bullet list" title="Bullet list" role="button" aria-haspopup="true" unselectable="on" tabindex="-1" class="tox-split-button" aria-expanded="false" aria-describedby="aria_2905662102021670407692292" Style="user-select: none;"><span role="presentation" tabindex="-1" class="tox-tbtn"  ><span class="tox-icon tox-tbtn__icon-wrap"><svg width="24" height="24"><path d="M11 5h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zm0 6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zm0 6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zM4.5 6c0-.4.1-.8.4-1 .3-.4.7-.5 1.1-.5.4 0 .8.1 1 .4.4.3.5.7.5 1.1 0 .4-.1.8-.4 1-.3.4-.7.5-1.1.5-.4 0-.8-.1-1-.4-.4-.3-.5-.7-.5-1.1zm0 6c0-.4.1-.8.4-1 .3-.4.7-.5 1.1-.5.4 0 .8.1 1 .4.4.3.5.7.5 1.1 0 .4-.1.8-.4 1-.3.4-.7.5-1.1.5-.4 0-.8-.1-1-.4-.4-.3-.5-.7-.5-1.1zm0 6c0-.4.1-.8.4-1 .3-.4.7-.5 1.1-.5.4 0 .8.1 1 .4.4.3.5.7.5 1.1 0 .4-.1.8-.4 1-.3.4-.7.5-1.1.5-.4 0-.8-.1-1-.4-.4-.3-.5-.7-.5-1.1z" fill-rule="evenodd"></path></svg></span></span><span role="presentation" tabindex="-1" class="tox-tbtn tox-split-button__chevron"  ><svg width="10" height="10"><path d="M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 010-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z" fill-rule="nonzero"></path></svg></span><span aria-hidden="true" id="aria_2905662102021670407692292" Style="display: none;">To open the popup, press Shift+Enter</span></div><div aria-pressed="false" aria-label="Numbered list" title="Numbered list" role="button" aria-haspopup="true" unselectable="on" tabindex="-1" class="tox-split-button" aria-expanded="false" aria-describedby="aria_2776884722041670407692293" Style="user-select: none;"><span role="presentation" tabindex="-1" class="tox-tbtn"  ><span class="tox-icon tox-tbtn__icon-wrap"><svg width="24" height="24"><path d="M10 17h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zm0-6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zm0-6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 110-2zM6 4v3.5c0 .3-.2.5-.5.5a.5.5 0 01-.5-.5V5h-.5a.5.5 0 010-1H6zm-1 8.8l.2.2h1.3c.3 0 .5.2.5.5s-.2.5-.5.5H4.9a1 1 0 01-.9-1V13c0-.4.3-.8.6-1l1.2-.4.2-.3a.2.2 0 00-.2-.2H4.5a.5.5 0 01-.5-.5c0-.3.2-.5.5-.5h1.6c.5 0 .9.4.9 1v.1c0 .4-.3.8-.6 1l-1.2.4-.2.3zM7 17v2c0 .6-.4 1-1 1H4.5a.5.5 0 010-1h1.2c.2 0 .3-.1.3-.3 0-.2-.1-.3-.3-.3H4.4a.4.4 0 110-.8h1.3c.2 0 .3-.1.3-.3 0-.2-.1-.3-.3-.3H4.5a.5.5 0 110-1H6c.6 0 1 .4 1 1z" fill-rule="evenodd"></path></svg></span></span><span role="presentation" tabindex="-1" class="tox-tbtn tox-split-button__chevron"  ><svg width="10" height="10"><path d="M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 010-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z" fill-rule="nonzero"></path></svg></span><span aria-hidden="true" id="aria_2776884722041670407692293" Style="display: none;">To open the popup, press Shift+Enter</span></div><button aria-label="Decrease indent" title="Decrease indent" type="button" tabindex="-1" class="tox-tbtn tox-tbtn--disabled"  ><span class="tox-icon tox-tbtn__icon-wrap"><svg width="24" height="24"><path d="M7 5h12c.6 0 1 .4 1 1s-.4 1-1 1H7a1 1 0 110-2zm5 4h7c.6 0 1 .4 1 1s-.4 1-1 1h-7a1 1 0 010-2zm0 4h7c.6 0 1 .4 1 1s-.4 1-1 1h-7a1 1 0 010-2zm-5 4h12a1 1 0 010 2H7a1 1 0 010-2zm1.6-3.8a1 1 0 01-1.2 1.6l-3-2a1 1 0 010-1.6l3-2a1 1 0 011.2 1.6L6.8 12l1.8 1.2z" fill-rule="evenodd"></path></svg></span></button><button aria-label="Increase indent" title="Increase indent" type="button" tabindex="-1" class="tox-tbtn"  ><span class="tox-icon tox-tbtn__icon-wrap"><svg width="24" height="24"><path d="M7 5h12c.6 0 1 .4 1 1s-.4 1-1 1H7a1 1 0 110-2zm5 4h7c.6 0 1 .4 1 1s-.4 1-1 1h-7a1 1 0 010-2zm0 4h7c.6 0 1 .4 1 1s-.4 1-1 1h-7a1 1 0 010-2zm-5 4h12a1 1 0 010 2H7a1 1 0 010-2zm-2.6-3.8L6.2 12l-1.8-1.2a1 1 0 011.2-1.6l3 2a1 1 0 010 1.6l-3 2a1 1 0 11-1.2-1.6z" fill-rule="evenodd"></path></svg></span></button></div><div title="" role="toolbar" data-alloy-tabstop="true" tabindex="-1" class="tox-toolbar__group"><button aria-label="Insert/edit link" title="Insert/edit link" type="button" tabindex="-1" class="tox-tbtn" aria-pressed="false"><span class="tox-icon tox-tbtn__icon-wrap"><svg width="24" height="24"><path d="M6.2 12.3a1 1 0 011.4 1.4l-2.1 2a2 2 0 102.7 2.8l4.8-4.8a1 1 0 000-1.4 1 1 0 111.4-1.3 2.9 2.9 0 010 4L9.6 20a3.9 3.9 0 01-5.5-5.5l2-2zm11.6-.6a1 1 0 01-1.4-1.4l2-2a2 2 0 10-2.6-2.8L11 10.3a1 1 0 000 1.4A1 1 0 119.6 13a2.9 2.9 0 010-4L14.4 4a3.9 3.9 0 015.5 5.5l-2 2z" fill-rule="nonzero"></path></svg></span></button><button aria-label="Insert/edit image" title="Insert/edit image" type="button" tabindex="-1" class="tox-tbtn" aria-pressed="false"><span class="tox-icon tox-tbtn__icon-wrap"><svg width="24" height="24"><path d="M5 15.7l3.3-3.2c.3-.3.7-.3 1 0L12 15l4.1-4c.3-.4.8-.4 1 0l2 1.9V5H5v10.7zM5 18V19h3l2.8-2.9-2-2L5 17.9zm14-3l-2.5-2.4-6.4 6.5H19v-4zM4 3h16c.6 0 1 .4 1 1v16c0 .6-.4 1-1 1H4a1 1 0 01-1-1V4c0-.6.4-1 1-1zm6 8a2 2 0 100-4 2 2 0 000 4z" fill-rule="nonzero"></path></svg></span></button></div><div title="" role="toolbar" data-alloy-tabstop="true" tabindex="-1" class="tox-toolbar__group"><button aria-label="Preview" title="Preview" type="button" tabindex="-1" class="tox-tbtn"  ><span class="tox-icon tox-tbtn__icon-wrap"><svg width="24" height="24"><path d="M3.5 12.5c.5.8 1.1 1.6 1.8 2.3 2 2 4.2 3.2 6.7 3.2s4.7-1.2 6.7-3.2a16.2 16.2 0 002.1-2.8 15.7 15.7 0 00-2.1-2.8c-2-2-4.2-3.2-6.7-3.2a9.3 9.3 0 00-6.7 3.2A16.2 16.2 0 003.2 12c0 .2.2.3.3.5zm-2.4-1l.7-1.2L4 7.8C6.2 5.4 8.9 4 12 4c3 0 5.8 1.4 8.1 3.8a18.2 18.2 0 012.8 3.7v1l-.7 1.2-2.1 2.5c-2.3 2.4-5 3.8-8.1 3.8-3 0-5.8-1.4-8.1-3.8a18.2 18.2 0 01-2.8-3.7 1 1 0 010-1zm12-3.3a2 2 0 102.7 2.6 4 4 0 11-2.6-2.6z" fill-rule="nonzero"></path></svg></span></button><button aria-label="Insert/edit media" title="Insert/edit media" type="button" tabindex="-1" class="tox-tbtn" aria-pressed="false"><span class="tox-icon tox-tbtn__icon-wrap"><svg width="24" height="24"><path d="M4 3h16c.6 0 1 .4 1 1v16c0 .6-.4 1-1 1H4a1 1 0 01-1-1V4c0-.6.4-1 1-1zm1 2v14h14V5H5zm4.8 2.6l5.6 4a.5.5 0 010 .8l-5.6 4A.5.5 0 019 16V8a.5.5 0 01.8-.4z" fill-rule="nonzero"></path></svg></span></button></div><div role="toolbar" data-alloy-tabstop="true" tabindex="-1" class="tox-toolbar__group"><button aria-label="More..." title="More..." aria-haspopup="true" type="button" data-alloy-tabstop="true" tabindex="-1" class="tox-tbtn" aria-expanded="false"><span class="tox-icon tox-tbtn__icon-wrap"><svg width="24" height="24"><path d="M6 10a2 2 0 00-2 2c0 1.1.9 2 2 2a2 2 0 002-2 2 2 0 00-2-2zm12 0a2 2 0 00-2 2c0 1.1.9 2 2 2a2 2 0 002-2 2 2 0 00-2-2zm-6 0a2 2 0 00-2 2c0 1.1.9 2 2 2a2 2 0 002-2 2 2 0 00-2-2z" fill-rule="nonzero"></path></svg></span></button></div></div></div><div class="tox-anchorbar"></div></div><div class="tox-sidebar-wrap"><div class="tox-edit-area"><iframe id="text_ifr" frameborder="0" allowtransparency="true" title="Rich Text Area. Press ALT-0 for help." class="tox-edit-area__iframe"></iframe></div><div role="complementary" class="tox-sidebar"><div data-alloy-tabstop="true" tabindex="-1" class="tox-sidebar__slider tox-sidebar--sliding-closed" Style="width: 0px;"><div class="tox-sidebar__pane-container"></div></div></div></div></div><div class="tox-statusbar"><div class="tox-statusbar__text-container"><div role="navigation" data-alloy-tabstop="true" class="tox-statusbar__path"  ><div role="button" data-index="0" tab-index="-1" tabindex="-1" class="tox-statusbar__path-item"  >p</div></div><button type="button" data-alloy-tabstop="true" tabindex="-1" class="tox-statusbar__wordcount">0 words</button><span class="tox-statusbar__branding"><a href="https://www.tiny.cloud/?utm_campaign=editor_referral&amp;utm_medium=poweredby&amp;utm_source=tinymce&amp;utm_content=v5" rel="noopener" tabindex="-1" aria-label="Powered by Tiny">Powered by Tiny</a></span></div><div title="Resize" aria-hidden="true" class="tox-statusbar__resize-handle"><svg width="10" height="10"><g fill-rule="nonzero"><path d="M8.1 1.1A.5.5 0 119 2l-7 7A.5.5 0 111 8l7-7zM8.1 5.1A.5.5 0 119 6l-3 3A.5.5 0 115 8l3-3z"></path></g></svg></div></div><div aria-hidden="true" class="tox-throbber" Style="display: none;"></div></div>
                                                    <label for="text" Style="z-index: 1;">Auction details</label>
                                                </div>

                                                <div class="pricing-card">
                                                    <div class="pricing-item">
                                                        <div class="pricing-item-title">
                                                            <div class="row">
                                                                <div class="col-md-10">
                                                                    <h5 Style="font-size: 17px; font-weight: bold">Auction</h5>
                                                                    <p>Set a starting amount and let buyers complete your item.</p>
                                                                </div>
                                                                <div class="col-md-2">
                                                                    <label class="switch">
                                                                        <input type="checkbox" name="auction" class="pricing" value="1" checked="" />
                                                                        <span class="slider round"></span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="pricing-details auction" Style="display: block !important;">
                                                            <div class="starting-price">
                                                                <div class="row mobile-row">
                                                                    <div class="col-md-8">
                                                                        <h6>Starting price</h6>
                                                                        <p>
                                                                            To attract buyers and increase competition for your item,
                                                                            consider a low Starting price.
                                                                        </p>
                                                                    </div>
                                                                    <div class="col-md-4">
                                                                        <div class="pp_mat_input" Style="margin: 0">
                                                                            <input id="starting_price" name="starting_price" type="number" placeholder="Starting price" step="any" min="0" />
                                                                            <label for="starting_price">Starting price</label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* <!--auction_schedule--> */}
                                                            <div class="checkbox-group">
                                                                <div class="checkbox-title">
                                                                    <div class="cb">
                                                                        <label class="switch">
                                                                            <input type="checkbox" name="auction_schedule" class="" checked="" disabled="" />
                                                                            <span class="slider round"></span>
                                                                        </label>
                                                                    </div>
                                                                    <div class="text">
                                                                        <h6>Schedule your listing's start and end date</h6>
                                                                        <p>
                                                                            Choose when you want your listing to appear </p>
                                                                    </div>
                                                                </div>
                                                                <div class="checkbox-details" Style="padding-top: 10px; display: block !important;">
                                                                    <div class="row scheduled">
                                                                        <div class="col-md-6">
                                                                            <div class="pp_mat_input">
                                                                                <input id="start_date" data-name="start_date" type="text" placeholder="Publication Date" class="date-picker hasDatepicker" required="" autocomplete="false" />
                                                                                <label for="start_date">Start date (UTC timezone)</label>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-md-6">
                                                                            <div class="pp_mat_input">
                                                                                <input id="end_date" data-name="end_date" type="text" placeholder="Publication Date" class="date-picker hasDatepicker" required="" autocomplete="false" />
                                                                                <label for="end_date">End date (UTC timezone)</label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="pp_mat_input">
                                                                        <select name="auction_timezone" id="timezone">
                                                                            <option value="America/Adak">(GMT-10:00) America/Adak (Hawaii-Aleutian Standard Time)</option>
                                                                            <option value="America/Atka">(GMT-10:00) America/Atka (Hawaii-Aleutian Standard Time)</option>
                                                                            <option value="America/Anchorage">(GMT-9:00) America/Anchorage (Alaska Standard Time)</option>
                                                                            <option value="America/Juneau">(GMT-9:00) America/Juneau (Alaska Standard Time)</option>
                                                                            <option value="America/Nome">(GMT-9:00) America/Nome (Alaska Standard Time)</option>
                                                                            <option value="America/Yakutat">(GMT-9:00) America/Yakutat (Alaska Standard Time)</option>
                                                                            <option value="America/Dawson">(GMT-8:00) America/Dawson (Pacific Standard Time)</option>
                                                                            <option value="America/Ensenada">(GMT-8:00) America/Ensenada (Pacific Standard Time)</option>
                                                                            <option value="America/Los_Angeles">(GMT-8:00) America/Los_Angeles (Pacific Standard Time)</option>
                                                                            <option value="America/Tijuana">(GMT-8:00) America/Tijuana (Pacific Standard Time)</option>
                                                                            <option value="America/Vancouver">(GMT-8:00) America/Vancouver (Pacific Standard Time)</option>
                                                                            <option value="America/Whitehorse">(GMT-8:00) America/Whitehorse (Pacific Standard Time)</option>
                                                                            <option value="Canada/Pacific">(GMT-8:00) Canada/Pacific (Pacific Standard Time)</option>
                                                                            <option value="Canada/Yukon">(GMT-8:00) Canada/Yukon (Pacific Standard Time)</option>
                                                                            <option value="Mexico/BajaNorte">(GMT-8:00) Mexico/BajaNorte (Pacific Standard Time)</option>
                                                                            <option value="America/Boise">(GMT-7:00) America/Boise (Mountain Standard Time)</option>
                                                                            <option value="America/Cambridge_Bay">(GMT-7:00) America/Cambridge_Bay (Mountain Standard Time)</option>
                                                                            <option value="America/Chihuahua">(GMT-7:00) America/Chihuahua (Mountain Standard Time)</option>
                                                                            <option value="America/Dawson_Creek">(GMT-7:00) America/Dawson_Creek (Mountain Standard Time)</option>
                                                                            <option value="America/Denver">(GMT-7:00) America/Denver (Mountain Standard Time)</option>
                                                                            <option value="America/Edmonton">(GMT-7:00) America/Edmonton (Mountain Standard Time)</option>
                                                                            <option value="America/Hermosillo">(GMT-7:00) America/Hermosillo (Mountain Standard Time)</option>
                                                                            <option value="America/Inuvik">(GMT-7:00) America/Inuvik (Mountain Standard Time)</option>
                                                                            <option value="America/Mazatlan">(GMT-7:00) America/Mazatlan (Mountain Standard Time)</option>
                                                                            <option value="America/Phoenix">(GMT-7:00) America/Phoenix (Mountain Standard Time)</option>
                                                                            <option value="America/Shiprock">(GMT-7:00) America/Shiprock (Mountain Standard Time)</option>
                                                                            <option value="America/Yellowknife">(GMT-7:00) America/Yellowknife (Mountain Standard Time)</option>
                                                                            <option value="Canada/Mountain">(GMT-7:00) Canada/Mountain (Mountain Standard Time)</option>
                                                                            <option value="Mexico/BajaSur">(GMT-7:00) Mexico/BajaSur (Mountain Standard Time)</option>
                                                                            <option value="America/Belize">(GMT-6:00) America/Belize (Central Standard Time)</option>
                                                                            <option value="America/Cancun">(GMT-6:00) America/Cancun (Central Standard Time)</option>
                                                                            <option value="America/Chicago">(GMT-6:00) America/Chicago (Central Standard Time)</option>
                                                                            <option value="America/Costa_Rica">(GMT-6:00) America/Costa_Rica (Central Standard Time)</option>
                                                                            <option value="America/El_Salvador">(GMT-6:00) America/El_Salvador (Central Standard Time)</option>
                                                                            <option value="America/Guatemala">(GMT-6:00) America/Guatemala (Central Standard Time)</option>
                                                                            <option value="America/Knox_IN">(GMT-6:00) America/Knox_IN (Central Standard Time)</option>
                                                                            <option value="America/Managua">(GMT-6:00) America/Managua (Central Standard Time)</option>
                                                                            <option value="America/Menominee">(GMT-6:00) America/Menominee (Central Standard Time)</option>
                                                                            <option value="America/Merida">(GMT-6:00) America/Merida (Central Standard Time)</option>
                                                                            <option value="America/Mexico_City">(GMT-6:00) America/Mexico_City (Central Standard Time)</option>
                                                                            <option value="America/Monterrey">(GMT-6:00) America/Monterrey (Central Standard Time)</option>
                                                                            <option value="America/Rainy_River">(GMT-6:00) America/Rainy_River (Central Standard Time)</option>
                                                                            <option value="America/Rankin_Inlet">(GMT-6:00) America/Rankin_Inlet (Central Standard Time)</option>
                                                                            <option value="America/Regina">(GMT-6:00) America/Regina (Central Standard Time)</option>
                                                                            <option value="America/Swift_Current">(GMT-6:00) America/Swift_Current (Central Standard Time)</option>
                                                                            <option value="America/Tegucigalpa">(GMT-6:00) America/Tegucigalpa (Central Standard Time)</option>
                                                                            <option value="America/Winnipeg">(GMT-6:00) America/Winnipeg (Central Standard Time)</option>
                                                                            <option value="Canada/Central">(GMT-6:00) Canada/Central (Central Standard Time)</option>
                                                                            <option value="Canada/East-Saskatchewan">(GMT-6:00) Canada/East-Saskatchewan (Central Standard Time)</option>
                                                                            <option value="Canada/Saskatchewan">(GMT-6:00) Canada/Saskatchewan (Central Standard Time)</option>
                                                                            <option value="Chile/EasterIsland">(GMT-6:00) Chile/EasterIsland (Easter Is. Time)</option>
                                                                            <option value="Mexico/General">(GMT-6:00) Mexico/General (Central Standard Time)</option>
                                                                            <option value="America/Atikokan">(GMT-5:00) America/Atikokan (Eastern Standard Time)</option>
                                                                            <option value="America/Bogota">(GMT-5:00) America/Bogota (Colombia Time)</option>
                                                                            <option value="America/Cayman">(GMT-5:00) America/Cayman (Eastern Standard Time)</option>
                                                                            <option value="America/Coral_Harbour">(GMT-5:00) America/Coral_Harbour (Eastern Standard Time)</option>
                                                                            <option value="America/Detroit">(GMT-5:00) America/Detroit (Eastern Standard Time)</option>
                                                                            <option value="America/Fort_Wayne">(GMT-5:00) America/Fort_Wayne (Eastern Standard Time)</option>
                                                                            <option value="America/Grand_Turk">(GMT-5:00) America/Grand_Turk (Eastern Standard Time)</option>
                                                                            <option value="America/Guayaquil">(GMT-5:00) America/Guayaquil (Ecuador Time)</option>
                                                                            <option value="America/Havana">(GMT-5:00) America/Havana (Cuba Standard Time)</option>
                                                                            <option value="America/Indianapolis">(GMT-5:00) America/Indianapolis (Eastern Standard Time)</option>
                                                                            <option value="America/Iqaluit">(GMT-5:00) America/Iqaluit (Eastern Standard Time)</option>
                                                                            <option value="America/Jamaica">(GMT-5:00) America/Jamaica (Eastern Standard Time)</option>
                                                                            <option value="America/Lima">(GMT-5:00) America/Lima (Peru Time)</option>
                                                                            <option value="America/Louisville">(GMT-5:00) America/Louisville (Eastern Standard Time)</option>
                                                                            <option value="America/Montreal">(GMT-5:00) America/Montreal (Eastern Standard Time)</option>
                                                                            <option value="America/Nassau">(GMT-5:00) America/Nassau (Eastern Standard Time)</option>
                                                                            <option value="America/New_York">(GMT-5:00) America/New_York (Eastern Standard Time)</option>
                                                                            <option value="America/Nipigon">(GMT-5:00) America/Nipigon (Eastern Standard Time)</option>
                                                                            <option value="America/Panama">(GMT-5:00) America/Panama (Eastern Standard Time)</option>
                                                                            <option value="America/Pangnirtung">(GMT-5:00) America/Pangnirtung (Eastern Standard Time)</option>
                                                                            <option value="America/Port-au-Prince">(GMT-5:00) America/Port-au-Prince (Eastern Standard Time)</option>
                                                                            <option value="America/Resolute">(GMT-5:00) America/Resolute (Eastern Standard Time)</option>
                                                                            <option value="America/Thunder_Bay">(GMT-5:00) America/Thunder_Bay (Eastern Standard Time)</option>
                                                                            <option value="America/Toronto">(GMT-5:00) America/Toronto (Eastern Standard Time)</option>
                                                                            <option value="Canada/Eastern">(GMT-5:00) Canada/Eastern (Eastern Standard Time)</option>
                                                                            <option value="America/Caracas">(GMT-4:-30) America/Caracas (Venezuela Time)</option>
                                                                            <option value="America/Anguilla">(GMT-4:00) America/Anguilla (Atlantic Standard Time)</option>
                                                                            <option value="America/Antigua">(GMT-4:00) America/Antigua (Atlantic Standard Time)</option>
                                                                            <option value="America/Aruba">(GMT-4:00) America/Aruba (Atlantic Standard Time)</option>
                                                                            <option value="America/Asuncion">(GMT-4:00) America/Asuncion (Paraguay Time)</option>
                                                                            <option value="America/Barbados">(GMT-4:00) America/Barbados (Atlantic Standard Time)</option>
                                                                            <option value="America/Blanc-Sablon">(GMT-4:00) America/Blanc-Sablon (Atlantic Standard Time)</option>
                                                                            <option value="America/Boa_Vista">(GMT-4:00) America/Boa_Vista (Amazon Time)</option>
                                                                            <option value="America/Campo_Grande">(GMT-4:00) America/Campo_Grande (Amazon Time)</option>
                                                                            <option value="America/Cuiaba">(GMT-4:00) America/Cuiaba (Amazon Time)</option>
                                                                            <option value="America/Curacao">(GMT-4:00) America/Curacao (Atlantic Standard Time)</option>
                                                                            <option value="America/Dominica">(GMT-4:00) America/Dominica (Atlantic Standard Time)</option>
                                                                            <option value="America/Eirunepe">(GMT-4:00) America/Eirunepe (Amazon Time)</option>
                                                                            <option value="America/Glace_Bay">(GMT-4:00) America/Glace_Bay (Atlantic Standard Time)</option>
                                                                            <option value="America/Goose_Bay">(GMT-4:00) America/Goose_Bay (Atlantic Standard Time)</option>
                                                                            <option value="America/Grenada">(GMT-4:00) America/Grenada (Atlantic Standard Time)</option>
                                                                            <option value="America/Guadeloupe">(GMT-4:00) America/Guadeloupe (Atlantic Standard Time)</option>
                                                                            <option value="America/Guyana">(GMT-4:00) America/Guyana (Guyana Time)</option>
                                                                            <option value="America/Halifax">(GMT-4:00) America/Halifax (Atlantic Standard Time)</option>
                                                                            <option value="America/La_Paz">(GMT-4:00) America/La_Paz (Bolivia Time)</option>
                                                                            <option value="America/Manaus">(GMT-4:00) America/Manaus (Amazon Time)</option>
                                                                            <option value="America/Marigot">(GMT-4:00) America/Marigot (Atlantic Standard Time)</option>
                                                                            <option value="America/Martinique">(GMT-4:00) America/Martinique (Atlantic Standard Time)</option>
                                                                            <option value="America/Moncton">(GMT-4:00) America/Moncton (Atlantic Standard Time)</option>
                                                                            <option value="America/Montserrat">(GMT-4:00) America/Montserrat (Atlantic Standard Time)</option>
                                                                            <option value="America/Port_of_Spain">(GMT-4:00) America/Port_of_Spain (Atlantic Standard Time)</option>
                                                                            <option value="America/Porto_Acre">(GMT-4:00) America/Porto_Acre (Amazon Time)</option>
                                                                            <option value="America/Porto_Velho">(GMT-4:00) America/Porto_Velho (Amazon Time)</option>
                                                                            <option value="America/Puerto_Rico">(GMT-4:00) America/Puerto_Rico (Atlantic Standard Time)</option>
                                                                            <option value="America/Rio_Branco">(GMT-4:00) America/Rio_Branco (Amazon Time)</option>
                                                                            <option value="America/Santiago">(GMT-4:00) America/Santiago (Chile Time)</option>
                                                                            <option value="America/Santo_Domingo">(GMT-4:00) America/Santo_Domingo (Atlantic Standard Time)</option>
                                                                            <option value="America/St_Barthelemy">(GMT-4:00) America/St_Barthelemy (Atlantic Standard Time)</option>
                                                                            <option value="America/St_Kitts">(GMT-4:00) America/St_Kitts (Atlantic Standard Time)</option>
                                                                            <option value="America/St_Lucia">(GMT-4:00) America/St_Lucia (Atlantic Standard Time)</option>
                                                                            <option value="America/St_Thomas">(GMT-4:00) America/St_Thomas (Atlantic Standard Time)</option>
                                                                            <option value="America/St_Vincent">(GMT-4:00) America/St_Vincent (Atlantic Standard Time)</option>
                                                                            <option value="America/Thule">(GMT-4:00) America/Thule (Atlantic Standard Time)</option>
                                                                            <option value="America/Tortola">(GMT-4:00) America/Tortola (Atlantic Standard Time)</option>
                                                                            <option value="America/Virgin">(GMT-4:00) America/Virgin (Atlantic Standard Time)</option>
                                                                            <option value="Antarctica/Palmer">(GMT-4:00) Antarctica/Palmer (Chile Time)</option>
                                                                            <option value="Atlantic/Bermuda">(GMT-4:00) Atlantic/Bermuda (Atlantic Standard Time)</option>
                                                                            <option value="Atlantic/Stanley">(GMT-4:00) Atlantic/Stanley (Falkland Is. Time)</option>
                                                                            <option value="Brazil/Acre">(GMT-4:00) Brazil/Acre (Amazon Time)</option>
                                                                            <option value="Brazil/West">(GMT-4:00) Brazil/West (Amazon Time)</option>
                                                                            <option value="Canada/Atlantic">(GMT-4:00) Canada/Atlantic (Atlantic Standard Time)</option>
                                                                            <option value="Chile/Continental">(GMT-4:00) Chile/Continental (Chile Time)</option>
                                                                            <option value="America/St_Johns">(GMT-3:-30) America/St_Johns (Newfoundland Standard Time)</option>
                                                                            <option value="Canada/Newfoundland">(GMT-3:-30) Canada/Newfoundland (Newfoundland Standard Time)</option>
                                                                            <option value="America/Araguaina">(GMT-3:00) America/Araguaina (Brasilia Time)</option>
                                                                            <option value="America/Bahia">(GMT-3:00) America/Bahia (Brasilia Time)</option>
                                                                            <option value="America/Belem">(GMT-3:00) America/Belem (Brasilia Time)</option>
                                                                            <option value="America/Buenos_Aires">(GMT-3:00) America/Buenos_Aires (Argentine Time)</option>
                                                                            <option value="America/Catamarca">(GMT-3:00) America/Catamarca (Argentine Time)</option>
                                                                            <option value="America/Cayenne">(GMT-3:00) America/Cayenne (French Guiana Time)</option>
                                                                            <option value="America/Cordoba">(GMT-3:00) America/Cordoba (Argentine Time)</option>
                                                                            <option value="America/Fortaleza">(GMT-3:00) America/Fortaleza (Brasilia Time)</option>
                                                                            <option value="America/Godthab">(GMT-3:00) America/Godthab (Western Greenland Time)</option>
                                                                            <option value="America/Jujuy">(GMT-3:00) America/Jujuy (Argentine Time)</option>
                                                                            <option value="America/Maceio">(GMT-3:00) America/Maceio (Brasilia Time)</option>
                                                                            <option value="America/Mendoza">(GMT-3:00) America/Mendoza (Argentine Time)</option>
                                                                            <option value="America/Miquelon">(GMT-3:00) America/Miquelon (Pierre &amp; Miquelon Standard Time)</option>
                                                                            <option value="America/Montevideo">(GMT-3:00) America/Montevideo (Uruguay Time)</option>
                                                                            <option value="America/Paramaribo">(GMT-3:00) America/Paramaribo (Suriname Time)</option>
                                                                            <option value="America/Recife">(GMT-3:00) America/Recife (Brasilia Time)</option>
                                                                            <option value="America/Rosario">(GMT-3:00) America/Rosario (Argentine Time)</option>
                                                                            <option value="America/Santarem">(GMT-3:00) America/Santarem (Brasilia Time)</option>
                                                                            <option value="America/Sao_Paulo">(GMT-3:00) America/Sao_Paulo (Brasilia Time)</option>
                                                                            <option value="Antarctica/Rothera">(GMT-3:00) Antarctica/Rothera (Rothera Time)</option>
                                                                            <option value="Brazil/East">(GMT-3:00) Brazil/East (Brasilia Time)</option>
                                                                            <option value="America/Noronha">(GMT-2:00) America/Noronha (Fernando de Noronha Time)</option>
                                                                            <option value="Atlantic/South_Georgia">(GMT-2:00) Atlantic/South_Georgia (South Georgia Standard Time)</option>
                                                                            <option value="Brazil/DeNoronha">(GMT-2:00) Brazil/DeNoronha (Fernando de Noronha Time)</option>
                                                                            <option value="America/Scoresbysund">(GMT-1:00) America/Scoresbysund (Eastern Greenland Time)</option>
                                                                            <option value="Atlantic/Azores">(GMT-1:00) Atlantic/Azores (Azores Time)</option>
                                                                            <option value="Atlantic/Cape_Verde">(GMT-1:00) Atlantic/Cape_Verde (Cape Verde Time)</option>
                                                                            <option value="Africa/Abidjan">(GMT+0:00) Africa/Abidjan (Greenwich Mean Time)</option>
                                                                            <option value="Africa/Accra">(GMT+0:00) Africa/Accra (Ghana Mean Time)</option>
                                                                            <option value="Africa/Bamako">(GMT+0:00) Africa/Bamako (Greenwich Mean Time)</option>
                                                                            <option value="Africa/Banjul">(GMT+0:00) Africa/Banjul (Greenwich Mean Time)</option>
                                                                            <option value="Africa/Bissau">(GMT+0:00) Africa/Bissau (Greenwich Mean Time)</option>
                                                                            <option value="Africa/Casablanca">(GMT+0:00) Africa/Casablanca (Western European Time)</option>
                                                                            <option value="Africa/Conakry">(GMT+0:00) Africa/Conakry (Greenwich Mean Time)</option>
                                                                            <option value="Africa/Dakar">(GMT+0:00) Africa/Dakar (Greenwich Mean Time)</option>
                                                                            <option value="Africa/El_Aaiun">(GMT+0:00) Africa/El_Aaiun (Western European Time)</option>
                                                                            <option value="Africa/Freetown">(GMT+0:00) Africa/Freetown (Greenwich Mean Time)</option>
                                                                            <option value="Africa/Lome">(GMT+0:00) Africa/Lome (Greenwich Mean Time)</option>
                                                                            <option value="Africa/Monrovia">(GMT+0:00) Africa/Monrovia (Greenwich Mean Time)</option>
                                                                            <option value="Africa/Nouakchott">(GMT+0:00) Africa/Nouakchott (Greenwich Mean Time)</option>
                                                                            <option value="Africa/Ouagadougou">(GMT+0:00) Africa/Ouagadougou (Greenwich Mean Time)</option>
                                                                            <option value="Africa/Sao_Tome">(GMT+0:00) Africa/Sao_Tome (Greenwich Mean Time)</option>
                                                                            <option value="Africa/Timbuktu">(GMT+0:00) Africa/Timbuktu (Greenwich Mean Time)</option>
                                                                            <option value="America/Danmarkshavn">(GMT+0:00) America/Danmarkshavn (Greenwich Mean Time)</option>
                                                                            <option value="Atlantic/Canary">(GMT+0:00) Atlantic/Canary (Western European Time)</option>
                                                                            <option value="Atlantic/Faeroe">(GMT+0:00) Atlantic/Faeroe (Western European Time)</option>
                                                                            <option value="Atlantic/Faroe">(GMT+0:00) Atlantic/Faroe (Western European Time)</option>
                                                                            <option value="Atlantic/Madeira">(GMT+0:00) Atlantic/Madeira (Western European Time)</option>
                                                                            <option value="Atlantic/Reykjavik">(GMT+0:00) Atlantic/Reykjavik (Greenwich Mean Time)</option>
                                                                            <option value="Atlantic/St_Helena">(GMT+0:00) Atlantic/St_Helena (Greenwich Mean Time)</option>
                                                                            <option value="Europe/Belfast">(GMT+0:00) Europe/Belfast (Greenwich Mean Time)</option>
                                                                            <option value="Europe/Dublin">(GMT+0:00) Europe/Dublin (Greenwich Mean Time)</option>
                                                                            <option value="Europe/Guernsey">(GMT+0:00) Europe/Guernsey (Greenwich Mean Time)</option>
                                                                            <option value="Europe/Isle_of_Man">(GMT+0:00) Europe/Isle_of_Man (Greenwich Mean Time)</option>
                                                                            <option value="Europe/Jersey">(GMT+0:00) Europe/Jersey (Greenwich Mean Time)</option>
                                                                            <option value="Europe/Lisbon">(GMT+0:00) Europe/Lisbon (Western European Time)</option>
                                                                            <option value="Europe/London">(GMT+0:00) Europe/London (Greenwich Mean Time)</option>
                                                                            <option value="Africa/Algiers">(GMT+1:00) Africa/Algiers (Central European Time)</option>
                                                                            <option value="Africa/Bangui">(GMT+1:00) Africa/Bangui (Western African Time)</option>
                                                                            <option value="Africa/Brazzaville">(GMT+1:00) Africa/Brazzaville (Western African Time)</option>
                                                                            <option value="Africa/Ceuta">(GMT+1:00) Africa/Ceuta (Central European Time)</option>
                                                                            <option value="Africa/Douala">(GMT+1:00) Africa/Douala (Western African Time)</option>
                                                                            <option value="Africa/Kinshasa">(GMT+1:00) Africa/Kinshasa (Western African Time)</option>
                                                                            <option value="Africa/Lagos">(GMT+1:00) Africa/Lagos (Western African Time)</option>
                                                                            <option value="Africa/Libreville">(GMT+1:00) Africa/Libreville (Western African Time)</option>
                                                                            <option value="Africa/Luanda">(GMT+1:00) Africa/Luanda (Western African Time)</option>
                                                                            <option value="Africa/Malabo">(GMT+1:00) Africa/Malabo (Western African Time)</option>
                                                                            <option value="Africa/Ndjamena">(GMT+1:00) Africa/Ndjamena (Western African Time)</option>
                                                                            <option value="Africa/Niamey">(GMT+1:00) Africa/Niamey (Western African Time)</option>
                                                                            <option value="Africa/Porto-Novo">(GMT+1:00) Africa/Porto-Novo (Western African Time)</option>
                                                                            <option value="Africa/Tunis">(GMT+1:00) Africa/Tunis (Central European Time)</option>
                                                                            <option value="Africa/Windhoek">(GMT+1:00) Africa/Windhoek (Western African Time)</option>
                                                                            <option value="Arctic/Longyearbyen">(GMT+1:00) Arctic/Longyearbyen (Central European Time)</option>
                                                                            <option value="Atlantic/Jan_Mayen">(GMT+1:00) Atlantic/Jan_Mayen (Central European Time)</option>
                                                                            <option value="Europe/Amsterdam">(GMT+1:00) Europe/Amsterdam (Central European Time)</option>
                                                                            <option value="Europe/Andorra">(GMT+1:00) Europe/Andorra (Central European Time)</option>
                                                                            <option value="Europe/Belgrade">(GMT+1:00) Europe/Belgrade (Central European Time)</option>
                                                                            <option value="Europe/Berlin">(GMT+1:00) Europe/Berlin (Central European Time)</option>
                                                                            <option value="Europe/Bratislava">(GMT+1:00) Europe/Bratislava (Central European Time)</option>
                                                                            <option value="Europe/Brussels">(GMT+1:00) Europe/Brussels (Central European Time)</option>
                                                                            <option value="Europe/Budapest">(GMT+1:00) Europe/Budapest (Central European Time)</option>
                                                                            <option value="Europe/Copenhagen">(GMT+1:00) Europe/Copenhagen (Central European Time)</option>
                                                                            <option value="Europe/Gibraltar">(GMT+1:00) Europe/Gibraltar (Central European Time)</option>
                                                                            <option value="Europe/Ljubljana">(GMT+1:00) Europe/Ljubljana (Central European Time)</option>
                                                                            <option value="Europe/Luxembourg">(GMT+1:00) Europe/Luxembourg (Central European Time)</option>
                                                                            <option value="Europe/Madrid">(GMT+1:00) Europe/Madrid (Central European Time)</option>
                                                                            <option value="Europe/Malta">(GMT+1:00) Europe/Malta (Central European Time)</option>
                                                                            <option value="Europe/Monaco">(GMT+1:00) Europe/Monaco (Central European Time)</option>
                                                                            <option value="Europe/Oslo">(GMT+1:00) Europe/Oslo (Central European Time)</option>
                                                                            <option value="Europe/Paris">(GMT+1:00) Europe/Paris (Central European Time)</option>
                                                                            <option value="Europe/Podgorica">(GMT+1:00) Europe/Podgorica (Central European Time)</option>
                                                                            <option value="Europe/Prague">(GMT+1:00) Europe/Prague (Central European Time)</option>
                                                                            <option value="Europe/Rome">(GMT+1:00) Europe/Rome (Central European Time)</option>
                                                                            <option value="Europe/San_Marino">(GMT+1:00) Europe/San_Marino (Central European Time)</option>
                                                                            <option value="Europe/Sarajevo">(GMT+1:00) Europe/Sarajevo (Central European Time)</option>
                                                                            <option value="Europe/Skopje">(GMT+1:00) Europe/Skopje (Central European Time)</option>
                                                                            <option value="Europe/Stockholm">(GMT+1:00) Europe/Stockholm (Central European Time)</option>
                                                                            <option value="Europe/Tirane">(GMT+1:00) Europe/Tirane (Central European Time)</option>
                                                                            <option value="Europe/Vaduz">(GMT+1:00) Europe/Vaduz (Central European Time)</option>
                                                                            <option value="Europe/Vatican">(GMT+1:00) Europe/Vatican (Central European Time)</option>
                                                                            <option value="Europe/Vienna">(GMT+1:00) Europe/Vienna (Central European Time)</option>
                                                                            <option value="Europe/Warsaw">(GMT+1:00) Europe/Warsaw (Central European Time)</option>
                                                                            <option value="Europe/Zagreb">(GMT+1:00) Europe/Zagreb (Central European Time)</option>
                                                                            <option value="Europe/Zurich">(GMT+1:00) Europe/Zurich (Central European Time)</option>
                                                                            <option value="Africa/Blantyre">(GMT+2:00) Africa/Blantyre (Central African Time)</option>
                                                                            <option value="Africa/Bujumbura">(GMT+2:00) Africa/Bujumbura (Central African Time)</option>
                                                                            <option value="Africa/Cairo">(GMT+2:00) Africa/Cairo (Eastern European Time)</option>
                                                                            <option value="Africa/Gaborone">(GMT+2:00) Africa/Gaborone (Central African Time)</option>
                                                                            <option value="Africa/Harare">(GMT+2:00) Africa/Harare (Central African Time)</option>
                                                                            <option value="Africa/Johannesburg">(GMT+2:00) Africa/Johannesburg (South Africa Standard Time)</option>
                                                                            <option value="Africa/Kigali">(GMT+2:00) Africa/Kigali (Central African Time)</option>
                                                                            <option value="Africa/Lubumbashi">(GMT+2:00) Africa/Lubumbashi (Central African Time)</option>
                                                                            <option value="Africa/Lusaka">(GMT+2:00) Africa/Lusaka (Central African Time)</option>
                                                                            <option value="Africa/Maputo">(GMT+2:00) Africa/Maputo (Central African Time)</option>
                                                                            <option value="Africa/Maseru">(GMT+2:00) Africa/Maseru (South Africa Standard Time)</option>
                                                                            <option value="Africa/Mbabane">(GMT+2:00) Africa/Mbabane (South Africa Standard Time)</option>
                                                                            <option value="Africa/Tripoli">(GMT+2:00) Africa/Tripoli (Eastern European Time)</option>
                                                                            <option value="Asia/Amman">(GMT+2:00) Asia/Amman (Eastern European Time)</option>
                                                                            <option value="Asia/Beirut">(GMT+2:00) Asia/Beirut (Eastern European Time)</option>
                                                                            <option value="Asia/Damascus">(GMT+2:00) Asia/Damascus (Eastern European Time)</option>
                                                                            <option value="Asia/Gaza">(GMT+2:00) Asia/Gaza (Eastern European Time)</option>
                                                                            <option value="Asia/Istanbul">(GMT+2:00) Asia/Istanbul (Eastern European Time)</option>
                                                                            <option value="Asia/Jerusalem">(GMT+2:00) Asia/Jerusalem (Israel Standard Time)</option>
                                                                            <option value="Asia/Nicosia">(GMT+2:00) Asia/Nicosia (Eastern European Time)</option>
                                                                            <option value="Asia/Tel_Aviv">(GMT+2:00) Asia/Tel_Aviv (Israel Standard Time)</option>
                                                                            <option value="Europe/Athens">(GMT+2:00) Europe/Athens (Eastern European Time)</option>
                                                                            <option value="Europe/Bucharest">(GMT+2:00) Europe/Bucharest (Eastern European Time)</option>
                                                                            <option value="Europe/Chisinau">(GMT+2:00) Europe/Chisinau (Eastern European Time)</option>
                                                                            <option value="Europe/Helsinki">(GMT+2:00) Europe/Helsinki (Eastern European Time)</option>
                                                                            <option value="Europe/Istanbul">(GMT+2:00) Europe/Istanbul (Eastern European Time)</option>
                                                                            <option value="Europe/Kaliningrad">(GMT+2:00) Europe/Kaliningrad (Eastern European Time)</option>
                                                                            <option value="Europe/Kiev">(GMT+2:00) Europe/Kiev (Eastern European Time)</option>
                                                                            <option value="Europe/Mariehamn">(GMT+2:00) Europe/Mariehamn (Eastern European Time)</option>
                                                                            <option value="Europe/Minsk">(GMT+2:00) Europe/Minsk (Eastern European Time)</option>
                                                                            <option value="Europe/Nicosia">(GMT+2:00) Europe/Nicosia (Eastern European Time)</option>
                                                                            <option value="Europe/Riga">(GMT+2:00) Europe/Riga (Eastern European Time)</option>
                                                                            <option value="Europe/Simferopol">(GMT+2:00) Europe/Simferopol (Eastern European Time)</option>
                                                                            <option value="Europe/Sofia">(GMT+2:00) Europe/Sofia (Eastern European Time)</option>
                                                                            <option value="Europe/Tallinn">(GMT+2:00) Europe/Tallinn (Eastern European Time)</option>
                                                                            <option value="Europe/Tiraspol">(GMT+2:00) Europe/Tiraspol (Eastern European Time)</option>
                                                                            <option value="Europe/Uzhgorod">(GMT+2:00) Europe/Uzhgorod (Eastern European Time)</option>
                                                                            <option value="Europe/Vilnius">(GMT+2:00) Europe/Vilnius (Eastern European Time)</option>
                                                                            <option value="Europe/Zaporozhye">(GMT+2:00) Europe/Zaporozhye (Eastern European Time)</option>
                                                                            <option value="Africa/Addis_Ababa">(GMT+3:00) Africa/Addis_Ababa (Eastern African Time)</option>
                                                                            <option value="Africa/Asmara">(GMT+3:00) Africa/Asmara (Eastern African Time)</option>
                                                                            <option value="Africa/Asmera">(GMT+3:00) Africa/Asmera (Eastern African Time)</option>
                                                                            <option value="Africa/Dar_es_Salaam">(GMT+3:00) Africa/Dar_es_Salaam (Eastern African Time)</option>
                                                                            <option value="Africa/Djibouti">(GMT+3:00) Africa/Djibouti (Eastern African Time)</option>
                                                                            <option value="Africa/Kampala">(GMT+3:00) Africa/Kampala (Eastern African Time)</option>
                                                                            <option value="Africa/Khartoum">(GMT+3:00) Africa/Khartoum (Eastern African Time)</option>
                                                                            <option value="Africa/Mogadishu">(GMT+3:00) Africa/Mogadishu (Eastern African Time)</option>
                                                                            <option value="Africa/Nairobi">(GMT+3:00) Africa/Nairobi (Eastern African Time)</option>
                                                                            <option value="Antarctica/Syowa">(GMT+3:00) Antarctica/Syowa (Syowa Time)</option>
                                                                            <option value="Asia/Aden">(GMT+3:00) Asia/Aden (Arabia Standard Time)</option>
                                                                            <option value="Asia/Baghdad">(GMT+3:00) Asia/Baghdad (Arabia Standard Time)</option>
                                                                            <option value="Asia/Bahrain">(GMT+3:00) Asia/Bahrain (Arabia Standard Time)</option>
                                                                            <option value="Asia/Kuwait">(GMT+3:00) Asia/Kuwait (Arabia Standard Time)</option>
                                                                            <option value="Asia/Qatar">(GMT+3:00) Asia/Qatar (Arabia Standard Time)</option>
                                                                            <option value="Europe/Moscow">(GMT+3:00) Europe/Moscow (Moscow Standard Time)</option>
                                                                            <option value="Europe/Volgograd">(GMT+3:00) Europe/Volgograd (Volgograd Time)</option>
                                                                            <option value="Indian/Antananarivo">(GMT+3:00) Indian/Antananarivo (Eastern African Time)</option>
                                                                            <option value="Indian/Comoro">(GMT+3:00) Indian/Comoro (Eastern African Time)</option>
                                                                            <option value="Indian/Mayotte">(GMT+3:00) Indian/Mayotte (Eastern African Time)</option>
                                                                            <option value="Asia/Tehran">(GMT+3:30) Asia/Tehran (Iran Standard Time)</option>
                                                                            <option value="Asia/Baku">(GMT+4:00) Asia/Baku (Azerbaijan Time)</option>
                                                                            <option value="Asia/Dubai">(GMT+4:00) Asia/Dubai (Gulf Standard Time)</option>
                                                                            <option value="Asia/Muscat">(GMT+4:00) Asia/Muscat (Gulf Standard Time)</option>
                                                                            <option value="Asia/Tbilisi">(GMT+4:00) Asia/Tbilisi (Georgia Time)</option>
                                                                            <option value="Asia/Yerevan">(GMT+4:00) Asia/Yerevan (Armenia Time)</option>
                                                                            <option value="Europe/Samara">(GMT+4:00) Europe/Samara (Samara Time)</option>
                                                                            <option value="Indian/Mahe">(GMT+4:00) Indian/Mahe (Seychelles Time)</option>
                                                                            <option value="Indian/Mauritius">(GMT+4:00) Indian/Mauritius (Mauritius Time)</option>
                                                                            <option value="Indian/Reunion">(GMT+4:00) Indian/Reunion (Reunion Time)</option>
                                                                            <option value="Asia/Kabul">(GMT+4:30) Asia/Kabul (Afghanistan Time)</option>
                                                                            <option value="Asia/Aqtau">(GMT+5:00) Asia/Aqtau (Aqtau Time)</option>
                                                                            <option value="Asia/Aqtobe">(GMT+5:00) Asia/Aqtobe (Aqtobe Time)</option>
                                                                            <option value="Asia/Ashgabat">(GMT+5:00) Asia/Ashgabat (Turkmenistan Time)</option>
                                                                            <option value="Asia/Ashkhabad">(GMT+5:00) Asia/Ashkhabad (Turkmenistan Time)</option>
                                                                            <option value="Asia/Dushanbe">(GMT+5:00) Asia/Dushanbe (Tajikistan Time)</option>
                                                                            <option value="Asia/Karachi">(GMT+5:00) Asia/Karachi (Pakistan Time)</option>
                                                                            <option value="Asia/Oral">(GMT+5:00) Asia/Oral (Oral Time)</option>
                                                                            <option value="Asia/Samarkand">(GMT+5:00) Asia/Samarkand (Uzbekistan Time)</option>
                                                                            <option value="Asia/Tashkent">(GMT+5:00) Asia/Tashkent (Uzbekistan Time)</option>
                                                                            <option value="Asia/Yekaterinburg">(GMT+5:00) Asia/Yekaterinburg (Yekaterinburg Time)</option>
                                                                            <option value="Indian/Kerguelen">(GMT+5:00) Indian/Kerguelen (French Southern &amp; Antarctic Lands Time)</option>
                                                                            <option value="Indian/Maldives">(GMT+5:00) Indian/Maldives (Maldives Time)</option>
                                                                            <option value="Asia/Calcutta">(GMT+5:30) Asia/Calcutta (India Standard Time)</option>
                                                                            <option value="Asia/Colombo">(GMT+5:30) Asia/Colombo (India Standard Time)</option>
                                                                            <option value="Asia/Kolkata">(GMT+5:30) Asia/Kolkata (India Standard Time)</option>
                                                                            <option value="Asia/Katmandu">(GMT+5:45) Asia/Katmandu (Nepal Time)</option>
                                                                            <option value="Antarctica/Mawson">(GMT+6:00) Antarctica/Mawson (Mawson Time)</option>
                                                                            <option value="Antarctica/Vostok">(GMT+6:00) Antarctica/Vostok (Vostok Time)</option>
                                                                            <option value="Asia/Almaty">(GMT+6:00) Asia/Almaty (Alma-Ata Time)</option>
                                                                            <option value="Asia/Bishkek">(GMT+6:00) Asia/Bishkek (Kirgizstan Time)</option>
                                                                            <option value="Asia/Dacca">(GMT+6:00) Asia/Dacca (Bangladesh Time)</option>
                                                                            <option value="Asia/Dhaka">(GMT+6:00) Asia/Dhaka (Bangladesh Time)</option>
                                                                            <option value="Asia/Novosibirsk">(GMT+6:00) Asia/Novosibirsk (Novosibirsk Time)</option>
                                                                            <option value="Asia/Omsk">(GMT+6:00) Asia/Omsk (Omsk Time)</option>
                                                                            <option value="Asia/Qyzylorda">(GMT+6:00) Asia/Qyzylorda (Qyzylorda Time)</option>
                                                                            <option value="Asia/Thimbu">(GMT+6:00) Asia/Thimbu (Bhutan Time)</option>
                                                                            <option value="Asia/Thimphu">(GMT+6:00) Asia/Thimphu (Bhutan Time)</option>
                                                                            <option value="Indian/Chagos">(GMT+6:00) Indian/Chagos (Indian Ocean Territory Time)</option>
                                                                            <option value="Asia/Rangoon">(GMT+6:30) Asia/Rangoon (Myanmar Time)</option>
                                                                            <option value="Indian/Cocos">(GMT+6:30) Indian/Cocos (Cocos Islands Time)</option>
                                                                            <option value="Antarctica/Davis">(GMT+7:00) Antarctica/Davis (Davis Time)</option>
                                                                            <option value="Asia/Bangkok">(GMT+7:00) Asia/Bangkok (Indochina Time)</option>
                                                                            <option value="Asia/Ho_Chi_Minh">(GMT+7:00) Asia/Ho_Chi_Minh (Indochina Time)</option>
                                                                            <option value="Asia/Hovd">(GMT+7:00) Asia/Hovd (Hovd Time)</option>
                                                                            <option value="Asia/Jakarta">(GMT+7:00) Asia/Jakarta (West Indonesia Time)</option>
                                                                            <option value="Asia/Krasnoyarsk">(GMT+7:00) Asia/Krasnoyarsk (Krasnoyarsk Time)</option>
                                                                            <option value="Asia/Phnom_Penh">(GMT+7:00) Asia/Phnom_Penh (Indochina Time)</option>
                                                                            <option value="Asia/Pontianak">(GMT+7:00) Asia/Pontianak (West Indonesia Time)</option>
                                                                            <option value="Asia/Saigon">(GMT+7:00) Asia/Saigon (Indochina Time)</option>
                                                                            <option value="Asia/Vientiane">(GMT+7:00) Asia/Vientiane (Indochina Time)</option>
                                                                            <option value="Indian/Christmas">(GMT+7:00) Indian/Christmas (Christmas Island Time)</option>
                                                                            <option value="Antarctica/Casey">(GMT+8:00) Antarctica/Casey (Western Standard Time (Australia))</option>
                                                                            <option value="Asia/Brunei">(GMT+8:00) Asia/Brunei (Brunei Time)</option>
                                                                            <option value="Asia/Choibalsan">(GMT+8:00) Asia/Choibalsan (Choibalsan Time)</option>
                                                                            <option value="Asia/Chongqing">(GMT+8:00) Asia/Chongqing (China Standard Time)</option>
                                                                            <option value="Asia/Chungking">(GMT+8:00) Asia/Chungking (China Standard Time)</option>
                                                                            <option value="Asia/Harbin">(GMT+8:00) Asia/Harbin (China Standard Time)</option>
                                                                            <option value="Asia/Hong_Kong">(GMT+8:00) Asia/Hong_Kong (Hong Kong Time)</option>
                                                                            <option value="Asia/Irkutsk">(GMT+8:00) Asia/Irkutsk (Irkutsk Time)</option>
                                                                            <option value="Asia/Kashgar">(GMT+8:00) Asia/Kashgar (China Standard Time)</option>
                                                                            <option value="Asia/Kuala_Lumpur">(GMT+8:00) Asia/Kuala_Lumpur (Malaysia Time)</option>
                                                                            <option value="Asia/Kuching">(GMT+8:00) Asia/Kuching (Malaysia Time)</option>
                                                                            <option value="Asia/Macao">(GMT+8:00) Asia/Macao (China Standard Time)</option>
                                                                            <option value="Asia/Macau">(GMT+8:00) Asia/Macau (China Standard Time)</option>
                                                                            <option value="Asia/Makassar">(GMT+8:00) Asia/Makassar (Central Indonesia Time)</option>
                                                                            <option value="Asia/Manila">(GMT+8:00) Asia/Manila (Philippines Time)</option>
                                                                            <option value="Asia/Shanghai">(GMT+8:00) Asia/Shanghai (China Standard Time)</option>
                                                                            <option value="Asia/Singapore">(GMT+8:00) Asia/Singapore (Singapore Time)</option>
                                                                            <option value="Asia/Taipei">(GMT+8:00) Asia/Taipei (China Standard Time)</option>
                                                                            <option value="Asia/Ujung_Pandang">(GMT+8:00) Asia/Ujung_Pandang (Central Indonesia Time)</option>
                                                                            <option value="Asia/Ulaanbaatar">(GMT+8:00) Asia/Ulaanbaatar (Ulaanbaatar Time)</option>
                                                                            <option value="Asia/Ulan_Bator">(GMT+8:00) Asia/Ulan_Bator (Ulaanbaatar Time)</option>
                                                                            <option value="Asia/Urumqi">(GMT+8:00) Asia/Urumqi (China Standard Time)</option>
                                                                            <option value="Australia/Perth">(GMT+8:00) Australia/Perth (Western Standard Time (Australia))</option>
                                                                            <option value="Australia/West">(GMT+8:00) Australia/West (Western Standard Time (Australia))</option>
                                                                            <option value="Australia/Eucla">(GMT+8:45) Australia/Eucla (Central Western Standard Time (Australia))</option>
                                                                            <option value="Asia/Dili">(GMT+9:00) Asia/Dili (Timor-Leste Time)</option>
                                                                            <option value="Asia/Jayapura">(GMT+9:00) Asia/Jayapura (East Indonesia Time)</option>
                                                                            <option value="Asia/Pyongyang">(GMT+9:00) Asia/Pyongyang (Korea Standard Time)</option>
                                                                            <option value="Asia/Seoul">(GMT+9:00) Asia/Seoul (Korea Standard Time)</option>
                                                                            <option value="Asia/Tokyo">(GMT+9:00) Asia/Tokyo (Japan Standard Time)</option>
                                                                            <option value="Asia/Yakutsk">(GMT+9:00) Asia/Yakutsk (Yakutsk Time)</option>
                                                                            <option value="Australia/Adelaide">(GMT+9:30) Australia/Adelaide (Central Standard Time (South Australia))</option>
                                                                            <option value="Australia/Broken_Hill">(GMT+9:30) Australia/Broken_Hill (Central Standard Time (South Australia/New South Wales))</option>
                                                                            <option value="Australia/Darwin">(GMT+9:30) Australia/Darwin (Central Standard Time (Northern Territory))</option>
                                                                            <option value="Australia/North">(GMT+9:30) Australia/North (Central Standard Time (Northern Territory))</option>
                                                                            <option value="Australia/South">(GMT+9:30) Australia/South (Central Standard Time (South Australia))</option>
                                                                            <option value="Australia/Yancowinna">(GMT+9:30) Australia/Yancowinna (Central Standard Time (South Australia/New South Wales))</option>
                                                                            <option value="Antarctica/DumontDUrville">(GMT+10:00) Antarctica/DumontDUrville (Dumont-d'Urville Time)</option>
                                                                            <option value="Asia/Sakhalin">(GMT+10:00) Asia/Sakhalin (Sakhalin Time)</option>
                                                                            <option value="Asia/Vladivostok">(GMT+10:00) Asia/Vladivostok (Vladivostok Time)</option>
                                                                            <option value="Australia/ACT">(GMT+10:00) Australia/ACT (Eastern Standard Time (New South Wales))</option>
                                                                            <option value="Australia/Brisbane">(GMT+10:00) Australia/Brisbane (Eastern Standard Time (Queensland))</option>
                                                                            <option value="Australia/Canberra">(GMT+10:00) Australia/Canberra (Eastern Standard Time (New South Wales))</option>
                                                                            <option value="Australia/Currie">(GMT+10:00) Australia/Currie (Eastern Standard Time (New South Wales))</option>
                                                                            <option value="Australia/Hobart">(GMT+10:00) Australia/Hobart (Eastern Standard Time (Tasmania))</option>
                                                                            <option value="Australia/Lindeman">(GMT+10:00) Australia/Lindeman (Eastern Standard Time (Queensland))</option>
                                                                            <option value="Australia/Melbourne">(GMT+10:00) Australia/Melbourne (Eastern Standard Time (Victoria))</option>
                                                                            <option value="Australia/NSW">(GMT+10:00) Australia/NSW (Eastern Standard Time (New South Wales))</option>
                                                                            <option value="Australia/Queensland">(GMT+10:00) Australia/Queensland (Eastern Standard Time (Queensland))</option>
                                                                            <option value="Australia/Sydney">(GMT+10:00) Australia/Sydney (Eastern Standard Time (New South Wales))</option>
                                                                            <option value="Australia/Tasmania">(GMT+10:00) Australia/Tasmania (Eastern Standard Time (Tasmania))</option>
                                                                            <option value="Australia/Victoria">(GMT+10:00) Australia/Victoria (Eastern Standard Time (Victoria))</option>
                                                                            <option value="Australia/LHI">(GMT+10:30) Australia/LHI (Lord Howe Standard Time)</option>
                                                                            <option value="Australia/Lord_Howe">(GMT+10:30) Australia/Lord_Howe (Lord Howe Standard Time)</option>
                                                                            <option value="Asia/Magadan">(GMT+11:00) Asia/Magadan (Magadan Time)</option>
                                                                            <option value="Antarctica/McMurdo">(GMT+12:00) Antarctica/McMurdo (New Zealand Standard Time)</option>
                                                                            <option value="Antarctica/South_Pole">(GMT+12:00) Antarctica/South_Pole (New Zealand Standard Time)</option>
                                                                            <option value="Asia/Anadyr">(GMT+12:00) Asia/Anadyr (Anadyr Time)</option>
                                                                            <option value="Asia/Kamchatka">(GMT+12:00) Asia/Kamchatka (Petropavlovsk-Kamchatski Time)</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* <!--auction_reserve_price--> */}
                                                            <div class="checkbox-group">
                                                                <div class="checkbox-title">
                                                                    <div class="cb">
                                                                        <label class="switch">
                                                                            <input type="checkbox" value="1" name="auction_reserve_price" class="" />
                                                                            <span class="slider round"></span>
                                                                        </label>
                                                                    </div>
                                                                    <div class="text">
                                                                        <h6>Auction reserve price</h6>
                                                                        <p>
                                                                            Define your auction reserve price </p>
                                                                    </div>
                                                                </div>
                                                                <div class="checkbox-details">
                                                                    <div class="pp_mat_input">
                                                                        <input id="reserve_price" name="reserve_price" type="text" placeholder="Reserve price" />
                                                                        <label for="reserve_price">Reserve price</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="pricing-item">
                                                        <div class="pricing-item-title">
                                                            <div class="row">
                                                                <div class="col-md-10">
                                                                    <h5 Style="font-size: 17px; font-weight: bold">Buy it now</h5>
                                                                    <p>Buyers can Buy It immediately at this price.</p>
                                                                </div>
                                                                <div class="col-md-2">
                                                                    <label class="switch">
                                                                        <input type="checkbox" value="1" name="buy_now" class="pricing" />
                                                                        <span class="slider round"></span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="pricing-details buy_now">

                                                            <div class="starting-price">
                                                                <div class="row">
                                                                    <div class="col-md-8">
                                                                        <h6>Buy it now price</h6>
                                                                        <p>
                                                                            To attract buyers to buy instantly at the buy it now price. </p>
                                                                    </div>
                                                                    <div class="col-md-4">
                                                                        <div class="pp_mat_input" Style="margin: 0">
                                                                            <input id="buy_now_price" name="buy_now_price" type="text" placeholder="Buy it now price" />
                                                                            <label for="buy_now_price">Buy it now price</label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            {/* <!--Max Quantity--> */}
                                                            <div class="checkbox-group">
                                                                <div class="checkbox-title">
                                                                    <div class="cb">
                                                                        <label class="switch">
                                                                            <input type="checkbox" name="buy_quantity" value="1" />
                                                                            <span class="slider round"></span>
                                                                        </label>
                                                                    </div>
                                                                    <div class="text">
                                                                        <h6>Quantity</h6>
                                                                        <p>
                                                                            Enter how many you're selling, if more than 1. </p>
                                                                    </div>
                                                                </div>
                                                                <div class="checkbox-details">
                                                                    <div class="pp_mat_input">
                                                                        <input id="max_quantity" name="quantity" type="text" placeholder="Maximum quantity" />
                                                                        <label for="max_quantity">Maximum quantity</label>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>

                                                {/* <!--Category--> */}
                                                <div class="row mobile-row center-all" Style="padding-top: 15px;">
                                                    <div class="col-md-4">
                                                        <div class="pp_mat_input">
                                                            <label for="category" Style="z-index: 333">Category</label>
                                                            <div class="dropdown bootstrap-select show-menu-arrow"><select class="selectpicker show-menu-arrow" name="category" id="category" tabindex="-98">
                                                                <option value="" disabled="">Category
                                                                </option>
                                                                <option value="1">Film &amp; Animation</option>
                                                                <option value="3">Business</option>
                                                                <option value="4">Pets &amp; Animals</option>
                                                                <option value="5">Sports</option>
                                                                <option value="6">Travel &amp; Events</option>
                                                                <option value="7">Motivation</option>
                                                                <option value="8">People &amp; Blogs</option>
                                                                <option value="9">Advanced Medicine</option>
                                                                <option value="10">Digital Marketing</option>
                                                                <option value="11">News &amp; Politics</option>
                                                                <option value="12">How-to &amp; Style</option>
                                                                <option value="13">Non-profits &amp; Activism</option>
                                                                <option value="849">Super Cars</option>
                                                                <option value="other">Other</option>
                                                            </select><button type="button" class="btn dropdown-toggle btn-default" data-toggle="dropdown" data-id="category" title="Film &amp; Animation"><div class="filter-option"><div class="filter-option-inner"><div class="filter-option-inner-inner">Film &amp; Animation</div></div> </div><span class="bs-caret"><span class="caret"></span></span></button><div class="dropdown-menu open" ><div class="inner open" role="listbox" aria-expanded="false" tabindex="-1"><ul class="dropdown-menu inner "></ul></div></div></div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <div class="pp_mat_input">
                                                            <input id="mySingleFieldTags" name="tags" type="text" placeholder="Tags" Style="display: none;" /><ul class="tagit ui-widget ui-widget-content ui-corner-all" ><li class="tagit-new"><input type="text" class="ui-widget-content ui-autocomplete-input" autocomplete="off" /></li></ul>
                                                            <label for="mySingleFieldTags">Tags</label>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <div class="form-group">
                                                            <label>Age Restriction</label>
                                                            <div class="pt_vdo_cstm_radio">
                                                                <input type="radio" id="age_restriction0" name="age_restriction" value="1" checked="" />
                                                                <label for="age_restriction0">All ages can view this auction</label>
                                                            </div>
                                                            <div class="pt_vdo_cstm_radio">
                                                                <input type="radio" id="age_restriction1" name="age_restriction" value="2" />
                                                                <label for="age_restriction1">Only +18</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* <!--Meeting location--> */}
                                                <div>
                                                    <strong Style="font-size: 16px">
                                                        Meeting Location eg.. Zoom link, Goolge Meets etc..
                                                    </strong> <br />
                                                    The information below is only available to the winner.
                                                    <hr />
                                                    <div class="pp_mat_input">
                                                        <input id="meeting_location" name="meeting_location" type="text" placeholder=" " />
                                                        <label for="meeting_location">Meeting link</label>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="pp_mat_input">
                                                                <input id="meeting_date" data-name="meeting_date" type="text" placeholder=" " class="hasDatepicker" />
                                                                <label for="meeting_date">Meeting date</label>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="pp_mat_input">
                                                                <input id="meeting_time" name="meeting_time" type="time" placeholder=" " pattern="[0-2]{1}[0-9]{1}:[0-5]{1}[0-9]{1}" onclick="this.showPicker()" />
                                                                <label for="meeting_time">Meeting time</label>
                                                            </div>
                                                        </div>
                                                        <div class="clear"></div>
                                                        <div class="col-12" Style="padding: 0 15px">
                                                            <div class="pp_mat_input">
                                                                <select name="meeting_timezone" id="meetingTimezone" class="select-picker">
                                                                    <option value="America/Adak">(GMT-10:00) America/Adak (Hawaii-Aleutian Standard Time)</option>
                                                                    <option value="America/Atka">(GMT-10:00) America/Atka (Hawaii-Aleutian Standard Time)</option>
                                                                    <option value="America/Anchorage">(GMT-9:00) America/Anchorage (Alaska Standard Time)</option>
                                                                    <option value="America/Juneau">(GMT-9:00) America/Juneau (Alaska Standard Time)</option>
                                                                    <option value="America/Nome">(GMT-9:00) America/Nome (Alaska Standard Time)</option>
                                                                    <option value="America/Yakutat">(GMT-9:00) America/Yakutat (Alaska Standard Time)</option>
                                                                    <option value="America/Dawson">(GMT-8:00) America/Dawson (Pacific Standard Time)</option>
                                                                    <option value="America/Ensenada">(GMT-8:00) America/Ensenada (Pacific Standard Time)</option>
                                                                    <option value="America/Los_Angeles">(GMT-8:00) America/Los_Angeles (Pacific Standard Time)</option>
                                                                    <option value="America/Tijuana">(GMT-8:00) America/Tijuana (Pacific Standard Time)</option>
                                                                    <option value="America/Vancouver">(GMT-8:00) America/Vancouver (Pacific Standard Time)</option>
                                                                    <option value="America/Whitehorse">(GMT-8:00) America/Whitehorse (Pacific Standard Time)</option>
                                                                    <option value="Canada/Pacific">(GMT-8:00) Canada/Pacific (Pacific Standard Time)</option>
                                                                    <option value="Canada/Yukon">(GMT-8:00) Canada/Yukon (Pacific Standard Time)</option>
                                                                    <option value="Mexico/BajaNorte">(GMT-8:00) Mexico/BajaNorte (Pacific Standard Time)</option>
                                                                    <option value="America/Boise">(GMT-7:00) America/Boise (Mountain Standard Time)</option>
                                                                    <option value="America/Cambridge_Bay">(GMT-7:00) America/Cambridge_Bay (Mountain Standard Time)</option>
                                                                    <option value="America/Chihuahua">(GMT-7:00) America/Chihuahua (Mountain Standard Time)</option>
                                                                    <option value="America/Dawson_Creek">(GMT-7:00) America/Dawson_Creek (Mountain Standard Time)</option>
                                                                    <option value="America/Denver">(GMT-7:00) America/Denver (Mountain Standard Time)</option>
                                                                    <option value="America/Edmonton">(GMT-7:00) America/Edmonton (Mountain Standard Time)</option>
                                                                    <option value="America/Hermosillo">(GMT-7:00) America/Hermosillo (Mountain Standard Time)</option>
                                                                    <option value="America/Inuvik">(GMT-7:00) America/Inuvik (Mountain Standard Time)</option>
                                                                    <option value="America/Mazatlan">(GMT-7:00) America/Mazatlan (Mountain Standard Time)</option>
                                                                    <option value="America/Phoenix">(GMT-7:00) America/Phoenix (Mountain Standard Time)</option>
                                                                    <option value="America/Shiprock">(GMT-7:00) America/Shiprock (Mountain Standard Time)</option>
                                                                    <option value="America/Yellowknife">(GMT-7:00) America/Yellowknife (Mountain Standard Time)</option>
                                                                    <option value="Canada/Mountain">(GMT-7:00) Canada/Mountain (Mountain Standard Time)</option>
                                                                    <option value="Mexico/BajaSur">(GMT-7:00) Mexico/BajaSur (Mountain Standard Time)</option>
                                                                    <option value="America/Belize">(GMT-6:00) America/Belize (Central Standard Time)</option>
                                                                    <option value="America/Cancun">(GMT-6:00) America/Cancun (Central Standard Time)</option>
                                                                    <option value="America/Chicago">(GMT-6:00) America/Chicago (Central Standard Time)</option>
                                                                    <option value="America/Costa_Rica">(GMT-6:00) America/Costa_Rica (Central Standard Time)</option>
                                                                    <option value="America/El_Salvador">(GMT-6:00) America/El_Salvador (Central Standard Time)</option>
                                                                    <option value="America/Guatemala">(GMT-6:00) America/Guatemala (Central Standard Time)</option>
                                                                    <option value="America/Knox_IN">(GMT-6:00) America/Knox_IN (Central Standard Time)</option>
                                                                    <option value="America/Managua">(GMT-6:00) America/Managua (Central Standard Time)</option>
                                                                    <option value="America/Menominee">(GMT-6:00) America/Menominee (Central Standard Time)</option>
                                                                    <option value="America/Merida">(GMT-6:00) America/Merida (Central Standard Time)</option>
                                                                    <option value="America/Mexico_City">(GMT-6:00) America/Mexico_City (Central Standard Time)</option>
                                                                    <option value="America/Monterrey">(GMT-6:00) America/Monterrey (Central Standard Time)</option>
                                                                    <option value="America/Rainy_River">(GMT-6:00) America/Rainy_River (Central Standard Time)</option>
                                                                    <option value="America/Rankin_Inlet">(GMT-6:00) America/Rankin_Inlet (Central Standard Time)</option>
                                                                    <option value="America/Regina">(GMT-6:00) America/Regina (Central Standard Time)</option>
                                                                    <option value="America/Swift_Current">(GMT-6:00) America/Swift_Current (Central Standard Time)</option>
                                                                    <option value="America/Tegucigalpa">(GMT-6:00) America/Tegucigalpa (Central Standard Time)</option>
                                                                    <option value="America/Winnipeg">(GMT-6:00) America/Winnipeg (Central Standard Time)</option>
                                                                    <option value="Canada/Central">(GMT-6:00) Canada/Central (Central Standard Time)</option>
                                                                    <option value="Canada/East-Saskatchewan">(GMT-6:00) Canada/East-Saskatchewan (Central Standard Time)</option>
                                                                    <option value="Canada/Saskatchewan">(GMT-6:00) Canada/Saskatchewan (Central Standard Time)</option>
                                                                    <option value="Chile/EasterIsland">(GMT-6:00) Chile/EasterIsland (Easter Is. Time)</option>
                                                                    <option value="Mexico/General">(GMT-6:00) Mexico/General (Central Standard Time)</option>
                                                                    <option value="America/Atikokan">(GMT-5:00) America/Atikokan (Eastern Standard Time)</option>
                                                                    <option value="America/Bogota">(GMT-5:00) America/Bogota (Colombia Time)</option>
                                                                    <option value="America/Cayman">(GMT-5:00) America/Cayman (Eastern Standard Time)</option>
                                                                    <option value="America/Coral_Harbour">(GMT-5:00) America/Coral_Harbour (Eastern Standard Time)</option>
                                                                    <option value="America/Detroit">(GMT-5:00) America/Detroit (Eastern Standard Time)</option>
                                                                    <option value="America/Fort_Wayne">(GMT-5:00) America/Fort_Wayne (Eastern Standard Time)</option>
                                                                    <option value="America/Grand_Turk">(GMT-5:00) America/Grand_Turk (Eastern Standard Time)</option>
                                                                    <option value="America/Guayaquil">(GMT-5:00) America/Guayaquil (Ecuador Time)</option>
                                                                    <option value="America/Havana">(GMT-5:00) America/Havana (Cuba Standard Time)</option>
                                                                    <option value="America/Indianapolis">(GMT-5:00) America/Indianapolis (Eastern Standard Time)</option>
                                                                    <option value="America/Iqaluit">(GMT-5:00) America/Iqaluit (Eastern Standard Time)</option>
                                                                    <option value="America/Jamaica">(GMT-5:00) America/Jamaica (Eastern Standard Time)</option>
                                                                    <option value="America/Lima">(GMT-5:00) America/Lima (Peru Time)</option>
                                                                    <option value="America/Louisville">(GMT-5:00) America/Louisville (Eastern Standard Time)</option>
                                                                    <option value="America/Montreal">(GMT-5:00) America/Montreal (Eastern Standard Time)</option>
                                                                    <option value="America/Nassau">(GMT-5:00) America/Nassau (Eastern Standard Time)</option>
                                                                    <option value="America/New_York">(GMT-5:00) America/New_York (Eastern Standard Time)</option>
                                                                    <option value="America/Nipigon">(GMT-5:00) America/Nipigon (Eastern Standard Time)</option>
                                                                    <option value="America/Panama">(GMT-5:00) America/Panama (Eastern Standard Time)</option>
                                                                    <option value="America/Pangnirtung">(GMT-5:00) America/Pangnirtung (Eastern Standard Time)</option>
                                                                    <option value="America/Port-au-Prince">(GMT-5:00) America/Port-au-Prince (Eastern Standard Time)</option>
                                                                    <option value="America/Resolute">(GMT-5:00) America/Resolute (Eastern Standard Time)</option>
                                                                    <option value="America/Thunder_Bay">(GMT-5:00) America/Thunder_Bay (Eastern Standard Time)</option>
                                                                    <option value="America/Toronto">(GMT-5:00) America/Toronto (Eastern Standard Time)</option>
                                                                    <option value="Canada/Eastern">(GMT-5:00) Canada/Eastern (Eastern Standard Time)</option>
                                                                    <option value="America/Caracas">(GMT-4:-30) America/Caracas (Venezuela Time)</option>
                                                                    <option value="America/Anguilla">(GMT-4:00) America/Anguilla (Atlantic Standard Time)</option>
                                                                    <option value="America/Antigua">(GMT-4:00) America/Antigua (Atlantic Standard Time)</option>
                                                                    <option value="America/Aruba">(GMT-4:00) America/Aruba (Atlantic Standard Time)</option>
                                                                    <option value="America/Asuncion">(GMT-4:00) America/Asuncion (Paraguay Time)</option>
                                                                    <option value="America/Barbados">(GMT-4:00) America/Barbados (Atlantic Standard Time)</option>
                                                                    <option value="America/Blanc-Sablon">(GMT-4:00) America/Blanc-Sablon (Atlantic Standard Time)</option>
                                                                    <option value="America/Boa_Vista">(GMT-4:00) America/Boa_Vista (Amazon Time)</option>
                                                                    <option value="America/Campo_Grande">(GMT-4:00) America/Campo_Grande (Amazon Time)</option>
                                                                    <option value="America/Cuiaba">(GMT-4:00) America/Cuiaba (Amazon Time)</option>
                                                                    <option value="America/Curacao">(GMT-4:00) America/Curacao (Atlantic Standard Time)</option>
                                                                    <option value="America/Dominica">(GMT-4:00) America/Dominica (Atlantic Standard Time)</option>
                                                                    <option value="America/Eirunepe">(GMT-4:00) America/Eirunepe (Amazon Time)</option>
                                                                    <option value="America/Glace_Bay">(GMT-4:00) America/Glace_Bay (Atlantic Standard Time)</option>
                                                                    <option value="America/Goose_Bay">(GMT-4:00) America/Goose_Bay (Atlantic Standard Time)</option>
                                                                    <option value="America/Grenada">(GMT-4:00) America/Grenada (Atlantic Standard Time)</option>
                                                                    <option value="America/Guadeloupe">(GMT-4:00) America/Guadeloupe (Atlantic Standard Time)</option>
                                                                    <option value="America/Guyana">(GMT-4:00) America/Guyana (Guyana Time)</option>
                                                                    <option value="America/Halifax">(GMT-4:00) America/Halifax (Atlantic Standard Time)</option>
                                                                    <option value="America/La_Paz">(GMT-4:00) America/La_Paz (Bolivia Time)</option>
                                                                    <option value="America/Manaus">(GMT-4:00) America/Manaus (Amazon Time)</option>
                                                                    <option value="America/Marigot">(GMT-4:00) America/Marigot (Atlantic Standard Time)</option>
                                                                    <option value="America/Martinique">(GMT-4:00) America/Martinique (Atlantic Standard Time)</option>
                                                                    <option value="America/Moncton">(GMT-4:00) America/Moncton (Atlantic Standard Time)</option>
                                                                    <option value="America/Montserrat">(GMT-4:00) America/Montserrat (Atlantic Standard Time)</option>
                                                                    <option value="America/Port_of_Spain">(GMT-4:00) America/Port_of_Spain (Atlantic Standard Time)</option>
                                                                    <option value="America/Porto_Acre">(GMT-4:00) America/Porto_Acre (Amazon Time)</option>
                                                                    <option value="America/Porto_Velho">(GMT-4:00) America/Porto_Velho (Amazon Time)</option>
                                                                    <option value="America/Puerto_Rico">(GMT-4:00) America/Puerto_Rico (Atlantic Standard Time)</option>
                                                                    <option value="America/Rio_Branco">(GMT-4:00) America/Rio_Branco (Amazon Time)</option>
                                                                    <option value="America/Santiago">(GMT-4:00) America/Santiago (Chile Time)</option>
                                                                    <option value="America/Santo_Domingo">(GMT-4:00) America/Santo_Domingo (Atlantic Standard Time)</option>
                                                                    <option value="America/St_Barthelemy">(GMT-4:00) America/St_Barthelemy (Atlantic Standard Time)</option>
                                                                    <option value="America/St_Kitts">(GMT-4:00) America/St_Kitts (Atlantic Standard Time)</option>
                                                                    <option value="America/St_Lucia">(GMT-4:00) America/St_Lucia (Atlantic Standard Time)</option>
                                                                    <option value="America/St_Thomas">(GMT-4:00) America/St_Thomas (Atlantic Standard Time)</option>
                                                                    <option value="America/St_Vincent">(GMT-4:00) America/St_Vincent (Atlantic Standard Time)</option>
                                                                    <option value="America/Thule">(GMT-4:00) America/Thule (Atlantic Standard Time)</option>
                                                                    <option value="America/Tortola">(GMT-4:00) America/Tortola (Atlantic Standard Time)</option>
                                                                    <option value="America/Virgin">(GMT-4:00) America/Virgin (Atlantic Standard Time)</option>
                                                                    <option value="Antarctica/Palmer">(GMT-4:00) Antarctica/Palmer (Chile Time)</option>
                                                                    <option value="Atlantic/Bermuda">(GMT-4:00) Atlantic/Bermuda (Atlantic Standard Time)</option>
                                                                    <option value="Atlantic/Stanley">(GMT-4:00) Atlantic/Stanley (Falkland Is. Time)</option>
                                                                    <option value="Brazil/Acre">(GMT-4:00) Brazil/Acre (Amazon Time)</option>
                                                                    <option value="Brazil/West">(GMT-4:00) Brazil/West (Amazon Time)</option>
                                                                    <option value="Canada/Atlantic">(GMT-4:00) Canada/Atlantic (Atlantic Standard Time)</option>
                                                                    <option value="Chile/Continental">(GMT-4:00) Chile/Continental (Chile Time)</option>
                                                                    <option value="America/St_Johns">(GMT-3:-30) America/St_Johns (Newfoundland Standard Time)</option>
                                                                    <option value="Canada/Newfoundland">(GMT-3:-30) Canada/Newfoundland (Newfoundland Standard Time)</option>
                                                                    <option value="America/Araguaina">(GMT-3:00) America/Araguaina (Brasilia Time)</option>
                                                                    <option value="America/Bahia">(GMT-3:00) America/Bahia (Brasilia Time)</option>
                                                                    <option value="America/Belem">(GMT-3:00) America/Belem (Brasilia Time)</option>
                                                                    <option value="America/Buenos_Aires">(GMT-3:00) America/Buenos_Aires (Argentine Time)</option>
                                                                    <option value="America/Catamarca">(GMT-3:00) America/Catamarca (Argentine Time)</option>
                                                                    <option value="America/Cayenne">(GMT-3:00) America/Cayenne (French Guiana Time)</option>
                                                                    <option value="America/Cordoba">(GMT-3:00) America/Cordoba (Argentine Time)</option>
                                                                    <option value="America/Fortaleza">(GMT-3:00) America/Fortaleza (Brasilia Time)</option>
                                                                    <option value="America/Godthab">(GMT-3:00) America/Godthab (Western Greenland Time)</option>
                                                                    <option value="America/Jujuy">(GMT-3:00) America/Jujuy (Argentine Time)</option>
                                                                    <option value="America/Maceio">(GMT-3:00) America/Maceio (Brasilia Time)</option>
                                                                    <option value="America/Mendoza">(GMT-3:00) America/Mendoza (Argentine Time)</option>
                                                                    <option value="America/Miquelon">(GMT-3:00) America/Miquelon (Pierre &amp; Miquelon Standard Time)</option>
                                                                    <option value="America/Montevideo">(GMT-3:00) America/Montevideo (Uruguay Time)</option>
                                                                    <option value="America/Paramaribo">(GMT-3:00) America/Paramaribo (Suriname Time)</option>
                                                                    <option value="America/Recife">(GMT-3:00) America/Recife (Brasilia Time)</option>
                                                                    <option value="America/Rosario">(GMT-3:00) America/Rosario (Argentine Time)</option>
                                                                    <option value="America/Santarem">(GMT-3:00) America/Santarem (Brasilia Time)</option>
                                                                    <option value="America/Sao_Paulo">(GMT-3:00) America/Sao_Paulo (Brasilia Time)</option>
                                                                    <option value="Antarctica/Rothera">(GMT-3:00) Antarctica/Rothera (Rothera Time)</option>
                                                                    <option value="Brazil/East">(GMT-3:00) Brazil/East (Brasilia Time)</option>
                                                                    <option value="America/Noronha">(GMT-2:00) America/Noronha (Fernando de Noronha Time)</option>
                                                                    <option value="Atlantic/South_Georgia">(GMT-2:00) Atlantic/South_Georgia (South Georgia Standard Time)</option>
                                                                    <option value="Brazil/DeNoronha">(GMT-2:00) Brazil/DeNoronha (Fernando de Noronha Time)</option>
                                                                    <option value="America/Scoresbysund">(GMT-1:00) America/Scoresbysund (Eastern Greenland Time)</option>
                                                                    <option value="Atlantic/Azores">(GMT-1:00) Atlantic/Azores (Azores Time)</option>
                                                                    <option value="Atlantic/Cape_Verde">(GMT-1:00) Atlantic/Cape_Verde (Cape Verde Time)</option>
                                                                    <option value="Africa/Abidjan">(GMT+0:00) Africa/Abidjan (Greenwich Mean Time)</option>
                                                                    <option value="Africa/Accra">(GMT+0:00) Africa/Accra (Ghana Mean Time)</option>
                                                                    <option value="Africa/Bamako">(GMT+0:00) Africa/Bamako (Greenwich Mean Time)</option>
                                                                    <option value="Africa/Banjul">(GMT+0:00) Africa/Banjul (Greenwich Mean Time)</option>
                                                                    <option value="Africa/Bissau">(GMT+0:00) Africa/Bissau (Greenwich Mean Time)</option>
                                                                    <option value="Africa/Casablanca">(GMT+0:00) Africa/Casablanca (Western European Time)</option>
                                                                    <option value="Africa/Conakry">(GMT+0:00) Africa/Conakry (Greenwich Mean Time)</option>
                                                                    <option value="Africa/Dakar">(GMT+0:00) Africa/Dakar (Greenwich Mean Time)</option>
                                                                    <option value="Africa/El_Aaiun">(GMT+0:00) Africa/El_Aaiun (Western European Time)</option>
                                                                    <option value="Africa/Freetown">(GMT+0:00) Africa/Freetown (Greenwich Mean Time)</option>
                                                                    <option value="Africa/Lome">(GMT+0:00) Africa/Lome (Greenwich Mean Time)</option>
                                                                    <option value="Africa/Monrovia">(GMT+0:00) Africa/Monrovia (Greenwich Mean Time)</option>
                                                                    <option value="Africa/Nouakchott">(GMT+0:00) Africa/Nouakchott (Greenwich Mean Time)</option>
                                                                    <option value="Africa/Ouagadougou">(GMT+0:00) Africa/Ouagadougou (Greenwich Mean Time)</option>
                                                                    <option value="Africa/Sao_Tome">(GMT+0:00) Africa/Sao_Tome (Greenwich Mean Time)</option>
                                                                    <option value="Africa/Timbuktu">(GMT+0:00) Africa/Timbuktu (Greenwich Mean Time)</option>
                                                                    <option value="America/Danmarkshavn">(GMT+0:00) America/Danmarkshavn (Greenwich Mean Time)</option>
                                                                    <option value="Atlantic/Canary">(GMT+0:00) Atlantic/Canary (Western European Time)</option>
                                                                    <option value="Atlantic/Faeroe">(GMT+0:00) Atlantic/Faeroe (Western European Time)</option>
                                                                    <option value="Atlantic/Faroe">(GMT+0:00) Atlantic/Faroe (Western European Time)</option>
                                                                    <option value="Atlantic/Madeira">(GMT+0:00) Atlantic/Madeira (Western European Time)</option>
                                                                    <option value="Atlantic/Reykjavik">(GMT+0:00) Atlantic/Reykjavik (Greenwich Mean Time)</option>
                                                                    <option value="Atlantic/St_Helena">(GMT+0:00) Atlantic/St_Helena (Greenwich Mean Time)</option>
                                                                    <option value="Europe/Belfast">(GMT+0:00) Europe/Belfast (Greenwich Mean Time)</option>
                                                                    <option value="Europe/Dublin">(GMT+0:00) Europe/Dublin (Greenwich Mean Time)</option>
                                                                    <option value="Europe/Guernsey">(GMT+0:00) Europe/Guernsey (Greenwich Mean Time)</option>
                                                                    <option value="Europe/Isle_of_Man">(GMT+0:00) Europe/Isle_of_Man (Greenwich Mean Time)</option>
                                                                    <option value="Europe/Jersey">(GMT+0:00) Europe/Jersey (Greenwich Mean Time)</option>
                                                                    <option value="Europe/Lisbon">(GMT+0:00) Europe/Lisbon (Western European Time)</option>
                                                                    <option value="Europe/London">(GMT+0:00) Europe/London (Greenwich Mean Time)</option>
                                                                    <option value="Africa/Algiers">(GMT+1:00) Africa/Algiers (Central European Time)</option>
                                                                    <option value="Africa/Bangui">(GMT+1:00) Africa/Bangui (Western African Time)</option>
                                                                    <option value="Africa/Brazzaville">(GMT+1:00) Africa/Brazzaville (Western African Time)</option>
                                                                    <option value="Africa/Ceuta">(GMT+1:00) Africa/Ceuta (Central European Time)</option>
                                                                    <option value="Africa/Douala">(GMT+1:00) Africa/Douala (Western African Time)</option>
                                                                    <option value="Africa/Kinshasa">(GMT+1:00) Africa/Kinshasa (Western African Time)</option>
                                                                    <option value="Africa/Lagos">(GMT+1:00) Africa/Lagos (Western African Time)</option>
                                                                    <option value="Africa/Libreville">(GMT+1:00) Africa/Libreville (Western African Time)</option>
                                                                    <option value="Africa/Luanda">(GMT+1:00) Africa/Luanda (Western African Time)</option>
                                                                    <option value="Africa/Malabo">(GMT+1:00) Africa/Malabo (Western African Time)</option>
                                                                    <option value="Africa/Ndjamena">(GMT+1:00) Africa/Ndjamena (Western African Time)</option>
                                                                    <option value="Africa/Niamey">(GMT+1:00) Africa/Niamey (Western African Time)</option>
                                                                    <option value="Africa/Porto-Novo">(GMT+1:00) Africa/Porto-Novo (Western African Time)</option>
                                                                    <option value="Africa/Tunis">(GMT+1:00) Africa/Tunis (Central European Time)</option>
                                                                    <option value="Africa/Windhoek">(GMT+1:00) Africa/Windhoek (Western African Time)</option>
                                                                    <option value="Arctic/Longyearbyen">(GMT+1:00) Arctic/Longyearbyen (Central European Time)</option>
                                                                    <option value="Atlantic/Jan_Mayen">(GMT+1:00) Atlantic/Jan_Mayen (Central European Time)</option>
                                                                    <option value="Europe/Amsterdam">(GMT+1:00) Europe/Amsterdam (Central European Time)</option>
                                                                    <option value="Europe/Andorra">(GMT+1:00) Europe/Andorra (Central European Time)</option>
                                                                    <option value="Europe/Belgrade">(GMT+1:00) Europe/Belgrade (Central European Time)</option>
                                                                    <option value="Europe/Berlin">(GMT+1:00) Europe/Berlin (Central European Time)</option>
                                                                    <option value="Europe/Bratislava">(GMT+1:00) Europe/Bratislava (Central European Time)</option>
                                                                    <option value="Europe/Brussels">(GMT+1:00) Europe/Brussels (Central European Time)</option>
                                                                    <option value="Europe/Budapest">(GMT+1:00) Europe/Budapest (Central European Time)</option>
                                                                    <option value="Europe/Copenhagen">(GMT+1:00) Europe/Copenhagen (Central European Time)</option>
                                                                    <option value="Europe/Gibraltar">(GMT+1:00) Europe/Gibraltar (Central European Time)</option>
                                                                    <option value="Europe/Ljubljana">(GMT+1:00) Europe/Ljubljana (Central European Time)</option>
                                                                    <option value="Europe/Luxembourg">(GMT+1:00) Europe/Luxembourg (Central European Time)</option>
                                                                    <option value="Europe/Madrid">(GMT+1:00) Europe/Madrid (Central European Time)</option>
                                                                    <option value="Europe/Malta">(GMT+1:00) Europe/Malta (Central European Time)</option>
                                                                    <option value="Europe/Monaco">(GMT+1:00) Europe/Monaco (Central European Time)</option>
                                                                    <option value="Europe/Oslo">(GMT+1:00) Europe/Oslo (Central European Time)</option>
                                                                    <option value="Europe/Paris">(GMT+1:00) Europe/Paris (Central European Time)</option>
                                                                    <option value="Europe/Podgorica">(GMT+1:00) Europe/Podgorica (Central European Time)</option>
                                                                    <option value="Europe/Prague">(GMT+1:00) Europe/Prague (Central European Time)</option>
                                                                    <option value="Europe/Rome">(GMT+1:00) Europe/Rome (Central European Time)</option>
                                                                    <option value="Europe/San_Marino">(GMT+1:00) Europe/San_Marino (Central European Time)</option>
                                                                    <option value="Europe/Sarajevo">(GMT+1:00) Europe/Sarajevo (Central European Time)</option>
                                                                    <option value="Europe/Skopje">(GMT+1:00) Europe/Skopje (Central European Time)</option>
                                                                    <option value="Europe/Stockholm">(GMT+1:00) Europe/Stockholm (Central European Time)</option>
                                                                    <option value="Europe/Tirane">(GMT+1:00) Europe/Tirane (Central European Time)</option>
                                                                    <option value="Europe/Vaduz">(GMT+1:00) Europe/Vaduz (Central European Time)</option>
                                                                    <option value="Europe/Vatican">(GMT+1:00) Europe/Vatican (Central European Time)</option>
                                                                    <option value="Europe/Vienna">(GMT+1:00) Europe/Vienna (Central European Time)</option>
                                                                    <option value="Europe/Warsaw">(GMT+1:00) Europe/Warsaw (Central European Time)</option>
                                                                    <option value="Europe/Zagreb">(GMT+1:00) Europe/Zagreb (Central European Time)</option>
                                                                    <option value="Europe/Zurich">(GMT+1:00) Europe/Zurich (Central European Time)</option>
                                                                    <option value="Africa/Blantyre">(GMT+2:00) Africa/Blantyre (Central African Time)</option>
                                                                    <option value="Africa/Bujumbura">(GMT+2:00) Africa/Bujumbura (Central African Time)</option>
                                                                    <option value="Africa/Cairo">(GMT+2:00) Africa/Cairo (Eastern European Time)</option>
                                                                    <option value="Africa/Gaborone">(GMT+2:00) Africa/Gaborone (Central African Time)</option>
                                                                    <option value="Africa/Harare">(GMT+2:00) Africa/Harare (Central African Time)</option>
                                                                    <option value="Africa/Johannesburg">(GMT+2:00) Africa/Johannesburg (South Africa Standard Time)</option>
                                                                    <option value="Africa/Kigali">(GMT+2:00) Africa/Kigali (Central African Time)</option>
                                                                    <option value="Africa/Lubumbashi">(GMT+2:00) Africa/Lubumbashi (Central African Time)</option>
                                                                    <option value="Africa/Lusaka">(GMT+2:00) Africa/Lusaka (Central African Time)</option>
                                                                    <option value="Africa/Maputo">(GMT+2:00) Africa/Maputo (Central African Time)</option>
                                                                    <option value="Africa/Maseru">(GMT+2:00) Africa/Maseru (South Africa Standard Time)</option>
                                                                    <option value="Africa/Mbabane">(GMT+2:00) Africa/Mbabane (South Africa Standard Time)</option>
                                                                    <option value="Africa/Tripoli">(GMT+2:00) Africa/Tripoli (Eastern European Time)</option>
                                                                    <option value="Asia/Amman">(GMT+2:00) Asia/Amman (Eastern European Time)</option>
                                                                    <option value="Asia/Beirut">(GMT+2:00) Asia/Beirut (Eastern European Time)</option>
                                                                    <option value="Asia/Damascus">(GMT+2:00) Asia/Damascus (Eastern European Time)</option>
                                                                    <option value="Asia/Gaza">(GMT+2:00) Asia/Gaza (Eastern European Time)</option>
                                                                    <option value="Asia/Istanbul">(GMT+2:00) Asia/Istanbul (Eastern European Time)</option>
                                                                    <option value="Asia/Jerusalem">(GMT+2:00) Asia/Jerusalem (Israel Standard Time)</option>
                                                                    <option value="Asia/Nicosia">(GMT+2:00) Asia/Nicosia (Eastern European Time)</option>
                                                                    <option value="Asia/Tel_Aviv">(GMT+2:00) Asia/Tel_Aviv (Israel Standard Time)</option>
                                                                    <option value="Europe/Athens">(GMT+2:00) Europe/Athens (Eastern European Time)</option>
                                                                    <option value="Europe/Bucharest">(GMT+2:00) Europe/Bucharest (Eastern European Time)</option>
                                                                    <option value="Europe/Chisinau">(GMT+2:00) Europe/Chisinau (Eastern European Time)</option>
                                                                    <option value="Europe/Helsinki">(GMT+2:00) Europe/Helsinki (Eastern European Time)</option>
                                                                    <option value="Europe/Istanbul">(GMT+2:00) Europe/Istanbul (Eastern European Time)</option>
                                                                    <option value="Europe/Kaliningrad">(GMT+2:00) Europe/Kaliningrad (Eastern European Time)</option>
                                                                    <option value="Europe/Kiev">(GMT+2:00) Europe/Kiev (Eastern European Time)</option>
                                                                    <option value="Europe/Mariehamn">(GMT+2:00) Europe/Mariehamn (Eastern European Time)</option>
                                                                    <option value="Europe/Minsk">(GMT+2:00) Europe/Minsk (Eastern European Time)</option>
                                                                    <option value="Europe/Nicosia">(GMT+2:00) Europe/Nicosia (Eastern European Time)</option>
                                                                    <option value="Europe/Riga">(GMT+2:00) Europe/Riga (Eastern European Time)</option>
                                                                    <option value="Europe/Simferopol">(GMT+2:00) Europe/Simferopol (Eastern European Time)</option>
                                                                    <option value="Europe/Sofia">(GMT+2:00) Europe/Sofia (Eastern European Time)</option>
                                                                    <option value="Europe/Tallinn">(GMT+2:00) Europe/Tallinn (Eastern European Time)</option>
                                                                    <option value="Europe/Tiraspol">(GMT+2:00) Europe/Tiraspol (Eastern European Time)</option>
                                                                    <option value="Europe/Uzhgorod">(GMT+2:00) Europe/Uzhgorod (Eastern European Time)</option>
                                                                    <option value="Europe/Vilnius">(GMT+2:00) Europe/Vilnius (Eastern European Time)</option>
                                                                    <option value="Europe/Zaporozhye">(GMT+2:00) Europe/Zaporozhye (Eastern European Time)</option>
                                                                    <option value="Africa/Addis_Ababa">(GMT+3:00) Africa/Addis_Ababa (Eastern African Time)</option>
                                                                    <option value="Africa/Asmara">(GMT+3:00) Africa/Asmara (Eastern African Time)</option>
                                                                    <option value="Africa/Asmera">(GMT+3:00) Africa/Asmera (Eastern African Time)</option>
                                                                    <option value="Africa/Dar_es_Salaam">(GMT+3:00) Africa/Dar_es_Salaam (Eastern African Time)</option>
                                                                    <option value="Africa/Djibouti">(GMT+3:00) Africa/Djibouti (Eastern African Time)</option>
                                                                    <option value="Africa/Kampala">(GMT+3:00) Africa/Kampala (Eastern African Time)</option>
                                                                    <option value="Africa/Khartoum">(GMT+3:00) Africa/Khartoum (Eastern African Time)</option>
                                                                    <option value="Africa/Mogadishu">(GMT+3:00) Africa/Mogadishu (Eastern African Time)</option>
                                                                    <option value="Africa/Nairobi">(GMT+3:00) Africa/Nairobi (Eastern African Time)</option>
                                                                    <option value="Antarctica/Syowa">(GMT+3:00) Antarctica/Syowa (Syowa Time)</option>
                                                                    <option value="Asia/Aden">(GMT+3:00) Asia/Aden (Arabia Standard Time)</option>
                                                                    <option value="Asia/Baghdad">(GMT+3:00) Asia/Baghdad (Arabia Standard Time)</option>
                                                                    <option value="Asia/Bahrain">(GMT+3:00) Asia/Bahrain (Arabia Standard Time)</option>
                                                                    <option value="Asia/Kuwait">(GMT+3:00) Asia/Kuwait (Arabia Standard Time)</option>
                                                                    <option value="Asia/Qatar">(GMT+3:00) Asia/Qatar (Arabia Standard Time)</option>
                                                                    <option value="Europe/Moscow">(GMT+3:00) Europe/Moscow (Moscow Standard Time)</option>
                                                                    <option value="Europe/Volgograd">(GMT+3:00) Europe/Volgograd (Volgograd Time)</option>
                                                                    <option value="Indian/Antananarivo">(GMT+3:00) Indian/Antananarivo (Eastern African Time)</option>
                                                                    <option value="Indian/Comoro">(GMT+3:00) Indian/Comoro (Eastern African Time)</option>
                                                                    <option value="Indian/Mayotte">(GMT+3:00) Indian/Mayotte (Eastern African Time)</option>
                                                                    <option value="Asia/Tehran">(GMT+3:30) Asia/Tehran (Iran Standard Time)</option>
                                                                    <option value="Asia/Baku">(GMT+4:00) Asia/Baku (Azerbaijan Time)</option>
                                                                    <option value="Asia/Dubai">(GMT+4:00) Asia/Dubai (Gulf Standard Time)</option>
                                                                    <option value="Asia/Muscat">(GMT+4:00) Asia/Muscat (Gulf Standard Time)</option>
                                                                    <option value="Asia/Tbilisi">(GMT+4:00) Asia/Tbilisi (Georgia Time)</option>
                                                                    <option value="Asia/Yerevan">(GMT+4:00) Asia/Yerevan (Armenia Time)</option>
                                                                    <option value="Europe/Samara">(GMT+4:00) Europe/Samara (Samara Time)</option>
                                                                    <option value="Indian/Mahe">(GMT+4:00) Indian/Mahe (Seychelles Time)</option>
                                                                    <option value="Indian/Mauritius">(GMT+4:00) Indian/Mauritius (Mauritius Time)</option>
                                                                    <option value="Indian/Reunion">(GMT+4:00) Indian/Reunion (Reunion Time)</option>
                                                                    <option value="Asia/Kabul">(GMT+4:30) Asia/Kabul (Afghanistan Time)</option>
                                                                    <option value="Asia/Aqtau">(GMT+5:00) Asia/Aqtau (Aqtau Time)</option>
                                                                    <option value="Asia/Aqtobe">(GMT+5:00) Asia/Aqtobe (Aqtobe Time)</option>
                                                                    <option value="Asia/Ashgabat">(GMT+5:00) Asia/Ashgabat (Turkmenistan Time)</option>
                                                                    <option value="Asia/Ashkhabad">(GMT+5:00) Asia/Ashkhabad (Turkmenistan Time)</option>
                                                                    <option value="Asia/Dushanbe">(GMT+5:00) Asia/Dushanbe (Tajikistan Time)</option>
                                                                    <option value="Asia/Karachi">(GMT+5:00) Asia/Karachi (Pakistan Time)</option>
                                                                    <option value="Asia/Oral">(GMT+5:00) Asia/Oral (Oral Time)</option>
                                                                    <option value="Asia/Samarkand">(GMT+5:00) Asia/Samarkand (Uzbekistan Time)</option>
                                                                    <option value="Asia/Tashkent">(GMT+5:00) Asia/Tashkent (Uzbekistan Time)</option>
                                                                    <option value="Asia/Yekaterinburg">(GMT+5:00) Asia/Yekaterinburg (Yekaterinburg Time)</option>
                                                                    <option value="Indian/Kerguelen">(GMT+5:00) Indian/Kerguelen (French Southern &amp; Antarctic Lands Time)</option>
                                                                    <option value="Indian/Maldives">(GMT+5:00) Indian/Maldives (Maldives Time)</option>
                                                                    <option value="Asia/Calcutta">(GMT+5:30) Asia/Calcutta (India Standard Time)</option>
                                                                    <option value="Asia/Colombo">(GMT+5:30) Asia/Colombo (India Standard Time)</option>
                                                                    <option value="Asia/Kolkata">(GMT+5:30) Asia/Kolkata (India Standard Time)</option>
                                                                    <option value="Asia/Katmandu">(GMT+5:45) Asia/Katmandu (Nepal Time)</option>
                                                                    <option value="Antarctica/Mawson">(GMT+6:00) Antarctica/Mawson (Mawson Time)</option>
                                                                    <option value="Antarctica/Vostok">(GMT+6:00) Antarctica/Vostok (Vostok Time)</option>
                                                                    <option value="Asia/Almaty">(GMT+6:00) Asia/Almaty (Alma-Ata Time)</option>
                                                                    <option value="Asia/Bishkek">(GMT+6:00) Asia/Bishkek (Kirgizstan Time)</option>
                                                                    <option value="Asia/Dacca">(GMT+6:00) Asia/Dacca (Bangladesh Time)</option>
                                                                    <option value="Asia/Dhaka">(GMT+6:00) Asia/Dhaka (Bangladesh Time)</option>
                                                                    <option value="Asia/Novosibirsk">(GMT+6:00) Asia/Novosibirsk (Novosibirsk Time)</option>
                                                                    <option value="Asia/Omsk">(GMT+6:00) Asia/Omsk (Omsk Time)</option>
                                                                    <option value="Asia/Qyzylorda">(GMT+6:00) Asia/Qyzylorda (Qyzylorda Time)</option>
                                                                    <option value="Asia/Thimbu">(GMT+6:00) Asia/Thimbu (Bhutan Time)</option>
                                                                    <option value="Asia/Thimphu">(GMT+6:00) Asia/Thimphu (Bhutan Time)</option>
                                                                    <option value="Indian/Chagos">(GMT+6:00) Indian/Chagos (Indian Ocean Territory Time)</option>
                                                                    <option value="Asia/Rangoon">(GMT+6:30) Asia/Rangoon (Myanmar Time)</option>
                                                                    <option value="Indian/Cocos">(GMT+6:30) Indian/Cocos (Cocos Islands Time)</option>
                                                                    <option value="Antarctica/Davis">(GMT+7:00) Antarctica/Davis (Davis Time)</option>
                                                                    <option value="Asia/Bangkok">(GMT+7:00) Asia/Bangkok (Indochina Time)</option>
                                                                    <option value="Asia/Ho_Chi_Minh">(GMT+7:00) Asia/Ho_Chi_Minh (Indochina Time)</option>
                                                                    <option value="Asia/Hovd">(GMT+7:00) Asia/Hovd (Hovd Time)</option>
                                                                    <option value="Asia/Jakarta">(GMT+7:00) Asia/Jakarta (West Indonesia Time)</option>
                                                                    <option value="Asia/Krasnoyarsk">(GMT+7:00) Asia/Krasnoyarsk (Krasnoyarsk Time)</option>
                                                                    <option value="Asia/Phnom_Penh">(GMT+7:00) Asia/Phnom_Penh (Indochina Time)</option>
                                                                    <option value="Asia/Pontianak">(GMT+7:00) Asia/Pontianak (West Indonesia Time)</option>
                                                                    <option value="Asia/Saigon">(GMT+7:00) Asia/Saigon (Indochina Time)</option>
                                                                    <option value="Asia/Vientiane">(GMT+7:00) Asia/Vientiane (Indochina Time)</option>
                                                                    <option value="Indian/Christmas">(GMT+7:00) Indian/Christmas (Christmas Island Time)</option>
                                                                    <option value="Antarctica/Casey">(GMT+8:00) Antarctica/Casey (Western Standard Time (Australia))</option>
                                                                    <option value="Asia/Brunei">(GMT+8:00) Asia/Brunei (Brunei Time)</option>
                                                                    <option value="Asia/Choibalsan">(GMT+8:00) Asia/Choibalsan (Choibalsan Time)</option>
                                                                    <option value="Asia/Chongqing">(GMT+8:00) Asia/Chongqing (China Standard Time)</option>
                                                                    <option value="Asia/Chungking">(GMT+8:00) Asia/Chungking (China Standard Time)</option>
                                                                    <option value="Asia/Harbin">(GMT+8:00) Asia/Harbin (China Standard Time)</option>
                                                                    <option value="Asia/Hong_Kong">(GMT+8:00) Asia/Hong_Kong (Hong Kong Time)</option>
                                                                    <option value="Asia/Irkutsk">(GMT+8:00) Asia/Irkutsk (Irkutsk Time)</option>
                                                                    <option value="Asia/Kashgar">(GMT+8:00) Asia/Kashgar (China Standard Time)</option>
                                                                    <option value="Asia/Kuala_Lumpur">(GMT+8:00) Asia/Kuala_Lumpur (Malaysia Time)</option>
                                                                    <option value="Asia/Kuching">(GMT+8:00) Asia/Kuching (Malaysia Time)</option>
                                                                    <option value="Asia/Macao">(GMT+8:00) Asia/Macao (China Standard Time)</option>
                                                                    <option value="Asia/Macau">(GMT+8:00) Asia/Macau (China Standard Time)</option>
                                                                    <option value="Asia/Makassar">(GMT+8:00) Asia/Makassar (Central Indonesia Time)</option>
                                                                    <option value="Asia/Manila">(GMT+8:00) Asia/Manila (Philippines Time)</option>
                                                                    <option value="Asia/Shanghai">(GMT+8:00) Asia/Shanghai (China Standard Time)</option>
                                                                    <option value="Asia/Singapore">(GMT+8:00) Asia/Singapore (Singapore Time)</option>
                                                                    <option value="Asia/Taipei">(GMT+8:00) Asia/Taipei (China Standard Time)</option>
                                                                    <option value="Asia/Ujung_Pandang">(GMT+8:00) Asia/Ujung_Pandang (Central Indonesia Time)</option>
                                                                    <option value="Asia/Ulaanbaatar">(GMT+8:00) Asia/Ulaanbaatar (Ulaanbaatar Time)</option>
                                                                    <option value="Asia/Ulan_Bator">(GMT+8:00) Asia/Ulan_Bator (Ulaanbaatar Time)</option>
                                                                    <option value="Asia/Urumqi">(GMT+8:00) Asia/Urumqi (China Standard Time)</option>
                                                                    <option value="Australia/Perth">(GMT+8:00) Australia/Perth (Western Standard Time (Australia))</option>
                                                                    <option value="Australia/West">(GMT+8:00) Australia/West (Western Standard Time (Australia))</option>
                                                                    <option value="Australia/Eucla">(GMT+8:45) Australia/Eucla (Central Western Standard Time (Australia))</option>
                                                                    <option value="Asia/Dili">(GMT+9:00) Asia/Dili (Timor-Leste Time)</option>
                                                                    <option value="Asia/Jayapura">(GMT+9:00) Asia/Jayapura (East Indonesia Time)</option>
                                                                    <option value="Asia/Pyongyang">(GMT+9:00) Asia/Pyongyang (Korea Standard Time)</option>
                                                                    <option value="Asia/Seoul">(GMT+9:00) Asia/Seoul (Korea Standard Time)</option>
                                                                    <option value="Asia/Tokyo">(GMT+9:00) Asia/Tokyo (Japan Standard Time)</option>
                                                                    <option value="Asia/Yakutsk">(GMT+9:00) Asia/Yakutsk (Yakutsk Time)</option>
                                                                    <option value="Australia/Adelaide">(GMT+9:30) Australia/Adelaide (Central Standard Time (South Australia))</option>
                                                                    <option value="Australia/Broken_Hill">(GMT+9:30) Australia/Broken_Hill (Central Standard Time (South Australia/New South Wales))</option>
                                                                    <option value="Australia/Darwin">(GMT+9:30) Australia/Darwin (Central Standard Time (Northern Territory))</option>
                                                                    <option value="Australia/North">(GMT+9:30) Australia/North (Central Standard Time (Northern Territory))</option>
                                                                    <option value="Australia/South">(GMT+9:30) Australia/South (Central Standard Time (South Australia))</option>
                                                                    <option value="Australia/Yancowinna">(GMT+9:30) Australia/Yancowinna (Central Standard Time (South Australia/New South Wales))</option>
                                                                    <option value="Antarctica/DumontDUrville">(GMT+10:00) Antarctica/DumontDUrville (Dumont-d'Urville Time)</option>
                                                                    <option value="Asia/Sakhalin">(GMT+10:00) Asia/Sakhalin (Sakhalin Time)</option>
                                                                    <option value="Asia/Vladivostok">(GMT+10:00) Asia/Vladivostok (Vladivostok Time)</option>
                                                                    <option value="Australia/ACT">(GMT+10:00) Australia/ACT (Eastern Standard Time (New South Wales))</option>
                                                                    <option value="Australia/Brisbane">(GMT+10:00) Australia/Brisbane (Eastern Standard Time (Queensland))</option>
                                                                    <option value="Australia/Canberra">(GMT+10:00) Australia/Canberra (Eastern Standard Time (New South Wales))</option>
                                                                    <option value="Australia/Currie">(GMT+10:00) Australia/Currie (Eastern Standard Time (New South Wales))</option>
                                                                    <option value="Australia/Hobart">(GMT+10:00) Australia/Hobart (Eastern Standard Time (Tasmania))</option>
                                                                    <option value="Australia/Lindeman">(GMT+10:00) Australia/Lindeman (Eastern Standard Time (Queensland))</option>
                                                                    <option value="Australia/Melbourne">(GMT+10:00) Australia/Melbourne (Eastern Standard Time (Victoria))</option>
                                                                    <option value="Australia/NSW">(GMT+10:00) Australia/NSW (Eastern Standard Time (New South Wales))</option>
                                                                    <option value="Australia/Queensland">(GMT+10:00) Australia/Queensland (Eastern Standard Time (Queensland))</option>
                                                                    <option value="Australia/Sydney">(GMT+10:00) Australia/Sydney (Eastern Standard Time (New South Wales))</option>
                                                                    <option value="Australia/Tasmania">(GMT+10:00) Australia/Tasmania (Eastern Standard Time (Tasmania))</option>
                                                                    <option value="Australia/Victoria">(GMT+10:00) Australia/Victoria (Eastern Standard Time (Victoria))</option>
                                                                    <option value="Australia/LHI">(GMT+10:30) Australia/LHI (Lord Howe Standard Time)</option>
                                                                    <option value="Australia/Lord_Howe">(GMT+10:30) Australia/Lord_Howe (Lord Howe Standard Time)</option>
                                                                    <option value="Asia/Magadan">(GMT+11:00) Asia/Magadan (Magadan Time)</option>
                                                                    <option value="Antarctica/McMurdo">(GMT+12:00) Antarctica/McMurdo (New Zealand Standard Time)</option>
                                                                    <option value="Antarctica/South_Pole">(GMT+12:00) Antarctica/South_Pole (New Zealand Standard Time)</option>
                                                                    <option value="Asia/Anadyr">(GMT+12:00) Asia/Anadyr (Anadyr Time)</option>
                                                                    <option value="Asia/Kamchatka">(GMT+12:00) Asia/Kamchatka (Petropavlovsk-Kamchatski Time)</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div class="clear"></div>
                                                        <div class="col-12" Style="margin-top: 10px; padding: 0 14px;">
                                                            <div class="pp_mat_input">
                                                                <textarea name="meeting_note" id="meeting_note" cols="30" rows="2"></textarea>
                                                                <label for="meeting_note">Meeting note</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!--Uploader--> */}
                                                <div class="row" Style="padding: 0 18px">
                                                    <div class="col-md-12" Style="padding-bottom: 10px; border-bottom: 1px solid grey">
                                                        Please upload either a thumbnail or video. <br />
                                                        You may also upload both, on the listing the video will be shown.
                                                    </div>
                                                </div>
                                                <div class="row mobile-row" Style="display: flex; align-items: center; padding-top: 15px;">
                                                    <div class="clear"></div>
                                                    <div class="col-md-6">
                                                        <div class="pp_mat_input image-uploader" id="uploader">
                                                            <div class="article_image_renderer" id="image-renderer" onclick="document.getElementById('thumbnail').click(); return false">
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                                                    <path fill="currentColor" d="M21 15v3h3v2h-3v3h-2v-3h-3v-2h3v-3h2zm.008-12c.548 0 .992.445.992.993v9.349A5.99 5.99 0 0 0 20 13V5H4l.001 14 9.292-9.293a.999.999 0 0 1 1.32-.084l.093.085 3.546 3.55a6.003 6.003 0 0 0-3.91 7.743L2.992 21A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3h18.016zM8 7a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"></path>
                                                                </svg>
                                                                Browse To Upload Thumbnail
                                                            </div>
                                                            <div class="progress" Style="display: none">
                                                                <span class="percent">0%</span>
                                                                <div class="progress_bar_parent">
                                                                    <div class="bar upload-progress-bar progress-bar active"></div>
                                                                </div>
                                                                <div class="clear"></div>
                                                                <div class="text-center pt_prcs_vdo"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="pp_mat_input video-uploader" id="uploader">
                                                            <div class="article_image_renderer" id="video-renderer" onclick="document.getElementById('video').click(); return false">
                                                                <div class="placeholder center-all" Style="flex-direction: column;">
                                                                    <svg width="24px" height="24px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" aria-labelledby="videoIconTitle" stroke="currentColor" stroke-width="1" stroke-linecap="square" stroke-linejoin="miter" fill="none" color="#ffffff">
                                                                        <polygon points="18 12 9 16.9 9 7"></polygon>
                                                                        <circle cx="12" cy="12" r="10"></circle>
                                                                    </svg>
                                                                    Browse To Upload Video
                                                                </div>
                                                                <video src="" Style="display: none"></video>
                                                                <button type="button" class="btn btn-info">Change video</button>
                                                            </div>
                                                            <div class="progress" Style="display: none">
                                                                <span class="percent">0%</span>
                                                                <div class="progress_bar_parent">
                                                                    <div class="bar upload-progress-bar progress-bar active"></div>
                                                                </div>
                                                                <div class="clear"></div>
                                                                <div class="text-center pt_prcs_vdo"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="progress hidden">
                                                    <span class="percent">0%</span>
                                                    <div class="progress_bar_parent">
                                                        <div class="bar upload-progress-bar progress-bar active"></div>
                                                    </div>
                                                    <div class="clear"></div>
                                                    <div class="text-center pt_prcs_vdo"></div>
                                                </div>
                                                <div class="text-center">
                                                    <button type="submit" id="submit-btn" class="btn btn-main setting-panel-mdbtn">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-circle">
                                                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                                        </svg>
                                                        Publish
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                        <div class="clear"></div>
                                    </div>
                                    <div class="clear"></div>
                                </div>
                            </div>
                        </div>
                        <form id="thumbnail-form" method="POST">
                            <input id="thumbnail" name="thumbnail" type="file" Style="visibility: hidden;" accept="image/*" />
                        </form>

                        <form method="POST" id="video-upload" Style="visibility: hidden;">
                            <input type="file" id="video" name="video" accept="video/*" class="upload-video-file" />
                        </form>

                        {/* <script src="https://clikview.com/themes/youplay/js/tinymce/js/tinymce/tinymce.min.js"></script>
<script>
	$(document).ready(function () {
		tinymce.init({
			selector: '#text',  // change this value according to your HTML
			auto_focus: 'element1',
			relative_urls: false,
			remove_script_host: false,
			height: 500,
			toolbar: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image  uploadImages |  preview media fullpage | forecolor backcolor emoticons',
			plugins: [
				'advlist autolink link image  lists charmap  preview hr anchor pagebreak spellchecker',
				'searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking',
				'save table contextmenu directionality emoticons template paste textcolor'
			]
		});

		jQuery('.selectpicker').selectpicker();
	});

    const submitButton = jQuery('#submit-btn')
    const hash = jQuery('.main_session').val();
    const videoUploadURL = 'https://clikview.com/aj/upload-video-ffmpeg?hash=' + hash;
    const videoSubmitURL = 'https://clikview.com/aj/ffmpeg-submit?hash=' + hash;
    const thumbnailUploadURL = 'https://clikview.com/aj/upload-thumbnail?hash=' + hash;
    const maxUploadSize = '10000000000';
    const videoUploadForm = jQuery('#video-upload');
    const imageUploadForm = jQuery('#thumbnail-form');
    const videoProgressBar = jQuery('.video-uploader .progress');
    const imageProgressBar = jQuery('.image-uploader .progress');
    const form = jQuery('#create_participate');

    const updateProgressBar = (bar, value) => {
        bar.fadeIn()
        bar.find('.percent').html(value + '%')
        bar.find('.bar').css('width', value + '%')
    }

    jQuery(document).ready(function () {

		videoUploadForm.on('submit', () => {
			const fSize = videoUploadForm.find('input[type="file"]').prop('files')[ 0 ].size;
			if (fSize > maxUploadSize) {
				Snackbar.show({text: "You can't upload a video larger then " + max_upload});
				return false;
			}
		})

		videoUploadForm.ajaxForm({
			url: videoUploadURL,
			dataType: 'json',
			beforeSend: () => {
				submitButton.attr('disabled', true)
				updateProgressBar(videoProgressBar, 0)
			},
			uploadProgress: (event, position, total, percentComplete) => updateProgressBar(videoProgressBar, parseInt(percentComplete)),
			success: (data) => {
				if (data.status === 200) {
					jQuery('<input />', {
						name: 'video-info',
						type: 'hidden',
						value: JSON.stringify(data)
					}).appendTo(form)
				} else {
					Snackbar.show({text: data.message ?? 'Something is wrong, we were not able to upload the video.'});
				}
				submitButton.removeAttr('disabled')
				videoProgressBar.fadeOut()
			}
		});

		imageUploadForm.on('submit', () => {
			const fSize = imageUploadForm.find('input[type="file"]').prop('files')[ 0 ].size;
			if (fSize > maxUploadSize) {
				Snackbar.show({text: "You can't upload a image larger then " + max_upload});
				return false;
			}
		})

		imageUploadForm.ajaxForm({
			url: thumbnailUploadURL,
			dataType: 'json',
			beforeSend: () => {
				submitButton.attr('disabled', true)
				updateProgressBar(imageProgressBar, 0)
			},
			uploadProgress: (event, position, total, percentComplete) => updateProgressBar(imageProgressBar, parseInt(percentComplete)),
			success: (data) => {
				if (data.status === 200) {
					jQuery('<input />', {
						name: 'image-info',
						type: 'hidden',
						value: JSON.stringify(data)
					}).appendTo(form)
				} else {
					Snackbar.show({text: data.message ?? 'Something is wrong, we were not able to upload the image.'});
				}
				submitButton.removeAttr('disabled')
				imageProgressBar.fadeOut()
			}
		});

        jQuery("#thumbnail").on('change', function () {
            jQuery("#image-renderer").html("<img src='" + window.URL.createObjectURL(this.files[ 0 ]) + "' alt='Picture'>");
            imageUploadForm.submit();
        });

        jQuery("#video").on('change', function () {
            jQuery("#video-renderer .placeholder").hide();
            jQuery("#video-renderer video").attr("src", window.URL.createObjectURL(this.files[ 0 ])).css('display', 'unset');
            jQuery("#video-renderer button").css('display', 'unset');
            videoUploadForm.submit();
        });

        const datePicker = {
            dateFormat: 'm/d/y',
            minDate: 'today',
            prevText: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" /></svg>',
            nextText: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>'
        };

        jQuery('#meeting_date').datepicker(datePicker);

    });

    const submitVideo = () => {
        const videoExist= jQuery('input[name="video-info"]').val();
        let videoInfo   = null;
        if (videoExist) {
            videoInfo = JSON.parse(jQuery('input[name="video-info"]').val())
        } else {
            jQuery('<input />', {
                name: 'fileSaved',
                value: true,
                type: 'hidden'
            }).appendTo(form);
            form.submit();
            return;
        }
        const title = jQuery('input[name="title"]').val();
        const description = tinymce.get('text').getContent();
        const category = jQuery('select[name="category"]').val();

        const imageInfo = JSON.parse(jQuery('input[name="image-info"]').val())
        const uploadID = videoInfo.uploaded_id;
        const tags = jQuery('[name="tags"]').val()
        const videoThumnail = imageInfo?.thumbnail ?? videoInfo.images[ 0 ]
        const videoLocation = videoInfo.file_path;
        jQuery.post(videoSubmitURL, {
            description, title, tags,
            category_id: category,
            privacy: 2,
            uploaded_id: uploadID,
            'video-thumnail': videoThumnail,
            'video-location': videoLocation
        }).then(res => {
            if (res.status === 200) {
                jQuery('<input />', {
                    name: 'videoID',
                    value: res.video_id,
                    type: 'hidden'
                }).appendTo(form)
                jQuery('<input />', {
                    name: 'fileSaved',
                    value: true,
                    type: 'hidden'
                }).appendTo(form);
                jQuery('<input />', {
                    name: 'thumbnail',
                    value: videoThumnail,
                    type: 'hidden'
                }).appendTo(form);
                form.submit();
            } else {
                Snackbar.show({text: data.message ?? 'Something is wrong, we were not able to save the video.'});
            }
        })
    };

    jQuery(function () {
        const bar = jQuery('.bar');
        const percent = jQuery('.percent');
        const prcsvdo = jQuery('.pt_prcs_vdo');

        jQuery("#mySingleFieldTags").tagit({
            allowSpaces: true
        });

        const form = jQuery('#create_participate');

		form.on('submit', function (e) {
			let mValue = new Date($('[data-name="meeting_date"]').val())
			let sValue = new Date($('[data-name="start_date"]').val())
			let eValue = new Date($('[data-name="end_date"]').val())
			$('[name="meeting_date"], [name="start_date"], [name="end_date"]').remove();
			$('<input />', {
				name: 'meeting_date',
				type: 'hidden',
				value: mValue / 1000
			}).appendTo(form)
			$('<input />', {
				name: 'start_date',
				type: 'hidden',
				value: sValue / 1000
			}).appendTo(form)
			$('<input />', {
				name: 'end_date',
				type: 'hidden',
				value: eValue / 1000
			}).appendTo(form)
		})

        form.ajaxForm({
            url: 'https://clikview.com/aj/create-auction?hash=' + jQuery('.main_session').val(),
            beforeSend: function () {
                jQuery('#submit-btn').attr('disabled', true).val("Please wait..");
                jQuery('.progress').removeClass('hidden');
                const percentVal = '0%';
                bar.width(percentVal);
                percent.html(percentVal);
                form.find('input').each(() => jQuery(this).removeAttr('style'))
            },
            uploadProgress: function (event, position, total, percentComplete) {
                if (percentComplete > 50) {
                    percent.addClass('white');
                }
                var percentVal = percentComplete + '%';
                bar.width(percentVal);
                percent.html(percentVal);

                if (parseInt(percentComplete) === 100) {
                    prcsvdo.html('<svg width="30" height="10" viewBox="0 0 120 30" xmlns="http://www.w3.org/2000/svg" fill="#000"><circle cx="15" cy="15" r="15"><animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite" /><animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite" /></circle><circle cx="60" cy="15" r="9" fill-opacity="0.3"><animate attributeName="r" from="9" to="9" begin="0s" dur="0.8s" values="9;15;9" calcMode="linear" repeatCount="indefinite" /><animate attributeName="fill-opacity" from="0.5" to="0.5" begin="0s" dur="0.8s" values=".5;1;.5" calcMode="linear" repeatCount="indefinite" /></circle><circle cx="105" cy="15" r="15"><animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite" /><animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite" /></circle></svg> Processing - this may take a few minutes');
                    jQuery('.progress').find('.bar').removeClass('upload-progress-bar');
                }
            },
            success: function (data) {
                console.log(data);
                data = JSON.parse(data)
                if (data.status === 200 && data.storeFiles) {
                    submitVideo();
                } else if (data.status === 200 && data.success) {
                    swal({
	                    title: "Success",
	                    text: "Your auction has been created."
                    }).then(res => {
                        window.location.href = "/auction";
                    });
                } else {
                    Snackbar.show({text: "<div>" + data.message + "</div>"});
                    if (data.field) {
                        const input = jQuery('[name="' + data.field + '"]');
                        let top = input.offset().top;
                        if (data.field !== 'auction_details') {
                            if (data.field === 'image') {
                                top = jQuery('#image-renderer').offset().top
                                jQuery('.article_image_renderer').css('border-color', 'red')
                            } else {
                                input.attr('style', 'border-color: red !important;')
                            }
                        }
                        jQuery([document.documentElement, document.body]).animate({
                            scrollTop: top
                        }, 2000);
                        input.focus();
                    }
                }
                jQuery('#submit-btn').attr('disabled', false).val("Publish");
            }
        });
    });

    //document.querySelectorAll('.date-picker').forEach(ele => )
    jQuery('.date-picker').each(function () {
        jQuery(this).attr('autocomplete', false)
        jQuery(this).datepicker({
            dateFormat: 'm/d/y',
            minDate: 'today',
            prevText: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" /></svg>',
            nextText: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>'
        })
    })

    jQuery('[type="checkbox"].pricing').each(function () {
        jQuery(this).on('change', function () {
            jQuery(this).parents('.pricing-item').find('.' + jQuery(this).attr('name')).slideToggle()
        })
    })

    jQuery('.checkbox-group .checkbox-title [type="checkbox"]').each(function () {
        jQuery(this).on('change', () => jQuery(this).parents('.checkbox-group').find('.checkbox-details').slideToggle())
    })
</script> */}


                    </div>
                    <input type="hidden" id="main-url" value="https://clikview.com%2Fauction.create" />
                    <div class="ads-placment" id="footer_ad_"></div>
                </div>
            </div>
        </div>
    )
}

export default CreateAuction