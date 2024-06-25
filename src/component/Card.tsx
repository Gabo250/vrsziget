import { ReactNode, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

type cardProps = React.ComponentProps<'div'> & {
    variant: 'dark' | 'light',
    effect?: 'glass'
    className?: string,
    children?: ReactNode
}

const cardVariants = (variant: string, effect: string | undefined) => {
    const variants = {
        dark: "bg-d-purple",
        light: "bg-d-purple bg-opacity-20",
        glass: "backdrop-blur-sm"
    };   
    
    return variants[variant as keyof typeof variants] + " " + variants[effect as keyof typeof variants];
}

const Card = forwardRef<HTMLElement, cardProps>(function Card({ variant, effect, className, children, ...props }: cardProps, ref ) {
  const classes = cardVariants(variant, effect);

  return (
    <section ref={ref} className={twMerge(classes, className)} {...props}>
      {children}
    </section>
  );
}) 

export default Card;