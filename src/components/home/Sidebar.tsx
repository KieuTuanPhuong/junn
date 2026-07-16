"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import Link from "next/link"
import junnLogo from "@/public/images/junn-logo.png"

const links = [
  { href: "/home#what-we-do", label: "What We Do" },
  { href: "/home#how-it-works", label: "How It Works" },
  { href: "/home#about-us", label: "About Us" },
]

export function Sidebar() {
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const trigger = ScrollTrigger.create({
      start: 1,
      end: 99999,
      onToggle: (self) =>
        gsap.to(navRef.current, {
          height: self.isActive ? "100%" : "auto",
          duration: 0.3,
          ease: "power2.out",
        }),
    })
    return () => trigger.kill()
  }, [])

  return (
    <aside className="w-full h-screen max-w-[239px] shrink-0 sticky top-0 hidden xl:block bg-white border-l border-[#E8E8E8]">
      <div className="px-11 py-20 flex flex-col gap-6 h-full transition-all duration-300">
        <Image
          src={junnLogo}
          alt="Jünn"
          objectFit={"cover"}
          className="w-[121px] h-[81px]"
        />
        <nav
          ref={navRef}
          className="flex flex-col justify-between gap-4 font-urbanist text-neutral-600 h-auto"
        >
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative flex items-center text-b2 text-black transition-opacity"
              >
                <span className="absolute left-[-40.55px] -translate-x-full w-2 h-2 mr-2 rounded-full bg-[#E8E8E8] opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out z-2"></span>
                {link.label}
              </Link>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/contact-us"
              className="group relative flex items-center transition-opacity"
            >
              <span className="absolute left-[-40.55px] -translate-x-full w-2 h-2 mr-2 rounded-full bg-black opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out"></span>
              <p className="group-hover:opacity-70 text-b3-bold text-black uppercase">
                Let&apos;s Talk
              </p>
            </Link>
          </div>
        </nav>
      </div>
    </aside>
  )
}
