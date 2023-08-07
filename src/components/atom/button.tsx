import clsx from "clsx";

export const Button = (
  props: React.PropsWithChildren<React.ComponentProps<"button">>
) => (
  <button
    {...props}
    className={clsx(
      "rounded-full w-96 hover:brightness-75 font-sans cursor-pointer",
      props.className
    )}
  />
);
