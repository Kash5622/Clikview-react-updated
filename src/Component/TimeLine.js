import { React, useState } from 'react'
import { $ } from 'react-jquery-plugin'
import MobileSearch from './MobileSearch';
import MyChannel from './MyChannel';
import QuickView from './QuickView';
import TimelineAbout from './TimelineAbout';
import TimelineArticle from './TimelineArticle';
import TimelineLikeVideos from './TimelineLikeVideos';
import TimelinesTimeline from './TimelinesTimeline';
import TimelineVideos from './TimelineVideos';
// import $ from 'jquery';

function TimeLine(props) {
    const { searchOpen, expandNav } = props;
    const [timelineSection, SetTimelineSection] = useState("videos")
    let sectionComponent;
    if (timelineSection === "videos") {
        sectionComponent = <TimelineVideos />
    }
    else if (timelineSection === "mychannel") {
        sectionComponent = <MyChannel />
    }
    else if (timelineSection === "quickview") {
        sectionComponent = <QuickView />
    }
    else if (timelineSection === "like") {
        sectionComponent = <TimelineLikeVideos/>
    }
    else if (timelineSection === "timeline") {
        sectionComponent = <TimelinesTimeline/>
    }
    else if (timelineSection === "about") {
        sectionComponent = <TimelineAbout />
    }
    else if (timelineSection === "article") {
        sectionComponent = <TimelineArticle />
    }
    $('.cover-container, .edit-cover-container').on('hover', function () {

        // $('.edit-cover-container').removeClass('hidde');
        document.getElementsByClassName('edit-cover-container')[0].classList.remove('hidde')
        console.log("hovered")

    });

    $('.cover-container, .edit-cover-container').on('mouseleave', function () {

        // $('.edit-cover-container').addClass('hidde');
        document.getElementsByClassName('edit-cover-container')[0].classList.add('hidde')
        console.log("mouseleave")

    });



    $('.avatar-container, .edit-avatar-container').hover(function () {

        $('.edit-avatar-container').removeClass('hidden');

    });

    $('.avatar-container, .edit-avatar-container').mouseleave(function () {

        $('.edit-avatar-container').addClass('hidden');

    });



    //   function PT_StartRepositioner() {

    //     $('.cover-container').hide();

    //     $('.cover-container-2').show();

    //     $('.cover-container-2 img').css('cursor', '-webkit-grab').draggable({

    //       scroll: false,

    //       axis: "y",

    //       cursor: "-webkit-grab",

    //       drag: function (event, ui) {

    //         var y1 = $('.cover-container-2').height();

    //         var y2 = $('.cover-container-2').find('img').height();

    //         if (ui.position.top >= 0) {

    //           ui.position.top = 0;

    //         } else {

    //           if (ui.position.top <= (y1 - y2)) {

    //             ui.position.top = y1 - y2;

    //           }

    //         }

    //       },

    //       stop: function (event, ui) {

    //         $('input.cover-position').val(ui.position.top);

    //       }

    //     });

    //   }



    //   function PT_StopRepositioner() {

    //     $('.cover-container').show();

    //     $('.cover-container-2').hide();

    //   }



    //   function Wo_SubmitRepositioner() {

    //     if ($('input.cover-position').length === 1) {

    //       var posY = $('input.cover-position').val();

    //       $('form.cover-position-form').submit();

    //     }

    //   }

    //  $('form.cover-position-form').ajaxForm({

    //     url: 'https://clikview.com/aj/user/re_cover?hash=' + $('.main_session').val(),

    //     dataType: 'json',

    //     beforeSend: function () {

    //       $('.user-reposition-dragable-container').hide();

    //       $('.user-repositioning-icons-container1').show();

    //       $('.user-repositioning-icons-container').html('<div className="pace-activity-parent"><div className="pace-activity"></div></div>').fadeIn('fast');

    //     },

    //     success: function (data) {

    //       if (data.status === 200) {

    //         $('.cover-container img').attr('src', data.url + '?time=' + Math.random()).on("load", function () {

    //           $('.cover-container').show();

    //           $('.cover-container-2').hide();

    //           $('.user-reposition-dragable-container').show();

    //           $('.user-repositioning-icons-container1').fadeOut('fast');

    //           $('.user-repositioning-icons-container').fadeOut('fast').html('');

    //           var div = document.getElementById("yp_bg_color");

    //           div.pseudoStyle("before", "background-image", "url('" + data.url + "')");

    //         });

    //       }

    //     }

    //   });
    //       var positionImg;
    //     var uploadPositionImg;
    //     var imagebase64;
    //     function touchHandler(event) {
    //       var touch = event.changedTouches[0];
    //       var simulatedEvent = document.createEvent("MouseEvent");
    //       simulatedEvent.initMouseEvent({
    //         touchstart: "mousedown",
    //         touchmove: "mousemove",
    //         touchend: "mouseup"
    //       }[event.type], true, true, window, 1,
    //         touch.screenX, touch.screenY,
    //         touch.clientX, touch.clientY, false,
    //         false, false, false, 0, null);

    //       touch.target.dispatchEvent(simulatedEvent);
    //     }

    //     function init() {
    //       document.addEventListener("touchstart", touchHandler, true);
    //       document.addEventListener("touchmove", touchHandler, true);
    //       document.addEventListener("touchend", touchHandler, true);
    //       document.addEventListener("touchcancel", touchHandler, true);
    //     }

    //     const stopAction = () => {
    //       $('.dragImg').css({ "cursor": "auto" })
    //       $('.cover-container-3').addClass('disablePic');
    //       $('.cover-container').removeClass('disablePic');
    //       $('.edit-cover-container').removeClass('disablePic');
    //       $('.cover-container-2').removeClass('disablePic');
    //       $('.mainImg').removeClass('disablePic');
    //     }

    //     $('.coverSet').on('click', ()=>{
    //       var $modalCover=$('#modalCover')
    //       $modalCover.modal('show');
    //       $('.dragImg').css({ "cursor": "move" })
    //       $('.cover-container-3').removeClass('disablePic');
    //       $('.cover-container').addClass('disablePic');
    //       $('.edit-cover-container').addClass('disablePic');
    //       $('.cover-container-2').addClass('disablePic');
    //       $('.mainImg').addClass('disablePic');

    //     })

    //     const setImg = () => {
    //       $('.mainImg').css({ "top": `${positionImg}` });
    //       $('.offUpdateCover').
    //       $('.dragImg').css({ "cursor": "auto" })
    //       var user_id = 2822;
    //       if (positionImg != undefined) {
    //         $.ajax({
    //           url: 'https://clikview.com/cover-position',
    //           method: "POST",
    //           data: { cover_position: positionImg, user_id: user_id },
    //           success: function (data1) {

    //           }
    //         });
    //       }
    //       $('.cover-container-3').addClass('disablePic');
    //       $('.cover-container').removeClass('disablePic');
    //       $('.edit-cover-container').removeClass('disablePic');
    //       $('.cover-container-2').removeClass('disablePic');
    //       $('.mainImg').removeClass('disablePic');

    //     }

    //     const coverUpdatePosition=()=>{
    //         // console.log(imagebase64);
    //         var user_id = 2822;
    //         $.ajax({
    //                         url: "https://clikview.com/avatar2/coverUpload.php",
    //                         method: "POST",
    //                         data: { image: imagebase64 },
    //                         success: function (data2) {
    //                             $.ajax({
    //                                   url: 'https://clikview.com/cover',
    //                                   method: "POST",
    //                                   data: { data: data2, cover_position: uploadPositionImg, user_id: user_id },
    //                                   success: function (data3) {
    //                                     $('#cropCoverClose').click();
    //                                     window.location.reload(true);
    //                                   }
    //                              });
    //                         }
    //                     });
    //     }
    //     useEffect(() => {
    //         init();
    //         var picTopPosition="-274px";
    //        //  console.log(picTopPosition);
    //        if(window.screen.availWidth>1000){
    //            $('#yp_cover')[0].style.top=picTopPosition;
    //        }
    //        else{
    //            $('#yp_cover')[0].style.top=picTopPosition;
    //        }
    //       var picSize = document.getElementsByClassName('dragImg')[0].style

    //      $(".profilePicHover").on('hover',function(){
    //          $(".profilePicHover").css("opacity", "1");
    //        }, function(){
    //            $(".profilePicHover").css("opacity", "0.5");
    //        });

    // // Avatar Jquery

    //        var $modal = $('#modalAvatar');
    //        var image = document.getElementById('sampleImage');
    //        var cropper;
    //        $('#avatarchange').on('change',function (event) {
    //            var files = event.target.files;
    //            var done = function (url) {
    //                image.src = url;
    //                $modal.modal('show');
    //            };

    //            if (files && files.length > 0) {

    //                var reader = new FileReader();
    //                reader.onload = function (event) {
    //                    done(reader.result);
    //                };
    //                reader.readAsDataURL(files[0]);
    //            }
    //        });

    //    $modal.on('shown.bs.modal', function () {
    //        cropper = new Cropper(image, {
    //            aspectRatio: 1,
    //            viewMode: 3,
    //            preview: '.preview',
    //            zoomable: false,
    //            cropBoxResizable: false,
    //            autoCrop: true,
    //            movable: true,
    //            setDragMode: true,
    //            dragMode: "move",
    //            toggleDragModeOnDblclick: true,
    //        });
    //    }).on('hidden.bs.modal', function () {
    //        cropper.destroy();
    //        cropper = null;
    //        $('.loaderprofile').removeClass('loaderActive');
    //        $('.modal-footer').removeClass('loading');
    //        $('.modal-body').removeClass('loading');
    //        $('#avatarchange').val('');
    //    });

    //    $("#cropAvatar").click(function () {
    //        $('.loaderprofile').addClass('loaderActive');
    //        $('.modal-footer').addClass('loading');
    //        $('.modal-body').addClass('loading');
    //        canvas = cropper.getCroppedCanvas({
    //            width: 400,
    //            height: 400,
    //        });

    //        canvas.toBlob(function (blob) {
    //            var reader = new FileReader();
    //            reader.readAsDataURL(blob);
    //            reader.onloadend = function () {
    //                var base64data = reader.result;

    //                $.ajax({
    //                    url: "https://clikview.com/avatar2/cropUpload.php",
    //                    method: "POST",
    //                    data: { image: base64data },
    //                    success: function (data1) {
    //                        $.ajax({
    //                            url: "https://clikview.com/avatar",
    //                            type: 'POST',

    //                            data: { data: data1 },
    //                            success: function (data2) {
    //                                $modal.modal('hide');
    //                                $('#uploaded_image').attr('src', data1);
    //                                window.location.reload(true);
    //                            }
    //                        });
    //                    }
    //                });
    //            }
    //        });
    //    });


    // Cover Position Set

    //      $('.dragBox').each(function () {
    //        $(".dragBox").draggable({
    //          axis: 'y',
    //        //   containment: [0, 0, 0, 0],
    //          drag: function () {

    //          },
    //          stop: function () {
    //            var topPicCss = $(this).css('top');
    //            positionImg = topPicCss;
    //            $('.dragBox').css({ "top": `${topPicCss}` });
    //          },
    //        });
    //      });

    // // cover jquery

    //      var $modal2 = $('#modal2');
    //        var image2 = document.getElementById('sample_image2');
    //        var cropper2;
    //        $('#cover').on('change',function (event) {
    //            $('.dragCoverImg').css({ "cursor": "move" });
    //            var files = event.target.files[0];
    //            $modal2.modal('show');

    //              if (!this.files || !this.files[0]) return;

    //              const FR = new FileReader();

    //              FR.addEventListener("load", function(evt) {
    //                document.querySelector("#sample_image2").src= evt.target.result;
    //                imagebase64=evt.target.result
    //              }); 

    //              FR.readAsDataURL(this.files[0]);



    //        });

    //        // $modal2.on('hidden.bs.modal', function (){
    //        //     $('#sample_image2').val('');
    //        // })
    //        $modal2.on('shown.bs.modal', function () {

    //        }).on('hidden.bs.modal', function () {
    //             $('#sample_image2').val('');
    //        });

    //        $('#sample_image2').each(function () {

    //        $("#sample_image2").draggable({
    //          axis: 'y',
    //        //   containment: [0, 0, 0, 0],
    //          drag: function () {

    //          },
    //          stop: function () {
    //            var topPicCss2 = $(this).css('top');
    //            uploadPositionImg = topPicCss2;
    //          },
    //        });
    //      });

    //     }, [])

    return (
        <>
            <div className={expandNav ? "main-container shrinkWidth bodyfixed" : "main-container expandWidth"} Style="z-index:-1">
                {searchOpen ? <MobileSearch /> : ""}
                <div id="main-container" className="main-content  " data-logged="true">
                    <div className="ads-placment" id="header_ad_"></div>
                    <div className="announcement-renderer"></div>
                    <div id="container_content">
                        <input type="hidden" id="json-data" value="{&quot;title&quot;:&quot;Soma Chakraborty | ClikView - Real Content For You&quot;,&quot;description&quot;:&quot;Clikview is a Video Sharing Platform, Clikview is the best way to start your own video sharing channel! Real Content for you.&quot;,&quot;keyword&quot;:&quot;clikview,video sharing, real content&quot;,&quot;page&quot;:&quot;timeline&quot;,&quot;url&quot;:&quot;https:\/\/clikview.com\/@somac&quot;,&quot;is_movie&quot;:false}" />


                        <div className="profile-container">

                            <div className="yp_profile">

                                <div className="card-container">

                                    <div className="cover-container">

                                        <img src="https://clikview.com/upload/images/cover_1670057385.png?c=1670208505" className="dragImg mainImg " alt="Soma Chakraborty" id="yp_cover" Style="top: -274px;" />
                                        <input type="file" className="hidden" id="cover" accept="image/x-png, image/gif, image/jpeg" name="cover" />
                                        <div className="modal fade " id="modal2" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
                                            <div className="modal-dialog modal-lg coverPositionModal" role="document">
                                                <div className="modal-content " Style="background-color: #12141e; color:white">
                                                    <div className="loader "></div>
                                                    <div className="modal-body ">
                                                        <div className=" container-height cover-container-3" Style="overflow:hidden; margin:auto">
                                                            <img src="" alt='' id="sample_image2" className="dragCoverImg ui-draggable ui-draggable-handle" Style="position: relative;" />
                                                        </div>
                                                    </div>
                                                    <div className="modal-footer" Style="background-color:#12141e">
                                                        <button type="button" className="btn btn-danger" data-dismiss="modal" id="cropCoverClose">Cancel</button>
                                                        <button type="button" className="btn btn-primary" id="cropCover" onclick="coverUpdatePosition()">Update Cover</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="edit-cover-container hidde">

                                            <span onclick="$('#cover').trigger('click');"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                <path fill="currentColor" d="M4,4H7L9,2H15L17,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9Z"></path>
                                            </svg></span>

                                            <span className="btn btn-upload-image btn-file " Style="display:none" onclick="PT_StartRepositioner();">

                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                    <path fill="currentColor" d="M21,15H23V17H21V15M21,11H23V13H21V11M23,19H21V21C22,21 23,20 23,19M13,3H15V5H13V3M21,7H23V9H21V7M21,3V5H23C23,4 22,3 21,3M1,7H3V9H1V7M17,3H19V5H17V3M17,19H19V21H17V19M3,3C2,3 1,4 1,5H3V3M9,3H11V5H9V3M5,3H7V5H5V3M1,11V19A2,2 0 0,0 3,21H15V11H1M3,19L5.5,15.79L7.29,17.94L9.79,14.72L13,19H3Z"></path>
                                                </svg>

                                            </span>
                                            <span className="btn btn-upload-image btn-file coverSet" Style="cursor: pointer; ">

                                                <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 50.000000 50.000000" preserveAspectRatio="xMidYMid meet">

                                                    <g transform="translate(0.000000,50.000000) scale(0.100000,-0.100000)" fill="currentcolor" stroke="none">
                                                        <path d="M80 445 c0 -20 -5 -25 -25 -25 -22 0 -25 -4 -25 -40 0 -36 3 -40 25
                                              -40 l25 0 0 -130 0 -130 130 0 130 0 0 -25 c0 -22 4 -25 40 -25 36 0 40 3 40
                                              25 0 20 5 25 25 25 23 0 25 4 25 40 l0 40 -155 0 -155 0 0 155 0 155 -40 0
                                              c-36 0 -40 -2 -40 -25z m60 -150 l0 -155 155 0 c148 0 155 -1 155 -20 0 -19
                                              -7 -20 -175 -20 l-175 0 0 175 c0 168 1 175 20 175 19 0 20 -7 20 -155z m-60
                                              85 c0 -11 -7 -20 -15 -20 -8 0 -15 9 -15 20 0 11 7 20 15 20 8 0 15 -9 15 -20z
                                              m320 -315 c0 -8 -9 -15 -20 -15 -11 0 -20 7 -20 15 0 8 9 15 20 15 11 0 20 -7
                                              20 -15z"></path>
                                                        <path d="M170 410 c0 -6 45 -10 115 -10 l115 0 0 -115 c0 -70 4 -115 10 -115
                                                  6 0 10 48 10 125 l0 125 -125 0 c-77 0 -125 -4 -125 -10z"></path>
                                                        <path d="M170 350 c0 -6 35 -10 85 -10 l85 0 0 -85 c0 -50 4 -85 10 -85 6 0
                                          10 38 10 95 l0 95 -95 0 c-57 0 -95 -4 -95 -10z"></path>
                                                    </g>
                                                </svg>

                                            </span>

                                        </div>


                                    </div>




                                    <div className="cover-container-2">

                                        <img src="https://clikview.com/upload/images/cover_1670057385_full.png" alt="Soma Chakraborty" />

                                        <div className="user-reposition-dragable-container">

                                            <span className="btn btn-upload-image btn-file" onclick="Wo_SubmitRepositioner();">

                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                    <path fill="currentColor" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"></path>
                                                </svg>

                                            </span>

                                            <span className="btn btn-upload-image btn-file" onclick="PT_StopRepositioner();">

                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                    <path fill="currentColor" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"></path>
                                                </svg>

                                            </span>

                                        </div>

                                        <div className="user-cover-uploading-progress user-repositioning-icons-container"></div>

                                    </div>

                                    <form className="cover-position-form hidden" method="post">

                                        <input className="cover-position" name="pos" value="0" type="hidden" />

                                        <input name="user_id" value="2822" type="hidden" />

                                    </form>

                                    <div className="cover-container-3 disablePic d-none" Style="overflow: hidden; ">
                                        <img src="https://clikview.com/upload/images/cover_1670057385.png?c=1670208505" alt="Soma Chakraborty" className="dragBox dragImg ui-draggable ui-draggable-handle" Style="top: -274px !important;" id="yp_cover2" />

                                    </div>
                                    <div className="modal fade " id="modalCover" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
                                        <div className="modal-dialog modal-lg coverPositionModal" role="document">
                                            <div className="modal-content " Style="background-color: #12141e; color:white">
                                                <div className="loader loaderprofile "></div>
                                                <div className="modal-body ">
                                                    <div className="cover-container-3 disablePic" Style="overflow: hidden; ">

                                                        <img src="https://clikview.com/upload/images/cover_1670057385.png?c=1670208505" alt="Soma Chakraborty" className="dragBox dragImg ui-draggable ui-draggable-handle" Style="top: -274px !important;" id="yp_cover2" />

                                                        <div className="user-reposition-dragable-container">

                                                            {/* <!--<span className="btn btn-upload-image btn-file" onclick="setImg();">-->
  
                            <!--    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">-->
                            <!--    <path fill="currentColor" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" ></path>-->
                            <!--    </svg>-->
  
                            <!--</span>-->
  
                            <!--<span className="btn btn-upload-image btn-file" onclick="stopAction();">-->
  
                            <!--  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">-->
                            <!--    <path fill="currentColor"-->
                            <!--      d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />-->
                            <!--  </svg>-->
  
                            <!--</span>--> */}

                                                        </div>


                                                    </div>
                                                </div>
                                                <div className="modal-footer" Style="background-color:#12141e">
                                                    <button type="button" className="btn btn-danger offUpdateCover" data-dismiss="modal" onclick="stopAction();">Cancel</button>
                                                    <button type="button" className="btn btn-primary" onclick="setImg();">Update Cover</button>
                                                    {/* <!--id="cropCover"--> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="pt_timeline_usr">

                                    <div className="container-home">

                                        <div className="pt_chnl_info">

                                            <div className="yp_inner_profile_area">

                                                <div className="avatar-container avatarDiv">
                                                    {/* <!-- https://clikview.com/upload/images/avater_1669892787.png -->
                <a href="https://clikview.com/@somac" data-load="?link1=timeline&amp;id=somac"><img src="https://clikview.com/upload/images/avater_1669892787.png" alt="Soma Chakraborty"></a>
                <!--<div className="profileAvatarChange profilePicHover" onclick="$('#avatarchange').trigger('click')">
                  <i className="fa fa-camera js_x-uploader" data-handle="picture-user"></i>
                </div>--> */}
                                                    <a href="https://clikview.com/@somac" data-load="?link1=timeline&amp;id=somac"><img src="https://clikview.com/upload/images/avater_1669892787.png" alt="Soma Chakraborty" /></a>
                                                    <div className="profileAvatarCrop profilePicHover">
                                                        <i className="fa fa-crop-alt js_init-crop-picture" data-image="https://s3.us-east-2.amazonaws.com/crwdworld/uploads/photos/2022/03/sngine_cab6e09f2ce5e1171624ab9a027e3c68.jpg" data-handle="user" data-id="1"></i>
                                                    </div>
                                                    <div className="profileAvatarDelete profilePicHover">
                                                        <i className="fa fa-trash js_delete-picture" data-handle="picture-user"></i>
                                                    </div>
                                                    <input type="file" className="hidden" id="avatarchange" accept="image/x-png, image/gif, image/jpeg" name="avatar" Style="display: none" />

                                                </div>
                                                <div className="modal fade " id="modalAvatar" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
                                                    <div className="modal-dialog modal-lg " role="document">
                                                        <div className="modal-content " Style="background-color: #12141e; color:white">
                                                            <div className="loader loaderprofile "></div>
                                                            <div className="modal-body ">
                                                                <div className="img-container ">
                                                                    <div className="row row-width">
                                                                        <div className="col-md-8 container-height">
                                                                            <img src="" id="sampleImage" alt='' />
                                                                        </div>
                                                                        <div className="col-md-4">
                                                                            <div className="preview"></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="modal-footer" Style="background-color:#12141e">
                                                                <button type="button" className="btn btn-danger" data-dismiss="modal">Cancel</button>
                                                                <button type="button" className="btn btn-primary" id="cropAvatar">Update Avatar</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="info-container">

                                                    <h4><a href="https://clikview.com/@somac" data-load="?link1=timeline&amp;id=somac">Soma Chakraborty </a></h4>
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<p>0 Subscribers
                                                    </p>

                                                </div>

                                            </div>

                                            <div className="subscribe-btn-container">

                                                <div></div>

                                                <div></div>

                                                <div><a className="btn-subscribed pointer" href='/home2' onclick="PT_NewList();">Create Channel</a><span className="subs-amount">0</span></div>

                                                <div><a href="https://clikview.com/video_studio" className="btn-subscribed pointer" data-load="?link1=video_studio">Manage</a><span className="subs-amount">0</span></div>

                                            </div>

                                        </div>

                                        <div className="links-container">

                                            <ul>

                                                <li onClick={()=>{SetTimelineSection("videos")}}><span href="https://clikview.com/@somac?page=videos" className="active" data-load="?link1=timeline&amp;id=somac&amp;page=videos">Videos</span></li>

                                                <li onClick={()=>{SetTimelineSection("mychannel")}}><span href="https://clikview.com/@somac?page=play-lists" className="" data-load="?link1=timeline&amp;id=somac&amp;page=play-lists">My Channels</span></li>


                                                <li onClick={()=>{SetTimelineSection("quickview")}}>

                                                    <span href="https://clikview.com/@somac?page=shorts" className="" data-load="?link1=timeline&amp;id=somac&amp;page=shorts">Quick View</span>

                                                </li >


                                                <li onClick={()=>{SetTimelineSection("like")}}><span href="https://clikview.com/@somac?page=liked-videos" className="" data-load="?link1=timeline&amp;id=somac&amp;page=liked-videos">Liked videos</span></li>


                                                <li onClick={()=>{SetTimelineSection("timeline")}}>

                                                    <span href="https://clikview.com/@somac?page=activities" className="" data-load="?link1=timeline&amp;id=somac&amp;page=activities">
                                                        Timeline                </span>

                                                </li>


                                                <li onClick={()=>{SetTimelineSection("about")}}><span href="https://clikview.com/@somac?page=about" className="" data-load="?link1=timeline&amp;id=somac&amp;page=about">About</span></li>



                                                <li onClick={()=>{SetTimelineSection("article")}}><span href="https://clikview.com/@somac?page=article" className="" data-load="?link1=timeline&amp;id=somac&amp;page=article">
                                                    Article                </span></li>

                                                {/* <!--<li><a href="https://clikview.com/@somac?page=store" className="" data-load="?link1=timeline&id=somac&page=store">My Store</a></li>--> */}



                                            </ul>

                                        </div>

                                    </div>

                                </div>

                            </div>



                            <div className="page-container">

                                <div className="container-home">

                                    {sectionComponent}


                                    <div className="clear"></div>

                                </div>

                            </div>

                            <input type="hidden" id="profile-id" value="2822" />

                        </div>







                    </div>
                    <input type="hidden" id="main-url" value="https://clikview.com%2Fwallet" />
                    <div className="ads-placment" id="footer_ad_"></div>
                </div>
            </div>
        </>
    )
}

export default TimeLine