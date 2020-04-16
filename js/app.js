$(function () {


    // LOAD INCLUDES
    var m = '<meta http-equiv="X-UA-Compatible" content="IE=edge" /><meta name="viewport" content="width=device-width, initial-scale=1"><meta charset="UTF-8"><meta itemprop="name" content="Queer Indie"><meta itemprop="description" content="Queer Indie is a group of cross-genre authors writing LGBTQ books. Every book has a home. Write the rainbow. This is YOUR story. Be your own identity.">';
    var s = '<link href="https://fonts.googleapis.com/css?family=Big+Shoulders+Text:400|Roboto:400,700&display=swap" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" crossorigin="anonymous">';
    var v = 'img/favicon.png';
    var c = 'css/style.css?v=1.1.1';
    var h = 'includes/header.html';
    var f = 'includes/footer.html';
    var g = '<script async src="https://www.googletagmanager.com/gtag/js?id=UA-160020484-1"></script><script>window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag("js", new Date()); gtag("config", "UA-160020484-1");</script>';

    if (window.location.pathname != '/') {
        v = '../' + v;
        c = '../' + c;
        h = '../' + h;
        f = '../' + f;
    }

    $('head').prepend(m + g + s);
    $('head').append('<link rel="shortcut icon" href="' + v + '" type="image/x-icon" /><link rel="stylesheet" href="' + c + '" />');
    $('#header').load(h);
    $('#footer').load(f);


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

    $('.peer-name').on('click', function (e) {
        e.preventDefault();
        $(this).parents('.peer').find('.peer-panel').slideToggle(250);
        $(this).toggleClass('open');
    });

    $('.qi-lit-expand').on('click', function (e) {
        e.preventDefault();
        $('.qi-lit .peer-panel').slideDown(250);
        $('.qi-lit .peer-name').addClass('open');
    });

    $('.qi-lit-collapse').on('click', function (e) {
        e.preventDefault();
        $('.qi-lit .peer-panel').slideUp(250);
        $('.qi-lit .peer-name').removeClass('open');
    });

    $('.qi-friends-expand').on('click', function (e) {
        e.preventDefault();
        $('.qi-friends .peer-panel').slideDown(250);
        $('.qi-friends .peer-name').addClass('open');
    });

    $('.qi-friends-collapse').on('click', function (e) {
        e.preventDefault();
        $('.qi-friends .peer-panel').slideUp(250);
        $('.qi-friends .peer-name').removeClass('open');
    });


});