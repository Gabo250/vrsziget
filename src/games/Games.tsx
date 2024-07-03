import { mediaElement } from "../component/MediaSlider";
import Connection from "../home/Connection";
import Game from "./Game";
import GamesHeader from "./GameHeader";
import GamesTextSection from "./GamesTextSection";

type gameType = {
  name: string,
  media: mediaElement[],
  headerTitle?: string,
  description: string
}

const gamesko: gameType[] = [
  {
    name: 'Elven Assassin',
    media: [
      {
        type: "video",
        src: "https://www.youtube.com/embed/D94cNMNyMy4?si=2RbvAhOpJFq9HO-i",
        alt: "Elven Assassin"
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
      }
    ],

    headerTitle: "Lépj be a mágikus világba, és válj legendás íjásszá!",
    description: "Készülj fel egy lenyűgöző virtuális valóság élményre az Elven Assassin-nal! Ebben a fantasztikus VR játékban, amely elvarázsolt világokba és epikus csatákba repít, te lehetsz a hős, aki megmenti a birodalmat. Ragadd meg az íjadat, és állj készen a kalandra! Éld át a klasszikus “Tower Defense” játék típust VR-ral. Az Elven Assassin lehetőséget ad arra, hogy egyedül küzdj, vagy barátaiddal együtt vegyél részt a csatákban. Hívd meg barátaidat, és harcoljatok együtt a közös ellenségek ellen, vagy mérjétek össze tudásotokat a többjátékos módban. A közös élmény még izgalmasabbá és szórakoztatóbbá teszi a játékot!"
  },

  {
    name: 'Assetto Corsa',
    media: [
      {
        type: "video",
        src: "https://www.youtube.com/embed/wpTkgOB_TEo?si=sg3_At3B5ZtwrAOq",
        alt: "Elven Assassin"
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
      }
    ],

    headerTitle: "Fedezd fel az Assetto Corsa VR  elképesztő valóságát!",
    description: "Merülj el a vezetés legvalósághűbb élményében az Assetto Corsa-ban virtuális valóság (VR) segítségével! Most még közelebb kerülhetsz az igazi versenyzés izgalmaihoz, és úgy érezheted magad, mintha valóban a volán mögött ülnél. A VR segítségével minden részletet tökéletesen láthatsz és érezhetsz. A versenypályák kanyarjai, az autók belső tere és a táj minden apró részlete valósághűen tárul eléd. Éld át az adrenalint, ahogy végigszáguldasz a híres versenypályákon!"
  },

  {
    name: 'Beat Saber',
    media: [
      {
        type: "video",
        src: "https://www.youtube.com/embed/vL39Sg2AqWg?si=VfAWKqynN_26pzRD",
        alt: "Beat Saber"
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
      }
    ],

    headerTitle: "Vágj bele a ritmus világába!",
    description: "Készülj fel a végső VR élményre a Beat Saberrel! Ez a ritmusjáték minden érzékedet megmozgatja, miközben a zene ütemére szeli át a levegőt. Tedd próbára a reflexeidet és a ritmusérzékedet egy olyan világban, ahol a zene és a mozgás tökéletes harmóniában találkozik! A Beat Saber különböző nehézségi szintekkel és kihívásokkal vár, amelyek próbára teszik képességeidet. Versenyezz barátaiddal vagy a világ legjobbjaival az online ranglistákon, és mutasd meg, hogy te vagy a legjobb ritmusvágó!"
  }
];

function Games() {
  return (
    <>
      <GamesHeader />
      <GamesTextSection />
      {
        gamesko.map((game) => {
          return (
            <Game 
              key={game.media[0].src}
              name={game.name}
              media={game.media}
              headerDesc={game.headerTitle}
              description={game.description}
            />
          );
        })
      } 

      <Connection className="!top-0" />    
    </>
  );
}

export default Games;

