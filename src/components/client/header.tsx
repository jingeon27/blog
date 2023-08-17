"use client";

import { SideBarIcon } from "@/assets/vectors/sidebar-icon";
import { useHeader } from "@/hooks/useHeader";
import { Select } from "../molecule/select";
import { LightIcon } from "@/assets/vectors/light-icon";
import { DarkIcon } from "@/assets/vectors/dark-icon";
import { useMainValue } from "@/hooks/useMainContext";
import { JingeonLogo } from "@/assets/vectors/logo-icon";
import { CustomLink } from "../atom/link";
import clsx from "clsx";

export const Header = () => {
  const { showSideBar, colorModeMenu } = useHeader();
  const { colorMode, sideBar } = useMainValue();
  return (
    <>
      <header className="fixed w-full h-[100px] top-0 items-center flex justify-between p-5 lg:p-10">
        <div className="flex gap-[20px] lg:gap-[40px] items-center">
          <nav
            className={clsx(
              "flex justify-center hover:brightness-125 dark:brightness-75 lg:static",
              sideBar ?  "lg:w-36":"w-9" 
            )}
          >
            <SideBarIcon className="w-[36px] h-[24px]" onClick={showSideBar} />
          </nav>
          <CustomLink href={"/"}>
            <JingeonLogo className="hover:brightness-125 dark:brightness-75" />
          </CustomLink>
        </div>
        <Select menu={colorModeMenu}>
          <LightIcon selected={colorMode === "Light"} className="dark:hidden" />
          <DarkIcon
            selected={colorMode === "Dark"}
            className="hidden dark:block"
          />
        </Select>
      </header>
    </>
  );
};
