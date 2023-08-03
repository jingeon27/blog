import "./globals.css";
import type { Metadata } from "next";
import { pretendard } from "@/assets/font";

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
      <body className={pretendard.className}>{children}</body>
    </html>
  );
}
