import { useLayoutEffect } from "react";
import { useMainAction, useMainValue } from "./useMainContext";

export const useHeader = () => {
  const { sideBar, colorMode } = useMainValue();
  const reducer = useMainAction();
  useLayoutEffect(() => {
    if (
      colorMode === "dark" ||
      (colorMode === "os" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [colorMode]);
  const showSideBar = () => {
    sideBar
      ? reducer({ type: "SIDE_BAR", sideBar: false })
      : reducer({ type: "SIDE_BAR", sideBar: true });
  };
  return { showSideBar };
};
