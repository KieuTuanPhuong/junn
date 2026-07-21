import type { Metadata } from "next"
import {
  Cinzel,
  Faculty_Glyphic,
  Gabarito,
  Geist,
  Geist_Mono,
  Urbanist,
} from "next/font/google"
import "./globals.css"
import "@fontsource-variable/mona-sans"
import { TransitionProvider } from "./components/TransitionProvider"

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
})

const facultyGlyphic = Faculty_Glyphic({
  variable: "--font-faculty-glyphic",
  weight: "400",
  subsets: ["latin"],
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const gabarito = Gabarito({
  variable: "--font-gabarito",
  subsets: ["latin"],
})

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Jünn | 97 Ahumoana Drive",
  description:
    "We built JÜNN around a simple idea — that high quality, fast turnaround, and a straightforward process are not mutually exclusive. The right team, the right systems, and a genuine passion for the work can deliver great outcomes without the complexity.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${cinzel.variable} ${facultyGlyphic.variable} ${gabarito.variable} ${urbanist.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white overflow-x-hidden">
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  )
}
