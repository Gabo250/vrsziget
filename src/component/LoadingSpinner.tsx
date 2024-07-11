import { twMerge } from "tailwind-merge";
import SpinnerCircle from "./SpinnerCircle";
import { ReactNode } from "react";

const createCircles = (circleNumber: number) => {
  let elements: ReactNode[] = [];
  const circleRotateDeg = 360 / circleNumber;
  const animDelay = .05;

  for (let i = 0; i < circleNumber; i++) {
    const style = {
      transform: `rotate(${circleRotateDeg * i}deg)`,
      '--delay': `${animDelay * i}s`    
    };    
    
    elements.push(<SpinnerCircle key={i} className={`before:absolute before:content-[''] before:top-0 before:left-0 before:w-2 before:h-2 before:rounded-full before:bg-slate-100 before:shadow-[0px_0px_10px_4px_rgb(0_135_120)] loading-circle`} style={style} />);
  }

  return elements;
}

function LoadingSpinner({ className }: { className?: string }) {
  const spinner = createCircles(10);
  return (
    <div className={twMerge("relative w-9 h-9", className)}>{spinner}</div>
  );
}

export default LoadingSpinner;