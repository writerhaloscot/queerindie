$(function () {


    // LOAD INCLUDES
    var m = '<meta http-equiv="X-UA-Compatible" content="IE=edge" /><meta name="viewport" content="width=device-width, initial-scale=1"><meta charset="UTF-8"><meta itemprop="name" content="Queer Indie"><meta itemprop="description" content="Queer Indie is a group of cross-genre authors writing LGBTQ books. Every book has a home. Write the rainbow. This is YOUR story. Be your own identity."><meta itemprop="image" content="https://queerindie.com/img/girl-2848057_1920-min.jpg"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="Queer Indie"><meta name="twitter:description" content="Queer Indie is a group of cross-genre authors writing LGBTQ books. Every book has a home. Write the rainbow. This is YOUR story. Be your own identity."><meta name="twitter:image:src" content="https://queerindie.com/img/girl-2848057_1920-min.jpg"><meta property="og:title" content="Queer Indie" /><meta property="og:type" content="article" /><meta property="og:url" content="https://queerindie.com/" /><meta property="og:image" content="https://queerindie.com/img/girl-2848057_1920-min.jpg" /><meta property="og:description" content="Queer Indie is a group of cross-genre authors writing LGBTQ books. Every book has a home. Write the rainbow. This is YOUR story. Be your own identity." /><meta property="og:site_name" content="Queer Indie" />';
    var s = '<link href="https://fonts.googleapis.com/css?family=Raleway:500,500i|Roboto:300,400&display=swap" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" crossorigin="anonymous">';
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
