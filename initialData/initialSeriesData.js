let initialSeriesData = [
    {
        title: 'Secret Level',
        description: 'Adult animated series of original short stories which are set within the worlds of beloved video games. Each episode serves as a gateway to a new adventure, unlocking exciting worlds from beloved gaming classics and highly anticipated new titles.',
        genre: 'Animation',
        release_year: '2024',
        image: 'https://image.tmdb.org/t/p/w500/856MRq23grNxpeVl1PdFgmmLiT0.jpg'
    },
    {
        title: 'Star Wars: Skeleton Crew',
        description: 'Four ordinary kids search for their home planet after getting lost in the Star Wars galaxy.',
        genre: 'Action & Adventure',
        release_year: '2024',
        image: 'https://image.tmdb.org/t/p/w500/srQbJhLRKoAwRrNN5ga7webPHbC.jpg'
    },
    {
        title: 'Virgin River',
        description: 'After seeing an ad for a midwife, a recently divorced big-city nurse moves to the redwood forests of California, where she meets an intriguing man.',
        genre: 'Drama',
        release_year: '2019',
        image: 'https://image.tmdb.org/t/p/w500/jSm9HdxUy9PpsJt0mVAQ0y7gbDJ.jpg'
    },
    {
        title: 'Yellowstone',
        description: 'Follow the violent world of the Dutton family, who controls the largest contiguous ranch in the United States. Led by their patriarch John Dutton, the family defends their property against constant attack by land developers, an Indian reservation, and America’s first National Park.',
        genre: 'Western',
        release_year: '2018',
        image: 'https://image.tmdb.org/t/p/w500/s4QRRYc1V2e68Qy9Wel9MI8fhRP.jpg'
    },
    {
        title: 'Light Shop',
        description: 'In a mysterious shop that sells lamps, the dead may return to the world of the living, while the living may not walk out alive.',
        genre: 'Mystery',
        release_year: '2024',
        image: 'https://image.tmdb.org/t/p/w500/iRgH73xibpeNZ8zzPDkIpxuoKgC.jpg'
    },
    {
        title: 'The Day of the Jackal',
        description: 'An unrivalled and highly elusive lone assassin, the Jackal, makes his living carrying out hits for the highest fee. But following his latest kill, he meets his match in a tenacious British intelligence officer who starts to track down the Jackal in a thrilling cat-and-mouse chase across Europe, leaving destruction in its wake.',
        genre: 'Action & Adventure',
        release_year: '2024',
        image: 'https://image.tmdb.org/t/p/w500/4hSnGq014MGdxCOMWBwyvKoDjrF.jpg'
    },
    {
        title: 'The Dragon Prince',
        description: 'An extraordinary discovery inspires two human princes and an elven assassin to team up on an epic quest to bring peace to their warring lands.',
        genre: 'Animation',
        release_year: '2018',
        image: 'https://image.tmdb.org/t/p/w500/d7PIRa6ez7ZEl9D4JUrnSsmcnVD.jpg'
    },
    {
        title: 'Arcane',
        description: 'Amid the stark discord of twin cities Piltover and Zaun, two sisters fight on rival sides of a war between magic technologies and clashing convictions.',
        genre: 'Animation',
        release_year: '2021',
        image: 'https://image.tmdb.org/t/p/w500/abf8tHznhSvl9BAElD2cQeRr7do.jpg'
    },
    {
        title: 'Dan Da Dan',
        description: 'In a bet to prove whether ghosts or aliens exist, two high schoolers face terrifying paranormal threats, gain superpowers and maybe even fall in love?!',
        genre: 'Comedy',
        release_year: '2024',
        image: 'https://image.tmdb.org/t/p/w500/6qfZAOEUFIrbUH3JvePclx1nXzz.jpg'
    },
    {
        title: 'The Simpsons',
        description: 'Set in Springfield, the average American town, the show focuses on the antics and everyday adventures of the Simpson family; Homer, Marge, Bart, Lisa and Maggie, as well as a virtual cast of thousands. Since the beginning, the series has been a pop culture icon, attracting hundreds of celebrities to guest star. The show has also made name for itself in its fearless satirical take on politics, media and American life in general.',
        genre: 'Comedy',
        release_year: '1989',
        image: 'https://image.tmdb.org/t/p/w500/vHqeLzYl3dEAutojCO26g0LIkom.jpg'
    },
    {
        title: 'One Hundred Years of Solitude',
        description: 'In the mythical town Macondo, seven generations of the Buendía family navigate love, oblivion and the inescapability of their past — and their fate.',
        genre: 'Drama',
        release_year: '2024',
        image: 'https://image.tmdb.org/t/p/w500/oX8CAf3eyCknNPXX1IxdmAuv6jH.jpg'
    },
    {
        title: 'Silo',
        description: 'In a ruined and toxic future, thousands live in a giant silo deep underground. After its sheriff breaks a cardinal rule and residents die mysteriously, engineer Juliette starts to uncover shocking secrets and the truth about the silo.',
        genre: 'Sci-Fi & Fantasy',
        release_year: '2023',
        image: 'https://image.tmdb.org/t/p/w500/tlliQuCupf8fpTH7RAor3aKMGy.jpg'
    },
    {
        title: 'Laid',
        description: 'A woman finds out her former lovers are dying in unusual ways and must go back through her sex timeline to confront her past in order to move forward.',
        genre: 'Comedy',
        release_year: '2024',
        image: 'https://image.tmdb.org/t/p/w500/eMTRv22O96xTlJDrRHD5dPmGsr8.jpg'
    },
    {
        title: 'Dexter: Original Sin',
        description: "In 1991 Miami, Dexter Morgan transitions from student to avenging serial killer. When his bloodthirsty urges can't be ignored any longer, Dexter must learn to channel his inner darkness. With the guidance of his father, Harry, he adopts a Code designed to help him find and kill people who deserve to be eliminated from society without getting on law enforcements' radar.",
        genre: 'Crime',
        release_year: '2024',
        image: 'https://image.tmdb.org/t/p/w500/j5bP7spdfS0NpDLKDlqJYyJPi1j.jpg'
    },
    {
        title: 'Riverside Code at Qingming Festival',
        description: "During the Northern Song Dynasty, the Zhao family—comprising Zhao Buyou, his wife Wen Yue, and their three children—lives in Bianliang's Que'er Alley. Zhao Buyou, a lowly clerk, seeks a simple life, while Wen Yue is focused on improving their living conditions. Despite frequent disagreements, the family remains close. An unexpected event thrusts them into a significant case, leading them on a journey of personal growth and discovery, while uncovering deeper truths and protecting their community.",
        genre: 'Mystery',
        release_year: '2024',
        image: 'https://image.tmdb.org/t/p/w500/5UIrFvk4JSjVCon6YoSO3jHyUkn.jpg'
    },
    {
        title: 'Who Is She',
        description: 'A romantic music coming-of-age drama about grandmother Oh Mal-soon, who turns into a 20-year-old Oh Doo-ri overnight and enjoys her shining prime once again.',
        genre: 'Comedy',
        release_year: '2024',
        image: 'https://image.tmdb.org/t/p/w500/yU6W5lgmnUQ5RkhhKD67Blgfl1r.jpg'
    }
];


module.exports = initialSeriesData