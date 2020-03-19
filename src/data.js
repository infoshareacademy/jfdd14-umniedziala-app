/*  favorite: false,
    priceRange: 'expensive', 'medium', 'cheap', 'free'
    type: 'nature', 'sport', 'culture', 'restaurant' */

const data = [
    {
        name: 'Park Oliwski',
        favorite: false,
        priceRange: 'free',
        type: 'nature',
        img: 'https://www.zatokapiekna.pl/slir/w730/images/uploads/articles/584/24-park_oliwski.jpg',
        location:'Gdańsk',
        descriptionShort: 'Zabytkowy park w gdańskiej dzielnicy Oliwa, nad Potokiem Oliwskim.',
        descriptionLong: 'Początkiem dzisiejszego parku był przyklasztorny ogród założony przez cystersów. Prawdopodobnie był położony po wschodniej stronie starej siedziby opatów z XV wieku, dalej do Zatoki Gdańskiej rozciągał się nadmorski las, który rozcinał Potok Oliwski. Po wzniesieniu przez opata Franciszka Zaleskiego pod koniec pierwszej połowy XVII wieku nowej siedziby opatów, ogród został poszerzony w kierunku południowo-zachodnim, stykając się ze starszym ogrodem klasztornym. ajmłodszymi częściami parku są: położony na południowo-zachodnim krańcu fragment pomiędzy ul. Opata Jacka Rybińskiego a budynkiem Gdańskiego Seminarium Duchownego - dawny ogród użytkowy cysterskiego konwentu; oraz 2-hektarowy obszar dawnego folwarku Saltzmanna z XVIII-XIX wieku wokół dworu, przejętego w 2001 na biura przez firmę Doraco, obsadzony m.in. grabami pospolitymi i kasztanowcami czerwonymi Briotti, bukszpanem, lawendą wąskolistną i tawulcem pogiętym. Obszar ten udostępniono 22 maja 2015. Na obszarze parku znajduje się również Spichlerz Opacki (Oddział Etnografii Muzeum Narodowego w Gdańsku)',
    },
    {
        name: 'Rezerwat Mewia Łacha',
        favorite: false,
        priceRange: 'free',
        type: 'nature',
        img: 'https://pomorskie.travel/image/journal/article?img_id=242660&t=1542202897474',
        location: 'Gdańsk',
        descriptionShort: 'Rezerwat Mewia Łacha na Wyspie Sobieszewskiej to naturalne siedlisko fok i ptaków chronione przez ornitologów z Grupy KULING.',
        descriptionLong: 'Rezerwat chroni miejsca lęgowe różnych gatunków rybitw i siedliska żerowania i odpoczynku ptaków siewkowych. Od roku 2007 jest to ponownie jedyne w Polsce miejsce gnieżdżenia się rybitw czubatych - ok. 570 par (2009). Gniazdują tu również rybitwy białoczelne, rybitwy rzeczne, sieweczki obrożne, ostrygojady, w przeszłości na łachach (piaszczystych wyspach) gniazdowały także kolonie mew srebrzystych i śmieszek, w rezerwacie notowano również lęgi rybitw popielatych oraz jedyny w Polsce przypadek lęgu sieweczki morskiej.'
    },
    {
        name: 'Stare Miasto',
        favorite: false,
        priceRange: 'free',
        type: 'culture',
        img: 'https://meteor-turystyka.pl/images/places/0/54.jpg',
        location:'Gdańsk',
        descriptionShort: 'Część gdańskiej dzielnicy Śródmieście. Jest to najstarszy obszar miasta.',
        descriptionLong: 'Gdańskie Stare Miasto to dzielnica o długiej historii i wielu walorach turystycznych. Prawa miejskie zostały nadane jeszcze za panowania księcia Świętopełka. W XIII wieku okolica odgrywała ważną rolę w funkcjonowaniu grodu, przybywało też niemieckich osadników i nowocześnie pojmowanej myśli handlowej.'
    },
    {
        name: 'Europejskie Centrum Solidarności',
        favorite: false,
        priceRange: 'cheap',
        type: 'culture',
        img: 'https://ocdn.eu/pulscms-transforms/1/kJRk9kpTURBXy8yNjUyOTVhMGI4ODI2Y2ZkMTc2NWYyN2QyNjczZWFkZS5qcGeTlQMADs0D580CMZMFzQMUzQG8kwmmM2Q2MWJmBoGhMAE/europejskie-centrum-solidarnosci-ecs-w-gdansku.jpg',
        location:'Gdańsk',
        descriptionShort: 'Muezum poświęcone historii Solidarności oraz zmianom, jakie dokonały się pod jej wpływem w Europie Środkowej i Wschodniej,',
        descriptionLong: 'Ekspozycja zajmuje niemal 3000 m kw. na I i II kondygnacji budynku. Podzielona jest na siedem sal. Zwiedzający spędzają tu średnio 2 godziny. Ta nowoczesna ekspozycja ma charakter narracyjny. Zwiedzający zanurza się w historii opowiadanej przez archiwalne przedmioty, dokumenty, rękopisy, zdjęcia i projekcje wideo, interaktywne instalacje... Każdy, kto odwiedza tę wystawę, ma szansę odnaleźć swoje własne odniesienia do historii i współczesności. Mnogość narracji pozwala tu po wielokroć wracać, za każdym razem odnajdować nową opowieść.'
    },
    {
        name: 'Plaża w Brzeźnie',
        favorite: false,
        priceRange: 'free',
        type: 'nature',
        img: 'https://visit360.pl/wp-content/uploads/2019/05/Visit360_pl_Gdansk_2019-05-01_zdjecia_z_drona_DJI_0225.jpg',
        location:'Gdańsk',
        descriptionShort: 'Plaża miejska usytuowana w gdańskiej dzielnicy Brzeźno',
        descriptionLong: 'Kąpielisko Molo Gdańsk Brzeźno w każdym sezonie otrzymuje wyróżnienie Krajowego Programu Błękitna Flaga w Polsce, co świadczy o wyjątkowej czystości wody jak i plaży. Jest ona także wyjątkowa pod względem bezpieczeństwa, kąpielisko posiada stały monitoring oraz całodobową ochronę. Nad bezpieczeństwem plażowiczów w sezonie letnim codziennie czuwają ratownicy z czterech stanowisk ratowniczych.'
    },
    {
        name: 'Muzeum II Wojny Światowej',
        favorite: false,
        priceRange: 'cheap',
        type: 'culture',
        img: 'https://bi.im-g.pl/im/87/f3/14/z21968007V,Gdansk--Muzeum-II-Wojny-Swiatowej.jpg',
        location:'Gdańsk',
        descriptionShort: 'Sercem Muzeum jest wystawa główna zlokalizowana 14 metrów pod ziemią',
        descriptionLong: 'Muzeum II Wojny Światowej powstało w Gdańsku przy placu Władysława Bartoszewskiego, nad Motławą, blisko historycznego centrum miasta. Muzeum ma za cel upowszechniać wiedzę o II wojnie światowej oraz służyć pielęgnowaniu pamięci o jej ofiarach i bohaterach; ma być nowoczesnym obiektem pod względem formy, a także prowadzonej działalności wystawienniczej, edukacyjnej i badawczej.'
    },
    {
        name: '',
        favorite: false,
        priceRange: '',
        type: '',
        img: 'url',
        location:'Gdańsk',
        descriptionShort: '',
        descriptionLong: ''
    },
    {
        name: '',
        favorite: false,
        priceRange: '',
        type: '',
        img: 'url',
        location:'Gdańsk',
        descriptionShort: '',
        descriptionLong: ''
    },
    {
        name: '',
        favorite: false,
        priceRange: '',
        type: '',
        img: 'url',
        location:'Gdańsk',
        descriptionShort: '',
        descriptionLong: ''
    },
    {
        name: '',
        favorite: false,
        priceRange: '',
        type: '',
        img: 'url',
        location:'Gdańsk',
        descriptionShort: '',
        descriptionLong: ''
    },

]