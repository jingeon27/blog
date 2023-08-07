import clsx from "clsx";

export const Ul = (
  props: React.ComponentProps<"ul"> & { children: React.ReactNode }
) => (
  <>
    <ul {...props} className={clsx("flex", props.className)} />
  </>
);
