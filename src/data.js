/*  "favorite": false,
    "priceRange": 'expensive', 'medium', 'cheap', 'free'
    "type": 'natura', 'sport', 'kultura', 'restauracja' */

const data = [
  {
    "name": 'Park Oliwski',
    "id": 1,
    "favorite": false,
    "priceRange": 'darmowe',
    "type": 'natura',
    "img": 'https://www.zatokapiekna.pl/slir/w730/images/uploads/articles/584/24-park_oliwski.jpg',
    "location":'Gdańsk',
    "descriptionShort": 'Zabytkowy park w gdańskiej dzielnicy Oliwa, nad Potokiem Oliwskim.',
    "descriptionLong": 'Początkiem dzisiejszego parku był przyklasztorny ogród założony przez cystersów. Prawdopodobnie był położony po wschodniej stronie starej siedziby opatów z XV wieku, dalej do Zatoki Gdańskiej rozciągał się nadmorski las, który rozcinał Potok Oliwski. Po wzniesieniu przez opata Franciszka Zaleskiego pod koniec pierwszej połowy XVII wieku nowej siedziby opatów, ogród został poszerzony w kierunku południowo-zachodnim, stykając się ze starszym ogrodem klasztornym. ajmłodszymi częściami parku są: położony na południowo-zachodnim krańcu fragment pomiędzy ul. Opata Jacka Rybińskiego a budynkiem Gdańskiego Seminarium Duchownego - dawny ogród użytkowy cysterskiego konwentu; oraz 2-hektarowy obszar dawnego folwarku Saltzmanna z XVIII-XIX wieku wokół dworu, przejętego w 2001 na biura przez firmę Doraco, obsadzony m.in. grabami pospolitymi i kasztanowcami czerwonymi Briotti, bukszpanem, lawendą wąskolistną i tawulcem pogiętym. Obszar ten udostępniono 22 maja 2015. Na obszarze parku znajduje się również Spichlerz Opacki (Oddział Etnografii Muzeum Narodowego w Gdańsku)',
  },
  {
    "name": 'Rezerwat Mewia Łacha',
    "id": 2,
    "favorite": false,
    "priceRange": 'darmowe',
    "type": 'natura',
    "img": 'https://parkmierzeja.pl/files/site-pkmw/gallery/161/2.jpg',
    "location": 'Gdańsk',
    "descriptionShort": 'Rezerwat Mewia Łacha na Wyspie Sobieszewskiej to naturalne siedlisko fok i ptaków chronione przez ornitologów z Grupy KULING.',
    "descriptionLong": 'Rezerwat chroni miejsca lęgowe różnych gatunków rybitw i siedliska żerowania i odpoczynku ptaków siewkowych. Od roku 2007 jest to ponownie jedyne w Polsce miejsce gnieżdżenia się rybitw czubatych - ok. 570 par (2009). Gniazdują tu również rybitwy białoczelne, rybitwy rzeczne, sieweczki obrożne, ostrygojady, w przeszłości na łachach (piaszczystych wyspach) gniazdowały także kolonie mew srebrzystych i śmieszek, w rezerwacie notowano również lęgi rybitw popielatych oraz jedyny w Polsce przypadek lęgu sieweczki morskiej.'
  },
  {
    "name": 'Stare Miasto',
    "id": 3,
    "favorite": false,
    "priceRange": 'darmowe',
    "type": 'kultura',
    "img": 'https://meteor-turystyka.pl/images/places/0/54.jpg',
    "location":'Gdańsk',
    "descriptionShort": 'Część gdańskiej dzielnicy Śródmieście. Jest to najstarszy obszar miasta.',
    "descriptionLong": 'Gdańskie Stare Miasto to dzielnica o długiej historii i wielu walorach turystycznych. Prawa miejskie zostały nadane jeszcze za panowania księcia Świętopełka. W XIII wieku okolica odgrywała ważną rolę w funkcjonowaniu grodu, przybywało też niemieckich osadników i nowocześnie pojmowanej myśli handlowej.'
  },
  {
    "name": 'Europejskie Centrum Solidarności',
    "id": 4,
    "favorite": false,
    "priceRange": 'tanio',
    "type": 'kultura',
    "img": 'https://ocdn.eu/pulscms-transforms/1/kJRk9kpTURBXy8yNjUyOTVhMGI4ODI2Y2ZkMTc2NWYyN2QyNjczZWFkZS5qcGeTlQMADs0D580CMZMFzQMUzQG8kwmmM2Q2MWJmBoGhMAE/europejskie-centrum-solidarnosci-ecs-w-gdansku.jpg',
    "location":'Gdańsk',
    "descriptionShort": 'Muezum poświęcone historii Solidarności oraz zmianom, jakie dokonały się pod jej wpływem w Europie Środkowej i Wschodniej,',
    "descriptionLong": 'Ekspozycja zajmuje niemal 3000 m kw. na I i II kondygnacji budynku. Podzielona jest na siedem sal. Zwiedzający spędzają tu średnio 2 godziny. Ta nowoczesna ekspozycja ma charakter narracyjny. Zwiedzający zanurza się w historii opowiadanej przez archiwalne przedmioty, dokumenty, rękopisy, zdjęcia i projekcje wideo, interaktywne instalacje... Każdy, kto odwiedza tę wystawę, ma szansę odnaleźć swoje własne odniesienia do historii i współczesności. Mnogość narracji pozwala tu po wielokroć wracać, za każdym razem odnajdować nową opowieść.'
  },
  {
    "name": 'Plaża w Brzeźnie',
    "id": 5,
    "favorite": false,
    "priceRange": 'darmowe',
    "type": 'natura',
    "img": 'https://visit360.pl/wp-content/uploads/2019/05/Visit360_pl_Gdansk_2019-05-01_zdjecia_z_drona_DJI_0225.jpg',
    "location":'Gdańsk',
    "descriptionShort": 'Plaża miejska usytuowana w gdańskiej dzielnicy Brzeźno',
    "descriptionLong": 'Kąpielisko Molo Gdańsk Brzeźno w każdym sezonie otrzymuje wyróżnienie Krajowego Programu Błękitna Flaga w Polsce, co świadczy o wyjątkowej czystości wody jak i plaży. Jest ona także wyjątkowa pod względem bezpieczeństwa, kąpielisko posiada stały monitoring oraz całodobową ochronę. Nad bezpieczeństwem plażowiczów w sezonie letnim codziennie czuwają ratownicy z czterech stanowisk ratowniczych.'
  },
  {
    "name": 'Muzeum II Wojny Światowej',
    "id": 6,
    "favorite": false,
    "priceRange": 'tanio',
    "type": 'kultura',
    "img": 'https://bi.im-g.pl/im/87/f3/14/z21968007V,Gdansk--Muzeum-II-Wojny-Swiatowej.jpg',
    "location":'Gdańsk',
    "descriptionShort": 'Sercem Muzeum jest wystawa główna zlokalizowana 14 metrów pod ziemią',
    "descriptionLong": 'Muzeum II Wojny Światowej powstało w Gdańsku przy placu Władysława Bartoszewskiego, nad Motławą, blisko historycznego centrum miasta. Muzeum ma za cel upowszechniać wiedzę o II wojnie światowej oraz służyć pielęgnowaniu pamięci o jej ofiarach i bohaterach; ma być nowoczesnym obiektem pod względem formy, a także prowadzonej działalności wystawienniczej, edukacyjnej i badawczej.'
  },
  {
    "name": 'Stadion Energa Gdańsk',
    "id": 7,
    "favorite": false,
    "priceRange": 'umiarkowanie',
    "type": 'sport',
    "img": 'https://lh3.googleusercontent.com/proxy/-8sssvDAS5jSy71UQlDOqmbSZT18fOVYa4K7N0w_yfdpWhxgyTOzNF51sOh9XZAIKe3w4m-dk-wUUv7oLejLiYuVL6bhN3-LwEs9yvsry2QQfUXMCXbxsLLzVT-PSrqQwA',
    "location":'Gdańsk',
    "descriptionShort": '',
    "descriptionLong": 'Stadion piłkarski w Gdańsku, znajdujący się przy ulicy Pokoleń Lechii Gdańsk 1, w dzielnicy Letnica. Stanowi własność miasta Gdańska, a jego głównym użytkownikiem jest klub piłkarski Lechia Gdańsk. Stadion został oddany do użytku 19 lipca 2011 roku, a pierwszym oficjalnym meczem było spotkanie Lechii z Cracovią rozegrane 14 sierpnia tego samego roku.'
  },
  {
    "name": 'PitStop Gdańsk Tor Gokartowy',
    "id": 8,
    "favorite": false,
    "priceRange": 'umiarkowanie',
    "type": 'sport',
    "img": 'url',
    "location":'Gdańsk',
    "descriptionShort": 'https://lh6.googleusercontent.com/proxy/SlXykDjO8C7HVwy2o3_oxtvMnZPR3GY7PMGNSk6YEEipjWmHoLYnXB7HM4XcfkYz380AzmYgXLPjS4RhESaHmjKh1dG2w8c6In5_ls4GQy3BdEb4I2Dhhby8Hw',
    "descriptionLong": 'Największy i najszybszy tor kartingowy na pomorzu oraz jedyny kryty tor z gokartami elektrycznymi.'
  },
  {
    "name": 'Restauracja Filharmonia',
    "id": 9,
    "favorite": false,
    "priceRange": 'drogo',
    "type": 'restauracja',
    "img": 'https://"img".grouponcdn.com/deal/3Dk2udTDMxXnzeoRMB9WYJ8LTKeK/3D-2048x1229/v1/c700x420.jpg',
    "location":'Gdańsk',
    "descriptionShort": '',
    "descriptionLong": 'Restauracja Filharmonia zlokalizowana w zabytkowym gdańskim budynku to miejsce, które proponuje autorskie menu oparte wyłącznie na świeżych, sezonowych produktach. Wykwintne smaki kuchni międzynarodowej tworzymy myśląc w nowoczesny sposób o gotowaniu będącym harmonijnym zestawieniem doznań, smaków, tekstur i zapachów poszczególnych składników potraw'
  },
  {
    "name": 'Eliksir',
    "id": 10,
    "favorite": false,
    "priceRange": 'umiarkowanie',
    "type": 'restauracja',
    "img": 'https://magazif.com/wp-content/uploads/wnetrze-gdanskiego-eliksiru-restauracja-ikona.jpg',
    "location":'Gdańsk',
    "descriptionShort": '',
    "descriptionLong": 'Eliksir jest unikalnym połączaniem restauracji, koktajlbaru, niezależnej przestrzeni eventowej oraz cigar roomu. Myślą przewodnią lokalu jest foodpairing czyli sztuka łączenia smaków ze specjalnie dopasowanymi koktajlami'
  },
  {
    "name": 'Molo Sopot',
    "id": 11,
    "favorite": false,
    "priceRange": 'tanio',
    "type": 'natura',
    "img": 'https://polskazachwyca.pl/wp-content/uploads/2017/09/sopot-shutterstock_547070851-900x600.jpg',
    "location":'Sopot',
    "descriptionShort": '',
    "descriptionLong": 'Molo w Sopocie im. Jana Pawła II – najdłuższe molo nad Morzem Bałtyckim[1]. Ma około pół kilometra długości – część spacerowa ma 511,5 m, z czego 458 m wchodzi w głąb Zatoki Gdańskiej. Jest jedną z największych atrakcji miasta. W głowicy mola jest zlokalizowana przystań morska „Molo" w Sopocie.'
  },
  {
    "name": 'Aqua Park',
    "id": 12,
    "favorite": false,
    "priceRange": 'umiarkowanie',
    "type": 'sport',
    "img": 'https://static1.s-trojmiasto.pl/zdj/c/n/1/2510/1200x800/2510696.jpg',
    "location":'Sopot',
    "descriptionShort": '',
    "descriptionLong": 'Sieć obiektów relaksacyjno-sportowych Aquapark, to jedno z najbardziej rozpoznawalnych miejsc, kojarzonych z rozrywką dla całych rodzin w Trójmieście. Jest to miejsce w którym można nie tylko aktywnie wypocząć przez cały rok, ale również kompleksowo zadbać o swoje ciało.'
  },
  {
    "name": 'Krzywy Domek',
    "id": 13,
    "favorite": false,
    "priceRange": 'darmowe',
    "type": 'kultura',
    "img": 'https://infogdansk.pl/wp-content/uploads/2018/02/krzywy_domek2-870x500.jpg',
    "location":'Sopot',
    "descriptionShort": '',
    "descriptionLong": 'Krzywy Domek – został zbudowany w Sopocie przy ul. Bohaterów Monte Cassino 53 według projektu architektów Szotyńskich i Zaleskiego, którego inspiracją były rysunki Jana Marcina Szancera i Pera Dahlberga.Obiekt stanowi część Centrum Handlowego „Rezydent". Na parterze mieszczą się pomieszczenia handlowe, lokal gastronomiczny, bary, sushi, kawiarnia Costa, salon urody i modelowania sylwetki Body Shape Garden oraz salon gier. Budynek jest też siedzibą m.in. oddziału regionalnego Radia RMF FM oraz RMF Maxxx. Krzywy Domek zajął pierwsze miejsce na liście 50 najdziwniejszych budynków świata, opublikowanej przez Portal Village of Joy.'
  },
  {
    "name": 'Latarnia Morska',
    "id": 14,
    "favorite": false,
    "priceRange": 'tanio',
    "type": 'kultura',
    "img": 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Latarnia_morska_w_Sopocie_2012_11_07.jpg',
    "location":'Sopot',
    "descriptionShort": '',
    "descriptionLong": `Światło nawigacyjne w Sopocie – znak nawigacyjny na polskim wybrzeżu Bałtyku, położony w Sopocie (województwo pomorskie). Od czasu zmniejszenia zasięgu nominalnego do 7 mil morskich w lutym 1999, według obowiązujących kryteriów w tym zakresie, nie jest już formalnie latarnią morską, ale dalej jest tak nazywana. 
    Wieża obserwacyjna ze światłem jest udostępniona do zwiedzania.`
  },
  {
    "name": 'Kart Center Sopot',
    "id": 15,
    "favorite": false,
    "priceRange": 'drogo',
    "type": 'sport',
    "img": 'https://kartcenter.pl/wp-content/uploads/2018/07/8.jpg',
    "location":'Sopot',
    "descriptionShort": '',
    "descriptionLong": `Na naszym zewnętrznym torze możemy Wam zapewnić niezapomniane, pełne skoków adrenaliny i pozytywnych emocji wyścigi niczym w Formule 1. Nasz sopocki obiekt, wnosi zupełnie nowe standardy do polskiego, amatorskiego kartingu. 
    Asfaltowy tor gokartowy o długości 500 metrów ma szerokość od 5 do 7 metrów. Umożliwia to jednoczesną jazdę nawet 10 gokartów. Specjalnie umocnione bandy z tworzywa polietylenowego, nowoczesny komputerowy pomiar czasu oraz zsynchronizowana z nim sygnalizacja świetlną zapewniają bezpieczeństwo naszym kierowcom. 
    Jako jedyny w Polsce tor posiadamy ponad 40 metrowy stalowy most z tunelem i dwoma 4 metrowymi przejazdami gwarantującymi unikalne przeżycia w trakcie jazdy!`
  },
  {
    "name": 'Muzeum Sopotu',
    "id": 16,
    "favorite": false,
    "priceRange": 'tanio',
    "type": 'kultura',
    "img": 'https://www.sopot.pl/images/800x533/1982-1-7427-muzeum-sopotu-zaprasza-nie-tylko-na-wystawy-thumb.jpg',
    "location":'Sopot',
    "descriptionShort": '',
    "descriptionLong": `Muzeum Sopotu – muzeum historyczne w Sopocie, samorządowa instytucja kultury miasta, założone w 2001. Placówka dokumentuje historię miasta i regionu w ekspozycji stałej i wystawach czasowych.
    Założone z okazji 100-lecia miasta muzeum mieści się w zabytkowej willi Claaszena z 1903, ul. Poniatowskiego 8, róg al. Wojska Polskiego, (nazywanej też przez mieszkańców al. Prominentów), wybudowanej przez gdańskiego kupca Ernsta Claaszena. 
    Pierwszy właściciel był z zamiłowania kolekcjonerem antyków i dzieł sztuki, rodzinną pasją Claaszenów była gdańska sztuka i kultura.`
  },
  {
    "name": 'Plaża Sopot',
    "id": 17,
    "favorite": false,
    "priceRange": 'darmowe',
    "type": 'natura',
    "img": 'http://mywaytrip.pl/wp-content/uploads/2019/03/co-zobaczyc-w-sopocie-9.jpg',
    "location":'Sopot',
    "descriptionShort": '',
    "descriptionLong": 'Plaża sąsiadująca ze słynnym "Monciakiem". Moc atrakcji dla dzieci jak i dorosłych. Główną atrakcją jest najdłuższe molo w Polsce. Plaża jest strzeżona w sezonie wakacyjnym.'
  },
  {
    "name": 'Galeria Sztuki',
    "id": 18,
    "favorite": false,
    "priceRange": 'tanio',
    "type": 'kultura',
    "img": 'https://news.niezlasztuka.net/wp-content/uploads/2016/03/sopot.jpg',
    "location":'Sopot',
    "descriptionShort": '',
    "descriptionLong": `Państwowa Galeria Sztuki jest instytucją samorządową finansowaną z budżetu gminy Sopot. Po zakończeniu przebudowy centrum Sopotu, galeria została przeniesiona do nowego Domu Zdrojowego przy Placu Zdrojowym 2.
    W salach wystawienniczych o łącznej powierzchni 1 200 m. Państwowa Galeria Sztuki realizuje rocznie około dwudziestu pięciu wystaw sztuki współczesnej i tradycyjnej, prezentujących różnorodne zjawiska artystyczne. Galeria, dążąc do ukazania najważniejszych zjawisk sztuki polskiej i obcej oraz dotarcia do możliwie szerokiego kręgu odbiorców, współpracuje z galeriami i placówkami muzealnymi w kraju i za granicą. W rankingu tygodnika „Polityka" w 2015 roku Państwowa Galeria Sztuki zajęła 4. miejsce pośród galerii sztuki współczesnej w Polsce, a w 2017 roku zajęła już 3. miejsce!`
  },
  {
    "name": 'Windsurfing',
    "id": 19,
    "favorite": false,
    "priceRange": 'drogo',
    "type": 'sport',
    "img": 'https://prezentmarzen.com/"img"/pmcategorygallery/116/large_default-534-poznaj-windsurfing-lekcja-indywidualna-f362.jpg',
    "location":'Sopot',
    "descriptionShort": '',
    "descriptionLong": 'Znajdujemy się na terenie Sopockiego Klubu Żeglarskiego – największej wyczynowej bazy windsurfingowej w Polsce, gdzie trenuje polska kadra olimpijska. Nasi instruktorzy to byli i obecni zawodnicy Sopockiego Klubu Żeglarskiego, z wieloletnim doświadczeniem w szkoleniu windsurfingowym dzieci i dorosłych.W ofercie mamy lekcje indywidualne, kursy grupowe 4 i 10 -godzinne, wypożyczalnię sprzętu z deskami mieczowymi i bezmieczowymi, żaglami w rozmiarach od 1 do 7,5 m2.Wyposażona jest w sprzęt takich firm jak: Starboard, Goya, Fanatic, Exocet, Quiksilver.Na terenie klubu znajduje się bardzo dobrze zaopatrzony sklep windsurfingowy – Surfoteka.'
  },
  {
    "name": 'Skutery Wodne',
    "id": 20,
    "favorite": false,
    "priceRange": 'drogo',
    "type": 'sport',
    "img": 'http://www.extreme.sopot.pl/images/banners/firma/skutery-1.jpg',
    "location":'Sopot',
    "descriptionShort": '',
    "descriptionLong": `Jako główną atrakcję oferujemy pływanie na skuterach wodnych marki Bombardier – Sea Doo. Uczestnicy zabaw na skuterach wodnych pływają pod opieką i kontrolą Instruktorów PZMiNW. Sprzęt motorowodny, który jest używany podczas zabaw, ma zamontowane zdalne odcięcia zapłonu, dzięki temu szaleństwa na wodzie są bardzo bezpieczne. Skutery wodne Sea Doo w naszej flocie są 3 osobowe, dzięki czemu są bardzo stabilne i komfortowe, posiadają zapas mocy, który zapewni najbardziej wymagającym uczestnikom masę niezwykłych doznań. Organizujemy też wyprawy na skuterach dookoła Zatoki Gdańskiej. Pływamy po wodach morskich oraz akwenach śródlądowych.
    Proponujemy Państwu możliwość zakupu voucherów, które służyć mogą jako idealny prezent na każdą okazję. Każdy voucher jest imienny i upoważnia do skorzystania z atrakcji w naszym Centrum Motorowodnym w Sopocie.`
  },
  {
    "name": 'Molo w Orłowie',
    "id": 21,
    "favorite": false,
    "priceRange": 'darmowe',
    "type": 'natura',
    "img": 'https://s-trojmiasto.pl/zdj/c/n/13/1812/1440x810/1812621__kr.jpg',
    "location":'Gdynia',
    "descriptionShort": '',
    "descriptionLong": 'Pierwsze molo w Orłowie zostało wybudowane w 1934 r. i miało ponad 400 m długości. Ostatnio wyremontowano je w 2007 roku i ma obecnie 180 m długości.'
  },
  {
    "name": 'Kępa Redłowska i Klif Orłowski',
    "id": 22,
    "favorite": false,
    "priceRange": 'darmowe',
    "type": 'natura',
    "img": 'https://www.naszbaltyk.com/images/Jesien_Kepa_Redlowska_NB_2013/DSC04343zm.jpg',
    "location":'Gdynia',
    "descriptionShort": '',
    "descriptionLong": 'Rezerwat Kępa Redłowska został utworzony w 1938 r. jako jeden z pierwszych w Polsce. Obejmuje obszar wzdłuż Zatoki Gdańskiej od Polanki Redłowskiej do rzeki Kaczej w Orłowie. Chroni on piękny fragment nadmorskiego krajobrazu: naturalny las bukowy na klifowym brzegu poprzecinany głębokimi wąwozami o stromych zboczach. Osobliwością przyrodniczą jest występowanie naturalnych stanowisk chronionego jarząbu szwedzkiego. Strome zbocza klifowe osiągające wysokość do 86 m n.p.m. tworząc niezwykłe miejsca widokowe na wody Zatoki Gdańskej, lecz wskutek zjawiska abrazji stale ulegają niszczeniu przez morskie fale. Co roku brzeg wygląda inaczej. Miłośników militariów zachwycą stanowiska artyleryjskie 11 BAS z okresu zimnej wojny. Na terenie rezerwatu wyznaczone są zarówno ścieżki edukacyjne jak i rekreacyjne.'
  },
  {
    "name": 'Muzeum Emigracji w Gdyni',
    "id": 23,
    "favorite": false,
    "priceRange": 'tanio',
    "type": 'kultura',
    "img": 'https://i.wp"img".pl/635x400/i.wp.pl/a/f/jpeg/35063/wp_muzeum_emigracji_635.jpeg',
    "location":'Gdynia',
    "descriptionShort": '',
    "descriptionLong": 'W Gdyni powstało pierwsze w kraju muzeum poświęcone historii polskiej emigracji. Z inicjatywy władz miasta w historycznym gmachu Dworca Morskiego, skąd przez dziesięciolecia wypływały polskie transatlantyki, powstała instytucja, która o dziejach wyjazdów i losach Polaków na świecie opowiada w ścisłym związku ze współczesnością. Historia emigracji pisze się bowiem każdego dnia. Jej najróżniejsze wymiary przedstawia wystawa stała.'
  },
  {
    "name": 'Centrum Nauki Experyment',
    "id": 24,
    "favorite": false,
    "priceRange": 'umiarkowanie',
    "type": 'kultura',
    "img": 'https://naukawpolsce.pap.pl/sites/default/files/styles/strona_glowna_slider_750x420/public/201710/27357106_27357102.jpg?itok=qg0V4zqh',
    "location":'Gdynia',
    "descriptionShort": '',
    "descriptionLong": 'Centrum Nauki EXPERYMENT to jedno z pierwszych polskich centrów nauki. Już od ponad dziesięciu lat łączymy naukę i zabawę w atrakcyjną formę spędzania czasu. Wizyta w EXPERYMENCIE pozwala gościom na efektywne przyswajanie wiedzy, pomaga zrozumieć otaczające procesy, a także pobudza ciekawość świata. EXPERYMENT kieruje swoją ofertę dla całych rodzin, młodzieży i dorosłych - u nas każdy znajdzie coś dla siebie!'
  },
  {
    "name": 'Dar Pomorza',
    "id": 25,
    "favorite": false,
    "priceRange": 'tanio',
    "type": 'kultura',
    "img": 'https://dzieje.pl/sites/default/files/styles/open_article_750x0_/public/201911/dar_pomorza.jpg?itok=OQg4QAmy',
    "location":'Gdynia',
    "descriptionShort": '',
    "descriptionLong": '"Dar Pomorza" nazywany "Białą Fregatą", od 1929 roku związany jest z Gdynią. Został zbudowany w roku 1909 w stoczni Blohm & Voss w Hamburgu jako statek szkolny niemieckiej marynarki handlowej. Po wodowaniu 18 września 1909 r. otrzymał nazwę "Prinzess Eitel Friedrich" i rozpoczął służbę wychodząc w dziewiczy rejs do Christiansand i Antwerpii. Po klęsce Niemiec w I wojnie światowej statek przejęli Francuzi, przeprowadzając go do portu Saint Nazaire. W roku 1926 otrzymał on nową nazwę "Colbert" i miał zastąpić francuski żaglowiec szkolny "Richelieu". Plan ten nie doczekał się realizacji. W rok później fregata przeszła na własność barona de Foreste, który zamierzał przekształcić ją w jacht oceaniczny, ale i ten pomysł nie został urzeczywistniony. W roku 1929 statek został zakupiony z datków społecznych przez Pomorski Komitet Floty Narodowej za sumę 7000 funtów szterlingów. Miał zastąpić wysłużony już bark szkolny "Lwów". Fregata otrzymała wówczas kolejną nazwę "Dar Pomorza", dla upamiętnienia ofiarności pomorskiego społeczeństwa. W czerwcu 1930 r. po raz pierwszy stanęła na gdyńskiej redzie, a 13 lipca biskup St. Okoniewski poświęcił statek i jego banderę. Fregata została przekazana Państwowej Szkole Morskiej w Gdyni i stała się odtąd drugą (po "Lwowie") "kolebką polskich nawigatorów". W ciągu 51 lat służby dla Polskiej Marynarki Handlowej "Dar Pomorza" odbył 102 rejsy szkolne, przebywając pół miliona mil morskich. Na jego pokładzie przeszkolono 13 384 słuchaczy Szkoły Morskiej. 4 sierpnia 1982 r. formalnie wycofano "Dar Pomorza" ze służby - w tym samym czasie podniesiono banderę na jego następcy, "Darze Młodzieży", zaprojektowanym i zbudowanym w Gdańsku. 16 listopada 1982 r. "Dar Pomorza" został przekazany Narodowemu Muzeum Morskiemu w Gdańsku.'
  },
  {
    "name": 'Kolibki Adventure Park',
    "id": 26,
    "favorite": false,
    "priceRange": 'drogo',
    "type": 'sport',
    "img": 'https://agatomdom.pl/wp-content/uploads/2016/04/koolibki-1024x680.jpg',
    "location":'Gdynia',
    "descriptionShort": '',
    "descriptionLong": 'Niezwykłe miejsce dla nieprzeciętnych ludzi. Stworzone przez pasjonatów mocnych wrażeń, ludzi kochających wypoczynek i sporty na wolnym powietrzu. Nie bojących się ciekawych nowych wyzwań i przygód. Specjalnie dla Was na dawnym torze motocrossowym wśród pięknego lasu z widokiem na Zatokę Gdańską zostały przygotowane niezliczone atrakcje. Adventure Park jest miejscem gdzie każdy znajdzie przygodę dla siebie.  Rozległy teren,  profesjonalnie przygotowany do realizacji najróżniejszych aktywności i sportów daje duży wybór atrakcji.  Szeroka oferta pozwala na realizację zarówno małych jak i dużych imprez firmowych, pikników rodzinnych jak i imprez indywidualnych.'
  },
  {  
    "name": 'JUMPCITY Park Trampolin',
    "id": 27,
    "favorite": false,
    "priceRange": 'umiarkowanie',
    "type": 'sport',
    "img": 'https://gdynia.jumpcity.pl/wp-content/themes/jumpcity/"img"/galeria/gabki-1.jpg',
    "location":'Gdynia',
    "descriptionShort": '',
    "descriptionLong": 'JUMPCITY to miejsce, w którym na ponad 140 trampolinach spełniamy marzenia o lataniu. Cała hala podzielona na 6 różnych stref trampolin, to istny raj na ziemi dla poszukiwaczy przygód, endorfin i dużych dawek zdrowego ruchu. To idealne miejsce dla całej rodziny! Ponieważ każdy z nas jest inny stworzyliśmy szeroką gamę atrakcji dokładnie dopasowaną do Państwa potrzeb. W oparciu o naszą pasję, chęć nieustannego rozwoju i dziecięce marzenia, stworzyliśmy obiekt, który jest odskocznią od szarej rzeczywistości. Obiekt, który odrywa młodzież od monitorów, a starszym pozwala zachować i poprawić sprawność fizyczną. JUMPCITY jest dla nas misją. Misją, dzięki której jesteśmy w stanie malować uśmiech na twarzach naszych zadowolonych gości każdego dnia.'
  },
  {
    "name": 'Pizzeria Czerwony Piec',
    "id": 28,
    "favorite": false,
    "priceRange": 'tanio',
    "type": 'restauracja',
    "img": 'https://media-cdn.tripadvisor.com/media/photo-s/0a/8e/c3/9f/20160214-195755-largejpg.jpg',
    "location":'Gdynia',
    "descriptionShort": '',
    "descriptionLong": 'Czerwony Piec to miejsce, położone w centrum Gdyni, z pyszną, włoską pizzą na cienkim cieście, wypiekaną w tradycyjnym piecu opalanym drewnem. Piec to nie tylko główna część wystroju wnętrza, ale także najważniejszy element w procesie przygotowania pizzy. Dzięki takiemu sposobowi wypiekania, serwowana pizza jest odpowiednio chrupka, z niepowtarzalnym aromatem jaki daje żywy ogień. Czas wypieku w piecu opalanym drewnem to tylko 120 sekund w temperaturze około 400 stopni. W Czerwonym Piecu, serwujemy trunki głównie z włoskich winiarni, ale od czasu do czasu zagoszczą u nas również wina francuskie, niemieckie czy też słowackie. Chcemy, aby nasi goście delektując się pizzą, mieli okazję spróbować wielu gatunków dobrego wina, nie wydając przy tym majątku. Znajdziecie u nas zarówno wino domowe, jak i butelkowe. Jak tylko nasi zwiadowcy wynajdą kolejną perełkę, możesz być pewien, iż pojawi się u nas w karcie.'
  },
  {
    "name": 'Multitap Morze Piwa',
    "id": 29,
    "favorite": false,
    "priceRange": 'umiarkowanie',
    "type": 'restauracja',
    "img": 'https://minibrowary.files.wordpress.com/2018/02/morzepiwa_head.jpg',
    "location":'Gdynia',
    "descriptionShort": '',
    "descriptionLong": 'Otwarcie Morza Piwa odbyło się 28 października. Od samego początku w weekendy pub jest wypełniony niemal po brzegi, a to za sprawą dobrej lokalizacji (Skwer Kościuszki 13, Gdynia) i świetnych piw na kranach. Multitap złożony z 13 kranów przyniósł raczej szczęście a nie pecha pubowi, bo już po niecałym miesiącu klienci dają mu bardzo wysokie oceny. Z kranów leją się głównie piwa z polskich browarów rzemieślniczych, jednak można natrafić na zagraniczne delicje. Rotacja na kranach jest spora i w ciągu jednego weekendu mogą wymienić się wszystkie piwa na tablicy. Barmani starają się tak dobierać rodzaje piw, by można było wybrać z różnych stylów, nie tylko tych już w Polsce popularnych, ale także trochę mniej znanych. Dzięki temu każdy znajdzie coś dla siebie i z pubu wyjdzie zadowolony. Osoby niezdecydowane mogą liczyć na świetnie przygotowaną i fachową obsługę, która opowie o aktualnie dostępnych piwach lanych, a także podpowie co wybrać z piw butelkowanych.'
  },
  {
    "name": 'Falla',
    "id": 30,
    "favorite": false,
    "priceRange": 'umiarkowanie',
    "type": 'restauracja',
    "img": 'https://images.happycow.net/venues/1024/17/14/hcmp171426_655272.jpeg',
    "location":'Gdynia',
    "descriptionShort": '',
    "descriptionLong": 'FALLA to restauracje z nowoczesną kuchnią roślinną z elementami Bliskiego Wschodu, działające zgodnie z zasadami slow food. FALLA to świeże lokalne produkty, wzbogacone nutą orientalnych przypraw, odważne autorskie kompozycje smaków oraz eksplozja kolorów na talerzu, a przede wszystkim szczera miłość do jedzenia.'
  },
];

export default data;


