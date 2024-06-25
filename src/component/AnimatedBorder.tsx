import { twMerge } from "tailwind-merge";

type animProp = {
    color?: string
}

function AnimatedBorder({ color }: animProp) {
  return (
    <>
      <span className={ twMerge("absolute w-full left-0 animate-border-t top-0 h-1 bg-gradient-to-r from-[rgba(53,13,106,0.01)] from-30% to-hd-purple", color) } />
      <span className={ twMerge("absolute w-1 right-0 animate-border-l [animation-delay:1s] top-0 h-full bg-gradient-to-b from-[rgba(53,13,106,0.01)] from-30% to-hd-purple", color) } />
      <span className={ twMerge("absolute w-full right-0 animate-border-b [animation-delay:2s] bottom-0 h-1 bg-gradient-to-l from-[rgba(53,13,106,0.01)] from-30% to-hd-purple", color) } />
      <span className={ twMerge("absolute w-1 left-0 bottom-0 animate-border-r [animation-delay:3s] h-full bg-gradient-to-t from-[rgba(53,13,106,0.01)] from-30% to-hd-purple", color) } />
    </>
  );
}

export default AnimatedBorder;
