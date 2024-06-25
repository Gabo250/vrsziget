import { useRef } from "react";
import Card from "../component/Card";
import useViewBox from "../hooks/useViewBox";

type propType = {
  imgSrc: string;
  alt: string;
};

function GameCard({ imgSrc, alt }: propType) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useViewBox(ref);

  return (
    <Card
        ref={ref}
      variant="dark"
      className={`w-64 h-96 overflow-clip rounded-2xl  ${
        inView
          ? " "
          : ""
      } shadow-[0px_10px_50px_-20px] transition-all duration-500 shadow-h-teal hover:-skew-x-3 hover:scale-110 hover:shadow-[0px_10px_50px_-10px] hover:shadow-h-teal`}
    >
      <img src={imgSrc} alt={alt} className="w-full h-full" />
    </Card>
  );
}

export default GameCard;
