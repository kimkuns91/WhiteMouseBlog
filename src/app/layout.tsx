import "./globals.css";

import { NextLayout, NextProvider } from "./providers";

import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";

const SB_Font = localFont({
  src: [
    {
      path: "../../public/fonts/SB_B.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/SB_M.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/SB_L.ttf",
      weight: "300",
      style: "normal",
    },
  ],
  display: "swap", // 성능 최적화를 위해 swap 권장
});

export const metadata: Metadata = {
  title: "White Mouse Blog - 김건우의 개발 블로그",
  description: "IT 기술과 코딩 팁을 공유하는 풀스택 개발자의 블로그",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          SB_Font.className,
          "flex antialiased h-screen overflow-hidden bg-slate-100"
        )}
      >
        <NextProvider>
          <NextLayout>{children}</NextLayout>
        </NextProvider>
      </body>
    </html>
  );
}
