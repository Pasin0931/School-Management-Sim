import type { Metadata } from "next";
// import { Toaster } from "@/components/ui/sonner"
import { Geist_Mono, Inria_Sans } from "next/font/google";
import "./globals.css";

import Link from "next/link";

import { Button } from "@/components/ui/button"

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inriaSans = Inria_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "School Mangaement Sim",
  description: "YR2 Database assignment",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inriaSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">

        <div className="flex flex-row items-center justify-between bg-gray-300">
          <h1 className="font-bold text-xl pl-5">School Management Simulation</h1>

          <div className="flex flex-row items-center justify-center gap-8 pr-5 font-bold h-13">
            <Link href="/">Dashboard</Link>
            <Link href="/creation">Creation</Link>
            <Link href="/aboutme">About us</Link>
          </div>
        </div>

        {children}
      </body>
    </html>
  );
}