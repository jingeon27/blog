import "./globals.css";
import type { Metadata } from "next";
import { pretendard } from "@/assets/font";
import { Header } from "@/components/client/header";
import { MainProvider } from "@/lib/provider";
import clsx from "clsx";
import { Suspense } from "react";
import Script from "next/script";

export const metadata: Metadata = {
  title: "blog",
  description: "jingeon's blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <Script></Script>
      <MainProvider>
        <body
          className={clsx(
            "bg-white text-black dark:text-white dark:bg-black",
            pretendard.className
          )}
        >
          <Suspense>
            <Header />
            {children}
          </Suspense>
        </body>
      </MainProvider>
    </html>
  );
}
