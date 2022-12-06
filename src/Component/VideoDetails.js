import { React } from 'react'
// import { $ } from 'react-jquery-plugin'
// import Category from './Category';
import MobileSearch from './MobileSearch';
// import $ from 'jquery';

function VideoDetails(props) {
    const { searchOpen, expandNav } = props;
    //     useEffect(() => {
    //         $('.colorpickerf').colorpicker({
    //             horizontal: true,
    //             fallbackColor: '#04abf2'
    //         });
    //         function ChangeIframeColor(self) {
    //             let src = "https://clikview.com/embed/LYMxry6keqm2jtW";
    //             let final_src = src + "?color=" + $(self).val().replace('#', '');
    //             $('#embed_box').find('#embed').val('<iframe src="' + final_src + '" frameborder="0" width="700" height="400" allowfullscreen></iframe>')
    //             $('#embed_box').find('iframe').attr('src', final_src);
    //         }

    //             const video = document.querySelector('video');
    //             video.addEventListener('timeupdate', (event) => {
    //                 var end_time = parseInt((video.duration * 99) / 100);
    //                 var currentTime = parseInt(video.currentTime);
    //                 if ($('.card_end').length > 0 && currentTime === end_time) {
    //                     $('.card_end').slideDown();
    //                     // HideCard('card_end');
    //                 }
    //                 var ad_date = '';
    //                 var minutes = parseInt(video.currentTime / 60, 10);
    //                 var seconds = parseInt(video.currentTime % 60);
    //                 if (minutes < 10 && minutes > 0) {
    //                     ad_date = '0' + minutes + '_';
    //                 }
    //                 else if (minutes > 9) {
    //                     ad_date = minutes + '_';
    //                 }
    //                 else if (minutes == 0) {
    //                     ad_date = '00_';
    //                 }
    //                 if (seconds < 10 && seconds > 0) {
    //                     ad_date = ad_date + '0' + seconds;
    //                 }
    //                 else if (seconds > 9) {
    //                     ad_date = ad_date + seconds;
    //                 }
    //                 else if (seconds == 0) {
    //                     ad_date = ad_date + '00';
    //                 }
    //                 if ($('.card_' + ad_date).length > 0) {
    //                     $('.card_' + ad_date).slideDown();
    //                     // HideCard('card_' + ad_date);
    //                 }
    //             });




    //         var sources = [];
    //         for (var i = 0; i < $('video').find('source').length; i++) {
    //             sources[i] = parseFloat($($('video').find('source')[i]).attr('res'));
    //         }

    //         // var imageAddr = "http://www.kenrockwell.com/contax/images/g2/examples/31120037-5mb.jpg";
    //         // var downloadSize = 4995374;
    //         var imageAddr = site_url + "/upload/photos/speed.jpg";
    //         var downloadSize = 1082828;
    //         function getQuality() {
    //             MeasureConnectionSpeed();


    //             function MeasureConnectionSpeed() {
    //                 if (getCookie('internet_speed') > 0) {
    //                     showResults(getCookie('internet_speed'))
    //                 }
    //                 else {
    //                     var startTime, endTime;
    //                     var download = new Image();
    //                     download.onload = function () {
    //                         endTime = (new Date()).getTime();
    //                         showResults();
    //                     }

    //                     download.onerror = function (err, msg) {
    //                         ShowProgressMessage(0);
    //                     }

    //                     startTime = (new Date()).getTime();
    //                     var cacheBuster = "?nnn=" + startTime;
    //                     download.src = imageAddr + cacheBuster;
    //                 }
    //                 //console.log($.cookie("internet_speed"));


    //                 function showResults(speed = 0) {
    //                     if (speed == 0) {
    //                         var duration = (endTime - startTime) / 1000;
    //                         var bitsLoaded = downloadSize * 8;
    //                         var speedBps = (bitsLoaded / duration).toFixed(2);
    //                         var speedKbps = (speedBps / 1024).toFixed(2);
    //                         var speedMbps = (speedKbps / 1024).toFixed(2);
    //                         setCookie("internet_speed", speedKbps, 1);

    //                     }
    //                     else {
    //                         speedKbps = speed;
    //                         if (speed < 240) {
    //                             speedKbps = 250;
    //                         }
    //                     }
    //                     for (var i = 0; i < sources.length; i++) {
    //                         if (sources[i] < parseFloat(speedKbps)) {
    //                             is_clicked = true;
    //                             video_source = sources[i];
    //                             $('#' + $('.mejs__container').attr('id') + '-qualities-' + video_source + 'p').click();
    //                             $('.mejs__qualities-button').find('button').text('auto');
    //                             $('.mejs__qualities-selector-label').removeClass('mejs__qualities-selected');
    //                             $('#quality__auto').addClass('mejs__qualities-selected');
    //                             break;
    //                         }
    //                     }
    //                 }
    //             }
    //         }
    //         function setAuto(self) {
    //             $('.mejs__qualities-button').find('button').text('auto');
    //             $('.mejs__qualities-selector-label').removeClass('mejs__qualities-selected');
    //             $('#quality__auto').addClass('mejs__qualities-selected');
    //             getQuality();
    //             setTimeout(function (argument) {
    //                 setCookie('auto', 'auto', 1);
    //             }, 1000);
    //         }
    //             $('video').addEventListener("loadeddata", function () {
    //                 setCookie('auto', '', 1);
    //             });
    //         function go_to_duration(duration) {
    //             window.scrollTo(0, 0);
    //             var vid = document.querySelector("video");
    //             vid.currentTime = duration;
    //             vid.play();
    //         }

    //         $(document).ready(function () {



    //             $('video').mediaelementplayer({
    //                 pluginPath: 'https://cdnjs.com/libraries/mediaelement-plugins/',
    //                 shimScriptAccess: 'always',
    //                 autoplay: true,
    //                 features: ['playpause', 'current', 'progress', 'duration', 'speed', 'skipback', 'jumpforward', 'tracks', 'markers', 'volume', 'chromecast', 'contextmenu', 'flash', 'quality', 'fullscreen'],
    //                 vastAdTagUrl: '',
    //                 vastAdsType: '',
    //                 jumpForwardInterval: 10,
    //                 adsPrerollMediaUrl: [''],
    //                 adsPrerollAdUrl: [''],
    //                 adsPrerollAdEnableSkip: false,
    //                 adsPrerollAdSkipSeconds: 0,
    //                 contextMenuItems: [{ isSeparator: true }],
    //                 success: function (media) {
    //                     $(`<a href="https://clikview.com"><svg Style="width: 90px;" version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 763 210">
    //        <title>logo-light</title>
    //        <defs>
    //            <image  width="752" height="206" id="img1" href="data:image/png;base64,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"></image>
    //        </defs>
    //        <style>
    //        </style>
    //        <use id="Background" href="#img1" x="7" y="2"></use>
    //    </svg></a>`).insertAfter(".mejs__button.mejs__fullscreen-button")
    //                     qualityTag = $(".mejs__button.mejs__qualities-button button");
    //                     if (qualityTag.html() == "null") {
    //                         qualityTag.html("Auto");
    //                         $(".mejs__qualities-selector").css("display", "none")
    //                     }
    //                     media.addEventListener('ended', function (e) {
    //                         $('#adContainer').slideUp();
    //                         src = $('video').attr('src');
    //                         sources = $('video').find('source');
    //                         for (var i = sources.length - 1; i >= 0; i--) {
    //                             if ($(sources[i]).attr('src') == src) {
    //                                 if ($('#autoplay').is(":checked")) {
    //                                     var url = $('#next-video').find('a').attr('href');
    //                                     if (url) {
    //                                         window.location.href = url;
    //                                     }
    //                                 }
    //                                 else {
    //                                     /* pass */
    //                                 }
    //                             }
    //                         }


    //                     }, false);

    //                     media.addEventListener('playing', function (e) {
    //                         // if (pt_elexists('.ads-overlay-info')) {
    //                         //     $('.ads-overlay-info').remove();
    //                         // }



    //                         $('.ads-test').remove();

    //                         if ($('body').attr('resized') == 'true') {
    //                             PT_Resize(true);
    //                         }
    //                         $('.mejs__container').css('height', ($('.mejs__container').width() / 1.77176216) + 'px');
    //                         $('video, iframe').css('height', '100%');
    //                     });
    //                 },
    //             });
    //             if (sources.length > 1) {
    //                 setTimeout(function () {
    //                     $('.mejs__qualities-selector-list').append('<li class="mejs__qualities-selector-list-item" onclick="setAuto(this)"><input class="mejs__qualities-selector-input" type="radio" name="mep_0_qualities" value="auto" id="mep_0-qualities-auto"><label for="mep_0-qualities-auto" class="mejs__qualities-selector-label" id="quality__auto">auto</label></li>');
    //                 }, 1000);
    //             }





    //         })

    //         function copyLinkfn() {
    //             var copyText = document.getElementById("copyLink");
    //             copyText.select();
    //             // document.execCommand("copy");
    //         };


    //             $('.shopping_block_mobile').slick({

    //                 infinite: false,

    //                 slidesToShow: 4,

    //                 slidesToScroll: 2,

    //                 responsive: [

    //                     {

    //                         breakpoint: 1800,

    //                         settings: {

    //                             slidesToShow: 3

    //                         }

    //                     },

    //                     {

    //                         breakpoint: 1395,

    //                         settings: {

    //                             slidesToShow: 2

    //                         }

    //                     },

    //                     {

    //                         breakpoint: 1127,

    //                         settings: {

    //                             slidesToShow: 2

    //                         }

    //                     },

    //                     {

    //                         breakpoint: 992,

    //                         settings: {

    //                             slidesToShow: 2

    //                         }

    //                     },

    //                     {

    //                         breakpoint: 910,

    //                         settings: {

    //                             slidesToShow: 2

    //                         }

    //                     },

    //                     {

    //                         breakpoint: 705,

    //                         settings: {

    //                             slidesToShow: 2

    //                         }

    //                     },

    //                     {

    //                         breakpoint: 530,

    //                         settings: {

    //                             arrows: false,

    //                             slidesToShow: 2,

    //                             waitForAnimate: false,

    //                         }

    //                     },

    //                     {

    //                         breakpoint: 485,

    //                         settings: {

    //                             arrows: false,

    //                             slidesToShow: 2,

    //                             slidesToScroll: 1,

    //                             waitForAnimate: false,

    //                         }

    //                     }

    //                 ]

    //             });

    //             $('.shopping_block').slick({

    //                 infinite: false,

    //                 slidesToShow: 4,

    //                 slidesToScroll: 2,

    //                 responsive: [

    //                     {

    //                         breakpoint: 1360,

    //                         settings: {

    //                             slidesToShow: 4

    //                         }

    //                     },

    //                     {

    //                         breakpoint: 1251,

    //                         settings: {

    //                             slidesToShow: 5

    //                         }

    //                     },

    //                     {

    //                         breakpoint: 1127,

    //                         settings: {

    //                             slidesToShow: 4

    //                         }

    //                     },

    //                     {

    //                         breakpoint: 992,

    //                         settings: {

    //                             slidesToShow: 4

    //                         }

    //                     },

    //                     {

    //                         breakpoint: 910,

    //                         settings: {

    //                             slidesToShow: 3

    //                         }

    //                     },

    //                     {

    //                         breakpoint: 705,

    //                         settings: {

    //                             slidesToShow: 2

    //                         }

    //                     },

    //                     {

    //                         breakpoint: 530,

    //                         settings: {

    //                             arrows: false,

    //                             slidesToShow: 2,

    //                             waitForAnimate: false,

    //                         }

    //                     },

    //                     {

    //                         breakpoint: 485,

    //                         settings: {

    //                             arrows: false,

    //                             slidesToShow: 2,

    //                             slidesToScroll: 1,

    //                             waitForAnimate: false,

    //                         }

    //                     }

    //                 ]

    //             });



    //             var width = $('.video-player').width().toString();
    //             var width = width.substring(0, width.lastIndexOf("."))
    //             $('.fb-video').attr('data-width', width);
    //             //$( 'iframe' ).attr( 'src', function ( i, val ) { return val; });
    //             $("#load-related-videos").click(function (event) {
    //                 let id = 0;
    //                 if ($("div[data-sidebar-video]").length > 0) {
    //                     id = $("div[data-sidebar-video]").last().attr('data-sidebar-video');
    //                 }

    //                 $("#load-related-videos").find('i.spin').removeClass('hidden');

    //                 $.ajax({
    //                     url: 'https://clikview.com/aj/load-related-videos',
    //                     type: 'GET',
    //                     dataType: 'json',
    //                     data: { id: id, video_id: '138' },
    //                 })
    //                     .done(function (data) {
    //                         if (data.status == 200) {
    //                             $(".related-videos").append(data.html);
    //                         }
    //                         else {
    //                             $("#load-related-videos").find('span').text('No more videos found');
    //                         }
    //                         $("#load-related-videos").find('i.spin').addClass('hidden');

    //                     });
    //             });

    //         $('.ad-link').on('click', function (event) {
    //             $('.ad-link').remove();
    //             $('video')[0].play();
    //         });

    //         $('.autoplay-video').on('change', function (event) {
    //             event.preventDefault();
    //             var checked = 1;
    //             if ($(this).is(":checked")) {
    //                 checked = 2;
    //             }
    //             $.post('https://clikview.com/aj/set-cookies', { name: 'autoplay', value: checked });
    //         });
    //         $('.ads-test').on('click', function (event) {
    //             $(this).remove();
    //         });


    //         $(function () {

    //             $('.rad-transaction').on('click',function (event) {
    //                 $(this).off("click").removeClass('rad-transaction');
    //                 $.get('https://clikview.com/aj/ads/rad-transaction', function (data) { /* pass */ });
    //             });

    //             if ($('[data-litsitem-id]').length > 4) {
    //                 var listItemtopPos = $("div[data-litsitem-id=LYMxry6keqm2jtW]").offset();
    //                 $('.play-list-cont').scrollTop((listItemtopPos.top - 170));
    //             }

    //             $('#save-button').on('click', function (event) {
    //                 event.preventDefault();
    //                 var logged = $('#main-container').attr('data-logged');
    //                 if (!logged) {
    //                     window.location.href = "https://clikview.com/login?to=https://clikview.com%2Fpage_loading.php%3Flink1%3Dwatch%26id%3DLYMxry6keqm2jtW%26hash%3D3f9f0a7f1107a6d1ef1b88a247657f010604fdc6%26_%3D1670118628694";
    //                     return false;
    //                 }
    //                 var video_id = $('#video-id').val();
    //                 if ($(this).attr('saved')) {
    //                     $(this).html('<i class="fa fa-floppy-o fa-fw"></i> Save');
    //                     $(this).removeAttr('saved');
    //                 } else {
    //                     $(this).html('<i class="fa fa-check fa-fw"></i> Saved');
    //                     $(this).attr('saved', 'true');
    //                 }
    //                 $.post('https://clikview.com/aj/save-video', { video_id: video_id });
    //             });
    //             $('.desc').on('click', function (event) {
    //                 event.preventDefault();
    //                 if ($(this).hasClass('expended')) {
    //                     $('.watch-video-description').css({
    //                         'max-height': '100px',
    //                         'height': '100px',
    //                         'overflow': 'hidden'
    //                     });
    //                     $(this).removeClass('expended');
    //                     $(this).text("Show more");
    //                 } else {
    //                     $('.watch-video-description').css({
    //                         'max-height': '4000px',
    //                         'height': 'auto',
    //                         'overflow': 'auto'
    //                     });
    //                     $(this).addClass('expended');
    //                     $(this).text("Show less");
    //                 }
    //             });


    //             //  $('video').mediaelementplayer({
    //             //    pluginPath: 'https://cdnjs.com/libraries/mediaelement-plugins/',
    //             //    shimScriptAccess: 'always',
    //             //    autoplay: true,
    //             //    features: ['playpause', 'current', 'progress', 'duration', 'speed', 'skipback', 'jumpforward', 'tracks', 'markers', 'volume', 'chromecast', 'contextmenu', 'flash' , 'quality'  , 'fullscreen'],
    //             //    vastAdTagUrl: '',
    //             //    vastAdsType: '',
    //             //    jumpForwardInterval: 10,
    //             //    adsPrerollMediaUrl: [''],
    //             //    adsPrerollAdUrl: [''],
    //             //    adsPrerollAdEnableSkip: false,
    //             //    adsPrerollAdSkipSeconds: 0,
    //             // contextMenuItems: [{ isSeparator: true }],
    //             //    success: function (media) {
    //             //        media.addEventListener('ended', function (e) {
    //             //          if ($('#autoplay').is(":checked")) {
    //             //             var url = $('#next-video').find('a').attr('href');
    //             //             if (url) {
    //             //                window.location.href = url;
    //             //             }
    //             //          }
    //             //          else{
    //             //            /* pass */
    //             //          }
    //             //        }, false);

    //             //        media.addEventListener('playing', function (e) {
    //             //          if (pt_elexists('.ads-overlay-info')) {
    //             //            $('.ads-overlay-info').remove();
    //             //          }



    //             //          $('.ads-test').remove();

    //             //          if ($('body').attr('resized') == 'true') {
    //             //              PT_Resize(true);
    //             //          }
    //             //          $('.mejs__container').css('height', ($('.mejs__container').width() / 1.77176216) + 'px');
    //             //          $('video, iframe').css('height', '100%');
    //             //        });
    //             //    },
    //             //  });

    //             $('.expend-player').on('click', function (event) {
    //                 event.preventDefault();
    //                 $('body').removeClass('side_open');
    //                 // SlideEraseCookie('open_slide');
    //                 var resize = 0;
    //                 if ($('.player-video').hasClass('col-md-12')) {
    //                     resize = 0;
    //                 } else {
    //                     resize = 1;
    //                 }
    //                 $.post('https://clikview.com/aj/set-cookies', { name: 'resize', value: resize });
    //                 PT_Resize();
    //             });
    //             $(window).resize(function (event) {
    //                 if ($('body').attr('resized') == 'true') {
    //                     PT_Resize(true);
    //                 }
    //             });
    //         });

    //         function PT_Resize(type) {
    //             if ($('.player-video').hasClass('col-md-12') && type != true) {
    //                 $('.player-video').addClass('col-md-8');
    //                 $('.player-video').removeClass('col-md-12');
    //                 $('.player-video').css('margin-bottom', '0');
    //                 $('.mejs__container, video, iframe').css('width', '100%');
    //                 $('video, iframe').css('height', '100%');
    //                 $('body').attr('resized', 'false');
    //                 $('.yp_side_drawer').removeClass('hide_side_menu');
    //                 $('.yp_side_menu').addClass('has_side_menu');
    //             } else {
    //                 $('.player-video').removeClass('col-md-8');
    //                 $('.player-video').addClass('col-md-12');
    //                 $('.player-video').css('margin-bottom', '20px');
    //                 $('.mejs__container, video, iframe').css('width', '100%');
    //                 $('video, iframe').css('height', '100%');
    //                 $('body').attr('resized', 'true');
    //                 $('.yp_side_drawer').addClass('hide_side_menu');
    //                 $('.yp_side_menu').removeClass('has_side_menu');
    //             }
    //         };

    //         function growTextarea(i, elem) {
    //             var elem = $(elem);
    //             var resizeTextarea = function (elem) {
    //                 var scrollLeft = window.pageXOffset || (document.documentElement || document.body.parentNode || document.body).scrollLeft;
    //                 var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
    //                 elem.css('height', 'auto').css('height', elem.prop('scrollHeight'));
    //                 window.scrollTo(scrollLeft, scrollTop);
    //             };
    //             elem.on('input', function () {
    //                 resizeTextarea($(this));
    //             });
    //             resizeTextarea($(elem));
    //         }

    //         $('.jTextarea').each(growTextarea);

    //         $.post('https://clikview.com/aj/views?hash=' + $('.main_session').val() + '&type_=add', { video_id: 138 }, function (data, textStatus, xhr) {
    //             if (data.status == 200) {
    //                 $('#video-views-count').html(data.count);
    //             }
    //         });

    //     }, [])

    return (
        <div className={expandNav ? "main-container shrinkWidth bodyfixed" : "main-container expandWidth"} Style="z-index:-1">
            {searchOpen ? <MobileSearch /> : ""}
            <div className="yp_side_menu has_side_menu">
                <div id="main-container" className="main-content  container container-full  ">
                    <div className="ads-placment" id="header_ad_"></div>
                    <div className="announcement-renderer">

                    </div>
                    <div id="container_content"><input type="hidden" id="json-data" value="{&quot;title&quot;:&quot;Live in Costa Rica \ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c\udfff Retire n Relocate to CR Expat Interviews&quot;,&quot;description&quot;:&quot;Riley and Tezzy have been living in Grecia Costa Rica for 2 1\/2 years.  Riley from the United States and Tezzy from the Philippines. How did they pick Costa Rica? Have they been to Costa Rica before? Did they take a relo&quot;,&quot;keyword&quot;:&quot;Costa Rica,Poland,United States,living in Costa Rica,Costa Rica Life,expat interviews,Travel Costa Rica Now,michael alan,working in Costa Rica,speaking spanish,residency,pura vida,living abroad,international living,tico culture,children,relocation tour,where to live in Costa Rica,retiring in Costa Rica,La Fortuna,interracial,interracial couple,Grecia,Costa Rica food,gallo pinto,Philippines,retirement,simple life,Pura Vida,relocate,due diligence&quot;,&quot;page&quot;:&quot;watch&quot;,&quot;url&quot;:&quot;https:\/\/clikview.com\/watch\/live-in-costa-rica-retire-n-relocate-to-cr-expat-interviews_C6I4dsl3UGZ8cHj.html&quot;,&quot;is_movie&quot;:false}" />

                        <div className="top-video video-player-page six_padding_15" id="padding_15">
                            <div className="row" Style="position:relative;">
                                <div className="row">
                                    <div className="col-md-8 player-video yp_pub_elemnt ">
                                        <div className="sticky-container__wrap sticky-container_in-content" Style="height: 526px;">
                                            <div className="video-player pt_video_player  sticky-container__video" id="post_live_video_397">
                                                <span className="mejs__offscreen">Video Player</span>
                                                <div id="mep_0" className="mejs__container mejs__video" tabindex="0" role="application" aria-label="Video Player" Style="width: 934.263px; height: 525.523px; min-width: 359px;">
                                                    <div className="mejs__inner"><div className="mejs__mediaelement">
                                                        <mediaelementwrapper id="my-video">
                                                            <div id="my-video-iframe-overlay" className="mejs__iframe-overlay"></div>
                                                            <iframe id="my-video_youtube_iframe" frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title="Live in Costa Rica Interracial Couple 👩🏻‍🤝‍👨🏿 Retire n Relocate to CR Expat Interviews" src="https://www.youtube.com/embed/EpFiGT96ezM?controls=0&amp;rel=0&amp;disablekb=1&amp;showinfo=0&amp;modestbranding=0&amp;html5=1&amp;iv_load_policy=3&amp;autoplay=1&amp;end=0&amp;loop=0&amp;playsinline=1&amp;start=0&amp;nocookie=false&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fclikview.com&amp;widgetid=1" sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox" width="934.263" height="525.5229375" Style="height: 100%;"></iframe><video id="my-video_from_mejs" Style="width: 100%; height: 100%; position: relative; display: none;" poster="https://i.ytimg.com/vi/EpFiGT96ezM/maxresdefault.jpg" autoplay="" playsinline="" preload="none" src="https://www.youtube.com/watch?v=EpFiGT96ezM">
                                                                <source src="https://www.youtube.com/watch?v=EpFiGT96ezM" type="video/youtube" data-quality="HD" title="HD" label="HD" res="360" />
                                                                Your browser does not support HTML5 video.

                                                            </video>
                                                        </mediaelementwrapper>
                                                    </div>
                                                        <div className="mejs__layers">
                                                            <div className="mejs__poster mejs__layer" Style="background-image: url(&quot;https://i.ytimg.com/vi/EpFiGT96ezM/maxresdefault.jpg&quot;); width: 100%; height: 100%; display: none;"><img className="mejs__poster-img" width="0" height="0" src="https://i.ytimg.com/vi/EpFiGT96ezM/maxresdefault.jpg" alt='' />
                                                            </div>
                                                            <div className="mejs__overlay mejs__layer" Style="width: 100%; height: 100%; display: none;"><div className="mejs__overlay-loading">
                                                                <span className="mejs__overlay-loading-bg-img"></span>
                                                            </div>
                                                            </div>
                                                            <div className="mejs__overlay mejs__layer" Style="display: none; width: 100%; height: 100%;">
                                                                <div className="mejs__overlay-error"></div>
                                                            </div>
                                                            <div className="mejs__overlay mejs__layer mejs__overlay-play" Style="width: 100%; height: 100%;">
                                                                <div className="mejs__overlay-button" role="button" tabindex="0" aria-label="Play" aria-pressed="true"></div>
                                                            </div></div>
                                                        <div className="mejs__controls" Style="opacity: 1;"><div className="mejs__button mejs__playpause-button mejs__play">
                                                            <button type="button" aria-controls="mep_0" title="Play" aria-label="Play" tabindex="0"></button>
                                                        </div>
                                                            <div className="mejs__time mejs__currenttime-container" role="timer" aria-live="off">
                                                                <span className="mejs__currenttime">00:10</span></div><div className="mejs__time-rail">
                                                                <span className="mejs__time-total mejs__time-slider"  tabindex="0">
                                                                    <span className="mejs__time-buffering" Style="display: none;"></span>
                                                                    <span className="mejs__time-loaded"></span>
                                                                    <span className="mejs__time-current" Style="transform: scaleX(0.00867659);"></span>
                                                                    <span className="mejs__time-hovered no-hover" pos="4.5999755859375" Style="left: 1px; transform: scaleX(0.0439021);"></span>
                                                                    <span className="mejs__time-handle" Style="transform: translateX(5px);">
                                                                        <span className="mejs__time-handle-content"></span>
                                                                    </span>
                                                                    <span className="mejs__time-float" Style="display: none; left: 4.59998px;">
                                                                        <span className="mejs__time-float-current">01:06</span>
                                                                        <span className="mejs__time-float-corner"></span>
                                                                    </span>
                                                                </span>
                                                            </div>
                                                            <div className="mejs__time mejs__duration-container">
                                                                <span className="mejs__duration">19:50</span>
                                                            </div>
                                                            <div className="mejs__button mejs__jump-forward-button">
                                                                <button type="button" aria-controls="mep_0" title="Jump forward 10 seconds" aria-label="Jump forward 10 seconds" tabindex="0">10</button>
                                                            </div>
                                                            <div className="mejs__button mejs__volume-button mejs__mute">
                                                                <button type="button" aria-controls="mep_0" title="Mute" aria-label="Mute" tabindex="0"></button>
                                                                <a href="/home2" className="mejs__volume-slider" aria-label="Volume Slider" aria-valuemin="0" aria-valuemax="100" role="slider" aria-orientation="vertical" aria-valuenow="80" aria-valuetext="80%" Style="display: none;">
                                                                    <span className="mejs__offscreen">Use Up/Down Arrow keys to increase or decrease volume.</span><div className="mejs__volume-total"><div className="mejs__volume-current" Style="bottom: 0px; height: 80%;"></div>
                                                                        <div className="mejs__volume-handle" Style="bottom: 80%; margin-bottom: -6px;"></div>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                            <div className="mejs__button mejs__fullscreen-button">
                                                                <button type="button" aria-controls="mep_0" title="Fullscreen" aria-label="Fullscreen" tabindex="0"></button>
                                                            </div>
                                                            <a href="https://clikview.com">
                                                                <svg Style="width: 90px;" version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 763 210">
                                                                    <title>logo-light</title>
                                                                    <defs>
                                                                        <image width="752" height="206" id="img1" href="data:image/png;base64,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"></image>
                                                                    </defs>
                                                                    <style>
                                                                    </style>
                                                                    <use id="Background" href="#img1" x="7" y="2"></use>
                                                                </svg></a></div></div></div>
                                                <div className="icons hidde">
                                                    <span className="expend-player">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                            <path fill="currentColor" d="M10,21V19H6.41L10.91,14.5L9.5,13.09L5,17.59V14H3V21H10M14.5,10.91L19,6.41V10H21V3H14V5H17.59L13.09,9.5L14.5,10.91Z"></path>
                                                        </svg>
                                                    </span>
                                                </div>

                                            </div></div>
                                        <div className="clear"></div>
                                        <div className="clear"></div>
                                        <div className="content pt_shadow">
                                            <div className="video-title-detailPage pt_video_info">
                                                <input type="hidden" value="397" id="video-id" />
                                                <div className="video-big-title">
                                                    <h1 itemprop="title">Live in Costa Rica 👩🏻‍🤝‍👨🏿 Retire n Relocate to CR Expat Interviews
                                                    </h1>
                                                </div>
                                                <div className='videolikeandviews'>
                                                    <div className="video-views">
                                                        <span id="video-views-count">18</span>&nbsp;Views<span className="bold middot">·</span>
                                                        <span title="Published on  08/23/22">08/23/22</span>
                                                    </div>
                                                    <div className="video-likes pull-right">
                                                        <div className="like-btn " id="likes-bar" onclick="Wo_LikeSystem('397', 'like', this, 'is_ajax')" data-likes="3">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="thumbs_up">
                                                                <path fill="currentColor" d="M9 21h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.58 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2zM9 9l4.34-4.34L12 10h9v2l-3 7H9V9zM1 9h4v12H1z"></path>
                                                            </svg>
                                                            <span className="likes" id="likes">3</span>
                                                        </div>
                                                        <div className="video-info-element pull-right">
                                                            <div className="views-bar" Style="width: 0%"></div>
                                                            <div className="views-bar blue" Style="width: 100%"></div>
                                                            <div className="clear"></div>
                                                        </div>
                                                        <div className="like-btn text-right " id="dislikes-bar" onclick="Wo_LikeSystem('397', 'dislike', this, 'is_ajax')" data-likes="0">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="thumbs_down">
                                                                <path fill="currentColor" d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm0 12l-4.34 4.34L12 14H3v-2l3-7h9v10zm4-12h4v12h-4z"></path>
                                                            </svg>
                                                            <span className="likes" id="dislikes">0</span>
                                                        </div>
                                                        <div className="clear"></div>
                                                    </div>
                                                </div>
                                                <div className="video-options">
                                                    <button className="btn-share" data-toggle="modal" data-target="#share_box">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                            <path fill="currentColor" d="M21,11L14,4V8C7,9 4,14 3,19C5.5,15.5 9,13.9 14,13.9V18L21,11Z"></path>
                                                        </svg>
                                                        Share
                                                    </button>
                                                    <button className="btn-share" data-toggle="modal" data-target="#embed_box">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                            <path fill="currentColor" d="M14.6,16.6L19.2,12L14.6,7.4L16,6L22,12L16,18L14.6,16.6M9.4,16.6L4.8,12L9.4,7.4L8,6L2,12L8,18L9.4,16.6Z"></path>
                                                        </svg>
                                                        Embed
                                                    </button>
                                                </div>
                                                <div className="publisher-element publisher-element-videodetails">
                                                    <div className="publisher-avatar pull-left hide-in-mobile-720">
                                                        <a href="https://clikview.com/@Riles" data-load="?link1=timeline&amp;id=Riles"><img src="https://clikview.com/upload/photos/2022/08/7fSDOkhUu7MvTR4jJatt_22_9abd2bdd2690c5e1c2cbb95a0fda9e29_image.jpg" alt="Riley Jackson" /></a>
                                                    </div>
                                                    <div className="publisher-name">
                                                        <a href="https://clikview.com/@Riles" data-load="?link1=timeline&amp;id=Riles">Riley Jackson <i className="fa fa-check-circle fa-fw verified"></i></a><br />
                                                        <span>33 Subscribers</span>
                                                    </div>
                                                    <div className="publisher-subscribe-button"><button className="btn-subscribe subscribe-id-830" data-id="830" onclick="PT_Subscribe(830, 'subscribe')">Subscribe</button><span className="subs-amount">33</span></div>
                                                    <div className="clear"></div>
                                                </div>
                                                <div className="clear"></div>
                                                <div className="video-published">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
                                                        <path fill="#666" d="M5.5,7A1.5,1.5 0 0,1 4,5.5A1.5,1.5 0 0,1 5.5,4A1.5,1.5 0 0,1 7,5.5A1.5,1.5 0 0,1 5.5,7M21.41,11.58L12.41,2.58C12.05,2.22 11.55,2 11,2H4C2.89,2 2,2.89 2,4V11C2,11.55 2.22,12.05 2.59,12.41L11.58,21.41C11.95,21.77 12.45,22 13,22C13.55,22 14.05,21.77 14.41,21.41L21.41,14.41C21.78,14.05 22,13.55 22,13C22,12.44 21.77,11.94 21.41,11.58Z"></path>
                                                    </svg>
                                                    In
                                                    <a href="https://clikview.com/videos/category/6" data-load="?link1=videos&amp;page=category&amp;id=6">Travel &amp; Events</a>                      </div>
                                                <div className="watch-video-description">
                                                    <p dir="auto" itemprop="description">Riley and Tezzy have been living in Grecia Costa Rica for 2 1/2 years.  Riley from the United States and Tezzy from the Philippines. How did they pick Costa Rica? Have they been to Costa Rica before? Did they take a relocation (due diligence) tour? How does Costa Rican treat interracial couples? Are they living the Pura Vida, simple life? Has Riley taken on a new endeavor (we have a completely separate video about Riley's new venture... and boy, is it interesting and a great idea and offers some other talented folks some great opportunities **more later** Is Tezzy learning how to cook Costa Rican food? We will chat about many things in this video.  <br />  <br />Thank you for stopping by. Please Like, comment and subscribe.  Gracias.   <br />    <br />   <br />(ARTICLES COMING SOON!)</p>
                                                </div>
                                                <div className="watch-video-show-more desc">
                                                    Show more
                                                </div>


                                            </div>
                                            <div className="ads-placment"></div>
                                            <hr />
                                            <div className="comments-content pt_video_comments">
                                                <div className="comments-header">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="21" height="21"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M16.8 19L14 22.5 11.2 19H6a1 1 0 0 1-1-1V7.103a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1V18a1 1 0 0 1-1 1h-5.2zM2 2h17v2H3v11H1V3a1 1 0 0 1 1-1z"></path></svg>&nbsp;0 Comments
                                                    <span className="dropdown sort-comments-dropdown pull-right">
                                                        <span className="dropdown-toggle pointer" type="button" data-toggle="dropdown">
                                                            {/* <!--<i className="material-icons">sort</i>&nbsp;&nbsp;&nbsp;--> */}
                                                            Sort By
                                                        </span>
                                                        <ul className="dropdown-menu">

                                                            <li className="sort-comments" id="1">
                                                                <a href="/home2">Top Comments</a>
                                                            </li>
                                                            <li className="sort-comments" id="2">
                                                                <a href="/home2">Latest comments</a>
                                                            </li>
                                                        </ul>
                                                    </span>
                                                </div>
                                                <div className="w100 pt_blogcomm_combo yp_video_comment">
                                                    <textarea name="comment" rows="1" className="form-control jTextarea" id="comment-textarea" placeholder="Write your comment.." Style="height: 40px;"></textarea>
                                                    <button className="btn" onclick="PT_PostComment(this)">Publish&nbsp;&nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" className="btn btn-main" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path></svg></button>
                                                </div>
                                                <br /><br />
                                                <div className="comment-button">
                                                    <div className="user-comments" id="video-pinned-comments">
                                                        <div id="pinned-comment">

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="comments-loading hidden">
                                                    <i className="fa fa-circle-o-notch spin"></i>
                                                </div>
                                                <div className="user-comments" id="video-user-comments">

                                                </div>

                                            </div>
                                            <input type="hidden" id="video-id" value="397" />




                                            <form className="edit-comment-watch-form pt_wallet_forms hidden">
                                                <div className="form-group">
                                                    <label>
                                                        <span>Update Comment</span>
                                                    </label>
                                                </div>
                                                <div className="form-group">
                                                    <small></small>
                                                    <input name="comment" type="text" value="" id="editComment" className="form-control" Style="font-size: 20px; height: 25px;padding-left: 10px;" />
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div Style=" background: #12141e; border-radius: 5px; padding: 10px; " className="col-md-4 pull-right desktop">
                                        <div className="ads-placment"></div>
                                        <div className="article-categories no-padding-both">
                                            <div className="pt_categories">
                                                <ul>
                                                    <li><a className="" href="https://clikview.com/videos/category/1" data-load="?link1=videos&amp;page=category&amp;id=1">Film &amp; Animation</a></li>
                                                    <li><a className="" href="https://clikview.com/videos/category/3" data-load="?link1=videos&amp;page=category&amp;id=3">Business</a></li>
                                                    <li><a className="" href="https://clikview.com/videos/category/4" data-load="?link1=videos&amp;page=category&amp;id=4">Pets &amp; Animals</a></li>
                                                    <li><a className="" href="https://clikview.com/videos/category/5" data-load="?link1=videos&amp;page=category&amp;id=5">Sports</a></li>
                                                    <li><a className="" href="https://clikview.com/videos/category/6" data-load="?link1=videos&amp;page=category&amp;id=6">Travel &amp; Events</a></li>
                                                    <li><a className="" href="https://clikview.com/videos/category/7" data-load="?link1=videos&amp;page=category&amp;id=7">Motivation</a></li>
                                                    <li><a className="" href="https://clikview.com/videos/category/8" data-load="?link1=videos&amp;page=category&amp;id=8">People &amp; Blogs</a></li>
                                                    <li><a className="" href="https://clikview.com/videos/category/9" data-load="?link1=videos&amp;page=category&amp;id=9">Advanced Medicine</a></li>
                                                    <li><a className="" href="https://clikview.com/videos/category/10" data-load="?link1=videos&amp;page=category&amp;id=10">Digital Marketing</a></li>
                                                    <li><a className="" href="https://clikview.com/videos/category/11" data-load="?link1=videos&amp;page=category&amp;id=11">News &amp; Politics</a></li>
                                                    <li><a className="" href="https://clikview.com/videos/category/12" data-load="?link1=videos&amp;page=category&amp;id=12">How-to &amp; Style</a></li>
                                                    <li><a className="" href="https://clikview.com/videos/category/13" data-load="?link1=videos&amp;page=category&amp;id=13">Non-profits &amp; Activism</a></li>
                                                    <li><a className="" href="https://clikview.com/videos/category/849" data-load="?link1=videos&amp;page=category&amp;id=849">Super Cars</a></li>
                                                    <li><a className="" href="https://clikview.com/videos/category/other" data-load="?link1=videos&amp;page=category&amp;id=other">Other</a></li>
                                                </ul>
                                                <div className="clear"></div>
                                            </div>



                                        </div>
                                        <div className="next-video">
                                            <div className="next-text pull-left">
                                                <h4>Up next</h4>
                                            </div>
                                            <div className="pt_mn_wtch_switch pull-right">
                                                <input id="autoplay" type="checkbox" className="tgl autoplay-video" />
                                                <label className="tgl-btn" for="autoplay">Autoplay</label>
                                            </div>
                                            <div className="clear"></div>
                                        </div>
                                        <div className="videos-list" id="next-video">
                                            <div className="related-video-wrapper" data-sidebar-video="157">
                                                <div className="ra-thumb">
                                                    <a href="https://clikview.com/watch/rescue-me-real-estate-in-association-with-miericoast-homes_QPPvtEy8qZLC4T3.html" data-load="?link1=watch&amp;id=QPPvtEy8qZLC4T3" Style=" border-radius: 10px; overflow: hidden; ">
                                                        <img src="https://clikview.com/upload/photos/2022/08/c040364a83c3fc9fa7e604f5b41cfc8425b0c3f6LWETd4mhE7UWFRxntz4S.video_thumb_3785_11.jpeg" alt="Rescue Me Real Estate In Association with Miericoast Homes" />
                                                        <div className="play_hover_btn" onmouseenter="show_gif(this,'https://clikview.com/upload/videos/2022/08/rekSgB8FA3MfEVWWx4UV_20_2dd6d0ac637a69200d74f91e1946feb88341689b6d7669ede02c35307a659a_small_video_.gif')" onmouseleave="hide_gif(this)">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather-play-circle"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>

                                                        </div>
                                                        <div className="video-duration">1:19</div>
                                                    </a>
                                                </div>
                                                <div className="ra-title">
                                                    <div className="video-title-detailPage"><a href="https://clikview.com/watch/rescue-me-real-estate-in-association-with-miericoast-homes_QPPvtEy8qZLC4T3.html" data-load="?link1=watch&amp;id=QPPvtEy8qZLC4T3"> ⁣Rescue Me Real Estate In Association with Miericoast Homes</a></div>
                                                    <div className="video-publisher">RescueMeRealEstate</div>
                                                    <div className="video-publisher" Style="font-size:12px;">35 Views <span className="middot">·</span> 08/20/22</div>
                                                    <div className="video-category"><a href="https://clikview.com/videos/category/6">Travel &amp; Events</a></div>
                                                </div>
                                            </div>
                                            <hr />
                                        </div>
                                        <div className="videos-list related-videos">
                                            <div className="related-video-wrapper" data-sidebar-video="158">
                                                <div className="ra-thumb">
                                                    <a href="https://clikview.com/watch/royal-life-residence-north-cyprus_tftP6BWbrOxsR9W.html" data-load="?link1=watch&amp;id=tftP6BWbrOxsR9W" Style=" border-radius: 10px; overflow: hidden; ">
                                                        <img src="https://clikview.com/upload/photos/2022/08/dda73efb8ae4a571d8bce34da24f7f6669f66552xB3hnsIPCrClwYTr8Gk3.video_thumb_2303_11.jpeg" alt="⁣Royal Life Residence - North Cyprus" />
                                                        <div className="play_hover_btn" onmouseenter="show_gif(this,'https://clikview.com/upload/videos/2022/08/jGzl6v5FU5P7oLYDOcFC_20_d4fe244fcd1d2c7c72834fe62ae9219687ea72862c178d92ea674c17a48256_small_video_.gif')" onmouseleave="hide_gif(this)">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather-play-circle"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>

                                                        </div>
                                                        <div className="video-duration">0:53</div>
                                                    </a>
                                                </div>
                                                <div className="ra-title">
                                                    <div className="video-title-detailPage"><a href="https://clikview.com/watch/royal-life-residence-north-cyprus_tftP6BWbrOxsR9W.html" data-load="?link1=watch&amp;id=tftP6BWbrOxsR9W"> ⁣Royal Life Residence - North Cyprus</a></div>
                                                    <div className="video-publisher">RescueMeRealEstate</div>
                                                    <div className="video-publisher" Style="font-size:12px;">32 Views <span className="middot">·</span> 08/20/22</div>
                                                    <div className="video-category"><a href="https://clikview.com/videos/category/6">Travel &amp; Events</a></div>
                                                </div>
                                            </div><div className="related-video-wrapper" data-sidebar-video="161">
                                                <div className="ra-thumb">
                                                    <a href="https://clikview.com/watch/royal-sun-elite-north-cyprus_iA41aCob3ppeE5b.html" data-load="?link1=watch&amp;id=iA41aCob3ppeE5b" Style=" border-radius: 10px; overflow: hidden; ">
                                                        <img src="https://clikview.com/upload/photos/2022/08/9b12937807f4e80c1b2240b7c0206684619613f5YoPviymhXeeGx8SVc5ak.video_thumb_1431_39.jpeg" alt="⁣Royal Sun Elite - North Cyprus" />
                                                        <div className="play_hover_btn" onmouseenter="show_gif(this,'https://clikview.com/upload/videos/2022/08/A5q26V3rhx7iSPwtwgGP_20_4b2c564ae533eed517646f2c60c4a5517c4faaa80cab351051dcec4fd55dbd_small_video_.gif')" onmouseleave="hide_gif(this)">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather-play-circle"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>

                                                        </div>
                                                        <div className="video-duration">0:59</div>
                                                    </a>
                                                </div>
                                                <div className="ra-title">
                                                    <div className="video-title-detailPage"><a href="https://clikview.com/watch/royal-sun-elite-north-cyprus_iA41aCob3ppeE5b.html" data-load="?link1=watch&amp;id=iA41aCob3ppeE5b"> ⁣Royal Sun Elite - North Cyprus</a></div>
                                                    <div className="video-publisher">RescueMeRealEstate</div>
                                                    <div className="video-publisher" Style="font-size:12px;">17 Views <span className="middot">·</span> 08/20/22</div>
                                                    <div className="video-category"><a href="https://clikview.com/videos/category/6">Travel &amp; Events</a></div>
                                                </div>
                                            </div><div className="related-video-wrapper" data-sidebar-video="1001">
                                                <div className="ra-thumb">
                                                    <a href="https://clikview.com/watch/sexy-single-girl-traveling-costa-rica-she-has-something-to-say_7yHZ93eAYSjPCw4.html" data-load="?link1=watch&amp;id=7yHZ93eAYSjPCw4" Style=" border-radius: 10px; overflow: hidden; ">
                                                        <img src="https://i.ytimg.com/vi/gWRCECDqWIY/sddefault.jpg" alt="⁣Sexy, Single Girl Traveling Costa Rica 🧘 She Has Something to Say" />
                                                        <div className="play_hover_btn" onmouseenter="show_gif(this,'')" onmouseleave="hide_gif(this)">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather-play-circle"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>

                                                        </div>
                                                        <div className="video-duration">00:27:45</div>
                                                    </a>
                                                </div>
                                                <div className="ra-title">
                                                    <div className="video-title-detailPage"><a href="https://clikview.com/watch/sexy-single-girl-traveling-costa-rica-she-has-something-to-say_7yHZ93eAYSjPCw4.html" data-load="?link1=watch&amp;id=7yHZ93eAYSjPCw4"> ⁣Sexy, Single Girl Traveling Costa Rica 🧘 She Has Something to Say</a></div>
                                                    <div className="video-publisher">Riley Jackson</div>
                                                    <div className="video-publisher" Style="font-size:12px;">10 Views <span className="middot">·</span> 08/31/22</div>
                                                    <div className="video-category"><a href="https://clikview.com/videos/category/6">Travel &amp; Events</a></div>
                                                </div>
                                            </div><div className="related-video-wrapper" data-sidebar-video="738">
                                                <div className="ra-thumb">
                                                    <a href="https://clikview.com/watch/macaws-of-tortuguero_IKqZN14rptN72d5.html" data-load="?link1=watch&amp;id=IKqZN14rptN72d5" Style=" border-radius: 10px; overflow: hidden; ">
                                                        <img src="https://clikview.com/upload/photos/2022/08/d021e5a2ee496c4ebb59d6f41c0b911e2b24abe5K168ryvsDjnETb4W3eXN.video_thumb_3250_11.jpeg" alt="⁣Macaws of Tortuguero" />
                                                        <div className="play_hover_btn" onmouseenter="show_gif(this,'https://clikview.com/upload/videos/2022/08/o9SqYZEJtd9XlzEUFfOY_28_91d755c609a09b8477720cb57841a29caad36b24e769ae9ef40d2cfc4ef988_small_video_.gif')" onmouseleave="hide_gif(this)">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather-play-circle"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
                                                            {/* <!--<svg xmlns="http://www.w3.org/2000/svg" className="feather" width="24" height="24" viewBox="0 0 24 24" fill="rgba(255, 255, 255, 0.8)"><path d="M8,5.14V19.14L19,12.14L8,5.14Z"></path></svg>--> */}
                                                        </div>
                                                        <div className="video-duration">0:20</div>
                                                    </a>
                                                </div>
                                                <div className="ra-title">
                                                    <div className="video-title-detailPage"><a href="https://clikview.com/watch/macaws-of-tortuguero_IKqZN14rptN72d5.html" data-load="?link1=watch&amp;id=IKqZN14rptN72d5"> ⁣Macaws of Tortuguero</a></div>
                                                    <div className="video-publisher">Riley Jackson</div>
                                                    <div className="video-publisher" Style="font-size:12px;">8 Views <span className="middot">·</span> 08/28/22</div>
                                                    <div className="video-category"><a href="https://clikview.com/videos/category/6">Travel &amp; Events</a></div>
                                                </div>
                                            </div><div className="related-video-wrapper" data-sidebar-video="322">
                                                <div className="ra-thumb">
                                                    <a href="https://clikview.com/watch/beautiful-costa-rica-pura-vida_nRKDASNtaqbx93c.html" data-load="?link1=watch&amp;id=nRKDASNtaqbx93c" Style=" border-radius: 10px; overflow: hidden; ">
                                                        <img src="https://clikview.com/upload/photos/2022/08/43fa3424fbfc47f5292c5b2f5cf0a0598ac3c4b4Qq2uabOLafGvBpYa4v8H.video_thumb_8411_11.jpeg" alt="⁣Beautiful Costa Rica - Pura Vida" />
                                                        <div className="play_hover_btn" onmouseenter="show_gif(this,'https://clikview.com/upload/videos/2022/08/7dABj3nlHy2unZskELkN_22_2849804125b1e11e11b96ebc71c0629f7338891f609f2a5eda358aa1ce9335_small_video_.gif')" onmouseleave="hide_gif(this)">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather-play-circle"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
                                                            {/* <!--<svg xmlns="http://www.w3.org/2000/svg" className="feather" width="24" height="24" viewBox="0 0 24 24" fill="rgba(255, 255, 255, 0.8)"><path d="M8,5.14V19.14L19,12.14L8,5.14Z"></path></svg>--> */}
                                                        </div>
                                                        <div className="video-duration">6:43</div>
                                                    </a>
                                                </div>
                                                <div className="ra-title">
                                                    <div className="video-title-detailPage"><a href="https://clikview.com/watch/beautiful-costa-rica-pura-vida_nRKDASNtaqbx93c.html" data-load="?link1=watch&amp;id=nRKDASNtaqbx93c"> ⁣Beautiful Costa Rica - Pura Vida</a></div>
                                                    <div className="video-publisher">Riley Jackson</div>
                                                    <div className="video-publisher" Style="font-size:12px;">28 Views <span className="middot">·</span> 08/22/22</div>
                                                    <div className="video-category"><a href="https://clikview.com/videos/category/6">Travel &amp; Events</a></div>
                                                </div>
                                            </div><div className="related-video-wrapper" data-sidebar-video="644">
                                                <div className="ra-thumb">
                                                    <a href="https://clikview.com/watch/4-days-in-tamarindo_nqWa49H43M8yAXq.html" data-load="?link1=watch&amp;id=nqWa49H43M8yAXq" Style=" border-radius: 10px; overflow: hidden; ">
                                                        <img src="https://clikview.com/upload/photos/2022/08/51e5e88e01ed5017ce6cafdefc688a9bceabc408iRgRoMY9rPavrqkeKLSf.video_thumb_4211_11.jpeg" alt="⁣4 Days in Tamarindo" />
                                                        <div className="play_hover_btn" onmouseenter="show_gif(this,'https://clikview.com/upload/videos/2022/08/3LMnk4xBgVYahRu9fvXw_26_379266fbf8e9471f7b5526100f0bc8e310bc8b3b34166d0269352ad06154a2_small_video_.gif')" onmouseleave="hide_gif(this)">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather-play-circle"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
                                                            {/* <!--<svg xmlns="http://www.w3.org/2000/svg" className="feather" width="24" height="24" viewBox="0 0 24 24" fill="rgba(255, 255, 255, 0.8)"><path d="M8,5.14V19.14L19,12.14L8,5.14Z"></path></svg>--> */}
                                                        </div>
                                                        <div className="video-duration">0:58</div>
                                                    </a>
                                                </div>
                                                <div className="ra-title">
                                                    <div className="video-title-detailPage"><a href="https://clikview.com/watch/4-days-in-tamarindo_nqWa49H43M8yAXq.html" data-load="?link1=watch&amp;id=nqWa49H43M8yAXq"> ⁣4 Days in Tamarindo</a></div>
                                                    <div className="video-publisher">Riley Jackson</div>
                                                    <div className="video-publisher" Style="font-size:12px;">18 Views <span className="middot">·</span> 08/26/22</div>
                                                    <div className="video-category"><a href="https://clikview.com/videos/category/6">Travel &amp; Events</a></div>
                                                </div>
                                            </div><div className="related-video-wrapper" data-sidebar-video="553">
                                                <div className="ra-thumb">
                                                    <a href="https://clikview.com/watch/costa-rica-through-my-eyes-uno_d98qftoomTkLy3T.html" data-load="?link1=watch&amp;id=d98qftoomTkLy3T" Style=" border-radius: 10px; overflow: hidden; ">
                                                        <img src="https://clikview.com/upload/photos/2022/08/cb5d835bee89bf7bd5af8360f7ee53aa7f231963IKCJsOSB1IUu8foZIDJX.video_thumb_1189_11.jpeg" alt="⁣Costa Rica Through My Eyes - Uno" />
                                                        <div className="play_hover_btn" onmouseenter="show_gif(this,'https://clikview.com/upload/videos/2022/08/Lev5UXbXtcrpjP29z9DC_24_a2d3f7b18c391b6c87cd4ca424b134f3ecde9243f0a20e1d8187c45d4d2093_small_video_.gif')" onmouseleave="hide_gif(this)">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather-play-circle"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
                                                            {/* <!--<svg xmlns="http://www.w3.org/2000/svg" className="feather" width="24" height="24" viewBox="0 0 24 24" fill="rgba(255, 255, 255, 0.8)"><path d="M8,5.14V19.14L19,12.14L8,5.14Z"></path></svg>--> */}
                                                        </div>
                                                        <div className="video-duration">1:02</div>
                                                    </a>
                                                </div>
                                                <div className="ra-title">
                                                    <div className="video-title-detailPage"><a href="https://clikview.com/watch/costa-rica-through-my-eyes-uno_d98qftoomTkLy3T.html" data-load="?link1=watch&amp;id=d98qftoomTkLy3T"> ⁣Costa Rica Through My Eyes - Uno</a></div>
                                                    <div className="video-publisher">Riley Jackson</div>
                                                    <div className="video-publisher" Style="font-size:12px;">9 Views <span className="middot">·</span> 08/24/22</div>
                                                    <div className="video-category"><a href="https://clikview.com/videos/category/6">Travel &amp; Events</a></div>
                                                </div>
                                            </div><div className="related-video-wrapper" data-sidebar-video="598">
                                                <div className="ra-thumb">
                                                    <a href="https://clikview.com/watch/monkey-business-in-manuel-antonio_JPYwaEemnjD8Yfh.html" data-load="?link1=watch&amp;id=JPYwaEemnjD8Yfh" Style=" border-radius: 10px; overflow: hidden; ">
                                                        <img src="https://clikview.com/upload/photos/2022/08/b3cf99eb34a76cdc002a543435798a74ad47bdd9CICzq58yiecf8VxXPkYo.video_thumb_9997_11.jpeg" alt="⁣Monkey Business in Manuel Antonio" />
                                                        <div className="play_hover_btn" onmouseenter="show_gif(this,'https://clikview.com/upload/videos/2022/08/dFmtlayRhvjZWsJykxsg_25_a4600d2c0debc89b6d597e1afc3c2fa2c0e63644c98865ebff867393b90ddb_small_video_.gif')" onmouseleave="hide_gif(this)">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather-play-circle"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
                                                            {/* <!--<svg xmlns="http://www.w3.org/2000/svg" className="feather" width="24" height="24" viewBox="0 0 24 24" fill="rgba(255, 255, 255, 0.8)"><path d="M8,5.14V19.14L19,12.14L8,5.14Z"></path></svg>--> */}
                                                        </div>
                                                        <div className="video-duration">0:53</div>
                                                    </a>
                                                </div>
                                                <div className="ra-title">
                                                    <div className="video-title-detailPage"><a href="https://clikview.com/watch/monkey-business-in-manuel-antonio_JPYwaEemnjD8Yfh.html" data-load="?link1=watch&amp;id=JPYwaEemnjD8Yfh"> ⁣Monkey Business in Manuel Antonio</a></div>
                                                    <div className="video-publisher">Riley Jackson</div>
                                                    <div className="video-publisher" Style="font-size:12px;">7 Views <span className="middot">·</span> 08/25/22</div>
                                                    <div className="video-category"><a href="https://clikview.com/videos/category/6">Travel &amp; Events</a></div>
                                                </div>
                                            </div><div className="related-video-wrapper" data-sidebar-video="634">
                                                <div className="ra-thumb">
                                                    <a href="https://clikview.com/watch/costa-rica-a-new-radio-station-blaxit-radio-talk-music_3XcjeQ2zcFMKJlv.html" data-load="?link1=watch&amp;id=3XcjeQ2zcFMKJlv" Style=" border-radius: 10px; overflow: hidden; ">
                                                        <img src="https://i.ytimg.com/vi/c_W8d9_Biq4/maxresdefault.jpg" alt="⁣Costa Rica - A New Radio Station 📻 Blaxit Radio🎙Talk 🎺 Music" />
                                                        <div className="play_hover_btn" onmouseenter="show_gif(this,'')" onmouseleave="hide_gif(this)">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather-play-circle"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
                                                            {/* <!--<svg xmlns="http://www.w3.org/2000/svg" className="feather" width="24" height="24" viewBox="0 0 24 24" fill="rgba(255, 255, 255, 0.8)"><path d="M8,5.14V19.14L19,12.14L8,5.14Z"></path></svg>--> */}
                                                        </div>
                                                        <div className="video-duration">00:17:44</div>
                                                    </a>
                                                </div>
                                                <div className="ra-title">
                                                    <div className="video-title-detailPage"><a href="https://clikview.com/watch/costa-rica-a-new-radio-station-blaxit-radio-talk-music_3XcjeQ2zcFMKJlv.html" data-load="?link1=watch&amp;id=3XcjeQ2zcFMKJlv"> ⁣Costa Rica - A New Radio Station 📻 Blaxit Radio🎙Talk 🎺 Music</a></div>
                                                    <div className="video-publisher">Riley Jackson</div>
                                                    <div className="video-publisher" Style="font-size:12px;">9 Views <span className="middot">·</span> 08/26/22</div>
                                                    <div className="video-category"><a href="https://clikview.com/videos/category/6">Travel &amp; Events</a></div>
                                                </div>
                                            </div><div className="related-video-wrapper" data-sidebar-video="684">
                                                <div className="ra-thumb">
                                                    <a href="https://clikview.com/watch/costa-rica-through-my-eyes-dos_a372Iq8OxG6zlJm.html" data-load="?link1=watch&amp;id=a372Iq8OxG6zlJm" Style=" border-radius: 10px; overflow: hidden; ">
                                                        <img src="https://clikview.com/upload/photos/2022/08/6b8b15f7245d65bac3df8ed7cae2c90d0dfcad04oeNLxCRxakVFKnB3g27e.video_thumb_7010_11.jpeg" alt="⁣Costa Rica Through My Eyes  - Dos" />
                                                        <div className="play_hover_btn" onmouseenter="show_gif(this,'https://clikview.com/upload/videos/2022/08/DcPNHPFMF4GhceT3UAhJ_27_e1576c1bace8b47653bdf29b06f09c01f115ea915b6a6ade9bd167ade3e061_small_video_.gif')" onmouseleave="hide_gif(this)">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather-play-circle"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
                                                            {/* <!--<svg xmlns="http://www.w3.org/2000/svg" className="feather" width="24" height="24" viewBox="0 0 24 24" fill="rgba(255, 255, 255, 0.8)"><path d="M8,5.14V19.14L19,12.14L8,5.14Z"></path></svg>--> */}
                                                        </div>
                                                        <div className="video-duration">1:31</div>
                                                    </a>
                                                </div>
                                                <div className="ra-title">
                                                    <div className="video-title-detailPage"><a href="https://clikview.com/watch/costa-rica-through-my-eyes-dos_a372Iq8OxG6zlJm.html" data-load="?link1=watch&amp;id=a372Iq8OxG6zlJm"> ⁣Costa Rica Through My Eyes  - Dos</a></div>
                                                    <div className="video-publisher">Riley Jackson</div>
                                                    <div className="video-publisher" Style="font-size:12px;">26 Views <span className="middot">·</span> 08/27/22</div>
                                                    <div className="video-category"><a href="https://clikview.com/videos/category/6">Travel &amp; Events</a></div>
                                                </div>
                                            </div><div className="related-video-wrapper" data-sidebar-video="710">
                                                <div className="ra-thumb">
                                                    <a href="https://clikview.com/watch/sunrise-in-korea-a-timelapse-video_5CzSc74n19Kif9n.html" data-load="?link1=watch&amp;id=5CzSc74n19Kif9n" Style=" border-radius: 10px; overflow: hidden; ">
                                                        <img src="https://clikview.com/upload/photos/2022/08/759444b2d891d7b400a533a37b07352f8d217b3dhd9zEsNltaabXyYYablA.video_thumb_8247_11.jpeg" alt="⁣Sunrise In Korea - A Timelapse Video." />
                                                        <div className="play_hover_btn" onmouseenter="show_gif(this,'https://clikview.com/upload/videos/2022/08/HqdaV2CIlFIrphMyayJ7_27_e78a10bab21f372b25ee2fefd1d1c65cc236d87114bce6111b3a38f57d1c06_small_video_.gif')" onmouseleave="hide_gif(this)">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather-play-circle"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
                                                            {/* <!--<svg xmlns="http://www.w3.org/2000/svg" className="feather" width="24" height="24" viewBox="0 0 24 24" fill="rgba(255, 255, 255, 0.8)"><path d="M8,5.14V19.14L19,12.14L8,5.14Z"></path></svg>--> */}
                                                        </div>
                                                        <div className="video-duration">0:23</div>
                                                    </a>
                                                </div>
                                                <div className="ra-title">
                                                    <div className="video-title-detailPage"><a href="https://clikview.com/watch/sunrise-in-korea-a-timelapse-video_5CzSc74n19Kif9n.html" data-load="?link1=watch&amp;id=5CzSc74n19Kif9n"> ⁣Sunrise In Korea - A Timelapse Video.</a></div>
                                                    <div className="video-publisher">TAP18</div>
                                                    <div className="video-publisher" Style="font-size:12px;">25 Views <span className="middot">·</span> 08/27/22</div>
                                                    <div className="video-category"><a href="https://clikview.com/videos/category/6">Travel &amp; Events</a></div>
                                                </div>
                                            </div><div className="related-video-wrapper" data-sidebar-video="714">
                                                <div className="ra-thumb">
                                                    <a href="https://clikview.com/watch/roatan-honduras_qiiCXq1ZVh8otHt.html" data-load="?link1=watch&amp;id=qiiCXq1ZVh8otHt" Style=" border-radius: 10px; overflow: hidden; ">
                                                        <img src="https://i.ytimg.com/vi/6K5z3AtQiy8/maxresdefault.jpg" alt="⁣Roatan, Honduras" />
                                                        <div className="play_hover_btn" onmouseenter="show_gif(this,'')" onmouseleave="hide_gif(this)">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather-play-circle"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
                                                            {/* <!--<svg xmlns="http://www.w3.org/2000/svg" className="feather" width="24" height="24" viewBox="0 0 24 24" fill="rgba(255, 255, 255, 0.8)"><path d="M8,5.14V19.14L19,12.14L8,5.14Z"></path></svg>--> */}
                                                        </div>
                                                        <div className="video-duration">00:03:06</div>
                                                    </a>
                                                </div>
                                                <div className="ra-title">
                                                    <div className="video-title-detailPage"><a href="https://clikview.com/watch/roatan-honduras_qiiCXq1ZVh8otHt.html" data-load="?link1=watch&amp;id=qiiCXq1ZVh8otHt"> ⁣Roatan, Honduras</a></div>
                                                    <div className="video-publisher">Enelisa</div>
                                                    <div className="video-publisher" Style="font-size:12px;">28 Views <span className="middot">·</span> 08/27/22</div>
                                                    <div className="video-category"><a href="https://clikview.com/videos/category/6">Travel &amp; Events</a></div>
                                                </div>
                                            </div><div className="related-video-wrapper" data-sidebar-video="736">
                                                <div className="ra-thumb">
                                                    <a href="https://clikview.com/watch/costa-rica-s-got-talent_ZjCoGGsc9YokQFO.html" data-load="?link1=watch&amp;id=ZjCoGGsc9YokQFO" Style=" border-radius: 10px; overflow: hidden; ">
                                                        <img src="https://i.ytimg.com/vi/QP4urwn6hd0/maxresdefault.jpg" alt="⁣COSTA RICA’S  GOT TALENT!" />
                                                        <div className="play_hover_btn" onmouseenter="show_gif(this,'')" onmouseleave="hide_gif(this)">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather-play-circle"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
                                                            {/* <!--<svg xmlns="http://www.w3.org/2000/svg" className="feather" width="24" height="24" viewBox="0 0 24 24" fill="rgba(255, 255, 255, 0.8)"><path d="M8,5.14V19.14L19,12.14L8,5.14Z"></path></svg>--> */}
                                                        </div>
                                                        <div className="video-duration">00:03:23</div>
                                                    </a>
                                                </div>
                                                <div className="ra-title">
                                                    <div className="video-title-detailPage"><a href="https://clikview.com/watch/costa-rica-s-got-talent_ZjCoGGsc9YokQFO.html" data-load="?link1=watch&amp;id=ZjCoGGsc9YokQFO"> ⁣COSTA RICA’S  GOT TALENT!</a></div>
                                                    <div className="video-publisher">Riley Jackson</div>
                                                    <div className="video-publisher" Style="font-size:12px;">22 Views <span className="middot">·</span> 08/28/22</div>
                                                    <div className="video-category"><a href="https://clikview.com/videos/category/6">Travel &amp; Events</a></div>
                                                </div>
                                            </div><div className="related-video-wrapper" data-sidebar-video="750">
                                                <div className="ra-thumb">
                                                    <a href="https://clikview.com/watch/own-a-beachfront-condo-today-2-bed-2-bath-in-playa-potrero-costa-rica_zYskyQtimylAABj.html" data-load="?link1=watch&amp;id=zYskyQtimylAABj" Style=" border-radius: 10px; overflow: hidden; ">
                                                        <img src="https://i.ytimg.com/vi/uMhwiao2dSU/maxresdefault.jpg" alt="⁣Own a Beachfront Condo Today | 2 Bed 2 Bath in Playa Potrero Costa Rica" />
                                                        <div className="play_hover_btn" onmouseenter="show_gif(this,'')" onmouseleave="hide_gif(this)">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather-play-circle"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
                                                            {/* <!--<svg xmlns="http://www.w3.org/2000/svg" className="feather" width="24" height="24" viewBox="0 0 24 24" fill="rgba(255, 255, 255, 0.8)"><path d="M8,5.14V19.14L19,12.14L8,5.14Z"></path></svg>--> */}
                                                        </div>
                                                        <div className="video-duration">00:06:14</div>
                                                    </a>
                                                </div>
                                                <div className="ra-title">
                                                    <div className="video-title-detailPage"><a href="https://clikview.com/watch/own-a-beachfront-condo-today-2-bed-2-bath-in-playa-potrero-costa-rica_zYskyQtimylAABj.html" data-load="?link1=watch&amp;id=zYskyQtimylAABj"> ⁣Own a Beachfront Condo Today | 2 Bed 2 Bath in Playa Potrero Costa Rica</a></div>
                                                    <div className="video-publisher">Riley Jackson</div>
                                                    <div className="video-publisher" Style="font-size:12px;">24 Views <span className="middot">·</span> 08/28/22</div>
                                                    <div className="video-category"><a href="https://clikview.com/videos/category/6">Travel &amp; Events</a></div>
                                                </div>
                                            </div><div className="related-video-wrapper" data-sidebar-video="822">
                                                <div className="ra-thumb">
                                                    <a href="https://clikview.com/watch/my-italian-summer_B2vLGdJ7qdnkUJD.html" data-load="?link1=watch&amp;id=B2vLGdJ7qdnkUJD" Style=" border-radius: 10px; overflow: hidden; ">
                                                        <img src="https://clikview.com/upload/photos/2022/08/ikYUCdKhGxEtp7xWg7wP_29_64785becd829b20f176ddc1b27105780_image.jpeg" alt="⁣My Italian Summer" />
                                                        <div className="play_hover_btn" onmouseenter="show_gif(this,'https://clikview.com/upload/videos/2022/08/8JIwk4D5JnwuxfGPPUJh_29_b6eb60d369793da0cfed3ccd2edc47d1fd60f36d2deb97cf1f8fc11910e2d9_small_video_.gif')" onmouseleave="hide_gif(this)">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather-play-circle"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
                                                            {/* <!--<svg xmlns="http://www.w3.org/2000/svg" className="feather" width="24" height="24" viewBox="0 0 24 24" fill="rgba(255, 255, 255, 0.8)"><path d="M8,5.14V19.14L19,12.14L8,5.14Z"></path></svg>--> */}
                                                        </div>
                                                        <div className="video-duration">3:40</div>
                                                    </a>
                                                </div>
                                                <div className="ra-title">
                                                    <div className="video-title-detailPage"><a href="https://clikview.com/watch/my-italian-summer_B2vLGdJ7qdnkUJD.html" data-load="?link1=watch&amp;id=B2vLGdJ7qdnkUJD"> ⁣My Italian Summer</a></div>
                                                    <div className="video-publisher">Liliana Cavaliere Hintz</div>
                                                    <div className="video-publisher" Style="font-size:12px;">16 Views <span className="middot">·</span> 08/29/22</div>
                                                    <div className="video-category"><a href="https://clikview.com/videos/category/6">Travel &amp; Events</a></div>
                                                </div>
                                            </div><div className="related-video-wrapper" data-sidebar-video="889">
                                                <div className="ra-thumb">
                                                    <a href="https://clikview.com/watch/blaxit-radio-a-international-vibe_kPv3WpghJiKD3JA.html" data-load="?link1=watch&amp;id=kPv3WpghJiKD3JA" Style=" border-radius: 10px; overflow: hidden; ">
                                                        <img src="https://clikview.com/upload/photos/2022/08/gnVAR99w6NzvBf9OOPIR_30_346c3405242c056c5a831e6bc909fec2_image.png" alt="⁣Blaxit Radio an International Vibe!" />
                                                        <div className="play_hover_btn" onmouseenter="show_gif(this,'https://clikview.com/upload/videos/2022/08/1Yq6hPdrhXP2c1W2CYCs_30_e9230b132bcff0f860e50df36ae409fb8eb7c48f5befae2171f3a13a783457_small_video_.gif')" onmouseleave="hide_gif(this)">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather-play-circle"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
                                                            {/* <!--<svg xmlns="http://www.w3.org/2000/svg" className="feather" width="24" height="24" viewBox="0 0 24 24" fill="rgba(255, 255, 255, 0.8)"><path d="M8,5.14V19.14L19,12.14L8,5.14Z"></path></svg>--> */}
                                                        </div>
                                                        <div className="video-duration">1:26</div>
                                                    </a>
                                                </div>
                                                <div className="ra-title">
                                                    <div className="video-title-detailPage"><a href="https://clikview.com/watch/blaxit-radio-a-international-vibe_kPv3WpghJiKD3JA.html" data-load="?link1=watch&amp;id=kPv3WpghJiKD3JA"> ⁣Blaxit Radio an International Vibe!</a></div>
                                                    <div className="video-publisher">Riley Jackson</div>
                                                    <div className="video-publisher" Style="font-size:12px;">8 Views <span className="middot">·</span> 08/30/22</div>
                                                    <div className="video-category"><a href="https://clikview.com/videos/category/6">Travel &amp; Events</a></div>
                                                </div>
                                            </div><div className="related-video-wrapper" data-sidebar-video="890">
                                                <div className="ra-thumb">
                                                    <a href="https://clikview.com/watch/luxury-modern-beachfront-home-in-playa-flamingo-costa-rica_3ypMgoVAbbUMpQ6.html" data-load="?link1=watch&amp;id=3ypMgoVAbbUMpQ6" Style=" border-radius: 10px; overflow: hidden; ">
                                                        <img src="https://i.ytimg.com/vi/6EJf6acFPZY/sddefault.jpg" alt="⁣Luxury Modern Beachfront Home in Playa Flamingo, Costa Rica!" />
                                                        <div className="play_hover_btn" onmouseenter="show_gif(this,'')" onmouseleave="hide_gif(this)">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather-play-circle"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
                                                            {/* <!--<svg xmlns="http://www.w3.org/2000/svg" className="feather" width="24" height="24" viewBox="0 0 24 24" fill="rgba(255, 255, 255, 0.8)"><path d="M8,5.14V19.14L19,12.14L8,5.14Z"></path></svg>--> */}
                                                        </div>
                                                        <div className="video-duration">00:07:23</div>
                                                    </a>
                                                </div>
                                                <div className="ra-title">
                                                    <div className="video-title-detailPage"><a href="https://clikview.com/watch/luxury-modern-beachfront-home-in-playa-flamingo-costa-rica_3ypMgoVAbbUMpQ6.html" data-load="?link1=watch&amp;id=3ypMgoVAbbUMpQ6"> ⁣Luxury Modern Beachfront Home in Playa Flamingo, Costa Rica!</a></div>
                                                    <div className="video-publisher">Riley Jackson</div>
                                                    <div className="video-publisher" Style="font-size:12px;">18 Views <span className="middot">·</span> 08/30/22</div>
                                                    <div className="video-category"><a href="https://clikview.com/videos/category/6">Travel &amp; Events</a></div>
                                                </div>
                                            </div><div className="related-video-wrapper" data-sidebar-video="1002">
                                                <div className="ra-thumb">
                                                    <a href="https://clikview.com/watch/las-catalinas-costa-rica-a-walk-through-our-car-free-town_oKzSBUOuXFyAaJa.html" data-load="?link1=watch&amp;id=oKzSBUOuXFyAaJa" Style=" border-radius: 10px; overflow: hidden; ">
                                                        <img src="https://i.ytimg.com/vi/t7EFaJMdiLc/maxresdefault.jpg" alt="⁣Las Catalinas, Costa Rica | A Walk Through our Car-Free Town" />
                                                        <div className="play_hover_btn" onmouseenter="show_gif(this,'')" onmouseleave="hide_gif(this)">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather-play-circle"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
                                                            {/* <!--<svg xmlns="http://www.w3.org/2000/svg" className="feather" width="24" height="24" viewBox="0 0 24 24" fill="rgba(255, 255, 255, 0.8)"><path d="M8,5.14V19.14L19,12.14L8,5.14Z"></path></svg>--> */}
                                                        </div>
                                                        <div className="video-duration">00:15:24</div>
                                                    </a>
                                                </div>
                                                <div className="ra-title">
                                                    <div className="video-title-detailPage"><a href="https://clikview.com/watch/las-catalinas-costa-rica-a-walk-through-our-car-free-town_oKzSBUOuXFyAaJa.html" data-load="?link1=watch&amp;id=oKzSBUOuXFyAaJa"> ⁣Las Catalinas, Costa Rica | A Walk Through our Car-Free Town</a></div>
                                                    <div className="video-publisher">Riley Jackson</div>
                                                    <div className="video-publisher" Style="font-size:12px;">10 Views <span className="middot">·</span> 08/31/22</div>
                                                    <div className="video-category"><a href="https://clikview.com/videos/category/6">Travel &amp; Events</a></div>
                                                </div>
                                            </div><div className="related-video-wrapper" data-sidebar-video="1050">
                                                <div className="ra-thumb">
                                                    <a href="https://clikview.com/watch/la-terraza-guest-house-b-amp-b-grecia-costa-rica_pfbsPRkDRlL9zae.html" data-load="?link1=watch&amp;id=pfbsPRkDRlL9zae" Style=" border-radius: 10px; overflow: hidden; ">
                                                        <img src="https://i.ytimg.com/vi/pOmMRL45azw/maxresdefault.jpg" alt="⁣La Terraza Guest House B&amp;B Grecia Costa Rica" />
                                                        <div className="play_hover_btn" onmouseenter="show_gif(this,'')" onmouseleave="hide_gif(this)">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather-play-circle"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
                                                            {/* <!--<svg xmlns="http://www.w3.org/2000/svg" className="feather" width="24" height="24" viewBox="0 0 24 24" fill="rgba(255, 255, 255, 0.8)"><path d="M8,5.14V19.14L19,12.14L8,5.14Z"></path></svg>--> */}
                                                        </div>
                                                        <div className="video-duration">00:02:28</div>
                                                    </a>
                                                </div>
                                                <div className="ra-title">
                                                    <div className="video-title-detailPage"><a href="https://clikview.com/watch/la-terraza-guest-house-b-amp-b-grecia-costa-rica_pfbsPRkDRlL9zae.html" data-load="?link1=watch&amp;id=pfbsPRkDRlL9zae"> ⁣La Terraza Guest House B&amp;B Grecia Costa Rica</a></div>
                                                    <div className="video-publisher">Riley Jackson</div>
                                                    <div className="video-publisher" Style="font-size:12px;">12 Views <span className="middot">·</span> 09/01/22</div>
                                                    <div className="video-category"><a href="https://clikview.com/videos/category/6">Travel &amp; Events</a></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="load-related-videos">
                                            <button className="btn btn-default" id="load-related-videos" Style="background: #12141e;">
                                                <span>Load more</span><i className="fa fa-circle-o-notch spin hidden"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-8 ">

                                </div>
                                <div Style="display:none;" className="col-md-4 no-padding-left pull-right mobile">
                                    <div className="content">
                                        <div className="next-video">
                                            <div className="next-text pull-left">
                                                <h4>Up next</h4>
                                            </div>
                                            <div className="pt_mn_wtch_switch pull-right">
                                                <input id="autoplay-2" type="checkbox" className="tgl autoplay-video" />
                                                <label className="tgl-btn" for="autoplay-2">Autoplay</label>
                                            </div>
                                            <div className="clear"></div>
                                        </div>
                                        <div className="videos-list" id="next-video">
                                            <div className="related-video-wrapper" data-sidebar-video="157">
                                                <div className="ra-thumb">
                                                    <a href="https://clikview.com/watch/rescue-me-real-estate-in-association-with-miericoast-homes_QPPvtEy8qZLC4T3.html" data-load="?link1=watch&amp;id=QPPvtEy8qZLC4T3" Style=" border-radius: 10px; overflow: hidden; ">
                                                        <img src="https://clikview.com/upload/photos/2022/08/c040364a83c3fc9fa7e604f5b41cfc8425b0c3f6LWETd4mhE7UWFRxntz4S.video_thumb_3785_11.jpeg" alt="⁣Rescue Me Real Estate In Association with Miericoast Homes" />
                                                        <div className="play_hover_btn" onmouseenter="show_gif(this,'https://clikview.com/upload/videos/2022/08/rekSgB8FA3MfEVWWx4UV_20_2dd6d0ac637a69200d74f91e1946feb88341689b6d7669ede02c35307a659a_small_video_.gif')" onmouseleave="hide_gif(this)">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather-play-circle"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
                                                            {/* <!--<svg xmlns="http://www.w3.org/2000/svg" className="feather" width="24" height="24" viewBox="0 0 24 24" fill="rgba(255, 255, 255, 0.8)"><path d="M8,5.14V19.14L19,12.14L8,5.14Z"></path></svg>--> */}
                                                        </div>
                                                        <div className="video-duration">1:19</div>
                                                    </a>
                                                </div>
                                                <div className="ra-title">
                                                    <div className="video-title-detailPage"><a href="https://clikview.com/watch/rescue-me-real-estate-in-association-with-miericoast-homes_QPPvtEy8qZLC4T3.html" data-load="?link1=watch&amp;id=QPPvtEy8qZLC4T3"> ⁣Rescue Me Real Estate In Association with Miericoast Homes</a></div>
                                                    <div className="video-publisher">RescueMeRealEstate</div>
                                                    <div className="video-publisher" Style="font-size:12px;">35 Views <span className="middot">·</span> 08/20/22</div>
                                                    <div className="video-category"><a href="https://clikview.com/videos/category/6">Travel &amp; Events</a></div>
                                                </div>
                                            </div>
                                        </div>
                                        <br />
                                        <div className="related-header">
                                        </div>
                                        <div className="videos-list related-videos">
                                            <div className="related-video-wrapper" data-sidebar-video="158">
                                                <div className="ra-thumb">
                                                    <a href="https://clikview.com/watch/royal-life-residence-north-cyprus_tftP6BWbrOxsR9W.html" data-load="?link1=watch&amp;id=tftP6BWbrOxsR9W" Style=" border-radius: 10px; overflow: hidden; ">
                                                        <img src="https://clikview.com/upload/photos/2022/08/dda73efb8ae4a571d8bce34da24f7f6669f66552xB3hnsIPCrClwYTr8Gk3.video_thumb_2303_11.jpeg" alt="⁣Royal Life Residence - North Cyprus" />
                                                        <div className="play_hover_btn" onmouseenter="show_gif(this,'https://clikview.com/upload/videos/2022/08/jGzl6v5FU5P7oLYDOcFC_20_d4fe244fcd1d2c7c72834fe62ae9219687ea72862c178d92ea674c17a48256_small_video_.gif')" onmouseleave="hide_gif(this)">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather-play-circle"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
                                                            {/* <!--<svg xmlns="http://www.w3.org/2000/svg" className="feather" width="24" height="24" viewBox="0 0 24 24" fill="rgba(255, 255, 255, 0.8)"><path d="M8,5.14V19.14L19,12.14L8,5.14Z"></path></svg>--> */}
                                                        </div>
                                                        <div className="video-duration">0:53</div>
                                                    </a>
                                                </div>
                                                <div className="ra-title">
                                                    <div className="video-title-detailPage"><a href="https://clikview.com/watch/royal-life-residence-north-cyprus_tftP6BWbrOxsR9W.html" data-load="?link1=watch&amp;id=tftP6BWbrOxsR9W"> ⁣Royal Life Residence - North Cyprus</a></div>
                                                    <div className="video-publisher">RescueMeRealEstate</div>
                                                    <div className="video-publisher" Style="font-size:12px;">32 Views <span className="middot">·</span> 08/20/22</div>
                                                    <div className="video-category"><a href="https://clikview.com/videos/category/6">Travel &amp; Events</a></div>
                                                </div>
                                            </div><div className="related-video-wrapper" data-sidebar-video="161">
                                                <div className="ra-thumb">
                                                    <a href="https://clikview.com/watch/royal-sun-elite-north-cyprus_iA41aCob3ppeE5b.html" data-load="?link1=watch&amp;id=iA41aCob3ppeE5b" Style=" border-radius: 10px; overflow: hidden; ">
                                                        <img src="https://clikview.com/upload/photos/2022/08/9b12937807f4e80c1b2240b7c0206684619613f5YoPviymhXeeGx8SVc5ak.video_thumb_1431_39.jpeg" alt="⁣Royal Sun Elite - North Cyprus" />
                                                        <div className="play_hover_btn" onmouseenter="show_gif(this,'https://clikview.com/upload/videos/2022/08/A5q26V3rhx7iSPwtwgGP_20_4b2c564ae533eed517646f2c60c4a5517c4faaa80cab351051dcec4fd55dbd_small_video_.gif')" onmouseleave="hide_gif(this)">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather-play-circle"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
                                                            {/* <!--<svg xmlns="http://www.w3.org/2000/svg" className="feather" width="24" height="24" viewBox="0 0 24 24" fill="rgba(255, 255, 255, 0.8)"><path d="M8,5.14V19.14L19,12.14L8,5.14Z"></path></svg>--> */}
                                                        </div>
                                                        <div className="video-duration">0:59</div>
                                                    </a>
                                                </div>
                                                <div className="ra-title">
                                                    <div className="video-title-detailPage"><a href="https://clikview.com/watch/royal-sun-elite-north-cyprus_iA41aCob3ppeE5b.html" data-load="?link1=watch&amp;id=iA41aCob3ppeE5b"> ⁣Royal Sun Elite - North Cyprus</a></div>
                                                    <div className="video-publisher">RescueMeRealEstate</div>
                                                    <div className="video-publisher" Style="font-size:12px;">17 Views <span className="middot">·</span> 08/20/22</div>
                                                    <div className="video-category"><a href="https://clikview.com/videos/category/6">Travel &amp; Events</a></div>
                                                </div>
                                            </div><div className="related-video-wrapper" data-sidebar-video="1001">
                                                <div className="ra-thumb">
                                                    <a href="https://clikview.com/watch/sexy-single-girl-traveling-costa-rica-she-has-something-to-say_7yHZ93eAYSjPCw4.html" data-load="?link1=watch&amp;id=7yHZ93eAYSjPCw4" Style=" border-radius: 10px; overflow: hidden; ">
                                                        <img src="https://i.ytimg.com/vi/gWRCECDqWIY/sddefault.jpg" alt="⁣Sexy, Single Girl Traveling Costa Rica 🧘 She Has Something to Say" />
                                                        <div className="play_hover_btn" onmouseenter="show_gif(this,'')" onmouseleave="hide_gif(this)">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather-play-circle"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
                                                            {/* <!--<svg xmlns="http://www.w3.org/2000/svg" className="feather" width="24" height="24" viewBox="0 0 24 24" fill="rgba(255, 255, 255, 0.8)"><path d="M8,5.14V19.14L19,12.14L8,5.14Z"></path></svg>--> */}
                                                        </div>
                                                        <div className="video-duration">00:27:45</div>
                                                    </a>
                                                </div>
                                                <div className="ra-title">
                                                    <div className="video-title-detailPage"><a href="https://clikview.com/watch/sexy-single-girl-traveling-costa-rica-she-has-something-to-say_7yHZ93eAYSjPCw4.html" data-load="?link1=watch&amp;id=7yHZ93eAYSjPCw4"> ⁣Sexy, Single Girl Traveling Costa Rica 🧘 She Has Something to Say</a></div>
                                                    <div className="video-publisher">Riley Jackson</div>
                                                    <div className="video-publisher" Style="font-size:12px;">10 Views <span className="middot">·</span> 08/31/22</div>
                                                    <div className="video-category"><a href="https://clikview.com/videos/category/6">Travel &amp; Events</a></div>
                                                </div>
                                            </div><div className="related-video-wrapper" data-sidebar-video="738">
                                                <div className="ra-thumb">
                                                    <a href="https://clikview.com/watch/macaws-of-tortuguero_IKqZN14rptN72d5.html" data-load="?link1=watch&amp;id=IKqZN14rptN72d5" Style=" border-radius: 10px; overflow: hidden; ">
                                                        <img src="https://clikview.com/upload/photos/2022/08/d021e5a2ee496c4ebb59d6f41c0b911e2b24abe5K168ryvsDjnETb4W3eXN.video_thumb_3250_11.jpeg" alt="⁣Macaws of Tortuguero" />
                                                        <div className="play_hover_btn" onmouseenter="show_gif(this,'https://clikview.com/upload/videos/2022/08/o9SqYZEJtd9XlzEUFfOY_28_91d755c609a09b8477720cb57841a29caad36b24e769ae9ef40d2cfc4ef988_small_video_.gif')" onmouseleave="hide_gif(this)">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather-play-circle"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
                                                            {/* <!--<svg xmlns="http://www.w3.org/2000/svg" className="feather" width="24" height="24" viewBox="0 0 24 24" fill="rgba(255, 255, 255, 0.8)"><path d="M8,5.14V19.14L19,12.14L8,5.14Z"></path></svg>--> */}
                                                        </div>
                                                        <div className="video-duration">0:20</div>
                                                    </a>
                                                </div>
                                                <div className="ra-title">
                                                    <div className="video-title-detailPage"><a href="https://clikview.com/watch/macaws-of-tortuguero_IKqZN14rptN72d5.html" data-load="?link1=watch&amp;id=IKqZN14rptN72d5"> ⁣Macaws of Tortuguero</a></div>
                                                    <div className="video-publisher">Riley Jackson</div>
                                                    <div className="video-publisher" Style="font-size:12px;">8 Views <span className="middot">·</span> 08/28/22</div>
                                                    <div className="video-category"><a href="https://clikview.com/videos/category/6">Travel &amp; Events</a></div>
                                                </div>
                                            </div><div className="related-video-wrapper" data-sidebar-video="322">
                                                <div className="ra-thumb">
                                                    <a href="https://clikview.com/watch/beautiful-costa-rica-pura-vida_nRKDASNtaqbx93c.html" data-load="?link1=watch&amp;id=nRKDASNtaqbx93c" Style=" border-radius: 10px; overflow: hidden; ">
                                                        <img src="https://clikview.com/upload/photos/2022/08/43fa3424fbfc47f5292c5b2f5cf0a0598ac3c4b4Qq2uabOLafGvBpYa4v8H.video_thumb_8411_11.jpeg" alt="⁣Beautiful Costa Rica - Pura Vida" />
                                                        <div className="play_hover_btn" onmouseenter="show_gif(this,'https://clikview.com/upload/videos/2022/08/7dABj3nlHy2unZskELkN_22_2849804125b1e11e11b96ebc71c0629f7338891f609f2a5eda358aa1ce9335_small_video_.gif')" onmouseleave="hide_gif(this)">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather-play-circle"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
                                                            {/* <!--<svg xmlns="http://www.w3.org/2000/svg" className="feather" width="24" height="24" viewBox="0 0 24 24" fill="rgba(255, 255, 255, 0.8)"><path d="M8,5.14V19.14L19,12.14L8,5.14Z"></path></svg>--> */}
                                                        </div>
                                                        <div className="video-duration">6:43</div>
                                                    </a>
                                                </div>
                                                <div className="ra-title">
                                                    <div className="video-title-detailPage"><a href="https://clikview.com/watch/beautiful-costa-rica-pura-vida_nRKDASNtaqbx93c.html" data-load="?link1=watch&amp;id=nRKDASNtaqbx93c"> ⁣Beautiful Costa Rica - Pura Vida</a></div>
                                                    <div className="video-publisher">Riley Jackson</div>
                                                    <div className="video-publisher" Style="font-size:12px;">28 Views <span className="middot">·</span> 08/22/22</div>
                                                    <div className="video-category"><a href="https://clikview.com/videos/category/6">Travel &amp; Events</a></div>
                                                </div>
                                            </div><div className="related-video-wrapper" data-sidebar-video="644">
                                                <div className="ra-thumb">
                                                    <a href="https://clikview.com/watch/4-days-in-tamarindo_nqWa49H43M8yAXq.html" data-load="?link1=watch&amp;id=nqWa49H43M8yAXq" Style=" border-radius: 10px; overflow: hidden; ">
                                                        <img src="https://clikview.com/upload/photos/2022/08/51e5e88e01ed5017ce6cafdefc688a9bceabc408iRgRoMY9rPavrqkeKLSf.video_thumb_4211_11.jpeg" alt="⁣4 Days in Tamarindo" />
                                                        <div className="play_hover_btn" onmouseenter="show_gif(this,'https://clikview.com/upload/videos/2022/08/3LMnk4xBgVYahRu9fvXw_26_379266fbf8e9471f7b5526100f0bc8e310bc8b3b34166d0269352ad06154a2_small_video_.gif')" onmouseleave="hide_gif(this)">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather-play-circle"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
                                                            {/* <!--<svg xmlns="http://www.w3.org/2000/svg" className="feather" width="24" height="24" viewBox="0 0 24 24" fill="rgba(255, 255, 255, 0.8)"><path d="M8,5.14V19.14L19,12.14L8,5.14Z"></path></svg>--> */}
                                                        </div>
                                                        <div className="video-duration">0:58</div>
                                                    </a>
                                                </div>
                                                <div className="ra-title">
                                                    <div className="video-title-detailPage"><a href="https://clikview.com/watch/4-days-in-tamarindo_nqWa49H43M8yAXq.html" data-load="?link1=watch&amp;id=nqWa49H43M8yAXq"> ⁣4 Days in Tamarindo</a></div>
                                                    <div className="video-publisher">Riley Jackson</div>
                                                    <div className="video-publisher" Style="font-size:12px;">18 Views <span className="middot">·</span> 08/26/22</div>
                                                    <div className="video-category"><a href="https://clikview.com/videos/category/6">Travel &amp; Events</a></div>
                                                </div>
                                            </div><div className="related-video-wrapper" data-sidebar-video="553">
                                                <div className="ra-thumb">
                                                    <a href="https://clikview.com/watch/costa-rica-through-my-eyes-uno_d98qftoomTkLy3T.html" data-load="?link1=watch&amp;id=d98qftoomTkLy3T" Style=" border-radius: 10px; overflow: hidden; ">
                                                        <img src="https://clikview.com/upload/photos/2022/08/cb5d835bee89bf7bd5af8360f7ee53aa7f231963IKCJsOSB1IUu8foZIDJX.video_thumb_1189_11.jpeg" alt="⁣Costa Rica Through My Eyes - Uno" />
                                                        <div className="play_hover_btn" onmouseenter="show_gif(this,'https://clikview.com/upload/videos/2022/08/Lev5UXbXtcrpjP29z9DC_24_a2d3f7b18c391b6c87cd4ca424b134f3ecde9243f0a20e1d8187c45d4d2093_small_video_.gif')" onmouseleave="hide_gif(this)">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather-play-circle"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
                                                            {/* <!--<svg xmlns="http://www.w3.org/2000/svg" className="feather" width="24" height="24" viewBox="0 0 24 24" fill="rgba(255, 255, 255, 0.8)"><path d="M8,5.14V19.14L19,12.14L8,5.14Z"></path></svg>--> */}
                                                        </div>
                                                        <div className="video-duration">1:02</div>
                                                    </a>
                                                </div>
                                                <div className="ra-title">
                                                    <div className="video-title-detailPage"><a href="https://clikview.com/watch/costa-rica-through-my-eyes-uno_d98qftoomTkLy3T.html" data-load="?link1=watch&amp;id=d98qftoomTkLy3T"> ⁣Costa Rica Through My Eyes - Uno</a></div>
                                                    <div className="video-publisher">Riley Jackson</div>
                                                    <div className="video-publisher" Style="font-size:12px;">9 Views <span className="middot">·</span> 08/24/22</div>
                                                    <div className="video-category"><a href="https://clikview.com/videos/category/6">Travel &amp; Events</a></div>
                                                </div>
                                            </div><div className="related-video-wrapper" data-sidebar-video="598">
                                                <div className="ra-thumb">
                                                    <a href="https://clikview.com/watch/monkey-business-in-manuel-antonio_JPYwaEemnjD8Yfh.html" data-load="?link1=watch&amp;id=JPYwaEemnjD8Yfh" Style=" border-radius: 10px; overflow: hidden; ">
                                                        <img src="https://clikview.com/upload/photos/2022/08/b3cf99eb34a76cdc002a543435798a74ad47bdd9CICzq58yiecf8VxXPkYo.video_thumb_9997_11.jpeg" alt="⁣Monkey Business in Manuel Antonio" />
                                                        <div className="play_hover_btn" onmouseenter="show_gif(this,'https://clikview.com/upload/videos/2022/08/dFmtlayRhvjZWsJykxsg_25_a4600d2c0debc89b6d597e1afc3c2fa2c0e63644c98865ebff867393b90ddb_small_video_.gif')" onmouseleave="hide_gif(this)">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather-play-circle"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
                                                            {/* <!--<svg xmlns="http://www.w3.org/2000/svg" className="feather" width="24" height="24" viewBox="0 0 24 24" fill="rgba(255, 255, 255, 0.8)"><path d="M8,5.14V19.14L19,12.14L8,5.14Z"></path></svg>--> */}
                                                        </div>
                                                        <div className="video-duration">0:53</div>
                                                    </a>
                                                </div>
                                                <div className="ra-title">
                                                    <div className="video-title-detailPage"><a href="https://clikview.com/watch/monkey-business-in-manuel-antonio_JPYwaEemnjD8Yfh.html" data-load="?link1=watch&amp;id=JPYwaEemnjD8Yfh"> ⁣Monkey Business in Manuel Antonio</a></div>
                                                    <div className="video-publisher">Riley Jackson</div>
                                                    <div className="video-publisher" Style="font-size:12px;">7 Views <span className="middot">·</span> 08/25/22</div>
                                                    <div className="video-category"><a href="https://clikview.com/videos/category/6">Travel &amp; Events</a></div>
                                                </div>
                                            </div><div className="related-video-wrapper" data-sidebar-video="634">
                                                <div className="ra-thumb">
                                                    <a href="https://clikview.com/watch/costa-rica-a-new-radio-station-blaxit-radio-talk-music_3XcjeQ2zcFMKJlv.html" data-load="?link1=watch&amp;id=3XcjeQ2zcFMKJlv" Style=" border-radius: 10px; overflow: hidden; ">
                                                        <img src="https://i.ytimg.com/vi/c_W8d9_Biq4/maxresdefault.jpg" alt="⁣Costa Rica - A New Radio Station 📻 Blaxit Radio🎙Talk 🎺 Music" />
                                                        <div className="play_hover_btn" onmouseenter="show_gif(this,'')" onmouseleave="hide_gif(this)">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather-play-circle"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
                                                            {/* <!--<svg xmlns="http://www.w3.org/2000/svg" className="feather" width="24" height="24" viewBox="0 0 24 24" fill="rgba(255, 255, 255, 0.8)"><path d="M8,5.14V19.14L19,12.14L8,5.14Z"></path></svg>--> */}
                                                        </div>
                                                        <div className="video-duration">00:17:44</div>
                                                    </a>
                                                </div>
                                                <div className="ra-title">
                                                    <div className="video-title-detailPage"><a href="https://clikview.com/watch/costa-rica-a-new-radio-station-blaxit-radio-talk-music_3XcjeQ2zcFMKJlv.html" data-load="?link1=watch&amp;id=3XcjeQ2zcFMKJlv"> ⁣Costa Rica - A New Radio Station 📻 Blaxit Radio🎙Talk 🎺 Music</a></div>
                                                    <div className="video-publisher">Riley Jackson</div>
                                                    <div className="video-publisher" Style="font-size:12px;">9 Views <span className="middot">·</span> 08/26/22</div>
                                                    <div className="video-category"><a href="https://clikview.com/videos/category/6">Travel &amp; Events</a></div>
                                                </div>
                                            </div><div className="related-video-wrapper" data-sidebar-video="684">
                                                <div className="ra-thumb">
                                                    <a href="https://clikview.com/watch/costa-rica-through-my-eyes-dos_a372Iq8OxG6zlJm.html" data-load="?link1=watch&amp;id=a372Iq8OxG6zlJm" Style=" border-radius: 10px; overflow: hidden; ">
                                                        <img src="https://clikview.com/upload/photos/2022/08/6b8b15f7245d65bac3df8ed7cae2c90d0dfcad04oeNLxCRxakVFKnB3g27e.video_thumb_7010_11.jpeg" alt="⁣Costa Rica Through My Eyes  - Dos" />
                                                        <div className="play_hover_btn" onmouseenter="show_gif(this,'https://clikview.com/upload/videos/2022/08/DcPNHPFMF4GhceT3UAhJ_27_e1576c1bace8b47653bdf29b06f09c01f115ea915b6a6ade9bd167ade3e061_small_video_.gif')" onmouseleave="hide_gif(this)">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather-play-circle"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
                                                            {/* <!--<svg xmlns="http://www.w3.org/2000/svg" className="feather" width="24" height="24" viewBox="0 0 24 24" fill="rgba(255, 255, 255, 0.8)"><path d="M8,5.14V19.14L19,12.14L8,5.14Z"></path></svg>--> */}
                                                        </div>
                                                        <div className="video-duration">1:31</div>
                                                    </a>
                                                </div>
                                                <div className="ra-title">
                                                    <div className="video-title-detailPage"><a href="https://clikview.com/watch/costa-rica-through-my-eyes-dos_a372Iq8OxG6zlJm.html" data-load="?link1=watch&amp;id=a372Iq8OxG6zlJm"> ⁣Costa Rica Through My Eyes  - Dos</a></div>
                                                    <div className="video-publisher">Riley Jackson</div>
                                                    <div className="video-publisher" Style="font-size:12px;">26 Views <span className="middot">·</span> 08/27/22</div>
                                                    <div className="video-category"><a href="https://clikview.com/videos/category/6">Travel &amp; Events</a></div>
                                                </div>
                                            </div><div className="related-video-wrapper" data-sidebar-video="710">
                                                <div className="ra-thumb">
                                                    <a href="https://clikview.com/watch/sunrise-in-korea-a-timelapse-video_5CzSc74n19Kif9n.html" data-load="?link1=watch&amp;id=5CzSc74n19Kif9n" Style=" border-radius: 10px; overflow: hidden; ">
                                                        <img src="https://clikview.com/upload/photos/2022/08/759444b2d891d7b400a533a37b07352f8d217b3dhd9zEsNltaabXyYYablA.video_thumb_8247_11.jpeg" alt="⁣Sunrise In Korea - A Timelapse Video." />
                                                        <div className="play_hover_btn" onmouseenter="show_gif(this,'https://clikview.com/upload/videos/2022/08/HqdaV2CIlFIrphMyayJ7_27_e78a10bab21f372b25ee2fefd1d1c65cc236d87114bce6111b3a38f57d1c06_small_video_.gif')" onmouseleave="hide_gif(this)">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather-play-circle"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
                                                            {/* <!--<svg xmlns="http://www.w3.org/2000/svg" className="feather" width="24" height="24" viewBox="0 0 24 24" fill="rgba(255, 255, 255, 0.8)"><path d="M8,5.14V19.14L19,12.14L8,5.14Z"></path></svg>--> */}
                                                        </div>
                                                        <div className="video-duration">0:23</div>
                                                    </a>
                                                </div>
                                                <div className="ra-title">
                                                    <div className="video-title-detailPage"><a href="https://clikview.com/watch/sunrise-in-korea-a-timelapse-video_5CzSc74n19Kif9n.html" data-load="?link1=watch&amp;id=5CzSc74n19Kif9n"> ⁣Sunrise In Korea - A Timelapse Video.</a></div>
                                                    <div className="video-publisher">TAP18</div>
                                                    <div className="video-publisher" Style="font-size:12px;">25 Views <span className="middot">·</span> 08/27/22</div>
                                                    <div className="video-category"><a href="https://clikview.com/videos/category/6">Travel &amp; Events</a></div>
                                                </div>
                                            </div><div className="related-video-wrapper" data-sidebar-video="714">
                                                <div className="ra-thumb">
                                                    <a href="https://clikview.com/watch/roatan-honduras_qiiCXq1ZVh8otHt.html" data-load="?link1=watch&amp;id=qiiCXq1ZVh8otHt" Style=" border-radius: 10px; overflow: hidden; ">
                                                        <img src="https://i.ytimg.com/vi/6K5z3AtQiy8/maxresdefault.jpg" alt="⁣Roatan, Honduras" />
                                                        <div className="play_hover_btn" onmouseenter="show_gif(this,'')" onmouseleave="hide_gif(this)">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather-play-circle"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
                                                            {/* <!--<svg xmlns="http://www.w3.org/2000/svg" className="feather" width="24" height="24" viewBox="0 0 24 24" fill="rgba(255, 255, 255, 0.8)"><path d="M8,5.14V19.14L19,12.14L8,5.14Z"></path></svg>--> */}
                                                        </div>
                                                        <div className="video-duration">00:03:06</div>
                                                    </a>
                                                </div>
                                                <div className="ra-title">
                                                    <div className="video-title-detailPage"><a href="https://clikview.com/watch/roatan-honduras_qiiCXq1ZVh8otHt.html" data-load="?link1=watch&amp;id=qiiCXq1ZVh8otHt"> ⁣Roatan, Honduras</a></div>
                                                    <div className="video-publisher">Enelisa</div>
                                                    <div className="video-publisher" Style="font-size:12px;">28 Views <span className="middot">·</span> 08/27/22</div>
                                                    <div className="video-category"><a href="https://clikview.com/videos/category/6">Travel &amp; Events</a></div>
                                                </div>
                                            </div><div className="related-video-wrapper" data-sidebar-video="736">
                                                <div className="ra-thumb">
                                                    <a href="https://clikview.com/watch/costa-rica-s-got-talent_ZjCoGGsc9YokQFO.html" data-load="?link1=watch&amp;id=ZjCoGGsc9YokQFO" Style=" border-radius: 10px; overflow: hidden; ">
                                                        <img src="https://i.ytimg.com/vi/QP4urwn6hd0/maxresdefault.jpg" alt="⁣COSTA RICA’S  GOT TALENT!" />
                                                        <div className="play_hover_btn" onmouseenter="show_gif(this,'')" onmouseleave="hide_gif(this)">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather-play-circle"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
                                                            {/* <!--<svg xmlns="http://www.w3.org/2000/svg" className="feather" width="24" height="24" viewBox="0 0 24 24" fill="rgba(255, 255, 255, 0.8)"><path d="M8,5.14V19.14L19,12.14L8,5.14Z"></path></svg>--> */}
                                                        </div>
                                                        <div className="video-duration">00:03:23</div>
                                                    </a>
                                                </div>
                                                <div className="ra-title">
                                                    <div className="video-title-detailPage"><a href="https://clikview.com/watch/costa-rica-s-got-talent_ZjCoGGsc9YokQFO.html" data-load="?link1=watch&amp;id=ZjCoGGsc9YokQFO"> ⁣COSTA RICA’S  GOT TALENT!</a></div>
                                                    <div className="video-publisher">Riley Jackson</div>
                                                    <div className="video-publisher" Style="font-size:12px;">22 Views <span className="middot">·</span> 08/28/22</div>
                                                    <div className="video-category"><a href="https://clikview.com/videos/category/6">Travel &amp; Events</a></div>
                                                </div>
                                            </div><div className="related-video-wrapper" data-sidebar-video="750">
                                                <div className="ra-thumb">
                                                    <a href="https://clikview.com/watch/own-a-beachfront-condo-today-2-bed-2-bath-in-playa-potrero-costa-rica_zYskyQtimylAABj.html" data-load="?link1=watch&amp;id=zYskyQtimylAABj" Style=" border-radius: 10px; overflow: hidden; ">
                                                        <img src="https://i.ytimg.com/vi/uMhwiao2dSU/maxresdefault.jpg" alt="⁣Own a Beachfront Condo Today | 2 Bed 2 Bath in Playa Potrero Costa Rica" />
                                                        <div className="play_hover_btn" onmouseenter="show_gif(this,'')" onmouseleave="hide_gif(this)">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather-play-circle"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
                                                            {/* <!--<svg xmlns="http://www.w3.org/2000/svg" className="feather" width="24" height="24" viewBox="0 0 24 24" fill="rgba(255, 255, 255, 0.8)"><path d="M8,5.14V19.14L19,12.14L8,5.14Z"></path></svg>--> */}
                                                        </div>
                                                        <div className="video-duration">00:06:14</div>
                                                    </a>
                                                </div>
                                                <div className="ra-title">
                                                    <div className="video-title-detailPage"><a href="https://clikview.com/watch/own-a-beachfront-condo-today-2-bed-2-bath-in-playa-potrero-costa-rica_zYskyQtimylAABj.html" data-load="?link1=watch&amp;id=zYskyQtimylAABj"> ⁣Own a Beachfront Condo Today | 2 Bed 2 Bath in Playa Potrero Costa Rica</a></div>
                                                    <div className="video-publisher">Riley Jackson</div>
                                                    <div className="video-publisher" Style="font-size:12px;">24 Views <span className="middot">·</span> 08/28/22</div>
                                                    <div className="video-category"><a href="https://clikview.com/videos/category/6">Travel &amp; Events</a></div>
                                                </div>
                                            </div><div className="related-video-wrapper" data-sidebar-video="822">
                                                <div className="ra-thumb">
                                                    <a href="https://clikview.com/watch/my-italian-summer_B2vLGdJ7qdnkUJD.html" data-load="?link1=watch&amp;id=B2vLGdJ7qdnkUJD" Style=" border-radius: 10px; overflow: hidden; ">
                                                        <img src="https://clikview.com/upload/photos/2022/08/ikYUCdKhGxEtp7xWg7wP_29_64785becd829b20f176ddc1b27105780_image.jpeg" alt="⁣My Italian Summer" />
                                                        <div className="play_hover_btn" onmouseenter="show_gif(this,'https://clikview.com/upload/videos/2022/08/8JIwk4D5JnwuxfGPPUJh_29_b6eb60d369793da0cfed3ccd2edc47d1fd60f36d2deb97cf1f8fc11910e2d9_small_video_.gif')" onmouseleave="hide_gif(this)">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather-play-circle"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
                                                            {/* <!--<svg xmlns="http://www.w3.org/2000/svg" className="feather" width="24" height="24" viewBox="0 0 24 24" fill="rgba(255, 255, 255, 0.8)"><path d="M8,5.14V19.14L19,12.14L8,5.14Z"></path></svg>--> */}
                                                        </div>
                                                        <div className="video-duration">3:40</div>
                                                    </a>
                                                </div>
                                                <div className="ra-title">
                                                    <div className="video-title-detailPage"><a href="https://clikview.com/watch/my-italian-summer_B2vLGdJ7qdnkUJD.html" data-load="?link1=watch&amp;id=B2vLGdJ7qdnkUJD"> ⁣My Italian Summer</a></div>
                                                    <div className="video-publisher">Liliana Cavaliere Hintz</div>
                                                    <div className="video-publisher" Style="font-size:12px;">16 Views <span className="middot">·</span> 08/29/22</div>
                                                    <div className="video-category"><a href="https://clikview.com/videos/category/6">Travel &amp; Events</a></div>
                                                </div>
                                            </div><div className="related-video-wrapper" data-sidebar-video="889">
                                                <div className="ra-thumb">
                                                    <a href="https://clikview.com/watch/blaxit-radio-a-international-vibe_kPv3WpghJiKD3JA.html" data-load="?link1=watch&amp;id=kPv3WpghJiKD3JA" Style=" border-radius: 10px; overflow: hidden; ">
                                                        <img src="https://clikview.com/upload/photos/2022/08/gnVAR99w6NzvBf9OOPIR_30_346c3405242c056c5a831e6bc909fec2_image.png" alt="⁣Blaxit Radio an International Vibe!" />
                                                        <div className="play_hover_btn" onmouseenter="show_gif(this,'https://clikview.com/upload/videos/2022/08/1Yq6hPdrhXP2c1W2CYCs_30_e9230b132bcff0f860e50df36ae409fb8eb7c48f5befae2171f3a13a783457_small_video_.gif')" onmouseleave="hide_gif(this)">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather-play-circle"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
                                                            {/* <!--<svg xmlns="http://www.w3.org/2000/svg" className="feather" width="24" height="24" viewBox="0 0 24 24" fill="rgba(255, 255, 255, 0.8)"><path d="M8,5.14V19.14L19,12.14L8,5.14Z"></path></svg>--> */}
                                                        </div>
                                                        <div className="video-duration">1:26</div>
                                                    </a>
                                                </div>
                                                <div className="ra-title">
                                                    <div className="video-title-detailPage"><a href="https://clikview.com/watch/blaxit-radio-a-international-vibe_kPv3WpghJiKD3JA.html" data-load="?link1=watch&amp;id=kPv3WpghJiKD3JA"> ⁣Blaxit Radio an International Vibe!</a></div>
                                                    <div className="video-publisher">Riley Jackson</div>
                                                    <div className="video-publisher" Style="font-size:12px;">8 Views <span className="middot">·</span> 08/30/22</div>
                                                    <div className="video-category"><a href="https://clikview.com/videos/category/6">Travel &amp; Events</a></div>
                                                </div>
                                            </div><div className="related-video-wrapper" data-sidebar-video="890">
                                                <div className="ra-thumb">
                                                    <a href="https://clikview.com/watch/luxury-modern-beachfront-home-in-playa-flamingo-costa-rica_3ypMgoVAbbUMpQ6.html" data-load="?link1=watch&amp;id=3ypMgoVAbbUMpQ6" Style=" border-radius: 10px; overflow: hidden; ">
                                                        <img src="https://i.ytimg.com/vi/6EJf6acFPZY/sddefault.jpg" alt="⁣Luxury Modern Beachfront Home in Playa Flamingo, Costa Rica!" />
                                                        <div className="play_hover_btn" onmouseenter="show_gif(this,'')" onmouseleave="hide_gif(this)">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather-play-circle"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
                                                            {/* <!--<svg xmlns="http://www.w3.org/2000/svg" className="feather" width="24" height="24" viewBox="0 0 24 24" fill="rgba(255, 255, 255, 0.8)"><path d="M8,5.14V19.14L19,12.14L8,5.14Z"></path></svg>--> */}
                                                        </div>
                                                        <div className="video-duration">00:07:23</div>
                                                    </a>
                                                </div>
                                                <div className="ra-title">
                                                    <div className="video-title-detailPage"><a href="https://clikview.com/watch/luxury-modern-beachfront-home-in-playa-flamingo-costa-rica_3ypMgoVAbbUMpQ6.html" data-load="?link1=watch&amp;id=3ypMgoVAbbUMpQ6"> ⁣Luxury Modern Beachfront Home in Playa Flamingo, Costa Rica!</a></div>
                                                    <div className="video-publisher">Riley Jackson</div>
                                                    <div className="video-publisher" Style="font-size:12px;">18 Views <span className="middot">·</span> 08/30/22</div>
                                                    <div className="video-category"><a href="https://clikview.com/videos/category/6">Travel &amp; Events</a></div>
                                                </div>
                                            </div><div className="related-video-wrapper" data-sidebar-video="1002">
                                                <div className="ra-thumb">
                                                    <a href="https://clikview.com/watch/las-catalinas-costa-rica-a-walk-through-our-car-free-town_oKzSBUOuXFyAaJa.html" data-load="?link1=watch&amp;id=oKzSBUOuXFyAaJa" Style=" border-radius: 10px; overflow: hidden; ">
                                                        <img src="https://i.ytimg.com/vi/t7EFaJMdiLc/maxresdefault.jpg" alt="⁣Las Catalinas, Costa Rica | A Walk Through our Car-Free Town" />
                                                        <div className="play_hover_btn" onmouseenter="show_gif(this,'')" onmouseleave="hide_gif(this)">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather-play-circle"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
                                                            {/* <!--<svg xmlns="http://www.w3.org/2000/svg" className="feather" width="24" height="24" viewBox="0 0 24 24" fill="rgba(255, 255, 255, 0.8)"><path d="M8,5.14V19.14L19,12.14L8,5.14Z"></path></svg>--> */}
                                                        </div>
                                                        <div className="video-duration">00:15:24</div>
                                                    </a>
                                                </div>
                                                <div className="ra-title">
                                                    <div className="video-title-detailPage"><a href="https://clikview.com/watch/las-catalinas-costa-rica-a-walk-through-our-car-free-town_oKzSBUOuXFyAaJa.html" data-load="?link1=watch&amp;id=oKzSBUOuXFyAaJa"> ⁣Las Catalinas, Costa Rica | A Walk Through our Car-Free Town</a></div>
                                                    <div className="video-publisher">Riley Jackson</div>
                                                    <div className="video-publisher" Style="font-size:12px;">10 Views <span className="middot">·</span> 08/31/22</div>
                                                    <div className="video-category"><a href="https://clikview.com/videos/category/6">Travel &amp; Events</a></div>
                                                </div>
                                            </div><div className="related-video-wrapper" data-sidebar-video="1050">
                                                <div className="ra-thumb">
                                                    <a href="https://clikview.com/watch/la-terraza-guest-house-b-amp-b-grecia-costa-rica_pfbsPRkDRlL9zae.html" data-load="?link1=watch&amp;id=pfbsPRkDRlL9zae" Style=" border-radius: 10px; overflow: hidden; ">
                                                        <img src="https://i.ytimg.com/vi/pOmMRL45azw/maxresdefault.jpg" alt="⁣La Terraza Guest House B&amp;B Grecia Costa Rica" />
                                                        <div className="play_hover_btn" onmouseenter="show_gif(this,'')" onmouseleave="hide_gif(this)">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather-play-circle"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
                                                            {/* <!--<svg xmlns="http://www.w3.org/2000/svg" className="feather" width="24" height="24" viewBox="0 0 24 24" fill="rgba(255, 255, 255, 0.8)"><path d="M8,5.14V19.14L19,12.14L8,5.14Z"></path></svg>--> */}
                                                        </div>
                                                        <div className="video-duration">00:02:28</div>
                                                    </a>
                                                </div>
                                                <div className="ra-title">
                                                    <div className="video-title-detailPage"><a href="https://clikview.com/watch/la-terraza-guest-house-b-amp-b-grecia-costa-rica_pfbsPRkDRlL9zae.html" data-load="?link1=watch&amp;id=pfbsPRkDRlL9zae"> ⁣La Terraza Guest House B&amp;B Grecia Costa Rica</a></div>
                                                    <div className="video-publisher">Riley Jackson</div>
                                                    <div className="video-publisher" Style="font-size:12px;">12 Views <span className="middot">·</span> 09/01/22</div>
                                                    <div className="video-category"><a href="https://clikview.com/videos/category/6">Travel &amp; Events</a></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="clear"></div>
                            </div>
                        </div>
                        <div className="modal fade matdialog" id="share_box" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                            <div className="modal-dialog modal-sm" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h4 className="modal-title" id="myModalLabel">Share</h4>
                                    </div>
                                    <div className="modal-body">
                                        <div className="yp_copy_link">
                                            <input id="copyLink" readonly="" tabindex="1" type="text" value="https://clikview.com/v/Lx2euv" />
                                            <button className="btn" onclick="copyLinkfn();">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                    <path fill="currentColor" d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"></path>
                                                </svg>
                                            </button>
                                        </div>
                                        <div className="share-video">
                                            <div><a href="/hone2" className="fa fa-facebook" onclick="OpenShareWindow('https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fclikview.com%2Fwatch%2Flive-in-costa-rica-retire-n-relocate-to-cr-expat-interviews_C6I4dsl3UGZ8cHj.html')"><span></span></a></div>
                                            <div><a href="/hone2" className="fa fa-twitter" onclick="OpenShareWindow('https://twitter.com/intent/tweet?url=https%3A%2F%2Fclikview.com%2Fwatch%2Flive-in-costa-rica-retire-n-relocate-to-cr-expat-interviews_C6I4dsl3UGZ8cHj.html')"><span></span></a></div>
                                            <div><a href="/hone2" className="fa fa-google" onclick="OpenShareWindow('https://plus.google.com/share?url=https%3A%2F%2Fclikview.com%2Fwatch%2Flive-in-costa-rica-retire-n-relocate-to-cr-expat-interviews_C6I4dsl3UGZ8cHj.html')"><span></span></a></div>
                                            <div><a href="/hone2" className="fa fa-linkedin" onclick="OpenShareWindow('https://www.linkedin.com/shareArticle?mini=true&amp;url=https%3A%2F%2Fclikview.com%2Fwatch%2Flive-in-costa-rica-retire-n-relocate-to-cr-expat-interviews_C6I4dsl3UGZ8cHj.html&amp;title=Live in Costa Rica 👩🏻‍🤝‍👨🏿 Retire n Relocate to CR Expat Interviews')"><span></span></a></div>
                                            <div><a href="/hone2" className="fa fa-pinterest" onclick="OpenShareWindow('https://pinterest.com/pin/create/button/?url=https%3A%2F%2Fclikview.com%2Fwatch%2Flive-in-costa-rica-retire-n-relocate-to-cr-expat-interviews_C6I4dsl3UGZ8cHj.html&amp;media=https://i.ytimg.com/vi/EpFiGT96ezM/maxresdefault.jpg')"><span></span></a></div>
                                            {/* <!--<div><a href="#" className="fa fa-tumblr" onclick="OpenShareWindow('http://www.tumblr.com/share/link?url=https%3A%2F%2Fclikview.com%2Fwatch%2Flive-in-costa-rica-retire-n-relocate-to-cr-expat-interviews_C6I4dsl3UGZ8cHj.html')"></a></div>--> */}
                                            <div><a href="/hone2" className="fa fa-reddit" onclick="OpenShareWindow('http://www.reddit.com/submit?url=https%3A%2F%2Fclikview.com%2Fwatch%2Flive-in-costa-rica-retire-n-relocate-to-cr-expat-interviews_C6I4dsl3UGZ8cHj.html')"><span></span></a></div>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="matbtn btn btn-default" data-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal fade matdialog" id="embed_box" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                            <div className="modal-dialog modal-md" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h4 className="modal-title" id="myModalLabel">Embed</h4>
                                    </div>
                                    <div className="modal-body">
                                        <div className="embed-placement">
                                            <input type="text" name="embed" id="embed" className="form-control" onclick="this.select()" value="<iframe src=&quot;https://clikview.com/embed/C6I4dsl3UGZ8cHj&quot; frameborder=&quot;0&quot; width=&quot;700&quot; height=&quot;400&quot; allowfullscreen></iframe>" autoComplete="off" />
                                            &nbsp;&nbsp;&nbsp;
                                            {/* <!--<div className="colorpickerf input-group colorpicker-component">-->
                                                            <!--   <input id="demo" type="text" className="form-control" value="#04abf2" onchange="ChangeIframeColor(this)" />-->
                                                            <!--   <span className="input-group-addon"><i></i></span>-->
                                                            <!--</div>--> */}
                                        </div>
                                        <div className="pt_embed_playr">
                                            <iframe title='pt_embed_playr' src="https://clikview.com/embed/C6I4dsl3UGZ8cHj" frameborder="0" width="542" height="400" allowfullscreen="" Style="width: 100%; height: 100%;"></iframe>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="matbtn btn btn-default" data-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
                <input type="hidden" id="main-url" value="https://clikview.com%2F" />
                <div className="ads-placment" id="footer_ad_"></div>
            </div>
        </div>
        //     </div>
        // </div>
    )
};

export default VideoDetails