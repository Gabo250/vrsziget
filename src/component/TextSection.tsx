import { ReactNode, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

type sectionProps = React.ComponentProps<"section"> & {
  headerText: string;
  className?: string;
  headerClassName?: string;
  children?: ReactNode;
};

const TextSection = forwardRef<HTMLElement, sectionProps>(function TextSection(
  { headerText, className, headerClassName, children, ...props }: sectionProps,
  ref
) {
  return (
    <section
      ref={ref}
      className={twMerge("w-full text-white", className)}
      {...props}
    >
      <h2 className={twMerge("text-center text-[2rem] px-4", headerClassName)}>{headerText}</h2>
      {children}
    </section>
  );
});

export default TextSection;
