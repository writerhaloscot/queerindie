$(function () {


    /* QUEER LITERATURE */

    var dirQL = [
        ['Halo Scot', 'https://amazon.com/author/haloscot', 'Edge of the Breach, Rift Cycle 1', 'Grimdark LGBTQ Science Fantasy', '@halo_scot', 'In a post-apocalyptic world where season of birth determines power, interrealm war beckons two lost and fated souls.'],
        ['Halo Scot 2', 'https://amazon.com/author/haloscot', 'Edge of the Breach, Rift Cycle 1', 'Grimdark LGBTQ Science Fantasy 2', '@halo_scot', 'In a post-apocalyptic world where season of birth determines power, interrealm war beckons two lost and fated souls. 2'],
        ['Halo Scot 3', 'https://amazon.com/author/haloscot', 'Edge of the Breach, Rift Cycle 1', 'Grimdark LGBTQ Science Fantasy 3', '@halo_scot', 'In a post-apocalyptic world where season of birth determines power, interrealm war beckons two lost and fated souls. 3']
    ];


    /* FRIENDS OF Qi */

    var dirFr = [
        ['Halo Scot 4', 'https://amazon.com/author/haloscot', 'Edge of the Breach, Rift Cycle 1', 'Grimdark LGBTQ Science Fantasy', '@halo_scot', 'In a post-apocalyptic world where season of birth determines power, interrealm war beckons two lost and fated souls.'],
        ['Halo Scot 5', 'https://amazon.com/author/haloscot', 'Edge of the Breach, Rift Cycle 1', 'Grimdark LGBTQ Science Fantasy 2', '@halo_scot', 'In a post-apocalyptic world where season of birth determines power, interrealm war beckons two lost and fated souls. 2'],
        ['Halo Scot 6', 'https://amazon.com/author/haloscot', 'Edge of the Breach, Rift Cycle 1', 'Grimdark LGBTQ Science Fantasy 3', '@halo_scot', 'In a post-apocalyptic world where season of birth determines power, interrealm war beckons two lost and fated souls. 3']
    ];
    
    
    /* FUNCTIONS */

    var dirQLHTML = '';
    var dirFrHTML = '';

    for (var i = 0; i < dirQL.length; i++) {
        var q = dirQL[i];

        dirQLHTML += '<div class="peer">';
        dirQLHTML += '<a class="peer-name button" href="#">' + dirQL[i][0] + '<i class="fas fa-plus"></i><i class="fas fa-minus"></i></a>';
        dirQLHTML += '<div class="peer-panel"><div class="peer-books">';
        dirQLHTML += '<a class="peer-buy" href="' + dirQL[i][1] + '" target="_blank"><span>Buy</span></a>';
        dirQLHTML += '<span class="peer-title">' + dirQL[i][2] + '</span>';
        dirQLHTML += '<span class="peer-genre"><a class="peer-twitter" href="https://twitter.com/' + dirQL[i][4].replace('@', '') + '" target="_blank"><span class="hide-SEO">' + dirQL[i][4] + '</span><i class="fab fa-twitter"></i></a> ' + dirQL[i][3] + '</span>';
        dirQLHTML += '<span class="peer-pitch">' + dirQL[i][5] + '</span>';
        dirQLHTML += '</div></div></div>';
    }

    $('.qi-lit-data').html(dirQLHTML);
    
    for (var j = 0; j < dirFr.length; j++) {
        var q = dirFr[j];

        dirFrHTML += '<div class="peer">';
        dirFrHTML += '<a class="peer-name button" href="#">' + dirFr[j][0] + '<i class="fas fa-plus"></i><i class="fas fa-minus"></i></a>';
        dirFrHTML += '<div class="peer-panel"><div class="peer-books">';
        dirFrHTML += '<a class="peer-buy" href="' + dirFr[j][1] + '" target="_blank"><span>Buy</span></a>';
        dirFrHTML += '<span class="peer-title">' + dirFr[j][2] + '</span>';
        dirFrHTML += '<span class="peer-genre"><a class="peer-twitter" href="https://twitter.com/' + dirFr[j][4].replace('@', '') + '" target="_blank"><span class="hide-SEO">' + dirFr[j][4] + '</span><i class="fab fa-twitter"></i></a> ' + dirFr[j][3] + '</span>';
        dirFrHTML += '<span class="peer-pitch">' + dirFr[j][5] + '</span>';
        dirFrHTML += '</div></div></div>';
    }

    $('.qi-friends-data').html(dirFrHTML);

});