import { useEffect, useLayoutEffect, useMemo, useState } from "react";
import { useMainValue } from "./useMainContext";
export const useIsDarkMode = ({
  light,
  dark,
}: {
  light: string;
  dark: string;
}) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const { colorMode } = useMainValue();

  useEffect(() => {
    if (
      colorMode === "Dark" ||
      (colorMode === "System" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, [colorMode]);

  return isDarkMode ? dark : light;
};
