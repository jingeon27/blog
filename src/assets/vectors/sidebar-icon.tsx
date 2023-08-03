import clsx from "clsx";
import { ComponentProps } from "react";

export const SideBarIcon = (props: ComponentProps<"svg">) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 36 24"
    {...props}
    className={clsx("h-6 w- fill-black dark:fill-white", props.className)}
  >
    <path d="M36 20L36 24L0 24L3.49691e-07 20L36 20ZM36 10L1.22392e-06 10L8.74228e-07 14L36 14L36 10ZM36 0L2.09815e-06 -3.14722e-06L1.74846e-06 4L36 4L36 0Z" />
  </svg>
);
