import clsx from "clsx";

export const Li = (props: React.ComponentProps<"li">) => (
  <>
    <li {...props} className={clsx("", props.className)} />
  </>
);
