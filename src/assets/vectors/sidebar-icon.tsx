"use client";

import { useMainValue } from "@/hooks/useMainContext";
import clsx from "clsx";
import { useLayoutEffect, useState } from "react";

export const SideBarIcon = (props: React.ComponentProps<"svg">) => {
  const { fill } = useIsDarkMode();
  return (
    <svg
      {...props}
      viewBox="0 0 36 24"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx(
        "w-9 h-6 cursor-pointer hover:brightness-75",
        props.className
      )}
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M36 20L36 24L0 24L3.49691e-07 20L36 20ZM36 10L1.22392e-06 10L8.74228e-07 14L36 14L36 10ZM36 0L2.09815e-06 -3.14722e-06L1.74846e-06 4L36 4L36 0Z"
        fill={fill}
      />
    </svg>
  );
};

// tailwind fill이 오락가락해서 customhook으로 처리
const useIsDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    () =>
      typeof window !== undefined &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  const { colorMode } = useMainValue();

  useLayoutEffect(() => {
    if (
      colorMode === "dark" ||
      (colorMode === "os" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, [colorMode]);

  return { fill: isDarkMode ? "#e5e7eb" : "#1f2937" };
};
