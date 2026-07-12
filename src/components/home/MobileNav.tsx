"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import junnLogo from "@/public/images/junn-logo.png"

const links = [
  { href: "#what-we-do", label: "What We Do" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#about-us", label: "About Us" },
]

export function MobileNav() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <div className="xl:hidden sticky top-0 z-50">
      <div className="flex items-center justify-between px-6 py-4 bg-white border-b border-[#E8E8E8]">
        <Link href="/home" onClick={() => setOpen(false)}>
          <Image src={junnLogo} alt="Jünn" className="w-[60px] h-auto" />
        </Link>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="relative w-10 h-10 -mr-2 flex flex-col items-center justify-center gap-[7px]"
        >
          <span
            className={`block w-6 h-px bg-black transition-transform duration-300 ease-out ${
              open ? "translate-y-[4px] rotate-45" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-px bg-black transition-transform duration-300 ease-out ${
              open ? "-translate-y-[4px] -rotate-45" : ""
            }`}
          ></span>
        </button>
      </div>

      <div
        className={`fixed left-0 right-0 top-[73px] bottom-0 bg-white transition-all duration-300 ease-out ${
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <nav className="h-full px-6 py-12 flex flex-col justify-between font-urbanist">
          <div className="flex flex-col gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="group flex items-center text-h3 text-black hover:opacity-70 transition-opacity"
              >
                <span className="w-2 h-2 mr-3 rounded-full bg-[#E8E8E8] opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out"></span>
                {link.label}
              </Link>
            ))}
          </div>

          <Link
            href="/contact-us"
            onClick={() => setOpen(false)}
            className="flex items-center text-b3-bold text-black uppercase hover:opacity-70 transition-opacity pb-8"
          >
            Let&apos;s Talk
          </Link>
        </nav>
      </div>
    </div>
  )
}
