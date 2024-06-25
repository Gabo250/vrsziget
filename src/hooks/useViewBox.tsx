import { useEffect, useRef, useState } from "react";

const OFFSET = "-150px";

/**
 * Checks a react element to if it is in the viewport
 *
 * @param element the given react element's ref
 *
 * @returns inViewBox - boolean
 */
function useViewBox(element: React.RefObject<HTMLElement>) {
  const [inViewBox, setInViewBox] = useState<boolean>(() => {
    return false;
  });
  const obsRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (!element.current) {
      return;
    }

    obsRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInViewBox(true);
          }
        });
      },
      { rootMargin: OFFSET }
    );
  }, [element]);

  useEffect(() => {
    if (!element.current) {
      return;
    }

    obsRef.current?.observe(element.current);

    return () => {
      obsRef.current?.disconnect();
    };
  }, [element]);

  return inViewBox;
}

export default useViewBox;