$(document).ready(function(){
    function addNotification(notiContent){
        $('#notification-container').append(notiContent);
    }
    $(document).on('click', function(e){
        if($(e.target).is('.btn-close-notification')){
            $(e.target).parent().remove();
        };
    });
    $('.btn-add-to-like').click(function(){
        //sinh id tự động cho notification-item ngẫu nhiên
        var d = new Date();
        var idForNotif = "notif"+d.getTime();
        //Lấy tên trainer
        var proname = $(this).parents().filter(".item-info").find('.item-title').text();
        //lấy url trainer
        var imgSrc = $(this).parents().filter(".item").find('.img-item').children().children().first().attr("src");
        //div notification-item
        var notiContent = '<div id="'+idForNotif+'" class="notification-item"><div class="notification-img"><img src="'+imgSrc+'" alt="notification-img"/></div><div class="notification-content"><p>Fan <a href="#">'+proname+'</a> chắc ne rồi! :v</p></div> <span class="btn-close-notification"></span></div>';
        addNotification(notiContent);
        closeNotif('#'+idForNotif);
        return false;
    });
    var notifTimeout;
    //remove notification
    function closeNotif(idForNotif) {
        notifTimeout = setTimeout(function() {
            $(idForNotif).animate({opacity:'0'}, 500).delay(1000).animate({marginTop: '0'}, 0, function(){
                $(idForNotif).remove();
            });
        }, 10000);
    };
    //clear timeout when hover
    function saveNotif() {
        clearTimeout(notifTimeout);
    }
});
