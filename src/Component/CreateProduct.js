import React from 'react'
import MobileSearch from './MobileSearch';

function CreateProduct(props) {
	const { searchOpen, expandNav } = props;
	return (
		<div>
			<div className={expandNav ? "main-container shrinkWidth bodyfixed" : "main-container expandWidth"} Style="z-index:-1">
				<div id="main-container" class="main-content  container" data-logged="true">
					{searchOpen ? <MobileSearch /> : ""}
					<div class="ads-placment" id="header_ad_"></div>
					<div class="announcement-renderer">

					</div>
					<div id="container_content"><input type="hidden" id="json-data" value="{&quot;title&quot;:&quot;Create a Store | ClikView - Real Content For You&quot;,&quot;description&quot;:&quot;Clikview is a Video Sharing Platform, Clikview is the best way to start your own video sharing channel! Real Content for you.&quot;,&quot;keyword&quot;:&quot;clikview,video sharing, real content&quot;,&quot;page&quot;:&quot;store.create&quot;,&quot;url&quot;:&quot;https:\/\/clikview.com\/store.create&quot;,&quot;is_movie&quot;:false}" />

						<div class="row store_create">
							<div class="col-md-1"></div>
							<div class="col-md-10">
								<div class="content pt_shadow">
									<div class="col-md-12">
										<div class="upload-head">
											<h4 class="edit-video-title">
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
													<path fill="none" d="M0 0h24v24H0z"></path>
													<path fill="currentColor" d="M9.243 19H21v2H3v-4.243l9.9-9.9 4.242 4.244L9.242 19zm5.07-13.556l2.122-2.122a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414l-2.122 2.121-4.242-4.242z"></path>
												</svg>
												Create Product					</h4>
											<hr />
										</div>
										<div class="pt_forms_large_btns" id="upload-form">
											<form action="" class="form-horizontal pt_forms" id="create_item" method="POST">
												<div class="pp_mat_input">
													<input id="title" name="title" type="text" placeholder=" " />
													<label for="title">Product Title</label>
												</div>
												<div class="pp_mat_input">
													<textarea name="store_details" id="text" Style="display: none;" aria-hidden="true"></textarea>
													<div role="application" class="tox tox-tinymce" Style="visibility: hidden; height: 500px;">
														<div class="tox-editor-container">
															<div data-alloy-vertical-dir="toptobottom" class="tox-editor-header">
																<div role="menubar" data-alloy-tabstop="true" class="tox-menubar">
																	<button aria-haspopup="true" role="menuitem" type="button" data-alloy-tabstop="true" unselectable="on" tabindex="-1" class="tox-mbtn tox-mbtn--select" aria-expanded="false" Style="user-select: none;">
																		<span class="tox-mbtn__select-label">File</span>
																		<div class="tox-mbtn__select-chevron">
																			<svg width="10" height="10">
																				<path d="M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 010-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z" fill-rule="nonzero"></path>
																			</svg>
																		</div>
																	</button>
																	<button aria-haspopup="true" role="menuitem" type="button" data-alloy-tabstop="true" unselectable="on" tabindex="-1" class="tox-mbtn tox-mbtn--select" aria-expanded="false" Style="user-select: none;">
																		<span class="tox-mbtn__select-label">Edit</span>
																		<div class="tox-mbtn__select-chevron">
																			<svg width="10" height="10">
																				<path d="M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 010-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z" fill-rule="nonzero"></path>
																			</svg>
																		</div>
																	</button>
																	<button aria-haspopup="true" role="menuitem" type="button" data-alloy-tabstop="true" unselectable="on" tabindex="-1" class="tox-mbtn tox-mbtn--select" aria-expanded="false" Style="user-select: none;">
																		<span class="tox-mbtn__select-label">View</span>
																		<div class="tox-mbtn__select-chevron">
																			<svg width="10" height="10">
																				<path d="M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 010-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z" fill-rule="nonzero"></path>
																			</svg>
																		</div>
																	</button>
																	<button aria-haspopup="true" role="menuitem" type="button" data-alloy-tabstop="true" unselectable="on" tabindex="-1" class="tox-mbtn tox-mbtn--select" aria-expanded="false" Style="user-select: none;">
																		<span class="tox-mbtn__select-label">Insert</span>
																		<div class="tox-mbtn__select-chevron">
																			<svg width="10" height="10">
																				<path d="M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 010-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z" fill-rule="nonzero">
																				</path>
																			</svg>
																		</div>
																	</button>
																	<button aria-haspopup="true" role="menuitem" type="button" data-alloy-tabstop="true" unselectable="on" tabindex="-1" class="tox-mbtn tox-mbtn--select" aria-expanded="false" Style="user-select: none;"><span class="tox-mbtn__select-label">Format</span><div class="tox-mbtn__select-chevron"><svg width="10" height="10"><path d="M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 010-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z" fill-rule="nonzero"></path></svg></div></button>
																	<button aria-haspopup="true" role="menuitem" type="button" data-alloy-tabstop="true" unselectable="on" tabindex="-1" class="tox-mbtn tox-mbtn--select" aria-expanded="false" Style="user-select: none;"><span class="tox-mbtn__select-label">Tools</span><div class="tox-mbtn__select-chevron"><svg width="10" height="10"><path d="M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 010-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z" fill-rule="nonzero"></path></svg></div></button>
																	<button aria-haspopup="true" role="menuitem" type="button" data-alloy-tabstop="true" unselectable="on" tabindex="-1" class="tox-mbtn tox-mbtn--select" aria-expanded="false" Style="user-select: none;"><span class="tox-mbtn__select-label">Table</span><div class="tox-mbtn__select-chevron"><svg width="10" height="10"><path d="M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 010-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z" fill-rule="nonzero"></path></svg></div></button>
																</div>
																<div role="group" class="tox-toolbar-overlord" ><div role="group" class="tox-toolbar__primary">
																	<div title="" role="toolbar" data-alloy-tabstop="true" tabindex="-1" class="tox-toolbar__group">
																		<button aria-label="Undo" title="Undo" type="button" tabindex="-1" class="tox-tbtn tox-tbtn--disabled" ><span class="tox-icon tox-tbtn__icon-wrap"><svg width="24" height="24"><path d="M6.4 8H12c3.7 0 6.2 2 6.8 5.1.6 2.7-.4 5.6-2.3 6.8a1 1 0 01-1-1.8c1.1-.6 1.8-2.7 1.4-4.6-.5-2.1-2.1-3.5-4.9-3.5H6.4l3.3 3.3a1 1 0 11-1.4 1.4l-5-5a1 1 0 010-1.4l5-5a1 1 0 011.4 1.4L6.4 8z" fill-rule="nonzero"></path></svg></span></button>
																		<button aria-label="Redo" title="Redo" type="button" tabindex="-1" class="tox-tbtn tox-tbtn--disabled" ><span class="tox-icon tox-tbtn__icon-wrap"><svg width="24" height="24"><path d="M17.6 10H12c-2.8 0-4.4 1.4-4.9 3.5-.4 2 .3 4 1.4 4.6a1 1 0 11-1 1.8c-2-1.2-2.9-4.1-2.3-6.8.6-3 3-5.1 6.8-5.1h5.6l-3.3-3.3a1 1 0 111.4-1.4l5 5a1 1 0 010 1.4l-5 5a1 1 0 01-1.4-1.4l3.3-3.3z" fill-rule="nonzero"></path></svg></span></button>
																	</div><div title="" role="toolbar" data-alloy-tabstop="true" tabindex="-1" class="tox-toolbar__group">
																		<button title="Formats" aria-label="Formats" aria-haspopup="true" type="button" unselectable="on" tabindex="-1" class="tox-tbtn tox-tbtn--select tox-tbtn--bespoke" aria-expanded="false" Style="user-select: none;"><span class="tox-tbtn__select-label">Paragraph</span><div class="tox-tbtn__select-chevron"><svg width="10" height="10"><path d="M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 010-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z" fill-rule="nonzero"></path></svg></div></button>
																	</div><div title="" role="toolbar" data-alloy-tabstop="true" tabindex="-1" class="tox-toolbar__group">
																		<button aria-label="Bold" title="Bold" type="button" tabindex="-1" class="tox-tbtn"  aria-pressed="false"><span class="tox-icon tox-tbtn__icon-wrap"><svg width="24" height="24"><path d="M7.8 19c-.3 0-.5 0-.6-.2l-.2-.5V5.7c0-.2 0-.4.2-.5l.6-.2h5c1.5 0 2.7.3 3.5 1 .7.6 1.1 1.4 1.1 2.5a3 3 0 01-.6 1.9c-.4.6-1 1-1.6 1.2.4.1.9.3 1.3.6s.8.7 1 1.2c.4.4.5 1 .5 1.6 0 1.3-.4 2.3-1.3 3-.8.7-2.1 1-3.8 1H7.8zm5-8.3c.6 0 1.2-.1 1.6-.5.4-.3.6-.7.6-1.3 0-1.1-.8-1.7-2.3-1.7H9.3v3.5h3.4zm.5 6c.7 0 1.3-.1 1.7-.4.4-.4.6-.9.6-1.5s-.2-1-.7-1.4c-.4-.3-1-.4-2-.4H9.4v3.8h4z" fill-rule="evenodd"></path></svg></span></button>
																		<button aria-label="Italic" title="Italic" type="button" tabindex="-1" class="tox-tbtn"  aria-pressed="false"><span class="tox-icon tox-tbtn__icon-wrap"><svg width="24" height="24"><path d="M16.7 4.7l-.1.9h-.3c-.6 0-1 0-1.4.3-.3.3-.4.6-.5 1.1l-2.1 9.8v.6c0 .5.4.8 1.4.8h.2l-.2.8H8l.2-.8h.2c1.1 0 1.8-.5 2-1.5l2-9.8.1-.5c0-.6-.4-.8-1.4-.8h-.3l.2-.9h5.8z" fill-rule="evenodd"></path></svg></span></button>
																	</div><div title="" role="toolbar" data-alloy-tabstop="true" tabindex="-1" class="tox-toolbar__group"><button aria-label="Align left" title="Align left" type="button" tabindex="-1" class="tox-tbtn"  aria-pressed="false"><span class="tox-icon tox-tbtn__icon-wrap"><svg width="24" height="24"><path d="M5 5h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 110-2zm0 4h8c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 110-2zm0 8h8c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 010-2zm0-4h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 010-2z" fill-rule="evenodd"></path></svg></span></button><button aria-label="Align center" title="Align center" type="button" tabindex="-1" class="tox-tbtn"  aria-pressed="false"><span class="tox-icon tox-tbtn__icon-wrap"><svg width="24" height="24"><path d="M5 5h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 110-2zm3 4h8c.6 0 1 .4 1 1s-.4 1-1 1H8a1 1 0 110-2zm0 8h8c.6 0 1 .4 1 1s-.4 1-1 1H8a1 1 0 010-2zm-3-4h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 010-2z" fill-rule="evenodd"></path></svg></span></button><button aria-label="Align right" title="Align right" type="button" tabindex="-1" class="tox-tbtn"  aria-pressed="false"><span class="tox-icon tox-tbtn__icon-wrap"><svg width="24" height="24"><path d="M5 5h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 110-2zm6 4h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zm0 8h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zm-6-4h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 010-2z" fill-rule="evenodd"></path></svg></span></button><button aria-label="Justify" title="Justify" type="button" tabindex="-1" class="tox-tbtn" aria-pressed="false"><span class="tox-icon tox-tbtn__icon-wrap"><svg width="24" height="24"><path d="M5 5h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 110-2zm0 4h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 110-2zm0 4h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 010-2zm0 4h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 010-2z" fill-rule="evenodd"></path></svg></span></button></div><div title="" role="toolbar" data-alloy-tabstop="true" tabindex="-1" class="tox-toolbar__group"><div aria-pressed="false" aria-label="Bullet list" title="Bullet list" role="button" aria-haspopup="true" unselectable="on" tabindex="-1" class="tox-split-button"  aria-expanded="false" aria-describedby="aria_8684087602021670289854842" Style="user-select: none;"><span role="presentation" tabindex="-1" class="tox-tbtn" ><span class="tox-icon tox-tbtn__icon-wrap"><svg width="24" height="24">
																		<path d="M11 5h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zm0 6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zm0 6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zM4.5 6c0-.4.1-.8.4-1 .3-.4.7-.5 1.1-.5.4 0 .8.1 1 .4.4.3.5.7.5 1.1 0 .4-.1.8-.4 1-.3.4-.7.5-1.1.5-.4 0-.8-.1-1-.4-.4-.3-.5-.7-.5-1.1zm0 6c0-.4.1-.8.4-1 .3-.4.7-.5 1.1-.5.4 0 .8.1 1 .4.4.3.5.7.5 1.1 0 .4-.1.8-.4 1-.3.4-.7.5-1.1.5-.4 0-.8-.1-1-.4-.4-.3-.5-.7-.5-1.1zm0 6c0-.4.1-.8.4-1 .3-.4.7-.5 1.1-.5.4 0 .8.1 1 .4.4.3.5.7.5 1.1 0 .4-.1.8-.4 1-.3.4-.7.5-1.1.5-.4 0-.8-.1-1-.4-.4-.3-.5-.7-.5-1.1z" fill-rule="evenodd"></path>
																	</svg></span></span>
																		<span role="presentation" tabindex="-1" class="tox-tbtn tox-split-button__chevron" ><svg width="10" height="10"><path d="M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 010-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z" fill-rule="nonzero"></path></svg></span>
																		<span aria-hidden="true" id="aria_8684087602021670289854842" Style="display: none;">To open the popup, press Shift+Enter</span>
																	</div><div aria-pressed="false" aria-label="Numbered list" title="Numbered list" role="button" aria-haspopup="true" unselectable="on" tabindex="-1" class="tox-split-button" aria-expanded="false" aria-describedby="aria_5756685232041670289854843" Style="user-select: none;"><span role="presentation" tabindex="-1" class="tox-tbtn" >
																		<span class="tox-icon tox-tbtn__icon-wrap"><svg width="24" height="24"><path d="M10 17h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zm0-6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zm0-6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 110-2zM6 4v3.5c0 .3-.2.5-.5.5a.5.5 0 01-.5-.5V5h-.5a.5.5 0 010-1H6zm-1 8.8l.2.2h1.3c.3 0 .5.2.5.5s-.2.5-.5.5H4.9a1 1 0 01-.9-1V13c0-.4.3-.8.6-1l1.2-.4.2-.3a.2.2 0 00-.2-.2H4.5a.5.5 0 01-.5-.5c0-.3.2-.5.5-.5h1.6c.5 0 .9.4.9 1v.1c0 .4-.3.8-.6 1l-1.2.4-.2.3zM7 17v2c0 .6-.4 1-1 1H4.5a.5.5 0 010-1h1.2c.2 0 .3-.1.3-.3 0-.2-.1-.3-.3-.3H4.4a.4.4 0 110-.8h1.3c.2 0 .3-.1.3-.3 0-.2-.1-.3-.3-.3H4.5a.5.5 0 110-1H6c.6 0 1 .4 1 1z" fill-rule="evenodd"></path>
																		</svg></span></span>
																			<span role="presentation" tabindex="-1" class="tox-tbtn tox-split-button__chevron" ><svg width="10" height="10"><path d="M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 010-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z" fill-rule="nonzero"></path></svg></span>
																			<span aria-hidden="true" id="aria_5756685232041670289854843" Style="display: none;">To open the popup, press Shift+Enter</span></div><button aria-label="Decrease indent" title="Decrease indent" type="button" tabindex="-1" class="tox-tbtn tox-tbtn--disabled" ><span class="tox-icon tox-tbtn__icon-wrap"><svg width="24" height="24"><path d="M7 5h12c.6 0 1 .4 1 1s-.4 1-1 1H7a1 1 0 110-2zm5 4h7c.6 0 1 .4 1 1s-.4 1-1 1h-7a1 1 0 010-2zm0 4h7c.6 0 1 .4 1 1s-.4 1-1 1h-7a1 1 0 010-2zm-5 4h12a1 1 0 010 2H7a1 1 0 010-2zm1.6-3.8a1 1 0 01-1.2 1.6l-3-2a1 1 0 010-1.6l3-2a1 1 0 011.2 1.6L6.8 12l1.8 1.2z" fill-rule="evenodd"></path></svg></span>
																		</button><button aria-label="Increase indent" title="Increase indent" type="button" tabindex="-1" class="tox-tbtn" ><span class="tox-icon tox-tbtn__icon-wrap"><svg width="24" height="24"><path d="M7 5h12c.6 0 1 .4 1 1s-.4 1-1 1H7a1 1 0 110-2zm5 4h7c.6 0 1 .4 1 1s-.4 1-1 1h-7a1 1 0 010-2zm0 4h7c.6 0 1 .4 1 1s-.4 1-1 1h-7a1 1 0 010-2zm-5 4h12a1 1 0 010 2H7a1 1 0 010-2zm-2.6-3.8L6.2 12l-1.8-1.2a1 1 0 011.2-1.6l3 2a1 1 0 010 1.6l-3 2a1 1 0 11-1.2-1.6z" fill-rule="evenodd"></path></svg></span></button>
																	</div><div title="" role="toolbar" data-alloy-tabstop="true" tabindex="-1" class="tox-toolbar__group">
																		<button aria-label="Insert/edit link" title="Insert/edit link" type="button" tabindex="-1" class="tox-tbtn" aria-pressed="false"><span class="tox-icon tox-tbtn__icon-wrap"><svg width="24" height="24"><path d="M6.2 12.3a1 1 0 011.4 1.4l-2.1 2a2 2 0 102.7 2.8l4.8-4.8a1 1 0 000-1.4 1 1 0 111.4-1.3 2.9 2.9 0 010 4L9.6 20a3.9 3.9 0 01-5.5-5.5l2-2zm11.6-.6a1 1 0 01-1.4-1.4l2-2a2 2 0 10-2.6-2.8L11 10.3a1 1 0 000 1.4A1 1 0 119.6 13a2.9 2.9 0 010-4L14.4 4a3.9 3.9 0 015.5 5.5l-2 2z" fill-rule="nonzero"></path></svg></span></button>
																		<button aria-label="Insert/edit image" title="Insert/edit image" type="button" tabindex="-1" class="tox-tbtn" aria-pressed="false"><span class="tox-icon tox-tbtn__icon-wrap"><svg width="24" height="24"><path d="M5 15.7l3.3-3.2c.3-.3.7-.3 1 0L12 15l4.1-4c.3-.4.8-.4 1 0l2 1.9V5H5v10.7zM5 18V19h3l2.8-2.9-2-2L5 17.9zm14-3l-2.5-2.4-6.4 6.5H19v-4zM4 3h16c.6 0 1 .4 1 1v16c0 .6-.4 1-1 1H4a1 1 0 01-1-1V4c0-.6.4-1 1-1zm6 8a2 2 0 100-4 2 2 0 000 4z" fill-rule="nonzero"></path></svg></span></button>
																	</div><div title="" role="toolbar" data-alloy-tabstop="true" tabindex="-1" class="tox-toolbar__group"><button aria-label="Preview" title="Preview" type="button" tabindex="-1" class="tox-tbtn" ><span class="tox-icon tox-tbtn__icon-wrap"><svg width="24" height="24"><path d="M3.5 12.5c.5.8 1.1 1.6 1.8 2.3 2 2 4.2 3.2 6.7 3.2s4.7-1.2 6.7-3.2a16.2 16.2 0 002.1-2.8 15.7 15.7 0 00-2.1-2.8c-2-2-4.2-3.2-6.7-3.2a9.3 9.3 0 00-6.7 3.2A16.2 16.2 0 003.2 12c0 .2.2.3.3.5zm-2.4-1l.7-1.2L4 7.8C6.2 5.4 8.9 4 12 4c3 0 5.8 1.4 8.1 3.8a18.2 18.2 0 012.8 3.7v1l-.7 1.2-2.1 2.5c-2.3 2.4-5 3.8-8.1 3.8-3 0-5.8-1.4-8.1-3.8a18.2 18.2 0 01-2.8-3.7 1 1 0 010-1zm12-3.3a2 2 0 102.7 2.6 4 4 0 11-2.6-2.6z" fill-rule="nonzero"></path></svg></span></button>
																		<button aria-label="Insert/edit media" title="Insert/edit media" type="button" tabindex="-1" class="tox-tbtn"  aria-pressed="false"><span class="tox-icon tox-tbtn__icon-wrap"><svg width="24" height="24"><path d="M4 3h16c.6 0 1 .4 1 1v16c0 .6-.4 1-1 1H4a1 1 0 01-1-1V4c0-.6.4-1 1-1zm1 2v14h14V5H5zm4.8 2.6l5.6 4a.5.5 0 010 .8l-5.6 4A.5.5 0 019 16V8a.5.5 0 01.8-.4z" fill-rule="nonzero"></path></svg></span></button>
																	</div><div role="toolbar" data-alloy-tabstop="true" tabindex="-1" class="tox-toolbar__group"><button aria-label="More..." title="More..." aria-haspopup="true" type="button" data-alloy-tabstop="true" tabindex="-1" class="tox-tbtn" aria-expanded="false"><span class="tox-icon tox-tbtn__icon-wrap"><svg width="24" height="24"><path d="M6 10a2 2 0 00-2 2c0 1.1.9 2 2 2a2 2 0 002-2 2 2 0 00-2-2zm12 0a2 2 0 00-2 2c0 1.1.9 2 2 2a2 2 0 002-2 2 2 0 00-2-2zm-6 0a2 2 0 00-2 2c0 1.1.9 2 2 2a2 2 0 002-2 2 2 0 00-2-2z" fill-rule="nonzero"></path></svg></span></button></div></div></div><div class="tox-anchorbar"></div></div><div class="tox-sidebar-wrap"><div class="tox-edit-area"><iframe id="text_ifr" frameborder="0" allowtransparency="true" title="Rich Text Area. Press ALT-0 for help." class="tox-edit-area__iframe"></iframe></div><div role="complementary" class="tox-sidebar"><div data-alloy-tabstop="true" tabindex="-1" class="tox-sidebar__slider tox-sidebar--sliding-closed" Style="width: 0px;"><div class="tox-sidebar__pane-container"></div></div></div></div></div><div class="tox-statusbar"><div class="tox-statusbar__text-container"><div role="navigation" data-alloy-tabstop="true" class="tox-statusbar__path" ><div role="button" data-index="0" tab-index="-1"  tabindex="-1" class="tox-statusbar__path-item" >p</div></div><button type="button" data-alloy-tabstop="true" tabindex="-1" class="tox-statusbar__wordcount">0 words</button><span class="tox-statusbar__branding"><a href="https://www.tiny.cloud/?utm_campaign=editor_referral&amp;utm_medium=poweredby&amp;utm_source=tinymce&amp;utm_content=v5" rel="noopener" tabindex="-1" aria-label="Powered by Tiny">Powered by Tiny</a></span></div><div title="Resize" aria-hidden="true" class="tox-statusbar__resize-handle"><svg width="10" height="10"><g fill-rule="nonzero"><path d="M8.1 1.1A.5.5 0 119 2l-7 7A.5.5 0 111 8l7-7zM8.1 5.1A.5.5 0 119 6l-3 3A.5.5 0 115 8l3-3z"></path></g></svg></div></div><div aria-hidden="true" class="tox-throbber" Style="display: none;"></div></div>
													<label for="text" Style="z-index: 1;">Product Detail</label>
												</div>

												<hr />
												<div class="row">
													<div class="col-md-10">
														<h5 Style="font-size: 17px; font-weight: bold">Do you want to sell externally ?</h5>
													</div>

													<div class="col-md-2" id="externally_sell">
														<div class="pt_vdo_cstm_radio">
															<input type="radio" id="externally_sell0" name="externally_sell" value="0" checked="" />
															<label for="externally_sell0">No</label>
														</div>
														<div class="pt_vdo_cstm_radio">
															<input type="radio" id="externally_sell1" name="externally_sell" value="1" />
															<label for="externally_sell1">Yes</label>
														</div>
													</div>
												</div>
												<div class="pricing-card" id="sell_item">
													<div class="pricing-item">
														<div class="pricing-item-title">
															<div class="row">
																<div class="col-md-10">
																	<h5 Style="font-size: 17px; font-weight: bold">Product</h5>
																	<p>Set a starting amount and let buyers compete for your product.</p>
																</div>
																<div class="col-md-2">
																	<label class="switch">
																		<input type="checkbox" name="store" class="pricing" value="1" checked="" />
																		<span class="slider round"></span>
																	</label>
																</div>
															</div>
														</div>
														<div class="pricing-details auction" Style="display: block !important;">
															<div class="starting-price">
																<div class="row">
																	<div class="col-md-8">
																		<h6>Starting price</h6>
																		<p>
																			To attract buyers and increase competition for your product,
																			consider a low Starting price. </p>
																	</div>
																	<div class="col-md-4">
																		<div class="pp_mat_input" Style="margin: 0">
																			<input id="starting_price" name="starting_price" type="number" placeholder="Starting price" step="any" min="0" />
																			<label for="starting_price">Starting price</label>
																		</div>
																	</div>
																</div>
															</div>
															{/* <!--store_schedule--> */}
															<div class="checkbox-group">
																<div class="checkbox-title">
																	<div class="cb">
																		<label class="switch">
																			<input type="checkbox" name="store_schedule" class="" value="0" />
																			<span class="slider round"></span>
																		</label>
																	</div>
																	<div class="text">
																		<h6>Schedule your listing's start and end date</h6>
																		<p>
																			Choose when you want your listing to appear </p>
																	</div>
																</div>
																<div class="checkbox-details" Style="padding-top: 10px;">
																	<div class="row scheduled">
																		<div class="col-md-6">
																			<div class="pp_mat_input">
																				<input id="start_date" name="start_date" type="text" placeholder="Publication Date" class="date-picker hasDatepicker" autocomplete="false" />
																				<label for="start_date">Start date (UTC timezone)</label>
																			</div>
																		</div>
																		<div class="col-md-6">
																			<div class="pp_mat_input">
																				<input id="end_date" name="end_date" type="text" placeholder="Publication Date" class="date-picker hasDatepicker" autocomplete="false" />
																				<label for="end_date">End date (UTC timezone)</label>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
															{/* <!--store_reserve_price-->/ */}
															{/* <!--<div class="checkbox-group">
										<div class="checkbox-title">
											<div class="cb">
												<label class="switch">
													<input type="checkbox" name="store_reserve_price" class="">
													<span class="slider round"></span>
												</label>
											</div>
											<div class="text">
												<h6>Store reserve price </h6>
												<p>
													Define your store reserve price </p>
											</div>
										</div>
										<div class="checkbox-details">
											<div class="pp_mat_input">
												<input id="reserve_price" name="reserve_price" type="text"
												       placeholder="Reserve price">
												<label for="reserve_price">Reserve price</label>
											</div>
										</div>
									</div>--> */}
														</div>
													</div>
													<div class="pricing-item">
														<div class="pricing-item-title">
															<div class="row">
																<div class="col-md-10">
																	<h5 Style="font-size: 17px; font-weight: bold">Buy it now</h5>
																	<p>Buyers can buy it immediately at this price.</p>
																</div>
																<div class="col-md-2">
																	<label class="switch">
																		<input type="checkbox" name="buy_now" class="pricing" value="0" />
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
																			<input type="checkbox" name="buy_quantity" class="" value="0" />
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

												{/* <!--Meeting location--> */}
												<div id="sell_link" Style="display:none;">
													<hr />
													<div class="pp_mat_input">
														<input id="meeting_location" name="external_link" type="text" placeholder=" " />
														<label for="meeting_location">External link</label>
													</div>
													<div class="pp_mat_input" Style="margin: 0">
														<input id="e_price" name="e_price" type="number" placeholder="Price" step="any" min="0" />
														<label for="e_price">Price</label>
													</div>
												</div>
												{/* <!--Uploader--> */}
												<div class="row" Style="display: flex; align-items: center; padding-top: 15px;">
													<div class="clear"></div>
												</div>

												<div>
													<div class="pt_uv_thumbs">
														<h5>Product images</h5>
														<p>
															Upload your product images. (You can upload up to 5 images.)
														</p>
														<div class="pt_uv_thumbs_innr">
															<div class="upload-product-image">
																<div class="upload-image-content">
																	<div>
																		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																			<path fill-rule="evenodd" clip-rule="evenodd" d="M10.9436 2.25H11H12C12.4142 2.25 12.75 2.58579 12.75 3C12.75 3.41421 12.4142 3.75 12 3.75H11C9.09318 3.75 7.73851 3.75159 6.71085 3.88976C5.70476 4.02502 5.12511 4.27869 4.7019 4.7019C4.27869 5.12511 4.02502 5.70476 3.88976 6.71085C3.75159 7.73851 3.75 9.09318 3.75 11V13C3.75 14.7777 3.75138 16.0755 3.86353 17.0758L4.46967 16.4697L6.14124 14.7981L6.17801 14.7613C6.81331 14.126 7.34307 13.5962 7.82019 13.2322C8.32379 12.8479 8.85587 12.5784 9.5 12.5784C10.1441 12.5784 10.6762 12.8479 11.1798 13.2322C11.6569 13.5962 12.1867 14.126 12.822 14.7613L12.822 14.7613L12.8588 14.7981L14.0003 15.9396C14.496 15.4467 14.9261 15.0329 15.3202 14.7322C15.8238 14.3479 16.3559 14.0784 17 14.0784C17.6441 14.0784 18.1762 14.3479 18.6798 14.7322C19.128 15.0741 19.6227 15.5624 20.2077 16.1471C20.2493 15.2994 20.25 14.2727 20.25 13V12C20.25 11.5858 20.5858 11.25 21 11.25C21.4142 11.25 21.75 11.5858 21.75 12V13V13.0564V13.0565C21.75 14.8942 21.75 16.3498 21.5969 17.489C21.4392 18.6614 21.1071 19.6104 20.3588 20.3588C19.6104 21.1071 18.6614 21.4392 17.489 21.5969C16.3498 21.75 14.8942 21.75 13.0565 21.75H13.0564H13H11H10.9436H10.9435C9.1058 21.75 7.65018 21.75 6.51098 21.5969C5.33856 21.4392 4.38961 21.1071 3.64124 20.3588C2.89288 19.6104 2.56076 18.6614 2.40313 17.489C2.24997 16.3498 2.24998 14.8942 2.25 13.0564V13V11V10.9436C2.24998 9.10582 2.24997 7.65019 2.40313 6.51098C2.56076 5.33855 2.89288 4.38961 3.64124 3.64124C4.38961 2.89288 5.33856 2.56076 6.51098 2.40313C7.65019 2.24997 9.10582 2.24998 10.9436 2.25ZM4.7019 19.2981C4.54709 19.1433 4.41496 18.9675 4.30302 18.7576L5.53033 17.5303L7.2019 15.8588C7.88356 15.1771 8.34258 14.7203 8.73006 14.4247C9.10023 14.1423 9.3157 14.0784 9.5 14.0784C9.6843 14.0784 9.89977 14.1423 10.2699 14.4247C10.6574 14.7203 11.1164 15.1771 11.7981 15.8588L13.4697 17.5303L16.1471 20.2077C15.2994 20.2493 14.2727 20.25 13 20.25H11C9.09318 20.25 7.73851 20.2484 6.71085 20.1102C5.70476 19.975 5.12511 19.7213 4.7019 19.2981ZM19.2981 19.2981C18.9917 19.6045 18.6034 19.822 18.0307 19.97L18.0303 19.9697L15.0611 17.0004C15.5523 16.5123 15.9149 16.1652 16.2301 15.9247C16.6002 15.6423 16.8157 15.5784 17 15.5784C17.1843 15.5784 17.3998 15.6423 17.7699 15.9247C18.1574 16.2203 18.6164 16.6771 19.2981 17.3588L19.9697 18.0303L19.97 18.0307C19.822 18.6034 19.6045 18.9917 19.2981 19.2981ZM18.5303 2.46967C18.2374 2.17678 17.7626 2.17678 17.4697 2.46967L14.9697 4.96967C14.6768 5.26256 14.6768 5.73744 14.9697 6.03033C15.2626 6.32322 15.7374 6.32322 16.0303 6.03033L17.25 4.81066V9C17.25 9.41421 17.5858 9.75 18 9.75C18.4142 9.75 18.75 9.41421 18.75 9V4.81066L19.9697 6.03033C20.2626 6.32322 20.7374 6.32322 21.0303 6.03033C21.3232 5.73744 21.3232 5.26256 21.0303 4.96967L18.5303 2.46967Z" fill="currentColor"></path>
																		</svg>
																		Select product image
																	</div>
																</div>
															</div>
															<div id="vidimage-holder"></div>
														</div>
													</div>
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

												<input type="hidden" id="images" name="images" />

											</form>
										</div>
										<div class="clear"></div>
									</div>
									<div class="clear"></div>
								</div>
							</div>
						</div>
						<form id="thumbnail-form" method="POST"></form>
						<form method="POST" id="video-upload" Style="visibility: hidden;">
							<input type="file" id="video" name="video" accept="video/*" class="upload-video-file" />
						</form>

						<script src="https://clikview.com/themes/youplay/js/tinymce/js/tinymce/tinymce.min.js"></script>



					</div>
					<input type="hidden" id="main-url" value="https://clikview.com%2F" />
					<div class="ads-placment" id="footer_ad_"></div>
				</div>
			</div>
		</div>
	)
}

export default CreateProduct