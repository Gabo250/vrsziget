import { useState } from "react";
import { mediaElement } from "../component/MediaSlider";
import Connection from "../home/Connection";
import Game from "./Game";
import GamesHeader from "./GameHeader";
import GamesTextSection from "./GamesTextSection";
import SearchSection from "./SearchSection";
import useDebounce from "../hooks/useDebounce";

type gameType = {
  name: string;
  media: mediaElement[];
  tags?: string[];
  headerTitle?: string;
  description: string;
};

const gamesko: gameType[] = [
  {
    name: "Elven Assassin",
    media: [
      {
        type: "video",
        src: "https://www.youtube.com/embed/D94cNMNyMy4?si=2RbvAhOpJFq9HO-i",
        alt: "Elven Assassin",
      },

      {
        type: "image",
        src: "./images/games/assassin.jpg",
        alt: "Elven Assassin",
      },

      {
        type: "image",
        src: "./images/games/asssassin_img.png",
        alt: "Elven Assassin",
      },

      {
        type: "image",
        src: "./images/games/assassin_img2.jpg",
        alt: "Elven Assassin",
      },
    ],

    tags: ["multiplayer", "singleplayer"],
    headerTitle: "Lépj be a mágikus világba, és válj legendás íjásszá!",
    description:
      "Készülj fel egy lenyűgöző virtuális valóság élményre az Elven Assassin-nal! Ebben a fantasztikus VR játékban, amely elvarázsolt világokba és epikus csatákba repít, te lehetsz a hős, aki megmenti a birodalmat. Ragadd meg az íjadat, és állj készen a kalandra! Éld át a klasszikus “Tower Defense” játék típust VR-ral. Az Elven Assassin lehetőséget ad arra, hogy egyedül küzdj, vagy barátaiddal együtt vegyél részt a csatákban. Hívd meg barátaidat, és harcoljatok együtt a közös ellenségek ellen, vagy mérjétek össze tudásotokat a többjátékos módban. A közös élmény még izgalmasabbá és szórakoztatóbbá teszi a játékot!",
  },

  {
    name: "Assetto Corsa",
    media: [
      {
        type: "video",
        src: "https://www.youtube.com/embed/wpTkgOB_TEo?si=sg3_At3B5ZtwrAOq",
        alt: "Elven Assassin",
      },

      {
        type: "image",
        src: "./images/games/assetto-corsa.jpg",
        alt: "Assetto Corsa",
      },

      {
        type: "image",
        src: "./images/games/corsa-img.jpg",
        alt: "Assetto Corsa",
      },

      {
        type: "image",
        src: "./images/games/corsa-img2.webp",
        alt: "Assetto Corsa",
      },
    ],

    tags: ["multiplayer", "singleplayer"],

    headerTitle: "Fedezd fel az Assetto Corsa VR  elképesztő valóságát!",
    description:
      "Merülj el a vezetés legvalósághűbb élményében az Assetto Corsa-ban virtuális valóság (VR) segítségével! Most még közelebb kerülhetsz az igazi versenyzés izgalmaihoz, és úgy érezheted magad, mintha valóban a volán mögött ülnél. A VR segítségével minden részletet tökéletesen láthatsz és érezhetsz. A versenypályák kanyarjai, az autók belső tere és a táj minden apró részlete valósághűen tárul eléd. Éld át az adrenalint, ahogy végigszáguldasz a híres versenypályákon!",
  },

  {
    name: "Beat Saber",
    media: [
      {
        type: "video",
        src: "https://www.youtube.com/embed/vL39Sg2AqWg?si=VfAWKqynN_26pzRD",
        alt: "Beat Saber",
      },

      {
        type: "image",
        src: "./images/games/beat-saber.jpg",
        alt: "Beat Saber",
      },

      {
        type: "image",
        src: "./images/games/beat-saber2.jpg",
        alt: "Beat Saber",
      },

      {
        type: "image",
        src: "./images/games/beat-saber3.jpeg",
        alt: "Beat Saber",
      },

      {
        type: "image",
        src: "./images/games/beat-saber4.jpg",
        alt: "Beat Saber",
      },
    ],

    tags: ["singleplayer"],

    headerTitle: "Vágj bele a ritmus világába!",
    description:
      "Készülj fel a végső VR élményre a Beat Saberrel! Ez a ritmusjáték minden érzékedet megmozgatja, miközben a zene ütemére szeli át a levegőt. Tedd próbára a reflexeidet és a ritmusérzékedet egy olyan világban, ahol a zene és a mozgás tökéletes harmóniában találkozik! A Beat Saber különböző nehézségi szintekkel és kihívásokkal vár, amelyek próbára teszik képességeidet. Versenyezz barátaiddal vagy a világ legjobbjaival az online ranglistákon, és mutasd meg, hogy te vagy a legjobb ritmusvágó!",
  },

  {
    name: "Gunslinger",
    media: [
      {
        type: "image",
        src: "./images/games/gs-banner.jpg",
        alt: "Gunslinger kép",
      },

      {
        type: "video",
        src: "./videos/gs-video.mp4",
        alt: "Gunslinger videó",
      },

      {
        type: "image",
        src: "./images/games/gs-1.jpg",
        alt: "Gunslinger kép",
      },

      {
        type: "image",
        src: "./images/games/gs-2.jpg",
        alt: "Gunslinger kép",
      },

      {
        type: "image",
        src: "./images/games/gs-3.jpg",
        alt: "Gunslinger kép",
      },

      {
        type: "image",
        src: "./images/games/gs-4.jpg",
        alt: "Gunslinger kép",
      },
    ],

    tags: ["multiplayer"],

    headerTitle: "Éld át a Vadnyugat izgalmait!",
    description:
      "Lépj be a vadnyugat legveszélyesebb világába! Vedd fel a seriff csillagot, és tedd próbára bátorságodat a legfélelmetesebb pisztolypárbajokban és banditavadászatokban, amelyek eddig csak a mozivásznon léteztek. Teszteld képességeidet a kor legikonikusabb fegyvereivel, és éld át, milyen érzés igazi pisztolyhősként harcolni. Hívd ki barátaidat egy párbajra, vagy csatlakozz egy csapathoz, és közösen uraljátok a vadnyugatot!",
  },

  {
    name: "Dream Hackers",
    media: [
      {
        type: "image",
        src: "./images/games/dh-banner.jpg",
        alt: "Dream Hacker kép",
      },

      {
        type: "video",
        src: "./videos/dh-video.mp4",
        alt: "Dream Hacker videó",
      },

      {
        type: "image",
        src: "./images/games/dh-1.jpg",
        alt: "Dream Hacker kép",
      },

      {
        type: "image",
        src: "./images/games/dh-2.jpg",
        alt: "Dream Hacker kép",
      },

      {
        type: "image",
        src: "./images/games/dh-3.jpg",
        alt: "Dream Hacker kép",
      },
    ],

    tags: ["multiplayer"],

    headerTitle: "Fedezd fel az álmok világát!",
    description:
      "Merülj el az emberi elme legmélyebb rejtelmeiben! Ebben a lebilincselő kalandban te lehetsz a virtuális álomvilágok mestere, ahol minden döntésed számít, és csak a legügyesebbek ébredhetnek győztesként. Fedezd fel a legfantasztikusabb és legváltozatosabb álomvilágokat, ahol semmi sem az, aminek látszik. Hozz létre saját álomvilágokat, és éld át a határtalan kreativitás izgalmát. Alkoss csapatot barátaiddal, vagy mérkőzz meg más játékosokkal a globális ranglistákon. Közösen fedezzétek fel az álmok végtelen világát!",
  },

  {
    name: "House of Fear: Call of Blood",
    media: [
      {
        type: "image",
        src: "./images/games/hof-banner.jpg",
        alt: "House of Fear kép",
      },

      {
        type: "video",
        src: "./videos/hof-video.mp4",
        alt: "House of Fear videó",
      },

      {
        type: "image",
        src: "./images/games/hof-1.jpg",
        alt: "House of Fear kép",
      },

      {
        type: "image",
        src: "./images/games/hof-2.jpg",
        alt: "House of Fear kép",
      },

      {
        type: "image",
        src: "./images/games/hof-3.jpg",
        alt: "House of Fear kép",
      },
    ],

    tags: ["multiplayer", "szabaduló szoba"],

    headerTitle:
      "Készen állsz szembenézni a félelmeiddel? Lépj be a félelem házába!",
    description:
      "Merülj el a rettegés és misztikum sötét mélységeibe! Ez az izgalmas horrorjáték olyan élményt nyújt, amelyet sosem fogsz elfelejteni. Készülj fel a félelem határainak feszegetésére, és fedezd fel a vérrel átitatott titkokat! Tapasztald meg a horror minden apró részletét a részletgazdag grafikának és élethű hanghatásoknak köszönhetően. Minden sötét sarokban valami borzalmas rejtőzik. Hívd barátaidat, és együtt fedezzétek fel a ház borzalmait. Együttműködés és stratégia szükséges ahhoz, hogy legyőzzétek a legnagyobb rémálmokat is.",
  },

  {
    name: "The Last Day Defense",
    media: [
      {
        type: "image",
        src: "./images/games/ldd-banner.jpg",
        alt: "Last Day Defense kép",
      },

      {
        type: "video",
        src: "./videos/ldd-video.mp4",
        alt: "Last Day Defense videó",
      },

      {
        type: "image",
        src: "./images/games/ldd-1.jpg",
        alt: "Last Day Defense kép",
      },

      {
        type: "image",
        src: "./images/games/ldd-2.jpg",
        alt: "Last Day Defense kép",
      },

      {
        type: "image",
        src: "./images/games/ldd-3.jpg",
        alt: "Last Day Defense kép",
      },
    ],

    tags: ["multiplayer", "singleplayer"],

    headerTitle: "Vedd fel a harcot, és védd meg a világot!",
    description:
      "Az apokalipszis elérkezett, és az emberiség sorsa a te kezedben van! Merülj el a The Last Day Defense izgalmas világában, ahol minden döntésed számít, és a túlélésért folytatott harc sosem ér véget. Készülj fel a végső összecsapásra, és mutasd meg, hogy te vagy a föld utolsó védője! Építsd fel és fejleszd bázisodat, helyezd el az erőforrásokat és tervezz meg minden lépést gondosan, hogy megvédhesd magad a támadásoktól. Küzdj meg a zombik és más apokaliptikus fenyegetések hullámaival valós idejű, akciódús csatákban. Minden hullámmal erősebb és veszélyesebb ellenfelek várnak rád. Vezesd különleges egységeidet a csatába, és használd ki egyedi képességeiket a győzelem érdekében. Katonák, mesterlövészek, és robbanószerkezet-szakértők állnak rendelkezésedre.",
  },

  {
    name: "House of Fear: Cursed Soul",
    media: [
      {
        type: "image",
        src: "./images/games/hofcs-banner.jpg",
        alt: "Cursed Soul kép",
      },

      {
        type: "video",
        src: "./videos/hofcs-video.mp4",
        alt: "Cursed Soul videó",
      },

      {
        type: "image",
        src: "./images/games/hofcs-1.jpg",
        alt: "Cursed Soul kép",
      },

      {
        type: "image",
        src: "./images/games/hofcs-2.jpg",
        alt: "Cursed Soul kép",
      },

      {
        type: "image",
        src: "./images/games/hofcs-3.jpg",
        alt: "Cursed Soul kép",
      },
    ],

    tags: ["multiplayer", "szabaduló szoba"],

    headerTitle: "Fedezd fel a rettegés világát!",
    description:
      "Készen állsz szembenézni a legmélyebb félelmeiddel? Lépj be ebbe világba, ahol a borzalmak és rejtélyek minden sarkon leselkednek rád. Ez a lenyűgöző horrorjáték egy olyan élményt kínál, amelyet sosem felejtesz el. Oldd meg az összetett rejtvényeket és logikai feladványokat, amelyek még mélyebbre húznak a ház titokzatos világába. Csak a legélesebb elméjű játékosok tudják feltárni a teljes igazságot. Akár barátaiddal együtt fedezzétek fel a ház borzalmait. Együttműködés és stratégia itt is szükséges ahhoz, hogy legyőzzétek a legnagyobb rémálmokat is.",
  },

  {
    name: "Smash Point",
    media: [
      {
        type: "image",
        src: "./images/games/sp-banner.jpg",
        alt: "Smash Point kép",
      },

      {
        type: "video",
        src: "./videos/sp-video.mp4",
        alt: "Smash Point videó",
      },

      {
        type: "image",
        src: "./images/games/sp-1.jpg",
        alt: "Smash Point kép",
      },

      {
        type: "image",
        src: "./images/games/sp-2.jpg",
        alt: "Smash Point kép",
      },

      {
        type: "image",
        src: "./images/games/sp-3.jpg",
        alt: "Smash Point kép",
      },
    ],

    tags: ["multiplayer", "singleplayer"],

    headerTitle: "Tapasztald meg a végső csata izgalmát!",
    description:
      "Merüljetek el egy rajzfilmszerű világban, ahol üldözhetitek és a legvagányabb új fegyverekkel csépelhetitek egymást. A Smash Point egy kompetitív többjátékos VR-játék, amely bámulatos látvánnyal szórakoztatja játékosait. A játék Deathmatch módban zajlik: mindenki mindenki ellen, és mivel senki sem hal meg hosszú időre, a végtelen szórakozás garantált. A körök száma normál esetben 10, egy kör 5–7 perc közötti időtartamra állítható be. A legtöbb pontot elérő játékos nyer. A játékot egyszerre legfeljebb 10 játékos játszhatja. Az üresen maradt helyek feltöltésére botok használhatók, és a játékosok számát a rendszer automatikusan minimum 6 főben határozza meg. A Smash Pointban 14 karizmatikus karakter közül választhattok, így mindenki megtalálhatja saját kedvencét.",
  },

  {
    name: "ER: The Prison",
    media: [
      {
        type: "image",
        src: "./images/games/er-banner.jpg",
        alt: "ER: The Prison kép",
      },

      {
        type: "video",
        src: "./videos/er-video.webm",
        alt: "ER: The Prison videó",
      },

      {
        type: "image",
        src: "./images/games/er-1.jpg",
        alt: "ER: The Prison kép",
      },

      {
        type: "image",
        src: "./images/games/er-2.jpg",
        alt: "ER: The Prison kép",
      },

      {
        type: "image",
        src: "./images/games/er-3.jpg",
        alt: "ER: The Prison kép",
      },
    ],

    tags: ["multiplayer", "szabaduló szoba"],

    headerTitle: "Menekülj meg vagy veszíts el mindent!",
    description:
      "Készen állsz, hogy szembenézz életed legnagyobb kihívásával? Az ER: The Prison egy adrenalinpumpáló kalandjáték, amely a túlélés és a menekülés feszültségét hozza el neked. Merülj el a börtön sötét és veszélyes világában, ahol minden döntésed az élet és a halál közötti vékony határvonalon mozog. Fedezd fel a börtön titkait és deríts fényt a múlt sötét eseményeire. Minden felfedezés egy újabb lépés a szabadulás felé de vigyázz, a veszély minden sarkon leselkedik! Oldd meg a bonyolult rejtvényeket és logikai feladványokat, amelyek kulcsfontosságúak a meneküléshez. Csak a legélesebb elméjű játékosok tudnak kijutni élve.",
  },

  {
    name: "ARVI Arena",
    media: [
      {
        type: "image",
        src: "./images/games/arvi-banner.jpg",
        alt: "ARVI Arena kép",
      },

      {
        type: "video",
        src: "./videos/arvi-video.mp4",
        alt: "ARVI Arena videó",
      },

      {
        type: "image",
        src: "./images/games/arvi-1.jpg",
        alt: "ARVI Arena kép",
      },

      {
        type: "image",
        src: "./images/games/arvi-2.jpg",
        alt: "ARVI Arena kép",
      },

      {
        type: "image",
        src: "./images/games/arvi-3.jpg",
        alt: "ARVI Arena",
      },
    ],

    tags: ["multiplayer"],

    headerTitle: "Lépj be a virtuális csatatérre!",
    description:
      "Az Arena egy dinamikus, sci-fi elemekkel tarkított több játékos által játszható lövöldözős játék, amelybe könnyű belemerülni. A térképek és fegyverek gazdag választéka minden akciójáték-rajongó szívét megdobogtatja. Bizonyítsd be, hogy a modern világban te félelmet nem ismerő gladiátor vagy! Alkossatok csapatot, idézzétek fel az összes ismert játéktaktikát, hogy a virtuális valóságban legyőzhessétek ellenfeleiteket. Használjátok ki a teleportálást, derítsétek fel a területen fellelhető bónuszokat. Csak a legügyesebb játékosok jutnak el és aranak győzelmet a játék végén. Te is köztük lehetsz! Legyél te az utolsó túlélő a futurisztikus virtuális csatában!",
  },

  {
    name: "ER: Alice",
    media: [
      {
        type: "image",
        src: "./images/games/era-banner.jpg",
        alt: "ER: Alice kép",
      },

      {
        type: "video",
        src: "./videos/era-video.mp4",
        alt: "ER: Alice videó",
      },

      {
        type: "image",
        src: "./images/games/era-1.jpg",
        alt: "ER: Alice kép",
      },

      {
        type: "image",
        src: "./images/games/era-2.jpg",
        alt: "ER: Alice kép",
      },

      {
        type: "image",
        src: "./images/games/era-3.jpg",
        alt: "ER: Alice kép",
      },
    ],

    tags: ["multiplayer", "szabaduló szoba"],

    headerTitle: "Merülj el Alice különleges világában!",
    description:
      "Vegyél részt az események forgatagában, és bújj bele Alice cipőjébe! Merülj el az igazi varázsvilágban! Ki kell derítened a Kőr dáma titkait, aki átkot szórt Csodaországra. Igyál egy zsugorító főzetet, és kövesd a Fehér Nyulat a világ tekervényes labirintusain keresztül a kémlelőüveg mögött, ahol minden a feje tetejére áll. Segíts az időben ragadt kalaposnak helyrehozni a rendetlenséget az őrült teázáson. A Doromboló macska végigvezet tégeda Sötét Erdő elvarázsolt sűrűjében. Mentsd meg azokat a tündéreket, akik ismerik a gonosz királynő titkát, a bölcs hernyó tippjeinek felhasználásával. Találld meg annak módját, hogy a kártyaőrök mellett besurranhass a trükkös csapdákkal teli kastélyba, hogy legyőzzed a Kőr dámát, leszedd az átkot a fő óratoronyról és megmentsd Csodaországot.",
  },

  {
    name: "ER: Chernobyl",
    media: [
      {
        type: "image",
        src: "./images/games/erc-banner.jpg",
        alt: "ER: Chernobyl kép",
      },

      {
        type: "video",
        src: "./videos/erc-video.webm",
        alt: "ER: Chernobyl videó",
      },

      {
        type: "image",
        src: "./images/games/erc-1.jpg",
        alt: "ER: Chernobyl kép",
      },

      {
        type: "image",
        src: "./images/games/erc-2.jpg",
        alt: "ER: Chernobyl kép",
      },

      {
        type: "image",
        src: "./images/games/erc-3.jpg",
        alt: "ER: Chernobyl kép",
      },
    ],

    tags: ["multiplayer", "szabaduló szoba"],

    headerTitle: "Fedezd fel a történelem sötét titkait!",
    description:
      "Bárcsak meg tudnánk változtatni a múltat, vagy szemtanúi lehetnénk azoknak eseményeknek, amik megváltoztatták a világot... Meg lehet változtatni a sorsot? Utazz vissza az időben, hogy ha megváltoztasd a helyzetet, amelyből, úgy tűnt — nem volt kiút. Mi történt a baleset éjszakáján? Mi történt utána? Találj válaszokat, az eddig megválaszolatlan kérdésekre. Csernobil szellemvárosa elmeséli a történetét... A történetet, ami életekbe került. Egy katasztrófa, ami még ma is hatással van ránk..",
  },

  {
    name: "ER: Jungle Quest",
    media: [
      {
        type: "image",
        src: "./images/games/erj-banner.jpg",
        alt: "ER: Jungle Quest kép",
      },

      {
        type: "video",
        src: "./videos/erj-video.webm",
        alt: "ER: Jungle Quest videó",
      },

      {
        type: "image",
        src: "./images/games/erj-1.jpg",
        alt: "ER: Jungle Quest kép",
      },

      {
        type: "image",
        src: "./images/games/erj-2.jpg",
        alt: "ER: Jungle Quest kép",
      },

      {
        type: "image",
        src: "./images/games/erj-3.jpg",
        alt: "ER: Jungle Quest kép",
      },
    ],

    tags: ["multiplayer", "szabaduló szoba"],

    headerTitle: "Fedezd fel a dzsungel titkait!",
    description:
      "Készen állsz egy lélegzetelállító kalandra a dzsungel mélyén? Az ER: Jungle Quest egy izgalmas és misztikus kalandjáték, amely magával ragad téged egy elvarázsolt világba, ahol az ősi titkok és rejtélyek felfedezésre várnak. Készülj fel a kihívásokra, és légy te az, aki megfejti a dzsungel legnagyobb titkait! Merülj el egy lebilincselő történetben, amely tele van váratlan fordulatokkal és felfedezésekkel. Kövesd a nyomokat és derítsd ki, mi rejtőzik a dzsungel szívében.",
  },

  {
    name: "ER: Survival",
    media: [
      {
        type: "image",
        src: "./images/games/ers-banner.jpg",
        alt: "ER: Survival kép",
      },

      {
        type: "video",
        src: "./videos/ers-video.mp4",
        alt: "ER: Survival videó",
      },

      {
        type: "image",
        src: "./images/games/ers-1.jpg",
        alt: "ER: Survival kép",
      },

      {
        type: "image",
        src: "./images/games/ers-2.jpg",
        alt: "ER: Survival kép",
      },

      {
        type: "image",
        src: "./images/games/ers-3.jpg",
        alt: "ER: Survival kép",
      },
    ],

    tags: ["multiplayer", "szabaduló szoba"],

    headerTitle: "Éld túl a vadon kihívásait!",
    description:
      "Egy felejthetetlen nyaralást terveztél a barátaiddal. Azonban nem számítottál arra, hogy ez túlélési küldetéssé válik. Egy villám csapott a gépbe amely egy egy kis lakatlan sziget mellé zuhant a Csendes-óceánon. A pilótafülke adója meghibásodott és nem engedi, hogy ráhangolódj a frekvenciára, ami keresztül segítséget kell kérned. Ki tudja, meddig kell várnod, amíg a keresőcsapat megtalál... Addig is, döbbent vagy, meg vagy rémülve és szenvedsz az éhségtől. Nincsen ellátmány és semmi más, csak vad természet körülötted. Az időjárás egyre rosszabbra fordul, és szükséged van egy helyre, ahol elbújhatsz. Használd a kritikus gondolkodást a túléléshez. Nézz körül, mi található a szigeten, és hogyan segíthet abban, hogy életben maradj.",
  },

  {
    name: "ER: Sanctum",
    media: [
      {
        type: "image",
        src: "./images/games/ersa-banner.jpg",
        alt: "ER: Sanctum kép",
      },

      {
        type: "video",
        src: "./videos/ersa-video.webm",
        alt: "ER: Sanctum videó",
      },

      {
        type: "image",
        src: "./images/games/ersa-1.jpg",
        alt: "ER: Sanctum kép",
      },

      {
        type: "image",
        src: "./images/games/ersa-2.jpg",
        alt: "ER: Sanctum kép",
      },

      {
        type: "image",
        src: "./images/games/ersa-3.jpg",
        alt: "ER: Sanctum kép",
      },
    ],

    tags: ["multiplayer", "szabaduló szoba"],

    headerTitle: "Fedezd fel a misztikum és kaland világát!",
    description:
      "H.P. Lovecraft világa tele van sötét helyekkel és misztikus lényekkel, amelyektől távol kell tartanod magad. Levelet kaptál közeli barátodtól, Anna-tól, aki nyomozóként vizsgálja a közeli erdőkben történő rejtélyes rejtélyes eltűnéseket. Most már nincs más választásod, mint mindent megtwenni azért, hogy megmentsd. A levélben kérte a segítséged, aztán soha többé nemadott életjelet magáról... A saját nyomozásodat fogod végezni. Ideje meglátogatni egy régi elhagyott kolostort, ahol egy ősi istenség kultusza jött létre. Nemcsak az életed de a lelked is kockáztatnod kell, amikor a titokzatos erővel találkozol, amely az üres kolostor börtönében zuhan. Annak érdekében, hogy megtudd, mi történt a barátoddal, és megszabadulj a paranormális jelenségektől, szembe kell nézzé a szörnyű titkokkal, melyeket ez a sötét szentély rejteget, és meg kell oldaniod az össszes rejtvényt.",
  },

  {
    name: "ER: Cyberpunk",
    media: [
      {
        type: "image",
        src: "./images/games/ercy-banner.jpg",
        alt: "ER: Cyberpunk kép",
      },

      {
        type: "video",
        src: "./videos/ercy-video.webm",
        alt: "ER: Cyberpunk videó",
      },

      {
        type: "image",
        src: "./images/games/ercy-1.jpg",
        alt: "ER: Cyberpunk kép",
      },

      {
        type: "image",
        src: "./images/games/ercy-2.jpg",
        alt: "ER: Cyberpunk kép",
      },

      {
        type: "image",
        src: "./images/games/ercy-3.jpg",
        alt: "ER: Cyberpunk kép",
      },
    ],

    tags: ["multiplayer", "szabaduló szoba"],

    headerTitle: "Fedezd fel a jövőt és éld át a technológiai forradalmat!",
    description:
      "A 22. század kezdetén járunk. A társadalom a gyors technológiai fejlődés közepette összeomlott. Az emberek nagy mértékben módosítják saját testüket. A vállalatok háborúznak egymással az adatokért, amelyek a piacon a legértékesebb árucikké váltak. A különleges készségekkel rendelkező kiborgokból álló csapatod úgy döntött, hogy ellop néhány ritka adatot egy befolyásos vállalat archívumából. Miután észrevétlenül beszivárogtál a komplexumba, be kell jutnod az archívumba, és le kell töltened a veremmemóriát. Ez azonban egyáltalán nem lesz egyszerű.",
  },

  {
    name: "ER: Christmas",
    media: [
      {
        type: "image",
        src: "./images/games/erch-banner.jpg",
        alt: "ER: Christmas kép",
      },

      {
        type: "video",
        src: "./videos/erch-video.webm",
        alt: "ER: Christmas videó",
      },

      {
        type: "image",
        src: "./images/games/erch-1.jpg",
        alt: "ER: Christmas kép",
      },

      {
        type: "image",
        src: "./images/games/erch-2.jpg",
        alt: "ER: Christmas kép",
      },

      {
        type: "image",
        src: "./images/games/erch-3.jpg",
        alt: "ER: Cyberpunk kép",
      },
    ],

    tags: ["multiplayer", "szabaduló szoba"],

    headerTitle: "Ünnepelj és oldj meg rejtélyeket!",
    description:
      "Veszélyben a karácsony! A télapót elkapta a hóvihar, elvesztette az összes ajándékot, és nem talál haza. Csak te mentheted meg a karácsonyt. Azért, hogy a télapó megtalálja a házát, fel kell kapcsolnod a lámpákat az erdő legnagyobb karácsonyfáján. Mielőtt azonban ezt megtennéd, el kell jutnod oda, ahol a Télapó él az Északi-sarkon, és mindent rendbe kell hoznod. Tudd meg, hogy a manókat miért nem hajlandóak dolgozni, és miért nem kapják meg az ajándékokat a gyerekek. Siess, hogy újraéleszd az első karácsonyfát a Mikulás legjobb rénszarvasával együtt!",
  },

  {
    name: "ER: Mission Sigma",
    media: [
      {
        type: "image",
        src: "./images/games/erm-banner.jpg",
        alt: "ER: Mission Sigma kép",
      },

      {
        type: "video",
        src: "./videos/erm-video.webm",
        alt: "ER: Mission Sigma videó",
      },

      {
        type: "image",
        src: "./images/games/erm-1.jpg",
        alt: "ER: Mission Sigma kép",
      },

      {
        type: "image",
        src: "./images/games/erm-2.jpg",
        alt: "ER: Mission Sigma kép",
      },

      {
        type: "image",
        src: "./images/games/erm-3.jpg",
        alt: "ER: Mission Sigma kép",
      },
    ],

    tags: ["multiplayer", "szabaduló szoba"],

    headerTitle: "Csatlakozz a végső titkos küldetéshez!",
    description:
      "A titkosszolgálatok megtaláltak és ártalmatlanítottak egy ismert terroristát, aki az elmúlt tíz évben a város elmaradottabb területein bujkált. Eddig a jó hír. Kiderült, hogy a gazfickó egy elhagyott sokemeletes ház tetején egy időzítővel ellátott nukleáris töltetet helyezett el. Maga az épület egy bonyolult csapdákkal és akadályokkal teli. toronnyá vált. Téged javasoltak a helyzet mefgoldására, mint az ilyen rejtvények szakértőjét, a titkosszolgálat pedig segített neked bejutni az udvarba. A többi rajtad múlik. Képes vagy kikerülni az összes csapdát, és megelőzni egy nukleáris támadást?",
  },

  {
    name: "House of Fear",
    media: [
      {
        type: "image",
        src: "./images/games/hofr-banner.jpg",
        alt: "House of Fear kép",
      },

      {
        type: "video",
        src: "./videos/hofr-video.webm",
        alt: "House of Feara videó",
      },

      {
        type: "image",
        src: "./images/games/hofr-1.jpg",
        alt: "House of Fear kép",
      },

      {
        type: "image",
        src: "./images/games/hofr-2.jpg",
        alt: "House of Fear kép",
      },

      {
        type: "image",
        src: "./images/games/hofr-3.jpg",
        alt: "House of Fear kép",
      },
    ],

    tags: ["multiplayer", "szabaduló szoba"],

    headerTitle: "Merülj el a rettegés világában!",
    description:
      "Éjszaka van. Egy elhagyatott , rozoga viskó van az erdőben. A sarkokban pókhálók, a padlón por, ócska bútorok és ... egyetlen élő lélek sem. Úgy tűnik, hogy a ház régóta elhagyatott, de valóban ez a helyzet? Megpróbálod megérteni, mi folyik itt, de csak egy dolgot fogsz fel - ez a ház nem enged olyan könnyen menekülni. Körülnézve látod, hogy az ajtók és ablakok be vannak zárva, nincs áram, a gyertya pislákolása pedig alig elég ahhoz, hogy megvilágítsa a homályos szobát. Rémülten állapítod meg, hogy csapdába estél. Egy ember sziluettje villog a gyertya gyenge fényében ... Vagy csak a fény űz tréfát veled? Készen állsz arra, hogy legyőzzed a félelmedet és belemerülj a homályos hely titkaiba?",
  },

  {
    name: "Archer",
    media: [
      {
        type: "image",
        src: "./images/games/arch-banner.jpg",
        alt: "Archer kép",
      },

      {
        type: "video",
        src: "./videos/arch-video.webm",
        alt: "Archer videó",
      },

      {
        type: "image",
        src: "./images/games/arch-1.jpg",
        alt: "Archer kép",
      },

      {
        type: "image",
        src: "./images/games/arch-2.jpg",
        alt: "Archer kép",
      },

      {
        type: "image",
        src: "./images/games/arch-3.jpg",
        alt: "Archer kép",
      },
    ],

    tags: ["multiplayer", "singleplayer"],

    headerTitle: "Csatlakozz a hősi kalandokhoz!",
    description:
      "Ki szeretted volna próbálni magad az íjászatban? Álmodoztál arról, hogy a középkor hősévé válj? Az Archer játékban az erődöt megtámadó orkok, koboldo és trollok hordáival kell harcolnod, és végezetül le kell győznöd a fő-főnököt! Harcolhatsz egyedül, mint egy igazi hős, vagy segítségül hívhatod a barátaid, és együtt lőhetitek a szörnyeket. Siess! Ragadj íjat, és védd meg kastélyodat a hívatlan vendégekkel szemben!",
  },

  {
    name: "Signal Lost",
    media: [
      {
        type: "image",
        src: "./images/games/sl-banner.jpg",
        alt: "Signal Lost kép",
      },

      {
        type: "video",
        src: "./videos/sl-video.webm",
        alt: "Signal Lost videó",
      },

      {
        type: "image",
        src: "./images/games/sl-1.jpg",
        alt: "Signal Lost kép",
      },

      {
        type: "image",
        src: "./images/games/sl-2.jpg",
        alt: "Signal Lost kép",
      },

      {
        type: "image",
        src: "./images/games/sl-3.jpg",
        alt: "Signal Lost kép",
      },
    ],

    tags: ["multiplayer", "singleplayer"],

    headerTitle: "Merülj el az űr misztikumában!",
    description:
      "Öt órával ezelőtt váratlanul elvesztetted a kapcsolatot a Föld körül keringő „Asgard” titkos kutatóállomással. Később az állomás távolódó pályára állt. Alig egy óra van hátra, amíg az „Asgard” belép a bolygónk légkörébe. Ha az állomás a Földre esik, annak millióan esnek áldozatul. Te a vészhelyzeti csapat tagja vagy, amelynek vissza kell állítania az állomásrendszerek működőképességét, amely a pálya korrekciójához szükséges. Ennek érdekében ismereteidet digitálisan beépítik a mérnöki robotok kísérleti modelljébe, amelyeket szerencsére éppen egy másik, közelben lévő pályán tesztelnek. Mi rejtőzik az űrállomáson, amely most élettelennek tűnik, és hová tűnt a legénység? Keress válaszokat és javítsd ki a fedélzeti fő számítógépet a katasztrófa megelőzése érdekében.",
  },
];

function Games() {
  const [search, setSearch] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);
  const debouncedText = useDebounce<string>(search);

  const checktags = (gameTags: string[]) => {
    if (tags.length === 0) {
      return true;
    }

    return tags.every((t) => gameTags.includes(t));
  };

  return (
    <>
      <GamesHeader />
      <GamesTextSection />
      <SearchSection setText={setSearch} tags={tags} setTags={setTags} />
      {gamesko
        .filter((game) => {
          return game.name
            .toLocaleLowerCase()
            .includes(debouncedText.toLocaleLowerCase()) && checktags(game.tags as string[]);
        })
        .map((game, id, gamesko) => {
          return (
            <Game
              key={game.media[0].src}
              name={game.name}
              media={game.media}
              headerDesc={game.headerTitle}
              description={game.description}
              className={`${
                id === gamesko.length - 1
                  ? ""
                  : "before:absolute before:bg-gradient-to-l before:from-d-purple before:from-25% before:via-h-teal before:to-75% before:to-d-purple before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-[30%] before:h-[1px]"
              }`}
            />
          );
        })}

      <Connection className="!top-0" />
    </>
  );
}

export default Games;
