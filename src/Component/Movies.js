import React from 'react'
import MobileSearch from './MobileSearch';

function Movies(props) {
    const { searchOpen, expandNav } = props;
    return (
        <div>
            <div className={expandNav ? "main-container shrinkWidth bodyfixed" : "main-container expandWidth"} Style="z-index:-1">
                <div id="main-container" class="main-content  container              " data-logged="true">
                {searchOpen ? <MobileSearch /> : ""}
                    <div class="ads-placment" id="header_ad_"></div>
                    <div class="announcement-renderer">

                    </div>
                    <div id="container_content"><input type="hidden" id="json-data" value="{&quot;title&quot;:&quot;Movies - ClikView - Real Content For You&quot;,&quot;description&quot;:&quot;Clikview is a Video Sharing Platform, Clikview is the best way to start your own video sharing channel! Real Content for you.&quot;,&quot;keyword&quot;:&quot;clikview,video sharing, real content&quot;,&quot;page&quot;:&quot;movies&quot;,&quot;url&quot;:&quot;https:\/\/clikview.com\/movies&quot;,&quot;is_movie&quot;:true}" />
                        {/* <link rel="stylesheet" href="https://clikview.com/themes/youplay/css/night-mode.css"> */}

                        <div class="pt_movie_margin">
                            <div class="pt_page_headr">
                                <h4 class="page_head"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill-rule="evenodd" fill="currentColor" d="M9 2.25H8.94513C8.63161 2.25 8.33204 2.24999 8.04605 2.25139C8.03082 2.25047 8.01546 2.25 8 2.25C7.98169 2.25 7.96353 2.25066 7.94555 2.25195C7.02806 2.25763 6.25306 2.27983 5.60825 2.36652C4.70814 2.48754 3.95027 2.74643 3.34835 3.34835C2.74643 3.95027 2.48754 4.70814 2.36652 5.60825C2.31805 5.9688 2.28974 6.37005 2.2732 6.81417C2.25805 6.87359 2.25 6.93586 2.25 7C2.25 7.04818 2.25454 7.0953 2.26323 7.14096C2.24998 7.68236 2.24999 8.28262 2.25 8.94513V9V12V15V15.0549C2.24999 15.7174 2.24998 16.3176 2.26323 16.859C2.25454 16.9047 2.25 16.9518 2.25 17C2.25 17.0641 2.25805 17.1264 2.2732 17.1858C2.28974 17.6299 2.31805 18.0312 2.36652 18.3918C2.48754 19.2919 2.74643 20.0497 3.34835 20.6517C3.95027 21.2536 4.70814 21.5125 5.60825 21.6335C6.25306 21.7202 7.02806 21.7424 7.94555 21.7481C7.96353 21.7493 7.98169 21.75 8 21.75C8.01546 21.75 8.03082 21.7495 8.04605 21.7486C8.33204 21.75 8.63162 21.75 8.94513 21.75H9H15H15.0549C15.3684 21.75 15.668 21.75 15.9539 21.7486C15.9692 21.7495 15.9845 21.75 16 21.75C16.0183 21.75 16.0365 21.7493 16.0544 21.7481C16.9719 21.7424 17.7469 21.7202 18.3918 21.6335C19.2919 21.5125 20.0497 21.2536 20.6517 20.6517C21.2536 20.0497 21.5125 19.2919 21.6335 18.3918C21.682 18.0312 21.7103 17.6299 21.7268 17.1858C21.7419 17.1264 21.75 17.0641 21.75 17C21.75 16.9518 21.7455 16.9047 21.7368 16.8591C21.75 16.3177 21.75 15.7175 21.75 15.055V15.0549V15V12V9V8.94513V8.945V8.94486C21.75 8.28245 21.75 7.68228 21.7368 7.14095C21.7455 7.09529 21.75 7.04818 21.75 7C21.75 6.93586 21.7419 6.87359 21.7268 6.81417C21.7103 6.37006 21.682 5.9688 21.6335 5.60825C21.5125 4.70814 21.2536 3.95027 20.6517 3.34835C20.0497 2.74643 19.2919 2.48754 18.3918 2.36652C17.7469 2.27983 16.9719 2.25763 16.0544 2.25195C16.0365 2.25066 16.0183 2.25 16 2.25C15.9845 2.25 15.9692 2.25047 15.9539 2.25139C15.668 2.24999 15.3684 2.25 15.0549 2.25H15H9ZM3.80673 17.75C3.81924 17.9063 3.83451 18.0533 3.85315 18.1919C3.9518 18.9257 4.13225 19.3142 4.40901 19.591C4.68577 19.8678 5.07435 20.0482 5.80812 20.1469C6.2098 20.2009 6.68097 20.2266 7.25 20.2389V17.75H3.80673ZM7.25 16.25H3.75371C3.75016 15.8736 3.75 15.459 3.75 15V12.75H7.25V16.25ZM8.75 17V20.25L9 20.25H15L15.25 20.25V17V12.75H8.75V17ZM20.25 15C20.25 15.459 20.2498 15.8736 20.2463 16.25H16.75V12.75H20.25V15ZM20.1933 17.75H16.75V20.2389C17.319 20.2266 17.7902 20.2009 18.1919 20.1469C18.9257 20.0482 19.3142 19.8678 19.591 19.591C19.8678 19.3142 20.0482 18.9257 20.1469 18.1919C20.1655 18.0533 20.1808 17.9063 20.1933 17.75ZM20.1933 6.25C20.1808 6.09365 20.1655 5.94675 20.1469 5.80812C20.0482 5.07435 19.8678 4.68577 19.591 4.40901C19.3142 4.13225 18.9257 3.9518 18.1919 3.85315C17.7902 3.79914 17.319 3.77341 16.75 3.76115V6.25H20.1933ZM15.25 7V3.75004L15 3.75H9L8.75 3.75004V7V11.25H15.25V7ZM16.75 7.75H20.2463C20.2498 8.12636 20.25 8.54098 20.25 9V11.25H16.75V7.75ZM3.75 9C3.75 8.54098 3.75016 8.12636 3.75371 7.75H7.25V11.25H3.75V9ZM3.80673 6.25H7.25V3.76115C6.68097 3.77341 6.2098 3.79914 5.80812 3.85315C5.07435 3.9518 4.68577 4.13225 4.40901 4.40901C4.13225 4.68577 3.9518 5.07435 3.85315 5.80812C3.83451 5.94675 3.81924 6.09365 3.80673 6.25Z"></path></svg> Movies</h4>
                            </div>

                            <div class="row">
                                <div class="col-md-4">
                                    <div class="vid_move_filtr" id="filter_settings">
                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" preserveAspectRatio="none"   viewBox="0 0 800 800"><circle r="13" cx="27" cy="392" stroke-width="2" stroke="hsl(159, 50%, 50%)" fill="none" opacity="0.23"></circle><circle r="16.5" cx="553" cy="527" fill="hsl(195, 50%, 50%)" opacity="0.30"></circle><circle r="12" cx="76" cy="490" fill="hsl(122, 50%, 50%)" opacity="0.53"></circle><circle r="17" cx="558" cy="590" stroke-width="2" stroke="hsl(195, 50%, 50%)" fill="none" opacity="0.34"></circle><circle r="16" cx="627" cy="147" fill="hsl(211, 50%, 50%)" opacity="0.60"></circle><circle r="11" cx="139" cy="596" stroke-width="2" stroke="hsl(87, 50%, 50%)" fill="none" opacity="0.27"></circle><circle r="15" cx="544" cy="175" fill="hsl(196, 50%, 50%)" opacity="0.74"></circle><circle r="13.5" cx="350" cy="259" fill="hsl(173, 50%, 50%)" opacity="0.62"></circle><circle r="13.5" cx="87" cy="310" fill="hsl(122, 50%, 50%)" opacity="0.68"></circle><circle r="12" cx="21" cy="728" fill="hsl(167, 50%, 50%)" opacity="0.87"></circle><circle r="15.5" cx="671" cy="348" stroke-width="2" stroke="hsl(182, 50%, 50%)" fill="none" opacity="0.26"></circle><circle r="11.5" cx="105" cy="89" fill="hsl(82, 50%, 50%)" opacity="0.98"></circle><circle r="12.5" cx="217" cy="150" fill="hsl(96, 50%, 50%)" opacity="0.72"></circle><circle r="9" cx="472" cy="24" stroke-width="2" stroke="hsl(82, 50%, 50%)" fill="none" opacity="0.41"></circle><circle r="16.5" cx="718" cy="449" stroke-width="2" stroke="hsl(185, 50%, 50%)" fill="none" opacity="0.98"></circle><circle r="12.5" cx="273" cy="717" fill="hsl(119, 50%, 50%)" opacity="0.57"></circle><circle r="12" cx="107" cy="202" stroke-width="2" stroke="hsl(105, 50%, 50%)" fill="none" opacity="0.97"></circle><circle r="11.5" cx="434" cy="116" fill="hsl(131, 50%, 50%)" opacity="0.20"></circle><circle r="14.5" cx="406" cy="170" stroke-width="2" stroke="hsl(185, 50%, 50%)" fill="none" opacity="0.97"></circle><circle r="14.5" cx="447" cy="775" stroke-width="2" stroke="hsl(218, 50%, 50%)" fill="none" opacity="0.25"></circle><circle r="15" cx="671" cy="180" fill="hsl(194, 50%, 50%)" opacity="0.92"></circle><circle r="15.5" cx="497" cy="203" stroke-width="2" stroke="hsl(214, 50%, 50%)" fill="none" opacity="0.39"></circle><circle r="10.5" cx="92" cy="29" fill="hsl(74, 50%, 50%)" opacity="0.93"></circle><circle r="15.5" cx="405" cy="397" stroke-width="2" stroke="hsl(208, 50%, 50%)" fill="none" opacity="0.71"></circle><circle r="18.5" cx="510" cy="767" stroke-width="2" stroke="hsl(211, 50%, 50%)" fill="none" opacity="0.82"></circle><circle r="18" cx="452" cy="659" fill="hsl(218, 50%, 50%)" opacity="0.79"></circle><circle r="16" cx="30" cy="188" fill="hsl(159, 50%, 50%)" opacity="0.24"></circle><circle r="11" cx="222" cy="673" stroke-width="2" stroke="hsl(91, 50%, 50%)" fill="none" opacity="0.83"></circle><circle r="15.5" cx="366" cy="570" stroke-width="2" stroke="hsl(189, 50%, 50%)" fill="none" opacity="0.58"></circle><circle r="14" cx="326" cy="521" fill="hsl(164, 50%, 50%)" opacity="0.33"></circle><circle r="16" cx="436" cy="492" stroke-width="2" stroke="hsl(216, 50%, 50%)" fill="none" opacity="0.32"></circle><circle r="16" cx="661" cy="471" stroke-width="2" stroke="hsl(181, 50%, 50%)" fill="none" opacity="0.91"></circle><circle r="14.5" cx="576" cy="130" stroke-width="2" stroke="hsl(192, 50%, 50%)" fill="none" opacity="0.84"></circle><circle r="15.5" cx="558" cy="719" fill="hsl(195, 50%, 50%)" opacity="0.69"></circle><circle r="12.5" cx="249" cy="91" stroke-width="2" stroke="hsl(90, 50%, 50%)" fill="none" opacity="0.80"></circle><circle r="10" cx="195" cy="615" stroke-width="2" stroke="hsl(83, 50%, 50%)" fill="none" opacity="0.50"></circle><circle r="15" cx="595" cy="267" fill="hsl(185, 50%, 50%)" opacity="0.34"></circle><circle r="16.5" cx="558" cy="657" stroke-width="2" stroke="hsl(195, 50%, 50%)" fill="none" opacity="0.94"></circle><circle r="13.5" cx="29" cy="448" stroke-width="2" stroke="hsl(159, 50%, 50%)" fill="none" opacity="0.88"></circle><circle r="13" cx="308" cy="296" fill="hsl(146, 50%, 50%)" opacity="0.82"></circle><circle r="16.5" cx="555" cy="400" stroke-width="2" stroke="hsl(195, 50%, 50%)" fill="none" opacity="0.67"></circle><circle r="9.5" cx="172" cy="775" fill="hsl(82, 50%, 50%)" opacity="0.16"></circle><circle r="15.5" cx="593" cy="28" stroke-width="2" stroke="hsl(199, 50%, 50%)" fill="none" opacity="0.48"></circle><circle r="16.5" cx="468" cy="315" stroke-width="2" stroke="hsl(218, 50%, 50%)" fill="none" opacity="0.66"></circle><circle r="14" cx="648" cy="232" stroke-width="2" stroke="hsl(181, 50%, 50%)" fill="none" opacity="0.21"></circle><circle r="15.5" cx="613" cy="561" fill="hsl(182, 50%, 50%)" opacity="0.82"></circle><circle r="9.5" cx="438" cy="66" stroke-width="2" stroke="hsl(82, 50%, 50%)" fill="none" opacity="0.99"></circle><circle r="14" cx="778" cy="122" fill="hsl(261, 50%, 50%)" opacity="0.45"></circle><circle r="15.5" cx="606" cy="436" stroke-width="2" stroke="hsl(183, 50%, 50%)" fill="none" opacity="0.55"></circle><circle r="16" cx="664" cy="675" fill="hsl(182, 50%, 50%)" opacity="0.25"></circle><circle r="15.5" cx="354" cy="640" stroke-width="2" stroke="hsl(181, 50%, 50%)" fill="none" opacity="0.30"></circle><circle r="16.5" cx="680" cy="122" stroke-width="2" stroke="hsl(244, 50%, 50%)" fill="none" opacity="0.62"></circle><circle r="16.5" cx="503" cy="427" fill="hsl(211, 50%, 50%)" opacity="0.91"></circle><circle r="13.5" cx="311" cy="771" stroke-width="2" stroke="hsl(146, 50%, 50%)" fill="none" opacity="0.53"></circle><circle r="15.5" cx="666" cy="535" fill="hsl(182, 50%, 50%)" opacity="0.58"></circle><circle r="16.5" cx="719" cy="512" fill="hsl(185, 50%, 50%)" opacity="0.48"></circle><circle r="13.5" cx="696" cy="775" fill="hsl(184, 50%, 50%)" opacity="0.20"></circle><circle r="9.5" cx="125" cy="742" fill="hsl(91, 50%, 50%)" opacity="0.64"></circle><circle r="11" cx="189" cy="392" stroke-width="2" stroke="hsl(83, 50%, 50%)" fill="none" opacity="0.39"></circle><circle r="16" cx="414" cy="342" fill="hsl(213, 50%, 50%)" opacity="0.99"></circle><circle r="15" cx="31" cy="109" stroke-width="2" stroke="hsl(141, 50%, 50%)" fill="none" opacity="0.52"></circle><circle r="11.5" cx="31" cy="634" fill="hsl(159, 50%, 50%)" opacity="0.41"></circle><circle r="10.5" cx="210" cy="729" stroke-width="2" stroke="hsl(86, 50%, 50%)" fill="none" opacity="0.28"></circle></svg>
                                        <form class="search_filter_form pt_forms" method="GET" action="https://clikview.com/movies">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="form-group">
                                                        <label for="">Search Term:</label>
                                                        <div class="input-group">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22"><path fill="currentColor" d="M23.707 22.293l-5.969-5.969a10.016 10.016 0 10-1.414 1.414l5.969 5.969a1 1 0 001.414-1.414zM10 18a8 8 0 118-8 8.009 8.009 0 01-8 8z"></path></svg>
                                                            <input type="text" class="form-control" id="search-bar" name="keyword" placeholder="What you would like to watch?" autocomplete="off" value="" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="form-group">
                                                        <label for="rating">Rating</label>
                                                        <input type="number" id="rating" name="rating" class="form-control" min="1" max="10" step="0.1" placeholder="Rating" value="" />
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="form-group">
                                                        <label for="release">Release</label>
                                                        <input id="release" name="release" type="number" placeholder="Release" class="form-control" min="1960" max="2022" value="" />
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="form-group">
                                                        <label for="country">Country</label>
                                                        <select class="form-control show-tick" id="country" name="country">
                                                            <option value="0">Select Country</option>
                                                            <option value="1">United States</option>
                                                            <option value="2">Canada</option>
                                                            <option value="3">Afghanistan</option>
                                                            <option value="4">Albania</option>
                                                            <option value="5">Algeria</option>
                                                            <option value="6">American Samoa</option>
                                                            <option value="7">Andorra</option>
                                                            <option value="8">Angola</option>
                                                            <option value="9">Anguilla</option>
                                                            <option value="10">Antarctica</option>
                                                            <option value="11">Antigua and/or Barbuda</option>
                                                            <option value="12">Argentina</option>
                                                            <option value="13">Armenia</option>
                                                            <option value="14">Aruba</option>
                                                            <option value="15">Australia</option>
                                                            <option value="16">Austria</option>
                                                            <option value="17">Azerbaijan</option>
                                                            <option value="18">Bahamas</option>
                                                            <option value="19">Bahrain</option>
                                                            <option value="20">Bangladesh</option>
                                                            <option value="21">Barbados</option>
                                                            <option value="22">Belarus</option>
                                                            <option value="23">Belgium</option>
                                                            <option value="24">Belize</option>
                                                            <option value="25">Benin</option>
                                                            <option value="26">Bermuda</option>
                                                            <option value="27">Bhutan</option>
                                                            <option value="28">Bolivia</option>
                                                            <option value="29">Bosnia and Herzegovina</option>
                                                            <option value="30">Botswana</option>
                                                            <option value="31">Bouvet Island</option>
                                                            <option value="32">Brazil</option>
                                                            <option value="34">Brunei Darussalam</option>
                                                            <option value="35">Bulgaria</option>
                                                            <option value="36">Burkina Faso</option>
                                                            <option value="37">Burundi</option>
                                                            <option value="38">Cambodia</option>
                                                            <option value="39">Cameroon</option>
                                                            <option value="40">Cape Verde</option>
                                                            <option value="41">Cayman Islands</option>
                                                            <option value="42">Central African Republic</option>
                                                            <option value="43">Chad</option>
                                                            <option value="44">Chile</option>
                                                            <option value="45">China</option>
                                                            <option value="46">Christmas Island</option>
                                                            <option value="47">Cocos (Keeling) Islands</option>
                                                            <option value="48">Colombia</option>
                                                            <option value="49">Comoros</option>
                                                            <option value="50">Congo</option>
                                                            <option value="51">Cook Islands</option>
                                                            <option value="52">Costa Rica</option>
                                                            <option value="53">Croatia (Hrvatska)</option>
                                                            <option value="54">Cuba</option>
                                                            <option value="55">Cyprus</option>
                                                            <option value="56">Czech Republic</option>
                                                            <option value="57">Denmark</option>
                                                            <option value="58">Djibouti</option>
                                                            <option value="59">Dominica</option>
                                                            <option value="60">Dominican Republic</option>
                                                            <option value="61">East Timor</option>
                                                            <option value="62">Ecuador</option>
                                                            <option value="63">Egypt</option>
                                                            <option value="64">El Salvador</option>
                                                            <option value="65">Equatorial Guinea</option>
                                                            <option value="66">Eritrea</option>
                                                            <option value="67">Estonia</option>
                                                            <option value="68">Ethiopia</option>
                                                            <option value="69">Falkland Islands (Malvinas)</option>
                                                            <option value="70">Faroe Islands</option>
                                                            <option value="71">Fiji</option>
                                                            <option value="72">Finland</option>
                                                            <option value="73">France</option>
                                                            <option value="74">France, Metropolitan</option>
                                                            <option value="75">French Guiana</option>
                                                            <option value="76">French Polynesia</option>
                                                            <option value="77">French Southern Territories</option>
                                                            <option value="78">Gabon</option>
                                                            <option value="79">Gambia</option>
                                                            <option value="80">Georgia</option>
                                                            <option value="81">Germany</option>
                                                            <option value="82">Ghana</option>
                                                            <option value="83">Gibraltar</option>
                                                            <option value="84">Greece</option>
                                                            <option value="85">Greenland</option>
                                                            <option value="86">Grenada</option>
                                                            <option value="87">Guadeloupe</option>
                                                            <option value="88">Guam</option>
                                                            <option value="89">Guatemala</option>
                                                            <option value="90">Guinea</option>
                                                            <option value="91">Guinea-Bissau</option>
                                                            <option value="92">Guyana</option>
                                                            <option value="93">Haiti</option>
                                                            <option value="94">Heard and Mc Donald Islands</option>
                                                            <option value="95">Honduras</option>
                                                            <option value="96">Hong Kong</option>
                                                            <option value="97">Hungary</option>
                                                            <option value="98">Iceland</option>
                                                            <option value="99">India</option>
                                                            <option value="100">Indonesia</option>
                                                            <option value="101">Iran (Islamic Republic of)</option>
                                                            <option value="102">Iraq</option>
                                                            <option value="103">Ireland</option>
                                                            <option value="104">Israel</option>
                                                            <option value="105">Italy</option>
                                                            <option value="106">Ivory Coast</option>
                                                            <option value="107">Jamaica</option>
                                                            <option value="108">Japan</option>
                                                            <option value="109">Jordan</option>
                                                            <option value="110">Kazakhstan</option>
                                                            <option value="111">Kenya</option>
                                                            <option value="112">Kiribati</option>
                                                            <option value="113">Korea, Democratic People's Republic of</option>
                                                            <option value="114">Korea, Republic of</option>
                                                            <option value="115">Kosovo</option>
                                                            <option value="116">Kuwait</option>
                                                            <option value="117">Kyrgyzstan</option>
                                                            <option value="118">Lao People's Democratic Republic</option>
                                                            <option value="119">Latvia</option>
                                                            <option value="120">Lebanon</option>
                                                            <option value="121">Lesotho</option>
                                                            <option value="122">Liberia</option>
                                                            <option value="123">Libyan Arab Jamahiriya</option>
                                                            <option value="124">Liechtenstein</option>
                                                            <option value="125">Lithuania</option>
                                                            <option value="126">Luxembourg</option>
                                                            <option value="127">Macau</option>
                                                            <option value="128">Macedonia</option>
                                                            <option value="129">Madagascar</option>
                                                            <option value="130">Malawi</option>
                                                            <option value="131">Malaysia</option>
                                                            <option value="132">Maldives</option>
                                                            <option value="133">Mali</option>
                                                            <option value="134">Malta</option>
                                                            <option value="135">Marshall Islands</option>
                                                            <option value="136">Martinique</option>
                                                            <option value="137">Mauritania</option>
                                                            <option value="138">Mauritius</option>
                                                            <option value="139">Mayotte</option>
                                                            <option value="140">Mexico</option>
                                                            <option value="141">Micronesia, Federated States of</option>
                                                            <option value="142">Moldova, Republic of</option>
                                                            <option value="143">Monaco</option>
                                                            <option value="144">Mongolia</option>
                                                            <option value="145">Montenegro</option>
                                                            <option value="146">Montserrat</option>
                                                            <option value="147">Morocco</option>
                                                            <option value="148">Mozambique</option>
                                                            <option value="149">Myanmar</option>
                                                            <option value="150">Namibia</option>
                                                            <option value="151">Nauru</option>
                                                            <option value="152">Nepal</option>
                                                            <option value="153">Netherlands</option>
                                                            <option value="154">Netherlands Antilles</option>
                                                            <option value="155">New Caledonia</option>
                                                            <option value="156">New Zealand</option>
                                                            <option value="157">Nicaragua</option>
                                                            <option value="158">Niger</option>
                                                            <option value="159">Nigeria</option>
                                                            <option value="160">Niue</option>
                                                            <option value="161">Norfork Island</option>
                                                            <option value="162">Northern Mariana Islands</option>
                                                            <option value="163">Norway</option>
                                                            <option value="164">Oman</option>
                                                            <option value="165">Pakistan</option>
                                                            <option value="166">Palau</option>
                                                            <option value="167">Panama</option>
                                                            <option value="168">Papua New Guinea</option>
                                                            <option value="169">Paraguay</option>
                                                            <option value="170">Peru</option>
                                                            <option value="171">Philippines</option>
                                                            <option value="172">Pitcairn</option>
                                                            <option value="173">Poland</option>
                                                            <option value="174">Portugal</option>
                                                            <option value="175">Puerto Rico</option>
                                                            <option value="176">Qatar</option>
                                                            <option value="177">Reunion</option>
                                                            <option value="178">Romania</option>
                                                            <option value="179">Russian Federation</option>
                                                            <option value="180">Rwanda</option>
                                                            <option value="181">Saint Kitts and Nevis</option>
                                                            <option value="182">Saint Lucia</option>
                                                            <option value="183">Saint Vincent and the Grenadines</option>
                                                            <option value="184">Samoa</option>
                                                            <option value="185">San Marino</option>
                                                            <option value="186">Sao Tome and Principe</option>
                                                            <option value="187">Saudi Arabia</option>
                                                            <option value="188">Senegal</option>
                                                            <option value="189">Serbia</option>
                                                            <option value="190">Seychelles</option>
                                                            <option value="191">Sierra Leone</option>
                                                            <option value="192">Singapore</option>
                                                            <option value="193">Slovakia</option>
                                                            <option value="194">Slovenia</option>
                                                            <option value="195">Solomon Islands</option>
                                                            <option value="196">Somalia</option>
                                                            <option value="197">South Africa</option>
                                                            <option value="198">South Georgia South Sandwich Islands</option>
                                                            <option value="199">Spain</option>
                                                            <option value="200">Sri Lanka</option>
                                                            <option value="201">St. Helena</option>
                                                            <option value="202">St. Pierre and Miquelon</option>
                                                            <option value="203">Sudan</option>
                                                            <option value="204">Suriname</option>
                                                            <option value="205">Svalbarn and Jan Mayen Islands</option>
                                                            <option value="206">Swaziland</option>
                                                            <option value="207">Sweden</option>
                                                            <option value="208">Switzerland</option>
                                                            <option value="209">Syrian Arab Republic</option>
                                                            <option value="210">Taiwan</option>
                                                            <option value="211">Tajikistan</option>
                                                            <option value="212">Tanzania, United Republic of</option>
                                                            <option value="213">Thailand</option>
                                                            <option value="214">Togo</option>
                                                            <option value="215">Tokelau</option>
                                                            <option value="216">Tonga</option>
                                                            <option value="217">Trinidad and Tobago</option>
                                                            <option value="218">Tunisia</option>
                                                            <option value="219">Turkey</option>
                                                            <option value="220">Turkmenistan</option>
                                                            <option value="221">Turks and Caicos Islands</option>
                                                            <option value="222">Tuvalu</option>
                                                            <option value="223">Uganda</option>
                                                            <option value="224">Ukraine</option>
                                                            <option value="225">United Arab Emirates</option>
                                                            <option value="226">United Kingdom</option>
                                                            <option value="227">United States minor outlying islands</option>
                                                            <option value="228">Uruguay</option>
                                                            <option value="229">Uzbekistan</option>
                                                            <option value="230">Vanuatu</option>
                                                            <option value="231">Vatican City State</option>
                                                            <option value="232">Venezuela</option>
                                                            <option value="233">Vietnam</option>
                                                            <option value="238">Yemen</option>
                                                            <option value="239">Yugoslavia</option>
                                                            <option value="240">Zaire</option>
                                                            <option value="241">Zambia</option>
                                                            <option value="242">Zimbabwe</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="form-group">
                                                        <label for="category_">Category</label>
                                                        <select class="form-control show-tick" id="category_" name="category_">
                                                            <option value="all">All</option>
                                                            <option value="other">Other</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="form-group">
                                                        <button id="submit" class="btn btn-main">Search</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <input type="hidden" name="page_id" value="1" id="page_id" />
                                        </form>
                                    </div>
                                </div>

                                <div class="col-md-8">
                                    <div class="subscriptions-list">
                                        <div class="row author-list pt_movie_list">
                                            <div class="col-md-4">
                                                <div class="video-wrapper" data-id="6511" id="video-6511">
                                                    <a class="pt_mv_list_thumb" href="https://clikview.com/watch/godzilla-vs-kong-official-trailer_JxrpOCwdrIIsW4k.html" data-load="?link1=watch&amp;id=godzilla-vs-kong-official-trailer_JxrpOCwdrIIsW4k.html">
                                                        <img src="https://clikview.com/upload/photos/2022/11/g8DzH8g4VxSL51K2Rg5X_25_f771d2b4a1cae1ab6c7da85a6d242657_image.jpg" alt="Godzilla vs. Kong – Official Trailer" />
                                                        <div>
                                                            <div class="stars">
                                                                <svg height="14" width="14" class="star rating" viewBox="0 0 24 24"><path d="M6.516,14.323l-1.49,6.452c-0.092,0.399,0.068,0.814,0.406,1.047C5.603,21.94,5.801,22,6,22 c0.193,0,0.387-0.056,0.555-0.168L12,18.202l5.445,3.63c0.348,0.232,0.805,0.223,1.145-0.024c0.338-0.247,0.487-0.68,0.372-1.082 l-1.829-6.4l4.536-4.082c0.297-0.268,0.406-0.686,0.278-1.064c-0.129-0.378-0.47-0.644-0.868-0.676L15.378,8.05l-2.467-5.461 C12.75,2.23,12.393,2,12,2s-0.75,0.23-0.911,0.589L8.622,8.05L2.921,8.503C2.529,8.534,2.192,8.791,2.06,9.16 c-0.134,0.369-0.038,0.782,0.242,1.056L6.516,14.323z"></path></svg> 5
                                                                &nbsp;&nbsp;<span class="bold">·</span>&nbsp;&nbsp;<span class="mv_qualt">CAMRip</span>
                                                            </div>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M10,16.5V7.5L16,12M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"></path></svg>
                                                        </div>
                                                    </a>
                                                    <div class="mv_img_shdw"><div class="mv_pr_blck"></div></div>
                                                    <div class="pt_mv_info">
                                                        <div class="pt_mv_info_innr">
                                                            <h3><a href="https://clikview.com/watch/godzilla-vs-kong-official-trailer_JxrpOCwdrIIsW4k.html" data-load="?link1=watch&amp;id=godzilla-vs-kong-official-trailer_JxrpOCwdrIIsW4k.html">Godzilla vs. Kong – Official Trailer</a></h3>
                                                            <div>
                                                                <span>2021</span>&nbsp;<span class="bold">·</span>&nbsp;<span>Other</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <!--<div class="video-views vid_stud_stats">
			<p>⁣From Warner Bros. Pictures and Legendary Pictures comes the long-awaited face-off between two icons, “Godzilla vs. Kong,” the next epic adventure in Legendary’s cinematic Monsterverse, directed by Adam Wingard.  <br>  <br>Legends collide in “Godzilla vs. Kong” as these mythic adversaries meet in a spectacular battle for the ages, with the fate of the world hanging in the balance.  Kong and his protectors undertake a perilous journey to find his true home, and with them is Jia, a young orphaned girl with whom he has formed a unique and powerful bond.  But they unexpectedly find themselves in the path of an enraged Godzilla, cutting a swath of destruction across the globe.  The epic clash between the two titans—instigated by unseen forces—is only the beginning of the mystery that lies deep within the core of the Earth.  <br>  <br>The film stars Alexander Skarsgård (“Big Little Lies,” “The Little Drummer Girl”), Millie Bobby Brown (“Stranger Things”), Rebecca Hall (“Christine,” “Professor Marston and the Wonder Women”), Brian Tyree Henry (“Joker,” “Spider-Man: Into the Spider-Verse”), Shun Oguri (“Weathering with You”), Eiza González (“Fast &amp; Furious Presents: Hobbs &amp; Shaw”), Julian Dennison (“Deadpool 2”), with Kyle Chandler (“Godzilla: King of the Monsters”) and Demián Bichir (“The Nun,” “The Hateful Eight”).  <br>Wingard (“The Guest,” “You’re Next”) directed from a screenplay by Eric Pearson (“Thor: Ragnarok”) and Max Borenstein (“Godzilla: King of the Monsters,” “Kong: Skull Island”), story by Terry Rossio (“Pirates of the Caribbean: Dead Men Tell No Tales”) and Michael Dougherty &amp; Zach Shields (“Godzilla: King of the Monsters”), based on the character “Godzilla” owned and created by TOHO CO., LTD.  The film was produced by Mary Parent, Alex Garcia, Eric McLeod, Jon Jashni, Thomas Tull and Brian Rogers, with Jay Ashenfelter, Herbert W. Gains, Dan Lin, Roy Lee, Yoshimitsu Banno and Kenji Okuhira executive producing.  <br>  <br>The director’s behind-the-scenes creative team included director of photography Ben Seresin (“The Mummy,” “World War Z”), production designers Owen Paterson (“Jumanji: Welcome to the Jungle,” “Godzilla”) and Thomas S. Hammock (“Blair Witch”), editor Josh Schaeffer (“Godzilla: King of the Monsters”), costume designer Ann Foley (“Skyscraper”) and visual effects supervisor John “DJ” DesJardin (upcoming “Zack Snyder’s Justice League”).  <br>  <br>Warner Bros. Pictures and Legendary Pictures Present a Legendary Pictures Production, A Film By Adam Wingard, “Godzilla vs. Kong.”  The film will be released nationwide in 2D and 3D in select theaters and IMAX on March 26, 2021 and will be available in the U.S. on HBO Max for 31 days from theatrical release.  It is rated PG-13 for intense sequences of creature violence/destruction and brief language.</p>
            <span>Stars : &nbsp;5</span>
            <br>
            <span>Producer : &nbsp;Gozilla</span>
        </div>--> */}
                                                    <div class="clear"></div>
                                                </div>
                                            </div><div class="col-md-4">
                                                <div class="video-wrapper" data-id="6510" id="video-6510">
                                                    <a class="pt_mv_list_thumb" href="https://clikview.com/watch/assassin-039-s-creed-valhalla-official-trailer_xCK48Xt4dMXbvQc.html" data-load="?link1=watch&amp;id=assassin-039-s-creed-valhalla-official-trailer_xCK48Xt4dMXbvQc.html">
                                                        <img src="https://clikview.com/upload/photos/2022/11/t5rfulVFdFpa94Z8HPMQ_25_cb403114a74f1b4137554bca6315ea84_image.jpg" alt="Assassin's Creed Valhalla - Official Trailer" />
                                                        <div>
                                                            <div class="stars">
                                                                <svg height="14" width="14" class="star rating" viewBox="0 0 24 24"><path d="M6.516,14.323l-1.49,6.452c-0.092,0.399,0.068,0.814,0.406,1.047C5.603,21.94,5.801,22,6,22 c0.193,0,0.387-0.056,0.555-0.168L12,18.202l5.445,3.63c0.348,0.232,0.805,0.223,1.145-0.024c0.338-0.247,0.487-0.68,0.372-1.082 l-1.829-6.4l4.536-4.082c0.297-0.268,0.406-0.686,0.278-1.064c-0.129-0.378-0.47-0.644-0.868-0.676L15.378,8.05l-2.467-5.461 C12.75,2.23,12.393,2,12,2s-0.75,0.23-0.911,0.589L8.622,8.05L2.921,8.503C2.529,8.534,2.192,8.791,2.06,9.16 c-0.134,0.369-0.038,0.782,0.242,1.056L6.516,14.323z"></path></svg> 8
                                                                &nbsp;&nbsp;<span class="bold">·</span>&nbsp;&nbsp;<span class="mv_qualt">CAMRip</span>
                                                            </div>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M10,16.5V7.5L16,12M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"></path></svg>
                                                        </div>
                                                    </a>
                                                    <div class="mv_img_shdw"><div class="mv_pr_blck"></div></div>
                                                    <div class="pt_mv_info">
                                                        <div class="pt_mv_info_innr">
                                                            <h3><a href="https://clikview.com/watch/assassin-039-s-creed-valhalla-official-trailer_xCK48Xt4dMXbvQc.html" data-load="?link1=watch&amp;id=assassin-039-s-creed-valhalla-official-trailer_xCK48Xt4dMXbvQc.html">Assassin's Creed Valhalla - Official Trailer</a></h3>
                                                            <div>
                                                                <span>2020</span>&nbsp;<span class="bold">·</span>&nbsp;<span>Other</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <!--<div class="video-views vid_stud_stats">
			<p>⁣The first trailer for Assassin&#039;s Creed Valhalla is here. Check out our first look at Vikings in the long running franchise.</p>
            <span>Stars : &nbsp;8</span>
            <br>
            <span>Producer : &nbsp;Assasin</span>
        </div>--> */}
                                                    <div class="clear"></div>
                                                </div>
                                            </div><div class="col-md-4">
                                                <div class="video-wrapper" data-id="6509" id="video-6509">
                                                    <a class="pt_mv_list_thumb" href="https://clikview.com/watch/avatar-the-way-of-water-official-trailer_c95oelhth7V6x7a.html" data-load="?link1=watch&amp;id=avatar-the-way-of-water-official-trailer_c95oelhth7V6x7a.html">
                                                        <img src="https://clikview.com/upload/photos/2022/11/5umyldptHPLkUQiMk6bt_25_8f0b17e2a2352704e8240946c1aee194_image.jpg" alt="Avatar: The Way of Water | Official Trailer" />
                                                        <div>
                                                            <div class="stars">
                                                                <svg height="14" width="14" class="star rating" viewBox="0 0 24 24"><path d="M6.516,14.323l-1.49,6.452c-0.092,0.399,0.068,0.814,0.406,1.047C5.603,21.94,5.801,22,6,22 c0.193,0,0.387-0.056,0.555-0.168L12,18.202l5.445,3.63c0.348,0.232,0.805,0.223,1.145-0.024c0.338-0.247,0.487-0.68,0.372-1.082 l-1.829-6.4l4.536-4.082c0.297-0.268,0.406-0.686,0.278-1.064c-0.129-0.378-0.47-0.644-0.868-0.676L15.378,8.05l-2.467-5.461 C12.75,2.23,12.393,2,12,2s-0.75,0.23-0.911,0.589L8.622,8.05L2.921,8.503C2.529,8.534,2.192,8.791,2.06,9.16 c-0.134,0.369-0.038,0.782,0.242,1.056L6.516,14.323z"></path></svg> 9
                                                                &nbsp;&nbsp;<span class="bold">·</span>&nbsp;&nbsp;<span class="mv_qualt">CAMRip</span>
                                                            </div>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M10,16.5V7.5L16,12M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"></path></svg>
                                                        </div>
                                                    </a>
                                                    <div class="mv_img_shdw"><div class="mv_pr_blck"></div></div>
                                                    <div class="pt_mv_info">
                                                        <div class="pt_mv_info_innr">
                                                            <h3><a href="https://clikview.com/watch/avatar-the-way-of-water-official-trailer_c95oelhth7V6x7a.html" data-load="?link1=watch&amp;id=avatar-the-way-of-water-official-trailer_c95oelhth7V6x7a.html">Avatar: The Way of Water | Official Trailer</a></h3>
                                                            <div>
                                                                <span>2021</span>&nbsp;<span class="bold">·</span>&nbsp;<span>Other</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <!--<div class="video-views vid_stud_stats">
			<p>⁣Set more than a decade after the events of the first film, “Avatar: The Way of Water” begins to tell the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.  <br>Directed by James Cameron and produced by Cameron and Jon Landau, the Lightstorm Entertainment Production</p>
            <span>Stars : &nbsp;9</span>
            <br>
            <span>Producer : &nbsp;Avatar</span>
        </div>--> */}
                                                    <div class="clear"></div>
                                                </div>
                                            </div><div class="col-md-4">
                                                <div class="video-wrapper" data-id="6508" id="video-6508">
                                                    <a class="pt_mv_list_thumb" href="https://clikview.com/watch/spider-man-no-way-home-exclusive_K7gFGnEXFjhizEM.html" data-load="?link1=watch&amp;id=spider-man-no-way-home-exclusive_K7gFGnEXFjhizEM.html">
                                                        <img src="https://clikview.com/upload/photos/2022/11/nG7rgxcvIadCeORfqIIV_25_8155f3e091336e62c1ac1a70f4ba8ce6_image.jpg" alt="Spider man no way home exclusive" />
                                                        <div>
                                                            <div class="stars">
                                                                <svg height="14" width="14" class="star rating" viewBox="0 0 24 24"><path d="M6.516,14.323l-1.49,6.452c-0.092,0.399,0.068,0.814,0.406,1.047C5.603,21.94,5.801,22,6,22 c0.193,0,0.387-0.056,0.555-0.168L12,18.202l5.445,3.63c0.348,0.232,0.805,0.223,1.145-0.024c0.338-0.247,0.487-0.68,0.372-1.082 l-1.829-6.4l4.536-4.082c0.297-0.268,0.406-0.686,0.278-1.064c-0.129-0.378-0.47-0.644-0.868-0.676L15.378,8.05l-2.467-5.461 C12.75,2.23,12.393,2,12,2s-0.75,0.23-0.911,0.589L8.622,8.05L2.921,8.503C2.529,8.534,2.192,8.791,2.06,9.16 c-0.134,0.369-0.038,0.782,0.242,1.056L6.516,14.323z"></path></svg> 8
                                                                &nbsp;&nbsp;<span class="bold">·</span>&nbsp;&nbsp;<span class="mv_qualt">CAMRip</span>
                                                            </div>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M10,16.5V7.5L16,12M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"></path></svg>
                                                        </div>
                                                    </a>
                                                    <div class="mv_img_shdw"><div class="mv_pr_blck"></div></div>
                                                    <div class="pt_mv_info">
                                                        <div class="pt_mv_info_innr">
                                                            <h3><a href="https://clikview.com/watch/spider-man-no-way-home-exclusive_K7gFGnEXFjhizEM.html" data-load="?link1=watch&amp;id=spider-man-no-way-home-exclusive_K7gFGnEXFjhizEM.html">Spider man no way home exclusive</a></h3>
                                                            <div>
                                                                <span>2022</span>&nbsp;<span class="bold">·</span>&nbsp;<span>Other</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <!--<div class="video-views vid_stud_stats">
			<p>⁣⁣What happens after Spider-Man&#039;s identity is revealed to the world? Check out the first 10 minutes of #SpiderManNoWayHome!</p>
            <span>Stars : &nbsp;8</span>
            <br>
            <span>Producer : &nbsp;Zendaya</span>
        </div>--> */}
                                                    <div class="clear"></div>
                                                </div>
                                            </div><div class="col-md-4">
                                                <div class="video-wrapper" data-id="4416" id="video-4416">
                                                    <a class="pt_mv_list_thumb" href="https://clikview.com/watch/rambo-last-blood_kxhGzD6zuxB4DLA.html" data-load="?link1=watch&amp;id=rambo-last-blood_kxhGzD6zuxB4DLA.html">
                                                        <img src="https://clikview.com/upload/photos/2022/11/pqe28zxMWESpppyCs1VU_25_9f6838c9f6ef54cf6ce87619f9b6e772_image.jpg" alt="Rambo Last Blood" />
                                                        <div>
                                                            <div class="stars">
                                                                <svg height="14" width="14" class="star rating" viewBox="0 0 24 24"><path d="M6.516,14.323l-1.49,6.452c-0.092,0.399,0.068,0.814,0.406,1.047C5.603,21.94,5.801,22,6,22 c0.193,0,0.387-0.056,0.555-0.168L12,18.202l5.445,3.63c0.348,0.232,0.805,0.223,1.145-0.024c0.338-0.247,0.487-0.68,0.372-1.082 l-1.829-6.4l4.536-4.082c0.297-0.268,0.406-0.686,0.278-1.064c-0.129-0.378-0.47-0.644-0.868-0.676L15.378,8.05l-2.467-5.461 C12.75,2.23,12.393,2,12,2s-0.75,0.23-0.911,0.589L8.622,8.05L2.921,8.503C2.529,8.534,2.192,8.791,2.06,9.16 c-0.134,0.369-0.038,0.782,0.242,1.056L6.516,14.323z"></path></svg> 5
                                                                &nbsp;&nbsp;<span class="bold">·</span>&nbsp;&nbsp;<span class="mv_qualt">HD DVD</span>
                                                            </div>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M10,16.5V7.5L16,12M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"></path></svg>
                                                        </div>
                                                    </a>
                                                    <div class="mv_img_shdw"><div class="mv_pr_blck"></div></div>
                                                    <div class="pt_mv_info">
                                                        <div class="pt_mv_info_innr">
                                                            <h3><a href="https://clikview.com/watch/rambo-last-blood_kxhGzD6zuxB4DLA.html" data-load="?link1=watch&amp;id=rambo-last-blood_kxhGzD6zuxB4DLA.html">Rambo Last Blood</a></h3>
                                                            <div>
                                                                <span>2019</span>&nbsp;<span class="bold">·</span>&nbsp;<span>Other</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <!--<div class="video-views vid_stud_stats">
			<p>⁣Rambo Last Blood</p>
            <span>Stars : &nbsp;5</span>
            <br>
            <span>Producer : &nbsp;Rambo</span>
        </div>--> */}
                                                    <div class="clear"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="clear"></div>
                                </div>
                            </div>
                        </div>
                        <br />
                        {/* <script type="text/javascript">
function GoToPage(page_id) {
	$('#page_id').val(page_id)
	$('#submit').click();
}
</script> */}
                    </div>
                    <input type="hidden" id="main-url" value="https://clikview.com%2Fauction" />
                    <div class="ads-placment" id="footer_ad_"></div>
                </div>
            </div>
        </div>
    )
}

export default Movies