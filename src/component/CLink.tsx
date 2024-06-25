import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import AnimatedBorder from "./AnimatedBorder";

type linkProps = React.ComponentProps<"a"> & {
  variant: "default";
  effect?: "glass";
  hover?: "animated";
  className?: string;
  url: string;
  children?: ReactNode;
};

const linkVariant = (
  variant: string,
  effect: string | undefined,
  hover: string | undefined
) => {
  const variants = {
    default:
      "relative text-white py-3 px-5 font-bold uppercase -skew-x-12 overflow-hidden rounded-md",
    animated:
      "before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:transition-all before:z-[-1] before:duration-500 before:bg-hd-purple before:backdrop-blur-md before:bg-opacity-60 before:blur-md hover:before:w-full",
    glass: "backdrop-blur-md",
  };

  return (
    variants[variant as keyof typeof variants] +
    " " +
    variants[effect as keyof typeof variants] +
    " " +
    variants[hover as keyof typeof variants]
  );
};

function CLink({
  variant,
  effect,
  hover,
  className,
  url,
  children,
  ...props
}: linkProps) {
  const classes = linkVariant(variant, effect, hover);

  return (
    <Link to={url} className={twMerge(classes, className)} {...props}>
      <AnimatedBorder />
      {children}
    </Link>
  );
}

export default CLink;
