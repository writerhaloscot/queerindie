$(function () {


    /* QUEER LITERATURE */

    var dirQL = [
['Jaimie N. Schock', 'https://www.amazon.com/Jaimie-N.-Schock/e/B07THB22QK?ref_=dbs_p_ebk_r00_abau_000000', 'The Talisman War Series', 'Adult Fantasy', '@heroesgetmade', 'The world is quickly descending into war between powerful magic users, and it&rsquo;s up to a select few to stop it.'],
['Sheena C. Howard', 'https://www.amazon.com/Ninas-Whisper-Sheena-Howard-ebook/dp/B0848YGLTL', 'Nina&rsquo;s Whisper', 'Lesbian fiction, Domestic suspense', '@DrSheenaHoward', 'A med school graduate returns to her hometown and falls for an enigmatic young woman who conceals a scurrilous and compulsive nature. '],
['Ila Golden ', 'https://www.amazon.com/Colours-See-Neva-Aton-Collection-ebook/dp/B081YSL6PF/', 'The Colours I See ', 'Young adult fantasy ', '@ILAGolden', 'Between his health, his gift and his sexuality, Zel knows exactly how different he is, but he&rsquo;s stubborn, optimistic, and, most importantly of all, in love. '],
['Anya Pavelle', 'http://www.relinks.me/B07XD674TJ', 'The Moon Hunters', 'Science Fiction ', '@anyapavelle', '50 years after a plague devastated the world, two people who come from an island that&rsquo;s been isolated since the plague make a daring escape into the unknown because their refuge has transformed into a prison.'],
['Terry Geo', 'https://www.amazon.com/Refraction-Terry-Geo-ebook/dp/B07XDC1PPS', 'Refraction', 'Science Fiction', '@terryjgeo', 'If you could dream anything into existence, what would it be?'],
['Mary Cook', 'https://www.amazon.com/dp/B082TSPZDQ', 'The Mists of Stone Lake', 'Horror', '@tootiehead', 'Can Damon stop the evil before Todd suffers the same fate as the others?'],
['Daniela R. Lovejoy', 'http://www.amazon.com/author/danielarlovejoy', 'My Lesbian College Love: Transformation Romance', 'Erotic gender swap romance', '@DanielaRLovejoy', 'A nameless dream girl and a strange stone heart with special powers, Tom is in for the erotic ride of his life when he&rsquo;s turned into a girl.'],
['Lali A. Love', 'https://www.amazon.com/Heart-Warrior-Angel-Darkness-Light-ebook/dp/B07T792VT1/ref=mp_s_a_1_1?dchild=1&keywords=heart+of+a+warrior+angel&qid=1587215726&sr=8-1', 'Heart of a Warrior Angel: From Darkness to Light ', 'Thriller, Metaphysical Fantasy', '@laliaristo', 'Spanning two continents and three generations, this inspirational award-winning novel shows how the tiniest spark of light can overcome the darkness of any magnitude. '],
['Victoria Williams ', 'https://aliteraturewayoflife.wordpress.com/', 'Work in Progress - Coming later this year! ', 'Fantasy ', '@scinerd28', ' Born in an alternate world where societal schisms abound and war is rampant, Siobhan must decide what she is ultimately fighting for. '],
['M.E. Aster', 'https://www.amazon.com/M.E.-Aster/e/B07KVKQPJX?ref_=dbs_p_ebk_r00_abau_000000', 'Three Halves of a Whole', 'Adult fiction with romantic themes', '@ME_Aster', '"Andrew aspired to be that person that could fix everything, he wanted to save Riley from his doubts and fears...but he never quite knew how, and the passage of years hadn&rsquo;t changed that."'],
['B.J. Frazier', 'https://www.bjfrazier.com/books/', 'Straight-up Gay:  &ldquo;First Trip to the Sauna&rdquo; and &ldquo;Seth Wants a Daddy&rdquo;. &ldquo;Perchance to Dream&rdquo; series', 'Erotica', '@xxxbjfrazier', '&ldquo;First Trip to the Sauna&rdquo; is a short-short is about a man’s first experience with MM sex, which takes place at a sauna.'],
['Vicky Calzo', 'https://www.lezvampbutchboi.wixsite.com/vickycalzo', 'The Vampire Society: Christopher and Gaspar', 'New Adult 18+ LGBT Vampires Fiction', '@CalzoVicky', 'What if the Vampire God chose YOU to become a vampire?']
    ];


    /* FRIENDS OF Qi */

    var dirFr = [
        ['Dylan Madeley','https://amazon.com/dp/B085LDXDZX','Alathea: Goddess & Empress','Fantasy','@TheDylanMadeley','She dreams of mending a fractured world the only way she can imagine: first she&rsquo;ll make it hers.'],
['Christopher Hooley','https://www.amazon.com/gp/aw/d/B07ZWHWBR8/ref=tmm_kin_title_sr?ie=UTF8&qid=1577702653&sr=8-1','Death, Just Grinn and Bear It ','Paranormal Fantasy ','@ChrisHooley2020','‪A ‬raw, gut-punching, no-holds-barred paranormal fantasy about the tragic beauty of life and the inescapable mystery of death.'],
['S. P. O’Farrell','https://www.amazon.com/Simone-LaFray-Chocolatiers-Ball-OFarrell-ebook/dp/B07PWNNJHW','Simone LaFray and the Chocolatiers’ Ball','Middle-grade fiction','@SPOFarrell3','A young spy must thwart an international art theft while saving the family business.'],
['Rodol Phito','https://www.amazon.com/dp/B081JFDVXZ','Rival Rebels','Young Adult Sci-Fi Action Adventure','@rivalrebelsgame','Join these young heroes on their action-packed journey through strange worlds.'],
['R Young','https://mybook.to/Dead_Heads','Dead Heads','Fantasy (Noir)','@InkDisregardIt','Sometimes being murdered can feel like the highlight of your day, welcome to the afterlife, don&rsquo;t lose your head.'],
['Jacob Klop','https://www.amazon.com/s?i=digital-text&rh=p_27%3AJacob+Klop&s=relevancerank&text=Jacob+Klop&ref=dp_byline_sr_ebooks_1','The Community, Crooked Souls, Sun Giver','Sci-fi, Dystopian, Horror, Fantasy','@JacobKlop','Their society seems perfect, yet its people want nothing more than to return to the promise of an even better world Outside.'],
['Lisa Keeble ','https://www.amazon.com/dp/B07TSFGHCW/ref=cm_sw_r_cp_awdb_t1_m.DNEbKZ778KM','From His Perspective ','Humour/Fantasy','@lisakeb007','You may think you know human history but you’ve never viewed it From His Perspective '],
['Ethan McCaffrey','https://www.amazon.com/Ethan-McCaffrey/e/B07S4LYHKL','Carrie: Hotwife in Training','Male','@WriteEthan','Brad and Carrie set out on an adventure to save their relationship'],
['Despoina Kemeridou','https://www.amazon.com/gp/product/B07P5ZXPGS','Fated to Meet You ','Paranormal Romance','@dkemeridou','A modern fairytale with lots of romance, time-travel and an ancient curse. '],
['Richard Bist','https://www.amazon.com/Dark-Journeys-Short-Story-Collection-ebook/dp/B081X889WC','Dark Journeys','Speculative, Sci-fi, Horror, Erotica','@richardbist','Dark Journeys is a collection of horror, weird, and speculative science fiction short stories. Come along and explore the dark corners of imagination.'],
['Chelsea Callahan','https://www.amazon.com/kindle-dbs/author/ref=dbs_P_W_auth?_encoding=UTF8&author=Chelsea%20Callahan&searchAlias=digital-text&asin=B082Z73W5F','Eyes of The Grave, Curse of The Crow, Deja Vu','Urban Fantasy','@TheWritingDruid','With one touch Rebekah Devereaux can solve a murder or prevent one, but what happens when her touch tells her she commited one?'],
['Columbus Montgomery ','http://columbusmontgomeryhome.wordpress.com/','The Chronicles of Aebrahm: Last of the Aesvolk ','Fantasy ','@colum.montgomery','Surviving the brutal massacre of his family and people, a lone warrior/blacksmith is hunted whilst protecting a divine tome that may be the key to restoring the Cosmic Balance and save his world.'],
['Maggie Gilewicz','https://amzn.to/3eMpsoq','How To Make Sure Your Life Doesn’t Suck: a Different Kind Of Guide To Navigating the Ups & Downs Of ','Self-help/Spirituality ','@maggiegilewicz ','Huh? ;-)'],
['Anders Kingsley','https://www.amazon.com/Secret-Second-Zeus-Anders-Kingsley-ebook/dp/B01N1N5LDC/ref=cm_cr_arp_d_pl_foot_top?ie=UTF8','The Secret of the Second Zeus','Thrillers','@Anders_Kingsley','A victim’s last message—a cryptic riddle scrawled in his own blood on the back of a group photo.']
    ];


    // DIRECTORY FUNCTIONS

    var dirQLHTML = '';
    var dirFrHTML = '';

    for (var i = 0; i < dirQL.length; i++) {
        var q = dirQL[i];

        dirQLHTML += '<tr class="peer">';
        dirQLHTML += '<td class="peer-name">' + dirQL[i][0] + '</td>';
        dirQLHTML += '<td class="peer-twitter" ><a href="https://twitter.com/' + dirQL[i][4].replace('@', '') + '" target="_blank"><span class="hide-SEO">' + dirQL[i][4] + '</span><i class="fab fa-twitter"></i></a></td>';
        dirQLHTML += '<td class="peer-genre">' + dirQL[i][3] + '</td>';
        dirQLHTML += '<td class="peer-books"><a class="peer-title" href="#">' + dirQL[i][2] + '<i class="fas fa-plus"></i><i class="fas fa-minus"></i></a><span class="peer-pitch"><span class="peer-title-mobile">' + dirQL[i][2] + '</span><span class="peer-genre-mobile">' + dirQL[i][3] + '</span>' + dirQL[i][5] + '</span></td>';
        dirQLHTML += '<td><a class="peer-buy" href="' + dirQL[i][1] + '" target="_blank">Buy <i class="fas fa-chevron-right"></i></a></td>';
        dirQLHTML += '</tr>';

    }

    $('.qi-lit-data').html(dirQLHTML);

    for (var j = 0; j < dirFr.length; j++) {
        var q = dirFr[j];

        dirFrHTML += '<tr class="peer">';
        dirFrHTML += '<td class="peer-name">' + dirFr[j][0] + '</td>';
        dirFrHTML += '<td class="peer-twitter" ><a href="https://twitter.com/' + dirFr[j][4].replace('@', '') + '" target="_blank"><span class="hide-SEO">' + dirFr[j][4] + '</span><i class="fab fa-twitter"></i></a></td>';
        dirFrHTML += '<td class="peer-genre">' + dirFr[j][3] + '</td>';
        dirFrHTML += '<td class="peer-books"><a class="peer-title" href="#">' + dirFr[j][2] + '<i class="fas fa-plus"></i><i class="fas fa-minus"></i></a><span class="peer-pitch"><span class="peer-title-mobile">' + dirFr[j][2] + '</span><span class="peer-genre-mobile">' + dirFr[j][3] + '</span>' + dirFr[j][5] + '</span></td>';
        dirFrHTML += '<td><a class="peer-buy" href="' + dirFr[j][1] + '" target="_blank">Buy <i class="fas fa-chevron-right"></i></a></td>';
        dirFrHTML += '</tr>';
    }

    $('.qi-friends-data').html(dirFrHTML);

});