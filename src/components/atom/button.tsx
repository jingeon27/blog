import clsx from "clsx";
import { forwardRef } from "react";

export const Button = forwardRef<
  HTMLButtonElement,
  React.PropsWithChildren<React.ComponentProps<"button">>
>((props, ref) => (
  <button
    {...props}
    ref={ref}
    className={clsx(
      "rounded-full hover:brightness-75 font-sans cursor-pointer",
      props.className
    )}
  />
));

Button.displayName = "Button";
