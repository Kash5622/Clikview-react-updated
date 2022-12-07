import React from 'react'
import MobileSearch from '../MobileSearch';

function ReportingBug(props) {
    const { searchOpen, expandNav } = props;
    return (
        <div>
            <div className={expandNav ? "main-container shrinkWidth bodyfixed" : "main-container expandWidth"} Style="z-index:-1">
                <div id="main-container" class="main-content container" data-logged="true">
                    {searchOpen ? <MobileSearch /> : ""}
                    <div class="ads-placment" id="header_ad_"></div>
                    <div class="announcement-renderer">

                    </div>
                    <div id="container_content"><input type="hidden" id="json-data" value="{&quot;title&quot;:&quot;Report Bug | ClikView - Real Content For You&quot;,&quot;description&quot;:&quot;Clikview is a Video Sharing Platform, Clikview is the best way to start your own video sharing channel! Real Content for you.&quot;,&quot;keyword&quot;:&quot;clikview,video sharing, real content&quot;,&quot;page&quot;:&quot;contact_us&quot;,&quot;url&quot;:&quot;https:\/\/clikview.com\/contact-us&quot;,&quot;is_movie&quot;:false}" />
                        <div class="wo_about_wrapper_parent">
                            <div class="wo_about_wrapper">
                                <div class="hero hero-overlay"></div>
                            </div>
                        </div>
                        <div class="pt_page_margin">
                            <div class="mat_header">
                                <h1><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"></path></svg> Report Bug</h1>
                            </div>
                            <div class="col-md-2"></div>
                            <form class="form-horizontal contact-us-form user-setting-panel pt_shadow col-md-8 pt_forms" method="POST" Style=" margin: auto;">
                                <div class="contact-us-alert"></div>
                                <div class="list-">
                                    <div class="form-group">
                                        <label class="col-md-12" for="first_name">First Name *</label>
                                        <div class="col-md-12">
                                            <input id="first_name" name="first_name" type="text" class="form-control input-md" />
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-md-12" for="last_name">Last Name *</label>
                                        <div class="col-md-12">
                                            <input id="last_name" name="last_name" type="text" class="form-control input-md" />
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-md-12" for="email">E-mail *</label>
                                        <div class="col-md-12">
                                            <input name="email" id="email" type="text" class="form-control input-md" />
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-md-12" for="message">Message *</label>
                                        <div class="col-md-12">
                                            <textarea name="message" id="message" rows="5" class="form-control input-md"></textarea>
                                        </div>
                                    </div>
                                    <div class="last-sett-btn modal-footer" Style="margin: 0px -30px -10px -30px;">
                                        <button type="submit" name="send" id="send" tabindex="4" class="btn btn-main setting-panel-mdbtn"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg> Submit</button>
                                    </div>
                                </div>
                                <div class="clear"></div>
                            </form>
                            <div class="col-md-2"></div>
                        </div>
                        {/* <script>
	$(function() {
		var form = $('form.contact-us-form');
		form.ajaxForm({
			url: 'https://clikview.com/aj/contact_us?hash=' + $('.main_session').val(),
			dataTyep:'json',
			beforeSend: function() {
				form.find('button').text("Please wait..");
			},
			success: function(data) {
				if (data.status == 200) {
					$('.contact-us-alert').html($('<div>',{
						class: "alert alert-success",
						html: data.message
					}));

					$('.alert-success').fadeIn(300);
				} 
				else {
					$('.contact-us-alert').html($('<div>',{
						class: "alert alert-danger",
						html: data.message
					}));
				}
				form.find('button').html('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg> Submit');
			}
		});
	});
</script> */}
                    </div>
                    <input type="hidden" id="main-url" value="https://clikview.com%2Fterms%2Fabout-us" />
                    <div class="ads-placment" id="footer_ad_"></div>
                </div>
            </div>
        </div>
    )
}

export default ReportingBug