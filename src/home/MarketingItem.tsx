import { useRef } from "react";
import useViewBox from "../hooks/useViewBox";

type propType = {
  header: string;
  text: string;
  swap: boolean;
  bg: string;
  lineHeight: string;
};

function MarketingItem({ header, text, swap, bg, lineHeight }: propType) {
  const ref = useRef<HTMLElement>(null);
  const inViewBox = useViewBox(ref);

  return (
    <>
      {swap ? (
        <article
          ref={ref}
          className={`relative flex w-full justify-center gap-[10rem] transition-all duration-700 ${ inViewBox ? "opacity-100" : "opacity-0" } xl:flex-col xl:items-center`}
        >
          <div className={`relative flex flex-col overflow-hidden justify-center w-[30rem] transition-opacity duration-700 ${ inViewBox ? `before:absolute before:content-[''] before:w-[1px] before:transition-all before:duration-1000 before:bg-h-teal ${ lineHeight }  before:blur-[1px] before:-right-7 before:top-[50%] before:-translate-y-[50%]` : "before:absolute before:content-[''] before:w-[1px] before:bg-h-teal before:transition-all before:duration-1000 before:h-0 before:blur-[1px] before:-right-7 before:top-[50%] before:-translate-y-[50%]" } xsm:w-full`}>
            <h3 className="text-h-teal font-bold italic text-right text-[1.5rem]">
              {header}
            </h3>
            <p className="text-right text-[1.13rem] text-white">{text}</p>
          </div>

          <div className="relative md:w-full">
            <div
              className={`relative ${bg} z-[10] bg-cover  bg-center w-[27rem] overflow-hidden h-[13.5rem] md:w-full`}
            />
            <div className="absolute rounded-full -top-28 blur-[8rem] left-0 w-[28rem] z-0 h-[28rem] [background:radial-gradient(circle,_rgba(54,13,106,0.4)_0%,_rgba(17,134,150,0.3981967787114846)_50%,_rgba(31,2,68,0.4)_100%)] md:w-full md:h-full" />
          </div>
        </article>
      ) : (
        <article
          ref={ref}
          className={`relative flex w-full justify-center over gap-[10rem] transition-all duration-700 ${ inViewBox ? "opacity-100" : "opacity-0" } xl:flex-col xl:items-center`}
        >
          <div className="relative md:w-full">
            <div className={`relative ${bg} z-[10] bg-cover bg-center w-[27rem] h-[26rem] md:w-full`} />
            <div className="absolute rounded-full -top-28 blur-[8rem] left-0 w-[28rem] z-0 h-[28rem] [background:radial-gradient(circle,_rgba(54,13,106,0.4)_0%,_rgba(17,134,150,0.3981967787114846)_50%,_rgba(31,2,68,0.4)_100%)] md:w-full md:h-full" />
          </div>

          <div className={`relative flex flex-col overflow-hidden justify-center w-[30rem] transition-opacity duration-700 ${ inViewBox ? `before:absolute before:content-[''] before:w-[1px] before:transition-all before:duration-1000 before:bg-h-teal ${ lineHeight } before:blur-[1px] before:-left-7 before:top-[50%] before:-translate-y-[50%]` : "before:absolute before:content-[''] before:w-[1px] before:bg-h-teal before:transition-all before:duration-1000 before:h-0 before:blur-[1px] before:-left-7 before:top-[50%] before:-translate-y-[50%]" } xsm:w-full`}>
            <h3 className="text-h-teal font-bold italic text-left text-[1.5rem]">
              {header}
            </h3>
            <p className="text-left text-[1.13rem] text-white">{text}</p>
          </div>
        </article>
      )}
    </>
  );
}

export default MarketingItem;