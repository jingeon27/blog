"use client";

import { SideBarIcon } from "@/assets/vectors/sidebar-icon";
import { Button } from "../atom/button";
import { useHeader } from "@/hooks/useHeader";
import { Select } from "../molecule/select";
import { LightIcon } from "@/assets/vectors/light-icon";
import { DarkIcon } from "@/assets/vectors/dark-icon";
import { useMainValue } from "@/hooks/useMainContext";

export const Header = () => {
  const { showSideBar, colorModeMenu } = useHeader();
  const { colorMode } = useMainValue();
  return (
    <>
      <header className="flex justify-between p-5 lg:p-10">
        <SideBarIcon className="w-[36px] h-[24px]" onClick={showSideBar} />
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
