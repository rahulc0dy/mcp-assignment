import type { Metadata } from "next";
import { JetBrains_Mono, Montserrat } from "next/font/google";
import "../styles/globals.css";
import React from "react";
import FixedNav from "@/components/FixedNav";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MCP Test App",
  description: "Used for testing MCP servers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${jetbrainsMono.variable} antialiased`}
      data-theme="dark"
    >
      <body>
        <FixedNav />
        {children}
      </body>
    </html>
  );
}
