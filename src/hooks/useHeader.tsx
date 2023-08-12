"use client";
import { useLayoutEffect } from "react";
import { useMainAction, useMainValue } from "./useMainContext";
import { LightIcon } from "@/assets/vectors/light-icon";
import { DarkIcon } from "@/assets/vectors/dark-icon";
import { OsIcon } from "@/assets/vectors/os-icon";
import clsx from "clsx";

export const useHeader = () => {
  const { sideBar, colorMode } = useMainValue();
  const reducer = useMainAction();

  useLayoutEffect(() => {
    if (
      colorMode === "Dark" ||
      (colorMode === "System" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      return document.documentElement.classList.add("dark");
    } else {
      return document.documentElement.classList.remove("dark");
    }
  }, [colorMode]);
  const showSideBar = () => {
    sideBar
      ? reducer({ type: "SIDE_BAR", sideBar: false })
      : reducer({ type: "SIDE_BAR", sideBar: true });
  };
  const ColorModeIcon = {
    System: OsIcon,
    Light: LightIcon,
    Dark: DarkIcon,
  };
  const arr: ["Dark", "Light", "System"] = ["Dark", "Light", "System"];
  const colorModeMenu = arr.map((item) => {
    const Icon = ColorModeIcon[item];
    return {
      children: (
        <>
          <Icon selected={colorMode === item} />
          <span
            className={clsx(
              "text-blue-800 dark:text-blue-600q",
              item === colorMode
                ? "text-blue-800 dark:text-blue-600"
                : "text-slate-600 dark:text-slate-300"
            )}
            key={item}
          >
            {item}
          </span>
        </>
      ),
      onClick: () => {
        reducer({
          type: "COLOR_MODE",
          colorMode: item,
        });
      },
      key: item,
    };
  });
  return { showSideBar, colorModeMenu };
};
