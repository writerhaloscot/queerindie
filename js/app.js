$(function () {


    // LOAD INCLUDES
    var m = '<meta http-equiv="X-UA-Compatible" content="IE=edge" /><meta name="viewport" content="width=device-width, initial-scale=1"><meta charset="UTF-8"><meta itemprop="name" content="Queer Indie"><meta itemprop="description" content="Queer Indie is a group of cross-genre authors writing LGBTQ books. Every book has a home. Write the rainbow. This is YOUR story. Be your own identity.">';
    var s = '<link href="https://fonts.googleapis.com/css?family=Big+Shoulders+Text:400|Roboto:400,700&display=swap" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" crossorigin="anonymous">';
    var v = 'img/favicon.png';
    var c = 'css/style.css?v=1.1.6';
    var h = 'includes/header.html';
    var f = 'includes/footer.html';
    var l = 'includes/lightbox.html';
    var g = '<script async src="https://www.googletagmanager.com/gtag/js?id=UA-160020484-1"></script><script>window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag("js", new Date()); gtag("config", "UA-160020484-1");</script>';

    if (window.location.pathname != '/') {
        v = '../' + v;
        c = '../' + c;
        h = '../' + h;
        f = '../' + f;
        l = '../' + l;
    }

    $('head').prepend(m + g + s);
    $('head').append('<link rel="shortcut icon" href="' + v + '" type="image/x-icon" /><link rel="stylesheet" href="' + c + '" />');
    $('#header').load(h);
    $('#footer').load(f);
    $('#lightbox').load(l);


    // SCROLL TO TOP
    $('body').on('click', '.scrollTop', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: '0px'
        });
    });


    // LAZY LOAD VIDEO
    $(document).ready(function () {

        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            console.log('mobile');
        } else {
            if ($('.hero-video-wrapper').length > 0) {
                var v = $('.hero-video-wrapper').attr('data-src');
                var h = '<video class="hero-video" autoplay loop muted preload="metadata"><source src="' + v + '" type="video/mp4"></video>';
                $('.hero-video-wrapper').html(h);
                setTimeout(function () {
                    $('.hero-video-wrapper').fadeIn(2000);
                }, 500);
            }

            if ($('.inner-video').length > 0) {
                var v = $('.inner-video').attr('data-src');
                var h = '<video autoplay loop muted preload="metadata"><source src="' + v + '" type="video/mp4"></video>';
                $('.inner-video').html(h);
                setTimeout(function () {
                    $('.inner-video').fadeIn(2000);
                }, 500);
            }
        }

    });


    // DIRECTORY
    $('.peer-nav a').on('click', function (e) {
        e.preventDefault();
        $(this).addClass('active').siblings().removeClass('active');
        var h = $(this).attr('href').replace('#', '');
        $('.' + h).addClass('active').siblings().removeClass('active');
    });

    $('body').on('click', '.peer-title', function (e) {
        e.preventDefault();
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $('.peer-pitch').slideUp();
            $('.peer-title').removeClass('open');
        } else {
            $(this).addClass('open');
            $(this).next('.peer-pitch').slideDown();
            $(this).parents('.peer').siblings().find('.peer-pitch').slideUp();
            $(this).parents('.peer').siblings().find('.peer-title').removeClass('open');
        }
    });

    // https://www.w3schools.com/jquery/jquery_filters.asp
    $('#searchQiLit').on('keyup', function () {
        $('.peer-btn').removeClass('active');
        $('tr.peer').removeClass('hide-genre').removeClass('hide-age');
        var value = $(this).val().toLowerCase();
        $(".qi-lit-data tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

    $('#searchFrLit').on('keyup', function () {
        $('.peer-btn').removeClass('active');
        $('tr.peer').removeClass('hide-genre').removeClass('hide-age');
        var value = $(this).val().toLowerCase();
        $(".qi-friends-data tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

    $('#searchQiLit').on('keyup focus', function () {
        if ($(this).val()) {
            $('.peer-btn-wrapper').slideUp();
            clearFilters();
        } else {
            $('.peer-btn-wrapper').slideDown();
        }
    });

    $('#searchFrLit').on('keyup focus', function () {
        if ($(this).val()) {
            $('.peer-btn-wrapper').slideUp();
            clearFilters();
        } else {
            $('.peer-btn-wrapper').slideDown();
        }
    });

    $('#searchQiLit, #searchFrLit').on('blur', function () {
        $('.peer-btn-wrapper').slideDown();
        $('.peer-btn').removeClass('active');
        $('tr.peer').removeClass('hide-genre').removeClass('hide-age');
    });

    function clearFilters() {
        $('.show-filters').addClass('show');
        $('.hide-filters').removeClass('show');
        $('.filters').slideUp();
    }


    // LIGHTBOX

    $('body').on('click', '.lightbox-content', function (e) {
        e.stopPropagation();
    });
    $('body').on('click', '.lightbox-close, .lightbox', function (e) {
        e.preventDefault();
        sessionStorage.setItem('firstVisit', true);
    });
    $('body').on('click', '.lightbox-close', function (e) {
        $(this).parents('.lightbox').fadeOut();
    });
    $('body').on('click', '.lightbox', function (e) {
        $(this).fadeOut();
    });

    if (!sessionStorage.getItem('firstVisit')) {
        setTimeout(function () {
            // $('.lightbox').fadeIn();
        }, 500);
    }

    
    // AWARDS
    
    $('.accordion-title').on('click', function(e) {
        e.preventDefault();
        $(this).parent().toggleClass('open');
        $(this).parent().find('.accordion-body').slideToggle();
        $(this).parent().siblings().removeClass('open');
        $(this).parent().siblings().find('.accordion-body').slideUp();
    });
});