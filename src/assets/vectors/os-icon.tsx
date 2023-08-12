"use client";
import { useIsDarkMode } from "@/hooks/useDarkMode";
import { ColorModeIconHooksParams, ColorModeIconProps } from "@/lib/utill";
import clsx from "clsx";

export const OsIcon = ({ selected, ...props }: ColorModeIconProps) => {
  const fill = useIsDarkMode(ColorModeIconHooksParams(selected));
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      className={clsx("", props.className)}
    >
      <g clipPath="url(#clip0_54381_351)">
        <path
          d="M21 2H3C1.9 2 1 2.9 1 4V16C1 17.1 1.9 18 3 18H10V20H8V22H16V20H14V18H21C22.1 18 23 17.1 23 16V4C23 2.9 22.1 2 21 2ZM21 16H3V4H21V16Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_54381_351">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};