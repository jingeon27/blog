import { useLayoutEffect } from "react";
import { useMainAction, useMainValue } from "./useMainContext";
import { LightIcon as Light } from "@/assets/vectors/light-icon";
import { DarkIcon as Dark } from "@/assets/vectors/dark-icon";
import { OsIcon as System } from "@/assets/vectors/os-icon";

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
    System,
    Light,
    Dark,
  };
  const arr: ["Dark", "Light", "System"] = ["Dark", "Light", "System"];
  const colorModeMenu = arr.map((item) => {
    const Icon = ColorModeIcon[item];
    return {
      children: (
        <>
          <Icon selected={colorMode === item} />
          {item}
        </>
      ),
      onClick: () => {
        reducer({
          type: "COLOR_MODE",
          colorMode: item,
        });
      },
      selected: colorMode === item,
      key: item,
    };
  });
  return { showSideBar, colorModeMenu };
};
