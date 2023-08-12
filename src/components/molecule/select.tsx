"use client";
import { useState } from "react";
import { Button } from "../atom/button";
import { Ul } from "../atom/ul";
import { Li } from "../atom/li";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import clsx from "clsx";
export interface SelectProps {
  children: React.ReactNode;
  menu: { children: React.ReactNode; onClick: () => void; key: string }[];
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
          <Ul className="absolute flex-col">
            {menu.map((e) => (
              <Li
                className={clsx(
                  "list-none gap-[5px] bg-slate-300 dark:bg-slate-600 flex first-of-type:rounded-t-[5px] last-of-type:rounded-b-[5px] p-[5px] cursor-pointer hover:brightness-75"
                )}
                onClick={() => {
                  e.onClick();
                  setState(false);
                }}
                key={`mdssakdlsamlaskml${e.key}`}
              >
                {e.children}
              </Li>
            ))}
          </Ul>
        ) : null}
      </div>
    </>
  );
};
