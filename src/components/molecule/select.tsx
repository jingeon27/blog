import { useState } from "react";
import { Button } from "../atom/button";
import { Ul } from "../atom/ul";
import { Li } from "../atom/li";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import clsx from "clsx";
export interface SelectProps {
  children: React.ReactNode;
  menu: (Omit<
    React.PropsWithChildren<React.ComponentProps<"li">>,
    "onClick"
  > & { onClick: () => void; selected: boolean })[];
}
export const Select = ({ menu, ...props }: SelectProps) => {
  const [state, setState] = useState(false);
  const ref = useOutsideClick<HTMLButtonElement>(() => setState(false));
  return (
    <>
      <div className="relative">
        <Button
          {...props}
          onClick={() => {
            setState((prev) => !prev);
          }}
          ref={ref}
        />
        {state ? (
          <Ul className="absolute flex-col right-0 top-full z-50 py-1">
            {menu.map((e) => (
              <Li
                {...e}
                className={clsx(
                  "list-none gap-[5px] bg-slate-300 dark:bg-slate-600 flex first-of-type:rounded-t-[5px] last-of-type:rounded-b-[5px] py-2 px-[10px] cursor-pointer hover:brightness-75",
                  e.selected
                    ? "text-blue-800 dark:text-blue-600"
                    : "text-slate-600 dark:text-slate-300"
                )}
                onClick={() => {
                  e.onClick();
                  setState(false);
                }}
                key={`mdssakdlsamlaskml${e.key}`}
              />
            ))}
          </Ul>
        ) : null}
      </div>
    </>
  );
};
