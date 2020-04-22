$(function () {


    /* QUEER LITERATURE */

    var dirQL = [
['Jaimie N. Schock', 'https://www.amazon.com/Jaimie-N.-Schock/e/B07THB22QK?ref_=dbs_p_ebk_r00_abau_000000', 'The Talisman War Series', 'Adult Fantasy', '@heroesgetmade', 'The world is quickly descending into war between powerful magic users, and it&rsquo;s up to a select few to stop it.', 'genre-speculative', 'age-adult'],
['Sheena C. Howard', 'https://www.amazon.com/Ninas-Whisper-Sheena-Howard-ebook/dp/B0848YGLTL', 'Nina&rsquo;s Whisper', 'Lesbian fiction, Domestic suspense', '@DrSheenaHoward', 'A med school graduate returns to her hometown and falls for an enigmatic young woman who conceals a scurrilous and compulsive nature. ', 'genre-suspense genre-love', 'age-adult'],
['Ila Golden ', 'https://www.amazon.com/Colours-See-Neva-Aton-Collection-ebook/dp/B081YSL6PF/', 'The Colours I See ', 'Young adult fantasy ', '@ILAGolden', 'Between his health, his gift and his sexuality, Zel knows exactly how different he is, but he&rsquo;s stubborn, optimistic, and, most importantly of all, in love. ', 'genre-speculative', 'age-ya'],
['Anya Pavelle', 'http://www.relinks.me/B07XD674TJ', 'The Moon Hunters', 'Science Fiction ', '@anyapavelle', '50 years after a plague devastated the world, two people who come from an island that&rsquo;s been isolated since the plague make a daring escape into the unknown because their refuge has transformed into a prison.', 'genre-speculative', 'age-adult'],
['Terry Geo', 'https://www.amazon.com/Refraction-Terry-Geo-ebook/dp/B07XDC1PPS', 'Refraction', 'Science Fiction', '@terryjgeo', 'If you could dream anything into existence, what would it be?', 'genre-speculative', 'age-adult'],
['Mary Cook', 'https://www.amazon.com/dp/B082TSPZDQ', 'The Mists of Stone Lake', 'Horror', '@tootiehead', 'Can Damon stop the evil before Todd suffers the same fate as the others?', 'genre-speculative', 'age-adult'],
['Daniela R. Lovejoy', 'http://www.amazon.com/author/danielarlovejoy', 'My Lesbian College Love: Transformation Romance', 'Erotic gender swap romance', '@DanielaRLovejoy', 'A nameless dream girl and a strange stone heart with special powers, Tom is in for the erotic ride of his life when he&rsquo;s turned into a girl.', 'genre-love', 'age-adult'],
['Lali A. Love', 'https://www.amazon.com/Heart-Warrior-Angel-Darkness-Light-ebook/dp/B07T792VT1/ref=mp_s_a_1_1?dchild=1&keywords=heart+of+a+warrior+angel&qid=1587215726&sr=8-1', 'Heart of a Warrior Angel: From Darkness to Light ', 'Thriller, Metaphysical Fantasy', '@laliaristo', 'Spanning two continents and three generations, this inspirational award-winning novel shows how the tiniest spark of light can overcome the darkness of any magnitude. ', 'genre-suspense genre-speculative', 'age-adult'],
['Victoria Williams ', 'https://aliteraturewayoflife.wordpress.com/', 'Work in Progress - Coming later this year! ', 'Fantasy ', '@scinerd28', ' Born in an alternate world where societal schisms abound and war is rampant, Siobhan must decide what she is ultimately fighting for. ', 'genre-speculative', 'age-adult'],
['M.E. Aster', 'https://www.amazon.com/M.E.-Aster/e/B07KVKQPJX?ref_=dbs_p_ebk_r00_abau_000000', 'Three Halves of a Whole', 'Adult fiction with romantic themes', '@ME_Aster', 'Andrew aspired to be that person that could fix everything, he wanted to save Riley from his doubts and fears...but he never quite knew how, and the passage of years hadn&rsquo;t changed that.', 'genre-love', 'age-adult'],
['B.J. Frazier', 'https://www.bjfrazier.com/books/', 'Straight-up Gay:  &ldquo;First Trip to the Sauna&rdquo; and &ldquo;Seth Wants a Daddy&rdquo;. &ldquo;Perchance to Dream&rdquo; series', 'Erotica', '@xxxbjfrazier', '&ldquo;First Trip to the Sauna&rdquo; is a short-short is about a man’s first experience with MM sex, which takes place at a sauna.', 'genre-love', 'age-adult'],
['Vicky Calzo', 'https://www.lezvampbutchboi.wixsite.com/vickycalzo', 'The Vampire Society: Christopher and Gaspar', 'New Adult 18+ LGBT Vampires Fiction', '@CalzoVicky', 'What if the Vampire God chose YOU to become a vampire?', 'genre-speculative', 'age-na'],
['Jon-David', 'https://mafiahairdresser.com', 'The Mafia Hairdresser Chronicles', 'Gay, Comedy, Crime', '@mafiahairdreser', '80&rsquo;s Celebrity Hairdresser becomes Key Player supplying Cocaine to Hollywood.', 'genre-suspense', 'age-adult'],
['P.J. Stanley ', 'https://www.amazon.com/Tell-Me-Every-Lie-gripping-ebook/dp/B0876F7K47', 'Tell Me Every Lie ', 'Mystery ', '@PJStanleyAuthor', 'A mother searches for her missing daughter and discovers that some secrets are worth dying for.', 'genre-suspense', 'age-adult'],
['S S Long','https://www.amazon.com/kindle-dbs/entity/author/B06XD1W553?_encoding=UTF8&node=283155&offset=0&pageSize=12&searchAlias=stripbooks&sort=author-sidecar-rank&page=1&langFilter=default#formatSelectorHeader','Dragons of Fire and Ice','SFW M/M medieval fantasy','@S_S_Long','In a world where dragons live alongside humans, elves, vampires and other beings, can Quinn the Alpha fire-drake find happiness and escape his stifling upbringing?','genre-speculative genre-love','age-adult'],
['Kyle Baxter','https://www.amzn.com/B07XZMPHZ4/','The Problem With Mistletoe/Five Points','LGBTQ Romance','@lankyguy','Between work, being a single father and planning a Christmas party for his mother&rsquo;s charity, David thought his life was complicated enough. Enter Alex. ','genre-love','age-adult'],
['Julius Eks','https://www.boldstrokesbooks.com/books/le-berceau-by-julius-eks-3201-b','Le Berceau','Gay romance erotica','@EksJulius','If only Ben could tear his heart in two, then he would not have to choose between the love of his life and the most beautiful boy that he has ever seen.','genre-love','age-adult'],
['TJ Dallas','https://tjdallas.home.blog/','The Bartender&rsquo;s Pride (#1) and Pride and the Stranger (#2)/The Pride Trilogy ','Lesbian Erotica','@TJDallas7','This *erotica novel follows Lara as she moves to a new city and comes to terms with her desire for another woman; a seductive bartender with a supernatural secret.','genre-love','age-adult'],
['B.J. Black','http://bjblack.com/','Workout Buddies & Anniversary Surprise','Erotica','@AuthorBJBlack','B.J. Black writes sexy erotica stories that pull you into the action and make you feel like you are there, featuring bisexual men, dominants, submissives and many other interesting scenes.','genre-love','age-adult'],
['C. M. Slick','https://www.amazon.com/dp/B085GKH38G','Falling in Love with his Dom','M/M erotica','@cmslick','As a small business owner, Taylor doesn&rsquo;t have time to date, so instead, he pays a sexy, silver-haired Dom to please him in all sorts of deviant ways. ','genre-love','age-adult'],
        ['Adam Wing','https://www.wingwriting.com/','Icarus, Matriarch, Apoca Lypse Sink Ships','Sci-fi / Fantasy (Mostly)','@AdamWingWriting','ICARUS, a story as old as civilization: In a life where friendship is forbidden, and even the smallest human connection could mean dire consequences, a lonely child finds the person who will give his life meaning, who will lift him to unimagined heights.','genre-speculative','age-adult'],
['Amy-Alex Campbell ','https://www.amazon.com/Lowest-Realm-Miscreant-Book-ebook/dp/B07YY6KFCN/','The Lowest Realm / The Miscreant ','Romance and Fantasy ','@AmyAlexCampbell','When Nika wakes up in a strange world, he must face more than being hunted. He must learn to harness the powers of mancery, while falling in love with another man. ','genre-speculative genre-love','age-adult'],
['Eugene Galt','https://www.amazon.com/dp/B07D5PZWQH/','These Words Are True and Faithful','contemporary realistic LGBT fiction','@eugene_galt','Young lawyer Sam Overton and older police officer Ernie Butler think they’ll live happily and kinkily ever after until a seemingly innocent event upends everything they think they know.','genre-love','age-adult'],
['Mason Thomas','http://masonthomasbooks.com/index.html/','The Witchstone Amulet, The Shadow Mark, Lord Mouse','Fantasy','@MasonThomas999','While chasing down a thief through a Chicago alley, gay rugby player Hunter Best is teleported into a strange and violent world and finds himself in the middle of resistance movement against a brutal regime. ','genre-speculative','age-adult'],
['Grayson Bell','https://www.amazon.com/Grayson-Bell/e/B07H3B3D5G','Coffee-to-Go, Mark My Soul','Gay Erotic Romance (M/M Romance)','@GrayBellAuthor','Join Grayson Bell as he explores the romance and intimacy that can occur between two men as they explore each other&rsquo;s limits and ultimately fall in love.','genre-love','age-adult'],
['EL Nelson','https://www.amazon.com/E-L-Nelson/e/B07RPCQ6M2.    ','The Dragons&rsquo; House series. The Men of Dragons&rsquo; House series','Gay Romance','@iprintem','LGBTQ books with fire, heart and a passion for justice','genre-love','age-adult'],
['HM Wolfe','https://www.amazon.com/E-L-Nelson/e/B07RPCQ6M2.    ','The Dragons&rsquo; House series. The Men of Dragons&rsquo; House series','Gay Romance','@HMWolfe3','LGBTQ books with fire, heart and a passion for justice','genre-love','age-adult'],
['Gideon E. Wood','http://www.gideonewood.com','The Stagsblood Prince (2021) ','Queer Fantasy','@gideonewood','Tel, a pacifist crown prince with a magical gift, looks forward to any easy reign of peace and prosperity—not to mention booze and boys—but the dark forces around him press him to confront his entire value system.  ','genre-speculative','age-adult'],
['C.F. Turner','https://www.amazon.com/Lodesyia-Clay-Turner-ebook/dp/B00MXEOMJQ','Lodesyia','Young Adult Fiction','@authorcfturner','Loddy Clementine is a regular teenager until she discovers that she has a dark spirit inside of her which may grant her any power known or unknown to man. She is called upon to save an entire galaxy of people from devastating war, learning to control the dark spirit as well.','genre-speculative','age-ya'],
['Isaac Grisham','https://www.amazon.com/author/isaacgrisham','The Brass Machine','Fantasy','@isaacgrisham','Banished from his homeland, Prince Kitsune must hunt down the son of his father&rsquo;s rival - a son possessing fiery magic.','genre-speculative','age-adult'],
['Patrick Scattergood','https://www.amazon.com/dp/B083G4YGGR','Mother, Dearest','Honestly? Wherever my stories take me.','@PSScattergood','Naz likes to be alone but when he starts seeing fairytale creatures telling him the world is going to end, he finds his life is changed forever.','genre-speculative','age-adult'],
['Chase Taylor Hackett','https://www.amazon.com/gp/product/B01N5S23MN?notRedirectToSDP=1&ref_=dbs_mng_calw_0&storeType=ebooks','Where Do I Start?','Romantic Comedy','@cthackett','Just because you don&rsquo;t believe in love, doesn&rsquo;t mean it isn&rsquo;t real. It just means you don&rsquo;t see it coming till it&rsquo;s way too late.','genre-love','age-adult'],
['Claire Castle','https://www.amazon.com/Claire-Castle/e/B07692ZZG4/ref=dp_byline_cont_pop_ebooks_1','The World Traveler  |  Boyfriend or Bust  |  Mayfair Models series  |  Novellas (various) ','Contemporary gay romance','@CCastleAuthor','Find love, laughter, and romance here','genre-love','age-adult'],
['Chris Bedell','https://www.amazon.com/s?k=Chris+Bedell&ref=nb_sb_noss_2','Between Love and Murder (among others)','YA Fiction','@ChrisBedell','Between Love and Murder: A young adult triangle of jealousy, betrayal, and murder. A story of what can happen...How far would you go?','genre-suspense genre-love','age-ya'],
['Kevin Craig','https://www.amazon.com/Kevin-Craig/e/B005AO83T6','Pride Must Be A Place, The Camino Club','Contemporary - Young Adult','@KevinTCraig','Pride Must Be A Place: Ezra, Alex, and Nettie team up to create their school&rsquo;s first gay straight alliance, but not without a few hiccups along the way. The Camino Club: In order to avoid incarceration, six juvenile delinquents choose to walk the Camino de Santiago pilgrimage route in Spain in order to wipe their criminal records clean.','genre-suspense','age-ya']
    ];


    /* FRIENDS OF Qi */

    var dirFr = [
        ['Dylan Madeley', 'https://amazon.com/dp/B085LDXDZX', 'Alathea: Goddess & Empress', 'Fantasy', '@TheDylanMadeley', 'She dreams of mending a fractured world the only way she can imagine: first she&rsquo;ll make it hers.', 'genre-speculative', 'age-adult'],
['Christopher Hooley', 'https://www.amazon.com/gp/aw/d/B07ZWHWBR8/ref=tmm_kin_title_sr?ie=UTF8&qid=1577702653&sr=8-1', 'Death, Just Grinn and Bear It ', 'Paranormal Fantasy ', '@ChrisHooley2020', '‪A ‬raw, gut-punching, no-holds-barred paranormal fantasy about the tragic beauty of life and the inescapable mystery of death.', 'genre-speculative', 'age-adult'],
['S. P. O’Farrell', 'https://www.amazon.com/Simone-LaFray-Chocolatiers-Ball-OFarrell-ebook/dp/B07PWNNJHW', 'Simone LaFray and the Chocolatiers’ Ball', 'Middle-grade fiction', '@SPOFarrell3', 'A young spy must thwart an international art theft while saving the family business.', 'genre-suspense', 'age-mg'],
['Rodol Phito', 'https://www.amazon.com/dp/B081JFDVXZ', 'Rival Rebels', 'Young Adult Sci-Fi Action Adventure', '@rivalrebelsgame', 'Join these young heroes on their action-packed journey through strange worlds.', 'genre-speculative', 'age-ya'],
['R Young', 'https://mybook.to/Dead_Heads', 'Dead Heads', 'Fantasy (Noir)', '@InkDisregardIt', 'Sometimes being murdered can feel like the highlight of your day, welcome to the afterlife, don&rsquo;t lose your head.', 'genre-speculative', 'age-adult'],
['Jacob Klop', 'https://www.amazon.com/s?i=digital-text&rh=p_27%3AJacob+Klop&s=relevancerank&text=Jacob+Klop&ref=dp_byline_sr_ebooks_1', 'The Community, Crooked Souls, Sun Giver', 'Sci-fi, Dystopian, Horror, Fantasy', '@JacobKlop', 'Their society seems perfect, yet its people want nothing more than to return to the promise of an even better world Outside.', 'genre-speculative', 'age-adult'],
['Lisa Keeble ', 'https://www.amazon.com/dp/B07TSFGHCW/ref=cm_sw_r_cp_awdb_t1_m.DNEbKZ778KM', 'From His Perspective ', 'Humour/Fantasy', '@lisakeb007', 'You may think you know human history but you’ve never viewed it From His Perspective ', 'genre-speculative', 'age-adult'],
['Ethan McCaffrey', 'https://www.amazon.com/Ethan-McCaffrey/e/B07S4LYHKL', 'Carrie: Hotwife in Training', 'Erotica', '@WriteEthan', 'Brad and Carrie set out on an adventure to save their relationship', 'genre-love', 'age-adult'],
['Despoina Kemeridou', 'https://www.amazon.com/gp/product/B07P5ZXPGS', 'Fated to Meet You ', 'Paranormal Romance', '@dkemeridou', 'A modern fairytale with lots of romance, time-travel and an ancient curse. ', 'genre-love', 'age-adult'],
['Richard Bist', 'https://www.amazon.com/Dark-Journeys-Short-Story-Collection-ebook/dp/B081X889WC', 'Dark Journeys', 'Speculative, Sci-fi, Horror, Erotica', '@richardbist', 'Dark Journeys is a collection of horror, weird, and speculative science fiction short stories. Come along and explore the dark corners of imagination.', 'genre-speculative genre-love', 'age-adult'],
['Chelsea Callahan', 'https://www.amazon.com/kindle-dbs/author/ref=dbs_P_W_auth?_encoding=UTF8&author=Chelsea%20Callahan&searchAlias=digital-text&asin=B082Z73W5F', 'Eyes of The Grave, Curse of The Crow, Deja Vu', 'Urban Fantasy', '@TheWritingDruid', 'With one touch Rebekah Devereaux can solve a murder or prevent one, but what happens when her touch tells her she commited one?', 'genre-speculative', 'age-adult'],
['Columbus Montgomery ', 'http://columbusmontgomeryhome.wordpress.com/', 'The Chronicles of Aebrahm: Last of the Aesvolk ', 'Fantasy ', '@colum.montgomery', 'Surviving the brutal massacre of his family and people, a lone warrior/blacksmith is hunted whilst protecting a divine tome that may be the key to restoring the Cosmic Balance and save his world.', 'genre-speculative', 'age-adult'],
['Maggie Gilewicz', 'https://amzn.to/3eMpsoq', 'How To Make Sure Your Life Doesn’t Suck', 'Self-help/Spirituality ', '@maggiegilewicz ', 'A Different Kind Of Guide To Navigating the Ups & Downs Of A Different Kind Of Guide To Navigating The Ups And Downs Of Life', 'genre-nonfiction', 'age-adult'],
['Anders Kingsley', 'https://www.amazon.com/Secret-Second-Zeus-Anders-Kingsley-ebook/dp/B01N1N5LDC/ref=cm_cr_arp_d_pl_foot_top?ie=UTF8', 'The Secret of the Second Zeus', 'Thrillers', '@Anders_Kingsley', 'A victim’s last message—a cryptic riddle scrawled in his own blood on the back of a group photo.', 'genre-suspense', 'age-adult'],
['Kevin Barrick', 'http://www.amzn.com/B084C2QJVL/', 'Creativity Brewing: 30 Short Stories Hand-Roasted to Perfection', 'Fantasy', '@KevinBarrick ', 'Enjoy a selection of flash fiction stories blended together for a perfect brew of creativity! ', 'genre-speculative', 'age-adult'],
['Sein Ares', 'https://mybook.to/RedMoon', 'Red Moon (Arcana of the Crimson Era Book one)', 'Dark Fantasy', '@einsuniel', 'A world ruled by Demons, humanity is no more, magic is life, a Verdant Earth but...is it a better world?', 'genre-speculative', 'age-adult'],
        ['Wesley Stein','https://www.wesleysteincreative.com','The Islanders','Adventure ','@wesstein','Three sisters, marooned on a lost island, find a secret village of hedonists.','genre-suspense','age-adult'],
['Dzintra Sullivan ','https://www.amazon.com/Once-Upon-Death-Days-Book-ebook/dp/B07SVN7ZDX/ref=mp_s_a_1_1?dchild=1&keywords=once+upon+a+death&qid=1587505708&s=books&sr=1-1-catcorr','Once upon a Death. -  Bk1 in Days of Death series. ','Cozy Mystery','@dzintrasullivan','What happens when the Reaper decides to retire to a small town and live a human life? Grab your scythe, this is going to get funny. ','genre-suspense','age-adult'],
        ['Corey E. Toomey','https://www.amazon.com/Heathers-Mannequin-Novel-Corey-Toomey-ebook/dp/B083NM9TLS','Heather&rsquo;s Mannequin','Dystopian fiction','@coreytoomey0','Combining elements of dystopian fiction and war drama, with psychological underpinnings, Heather&rsquo;s Mannequin is a young woman&rsquo;s odyssey to find love and self-acceptance.','genre-speculative','age-adult'],
['Alexa Sommers','https://www.amazon.com/-/e/B083WMR1GR','Level Up','Romantic Erotica','@alexasommers','Dillon Strands is not your typical college co-ed. While others are chasing down parties and partners, Dillon and his friends are studying, gaming and stuck in a rut, their social lives hanging by a thread. Enter Suzanne Andrews, a gamer girl with a plan.','genre-love','age-adult'],
['Dillon Walker ','https://bit.ly/fft-paperback','Friends, Family And Other Tragedies ','Women’s Fiction','@dwwriter1004','From the outside, 18-year-old Andy looks like she has it all, but after years of endless grief and abuse, it’s time for her to face her fears and escape the pain. ','genre-suspense genre-love','age-adult'],
['Susan M Lane','https://www.olympiapublishers.com/books/secrets ','SECRETS','Contemporary Fiction','@DutrizacSue','A collection of high intensity short stories accentuating the struggles of ordinary people as they are forced to face their darkest secrets. ','genre-suspense','age-adult'],
['Victoria Marswell','https://www.victoriamarswell.com/','The Counterfeiter&rsquo;s Daughter','Romantic Suspense','@vicmarswell','A psychologist is compelled to deal with her father’s crime in Germany when she inherits a priceless artifact. She must evade smugglers and relic hunters, long enough to discover the truth, while depending on a man mixed up in it all. ','genre-suspense genre-love','age-adult'],
['DGF Blackwell','https://www.amazon.co.uk/gp/product/B07YBMBCHJ','Captive','Crime','@blackwell_dgf','Marie takes matters into her hands and challenges Paul, being drawn into a deadly and twisted game that endangers her own life, bringing up painful memories of a previous case.','genre-suspense','age-adult'],
['Shenae Chase','https://www.amazon.com/Love-Mentalist-Shenae-Chase-ebook/dp/B07NVY1VGZ/ref=cm_cr_arp_d_pl_foot_top?ie=UTF8 ','The Love Mentalist ','Romance','@ShenaeChase','Love can be wondrous, magical but also reckless, but when a woman dates a man 15 years younger it can also be frowned upon by society. She didn’t intend to fall in love with him but she will make the ultimate sacrifice for him.','genre-love','age-adult'],
['Stuart McDonald','https://www.stuartmcdonaldauthor.co.uk/','&ldquo;Turtle Trouble&rdquo; and &ldquo;The Witches&rsquo; Tea Party&rdquo;','Children’s Literature','@wwwstuartmcdon1','I write children&rsquo;s rhyming picture books for 3-7yrs. &ldquo;Turtle Trouble&rdquo; is about recycling and pollution and &ldquo;The Witches&rsquo; Tea Party&rdquo; is about friendship and sharing.','genre-speculative','age-kidlit'],
['Christopher Aggett','https://twitter.com/CJAggett','Deep','Horror / Suspense / Thriller','@CJAggett','A young woman is lost and in danger, in a world that crumbles around her. Can she find her father and can she do it before the overspill of military experiments consume the city.','genre-speculative','age-adult'],
['B.A. Ellison','https://www.baellibooks.com/about','A Tale of Shadow and Shroud','Epic Fantasy | New Adult | Grimdark','@BAEllison4','A world full of magic and Eedon Rath-ni (Ravens, Eagles, Dragons, and Hawks) beckons all Dravens to fight in a coming war between a notorious terrorist, and an all powerful house of tyrants. On which side will you fall? Which Eedon Rath-ni will you ride, and how will you fight? ','genre-speculative','age-na'],
['Kelly Miller','https://www.amazon.com/dp/B07SWY9RCH/ref=dp-kindle-redirect?_encoding=UTF8&btkr=1','Death Takes a Holiday at Pemberley','&lsquo;Austenesque&rsquo; Historical Romance','@kellyrei007','What will the master of Pemberley do when confronted with the mercurial whims of an all-powerful angel?','genre-love','age-adult'],
['Nora Edington','https://amazon.com/dp/B085BBT4D8 ','&ldquo;Beginning&rdquo; Love and Betrayals Romance Series','Romance','@NoraEdington','It’s all began in the late ’90s at the romantic Cedars Resort, tucked away in a majestic forest...','genre-love','age-adult']
    ];


    // DIRECTORY FUNCTIONS

    var dirQLHTML = '';
    var dirFrHTML = '';

    for (var i = 0; i < dirQL.length; i++) {
        var q = dirQL[i];

        dirQLHTML += '<tr class="peer">';
        dirQLHTML += '<td class="peer-name">' + dirQL[i][0] + '</td>';
        dirQLHTML += '<td class="peer-twitter" ><a href="https://twitter.com/' + dirQL[i][4].replace('@', '') + '" target="_blank"><span class="hide-SEO">' + dirQL[i][4] + '</span><i class="fab fa-twitter"></i></a></td>';
        dirQLHTML += '<td class="peer-genre ' + dirQL[i][7] + ' ' + dirQL[i][6] + '">' + dirQL[i][3] + '</td>';
        dirQLHTML += '<td class="peer-books"><a class="peer-title" href="#">' + dirQL[i][2] + '<i class="fas fa-plus fa-fw"></i><i class="fas fa-minus fa-fw"></i></a><span class="peer-pitch"><span class="peer-title-pitch">' + dirQL[i][2] + '</span><span class="peer-genre-pitch">' + dirQL[i][3] + '</span>' + dirQL[i][5] + '</span></td>';
        dirQLHTML += '<td><a class="peer-buy" href="' + dirQL[i][1] + '" target="_blank">Buy <i class="fas fa-chevron-right"></i></a></td>';
        dirQLHTML += '</tr>';

    }

    $('.qi-lit-data').html(dirQLHTML);

    for (var j = 0; j < dirFr.length; j++) {
        var q = dirFr[j];

        dirFrHTML += '<tr class="peer">';
        dirFrHTML += '<td class="peer-name">' + dirFr[j][0] + '</td>';
        dirFrHTML += '<td class="peer-twitter" ><a href="https://twitter.com/' + dirFr[j][4].replace('@', '') + '" target="_blank"><span class="hide-SEO">' + dirFr[j][4] + '</span><i class="fab fa-twitter"></i></a></td>';
        dirFrHTML += '<td class="peer-genre ' + dirFr[j][7] + ' ' + dirFr[j][6] + '">' + dirFr[j][3] + '</td>';
        dirFrHTML += '<td class="peer-books"><a class="peer-title" href="#">' + dirFr[j][2] + '<i class="fas fa-plus fa-fw"></i><i class="fas fa-minus fa-fw"></i></a><span class="peer-pitch"><span class="peer-title-pitch">' + dirFr[j][2] + '</span><span class="peer-genre-pitch">' + dirFr[j][3] + '</span>' + dirFr[j][5] + '</span></td>';
        dirFrHTML += '<td><a class="peer-buy" href="' + dirFr[j][1] + '" target="_blank">Buy <i class="fas fa-chevron-right"></i></a></td>';
        dirFrHTML += '</tr>';
    }

    $('.qi-friends-data').html(dirFrHTML);


    // SORT
    // https://www.w3schools.com/howto/howto_js_sort_table.asp

    $('.sort').on('click', function (e) {
        e.preventDefault();
        $('.sort').removeClass('active');
        if ($(this).hasClass('sort-name')) {
            $('.sort-name').addClass('active');
            sortTable('queer', 0);
            sortTable('ally', 0);
        } else if ($(this).hasClass('sort-genre')) {
            $('.sort-genre').addClass('active');
            sortTable('queer', 2);
            sortTable('ally', 2);
        } else if ($(this).hasClass('sort-title')) {
            $('.sort-title').addClass('active');
            sortTable('queer', 3);
            sortTable('ally', 3);
        }
    });

    function sortTable(id, n) {
        var table, rows, switching, i, x, y, shouldSwitch;
        table = document.getElementById(id);
        switching = true;
        while (switching) {
            switching = false;
            rows = table.rows;
            for (i = 0; i < (rows.length - 1); i++) {
                shouldSwitch = false;
                x = rows[i].getElementsByTagName('TD')[n];
                y = rows[i + 1].getElementsByTagName('TD')[n];
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            }
            if (shouldSwitch) {
                rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                switching = true;
            }
        }
    }


    // FILTERS
    
    $('.show-filters').on('click', function(e) {
        e.preventDefault();
        $('.hide-filters').addClass('show');
        $('.show-filters').removeClass('show');
        $('.filters').slideDown();
    });
    
    $('.hide-filters').on('click', function(e) {
        e.preventDefault();
        $('.show-filters').addClass('show');
        $('.hide-filters').removeClass('show');
        $('.filters').slideUp();
    });

    $('.peer-btn.all').on('click', function (e) {
        e.preventDefault();
        $('.peer-btn').removeClass('active');
        $('tr.peer').removeClass('hide-genre').removeClass('hide-age');
    });

    $('.peer-btn.genre').on('click', function (e) {
        e.preventDefault();
        $('.peer-btn.genre').removeClass('active');
        $('tr.peer').addClass('hide-genre');
        if ($(this).hasClass('genre-all')) {
            $('tr.peer').removeClass('hide-genre');
        } else if ($(this).hasClass('genre-speculative')) {
            $('.peer-btn.genre-speculative').addClass('active');
            $('.peer-genre.genre-speculative').parent().removeClass('hide-genre');
        } else if ($(this).hasClass('genre-love')) {
            $('.peer-btn.genre-love').addClass('active');
            $('.peer-genre.genre-love').parent().removeClass('hide-genre');
        } else if ($(this).hasClass('genre-suspense')) {
            $('.peer-btn.genre-suspense').addClass('active');
            $('.peer-genre.genre-suspense').parent().removeClass('hide-genre');
        } else if ($(this).hasClass('genre-nonfiction')) {
            $('.peer-btn.genre-nonfiction').addClass('active');
            $('.peer-genre.genre-nonfiction').parent().removeClass('hide-genre');
        }
    });

    $('.peer-btn.age').on('click', function (e) {
        e.preventDefault();
        $('.peer-btn.age').removeClass('active');
        $('tr.peer').addClass('hide-age');
        if ($(this).hasClass('age-all')) {
            $('tr.peer').removeClass('hide-age');
        } else if ($(this).hasClass('age-kidlit')) {
            $('.peer-btn.age-kidlit').addClass('active');
            $('.peer-genre.age-kidlit').parent().removeClass('hide-age');
        } else if ($(this).hasClass('age-mg')) {
            $('.peer-btn.age-mg').addClass('active');
            $('.peer-genre.age-mg').parent().removeClass('hide-age');
        } else if ($(this).hasClass('age-ya')) {
            $('.peer-btn.age-ya').addClass('active');
            $('.peer-genre.age-ya').parent().removeClass('hide-age');
        } else if ($(this).hasClass('age-na')) {
            $('.peer-btn.age-na').addClass('active');
            $('.peer-genre.age-na').parent().removeClass('hide-age');
        } else if ($(this).hasClass('age-adult')) {
            $('.peer-btn.age-adult').addClass('active');
            $('.peer-genre.age-adult').parent().removeClass('hide-age');
        }
    });

});