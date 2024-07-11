import { useState } from "react";
import AnimatedBorder from "../component/AnimatedBorder";
import Card from "../component/Card";

type propsType = {
    price: number,
    oPrice?: number,
    time: number,
    player: number,
    clicked: boolean,
    id: number
    handleCLick: (e: React.MouseEvent<HTMLElement>) => void
}

function MemberChooseCard({ price, oPrice, time, player, clicked, id, handleCLick }: propsType) {
    const [mouseOver, setMouseOver] = useState<boolean>(false);
  
    const handleMouseEnter = () => {
      setMouseOver(true);
    };
  
    const handleMouseLeave = () => {
      setMouseOver(false);
    };
  
    return (    
        <Card
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          variant="dark"
          effect="glass"
          data-player={player}
          data-id={id}
          onClick={handleCLick}
          className={`relative flex flex-col border-[1px] cursor-pointer ${clicked ? "scale-110 border-purple-400" : "border-teal-500"} justify-evenly gap-20 items-center w-[14rem] h-[20rem] bg-price-card bg-cover bg-center rounded-b-xl transition-[transform,_opacity] duration-1000 hover:scale-110 hover:border-0 hover:z-[10] [&:not(:hover)]:z-[0]`}
        >
          <div className=" bg-black flex-col bg-opacity-45 backdrop-blur-sm shadow-[0px_12px_12px_-6px] shadow-l-purple flex justify-center items-center w-[70%] h-32 -translate-y-[70%] rounded-b-xl">
            {oPrice ? (
              <span className="text-h-teal text-[.90rem] font-extralight line-through">
                {oPrice + " Ft"}
              </span>
            ) : null}
            <span className="text-h-teal text-[1.5rem] [text-shadow:0px_1px_2px_#00f0ff] font-extrabold">
              {price + " Ft"}
            </span>
          </div>
  
          <div className="flex flex-col justify-center items-center gap-2 uppercase">
            <p className="text-white text-[1rem] [text-shadow:0px_1px_4px_#ffffff]">
              {player + " Játékos"}
            </p>
            <span className="text-c-teal italic">{time + " perc"}</span>
          </div>
  
          {mouseOver ? <AnimatedBorder className="opacity-0" /> : null}
        </Card>
    );
  }
  
export default MemberChooseCard;