$(function () {


    // LOAD INCLUDES
    var m = '<meta http-equiv="X-UA-Compatible" content="IE=edge" /><meta name="viewport" content="width=device-width, initial-scale=1"><meta charset="UTF-8">';
    var s = '<link href="https://fonts.googleapis.com/css?family=Raleway:500|Roboto:300,400&display=swap" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" crossorigin="anonymous">';
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
    
    
});
