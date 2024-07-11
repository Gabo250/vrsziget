import { useRef, useState } from "react";
import AnimatedBorder from "../component/AnimatedBorder";
import Card from "../component/Card";
import useViewBox from "../hooks/useViewBox";

type propsType = {
  oprice?: string;
  price: string;
  time: number;
  desc: string;
};

function PriceCard({ price, time, desc, oprice }: propsType) {
  const [mouseOver, setMouseOver] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useViewBox(ref);

  const handleMouseEnter = () => {
    setMouseOver(true);
  };

  const handleMouseLeave = () => {
    setMouseOver(false);
  };

  return (    
      <Card
        ref={ref}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        variant="dark"
        effect="glass"
        className={`relative flex flex-col border-[1px] border-teal-500 justify-evenly gap-20 items-center w-[14rem] h-[20rem] bg-price-card bg-cover bg-center rounded-b-xl transition-[transform,_opacity] duration-1000 ${
          inView ? "opacity-100" : "opacity-0"
        } hover:scale-110 hover:border-0 hover:z-[10] [&:not(:hover)]:z-[0]`}
      >
        <div className=" bg-black flex-col bg-opacity-45 backdrop-blur-sm shadow-[0px_12px_12px_-6px] shadow-l-purple flex justify-center items-center w-[70%] h-32 -translate-y-[70%] rounded-b-xl">
          {oprice ? (
            <span className="text-h-teal text-[.90rem] font-extralight line-through">
              {oprice + " Ft"}
            </span>
          ) : null}
          <span className="text-h-teal text-[1.5rem] [text-shadow:0px_1px_2px_#00f0ff] font-extrabold">
            {price + " Ft"}
          </span>
        </div>

        <div className="flex flex-col justify-center items-center gap-2 uppercase">
          <p className="text-white text-[1rem] [text-shadow:0px_1px_4px_#ffffff]">
            {desc}
          </p>
          <span className="text-c-teal italic">{time + " perc"}</span>
        </div>

        {mouseOver ? <AnimatedBorder className="opacity-0" /> : null}
      </Card>
  );
}

export default PriceCard;