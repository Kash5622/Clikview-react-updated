import React from 'react'
import MobileSearch from './MobileSearch';

function CreateArticle(props) {
    const { searchOpen, expandNav } = props;
    return (
        <div>
            <div className={expandNav ? "main-container shrinkWidth bodyfixed" : "main-container expandWidth"} Style="z-index:-1">
                <div id="main-container" className="main-content  container">
                    {searchOpen ? <MobileSearch /> : ""}
                    <div class="ads-placment" id="header_ad_"></div>
                    <div class="announcement-renderer">

                    </div>
                    <div id="container_content"><input type="hidden" id="json-data" value="{&quot;title&quot;:&quot;Create article - ClikView - Real Content For You&quot;,&quot;description&quot;:&quot;Clikview is a Video Sharing Platform, Clikview is the best way to start your own video sharing channel! Real Content for you.&quot;,&quot;keyword&quot;:&quot;clikview,video sharing, real content&quot;,&quot;page&quot;:&quot;create_article&quot;,&quot;url&quot;:&quot;https:\/\/clikview.com\/create_article&quot;,&quot;is_movie&quot;:false}" />
                        <div class="row">
                            <div class="col-md-1"></div>
                            <div class="col-md-10">
                                <div class="content pt_shadow">
                                    <div class="col-md-12">
                                        <div class="upload-head">
                                            <h4 class="edit-video-title"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M9.243 19H21v2H3v-4.243l9.9-9.9 4.242 4.244L9.242 19zm5.07-13.556l2.122-2.122a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414l-2.122 2.121-4.242-4.242z"></path></svg> Create new article</h4>
                                            <hr />
                                        </div>
                                        <div class="pt_forms_large_btns" id="upload-form">
                                            <form action="" class="form-horizontal pt_forms" id="create_article_form" method="POST">
                                                <div class="pp_mat_input">
                                                    <input id="title" name="title" type="text" placeholder=" " />
                                                    <label for="title">Title</label>
                                                </div>
                                                <div class="pp_mat_input">
                                                    <textarea name="description" id="description" cols="30" rows="5"></textarea>
                                                    <label for="description">Description</label>
                                                </div>
                                                <div class="pp_mat_input">
                                                    <textarea name="text" id="text" Style="display: none;" aria-hidden="true"></textarea>
                                                    <div role="application" class="tox tox-tinymce" aria-disabled="false" Style="visibility: hidden; height: 500px;">
                                                        <div class="tox-editor-container"><div data-alloy-vertical-dir="toptobottom" class="tox-editor-header">
                                                            <div role="menubar" data-alloy-tabstop="true" class="tox-menubar">
                                                                <button aria-haspopup="true" role="menuitem" type="button" data-alloy-tabstop="true" unselectable="on" tabindex="-1" class="tox-mbtn tox-mbtn--select" aria-expanded="false" Style="user-select: none;">
                                                                    <span class="tox-mbtn__select-label">File</span>
                                                                    <div class="tox-mbtn__select-chevron">
                                                                        <svg width="10" height="10"><path d="M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 010-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z" fill-rule="nonzero"></path></svg>
                                                                    </div>
                                                                </button>
                                                                <button aria-haspopup="true" role="menuitem" type="button" data-alloy-tabstop="true" unselectable="on" tabindex="-1" class="tox-mbtn tox-mbtn--select" aria-expanded="false" Style="user-select: none;">
                                                                    <span class="tox-mbtn__select-label">Edit</span>
                                                                    <div class="tox-mbtn__select-chevron"><svg width="10" height="10"><path d="M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 010-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z" fill-rule="nonzero">
                                                                    </path>
                                                                    </svg>
                                                                    </div>
                                                                </button>
                                                                <button aria-haspopup="true" role="menuitem" type="button" data-alloy-tabstop="true" unselectable="on" tabindex="-1" class="tox-mbtn tox-mbtn--select" aria-expanded="false" Style="user-select: none;"><span class="tox-mbtn__select-label">View</span><div class="tox-mbtn__select-chevron">
                                                                    <svg width="10" height="10"><path d="M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 010-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z" fill-rule="nonzero"></path></svg>
                                                                </div></button><button aria-haspopup="true" role="menuitem" type="button" data-alloy-tabstop="true" unselectable="on" tabindex="-1" class="tox-mbtn tox-mbtn--select" aria-expanded="false" Style="user-select: none;"><span class="tox-mbtn__select-label">Insert</span><div class="tox-mbtn__select-chevron">
                                                                    <svg width="10" height="10"><path d="M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 010-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z" fill-rule="nonzero"></path></svg>
                                                                </div></button><button aria-haspopup="true" role="menuitem" type="button" data-alloy-tabstop="true" unselectable="on" tabindex="-1" class="tox-mbtn tox-mbtn--select" aria-expanded="false" Style="user-select: none;"><span class="tox-mbtn__select-label">Format</span><div class="tox-mbtn__select-chevron">
                                                                    <svg width="10" height="10"><path d="M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 010-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z" fill-rule="nonzero"></path></svg>
                                                                </div></button><button aria-haspopup="true" role="menuitem" type="button" data-alloy-tabstop="true" unselectable="on" tabindex="-1" class="tox-mbtn tox-mbtn--select" aria-expanded="false" Style="user-select: none;"><span class="tox-mbtn__select-label">Tools</span><div class="tox-mbtn__select-chevron">
                                                                    <svg width="10" height="10"><path d="M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 010-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z" fill-rule="nonzero"></path></svg>
                                                                </div></button><button aria-haspopup="true" role="menuitem" type="button" data-alloy-tabstop="true" unselectable="on" tabindex="-1" class="tox-mbtn tox-mbtn--select" aria-expanded="false" Style="user-select: none;"><span class="tox-mbtn__select-label">Table</span><div class="tox-mbtn__select-chevron">
                                                                    <svg width="10" height="10">
                                                                        <path d="M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 010-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z" fill-rule="nonzero"></path></svg>
                                                                </div></button></div><div role="group" class="tox-toolbar-overlord" aria-disabled="false"><div role="group" class="tox-toolbar__primary"><div title="" role="toolbar" data-alloy-tabstop="true" tabindex="-1" class="tox-toolbar__group"><button aria-label="Undo" title="Undo" type="button" tabindex="-1" class="tox-tbtn tox-tbtn--disabled" aria-disabled="true"><span class="tox-icon tox-tbtn__icon-wrap"><svg width="24" height="24"><path d="M6.4 8H12c3.7 0 6.2 2 6.8 5.1.6 2.7-.4 5.6-2.3 6.8a1 1 0 01-1-1.8c1.1-.6 1.8-2.7 1.4-4.6-.5-2.1-2.1-3.5-4.9-3.5H6.4l3.3 3.3a1 1 0 11-1.4 1.4l-5-5a1 1 0 010-1.4l5-5a1 1 0 011.4 1.4L6.4 8z" fill-rule="nonzero"></path></svg>
                                                                </span></button><button aria-label="Redo" title="Redo" type="button" tabindex="-1" class="tox-tbtn tox-tbtn--disabled" aria-disabled="true"><span class="tox-icon tox-tbtn__icon-wrap"><svg width="24" height="24"><path d="M17.6 10H12c-2.8 0-4.4 1.4-4.9 3.5-.4 2 .3 4 1.4 4.6a1 1 0 11-1 1.8c-2-1.2-2.9-4.1-2.3-6.8.6-3 3-5.1 6.8-5.1h5.6l-3.3-3.3a1 1 0 111.4-1.4l5 5a1 1 0 010 1.4l-5 5a1 1 0 01-1.4-1.4l3.3-3.3z" fill-rule="nonzero"></path></svg>
                                                                </span></button></div><div title="" role="toolbar" data-alloy-tabstop="true" tabindex="-1" class="tox-toolbar__group"><button title="Formats" aria-label="Formats" aria-haspopup="true" type="button" unselectable="on" tabindex="-1" class="tox-tbtn tox-tbtn--select tox-tbtn--bespoke" aria-expanded="false" Style="user-select: none;"><span class="tox-tbtn__select-label">Paragraph</span><div class="tox-tbtn__select-chevron">
                                                                    <svg width="10" height="10"><path d="M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 010-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z" fill-rule="nonzero"></path></svg>
                                                                </div></button></div><div title="" role="toolbar" data-alloy-tabstop="true" tabindex="-1" class="tox-toolbar__group"><button aria-label="Bold" title="Bold" type="button" tabindex="-1" class="tox-tbtn" aria-disabled="false" aria-pressed="false"><span class="tox-icon tox-tbtn__icon-wrap">
                                                                    <svg width="24" height="24"><path d="M7.8 19c-.3 0-.5 0-.6-.2l-.2-.5V5.7c0-.2 0-.4.2-.5l.6-.2h5c1.5 0 2.7.3 3.5 1 .7.6 1.1 1.4 1.1 2.5a3 3 0 01-.6 1.9c-.4.6-1 1-1.6 1.2.4.1.9.3 1.3.6s.8.7 1 1.2c.4.4.5 1 .5 1.6 0 1.3-.4 2.3-1.3 3-.8.7-2.1 1-3.8 1H7.8zm5-8.3c.6 0 1.2-.1 1.6-.5.4-.3.6-.7.6-1.3 0-1.1-.8-1.7-2.3-1.7H9.3v3.5h3.4zm.5 6c.7 0 1.3-.1 1.7-.4.4-.4.6-.9.6-1.5s-.2-1-.7-1.4c-.4-.3-1-.4-2-.4H9.4v3.8h4z" fill-rule="evenodd"></path></svg>
                                                                </span></button><button aria-label="Italic" title="Italic" type="button" tabindex="-1" class="tox-tbtn" aria-disabled="false" aria-pressed="false"><span class="tox-icon tox-tbtn__icon-wrap">
                                                                    <svg width="24" height="24"><path d="M16.7 4.7l-.1.9h-.3c-.6 0-1 0-1.4.3-.3.3-.4.6-.5 1.1l-2.1 9.8v.6c0 .5.4.8 1.4.8h.2l-.2.8H8l.2-.8h.2c1.1 0 1.8-.5 2-1.5l2-9.8.1-.5c0-.6-.4-.8-1.4-.8h-.3l.2-.9h5.8z" fill-rule="evenodd"></path></svg>
                                                                </span></button></div><div title="" role="toolbar" data-alloy-tabstop="true" tabindex="-1" class="tox-toolbar__group"><button aria-label="Align left" title="Align left" type="button" tabindex="-1" class="tox-tbtn" aria-disabled="false" aria-pressed="false"><span class="tox-icon tox-tbtn__icon-wrap">
                                                                    <svg width="24" height="24"><path d="M5 5h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 110-2zm0 4h8c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 110-2zm0 8h8c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 010-2zm0-4h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 010-2z" fill-rule="evenodd"></path></svg>
                                                                </span></button><button aria-label="Align center" title="Align center" type="button" tabindex="-1" class="tox-tbtn" aria-disabled="false" aria-pressed="false"><span class="tox-icon tox-tbtn__icon-wrap">
                                                                    <svg width="24" height="24"><path d="M5 5h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 110-2zm3 4h8c.6 0 1 .4 1 1s-.4 1-1 1H8a1 1 0 110-2zm0 8h8c.6 0 1 .4 1 1s-.4 1-1 1H8a1 1 0 010-2zm-3-4h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 010-2z" fill-rule="evenodd"></path></svg>
                                                                </span></button><button aria-label="Align right" title="Align right" type="button" tabindex="-1" class="tox-tbtn" aria-disabled="false" aria-pressed="false"><span class="tox-icon tox-tbtn__icon-wrap">
                                                                    <svg width="24" height="24"><path d="M5 5h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 110-2zm6 4h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zm0 8h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zm-6-4h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 010-2z" fill-rule="evenodd"></path></svg>
                                                                </span></button><button aria-label="Justify" title="Justify" type="button" tabindex="-1" class="tox-tbtn" aria-disabled="false" aria-pressed="false"><span class="tox-icon tox-tbtn__icon-wrap">
                                                                    <svg width="24" height="24"><path d="M5 5h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 110-2zm0 4h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 110-2zm0 4h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 010-2zm0 4h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 010-2z" fill-rule="evenodd"></path></svg>
                                                                </span></button></div><div title="" role="toolbar" data-alloy-tabstop="true" tabindex="-1" class="tox-toolbar__group"><div aria-pressed="false" aria-label="Bullet list" title="Bullet list" role="button" aria-haspopup="true" unselectable="on" tabindex="-1" class="tox-split-button" aria-expanded="false" aria-describedby="aria_1629084972021670240737399" Style="user-select: none;"><span role="presentation" tabindex="-1" class="tox-tbtn" ><span class="tox-icon tox-tbtn__icon-wrap">
                                                                    <svg width="24" height="24"><path d="M11 5h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zm0 6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zm0 6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zM4.5 6c0-.4.1-.8.4-1 .3-.4.7-.5 1.1-.5.4 0 .8.1 1 .4.4.3.5.7.5 1.1 0 .4-.1.8-.4 1-.3.4-.7.5-1.1.5-.4 0-.8-.1-1-.4-.4-.3-.5-.7-.5-1.1zm0 6c0-.4.1-.8.4-1 .3-.4.7-.5 1.1-.5.4 0 .8.1 1 .4.4.3.5.7.5 1.1 0 .4-.1.8-.4 1-.3.4-.7.5-1.1.5-.4 0-.8-.1-1-.4-.4-.3-.5-.7-.5-1.1zm0 6c0-.4.1-.8.4-1 .3-.4.7-.5 1.1-.5.4 0 .8.1 1 .4.4.3.5.7.5 1.1 0 .4-.1.8-.4 1-.3.4-.7.5-1.1.5-.4 0-.8-.1-1-.4-.4-.3-.5-.7-.5-1.1z" fill-rule="evenodd"></path></svg>
                                                                </span></span><span role="presentation" tabindex="-1" class="tox-tbtn tox-split-button__chevron" >
                                                                        <svg width="10" height="10"><path d="M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 010-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z" fill-rule="nonzero"></path></svg>
                                                                    </span><span aria-hidden="true" id="aria_1629084972021670240737399" Style="display: none;">To open the popup, press Shift+Enter</span></div><div aria-pressed="false" aria-label="Numbered list" title="Numbered list" role="button" aria-haspopup="true" unselectable="on" tabindex="-1" class="tox-split-button" aria-expanded="false" aria-describedby="aria_5646123302041670240737400" Style="user-select: none;"><span role="presentation" tabindex="-1" class="tox-tbtn" ><span class="tox-icon tox-tbtn__icon-wrap">
                                                                        <svg width="24" height="24"><path d="M10 17h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zm0-6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zm0-6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 110-2zM6 4v3.5c0 .3-.2.5-.5.5a.5.5 0 01-.5-.5V5h-.5a.5.5 0 010-1H6zm-1 8.8l.2.2h1.3c.3 0 .5.2.5.5s-.2.5-.5.5H4.9a1 1 0 01-.9-1V13c0-.4.3-.8.6-1l1.2-.4.2-.3a.2.2 0 00-.2-.2H4.5a.5.5 0 01-.5-.5c0-.3.2-.5.5-.5h1.6c.5 0 .9.4.9 1v.1c0 .4-.3.8-.6 1l-1.2.4-.2.3zM7 17v2c0 .6-.4 1-1 1H4.5a.5.5 0 010-1h1.2c.2 0 .3-.1.3-.3 0-.2-.1-.3-.3-.3H4.4a.4.4 0 110-.8h1.3c.2 0 .3-.1.3-.3 0-.2-.1-.3-.3-.3H4.5a.5.5 0 110-1H6c.6 0 1 .4 1 1z" fill-rule="evenodd"></path></svg>
                                                                    </span></span><span role="presentation" tabindex="-1" class="tox-tbtn tox-split-button__chevron" ><svg width="10" height="10"><path d="M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 010-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z" fill-rule="nonzero"></path></svg>
                                                                            </span><span aria-hidden="true" id="aria_5646123302041670240737400" Style="display: none;">To open the popup, press Shift+Enter</span></div><button aria-label="Decrease indent" title="Decrease indent" type="button" tabindex="-1" class="tox-tbtn tox-tbtn--disabled" aria-disabled="true"><span class="tox-icon tox-tbtn__icon-wrap">
                                                                                <svg width="24" height="24"><path d="M7 5h12c.6 0 1 .4 1 1s-.4 1-1 1H7a1 1 0 110-2zm5 4h7c.6 0 1 .4 1 1s-.4 1-1 1h-7a1 1 0 010-2zm0 4h7c.6 0 1 .4 1 1s-.4 1-1 1h-7a1 1 0 010-2zm-5 4h12a1 1 0 010 2H7a1 1 0 010-2zm1.6-3.8a1 1 0 01-1.2 1.6l-3-2a1 1 0 010-1.6l3-2a1 1 0 011.2 1.6L6.8 12l1.8 1.2z" fill-rule="evenodd"></path></svg>
                                                                            </span></button><button aria-label="Increase indent" title="Increase indent" type="button" tabindex="-1" class="tox-tbtn" aria-disabled="false"><span class="tox-icon tox-tbtn__icon-wrap"><svg width="24" height="24"><path d="M7 5h12c.6 0 1 .4 1 1s-.4 1-1 1H7a1 1 0 110-2zm5 4h7c.6 0 1 .4 1 1s-.4 1-1 1h-7a1 1 0 010-2zm0 4h7c.6 0 1 .4 1 1s-.4 1-1 1h-7a1 1 0 010-2zm-5 4h12a1 1 0 010 2H7a1 1 0 010-2zm-2.6-3.8L6.2 12l-1.8-1.2a1 1 0 011.2-1.6l3 2a1 1 0 010 1.6l-3 2a1 1 0 11-1.2-1.6z" fill-rule="evenodd"></path></svg>
                                                                            </span></button></div><div title="" role="toolbar" data-alloy-tabstop="true" tabindex="-1" class="tox-toolbar__group"><button aria-label="Insert/edit link" title="Insert/edit link" type="button" tabindex="-1" class="tox-tbtn" aria-disabled="false" aria-pressed="false"><span class="tox-icon tox-tbtn__icon-wrap">
                                                                                <svg width="24" height="24"><path d="M6.2 12.3a1 1 0 011.4 1.4l-2.1 2a2 2 0 102.7 2.8l4.8-4.8a1 1 0 000-1.4 1 1 0 111.4-1.3 2.9 2.9 0 010 4L9.6 20a3.9 3.9 0 01-5.5-5.5l2-2zm11.6-.6a1 1 0 01-1.4-1.4l2-2a2 2 0 10-2.6-2.8L11 10.3a1 1 0 000 1.4A1 1 0 119.6 13a2.9 2.9 0 010-4L14.4 4a3.9 3.9 0 015.5 5.5l-2 2z" fill-rule="nonzero"></path></svg>
                                                                            </span></button><button aria-label="Insert/edit image" title="Insert/edit image" type="button" tabindex="-1" class="tox-tbtn" aria-disabled="false" aria-pressed="false"><span class="tox-icon tox-tbtn__icon-wrap"><svg width="24" height="24"><path d="M5 15.7l3.3-3.2c.3-.3.7-.3 1 0L12 15l4.1-4c.3-.4.8-.4 1 0l2 1.9V5H5v10.7zM5 18V19h3l2.8-2.9-2-2L5 17.9zm14-3l-2.5-2.4-6.4 6.5H19v-4zM4 3h16c.6 0 1 .4 1 1v16c0 .6-.4 1-1 1H4a1 1 0 01-1-1V4c0-.6.4-1 1-1zm6 8a2 2 0 100-4 2 2 0 000 4z" fill-rule="nonzero"></path></svg>
                                                                            </span></button></div><div title="" role="toolbar" data-alloy-tabstop="true" tabindex="-1" class="tox-toolbar__group"><button aria-label="Preview" title="Preview" type="button" tabindex="-1" class="tox-tbtn" aria-disabled="false"><span class="tox-icon tox-tbtn__icon-wrap"><svg width="24" height="24"><path d="M3.5 12.5c.5.8 1.1 1.6 1.8 2.3 2 2 4.2 3.2 6.7 3.2s4.7-1.2 6.7-3.2a16.2 16.2 0 002.1-2.8 15.7 15.7 0 00-2.1-2.8c-2-2-4.2-3.2-6.7-3.2a9.3 9.3 0 00-6.7 3.2A16.2 16.2 0 003.2 12c0 .2.2.3.3.5zm-2.4-1l.7-1.2L4 7.8C6.2 5.4 8.9 4 12 4c3 0 5.8 1.4 8.1 3.8a18.2 18.2 0 012.8 3.7v1l-.7 1.2-2.1 2.5c-2.3 2.4-5 3.8-8.1 3.8-3 0-5.8-1.4-8.1-3.8a18.2 18.2 0 01-2.8-3.7 1 1 0 010-1zm12-3.3a2 2 0 102.7 2.6 4 4 0 11-2.6-2.6z" fill-rule="nonzero"></path></svg>
                                                                            </span></button><button aria-label="Insert/edit media" title="Insert/edit media" type="button" tabindex="-1" class="tox-tbtn" aria-disabled="false" aria-pressed="false"><span class="tox-icon tox-tbtn__icon-wrap"><svg width="24" height="24"><path d="M4 3h16c.6 0 1 .4 1 1v16c0 .6-.4 1-1 1H4a1 1 0 01-1-1V4c0-.6.4-1 1-1zm1 2v14h14V5H5zm4.8 2.6l5.6 4a.5.5 0 010 .8l-5.6 4A.5.5 0 019 16V8a.5.5 0 01.8-.4z" fill-rule="nonzero"></path></svg>
                                                                            </span></button></div><div role="toolbar" data-alloy-tabstop="true" tabindex="-1" class="tox-toolbar__group"><button title="More..." aria-haspopup="true" type="button" data-alloy-tabstop="true" tabindex="-1" class="tox-tbtn" aria-expanded="false"><span class="tox-icon tox-tbtn__icon-wrap"><svg width="24" height="24"><path d="M6 10a2 2 0 00-2 2c0 1.1.9 2 2 2a2 2 0 002-2 2 2 0 00-2-2zm12 0a2 2 0 00-2 2c0 1.1.9 2 2 2a2 2 0 002-2 2 2 0 00-2-2zm-6 0a2 2 0 00-2 2c0 1.1.9 2 2 2a2 2 0 002-2 2 2 0 00-2-2z" fill-rule="nonzero"></path></svg></span></button></div></div></div><div class="tox-anchorbar"></div></div><div class="tox-sidebar-wrap"><div class="tox-edit-area"><iframe id="text_ifr" frameborder="0" allowtransparency="true" title="Rich Text Area. Press ALT-0 for help." class="tox-edit-area__iframe"></iframe></div><div role="complementary" class="tox-sidebar"><div data-alloy-tabstop="true" tabindex="-1" class="tox-sidebar__slider tox-sidebar--sliding-closed" Style="width: 0px;"><div class="tox-sidebar__pane-container"></div></div></div></div></div><div class="tox-statusbar"><div class="tox-statusbar__text-container"><div role="navigation" data-alloy-tabstop="true" class="tox-statusbar__path" ><div role="button" data-index="0" tab-index="-1" tabindex="-1" class="tox-statusbar__path-item" >p</div></div><button type="button" data-alloy-tabstop="true" tabindex="-1" class="tox-statusbar__wordcount">0 words</button><span class="tox-statusbar__branding"><a href="https://www.tiny.cloud/?utm_campaign=editor_referral&amp;utm_medium=poweredby&amp;utm_source=tinymce&amp;utm_content=v5" rel="noopener" tabindex="-1" aria-label="Powered by Tiny">Powered by Tiny</a></span></div><div title="Resize" aria-hidden="true" class="tox-statusbar__resize-handle"><svg width="10" height="10"><g fill-rule="nonzero"><path d="M8.1 1.1A.5.5 0 119 2l-7 7A.5.5 0 111 8l7-7zM8.1 5.1A.5.5 0 119 6l-3 3A.5.5 0 115 8l3-3z"></path></g></svg></div></div><div aria-hidden="true" class="tox-throbber" Style="display: none;"></div></div>
                                                    <label for="text" Style="z-index: 1;">The article</label>
                                                </div>
                                                <div class="pp_mat_input">
                                                    <div class="dropdown bootstrap-select show-menu-arrow"><select class="selectpicker show-menu-arrow" name="category" id="category" tabindex="-98">
                                                        <option value="" disabled="">Category</option>
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
                                                    </select>
                                                        <button type="button" class="btn dropdown-toggle btn-default" data-toggle="dropdown" data-id="category" title="Film &amp; Animation"><div class="filter-option"><div class="filter-option-inner"><div class="filter-option-inner-inner">Film &amp; Animation</div></div> </div><span class="bs-caret"><span class="caret"></span></span></button><div class="dropdown-menu open" ><div class="inner open" role="listbox" aria-expanded="false" tabindex="-1"><ul class="dropdown-menu inner "></ul></div></div></div>
                                                </div>
                                                <div class="pp_mat_input">
                                                    <input id="mySingleFieldTags" name="tags" type="text" placeholder=" " Style="display: none;" /><ul class="tagit ui-widget ui-widget-content ui-corner-all"><li class="tagit-new"><input type="text" class="ui-widget-content ui-autocomplete-input" autocomplete="off" /></li></ul>
                                                    <label for="tags">Tags</label>
                                                </div>
                                                <div class="pp_mat_input">
                                                    <div class="article_image_renderer" id="image-renderer" onclick="document.getElementById('thumbnail').click(); return false">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M21 15v3h3v2h-3v3h-2v-3h-3v-2h3v-3h2zm.008-12c.548 0 .992.445.992.993v9.349A5.99 5.99 0 0 0 20 13V5H4l.001 14 9.292-9.293a.999.999 0 0 1 1.32-.084l.093.085 3.546 3.55a6.003 6.003 0 0 0-3.91 7.743L2.992 21A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3h18.016zM8 7a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"></path></svg> Browse To Upload Thumbnail
                                                    </div>
                                                    <input id="thumbnail" name="image" type="file" class="hidden" accept="image/*" />
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
                                                    <button type="submit" id="submit-btn" class="btn btn-main setting-panel-mdbtn"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> Publish</button>
                                                </div>
                                            </form>
                                        </div>
                                        <div class="clear"></div>
                                    </div>
                                    <div class="clear"></div>
                                </div>
                            </div>
                            <div class="col-md-1"></div>
                        </div>

                        {/* <script src="https://clikview.com/themes/youplay/js/tinymce/js/tinymce/tinymce.min.js"></script>
<script>
	tinymce.init({
          selector: '#text',  // change this value according to your HTML
          auto_focus: 'element1',
          relative_urls: false,
          remove_script_host: false,
          height:500,
          toolbar: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image  uploadImages |  preview media fullpage | forecolor backcolor emoticons',
          plugins: [
              'advlist autolink link image  lists charmap  preview hr anchor pagebreak spellchecker',
              'searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking',
              'save table contextmenu directionality emoticons template paste textcolor'
          ]
        });
$('.selectpicker').selectpicker({});

$(document).ready(function() {
	$("#thumbnail").on('change', function() {
		$("#image-renderer").html("<img src='" + window.URL.createObjectURL(this.files[0]) + "' alt='Picture'>");
	});
});

$(function () {
	var bar         = $('.bar');
    var percent     = $('.percent');
    var prcsvdo      = $('.pt_prcs_vdo');
	$("#mySingleFieldTags").tagit({
		allowSpaces: true
	});

	$('#create_article_form').ajaxForm({
	    url: 'https://clikview.com/aj/articles/new-article?hash=' + $('.main_session').val(),
	    beforeSend: function() {
	    	$('#submit-btn').attr('disabled', true);
	    	$('#submit-btn').val("Please wait..");
	    	$('.progress').removeClass('hidden');
            var percentVal = '0%';
            bar.width(percentVal);
            percent.html(percentVal);
	    },
        uploadProgress: function(event, position, total, percentComplete) {
             if(percentComplete > 50) {
                percent.addClass('white');
             }
            var percentVal = percentComplete + '%';
            bar.width(percentVal);
            percent.html(percentVal);

            if (percentComplete == 100) {
               prcsvdo.html('<svg width="30" height="10" viewBox="0 0 120 30" xmlns="http://www.w3.org/2000/svg" fill="#000"><circle cx="15" cy="15" r="15"><animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite" ></animate><animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite" ></animate></circle><circle cx="60" cy="15" r="9" fill-opacity="0.3"><animate attributeName="r" from="9" to="9" begin="0s" dur="0.8s" values="9;15;9" calcMode="linear" repeatCount="indefinite" ></animate><animate attributeName="fill-opacity" from="0.5" to="0.5" begin="0s" dur="0.8s" values=".5;1;.5" calcMode="linear" repeatCount="indefinite" ></animate></circle><circle cx="105" cy="15" r="15"><animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite" ></animate><animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite" ></animate></circle></svg> Processing - this may take a few minutes');
               $('.progress').find('.bar').removeClass('upload-progress-bar');
            }
        },
	    success: function(data) {
	    	percentVal = '0%';
            bar.width(percentVal);
            $('.progress').addClass('hidden');
	    	if (data.status == 200) {
	    		Snackbar.show({text: "<div>Thank you, your article has been submitted, and it's being reviewed, please check back later.</div>"});
	    		setTimeout(function () {
	    			window.location.href = data.link;
	    		},3000)
	    	} 
	        else {
	    		$('#submit-btn').attr('disabled', false);
	    	    $('#submit-btn').val("Publish");
				Snackbar.show({text: "<div>"+ data.message +"</div>"});
	    	}
	    }
	});
});

</script> */}
                    </div>
                    <input type="hidden" id="main-url" value="https://clikview.com%2Fhistory" />
                    <div class="ads-placment" id="footer_ad_"></div>
                </div>
            </div>
        </div>
    )
}

export default CreateArticle