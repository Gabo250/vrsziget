import { ButtonHTMLAttributes, useState } from "react";
import { twMerge } from "tailwind-merge";

type tagProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
  clickHandle: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
};

function TagButton({ text, clickHandle, className, ...props }: tagProps) {
  const [clicked, setClicked] = useState<boolean>(false);

  const handleCLick = (e: React.MouseEvent<HTMLButtonElement>) => {
    clickHandle(e);
    setClicked((prev) => !prev);
  };

  return (
    <button
      onClick={handleCLick}
      data-value={text}
      className={twMerge(
        `relative py-2 px-5 rounded-xl uppercase border-[1px] border-h-teal cursor-pointer text-white transition-all duration-300 hover:bg-h-teal ${
          clicked ? "bg-h-teal" : ""
        }`,
        className
      )}
      {...props}
    >
      {text}
    </button>
  );
}

export default TagButton;
