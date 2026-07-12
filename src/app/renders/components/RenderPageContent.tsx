"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ContactFooter } from "@/components/home/ContactFooter"
import { MobileNav } from "@/components/home/MobileNav"
import Image from "next/image"
import junnLogo from "@/public/images/junn-logo.png"
import Link from "next/link"
import { ListRenderComponent } from "./ListRenderComponent"
import { useScrollReveal } from "@/lib/useScrollReveal"

export default function RenderPageContent() {
  const navRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  useScrollReveal(contentRef)

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
    <div className="w-full flex flex-col overflow-x-clip">
      <MobileNav />

      <div className="flex">
        <div
          ref={contentRef}
          className="flex-1 min-w-0 relative bg-white container mx-auto max-[2000px]:mr-0 px-6 md:px-10"
        >
          <div
            data-reveal
            className="w-full flex flex-col gap-5 max-xl:pt-10 py-12 my-10"
          >
            <h1 className="text-h1 text-black uppercase">Renders</h1>
            <p className="text-b1 text-[#8C8C8C] max-w-3xl">
              Crafted renderings that translate architectural vision into
              compelling visual narratives for investors and buyers.
            </p>
          </div>

          <ListRenderComponent />
        </div>

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
