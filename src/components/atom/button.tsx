import clsx from "clsx";
import { ComponentProps, PropsWithChildren } from "react";

export const Button = (props: PropsWithChildren<ComponentProps<"button">>) => (
  <button
    {...props}
    className={clsx(
      "rounded-full w-96 hover:brightness-75 font-sans",
      props.className
    )}
  />
);
