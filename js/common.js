$(function () {

    /*------------------------------------------------------------------------
     SPメニューボタン
     ------------------------------------------------------------------------*/
/*
    var slideBtn = $("#slide-btn");
    var slideMenu = $("#slide-menu");
    var closeBtn = $(".close");
    var actionTime = 500;
    slideBtn.on("click",function(){
        slideMenu.addClass("active");
        if( slideMenu.hasClass("active")) {
            slideMenu.fadeIn(actionTime);
            slideMenu.css('display','block');
        }
        $(window).on('touchmove.noScroll', function(e) {
            e.preventDefault();
        });
    });
    closeBtn.on("click", function(){
        slideMenu.removeClass("active");
        if( !slideMenu.hasClass("active")) {
            slideMenu.fadeOut(actionTime);
            slideMenu.css('display','none');
        }
        $(window).off('.noScroll');
    });
*/
/*
    var tgtMenuSP = $("#slide-menu .tgtMenu");
    var hideMenuSP = $("#slide-menu .hideMenu");
    var showTime = 250;
    var hideTime = 0;

    tgtMenuSP.on('click', function() {
        $(this).find(hideMenu).slideDown(showTime);
    },function() {
        $(this).find(hideMenu).slideUp(hideTime);
    });
*/
    var slideMenu = $('.slideMenu'),
        menuWidth = slideMenu.outerWidth(),
        slideBtn = $('.slideBtn');
        body = $(document.body),
        closeBtn = $('.closeBtn'),
        overLay = $('.overLay');
    $([slideBtn[0],overLay[0],closeBtn[0]]).on('click', function () {
        body.toggleClass('open');
        if (body.hasClass('open')) {
            slideMenu.animate({'left': 0}, 500);
        } else {
            slideMenu.animate({'left': -menuWidth}, 500);
        }
    });

    /*------------------------------------------------------------------------
     PCスライドダウンサブメニュー
     ------------------------------------------------------------------------*/
    var tgtMenu = $("header .tgtMenu");
    var hideMenu = $("header .hideMenu");
    var showTime = 250;
    var hideTime = 0;

    tgtMenu.hover(function() {
        $(this).find(hideMenu).slideDown(showTime);
    },function() {
        $(this).find(hideMenu).slideUp(hideTime);
    });

    /*------------------------------------------------------------------------
     TOP戻るボタン
     ------------------------------------------------------------------------*/
    var topBtn = $('#page-top');
    /*topBtn.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });*/
    topBtn.on("click", function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
    
    /*------------------------------------------------------------------------
     アンカー
     ------------------------------------------------------------------------*/
    var Link = $("a");
    Link.hover(function() {
        $(this).animate({opacity: 0.8},250);
    },function() {
        $(this).animate({opacity: 1},250);
    });
    
    /*------------------------------------------------------------------------
     詳細ボタン
     ------------------------------------------------------------------------*/
    var toggleBtn = $('.toggleBtn');
    toggleBtn.toggle( function() {
        $(this).prev().slideDown(),
        $(this).text('詳細を閉じる');
    }, function() {
        $(this).prev().slideUp(),
        $(this).text('詳細を見る');
    });
});
