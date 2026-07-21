"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import thumbnailAnimation from "@/public/images/thumbnail-animation.png"
import thumbnailBranding from "@/public/images/thumbnail-branding.png"
import thumbnailBrochure from "@/public/images/thumbnail-brochure.png"
import thumbnailRenders from "@/public/images/thumbnail-renders.png"
import thumbnailWebsite from "@/public/images/thumbnail-website.png"
import { TransitionLink } from "@/app/components/TransitionLink"
import { useScrollReveal } from "@/lib/useScrollReveal"

const services = [
  { image: thumbnailRenders, label: "Renders", href: "/renders" },
  {
    image: thumbnailAnimation,
    label: "3D Animation",
    href: "https://aurum-demo-six.vercel.app/",
  },
  {
    image: thumbnailBranding,
    label: "Branding",
    href: "https://aurum-demo-six.vercel.app/home",
  },
  {
    image: thumbnailWebsite,
    label: "Websites",
    href: "https://aurum-demo-six.vercel.app/home",
  },
  {
    image: thumbnailBrochure,
    label: "Brochure",
    href: "https://aurum-demo-six.vercel.app/home",
  },
]

export function WhatWeDoSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const spacerRef = useRef<HTMLDivElement>(null)
  const sliderRef = useRef<HTMLDivElement>(null)
  const sliderPausedRef = useRef(false)
  const [leftOffset, setLeftOffset] = useState(0)
  const [rowWidth, setRowWidth] = useState(0)

  useScrollReveal(sectionRef)

  useEffect(() => {
    const handleResize = () => {
      if (sectionRef.current) {
        setLeftOffset(sectionRef.current.getBoundingClientRect().left)
      }
      if (wrapperRef.current && spacerRef.current) {
        const wrapperLeft = wrapperRef.current.getBoundingClientRect().left
        const spacerLeft = spacerRef.current.getBoundingClientRect().left
        setRowWidth(spacerLeft - wrapperLeft)
      }
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return

    const pause = () => {
      sliderPausedRef.current = true
    }
    const resume = () => {
      sliderPausedRef.current = false
    }

    slider.addEventListener("touchstart", pause, { passive: true })
    slider.addEventListener("touchend", resume, { passive: true })

    const interval = setInterval(() => {
      // offsetWidth 0 = hidden on lg, skip
      if (sliderPausedRef.current || slider.offsetWidth === 0) return

      const card = slider.querySelector<HTMLElement>(".snap-start")
      if (!card) return
      const step = card.offsetWidth + 16
      const setWidth = step * services.length
      // past first set: jump back one set (identical content, invisible) before advancing
      if (slider.scrollLeft >= setWidth) {
        slider.scrollLeft -= setWidth
      }
      slider.scrollBy({ left: step, behavior: "smooth" })
    }, 3000)

    return () => {
      clearInterval(interval)
      slider.removeEventListener("touchstart", pause)
      slider.removeEventListener("touchend", resume)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="what-we-do"
      className="flex relative container mx-auto max-[2000px]:mr-0 px-6 md:px-10"
    >
      <div className="hidden lg:block flex-1"></div>

      <div className="flex-9 min-w-0 flex flex-col gap-8 relative lg:border-l border-[#E8E8E8] pt-[200px]">
        <div
          data-reveal
          className="flex flex-col gap-8 p-6 md:p-10 lg:p-14 py-0"
        >
          <div className="flex items-center gap-2">
            <span className="hidden lg:block absolute left-[4.5px] -translate-x-full w-[10px] h-[10px] rounded-full bg-[#E8E8E8]"></span>
            <h2 className="text-sh1">What We Do</h2>
          </div>
          <h1 className="text-h1 uppercase">JÜNN&apos;s solution</h1>
          <p className="text-b3-regular text-[#8C8C8C] mt-5">
            Every successful project starts with a great concept. We transform{" "}
            <br className="hidden lg:inline" />
            your concept into a vision of total clarity - presented in one{" "}
            <br className="hidden lg:inline" />
            seamless, beautifully packaged experience.
          </p>
        </div>

        <div className="pl-4">
          <div
            ref={sliderRef}
            className="lg:hidden -mx-6 md:-mx-10 mt-4 overflow-x-auto no-scrollbar snap-x snap-mandatory"
          >
            <div className="flex gap-4 px-6 md:px-10 items-end">
              {[...services, ...services].map((service, index) => (
                <TransitionLink
                  key={`${service.label}-${index}`}
                  href={service.href}
                  className="relative shrink-0 snap-start w-[70vw] max-w-[300px]"
                >
                  <div className="bg-[#FDFDFD]">
                    <Image
                      src={service.image}
                      alt={service.label}
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="w-full text-b2 text-black uppercase mt-3">
                    {service.label}
                  </div>
                </TransitionLink>
              ))}
            </div>
          </div>
        </div>

        <div className="relative min-h-[750px] 2xl:min-h-[900px] w-full hidden md:block"></div>
      </div>

      <div
        className={`hidden lg:block z-0 absolute w-screen -left-59.75 top-1/2 h-px bg-[#E8E8E8] opacity-100`}
      ></div>

      <div
        ref={wrapperRef}
        data-reveal
        className="hidden lg:flex absolute bottom-[10%] w-[calc(100%+41px)] -left-10 z-10"
      >
        <div className="absolute bottom-0 left-0 flex z-10 w-full">
          <div className="flex justify-end gap-5 items-end z-10 w-full">
            <div className="relative group/card basis-0 grow-286 min-w-0 aspect-286/379 bg-[#FDFDFD] translate-y-1/2">
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src={thumbnailRenders}
                  alt="Jünn"
                  objectFit={"cover"}
                  className="w-full h-full transition-transform duration-500 ease-out group-hover/card:scale-110"
                />
              </div>
              <TransitionLink
                href="/renders"
                className="absolute left-1/2 bottom-4 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none group-hover/card:pointer-events-auto opacity-0 group-hover/card:opacity-100 transition-all duration-500 ease-out group flex w-[197px] h-10 py-4 px-4 items-center justify-center uppercase tracking-widest text-b3-regular text-white backdrop-blur-[7.5px] bg-[rgba(255,255,255,0.35)] hover:bg-[rgba(255,255,255,0.45)]"
              >
                <span className="w-0 h-2 rounded-full bg-white opacity-0 scale-0 mr-0 group-hover:w-2 group-hover:opacity-100 group-hover:scale-100 group-hover:mr-2 transition-all duration-500 ease-out"></span>
                View
              </TransitionLink>
              <div className="absolute top-full left-0 w-full text-b2 text-end text-black uppercase mt-4">
                Renders
              </div>
            </div>

            <div className="relative group/card basis-0 grow-347 min-w-0 aspect-347/554 bg-[#FDFDFD]">
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src={thumbnailAnimation}
                  alt="Jünn"
                  objectFit={"cover"}
                  className="w-full h-full transition-transform duration-500 ease-out group-hover/card:scale-110"
                />
              </div>
              <TransitionLink
                href="https://aurum-demo-six.vercel.app/"
                className="absolute left-1/2 bottom-4 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none group-hover/card:pointer-events-auto opacity-0 group-hover/card:opacity-100 transition-all duration-500 ease-out group flex w-[197px] h-10 py-4 px-4 items-center justify-center uppercase tracking-widest text-b3-regular text-white backdrop-blur-[7.5px] bg-[rgba(255,255,255,0.35)] hover:bg-[rgba(255,255,255,0.45)]"
              >
                <span className="w-0 h-2 rounded-full bg-white opacity-0 scale-0 mr-0 group-hover:w-2 group-hover:opacity-100 group-hover:scale-100 group-hover:mr-2 transition-all duration-500 ease-out"></span>
                View
              </TransitionLink>
              <div className="absolute top-full left-0 w-full text-b2 text-black uppercase mt-4">
                3D Animation
              </div>
            </div>

            <div className="relative group/card basis-0 grow-166 min-w-0 aspect-166/217 bg-[#FDFDFD]">
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src={thumbnailBranding}
                  alt="Jünn"
                  objectFit={"cover"}
                  className="w-full h-full transition-transform duration-500 ease-out group-hover/card:scale-110"
                />
              </div>
              <TransitionLink
                href="https://aurum-demo-six.vercel.app/home"
                className="absolute left-1/2 bottom-4 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none group-hover/card:pointer-events-auto opacity-0 group-hover/card:opacity-100 transition-all duration-500 ease-out group flex w-20 h-10 py-4 px-4 items-center justify-center uppercase tracking-widest text-b3-regular text-white backdrop-blur-[7.5px] bg-[rgba(255,255,255,0.35)] hover:bg-[rgba(255,255,255,0.45)]"
              >
                <span className="w-0 h-2 rounded-full bg-white opacity-0 scale-0 mr-0 group-hover:w-2 group-hover:opacity-100 group-hover:scale-100 group-hover:mr-2 transition-all duration-500 ease-out"></span>
                View
              </TransitionLink>
              <div className="absolute top-full left-0 w-full text-b2 text-black uppercase mt-4">
                Branding
              </div>
            </div>

            <div className="relative group/card basis-0 grow-166 min-w-0 aspect-166/217 bg-[#FDFDFD]">
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src={thumbnailWebsite}
                  alt="Jünn"
                  objectFit={"cover"}
                  className="w-full h-full transition-transform duration-500 ease-out group-hover/card:scale-110"
                />
              </div>
              <TransitionLink
                href="https://aurum-demo-six.vercel.app/home"
                className="absolute left-1/2 bottom-4 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none group-hover/card:pointer-events-auto opacity-0 group-hover/card:opacity-100 transition-all duration-500 ease-out group flex w-20 h-10 py-4 px-4 items-center justify-center uppercase tracking-widest text-b3-regular text-white backdrop-blur-[7.5px] bg-[rgba(255,255,255,0.35)] hover:bg-[rgba(255,255,255,0.45)]"
              >
                <span className="w-0 h-2 rounded-full bg-white opacity-0 scale-0 mr-0 group-hover:w-2 group-hover:opacity-100 group-hover:scale-100 group-hover:mr-2 transition-all duration-500 ease-out"></span>
                View
              </TransitionLink>
              <div className="absolute top-full left-0 w-full text-b2 text-black uppercase mt-4">
                Websites
              </div>
            </div>

            <div className="relative group/card basis-0 grow-166 min-w-0 aspect-166/217 bg-[#FDFDFD]">
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src={thumbnailBrochure}
                  alt="Jünn"
                  objectFit={"cover"}
                  className="w-full h-full transition-transform duration-500 ease-out group-hover/card:scale-110"
                />
              </div>
              <TransitionLink
                href="https://aurum-demo-six.vercel.app/home"
                className="absolute left-1/2 bottom-4 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none group-hover/card:pointer-events-auto opacity-0 group-hover/card:opacity-100 transition-all duration-500 ease-out group flex w-20 h-10 py-4 px-4 items-center justify-center uppercase tracking-widest text-b3-regular text-white backdrop-blur-[7.5px] bg-[rgba(255,255,255,0.35)] hover:bg-[rgba(255,255,255,0.45)]"
              >
                <span className="w-0 h-2 rounded-full bg-white opacity-0 scale-0 mr-0 group-hover:w-2 group-hover:opacity-100 group-hover:scale-100 group-hover:mr-2 transition-all duration-500 ease-out"></span>
                View
              </TransitionLink>
              <div className="absolute top-full left-0 w-full text-b2 text-black uppercase mt-4">
                Brochure
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
