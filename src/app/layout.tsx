import "./globals.css";
import type { Metadata } from "next";
import { pretendard } from "@/assets/font";
import { Header } from "@/components/client/header";
import { MainProvider } from "@/lib/provider";

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
      <MainProvider>
        <body className={pretendard.className}>
          <Header />
          {children}
        </body>
      </MainProvider>
    </html>
  );
}
