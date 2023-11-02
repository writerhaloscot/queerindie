$(function () {


    /* QUEER LITERATURE */
    var dirQL = [
['Jaimie N. Schock', 'https://www.amazon.com/Jaimie-N.-Schock/e/B07THB22QK?ref_=dbs_p_ebk_r00_abau_000000', 'The Talisman War Series', 'Adult Fantasy', '@Heroes_Get_Made', 'The world is quickly descending into war between powerful magic users, and it&rsquo;s up to a select few to stop it.', 'genre-speculative', 'age-adult'],
['Sheena C. Howard', 'https://www.amazon.com/Ninas-Whisper-Sheena-Howard-ebook/dp/B0848YGLTL', 'Nina&rsquo;s Whisper', 'Lesbian fiction, Domestic suspense', '@DrSheenaHoward', 'A med school graduate returns to her hometown and falls for an enigmatic young woman who conceals a scurrilous and compulsive nature. ', 'genre-suspense genre-love', 'age-adult'],
['Ila Golden ', 'https://www.amazon.com/Colours-See-Neva-Aton-Collection-ebook/dp/B081YSL6PF/', 'The Colours I See ', 'Young adult fantasy ', '@ILAGolden', 'Between his health, his gift and his sexuality, Zel knows exactly how different he is, but he&rsquo;s stubborn, optimistic, and, most importantly of all, in love. ', 'genre-speculative', 'age-ya'],
['Anya Pavelle', 'http://www.relinks.me/B07XD674TJ', 'The Moon Hunters', 'Science Fiction ', '@anyapavelle', '50 years after a plague devastated the world, two people who come from an island that&rsquo;s been isolated since the plague make a daring escape into the unknown because their refuge has transformed into a prison.', 'genre-speculative', 'age-adult'],
['Terry Geo', 'https://www.amazon.com/Refraction-Terry-Geo-ebook/dp/B07XDC1PPS', 'Refraction', 'Science Fiction', '@terryjgeo', 'If you could dream anything into existence, what would it be?', 'genre-speculative', 'age-adult'],
['Mary Cook', 'https://www.amazon.com/dp/B082TSPZDQ', 'The Mists of Stone Lake', 'Horror', '@tootiehead', 'Can Damon stop the evil before Todd suffers the same fate as the others?', 'genre-speculative', 'age-adult'],
['Daniela R. Lovejoy', 'http://www.amazon.com/author/danielarlovejoy', 'My Lesbian College Love: Transformation Romance', 'Erotic gender swap romance', '@DanielaRLovejoy', 'A nameless dream girl and a strange stone heart with special powers, Tom is in for the erotic ride of his life when he&rsquo;s turned into a girl.', 'genre-love', 'age-adult'],
['Lali A. Love', 'https://www.amazon.com/Heart-Warrior-Angel-Darkness-Light-ebook/dp/B07T792VT1/ref=mp_s_a_1_1?dchild=1&keywords=heart+of+a+warrior+angel&qid=1587215726&sr=8-1', 'Heart of a Warrior Angel: From Darkness to Light ', 'Thriller, Metaphysical Fantasy', '@laliaristo', 'Spanning two continents and three generations, this inspirational award-winning novel shows how the tiniest spark of light can overcome the darkness of any magnitude. ', 'genre-suspense genre-speculative', 'age-adult'],
        ['Lali A. Love','https://www.amazon.com/dp/B08DL4286J','The De-Coding of Jo: Hall of Ignorance','Fantasy, Paranormal, SciFi','@laliaristo','What would you do if you accidentally discovered a mysterious, holographic portal into the cosmos, hidden in the basement of your high school’s library? Would you take the leap of faith?','genre-speculative','age-ya'],
['Victoria Williams ', 'https://aliteraturewayoflife.wordpress.com/', 'Work in Progress - Coming later this year! ', 'Fantasy ', '@scinerd28', ' Born in an alternate world where societal schisms abound and war is rampant, Siobhan must decide what she is ultimately fighting for. ', 'genre-speculative', 'age-adult'],
['M.E. Aster','https://www.amazon.com/M.E.-Aster/e/B07KVKQPJX?ref_=dbs_p_ebk_r00_abau_000000','Hopeless, Breathless; Take His Place; Three Halves of a Whole','Adult fiction with romantic themes','@ME_Aster','In THREE HALVES OF A WHOLE, Andrew aspired to be that person that could fix everything, he wanted to save Riley from his doubts and fears...but he never quite knew how, and the passage of years hadn&rsquo;t changed that.','genre-love','age-adult'],
['B.J. Frazier', 'https://www.bjfrazier.com/books/', 'Straight-up Gay:  &ldquo;First Trip to the Sauna&rdquo; and &ldquo;Seth Wants a Daddy&rdquo;. &ldquo;Perchance to Dream&rdquo; series', 'Erotica', '@xxxbjfrazier', '&ldquo;First Trip to the Sauna&rdquo; is a short-short is about a man’s first experience with MM sex, which takes place at a sauna.', 'genre-love', 'age-adult'],
        ['B.J. Frazier/Jessie Spectre','https://www.bjfrazier.com/book/eli-book-one-the-seduction/','Eli','Erotica','@xxxbjfrazier','A young man explores D/s homosexuality','genre-love','age-adult'],
['Vicky Calzo', 'https://www.lezvampbutchboi.wixsite.com/vickycalzo', 'The Vampire Society: Christopher and Gaspar', 'New Adult 18+ LGBT Vampires Fiction', '@CalzoVicky', 'What if the Vampire God chose YOU to become a vampire?', 'genre-speculative', 'age-na'],
['Jon-David', 'https://mafiahairdresser.com', 'The Mafia Hairdresser Chronicles', 'Gay, Comedy, Crime', '@mafiahairdreser', '80&rsquo;s Celebrity Hairdresser becomes Key Player supplying Cocaine to Hollywood.', 'genre-suspense', 'age-adult'],
['P.J. Stanley ', 'https://www.amazon.com/P-J-Stanley/e/B0876HN62C/ref=dp_byline_cont_ebooks_1', 'Tell Me Every Lie ', 'Mystery ', '@PJStanleyAuthor', 'A mother searches for her missing daughter and discovers that some secrets are worth dying for.', 'genre-suspense', 'age-adult'],
        ['Dylan Madeley', 'https://www.amazon.com/dp/B092WRZDGX', 'Prince Ewald the Brave', 'Fantasy', '@TheDylanMadeley', 'A world outside the palace needs saving, but can he rescue the family within?', 'genre-speculative', 'age-adult'],
['S S Long', 'https://www.amazon.com/kindle-dbs/entity/author/B06XD1W553?_encoding=UTF8&node=283155&offset=0&pageSize=12&searchAlias=stripbooks&sort=author-sidecar-rank&page=1&langFilter=default#formatSelectorHeader', 'Dragons of Fire and Ice', 'SFW M/M medieval fantasy', '@S_S_Long', 'In a world where dragons live alongside humans, elves, vampires and other beings, can Quinn the Alpha fire-drake find happiness and escape his stifling upbringing?', 'genre-speculative genre-love', 'age-adult'],
['Kyle Baxter', 'https://www.amzn.com/B07XZMPHZ4/', 'The Problem With Mistletoe/Five Points', 'LGBTQ Romance', '@lankyguy', 'Between work, being a single father and planning a Christmas party for his mother&rsquo;s charity, David thought his life was complicated enough. Enter Alex. ', 'genre-love', 'age-adult'],
['Julius Eks', 'https://www.boldstrokesbooks.com/books/le-berceau-by-julius-eks-3201-b', 'Le Berceau', 'Gay romance erotica', '@EksJulius', 'If only Ben could tear his heart in two, then he would not have to choose between the love of his life and the most beautiful boy that he has ever seen.', 'genre-love', 'age-adult'],
['TJ Dallas', 'https://tjdallas.home.blog/', 'The Bartender&rsquo;s Pride (#1) and Pride and the Stranger (#2)/The Pride Trilogy ', 'Lesbian Erotica', '@TJDallas7', 'This *erotica novel follows Lara as she moves to a new city and comes to terms with her desire for another woman; a seductive bartender with a supernatural secret.', 'genre-love', 'age-adult'],
['B.J. Black', 'http://bjblack.com/', 'Workout Buddies & Anniversary Surprise', 'Erotica', '@AuthorBJBlack', 'B.J. Black writes sexy erotica stories that pull you into the action and make you feel like you are there, featuring bisexual men, dominants, submissives and many other interesting scenes.', 'genre-love', 'age-adult'],
['C. M. Slick', 'https://www.amazon.com/dp/B085GKH38G', 'Falling in Love with his Dom', 'M/M erotica', '@cmslick', 'As a small business owner, Taylor doesn&rsquo;t have time to date, so instead, he pays a sexy, silver-haired Dom to please him in all sorts of deviant ways. ', 'genre-love', 'age-adult'],
        ['Adam Wing', 'https://www.wingwriting.com/', 'Icarus, Matriarch, Apoca Lypse Sink Ships', 'Sci-fi / Fantasy (Mostly)', '@AdamWingWriting', 'ICARUS, a story as old as civilization: In a life where friendship is forbidden, and even the smallest human connection could mean dire consequences, a lonely child finds the person who will give his life meaning, who will lift him to unimagined heights.', 'genre-speculative', 'age-adult'],
['Amy-Alex Campbell ', 'https://www.amazon.com/Lowest-Realm-Miscreant-Book-ebook/dp/B07YY6KFCN/', 'The Lowest Realm / The Miscreant ', 'Romance and Fantasy ', '@AmyAlexCampbell', 'When Nika wakes up in a strange world, he must face more than being hunted. He must learn to harness the powers of mancery, while falling in love with another man. ', 'genre-speculative genre-love', 'age-adult'],
['Eugene Galt', 'https://www.amazon.com/dp/B07D5PZWQH/', 'These Words Are True and Faithful', 'Contemporary realistic LGBT fiction', '@eugene_galt', 'Young lawyer Sam Overton and older police officer Ernie Butler think they’ll live happily and kinkily ever after until a seemingly innocent event upends everything they think they know.', 'genre-love', 'age-adult'],
['Mason Thomas', 'http://masonthomasbooks.com/index.html/', 'The Witchstone Amulet, The Shadow Mark, Lord Mouse', 'Fantasy', '@MasonThomas999', 'While chasing down a thief through a Chicago alley, gay rugby player Hunter Best is teleported into a strange and violent world and finds himself in the middle of resistance movement against a brutal regime. ', 'genre-speculative', 'age-adult'],
['Grayson Bell', 'https://graysonbell.net/books/romance-books/', 'Coffee-to-Go, Mark My Soul, Transcendent, Suddenly, Omega', 'Gay Erotic Romance (M/M Romance), Erotic Romance, Erotica', '@GrayBellAuthor', 'Join Grayson Bell as he explores the romance and intimacy that can occur between two men as they explore each other&rsquo;s limits and ultimately fall in love.', 'genre-love', 'age-adult'],
        ['Grayson Bell','https://graysonbell.net/books/science-fiction/','Artifact of the Dawn/The Cycles of Revelation','Science Fiction','@GrayBellAuthor','When Ardyn discovers a mysterious glowing artifact, he and Jevan venture deep into forbidden woods to uncover its secrets, and what they find will change their world forever.','genre-speculative','age-adult'],
['EL Nelson', 'https://www.amazon.com/E-L-Nelson/e/B07RPCQ6M2', 'The Dragons&rsquo; House series. The Men of Dragons&rsquo; House series', 'Gay Romance', '@iprintem', 'LGBTQ books with fire, heart and a passion for justice', 'genre-love', 'age-adult'],
['HM Wolfe', 'https://www.amazon.com/E-L-Nelson/e/B07RPCQ6M2', 'The Dragons&rsquo; House series. The Men of Dragons&rsquo; House series', 'Gay Romance', '@HMWolfe3', 'LGBTQ books with fire, heart and a passion for justice', 'genre-love', 'age-adult'],
['Gideon E. Wood', 'https://www.amazon.com/dp/B08P979P9Y', 'The Stagsblood Prince', 'Gay Fantasy', '@gideonewood', 'Tel, handsome prince of Feigh, has negotiated peace between his country and the strange queendom of Omela. He looks forward to an easy reign of wild parties and wilder men, but the deities have other ideas, in this gay fantasy novel of transformation, redemption, and love.', 'genre-speculative', 'age-adult'],
['C.F. Turner', 'https://www.amazon.com/Lodesyia-Clay-Turner-ebook/dp/B00MXEOMJQ', 'Lodesyia', 'Young Adult Fiction', '@authorcfturner', 'Loddy Clementine is a regular teenager until she discovers that she has a dark spirit inside of her which may grant her any power known or unknown to man. She is called upon to save an entire galaxy of people from devastating war, learning to control the dark spirit as well.', 'genre-speculative', 'age-ya'],
['Isaac Grisham', 'https://www.amazon.com/author/isaacgrisham', 'The Brass Machine', 'Fantasy', '@isaacgrisham', 'Banished from his homeland, Prince Kitsune must hunt down the son of his father&rsquo;s rival - a son possessing fiery magic.', 'genre-speculative', 'age-adult'],
['Patrick Scattergood', 'https://www.amazon.com/dp/B083G4YGGR', 'Mother, Dearest', 'Honestly? Wherever my stories take me.', '@PSScattergood', 'Naz likes to be alone but when he starts seeing fairytale creatures telling him the world is going to end, he finds his life is changed forever.', 'genre-speculative', 'age-adult'],
['Chase Taylor Hackett', 'https://www.amazon.com/gp/product/B01N5S23MN?notRedirectToSDP=1&ref_=dbs_mng_calw_0&storeType=ebooks', 'Where Do I Start?', 'Romantic Comedy', '@CTHackett', 'Just because you don&rsquo;t believe in love, doesn&rsquo;t mean it isn&rsquo;t real. It just means you don&rsquo;t see it coming till it&rsquo;s way too late.', 'genre-love', 'age-adult'],
['Claire Castle', 'https://www.amazon.com/Claire-Castle/e/B07692ZZG4/ref=dp_byline_cont_pop_ebooks_1', 'The World Traveler  |  Boyfriend or Bust  |  Mayfair Models series  |  Novellas (various) ', 'Contemporary gay romance', '@CCastleAuthor', 'Find love, laughter, and romance here', 'genre-love', 'age-adult'],
['Chris Bedell', 'https://www.amazon.com/s?k=Chris+Bedell&ref=nb_sb_noss_2', 'Between Love and Murder (among others)', 'YA Fiction', '@ChrisBedell', 'Between Love and Murder: A young adult triangle of jealousy, betrayal, and murder. A story of what can happen...How far would you go?', 'genre-suspense genre-love', 'age-ya'],
['Kevin Craig', 'https://www.amazon.com/Kevin-Craig/e/B005AO83T6', 'Pride Must Be A Place, The Camino Club', 'Contemporary - Young Adult', '@KevinTCraig', 'Pride Must Be A Place: Ezra, Alex, and Nettie team up to create their school&rsquo;s first gay straight alliance, but not without a few hiccups along the way. The Camino Club: In order to avoid incarceration, six juvenile delinquents choose to walk the Camino de Santiago pilgrimage route in Spain in order to wipe their criminal records clean.', 'genre-suspense', 'age-ya'],
        ['Clyde Andrews', 'https://www.smashwords.com/profile/view/clydeandrews', 'The Talent of Oliver & Tom', 'Contemporary, Fantasy, Sci-Fi, Adventure', '@CDAndrews11', 'A Victorian murder mystery with found family and two cute gay MC&rsquo;s', 'genre-speculative', 'age-adult'],
['Lucy Bexley', 'https://www.amazon.com/Flying-First-Lucy-Bexley-ebook/dp/B086JJ9CQM/ref=sr_1_1?dchild=1&keywords=Lucy+Bexley&qid=1587604574&sr=8-1', 'Flying First', 'Lesbian Romance', '@bexley_lucy', 'An ice queen boss, her assistant, and a business trip that goes very wrong (and very sexy).', 'genre-love', 'age-adult'],
['J. D. Simmons', 'https://www.Amazon.com/dp/1543956831', 'Lately Lesbian', 'Non-fiction', '@jdsimmons8', 'Lately Lesbian is my true story. For many years I wore the mask of a happily married woman, and in doing so, nearly sacrificed myself. Denial of my attraction and longing for a woman reigned supreme until one phone call changed everything.', 'genre-nonfiction', 'age-adult'],
['Johnny Miles', 'http://johnny-miles.com/', 'Yuletide Knights Series, Café y Chocolate, Casa Rodrigo', 'LGBTQ', '@JohnnyMiles', 'On a mission to reconnect with an estranged family member, newly divorced Sereno Hidalgo falls for Augusto Toro, and must now figure out if he can truly love a bisexual as a catastrophic hurricane approaches Puerto Rico.', 'genre-suspense genre-love', 'age-adult'],
['Zoe Burgess', 'https://amzn.to/3bAbdRE', 'Song of the Night', 'Paranormal Romance', '@letzoespoilyou', 'Dark desire haunt a dystopian future where blood and evil make strange bedfellows!', 'genre-speculative genre-love', 'age-adult'],
['J.E. Carlson', 'https://www.amazon.com/SWITCH-jannie-Coats-ebook/dp/B007TAQVT8/ref=sr_1_1?dchild=1&keywords=Jannie+Coats&qid=1587658683&s=digital-text&sr=1-1', 'The Switch', 'Gay/lesbian', '@', 'Gay and lesbian shorts', 'genre-love', 'age-adult'],
        ['Taylor Ramage', 'https://www.amazon.com/Taylor-Ramage/e/B07566PGZD', 'Forgive Us Our Trespasses; Lest I Know Your Weakness', 'Poetry, fantasy', '@TaylorRamage', 'Lest I Know Your Weakness is a twisted love story told in alternating poems, reimagining the relationship between Laura and Carmilla in the 1872 novella “Carmilla” as a darkly hopeful bond.', 'genre-speculative', 'age-adult'],
['Nero Seal', 'https://www.amazon.com/Nero-Seal/e/B01M1P4LRO', 'Egoist series', 'Dark Romance, Thriller', '@Nero_Seal', 'Dark. Twisted. Hot as Hell.', 'genre-suspense genre-love', 'age-adult'],
        ['Wendy Hewlett', 'http://wendyhewlett.com/solstice-coven-series', 'Solstice Coven Series - High Priestess, Guardians of the Sacred Moon', 'Lesbian Mystery, Paranormal Suspense', '@WendyHewlett', 'Detective Constable Raven Bowen investigates her deceased mother&rsquo;s death after her mum begins talking to her from beyond the grave.', 'genre-suspense genre-love', 'age-adult'],
['Belinda Harrison', 'https://www.amazon.com/dp/B086C97J5Y', 'Thermopylae Bound Series', 'Epic Fantasy/Romance', '@BeHarrison78', 'A nomadic warrior woman falls in love with a princess and sets in motion events with far-reaching consequences.', 'genre-speculative genre-love', 'age-adult'],
['Jax Meyer', 'http://author.to/JaxMeyer', 'A Marine&rsquo;s Heart series, Rising from Ash (Forged by Fire book 1)', 'Lesbian/WLW Romance', '@butchjax', 'After loss of her soulmate, autistic former Marine finds love again through music.', 'genre-love', 'age-adult'],
['C.J. Edmunds', 'http://www.cjedmunds.com', 'Take Me Now: Tales from the Dark District and Sojourn', 'Urban Fantasy', '@CJEdmunds1', 'Imagine a place where you are free to be who you want to be or hide from the world that wronged and shunned you. A place where there is no judgement. To enter is free. To stay is a choice. Welcome to the Dark District.', 'genre-speculative', 'age-adult'],
['H.A. Blackwood', 'https://www.amazon.com/Tell-Tale-Hearts-H-Blackwood-ebook/dp/B081Z7HYTL', 'Tell-Tale Hearts', 'Erotica', '@hablackwood7', 'Darcy Ford wants a clean start - but do so she&rsquo;s going to have to talk dirty.', 'genre-love', 'age-adult'],
        ['Anny Borg', 'https://theannyblog.com/books/beyond-the-horizon/', 'Beyond the Horizon', 'Coming-of-Age, Young Adult', '@annyinacastle', 'A Coming-of-Age story about growing up, being true to oneself and overcoming the adversaries of both the past and present.', 'genre-fiction', 'age-ya'],
['Donovan Edwards ', 'https://slade2372.wixsite.com/website', 'Denver Demon series ', 'Horror/supernatural ', '@DonovanEdwards ', 'In search for answers  David finds himself caught up in a world of sex, lies, and the supernatural. ', 'genre-speculative', 'age-adult'],
['Chase Taylor Hackett', 'https://www.amazon.com/gp/product/B071VHV289?notRedirectToSDP=1&ref_=dbs_mng_calw_1&storeType=ebooks', 'And the Next Thing You Know...', 'Romantic comedy', '@CTHackett', 'Rising-star attorney Jeffrey is suddenly wondering if the last guy he’d ever fall for—might be exactly that.', 'genre-love', 'age-adult'],
['Sandy Gilchrist', 'https://www.sandygilchristauthor.com/', 'Finding Me', 'Lesbian Romance', '@SandyGilchrist_', 'A distraction is what Ava wanted. Is sexy cafe owner, Isabel just that? Join Ava on her journey of self-discovery filled with love, tears & laughter.', 'genre-love', 'age-adult'],
['I.M. Redwright', 'https://wottaread.com', 'The Sapphire Eruption/The Sword&rsquo;s Choice', 'YA Fantasy', '@wottaread', 'Once a year, the skies burn red. Upon this day, the Fire Kingdom’s priests perform their ritual: each newborn’s palm is lacerated, opened with a sacred sword, for Firia’s next ruler will be seen to shed no blood. ', 'genre-speculative', 'age-ya'],
        ['Isis Brown', 'https://smile.amazon.com/dp/B07M6D969F/ref=cm_sw_r_sms_apa_i_zI0PEbQSQKW0M', 'Worlds Apart - The Politico Series', 'Lesbian Fiction, Lesbian Romance ', '@isisbrownbooks', 'Layla is a political staffer who meets the up and coming actress Isabel Martin and sparks fly. Relationships are hard enough as it is, so can two people with budding careers make it work long distance? Especially if those careers are worlds apart?', 'genre-love', 'age-adult'],
['Bjørn Larssen', 'https://www.amazon.com/Bj%C3%B8rn-Larssen/e/B07P5TQ6Q8/ref=dp_byline_cont_ebooks_1', 'Children of the Gods (WIP)', 'Historical/mythic fantasy', '@bjornlarssen', 'You thought your parents were difficult? Theirs are Gods.', 'genre-speculative', 'age-adult'],
        ['Bjørn Larssen','https://books2read.com/larssen-children','Children (The Ten Worlds, #1)','Norse adult literary fantasy','@bjornlarssen','You might have godparents – their parents are Gods.','genre-speculative','age-adult'],
        ['Conor Bredin', 'https://www.amazon.com/dp/B07VRXRPGM', 'The Longest Night: A Supernatural Thriller', 'Thriller', '@Conor_the_Geek', 'A crazed megalomaniac wishes to bring about the end of the world as we know it, and only three strangers can stop him, and they don’t even know it yet. ', 'genre-suspense', 'age-adult'], ['Meg-John Barker', 'https://www.amazon.co.uk/Meg-John-Barker/e/B001H6PRQS', 'Graphic Guides, Rewriting the Rules, Enjoy Sex, How to Understand Your Gender, Life Isn&rsquo;t Binary', 'Self-help, graphic, non-fiction', '@megjohnbarker', 'Gently radical books about sex, gender, and relationships which help you to navigate the complex, contradictory, and confusing cultural messages we&rsquo;re all confronted with, often with pretty pics.', 'genre-nonfiction', 'age-adult'],
['Emma Jaye', 'https://www.amazon.com/Emma-Jaye/e/B009ZKW0L8', 'Paint. Lies. Incubus.', 'M/M (mostly!)', '@EmmaJayeAuthor', 'She loves putting damaged, often sweet and funny characters through hell before letting them have a well earned HFN or HEA', 'genre-love', 'age-adult'],
['Shakeil Kanish and Larissa Mandeville', 'https://www.amazon.com/Sigil-Novel-Shakeil-Kanish/dp/1734460601', 'The Sigil: A Novel ', 'Dark Urban Fantasy', '@kanish_shakeil', 'After a tragic accident Lake Smithson&rsquo;s obsession to know why thrusts him into a world of magic, secrets and demons. ', 'genre-speculative', 'age-adult'],
['Marian L Thorpe', 'https://www.amazon.com/dp/B0753CTGBZ', 'Empire&rsquo;s Legacy (Series): Empire&rsquo;s Daughter, Empire&rsquo;s Hostage, Empire&rsquo;s Exile, Orai&aacute;phon, Empire&rsquo;s Reckoning, Empire&rsquo;s Heir', 'Historical fiction of another world.', '@marianlthorpe', 'In a world at war, which would you choose: your country or your lover?', 'genre-fiction', 'age-adult'],
        ['Tammy Bird ', 'http://amazon.com/author/tammybird', 'The Book of Promises and Sandman ', 'Suspense/thriller', '@tammy_bird', 'Sandman: When a decomposing body pushes through the surface of a dune, the lives of an entire beach community are changed forever. ', 'genre-suspense', 'age-adult'],
['Macey Wilkie', 'https://www.amazon.com/dp/B0871M2BBZ', 'Hekser (Witches)', 'Fantasy', '@MWilkie12', 'Teresa Jones meets 2 intriguing women on the internet, and discovers that witches are real and they come in good and bad versions.', 'genre-speculative', 'age-adult'],
['Megan The Poet', 'https://amzn.to/2ZbDN8u', 'Poetry for Lovers and Haters', 'Poetry', '@MeganThePoet', 'Poetry for Lover and Haters’ details the everlasting journey from anger to peace from the female perspective', 'genre-fiction', 'age-adult'],
['Ade G. Demon', 'https://www.findingserendiipitii.com/', '(WIP) The Witch&rsquo;s Gunslinger', 'Fantasy / Romance / Occult', '@thedemonauthor', 'An ex-gang leader and a coven witch wrestle with the Wild West and its demons to free the witch&rsquo;s coven sisters and keep their marriage steady.', 'genre-speculative genre-love', 'age-adult'],
['San G. Crowe', 'https://sangcrowe.com', 'The Craving, and short stories', 'Sci-fi, fantasy, paranormal, horror, etc', '@TheNamelessCrow', 'The voices in his head want nothing but bloodshed, and to prevent more people from dying, he may have to go back to the scientists that turned him into a bloodthirsty monster.', 'genre-speculative', 'age-adult'],
['D M Grant', 'https://www.amazon.com/D-M-Grant/e/B0846BYKKK', 'The Exile', 'Coming of Age', '@aussielol', 'THE EXILE dissects the tumultuous growing experiences that can both shape a character and tear it apart. The book is a coming of age story set against the harshness of unemployment, recession and a hot blistering sun.', 'genre-fiction', 'age-adult'],
        ['Vaz Anzai', 'https://vazanzai.com/', 'Strange Tales From The City of Dust', 'Cyberpunk', '@vazanzai', 'In the dark future-tech city of Dust, Dia the prostitute will learn she is much more than just machine meant for men&rsquo;s abuse. ', 'genre-speculative', 'age-adult'],
['John', 'http://johnny-edward2011.blogspot.com/2020/06/fatal.html', 'short stories', 'Mixed', '@Johnny45842969', 'flawed families', 'genre-fiction', 'age-adult'],
['Jannie Coats', 'https://www.amazon.com/dp/B007TAQVT8', 'The Switch', 'Gay and lesbian shorts', '@Johnny45842969', 'gay stories and lesbian stories&mdash;short fiction of love and loss', 'genre-love', 'age-adult'],
        ['Josh Stoddard', 'https://www.joshstoddard.uk/', 'Smalltown Boy', 'Romance', '@jstodtv', 'In 1980s Manchester, a bisexual baker risks being outed when he falls in love.', 'genre-love', 'age-adult'],
        ['Cody Pelletier', 'https://www.instagram.com/publishquest', 'Walter and the Secret Keeper', 'Young Adult', '@Publishquest ', 'Everything you’ve been told is true, but that is only part of the story.', 'genre-fiction', 'age-ya'],
        ['Brian Schutter', 'http://amzn.com/B086WRSQJR/', 'Titanborn', 'Science Fiction', '@BrianSchutter', 'Born far from Earth, the telepathic colonist Meera must overcome the trauma of loss and journey across Titan&rsquo;s dunes to find her missing friend.', 'genre-speculative', 'age-adult'],
        ['Paul Lisicky', 'https://bookshop.org/books/later-my-life-at-the-edge-of-the-world/9781644450161', 'Later: My Life at the Edge of the World', 'Literary', '@Paul_Lisicky', 'Later is a coming-of-age memoir set in Provincetown, MA, at the height of the AIDS crisis in town in the early 1990s.', 'genre-fiction', 'age-adult'],
        ['Holden Sheppard', 'https://www.amazon.com/Invisible-Boys-Holden-Sheppard-ebook/dp/B07SYGB3KY/', 'Invisible Boys', 'Young Adult', '@V8Sheppard', 'On the surface, nerd Zeke, punk Charlie and footy jock Hammer look like they have nothing in common, but in private, all three sixteen-year-old boys are in the throes of coming to terms with their homosexuality in a town where it is invisible.', 'genre-fiction', 'age-ya'],
        ['Travis Mays', 'http://www.amazon.com/author/travismays', 'Free Nightmares', 'Fiction suspense/thriller', '@insane_author', 'Expect the unexpected. Sometimes fiction can become a reality.', 'genre-suspense', 'age-adult'],
        ['Darío Aguilar Peregrina', 'https://www.amazon.com/dp/B07T2QN792/', 'Hurricanes 2007 Saga', 'Action, Fantasy, Slice of Life', '@HurricaneDario', 'The story of a mexican lesbian navy cadet protecting a young girl from a superpowered mercenary and her allies.', 'genre-suspense genre-speculative', 'age-adult'],
['Gabriel Constans', 'https://www.amazon.com/Last-Conception-Gabriel-Constans-ebook/dp/B00LVGZO3U/', 'The Last Conception', 'LesFic', '@GabrielConstans', 'Her parents tell Savarna she MUST have a baby because she&rsquo;s the last in succession of a spiritual teacher followed by millions.  She doesn&rsquo;t believe it. Her girlfriend does.', 'genre-love', 'age-adult'],
        ['Michael Stoneburner', 'https://www.michaelstoneburner.com/buy-my-ink/', 'He Was A Boy Who Smiled: Phoenix Rising/He Was A Boy Who Smiled: Phoenix Falling/Shorts/', 'Young Adult/Adult ', '@evilgeniustobe', 'He Was A Boy Who Smiled is an inspirational true story about a young, gay boy growing up in a world surrounded by violence both at home and school, but despite it all, was a boy who smiled anyway. Shorts is a collection of shorts stories about a variety of inclusive characters.', 'genre-fiction', 'age-adult'],
['Duane Simolke', 'http://DuaneSimolke.Com', 'The Acorn Stories, Taldra. (Not related to each other.)', 'Short stories, scifi, fantasy, poetry.', '@DuaneSimolke', 'Comedy, drama, and closet cases in Texas. The Acorn Stories.', 'genre-speculative genre-fiction', 'age-adult'],
        ['David Ledain', 'https://www.amazon.co.uk/dp/1530636663/', 'Gay Dad - Ten True Stories of Divorced Gay Men .. & This Forbidden Fruit', 'LGBTQ+ Non-fiction', '@davidledain', 'How many gay men end up marrying women? For gay men who have married a woman, the idea that they are alone in this respect is far from the truth.', 'genre-nonfiction', 'age-adult'],
['Lannie Stabile', 'https://www.neonhemlock.com/books/strange-furniture-by-lannie-stabile', 'Strange Furniture', 'Poetry', '@LannieStabile', 'Stabile takes us through their childhood, examining the irony of their German and Jewish heritage, the constant threat of straight cis-males, and loneliness as a default setting.', 'genre-fiction', 'age-adult'],
        ['Lannie Stabile','https://www.cephalopress.com/zeus','Good Morning to Everyone Except Men Who Name Their Dogs Zeus','Poetry','@LannieStabile','A must-have feminist poetry collection, intersecting Greek mythology, the prevalence of sexual assault, and men obsessed with other powerful men.','genre-fiction','age-adult'],
        ['Fallon Cahan', 'https://www.amazon.com/Fallon-Cahan/e/B07RD47KXP', 'For The Love Of Felix: An M/M Erotic Romance Short', 'M/M Romance', '@WriterEroticMM', 'After a failed relationship and an offer to take over the family business, Felix moves home with the intention to finally tell his long-time best friend he&rsquo;s in love with him... Cute and sometimes hilarious family meddling ensues.', 'genre-love', 'age-adult'],
['Penelope Peters', 'https://penelope-peters.com/', 'The Omega Nanny', 'Paranormal M/M Romance', '@penelope_writes', 'Who says romance is standardized?', 'genre-speculative genre-love', 'age-adult'],
['Suzanne DeWitt Hall', 'https://www.amazon.com/Suzanne-DeWitt-Hall/e/B001KIX8RS', 'Where True Love Is', 'Devotionals, picture books, novels', '@smDeWittHall', 'Affirming devotionals with a focus on sexuality.', 'genre-fiction', 'age-adult'],
['Nick Askew', 'https://www.amazon.com/dp/B08DHXYD33', 'Ensoulment ', 'Sci-fi/fantasy ', '@nickaskewwrites', 'After Andrew dies, death thrusts him into a strange world full of outlandish and dangerous inhabitants where he must search out the other half of his soul if he ever hopes to find his way home again.', 'genre-speculative', 'age-adult'],
['Dan Cole', 'https://www.dancoleauthor.com/', 'Lani: The Girl Without Fear', 'YA Fantasy', '@Icedan_HDH', 'In a moonless world fear controls all. One girl feels none of it and is determined to escape. Out of the city, she learns of love, life, and death. ', 'genre-speculative', 'age-ya'],
        ['Fiona Glass','https://www.amazon.co.uk/dp/B084GVG927','Echoes of Blood','Paranormal romance','@F_Glass_Author','A lonely man... a coven of vampires... the lure of history - and blood.','genre-speculative genre-love','age-adult'],
        ['Fiona Glass','https://www.amazon.co.uk/dp/B08943CDB3','Just Visiting','Paranormal romance','@F_Glass_Author','Can love follow someone through time itself?','genre-speculative genre-love','age-adult'],
        ['Fiona Glass','https://www.amazon.com/dp/B08PG2ZJQM/','December Roses','M/M Paranormal Romance','@F_Glass_Author','A mysterious garden... an enigmatic man... but are either of them real?','genre-speculative genre-love','age-adult'],
        ['W D Foster-Graham','https://wfostergrahamauthor.com/  ','Christopher Family Novel Series','Historical Fiction/Romance/Gay & Lesbian','@WDFosterGraham1','Stories of a large, wealthy, and powerful African-American family and their friends, where being LGBT is simply a fact of life.','genre-fiction genre-love','age-adult'],
        ['Jason Kilgore','https://www.amazon.com/dp/B082W65D4F','Hogroth and the Necromancer','fantasy','@WorldsKilgore','Hogroth is a barbaric gladiator. But when his lover is kidnapped and held by a necromancer, nothing can stop him from saving Filan and enacting vengeance - magic or not.','genre-speculative','age-adult'],
        ['Dean Cole','https://www.amazon.co.uk/Dean-Cole/e/B00JFP8ARQ/','Chasing Ghosts (The Quentin Strange Mysteries Book 1)','Supernatural Mystery','@DeanColeWriter','He&rsquo;s chasing the ghosts of the past ... he doesn&rsquo;t expect them to start chasing him.','genre-suspense genre-speculative','age-adult'],
        ['Thomas Grant Bruso','https://www.amazon.com/Thomas-Grant-Bruso/e/B00OGMHLW8?ref=sr_ntt_srch_lnk_1&qid=1601814901&sr=8-1','Jay Bird, The Unbroken Circle, The Two of Us, Past Sins, The Light Between Us, Heat Wave','Romance, Mystery, Horror','@thomgrantbruso','In a constantly-changing world, friendships will be tested and truths will be revealed.','genre-speculative genre-love','age-adult'],
        ['Fell Hound','https://gumroad.com/fellhound','Commander Rao, Do You Believe in an Afterlife?','Dystopian Scifi, Comics','@FellHound_','On the final dawn of an exhausted war, a rogue commander sets out on a warpath against a tyrannical baron. ','genre-speculative','age-adult'],
        ['Rory Michaelson','https://www.rorymichaelson.com/buy-lesser-known-monsters','Lesser Known Monsters','Fantasy/urban fantasy/contemporary','@RoryMichaelson','Being the chosen one isn&rsquo;t always a good thing&hellip;','genre-speculative','age-adult'],
        ['J. D. Toombs','https://www.barnesandnoble.com/w/judd-j-d-toombs/1138407001?ean=9781792333576','JUDD/The Fragmented Chronicles','Urban Fantasy','@jd_toombs','In a city where everyone receives powers, Samael Judd did not, and he knows why.','genre-speculative','age-adult'],
        ['C. M. Rosens','https://www.amazon.co.uk/C.-M.-Rosens/e/B081VKJ76K','The Crows; Folklore of Pagham-on-Sea Vol. 1 ','Horror','@CMRosens','Fleeing a toxic relationship, Carrie Rickard throws herself into restoring a &lsquo;cursed&rsquo; manor house that calls to broken souls - but her new obsession unearths past sins that threaten her life, and the ghosts of her own recent past also refuse to be laid to rest.','genre-speculative','age-adult'],
['Coach Tony','https://www.amazon.sg/Mind-Your-Garden-realities-tomorrow/dp/B08GLMMY1N','Mind Your Garden - the seeds you plant today become the realities of tomorrow ','Personal Growth','@tonyblisstaylor','In a time of perceived darkness take the time to shine BRIGHTER!  You are more powerful than you give yourself credit for!  Love your life LOUDER today!','genre-fiction','age-adult'],
        ['Natascha Graham','https://www.amazon.co.uk/dp/B08NMJ8Z3M','The Art of Almost','Lesfic/Literary Fiction','@natascha.graham','One woman&rsquo;s life told through fragments of time that stretch over four decades.','genre-fiction genre-love','age-adult'],
['Natascha Graham','https://www.amazon.co.uk/dp/B08NNPCCZ8','Broken Rainbow','Non-fiction, Lesbian, Abuse, Poetry, CNF','@natascha.graham','Non-fiction, poetry and prose exploring narcissistic abuse and healing in a lesbian relationship.','genre-nonfiction','age-adult'],
['Michael Scott Phillips','http://www.MichaelScottPhillipsAuthor.com/books','When Morpheus Overslept','Science Fiction','@MSPAuthor','Brilliant physicist Henry Sullivan attempts to colonize TRAPPIST-1e in order to prove his superluminal theories, but is instead marooned and trapped by a terrifying alien in a ruined city and haunted by the ghost of his wife.','genre-speculative','age-adult'],
        ['Michael Scott Phillips','https://www.amazon.com/dp/B0B75T14N4','Along Time&rsquo;s Edge Series: Beyond the Empyrean, The Lightning-Struck Tree','Science Fiction','@MSPAuthor','A 27th genetically engineered miner fights for the freedom from oligarch rule and falls in love with an oligarch&rsquo;s son.','genre-speculative','age-adult'],
        ['Rue Sparks','https://linktr.ee/ruesparks','Daylight Chasers','Speculative, Magical Realism, SFF','@sparks_writes','During a time-zone-hopping road trip, a client&rsquo;s mercurial moods and thinly veiled secret leaves Keenan wondering: how can he be the guide when even he is feeling lost?','genre-speculative','age-adult'],
        ['Rue Sparks','https://books2read.com/TheStarsWillGuideUsBack','The Stars Will Guide Us Back','Speculative Fiction/Magical Realism','@sparks_writes','Thirteen short stories encapsulating the elements of speculative fiction and magical realism travel the themes of mental health, loss, mortality, self-confidence, and finding hope through difficult circumstances.','genre-speculative','age-adult'],
['Miles Nelson','https://www.amazon.com/Riftmaster-Miles-Nelson-ebook/dp/B08WJGPY3W/','Riftmaster','Science Fiction','@ProbablyMiles','College student bailey jones is wrenched away from earth by a mysterious and unpredictable force known as the Rift. While stranded on an alien planet, he meets a mysterious traveller known as the Riftmaster.','genre-speculative','age-adult'],
        ['Carmen Loup','http://www.CarmenLoup.com','The Audacity Series','Humor, sci-fi, and spec','@Carmen_Loup','May loves racing the Audacity, the most obnoxiously orange rocket in the universe; her best friend and co-pilot Xan would rather watch &ldquo;I Love Lucy&rdquo; on the couch, but both their plans are constantly thwarted by an immortal, body-hopping being who calls herself Chaos.','genre-speculative','age-adult'],
        ['Jon Ford','https://jonfordauthor.com/tepris-press/','Hunters / The Ballad of the Songbird - Book 1','Urban Fantasy','@_Knightingale_','In a world where all the monsters of myth and legend are frighteningly real, who are the hunted...and who are the Hunters?','genre-speculative','age-adult'],
        ['Minerrale','https://tapas.io/series/Snowdrops','Snowdrops','Dystopic Bi Romance','@minerrale','Percy and Tam have nothing but their wits, a sling, and squirrel stew to survive the Madness that has overcome humanity. Oh, and Hans with his flamethrower.','genre-speculative genre-love','age-adult'],
        ['JC Calciano','https://jccalciano.com/','Revenge of the Brobot, The 10 Year Plan, Steamy Stories','MM romance, comedy, camp, pulp','@cinema175','A lone man, armed only with a laptop and his rapier wit, attempts to bring steamy, sexy stories to a cold, dark, lonely world.','genre-fiction genre-love','age-adult'],
        ['Anna Kirchner','https://www.amazon.co.uk/Anna-Kirchner/e/B08BX78NB6/','Little Black Bird','YA urban fantasy','@_AnnaKirchner','In a Polish city, a war between the local magical community and the demons is looming - will the telekinetic with uncontrollable powers save or doom the world as we know it? ','genre-speculative','age-ya'],
        ['Jon Wesley Huff','https://smile.amazon.com/dp/919874254X','In The Dark of the Grove','Horror','@jonwesleyhuff','Discover the dark heart of America&rsquo;s heartland.','genre-speculative','age-adult'],
        ['L.B. Shimaira','https://shimaira.com','My Lord (The Transcended)','Dark fiction (horror/pnr/thriller/SFF)','@LBShimaira','Meya is forced to work as a chambermaid for the cruel Lord Deminas and slowly uncovers all the dark secrets surrounding her not-quite-human master.','genre-speculative','age-adult'],
        ['A.L. Haringrey','http://getbook.at/ACureForHumanity','A Cure for Humanity','Urban Fantasy','@alharingrey ','An anxious office worker must prevent the oppression of vampires and werewolves by stopping his boss—and lover—from developing a genetic &lsquo;cure&rsquo; to turn them into humans.','genre-speculative','age-adult'],
        ['Claire Olivia Golden','https://claireoliviagolden.com/','Unraveled, The Lost Girl of Goose Creek','Fantasy','@','Unraveled: In this retelling of Sleeping Beauty, two girls fall in love while trying to break the curse on a crochet shawl. No twitter, but IG: @onceuponayarn.','genre-speculative','age-adult'],
        ['Jess Newton ','https://www.jessnewton.org/','Posterity ','Sci fi/fantasy ','@AuthorJNewton ','150 years in the future, the last humans are approaching their new home - but will they find more than just a planet? ','genre-speculative','age-adult'],
['Maxime Jaz','https://getbook.at/Fall-MaximeJaz','Fall','MM romance laced with erotica','@maximejaz','When you think you have everything, one small step twists your life around.','genre-love','age-adult'],
        ['J.D. Cunegan','https://jdcuneganbooks.com','Jill Andersen series (five novels), Notna, Legends of the Gem, The Art of Reading','Mystery/Superhero/Fantasy','@JD_Cunegan','Jill Andersen is a war veteran, a homicide cop, and a superhero. But is she a hero?','genre-speculative','age-adult'],
        ['Rexx Deane','https://rexxdeane.com','Synthesis: Weave (trilogy)','Sci-fi','@RexxDeane','Sebastian knows the evidence from the bombing aboard his station couldn&rsquo;t magically disappear, yet when he and Aryx, a disabled ex-marine, travel the galaxy to find the cause, there seems to be no other explanation.','genre-speculative','age-adult'],
['April-Jane Rowan','https://gurtdogpress.com/april-jane-rowan/','Lovelorn, Beneath A Bethel','Horror Fantasy ','@apriljanerowan','An illustrated novella about a culture where teeth are pulled in a holy ceremony and replaced by magical wish granting ones, but at what cost?','genre-speculative','age-adult'],
        ['Amy Campbell','https://www.amycampbell.info/my-books','Tales of the Outlaw Mages','Epic Fantasy','@rawrbear','Unless this outlaw mage tames his magic, everyone he cares about will be crushed by the enemy.','genre-speculative','age-adult'],
        ['Kevin Goode-Lee','https://www.amazon.com/dp/B09KVDCWMF','The Kai Logan Series','Mystery','@KaiLogan90','A casino dealer bets his life to find the truth!','genre-suspense','age-adult'],
        ['Beverly L. Anderson','https://bit.ly/phoenixreal','Doctor&rsquo;s Training Trilogy, Legacy of the Phoenix','Fantasy and Erotic Romance','@phoenixreal','A wider world than Kieran Sung ever imagined exists as the autistic doctor is drawn into the midst of a mob war.','genre-speculative genre-love','age-adult'],
['M.A. Quigley','https://www.amazon.com.au/s?k=the+complexities+of+love&ref=nb_sb_noss ','The Complexities of Love','LGBTQ+','@MQuigley1963','All Mark yearns for is for Dave to return his love, but will that happen, or will he find someone else?','genre-fiction','age-adult'],
        ['Ryder O. Cox','https://ryderocox.com/books-by-ryder-o-cox/','Tainted Belief, Killer Love, Discovery (Inheritance #1), Practice Makes Perfect (Their 1st Time #1)','Erotic Romance (M/M)','@RyderOCox','My books are dark, kinky, erotic romance (M/M). For me, I&rsquo;m just a silly, pansexual, polyamorous, demisexual, nonbinary creature who enjoys telling sexy stories with and for my friends. ','genre-love','age-adult'],
        ['Shane Blackheart','https://amazon.com/author/shane-blackheart','Everything Is Wonderful Now','Fantasy','@ShaneBlkheart','As a reversed Light vs Dark narrative unfolds, follow a trans trauma survivor from childhood to adulthood while they face not only an evil angel, but also a sinister force in their own head.','genre-speculative','age-adult'],
['Bindi Lavelle ','https://www.amazon.com.au/Bindi-Lavelle/e/B0BS138GNS/ref=dp_byline_cont_ebooks_1','Menace ','Poetry, Horror ','@evilbindi','Poetry that weaves dark narratives of the fantastic, uncanny and otherworldly.','genre-speculative genre-fiction','age-adult'],
        ['Brey Willows','breywillows.com','Dark Haven (1st indie book--9 others published via Bold Strokes Books)','Fantasy and Sci-fi ','@brey_willows','Even vampires get tired of playing with their food.','genre-speculative','age-adult'],
['Aimee Donnellan','https://www.amazon.com/dp/B0C7HD1RNJ/ref=sr_1_1?crid=83DZ598AIN5C&keywords=the+chase+begins+aimee+donnellan&qid=1686299836&sprefix=the+chase+begins+aimee+donnell%2Caps%2C397&sr=8-1','The Chase Begins (Catastrophe Incoming: Volume I)','New Adult Fantasy ','@bardqueenaimee ','In the middle of a war against dragons, an adventurer learns their murderous ex has escaped prison and they must battle their conflicted feelings and attempt to recapture her. ','genre-speculative','age-adult'],
['Elly Hazel','https://www.ellyhazel.com/, https://www.amazon.com/dp/B0B64G3KV4','Error: Detective Not Found / shyRobot Series','Science Fiction','https://twitter.com/shyRobotstories','Love, Murder, and Cake Pops! This sci-fi murder mystery mixes a fluffy queer love story with an intense whodunnit that&rsquo;ll keep you guessing until the end!','genre-speculative','age-adult'],
        ['Paolo G. Grossi','https://www.authorpaologgrossi.co.uk','The Tiergarten Tales ~ Serafino da Ferrara','LGBTQ+ Historical Fiction','@','The Tiergarten Tales: Boys and men of Berlin. Wealth, poverty and moral compromise. ~ Serafino da Ferrara: 1505 - 2008. Serafino and Parker embark on similar journeys of discovery while assassins, princes and envious artists rage and scheme around them.','genre-fiction','age-adult'],
        ['Maurice "Nolli" Rubio-McMillon','https://www.nolli-thecreator.com/damn-boy-george-novel','Damn Boy George & Thanks for the Heartbreak!','Fiction, YA, LGBTQ+ Issues','@Nollithecreator','Based on real life events; during an evening of celebration and reflection, a queer artist reopens traumatic wounds to help a stranger heal from grief and loss, unaware of a profound connection between their pain.','genre-fiction','age-ya']
    ];


    
    /* FRIENDS OF Qi */

    var dirFr = [
['Christopher Hooley', 'https://www.amazon.com/gp/aw/d/B07ZWHWBR8/ref=tmm_kin_title_sr?ie=UTF8&qid=1577702653&sr=8-1', 'Death, Just Grin and Bear It ', 'Paranormal Fantasy ', '@ChrisHooley_', '‪A ‬raw, gut-punching, no-holds-barred paranormal fantasy about the tragic beauty of life and the inescapable mystery of death.', 'genre-speculative', 'age-adult'],
['S. P. O’Farrell', 'https://www.amazon.com/Simone-LaFray-Chocolatiers-Ball-OFarrell-ebook/dp/B07PWNNJHW', 'Simone LaFray and the Chocolatiers’ Ball', 'Middle-grade fiction', '@SPOFarrell3', 'A young spy must thwart an international art theft while saving the family business.', 'genre-suspense', 'age-mg'],
['Rodol Phito', 'https://www.amazon.com/dp/B081JFDVXZ', 'Rival Rebels', 'Young Adult Sci-Fi Action Adventure', '@rivalrebelsgame', 'Join these young heroes on their action-packed journey through strange worlds.', 'genre-speculative', 'age-ya'],
['R Young', 'https://mybook.to/Dead_Heads', 'Dead Heads', 'Fantasy (Noir)', '@ryoungsulk', 'Sometimes being murdered can feel like the highlight of your day, welcome to the afterlife, don&rsquo;t lose your head.', 'genre-speculative', 'age-adult'],
['Jacob Klop', 'https://www.amazon.com/s?i=digital-text&rh=p_27%3AJacob+Klop&s=relevancerank&text=Jacob+Klop&ref=dp_byline_sr_ebooks_1', 'The Community, Crooked Souls, Sun Giver', 'Sci-fi, Dystopian, Horror, Fantasy', '@JacobKlop', 'Their society seems perfect, yet its people want nothing more than to return to the promise of an even better world Outside.', 'genre-speculative', 'age-adult'],
['Lisa Keeble ', 'https://www.amazon.com/dp/B07TSFGHCW/ref=cm_sw_r_cp_awdb_t1_m.DNEbKZ778KM', 'From His Perspective ', 'Humour/Fantasy', '@lisakeb007', 'You may think you know human history but you’ve never viewed it From His Perspective ', 'genre-speculative', 'age-adult'],
['Ethan McCaffrey', 'https://www.amazon.com/Ethan-McCaffrey/e/B07S4LYHKL', 'Carrie: Hotwife in Training', 'Erotica', '@WriteEthan', 'Brad and Carrie set out on an adventure to save their relationship', 'genre-love', 'age-adult'],
['Despoina Kemeridou', 'https://www.amazon.com/gp/product/B07P5ZXPGS', 'Fated to Meet You ', 'Paranormal Romance', '@dkemeridou', 'A modern fairytale with lots of romance, time-travel and an ancient curse. ', 'genre-love', 'age-adult'],
['Richard Bist', 'https://www.amazon.com/Dark-Journeys-Short-Story-Collection-ebook/dp/B081X889WC', 'Dark Journeys', 'Speculative, Sci-fi, Horror, Erotica', '@richardbist', 'Dark Journeys is a collection of horror, weird, and speculative science fiction short stories. Come along and explore the dark corners of imagination.', 'genre-speculative genre-love', 'age-adult'],
['Chelsea Callahan', 'https://www.amazon.com/kindle-dbs/author/ref=dbs_P_W_auth?_encoding=UTF8&author=Chelsea%20Callahan&searchAlias=digital-text&asin=B082Z73W5F', 'Eyes of The Grave, Curse of The Crow, Deja Vu', 'Urban Fantasy', '@TheWritingDruid', 'With one touch Rebekah Devereaux can solve a murder or prevent one, but what happens when her touch tells her she committed one?', 'genre-speculative', 'age-adult'],
['Columbus Montgomery ', 'https://columbusmontgomery.wordpress.com', 'The Chronicles of Aebrahm: Last of the Aesvolk ', 'Fantasy ', '@ColumMontgomery', 'Surviving the brutal massacre of his family and people, a lone warrior/blacksmith is hunted whilst protecting a divine tome that may be the key to restoring the Cosmic Balance and save his world.', 'genre-speculative', 'age-adult'],
['Maggie Gilewicz', 'https://amzn.to/3eMpsoq', 'How To Make Sure Your Life Doesn’t Suck', 'Self-help/Spirituality ', '@maggiegilewicz ', 'A Different Kind Of Guide To Navigating The Ups And Downs Of Life', 'genre-nonfiction', 'age-adult'],
['Anders Kingsley', 'https://www.amazon.com/Secret-Second-Zeus-Anders-Kingsley-ebook/dp/B01N1N5LDC/ref=cm_cr_arp_d_pl_foot_top?ie=UTF8', 'The Secret of the Second Zeus', 'Thrillers', '@Anders_Kingsley', 'A victim’s last message—a cryptic riddle scrawled in his own blood on the back of a group photo.', 'genre-suspense', 'age-adult'],
['Kevin Barrick', 'http://www.amzn.com/B084C2QJVL/', 'Creativity Brewing: 30 Short Stories Hand-Roasted to Perfection', 'Fantasy', '@KevinBarrick ', 'Enjoy a selection of flash fiction stories blended together for a perfect brew of creativity! ', 'genre-speculative', 'age-adult'],
['Sein Ares', 'https://mybook.to/RedMoon', 'Red Moon (Arcana of the Crimson Era Book one)', 'Dark Fantasy', '@einsuniel', 'A world ruled by Demons, humanity is no more, magic is life, a Verdant Earth but...is it a better world?', 'genre-speculative', 'age-adult'],
        ['Wesley Stein', 'https://www.amazon.com/Wesley-Stein/e/B084JH6713/', 'The Islanders', 'Adventure ', '@wesstein', 'Three sisters, marooned on a lost island, find a secret village of hedonists.', 'genre-suspense', 'age-adult'],
['Dzintra Sullivan ', 'https://www.amazon.com/Once-Upon-Death-Days-Book-ebook/dp/B07SVN7ZDX/ref=mp_s_a_1_1?dchild=1&keywords=once+upon+a+death&qid=1587505708&s=books&sr=1-1-catcorr', 'Once upon a Death. -  Bk1 in Days of Death series. ', 'Cozy Mystery', '@dzintrasullivan', 'What happens when the Reaper decides to retire to a small town and live a human life? Grab your scythe, this is going to get funny. ', 'genre-suspense', 'age-adult'],
        ['Corey E. Toomey', 'https://www.amazon.com/Heathers-Mannequin-Novel-Corey-Toomey-ebook/dp/B083NM9TLS', 'Heather&rsquo;s Mannequin', 'Dystopian fiction', '@coreytoomey0', 'Combining elements of dystopian fiction and war drama, with psychological underpinnings, Heather&rsquo;s Mannequin is a young woman&rsquo;s odyssey to find love and self-acceptance.', 'genre-speculative', 'age-adult'],
['Alexa Sommers', 'https://www.amazon.com/-/e/B083WMR1GR', 'Level Up', 'Romantic Erotica', '@alexasommers', 'Dillon Strands is not your typical college co-ed. While others are chasing down parties and partners, Dillon and his friends are studying, gaming and stuck in a rut, their social lives hanging by a thread. Enter Suzanne Andrews, a gamer girl with a plan.', 'genre-love', 'age-adult'],
['Dillon Walker ', 'https://bit.ly/fft-paperback', 'Friends, Family And Other Tragedies ', 'Women’s Fiction', '@dwwriter1004', 'From the outside, 18-year-old Andy looks like she has it all, but after years of endless grief and abuse, it’s time for her to face her fears and escape the pain. ', 'genre-suspense genre-love', 'age-adult'],
['Susan M Lane', 'https://www.olympiapublishers.com/books/secrets ', 'SECRETS', 'Contemporary Fiction', '@DutrizacSue', 'A collection of high intensity short stories accentuating the struggles of ordinary people as they are forced to face their darkest secrets. ', 'genre-suspense', 'age-adult'],
['Victoria Marswell', 'https://www.amazon.com/dp/B0893PM7YK', 'The Counterfeiter&rsquo;s Daughter', 'Romantic Suspense', '@vicmarswell', 'A psychologist is compelled to deal with her father’s crime in Germany when she inherits a priceless artifact. She must evade smugglers and relic hunters, long enough to discover the truth, while depending on a man mixed up in it all. ', 'genre-suspense genre-love', 'age-adult'],
['DGF Blackwell', 'https://www.amazon.co.uk/gp/product/B07YBMBCHJ', 'Captive', 'Crime', '@blackwell_dgf', 'Marie takes matters into her hands and challenges Paul, being drawn into a deadly and twisted game that endangers her own life, bringing up painful memories of a previous case.', 'genre-suspense', 'age-adult'],
['Shenae Chase', 'https://www.amazon.com/Love-Mentalist-Shenae-Chase-ebook/dp/B07NVY1VGZ/ref=cm_cr_arp_d_pl_foot_top?ie=UTF8 ', 'The Love Mentalist ', 'Romance', '@ShenaeChase', 'Love can be wondrous, magical but also reckless, but when a woman dates a man 15 years younger it can also be frowned upon by society. She didn’t intend to fall in love with him but she will make the ultimate sacrifice for him.', 'genre-love', 'age-adult'],
['Stuart McDonald', 'https://www.stuartmcdonaldauthor.co.uk/', '&ldquo;Turtle Trouble&rdquo; and &ldquo;The Witches&rsquo; Tea Party&rdquo;', 'Children’s Literature', '@wwwstuartmcdon1', 'I write children&rsquo;s rhyming picture books for 3-7yrs. &ldquo;Turtle Trouble&rdquo; is about recycling and pollution and &ldquo;The Witches&rsquo; Tea Party&rdquo; is about friendship and sharing.', 'genre-speculative', 'age-kidlit'],
['Christopher Aggett', 'https://www.amazon.co.uk/Christopher-John-Aggett/e/B081NLG3JL/', 'Deep', 'Horror / Suspense / Thriller', '@CJAggett', 'A young woman is lost and in danger, in a world that crumbles around her. Can she find her father and can she do it before the overspill of military experiments consume the city.', 'genre-speculative', 'age-adult'],
['B.A. Ellison', 'https://www.baellibooks.com/about', 'A Tale of Shadow and Shroud', 'Epic Fantasy | New Adult | Grimdark', '@BAEllison4', 'A world full of magic and Eedon Rath-ni (Ravens, Eagles, Dragons, and Hawks) beckons all Dravens to fight in a coming war between a notorious terrorist, and an all powerful house of tyrants. On which side will you fall? Which Eedon Rath-ni will you ride, and how will you fight? ', 'genre-speculative', 'age-na'],
['Kelly Miller', 'https://www.amazon.com/dp/B07SWY9RCH/ref=dp-kindle-redirect?_encoding=UTF8&btkr=1', 'Death Takes a Holiday at Pemberley', '&lsquo;Austenesque&rsquo; Historical Romance', '@kellyrei007', 'What will the master of Pemberley do when confronted with the mercurial whims of an all-powerful angel?', 'genre-love', 'age-adult'],
['Nora Edington', 'https://books2read.com/it-was-you-nora-edington', 'It Was You: Lily&rsquo;s Story', 'Romance', '@NoraEdington', 'After a heartbreaking betrayal, Lily ends up at a party where she drowns her sorrows in the bed of a sexy stranger.', 'genre-love', 'age-adult'],
        ['J.C. Paulson', 'https://www.amazon.com/Adams-Witness-Thrilling-Mystery-Romance-ebook/dp/B072QZM3C4', 'Adam&rsquo;s Witness/Adam and Grace Series', 'Mystery/crime/social issues/love', '@joanne_paulson', 'When the Pride Choir is banned from performing at the cathedral, reporter Grace Rampling investigates only to stumble over the bishop&rsquo;s corpse&hellip;and to meet Sgt. Adam Davis.', 'genre-suspense genre-love', 'age-adult'],
['Winnifred Tataw', 'https://www.amazon.com/Winnifred-Tataw/e/B07N8MQFNY/ref=dp_byline_cont_book_1', 'Child of Tempus, Descendants of Time and Death /(series:The Gods’ Scion)', 'Young Adult and Fantasy ', '@Winsbooks', 'Family bonds are tested as the gifted children of the Gods are put in the middle of a furry of world terrors. ', 'genre-speculative', 'age-ya'],
['Victoria J. Price', 'http://mybook.to/TheThirdSun', 'The Third Sun: Daughter of the Phoenix Book One', 'YA Fantasy', '@victoria_jprice', 'When Fia falls into a magical parallel world, nothing is as it first seems - the sun is dying, an ancient darkness is whispering to her and if she can&rsquo;t find a way home, she&rsquo;ll be trapped in Ohinyan forever.', 'genre-speculative', 'age-ya'],
['LT Ward', 'https://www.amazon.com/Voyagers-Third-Ghost-Yvonne-Ventresca-ebook/dp/B083C4WPR5/ref=sr_1_1?crid=1TBI0CLSECUDB&dchild=1&keywords=voyagers+third+ghost&qid=1587607380&sprefix=voyagers+the+thir%2Caps%2C173&sr=8-1', 'Voyagers: The Third Ghost', 'Anything', '@Ltward2', 'Journey into the past…Ten authors explore the past, sending their young protagonists on harrowing adventures.', 'genre-suspense genre-speculative', 'age-adult'],
['Johnny Carlson', 'https://www.amazon.com/Johnny-Carlson/e/B00N5AGM0Y', 'Secret Histories, The Fragile and The Strong', 'Historical/fantasy, paranormal/vampire love stories', '@Johnny', 'Secret Histories: Some great stories including gay and historical fantasy. The Fragile and The Strong: Great vampire stories - Love is the theme.', 'genre-speculative genre-love', 'age-adult'],
        ['Magnolia', 'https://sheslaysdragons.com/', 'She Slays Dragons', 'Memoir', '@magnolia3169', 'A Fairytale turned Horror Story in Alaska', 'genre-nonfiction', 'age-adult'],
['Zoe Allison', 'https://www.amazon.co.uk/-/e/B085LPBH4W?ref_=pe_1805931_64024261', 'Impervious', 'Romance', '@zoeallisonauth1', 'She excels as an assassin. Will she fail at love?', 'genre-love', 'age-adult'],
['Anna Mocikat', 'https://www.amazon.com/Anna-Mocikat/e/B00IW3OO9A?ref=sr_ntt_srch_lnk_1&qid=1587747466&sr=1-1 ', 'Shadow City, Behind Blue Eyes', 'Sci-Fi', '@anna_mocikat', 'After a horrific catastrophe, the survivers in post-apocalyptic LA face a threat from another dimension which threatens to exterminate what is left of humanity.', 'genre-speculative', 'age-adult'],
        ['The Organic Poet', 'https://www.theorganicpoet.com/', 'Theorganicpoet.com', 'We have M/F within our group', '@poetorganic', 'The Organic Poet is a movement. A safe and empathetic space. Together we have only one goal in mind……to make the world a better place - for all!', 'genre-speculative', 'age-adult'],
['Johnny Carlson / Jannie Coats', 'https://www.amazon.com/BUT-CAN-DREAM-Jannie-Coats-ebook/dp/B0076CNLBK/ref=sr_1_2?dchild=1&keywords=Jannie+Coats&qid=1587849057&sr=8-2', 'But I Can Dream Can&rsquo;t I', 'Love and disdain and historical fantasy', '@johnny45842969', 'A mix of strange tales - an unusual read', 'genre-speculative genre-love', 'age-adult'],
        ['Solomon', 'https://www.amazon.com/dp/0578577828', 'Things Happen Don&rsquo;t Let It Get To You', 'Poetry', '@solomon_poetry', 'Things Happen is an anthology of poetry that takes you into the mind of a person that is trying to find themselves and their purpose in life. ', 'genre-fiction', 'age-adult'],
['Carrie Baker', 'https://www.amazon.com/Carrie-Baker/e/B081Y5NQ7W?ref=sr_ntt_srch_lnk_1&qid=1587914983&sr=8-1', 'Heron&rsquo;s Point Novella series', 'Young Adult', '@CarrieBWriter', 'Visit the fictional beach town of Heron&rsquo;s Point and meet new and returning characters while they navigate life and all the lessons to be learned.', 'genre-fiction', 'age-ya'],
['Jessaca Willis', 'https://books2read.com/u/4XXwKN', 'Blood Awakens', 'Supernatural Dystopian Post-Apocalyptic', '@jessacawillis', 'Supernatural powers, devastated nations, and a whole lot of blood.', 'genre-speculative', 'age-adult'],
['J.G. MacLeod', 'https://www.amazon.com/-/e/B07F25Z73T', 'The Future Bride, Abalone, The Adventures of Lady Ellen Montagu', 'Romcom, Litfic, Histfic', '@jgmacleodauthor', 'Brigid MacDonald spends her days working in a coffee shop until she&rsquo;s transported to 15th-century Scotland where she&rsquo;s being dressed for a wedding she didn&rsquo;t consent to!', 'genre-love', 'age-adult'],
        ['Derek R King', 'https://www.amazon.com/Derek-R.-King/e/B07MPBQNCH%3Fref=dbs_a_mng_rwt_scns_share', 'The Life and Times Of Clyde Kennard / Winter Chills', 'Fiction / Non fiction / Poetry', '@DerekRKing2', 'True Story: &ldquo;Clyde Kennard attempts college enroll, but gets sentenced to 7 years hard labour at State Penitentiary instead.&rdquo; Why? And what happens to him.', 'genre-fiction genre-nonfiction', 'age-adult'],
        ['David Middleham', 'https://amazon.com/author/davidmiddleham', 'Strange Colours', 'Poetry/Misc.', '@DavidMiddleham', 'A collection of poems about love and its many colours.', 'genre-fiction', 'age-adult'],
        ['Tyler Hayes', 'https://tyler-hayes.com', 'The Imaginary Corpse', 'Fantasy', '@the_real_tyler', 'A dinosaur detective in the land of unwanted ideas battled trauma, anxiety, and the first serial killer of imaginary friends.', 'genre-speculative', 'age-adult'],
        ['Nathan Rivers', 'https://www.amazon.co.uk/dp/B089B58VN2', '&ldquo;Divided Loyalties&rdquo; London Ganglands book two', 'Crime fiction', '@crimerivers', 'A tough uncompromising novel of a brutal world where respect and loyalty from those around you are often the only things which will keep you alive.', 'genre-suspense', 'age-adult'],
        ['Deirdre Allen Timmons', 'http://www.deirdretimmons.com', 'Brain Candy', 'Memoir ', '@timmonsdeirdre', 'A bold, hilarious. warts-and-all memoir about one woman’s battle  with an inoperable, malignant, and unwelcome brain tumor. ', 'genre-nonfiction', 'age-adult'],
['Titan Frey ', 'https://authortitanfrey26.wixsite.com/titanfrey', 'Reflection: The Paul Mann Story, A Player&rsquo;s Path: A Story About Life and Football', 'YA, Historical Fiction, Coming of Age', '@Authortitanfrey', 'In a world where days are tough, and the rain pours, remember the sun will shine again. ', 'genre-fiction', 'age-ya'],
['Philip Woodrow Lewis', 'https://www.amazon.co.uk/-/e/B08BCNG2GH', 'Kung Fu Fighting Vampire Mermaids-Globe Zero', 'Urban Fantasy', '@writerwoodrow', 'Just when you think you&rsquo;ve seen it all. Journey into a fantastical future with Kung Fu Fighting Vampire Mermaids - Globe Zero', 'genre-speculative', 'age-adult'],
        ['Lori Yerxa', 'https://www.amazon.com/dp/1692325019  ', 'Pushing Through', 'Biography', '@loriyerxa11', 'The Transformation of a Shattered Soul ', 'genre-nonfiction', 'age-adult'],
        ['Clara Martin', 'https://www.amazon.com/Clara-Martin/e/B07Y3Z2W1F/', 'The Revolution Series ', 'Fantasy ', '@writesclara', 'A world where Fae rule - a kickass and disabled heroine. Welcome to the world of the Revolution series.', 'genre-speculative', 'age-adult'],
        ['Anoop Kumar Singh', 'https://motleydotfool.wordpress.com/', 'Sundry Chronicles', 'Fiction', '@anoop16kumar', 'God&rsquo;s very own child, disowned by him for I didn&rsquo;t turn out as expected. Anyway, I&rsquo;m an atheist. ', 'genre-fiction', 'age-adult'],
        ['Rachel Glickler ','https://www.amazon.com/dp/1701201674/ref=cm_sw_r_cp_api_i_HV-BFb8MWWZ8J','The Cull ','Dystopian ','@rachelglickler','Two separate groups of survivors race for a cure in a world decimated by a supervirus with horrifying effects.','genre-speculative','age-adult'],
        ['Samantha Kroese','https://www.amazon.com/Samantha-Kroese/e/B07RWLTQCS/ref=dp_byline_cont_ebooks_1','Fading Lights Trilogy (Forbidden, Unspoken, Taboo), Regret, Ladykiller, Restless Dreams of Darkness','Dark Fantasy','@AuthorKroese','Do you like chills in your fantasy? Characters that will haunt you? Tales of courage and hope in the depths of darkness? Demons, demi-gods, pirates, assassins, vampires? Apocalyptic worlds? Check out my 4-5 star books.','genre-speculative','age-adult'],
        ['Julie Kusma ','https://www.amazon.com/author/juliekusma','Stuck That Way and Other Quandaries','Speculative Fiction- paranormal horror ','@juliekusma','A collection  of short stories exploring the rebellious, vengeful, even primal part of us that lurks within and covets a moment in the light. ','genre-speculative','age-adult'],
        ['Lord Veil','https://www.amazon.com/dp/1719855242/ref=cm_sw_r_cp_api_fab_Ag-CFb1F6PABP','Presenting: The Aftermath','Action/Horror/Comedy/sci-fi','@veil_lord','What happens when a devilishly handsome world famous rock star (who is much more than he seems) is the only one who can save the day against irradiated zombielike thugs after a massive terror attack wipes out the US East coast?','genre-speculative','age-adult'],
        ['Sabrina Oyinloye ','https://www.amazon.com/dp/B088PZTB4W','The Hidden Scar: Tokophobia','#ContemporaryRomance ','@OyinloyeSabrina ','The consequences of a one night of passionate encounter forced a reclusive, professional soccer player to reckon with a scar so deep, and a past deeply buried for seventeen years!','genre-love','age-adult'],
        ['SV Filice','https://www.amazon.com/gp/aw/d/B08FC9B49T','The Summoning, The Prophecy (Moral Bloodlines Trilogy)','YA/NA Fantasy','@svfilice','A rich urban fantasy surrounding a camp for angel descendants and the fight to balance morality','genre-speculative','age-ya'],
        ['Anna J Walner','https://Annajwalner.com/garkain','Garkain: Book One of The Uluru Legacy Series','YA Fantasy','@AnnaJWalner','Defy your expectations and enter a world lost for centuries. A secret society exists in Australia, hidden to human eyes. A place where vampires still exist. A girl in search of family will find more than she ever thought possible.','genre-speculative','age-ya'],
        ['Cara Roman','https://www.amazon.com/Cara-Roman/e/B01MUFLHP6','Without a Wolf, Running From the Wolf, Definitely Memorable, Still Yours ','Romance ','@CaraRomanAuthor','Steamy sexy romance with happy ever afters ','genre-love','age-adult'],
        ['Arti','https://instagram.com/arts_by_arti','Arts by Arti','Poetry and nonfiction short pieces','@','Poetic arts','genre-fiction genre-nonfiction','age-adult'],
        ['Rose J. Fairchild ','https://www.rosejfairchild.com','Short Stories','Adult Dark Fiction','@RoseJFairchild','Worlds painted in shades of lust: for revenge, freedom, love, power, and fleshy things.','genre-speculative genre-love','age-adult']
    ];


    // DIRECTORY FUNCTIONS 

    var dirQLHTML = '';
    var dirFrHTML = '';

    for (var i = 0; i < dirQL.length; i++) {
        var q = dirQL[i];

        dirQLHTML += '<tr class="peer">';
        dirQLHTML += '<td class="peer-name">' + dirQL[i][0] + '</td>';
        dirQLHTML += '<td class="peer-twitter" ><a href="https://twitter.com/' + dirQL[i][4].replace('@', '') + '" target="_blank"><span class="hide-SEO">' + dirQL[i][4] + '</span><span class="icon twitter"></span></a></td>';
        dirQLHTML += '<td class="peer-genre ' + dirQL[i][7] + ' ' + dirQL[i][6] + '">' + dirQL[i][3] + '</td>';
        dirQLHTML += '<td class="peer-books"><a class="peer-title" href="#">' + dirQL[i][2] + '<span class="peer-plus">&plus;</span><span class="peer-minus">&minus;</span></a><span class="peer-pitch"><span class="peer-title-pitch">' + dirQL[i][2] + '</span><span class="peer-genre-pitch">' + dirQL[i][3] + '</span>' + dirQL[i][5] + '</span></td>';
        dirQLHTML += '<td><a class="peer-buy" href="' + dirQL[i][1] + '" target="_blank">Buy &rsaquo;</a></td>';
        dirQLHTML += '</tr>';

    }

    $('.qi-lit-data').html(dirQLHTML);

    for (var j = 0; j < dirFr.length; j++) {
        var q = dirFr[j];

        dirFrHTML += '<tr class="peer">';
        dirFrHTML += '<td class="peer-name">' + dirFr[j][0] + '</td>';
        dirFrHTML += '<td class="peer-twitter" ><a href="https://twitter.com/' + dirFr[j][4].replace('@', '') + '" target="_blank"><span class="hide-SEO">' + dirFr[j][4] + '</span><span class="icon twitter"></span></a></td>';
        dirFrHTML += '<td class="peer-genre ' + dirFr[j][7] + ' ' + dirFr[j][6] + '">' + dirFr[j][3] + '</td>';
        dirFrHTML += '<td class="peer-books"><a class="peer-title" href="#">' + dirFr[j][2] + '<span class="peer-plus">&plus;</span><span class="peer-minus">&minus;</span></a><span class="peer-pitch"><span class="peer-title-pitch">' + dirFr[j][2] + '</span><span class="peer-genre-pitch">' + dirFr[j][3] + '</span>' + dirFr[j][5] + '</span></td>';
        dirFrHTML += '<td><a class="peer-buy" href="' + dirFr[j][1] + '" target="_blank">Buy &rsaquo;</a></td>';
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

    $('.show-filters').on('click', function (e) {
        e.preventDefault();
        $('.hide-filters').addClass('show');
        $('.show-filters').removeClass('show');
        $('.filters').slideDown();
    });

    $('.hide-filters').on('click', function (e) {
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
        } else if ($(this).hasClass('genre-fiction')) {
            $('.peer-btn.genre-fiction').addClass('active');
            $('.peer-genre.genre-fiction').parent().removeClass('hide-genre');
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


    // DRAWER
    setTimeout(function () {
        randomRec();

        setTimeout(function () {
            $('.ad-drawer').removeClass('closed');
        }, 500);
    }, 250);

    $('body').on('click', '.ad-reload', function (e) {
        e.preventDefault();
        randomRec();
    });

    function randomRec() {
        var rQ = Math.floor(Math.random() * dirQL.length); // 0 to length
        var rA = Math.floor(Math.random() * dirFr.length);

        $('.ad-queer-title span').html(dirQL[rQ][2]);
        $('.ad-ally-title span').html(dirFr[rA][2]);

        $('.ad-queer-title').attr('href', dirQL[rQ][1]);
        $('.ad-ally-title').attr('href', dirFr[rA][1]);

        $('.ad-queer-twitter').attr('href', 'https://twitter.com/' + dirQL[rQ][4].replace('@', ''));
        $('.ad-ally-twitter').attr('href', 'https://twitter.com/' + dirFr[rA][4].replace('@', ''));

        $('.ad-queer-twitter span').html(dirQL[rQ][0] + ' (<em>' + dirQL[rQ][3] + '</em>)');
        $('.ad-ally-twitter span').html(dirFr[rA][0] + ' (<em>' + dirFr[rA][3] + '</em>)');
    }

});