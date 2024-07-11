import { twMerge } from "tailwind-merge";
import useScroll from "../hooks/useScroll";
import { BottomArrow } from "../utility/Icon";

type navigateType = {
  to: string;
  scrollInfo: ScrollIntoViewOptions;
  className?: string
};

function NavigateBot({ to, scrollInfo, className }: navigateType) {
  const scrollY = useScroll(20);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const clickedElement = e.currentTarget;
    const href = clickedElement.dataset.href;
    const targetElement = document.getElementById(href as string);

    targetElement?.scrollIntoView(scrollInfo)
  }

  return (
    <div
        data-href={to}
        onClick={handleClick}
      className={twMerge(`absolute bottom-14 size-12 left-1/2 -translate-x-1/2 cursor-pointer rounded-full transition-all duration-500 hover:backdrop-blur-sm hover:scale-110 ${
        scrollY !== 0 ? "translate-y-[850%] -rotate-180 z-[-1]" : "translate-y-0 z-[30]"
      }`, className)}
    >
      <BottomArrow />
    </div>
  );
}

export default NavigateBot;