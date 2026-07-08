"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { HeroSection } from "@/components/home/HeroSection"
import { WhatWeDoSection } from "@/components/home/WhatWeDoSection"
import { HowItWorksSection } from "@/components/home/HowItWorksSection"
import { AboutUsSection } from "@/components/home/AboutUsSection"
import { ContactFooter } from "@/components/home/ContactFooter"
import { MobileNav } from "@/components/home/MobileNav"
import Image from "next/image"
import junnLogo from "@/public/junn-images/junn-logo.png"
import Link from "next/link"

export default function HomeContent() {
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
    <div className="w-full flex flex-col">
      <MobileNav />

      <div className="w-full flex flex-col xl:flex-row items-start divide-x divide-[#E8E8E8] container mx-auto">
        <main className="flex-1 w-full min-w-0">
          <HeroSection />
          <WhatWeDoSection />
          <HowItWorksSection />
          <AboutUsSection />
        </main>

        <aside className="w-full h-screen max-w-[239px] shrink-0 sticky top-0 hidden xl:block bg-white">
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
                <Link
                  href="#what-we-do"
                  className="group relative flex items-center text-b2 text-black hover:opacity-70 transition-opacity"
                >
                  <span className="absolute -left-2 -translate-x-full w-2 h-2 mr-2 rounded-full bg-[#E8E8E8] opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out"></span>
                  What We Do
                </Link>
                <Link
                  href="#how-it-works"
                  className="group relative flex items-center text-b2 text-black hover:opacity-70 transition-opacity"
                >
                  <span className="absolute -left-2 -translate-x-full w-2 h-2 mr-2 rounded-full bg-[#E8E8E8] opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out"></span>
                  How It Works
                </Link>
                <Link
                  href="#about-us"
                  className="group relative flex items-center text-b2 text-black hover:opacity-70 transition-opacity"
                >
                  <span className="absolute -left-2 -translate-x-full w-2 h-2 mr-2 rounded-full bg-[#E8E8E8] opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out"></span>
                  About Us
                </Link>
              </div>

              <div className="mt-8">
                <Link
                  href="/contact-us"
                  className="group relative flex items-center text-b3-bold text-black uppercase hover:opacity-70 transition-opacity"
                >
                  <span className="absolute -left-2 -translate-x-full w-2 h-2 mr-2 rounded-full bg-black opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out"></span>
                  Let&apos;s Talk
                </Link>
              </div>
            </nav>
          </div>
        </aside>
      </div>

      <ContactFooter />
    </div>
  )
}
