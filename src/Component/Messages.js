import React from 'react'
import MobileSearch from './MobileSearch';

function Messages(props) {
    const { searchOpen, expandNav } = props;
    return (
        <div>
            <div className={expandNav ? "main-container shrinkWidth bodyfixed" : "main-container expandWidth"} Style="z-index:-1">
                <div id="main-container" class="main-content  container m_cont_full " data-logged="true">
                {searchOpen ? <MobileSearch /> : ""}
                    <div class="ads-placment hidden" id="header_ad_"></div>
                    <div class="announcement-renderer">

                    </div>
                    <div id="container_content"><input type="hidden" id="json-data" value="{&quot;title&quot;:&quot;Messages - ClikView - Real Content For You&quot;,&quot;description&quot;:&quot;Clikview is a Video Sharing Platform, Clikview is the best way to start your own video sharing channel! Real Content for you.&quot;,&quot;keyword&quot;:&quot;clikview,video sharing, real content&quot;,&quot;page&quot;:&quot;messages&quot;,&quot;url&quot;:&quot;https:\/\/clikview.com\/messages&quot;,&quot;is_movie&quot;:false}" />
                        <div class="page-margin pt_shadow">
                            <div class="row">
                                <div class="col-sm-4 mobilerightpane no-padding-right0">
                                    <div class="messages-sidebar">
                                        <div class="search-box">
                                            <div class="search-box-inner">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search" id="search-icon"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                                <input type="text" name="search" placeholder="Search" id="search-list" />
                                            </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <button type="button" class="btn" onclick="MarkAllAsRead(this);">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24"><path fill="currentColor" d="M14,10H2V12H14V10M14,6H2V8H14V6M2,16H10V14H2V16M21.5,11.5L23,13L16,20L11.5,15.5L13,14L16,17L21.5,11.5Z"></path></svg>
                                            </button>
                                        </div>
                                        <ul class="list-group" onscroll="LoadMoreUserChat()">
                                            <p class="empty_state"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>No users found</p>
                                        </ul>
                                    </div>
                                    {/* <script type="text/javascript">
    function MarkAllAsRead(self) {
        $(self).html('<svg width="25px" height="25px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><rect x="0" y="0" width="25" height="25" fill="none" class="bk"></rect><circle cx="50" cy="50" r="40" stroke="#676d76" fill="none" stroke-width="6" stroke-linecap="round"><animate attributeName="stroke-dashoffset" dur="1.5s" repeatCount="indefinite" from="0" to="502"></animate><animate attributeName="stroke-dasharray" dur="1.5s" repeatCount="indefinite" values="150.6 100.4;1 250;150.6 100.4"></animate></circle></svg>');
        $.post('https://clikview.com/aj/messages/mark_read', function (data, textStatus, xhr) {
            if (data.status == 200) {
                setTimeout(function () {
                    $('.user-list').find('.countunseen').html('');
                    $("#new-messages").html("");
                    $(self).html('<svg width="25px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 50 50" Style="enable-background:new 0 0 50 50;" xml:space="preserve"> <circle Style="fill:#25AE88;" cx="25" cy="25" r="25"></circle> <polyline Style="fill:none;stroke:#FFFFFF;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;" points=" 38,15 22,33 12,25 "></polyline> </svg>');
                    setTimeout(function () {
                        $(self).html('<svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24"><path fill="currentColor" d="M14,10H2V12H14V10M14,6H2V8H14V6M2,16H10V14H2V16M21.5,11.5L23,13L16,20L11.5,15.5L13,14L16,17L21.5,11.5Z"></path></svg>');
                    },500);
                },1000);
            }
        });
    }
	var sent = 0;
    function LoadMoreUserChat() {
        if (sent === 0) {
            clearTimeout(window.UpdateChatU);
            sent = 1;
            let time = $('.user-list').last().attr('data-time');
            $.post('https://clikview.com/aj/messages/load_user_chat', {
                time: time
            }, function (data, textStatus, xhr) {
                if (data.status == 200) {
                    $('.list-group').append(data.html);
                    setTimeout(function () {
                        sent = 0;
                        window.UpdateChatU = setTimeout(function () {
                            if (sent === 0) {
                                fetchMessages();
                            }
                        },5000);
                    },500);
                }
                else{
                    window.UpdateChatU = setTimeout(function () {
                        fetchMessages();
                    },5000);
                }
            });
        }
    }
</script> */}
                                </div>
                                <div class="col-sm-8 mobileleftpane no-padding-left0">
                                    <ul class="pt_msg_main">
                                        <div class="content pt_msg_header">
                                            <h3 class="pull-left"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left mobilemsgclose"><polyline points="15 18 9 12 15 6"></polyline></svg> <a href='/home2' class="user-link">a tag</a></h3>
                                            <div class="clear"></div>
                                            <div class="msg_grad_bg"></div>
                                        </div>
                                        <button id="load-more-messages" title="Load more messages"><i class="fa fa-angle-up"></i></button>
                                        <div class="pt_msg_joint">
                                            <div class="user-messages user-setting-panel pt_msg_area">
                                                <div class="empty_state">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-message-square"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                                                    <p>No messages were found, please choose a channel to chat.</p>
                                                </div>
                                            </div>
                                            <div class="user-send-message">
                                                <form action="#" method="POST" id="new-message-form" Style="visibility: hidden;">
                                                    <textarea name="new-message" id="new-message" cols="30" rows="2" placeholder="Write a message..."></textarea>
                                                    <button type="submit" id="send-button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></button>
                                                    <input type="hidden" id="user-id" name="id" value="0" />
                                                    <input type="hidden" id="user-avatar" value="" />
                                                </form>
                                            </div>
                                        </div>
                                    </ul>
                                </div>
                                <div class="clear"></div>
                            </div>
                        </div>
                        <br />
                        {/* <script>
$('.mobilemsgclose').on('click',function (){
	$('.mobileleftpane').fadeOut(100);
	$('.mobilerightpane').fadeIn(100);
});
var messagesInterval = 60000;

$(function() {
    window.UpdateChatU = setTimeout(function () {
        fetchMessages();
    }, messagesInterval);
});

function fetchMessages() {
    clearTimeout(window.UpdateChatU);
    $.post('https://clikview.com/aj/messages/fetch', {id: $('#user-id').val(), last_id: $('.message:last').attr('data-id')}, function(data, textStatus, xhr) {
        if (data.status == 200) {
            if (data.message.length > 0) {
                $('.messages').append(data.message);
                 $('.user-messages').scrollTop($('.user-messages')[0].scrollHeight);
            }
            if ($('#search-list').val() == 0) {
                $('.messages-sidebar .list-group').html(data.users);
            }
        }
        window.UpdateChatU = setTimeout(function () {
            fetchMessages();
        }, messagesInterval);
    });
}
$(document).on('click', '.messages-sidebar ul li', function(event) {
    clearTimeout(window.UpdateChatU);
});
$(document).on('click', '#load-more-messages', function(event) {
  event.preventDefault();
  $('#load-more-messages i').removeClass('fa-angle-up');
  $('#load-more-messages i').addClass('fa-spinner fa-spin');
  $.post('https://clikview.com/aj/messages/fetch', {id: $('#user-id').val(), first_id: $('.message:first').attr('data-id')}, function(data, textStatus, xhr) {
        $('#load-more-messages i').removeClass('fa-spinner fa-spin');
        $('#load-more-messages i').addClass('fa-angle-up');
        if (data.status == 200) {
            if (data.message.length > 0) {
                $('.messages').prepend(data.message);
            } else {
                $('#load-more-messages').animate({
                    top: "-50",
                }, 200, function() {
                    $('#load-more-messages').hide();
                    $('#load-more-messages').css('top', '60px');
                });
            }
            $('.user-messages').scrollTop(0);
        }
        $('#load-more-messages i').removeClass('fa-spinner fa-spin');
        $('#load-more-messages i').addClass('fa-angle-up');
    });
});

function DeleteConversation() {
    if (!confirm("Are you sure that you want to delete the conversation?")) {
        return false;
    }
    $(this).find('i').toggleClass('fa-trash fa-spinner fa-spin');
    $.post('https://clikview.com/aj/messages/delete_chat', {id: $('#user-id').val()}, function(data, textStatus, xhr) {
        $('#delete-conversation').find('i').removeClass('fa-spinner fa-spin');
        $('#delete-conversation').find('i').addClass('fa-trash');
        $('.messages').empty();
        location.href = "https://clikview.com/messages";
    });
}

$(function() {
        
        $('.user-messages').scrollTop($('.user-messages')[0].scrollHeight);
        var $id = makeid();
    	var form = $('form#new-message-form');

        $('#search-list').on('keyup', function(event) {
            $('#search-icon').toggleClass('fa-search fa-spinner fa-spin');
            $.post('https://clikview.com/aj/messages/search', {keyword: $(this).val()}, function(data, textStatus, xhr) {
                $('#search-icon').toggleClass('fa-spinner fa-spin fa-search ');
                if (data.status == 200) {
                    $('.messages-sidebar .list-group').html(data.users);
                }
            });
        });

    	$('#new-message').on('keyup', function(event) {
    		if (event.keyCode == 13 && !event.shiftKey) {
                $id = makeid();
                if ($(this).val().length > 1) {
                    form.submit();
                } else {
                    $('#new-message').val('');
                }
    		}
    	});

        form.ajaxForm({
            url: 'https://clikview.com/aj/messages/new?hash=' + $('.main_session').val(),
            data: {message_id: $('#message_id').val()},
            beforeSubmit: function(formData, jqForm, options) {
                if ($('.messages').length == 0) {
                    $('.user-messages').html('<div class="messages"></div>');
                }
                if ($('#new-message').val().length >= 1) {
                    formData.push({ name: 'message_id', value: $id });
                    $('.messages').append('<div class="data_message" data-id="' + $id + '"><div class="message to-user pull-right" data-id=""><div class="user-message">' + nl2br(escapeHTML($('#new-message').val())) + '</div><div class="clear"></div></div><div class="clear"></div></div>');
                    $('#new-message').val('');
                    $('.user-messages').scrollTop($('.user-messages')[0].scrollHeight);
                    $id = makeid();
                } else {
                    $('#new-message').val('');
                } 
            },
            success: function(data) {
                $('.data_message[data-id="' + data.message_id + '"]').html(data.message);
            }
        });
    });
</script> */}
                    </div>
                    <input type="hidden" id="main-url" value="https://clikview.com%2Fimport-video" />
                    <div class="ads-placment" id="footer_ad_"></div>
                </div>
            </div>
        </div>
    )
}

export default Messages