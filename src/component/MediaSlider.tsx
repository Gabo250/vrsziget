import { Children,  ReactElement, ReactNode, cloneElement, useState } from "react";
import { twMerge } from "tailwind-merge";
import { LeftArrow, RightArrow } from "../utility/Icon";

export type mediaElement = {
  type: "video" | "image";
  src: string;
  alt?: string;
};

type sliderProps = React.ComponentProps<"div"> & {
  startIndex?: number;
  className?: string;
  children?: ReactNode;
};

function MediaSLider({
  startIndex,
  className,
  children,
  ...props
}: sliderProps) {
  const [cIndex, setCIndex] = useState<number>(() => typeof startIndex !== "undefined" ? startIndex : Math.floor(Children.count(children) / 2) + 1);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const dir = e.currentTarget.dataset.direction;
    const childCount = Children.count(children);

    if (dir === "left" && cIndex != 0) {
      setCIndex(prev => prev-1);
    } else if (dir === "right" && cIndex != childCount - 1) {
      setCIndex(prev => prev+1);
    }
  };

  const direction = (id: number) => {
    if (id === cIndex) {
      return "transition-all duration-1000 left-[50%] -translate-x-[50%] opacity-100";
    } else if (id > cIndex) {
      return "transition-all duration-1000 left-[100%] opacity-0";
    } else {
      return "transition-all duration-1000 -left-[100%] opacity-0";
    }
  };

  return (
    <div className={twMerge("relative w-full overflow-hidden", className)} {...props}>
      <div
        onClick={handleClick}
        data-direction="left"
        className={`absolute top-1/2 left-[5%] -translate-y-1/2 z-[3] rounded-full backdrop-blur-sm hover:transition-all hover:duration-500 hover:scale-110 ${
          cIndex === 0 ? "opacity-20" : "cursor-pointer opacity-100"
        }`}
      >
        <LeftArrow />
      </div>
      <div
        onClick={handleClick}
        data-direction="right"
        className={`absolute top-1/2 right-[5%] -translate-y-1/2 z-[3] rounded-full backdrop-blur-sm hover:transition-all hover:duration-500 hover:scale-110 ${
          cIndex === Children.count(children) - 1
            ? "opacity-20"
            : "cursor-pointer opacity-100"
        }`}
      >
        <RightArrow />
      </div>
      {
        Children.map(children, (child, id) => {
          return cloneElement((child as ReactElement).props.children, { className: twMerge((child as ReactElement).props.children.props.className, `absolute ${direction(id)}`), })
        })
      }
    </div>
  );
}

export default MediaSLider;