import type { Metadata } from "next";
import { Cinzel, Faculty_Glyphic, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "@fontsource/mona-sans";
import { TransitionProvider } from "./components/TransitionProvider";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
});

const facultyGlyphic = Faculty_Glyphic({
  variable: "--font-faculty-glyphic",
  weight: "400",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AURUM | 97 Ahumoana Drive",
  description: "Luxury House and Land package at 97 Ahumoana Drive, Weiti Bay.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${cinzel.variable} ${facultyGlyphic.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
