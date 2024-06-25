import { useState, useEffect, useRef } from "react";

/**
* Listening the current scroll position.
*
* @returns scrollY 
*/
function useScroll(time : number) {
    const [scrollY, setScrollY] = useState<number>(() => { return window.scrollY });
    const timeOutID = useRef<number>();

    useEffect(() => {
        const handleScroll = () => {
            timeOutID.current = setTimeout(() => {
                setScrollY(window.scrollY);
            }, time)            
        }
        
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {            
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(timeOutID.current);
        }
    }, [scrollY, time]);

    return scrollY;
}

export default useScroll;