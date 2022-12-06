import React from 'react'

function Balance() {
    return (
        <div>
            <div class="user-setting-panel pt_shadow">
                <div class="yp_sett_header">
                    <h4>Balance Settings</h4>
                </div>
                <form class="form-horizontal user-monetization-panel pt_forms" id="monetization-settings" method="POST">
                    <div class="row">
                        <div class="monetization-settings-alert"></div>
                        <div class="form-group">
                            <div class="col-md-12">
                                <div class="form-group-rs" id="withdraw_type" Style="display: flex;">

                                    <label class="radio-label">
                                        <input class="customRadio" type="radio" name="withdraw_type" value="0" checked="" />
                                        <span class="btn radio-btn">Balance Withdraw</span>
                                    </label>

                                    <label class="radio-label">
                                        <input class="customRadio" type="radio" name="withdraw_type" value="2" />
                                        <span class="btn radio-btn">Token Withdraw</span>
                                    </label>
                                    <div class="clear"></div>
                                </div>
                            </div>
                            <div id="balance_available">
                                <label class="col-md-12">Available balance</label>
                                <div class="col-md-12">
                                    <h5 class="pt_avbl_bal">
                                        <span>USD</span>&nbsp;&nbsp;
                                        <b>10.01</b>
                                    </h5>
                                </div>
                            </div>
                            <div id="token_available" Style="display: none;">
                                <label class="col-md-12">Available Gold Token</label>
                                <div class="col-md-12">
                                    <h5 class="pt_avbl_bal">
                                        <b>714</b>
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div class="form-group" Style="display: none;">
                            <label class="col-md-12" for="total_ads">Max limit for your ads campaign</label>
                            <div class="col-md-12">
                                <div class="form-group-rs" id="total_ads">
                                    <input id="total_ads" name="total_ads" type="text" placeholder="" class="form-control input-md" value="0" onkeyup="SaveAds(this)" />
                                    <div class="clear"></div>
                                    <small>Your ads will stop running once you reach this amount.</small>
                                </div>
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="col-md-12" for="payment_method">Withdraw Method</label>
                            <div class="col-md-12">
                                <div class="form-group-rs" id="payment_method" Style="display:flex;">
                                    {/* <!--<label class="radio-label">
                                <input class="customRadio2" type="radio" name="payment_method_type" value="1" checked/>
                                <span class="btn radio-btn2">Paypal</span>
                            </label>--> */}
                                    <label class="radio-label">
                                        <input class="customRadio2" type="radio" name="payment_method_type" value="2" checked="" />
                                        <span class="btn radio-btn2">Bank Account</span>
                                    </label>
                                    <label class="radio-label">
                                        <input class="customRadio2" type="radio" name="payment_method_type" value="3" />
                                        <span class="btn radio-btn2">Crypto</span>
                                    </label>
                                    <div class="clear"></div>
                                </div>
                            </div>
                        </div>
                        <hr />

                        <div class="row pt_balance" id="paypal_payment" Style="display: none;">
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label class="col-md-12">PayPal E-mail</label>
                                    <div class="col-md-12">
                                        <input id="paypal_email" type="email" class="form-control input-md" value="somac089@gmail.com" name="email" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row pt_balance" id="bank_payment">
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label class="col-md-12">Bank Name</label>
                                    <div class="col-md-12">
                                        <input type="text" class="form-control input-md" value="" name="bank_name" id="bank_name" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label class="col-md-12">Bank Account Number</label>
                                    <div class="col-md-12">
                                        <input type="text" class="form-control input-md" value="" name="bank_account_number" id="bank_account_number" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label class="col-md-12">Swift Code</label>
                                    <div class="col-md-12">
                                        <input type="text" class="form-control input-md" value="" name="swift_code" id="swift_code" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label class="col-md-12">IBAN</label>
                                    <div class="col-md-12">
                                        <input type="text" class="form-control input-md" value="" name="iban" id="iban" />
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div class="row pt_balance" id="bitcoin_payment" Style="display: none;">
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label class="col-md-12">Wallet Address</label>
                                    <div class="col-md-12">
                                        <input type="text" class="form-control input-md" value="" name="account_detail" id="account_detail" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="clear"></div>
                        <div id="balance_withdraw">
                            <div class="row pt_balance_row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label class="col-md-12">Amount (Min 100: USD)</label>
                                        <div class="col-md-12">
                                            <input type="number" class="form-control input-md" placeholder="0.00" name="amount" id="amount" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="token_withdraw" Style="display: none;">
                            <div class="row pt_balance_row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label class="col-md-12">Number of Gold Tokens to Withdraw</label>
                                        <div class="col-md-12">
                                            <input type="number" class="form-control input-md" name="gold_token" id="gold_token" />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div class="clear"></div>

                        <div class="row pt_balance">
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label class="col-md-12">Additional Info</label>
                                    <div class="col-md-12">
                                        <textarea type="text" class="form-control input-md" value="" name="additional_info" id="additional_info"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <input type="hidden" name="hash_id" value="d0b4db2bc4e12a863e48a7d375e595b36af9b69a" />
                    <input type="hidden" name="user_id" value="2822" />
                    <br />
                    <div>
                        <button id="submit" class="btn btn-main setting-panel-mdbtn" type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> Submit</button>&nbsp;&nbsp;
                        <a href="https://clikview.com/settings/withdrawals/somac" class="btn btn-default setting-panel-mdbtn">
                            Withdraw
                        </a>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Balance