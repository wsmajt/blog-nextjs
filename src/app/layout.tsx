import type { Metadata } from "next";
import "../../styles/globals.css";
import { ThemeProvider } from 'next-themes'
import Navbar from "./components/navbar";
import React from "react";
import ThemeChanger from "@/app/components/ThemeChanger";

export const metadata: Metadata = {
  title: "Blog - Next.js",
  description: "Created by Kacper Muszyński",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
      <ThemeProvider>
      <div className="flex flex-col justify-center items-center">
          <Navbar />
          {children}
          <ThemeChanger/>
      </div>
      </ThemeProvider>
      </body>
    </html>
  );
}
