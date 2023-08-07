"use client";

import { SideBarIcon } from "@/assets/vectors/sidebar-icon";
import { Button } from "../atom/button";
import { useHeader } from "@/hooks/useHeader";

export const Header = () => {
  const { showSideBar } = useHeader();
  return (
    <>
      <header className="flex p-5 lg:p-10">
        <SideBarIcon className="w-[36px] h-[24px]" onClick={showSideBar} />
        <Button className="bg-gray-200">안녕하세요.</Button>
      </header>
    </>
  );
};
