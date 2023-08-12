import { useLayoutEffect, useMemo, useState } from "react";
import { useMainValue } from "./useMainContext";
export const useIsDarkMode = ({
  light,
  dark,
}: {
  light: string;
  dark: string;
}) => {
  const osMode = useMemo(
    () => window.matchMedia("(prefers-color-scheme: dark)").matches,
    []
  );
  const [isDarkMode, setIsDarkMode] = useState<boolean>(osMode);

  const { colorMode } = useMainValue();

  useLayoutEffect(() => {
    if (colorMode === "Dark" || (colorMode === "System" && osMode)) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, [colorMode, osMode]);

  return isDarkMode ? dark : light;
};
