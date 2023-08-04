import clsx from "clsx";
import { ComponentProps } from "react";

export const Ul = (
  props: ComponentProps<"ul"> & { children: React.ReactNode }
) => (
  <>
    <ul {...props} className={clsx("flex", props.className)} />
  </>
);
