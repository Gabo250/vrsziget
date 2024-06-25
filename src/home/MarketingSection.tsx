import MarketingItem from "./MarketingItem";
import ParallaxImg from "./ParallaxImg";

function MarketingSection() {
    return(
        <section className="relative bg-[#030A0C] w-full pt-20 pb-40 px-32 md:px-16 xsm:px-2">
            <h2 className="relative w-[35rem] left-[20%] -translate-x-[18%] md:w-full">
               <span className="bg-clip-text text-transparent text-[2.4rem] font-black bg-gradient-to-br from-[rgba(11,133,159,1)] to-[rgba(204,0,255,1)] xsm:text-[2rem] xlsm:!text-[1.6rem]">Éld Át a Digitális Valóságot Egy Teljesen Új Szinten!</span> 
            </h2> 

            <div className="relative flex flex-col mt-[5rem] justify-center gap-40">
                <MarketingItem header="Modern VR Technológia" text="Tapasztald meg a piacon elérhető fejlett VR szemüvegek és vezérlők kínálatát a Meta Quest 3-at, amely elképesztő részletességgel és realizmussal jelenítik meg a digitális világot." bg="bg-mq3" swap={true} lineHeight="before:h-[70%]" />
                <MarketingItem header="Mozogj Szabadon a Virtuális Valóságban" text="Unod esetleg már, hogy a virtuális valóságban csak egy helyben állsz, miközben mozogsz? Most itt a megoldás! Probáld ki nálunk a KAT VR-t, ami forradalmasítja a VR élményt, lehetővé téve, hogy szabadon mozogj, fuss, guggolj és ugrálj a digitális világban!" bg="bg-kat" swap={false} lineHeight="before:h-[45%]" />
            </div>

            <ParallaxImg />
        </section>
    );
}

export default MarketingSection;