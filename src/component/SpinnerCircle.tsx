import { twMerge } from "tailwind-merge";

type SpinnerProps = {
    className?: string,
    style?: React.CSSProperties
}

function SpinnerCircle({ className, style }: SpinnerProps) {
  return (
    <span
      className={twMerge(`absolute w-full h-full top-0 left-0`, className)}
      style={style}
    />
  );
}

export default SpinnerCircle;