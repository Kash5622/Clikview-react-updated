import React from 'react'
import MobileSearch from './MobileSearch';
function Advertising(props) {
    const { searchOpen, expandNav } = props;
    return (
        <div>
            <div className={expandNav ? "main-container shrinkWidth bodyfixed" : "main-container expandWidth"} Style="z-index:-1">
                <div id="main-container" class="main-content  container" data-logged="true">
                {searchOpen ? <MobileSearch /> : ""}
                    <div class="ads-placment" id="header_ad_"></div>
                    <div class="announcement-renderer">

                    </div>
                    <div id="container_content"><input type="hidden" id="json-data" value="{&quot;title&quot;:&quot;Advertising | ClikView - Real Content For You&quot;,&quot;description&quot;:&quot;Clikview is a Video Sharing Platform, Clikview is the best way to start your own video sharing channel! Real Content for you.&quot;,&quot;keyword&quot;:&quot;clikview,video sharing, real content&quot;,&quot;page&quot;:&quot;user_ads&quot;,&quot;url&quot;:&quot;https:\/\/clikview.com\/ads&quot;,&quot;is_movie&quot;:false}" />
                        <link href="https://clikview.com/themes/youplay/js/lib/jquery-datatable/skin/bootstrap/css/dataTables.bootstrap.min.css" rel="stylesheet" />
                        {/* <script src="https://clikview.com/themes/youplay/js/lib/jquery-datatable/jquery.dataTables.js"></script>
<script src="https://clikview.com/themes/youplay/js/lib/jquery-datatable/skin/bootstrap/js/dataTables.bootstrap.js"></script> */}
                        <div class="user-ads-list-container pt_ads_page_header">
                            <div class="user-ads-list-header pt_ads_tool_header">
                                <div class="pt_page_headr pt_ads_hdr_top">
                                    <h4 class="page_head">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M13 21v2h-2v-2H3a1 1 0 0 1-1-1V6h20v14a1 1 0 0 1-1 1h-8zM8 10a3 3 0 1 0 3 3H8v-3zm5 0v2h6v-2h-6zm0 4v2h6v-2h-6zM2 3h20v2H2V3z"></path></svg> Advertising
                                    </h4>
                                    <div>
                                        <a href="https://clikview.com/ads/create" data-load="?link1=create_ads" class="btn btn-main">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"></path></svg> Create ad
                                        </a>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-md-6">
                                        <a class="pt_ads_wallet_olink" href="https://clikview.com/wallet" data-load="?link1=wallet">
                                            <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M22 6h-7a6 6 0 1 0 0 12h7v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2zm-7 2h8v8h-8a4 4 0 1 1 0-8zm0 3v2h3v-2h-3z"></path></svg>&nbsp;&nbsp;&nbsp;CV Main Wallet</div>
                                            <b>$310.05</b>
                                        </a>
                                    </div>
                                    <div class="col-md-6">
                                        <a class="pt_ads_wallet_olink balance" href="https://clikview.com/wallet" data-load="?link1=wallet">
                                            <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M14 2a8 8 0 0 1 3.292 15.293A8 8 0 1 1 6.706 6.707 8.003 8.003 0 0 1 14 2zm-3 7H9v1a2.5 2.5 0 0 0-.164 4.995L9 15h2l.09.008a.5.5 0 0 1 0 .984L11 16H7v2h2v1h2v-1a2.5 2.5 0 0 0 .164-4.995L11 13H9l-.09-.008a.5.5 0 0 1 0-.984L9 12h4v-2h-2V9zm3-5a5.985 5.985 0 0 0-4.484 2.013 8 8 0 0 1 8.47 8.471A6 6 0 0 0 14 4z"></path></svg>&nbsp;&nbsp;&nbsp;Available balance</div>
                                            <b>$10.01</b>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-10">
                                <div id="pt-user-ads-table_wrapper" class="dataTables_wrapper form-inline dt-bootstrap no-footer"><div class="row"><div class="col-sm-6"><div class="dataTables_length" id="pt-user-ads-table_length"><label>Show <select name="pt-user-ads-table_length" aria-controls="pt-user-ads-table" class="form-control input-sm"><option value="10">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select> entries</label></div></div><div class="col-sm-6"><div id="pt-user-ads-table_filter" class="dataTables_filter"><label>Search:<input type="search" class="form-control input-sm" placeholder="" aria-controls="pt-user-ads-table" /></label></div></div></div><div class="row"><div class="col-sm-12"><table class="table dataTable no-footer" id="pt-user-ads-table" role="grid" aria-describedby="pt-user-ads-table_info">
                                    <thead>
                                        <tr role="row"><th class="sorting_asc" tabindex="0" aria-controls="pt-user-ads-table" rowspan="1" colspan="1" aria-sort="ascending" aria-label="Status: activate to sort column descending" Style="width: 146.625px;">Status</th><th class="sorting" tabindex="0" aria-controls="pt-user-ads-table" rowspan="1" colspan="1" aria-label="Category: activate to sort column ascending" Style="width: 188.288px;">Category</th><th class="sorting" tabindex="0" aria-controls="pt-user-ads-table" rowspan="1" colspan="1" aria-label="Name: activate to sort column ascending" Style="width: 139.562px;">Name</th><th class="sorting" tabindex="0" aria-controls="pt-user-ads-table" rowspan="1" colspan="1" aria-label="Results: activate to sort column ascending" Style="width: 162.625px;">Results</th><th class="sorting" tabindex="0" aria-controls="pt-user-ads-table" rowspan="1" colspan="1" aria-label="Spent: activate to sort column ascending" Style="width: 135.887px;">Spent</th><th class="sorting" tabindex="0" aria-controls="pt-user-ads-table" rowspan="1" colspan="1" aria-label="Action: activate to sort column ascending" Style="width: 147.012px;">Action</th></tr></thead>
                                    <tbody><tr class="odd"><td valign="top" colspan="6" class="dataTables_empty">No data available in table</td></tr></tbody>
                                </table></div></div><div class="row"><div class="col-sm-5"><div class="dataTables_info" id="pt-user-ads-table_info" role="status" aria-live="polite">Showing 0 to 0 of 0 entries</div></div><div class="col-sm-7"><div class="dataTables_paginate paging_simple_numbers" id="pt-user-ads-table_paginate"><ul class="pagination"><li class="paginate_button previous disabled" id="pt-user-ads-table_previous"><a href="#" aria-controls="pt-user-ads-table" data-dt-idx="0" tabindex="0">Previous</a></li><li class="paginate_button next disabled" id="pt-user-ads-table_next"><a href="#" aria-controls="pt-user-ads-table" data-dt-idx="1" tabindex="0">Next</a></li></ul></div></div></div></div>
                            </div>
                        </div>
                        <br />

                        {/* <script>
	$(document).ready( function () {
	    $('#pt-user-ads-table').DataTable();
		$('#pt-user-ads-table').on( 'page.dt', function () {
		    PT_Delay(function(){
		    },50)
		});
	});

	

	function PT_ReplenishBalance() {
		swal({
		  html:$('.replenish-balance-form').clone().addClass('clone').removeClass('hidden'),
		  showCloseButton: true,
		  showCancelButton: false,
		  focusConfirm: false,
		  confirmButtonText:"Replenish",
		  buttonsStyling:false,
		  confirmButtonClass:'btn btn-success',
		  allowOutsideClick:false,
		  showLoaderOnConfirm: true,
		  preConfirm: function () {
		    return new Promise(function (resolve, reject) {
		    	amount = $(".replenish-balance-form.clone").find('input').val();
		    	if (10.01 < 1) {
		    		reject("You don`t have enough balance to transfer!");
		    	}
		    	else if (!amount || amount < 1){
		    		reject("Please check the details!");
		    	}
		    	else if(amount > 10.01){
		    		reject("Amount can`t be greater than your balance!");
		    	}
		    	else{
		    		$.post('https://clikview.com/aj/wallet/move_to_wallet', {amount: amount}, function(data, textStatus, xhr) {
		    			if (data.status == 200) {
		    				location.reload();
		    			}
		    			else{
		    				reject(data.message);
		    			}
		    		});
		    	}
		    })
		  }
		}).then(function(){},function(){});
	}

	function PT_DeleteAd(id){
		if (!id) {
			return false;
		}
		swal({
		  title: 'Confirmation!',
		  text: "Are you sure you want to delete this ad?",
		  type: 'warning',
		  showCloseButton: true,
		  showCancelButton: false,
		  focusConfirm: false,
		  confirmButtonText:"Delete",
		  buttonsStyling:false,
		  confirmButtonClass:'btn btn-success margin-right',
		  allowOutsideClick:true,
		}).then(function (){
			$.post('https://clikview.com/aj/ads/delete', {id:id}, function(data, textStatus, xhr) {});
			$("tr[data-ads-list='"+id+"']").slideUp(function(){
				$(this).remove();
				swal({
					title:'Deleted!',
				    type:'success',
				    buttonsStyling:false,
				    confirmButtonClass:'btn btn-success',
				});
			});
		});
	}

	function PT_ToggleAdsStatus(id){
		if (!id) {
			return false;
		}
		$.post('https://clikview.com/aj/ads/toggle-stat', {id:id}, function(data, textStatus, xhr) {});
	}	



</script> */}

                        <form class="replenish-wallet-form hidden text-center yp_ads_add">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#3F51B5"><path d="M8.32,21.97C8.21,21.92 8.08,21.76 8.06,21.65C8.03,21.5 8,21.76 8.66,17.56C9.26,13.76 9.25,13.82 9.33,13.71C9.46,13.54 9.44,13.54 10.94,13.53C12.26,13.5 12.54,13.5 13.13,13.41C16.38,12.96 18.39,11.05 19.09,7.75C19.13,7.53 19.17,7.34 19.18,7.34C19.18,7.33 19.25,7.38 19.33,7.44C20.36,8.22 20.71,9.66 20.32,11.58C19.86,13.87 18.64,15.39 16.74,16.04C15.93,16.32 15.25,16.43 14.05,16.46C13.25,16.5 13.23,16.5 13,16.65C12.83,16.82 12.84,16.79 12.45,19.2C12.18,20.9 12.08,21.45 12.04,21.55C11.97,21.71 11.83,21.85 11.67,21.93L11.56,22H10C8.71,22 8.38,22 8.32,21.97V21.97M3.82,19.74C3.63,19.64 3.5,19.47 3.5,19.27C3.5,19 6.11,2.68 6.18,2.5C6.27,2.32 6.5,2.13 6.68,2.06L6.83,2H10.36C14.27,2 14.12,2 15,2.2C17.62,2.75 18.82,4.5 18.37,7.13C17.87,10.06 16.39,11.8 13.87,12.43C13,12.64 12.39,12.7 10.73,12.7C9.42,12.7 9.32,12.71 9.06,12.85C8.8,13 8.59,13.27 8.5,13.6C8.46,13.67 8.23,15.07 7.97,16.7C7.71,18.33 7.5,19.69 7.5,19.72L7.47,19.78H5.69C4.11,19.78 3.89,19.78 3.82,19.74V19.74Z"></path></svg>
                            <div class="w100">
                                <label>Replenish My Balance</label>
                            </div>
                            <div class="form-group w100 add-amount">
                                <h5>
                                    <span>$</span>
                                    <b><input type="text" placeholder="0.00" /></b>
                                </h5>
                            </div>
                        </form>

                        <form class="replenish-balance-form hidden text-center yp_ads_add">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#3F51B5"><path d="M8.32,21.97C8.21,21.92 8.08,21.76 8.06,21.65C8.03,21.5 8,21.76 8.66,17.56C9.26,13.76 9.25,13.82 9.33,13.71C9.46,13.54 9.44,13.54 10.94,13.53C12.26,13.5 12.54,13.5 13.13,13.41C16.38,12.96 18.39,11.05 19.09,7.75C19.13,7.53 19.17,7.34 19.18,7.34C19.18,7.33 19.25,7.38 19.33,7.44C20.36,8.22 20.71,9.66 20.32,11.58C19.86,13.87 18.64,15.39 16.74,16.04C15.93,16.32 15.25,16.43 14.05,16.46C13.25,16.5 13.23,16.5 13,16.65C12.83,16.82 12.84,16.79 12.45,19.2C12.18,20.9 12.08,21.45 12.04,21.55C11.97,21.71 11.83,21.85 11.67,21.93L11.56,22H10C8.71,22 8.38,22 8.32,21.97V21.97M3.82,19.74C3.63,19.64 3.5,19.47 3.5,19.27C3.5,19 6.11,2.68 6.18,2.5C6.27,2.32 6.5,2.13 6.68,2.06L6.83,2H10.36C14.27,2 14.12,2 15,2.2C17.62,2.75 18.82,4.5 18.37,7.13C17.87,10.06 16.39,11.8 13.87,12.43C13,12.64 12.39,12.7 10.73,12.7C9.42,12.7 9.32,12.71 9.06,12.85C8.8,13 8.59,13.27 8.5,13.6C8.46,13.67 8.23,15.07 7.97,16.7C7.71,18.33 7.5,19.69 7.5,19.72L7.47,19.78H5.69C4.11,19.78 3.89,19.78 3.82,19.74V19.74Z"></path></svg>
                            <div class="w100">
                                <label>Move your balance to your wallet so you can use it to create ads and use other features.</label>
                            </div>
                            <div class="form-group w100 add-amount">
                                <h5>
                                    <span>$</span>
                                    <b><input type="text" placeholder="0.00" /></b>
                                </h5>
                            </div>
                        </form>

                    </div>
                    <input type="hidden" id="main-url" value="https://clikview.com%2F%40somac%3Fpage%3Dvideos" />
                    <div class="ads-placment" id="footer_ad_"></div>
                </div>
            </div>
        </div>
    )
}

export default Advertising