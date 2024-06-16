import React from "react";
import clsx from "clsx";
type UiButtonVariant = "primary" | "secondary";

export type UiButtonProps = {
  variant: UiButtonVariant;
} & {
  className?: string;
  text: string;
};

const Button2 = ({ className, text, variant }: UiButtonProps) => {
  return (
    <div
      className={clsx(
        className,
        "duration-300 cursor-pointer text-center text-xl",
        {
          primary:
            "text-white bg-indigo-900 hover:bg-white hover:text-indigo-900 hover:border-2 hover:border-indigo-900",
          secondary:
            "bg-white text-indigo-900 hover:bg-indigo-900 hover:text-white hover:border-2 hover:border-white",
        }[variant]
      )}
    >
      {text}
    </div>
  );
};

export default Button2;

// className={`${className} hover:bg-white hover:text-indigo-900 hover:border-2 hover:border-indigo-900 duration-300 cursor-pointer`}
