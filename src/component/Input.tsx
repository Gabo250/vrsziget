import { InputHTMLAttributes, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

type inputProps = InputHTMLAttributes<HTMLInputElement> & {
    type: string,
    variant: 'dark' | 'light',
    className?: string,
}

const inputVariants = (variant: string) => {
    const variants = {
        dark: "bg-slate-700 text-slate-200",
        light: "bg-slate-200 text-slate-600"
    }

    return "input " + variants[variant as keyof typeof variants];
}

const Input = forwardRef<HTMLInputElement, inputProps>(({ type, variant, className, ...props }: inputProps, ref) => {
    const classes = inputVariants(variant);

    return (
        <input ref={ref} type={ type } className={ twMerge(classes, className) } {...props}/>
    );
})

export default Input;