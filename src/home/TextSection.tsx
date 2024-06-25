import { useRef } from "react";
import useViewBox from "../hooks/useViewBox";

function TextSection() {
    const ref = useRef<HTMLElement>(null);
    const inView = useViewBox(ref);

 return(
    <section id="textsection" ref={ref} className={`relative flex justify-center items-center z-10 w-full h-60 ${ inView ? " transition-transform duration-1000 delay-500 skew-y-3 skew-x-3" : "" } shadow-[0px_20px_50px_-10px] shadow-teal-700 rounded-b-[2rem] [background:radial-gradient(circle,_rgba(2,43,52,1)_0%,_rgba(0,0,0,1)_55%)]`}>
        <h2 className="text-white text-center text-[2rem] px-4">Lépj Be a Jövőbe: Fedezd Fel a VR Szoba Varázsát!</h2>
    </section>
 );
}

export default TextSection;