import { useRef } from "react";
import TextSection from "../component/TextSection";
import useViewBox from "../hooks/useViewBox";

function GamesTextSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useViewBox(ref);

  return (
    <TextSection
      id="gametextsection"
      ref={ref}
      headerText="Merülj El a Virtuális Valóságban - Fedezd Fel a VR Élményt!"
      headerClassName={`relative text-h-teal`}
      className="relative flex flex-col justify-center gap-16 py-16 px-5 z-[20] bg-gradient-to-b from-[#110317] from-[10%] via-[rgba(89,14,135,.45)] to-[90%] to-[#0F0417]"
    >
      <div className="absolute w-full bottom-[98%] left-0 opacity-95">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#110317"
            fillOpacity="1"
            d="M0,128L60,144C120,160,240,192,360,213.3C480,235,600,245,720,229.3C840,213,960,171,1080,160C1200,149,1320,171,1380,181.3L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="flex justify-center items-start gap-40 text-[1.125rem] lg:flex-col lg:items-center lg:gap-16">
        <p
          className={`w-[30rem] xsm:w-full transition-all duration-1000 delay-200 ${
            inView
              ? "opacity-100 translate-x-[0]"
              : "opacity-0 -translate-x-[10%]"
          }`}
        >
          Képzeld el, hogy a kedvenc játékaid világába léphetsz be, ahol minden
          mozdulatod életre kel, és minden kaland a szemed előtt bontakozik ki.
          Ez az, amit a virtuális valóság (VR) nyújt neked! Merülj el a legújabb
          VR játékok világában, és tapasztald meg a játékélmény új dimenzióját.
        </p>

        <p
          className={`w-[30rem] xsm:w-full transition-all duration-1000 delay-500 ${
            inView
              ? "opacity-100 translate-x-[0]"
              : "opacity-0 translate-x-[10%]"
          }`}
        >
          Akár az akciót, a kalandokat, a sportokat vagy a stratégiai játékokat
          szereted, nálunk mindent megtalálsz. Folyamatosan bővülő kínálatunk
          biztosítja, hogy mindig találsz valami újat és izgalmasat.
        </p>
      </div>
    </TextSection>
  );
}

export default GamesTextSection;
