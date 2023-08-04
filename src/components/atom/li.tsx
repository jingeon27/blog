import clsx from "clsx";
import { ComponentProps } from "react";

export const Li = (props: ComponentProps<"li">) => (
  <>
    <li {...props} className={clsx("", props.className)} />
  </>
);
