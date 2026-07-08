"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import thumbnailAnimation from "@/public/junn-images/thumbnail-animation.png"
import thumbnailBranding from "@/public/junn-images/thumbnail-branding.png"
import thumbnailBrochure from "@/public/junn-images/thumbnail-brochure.png"
import thumbnailRenders from "@/public/junn-images/thumbnail-renders.png"
import thumbnailWebsite from "@/public/junn-images/thumbnail-website.png"
import { TransitionLink } from "@/app/components/TransitionLink"

const services = [
  { image: thumbnailRenders, label: "Renders" },
  { image: thumbnailAnimation, label: "3D Animation" },
  { image: thumbnailBranding, label: "Branding" },
  { image: thumbnailWebsite, label: "Websites" },
  { image: thumbnailBrochure, label: "Brochure" },
]

export function WhatWeDoSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const spacerRef = useRef<HTMLDivElement>(null)
  const [leftOffset, setLeftOffset] = useState(0)
  const [rowWidth, setRowWidth] = useState(0)

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

  return (
    <section
      ref={sectionRef}
      id="what-we-do"
      className="flex relative h-auto lg:h-[170vh] min-[2000px]:h-[140vh]"
    >
      <div className="hidden lg:block flex-1"></div>

      <div className="flex-9 min-w-0 flex flex-col gap-8 p-6 md:p-10 lg:p-14 relative lg:border-l border-[#E8E8E8] ">
        <div className="flex flex-col gap-11 py-20 lg:py-52">
          <div className="flex items-center gap-2">
            <span className="hidden lg:block absolute left-[3.5px] -translate-x-full w-2 h-2 rounded-full bg-[#E8E8E8]"></span>
            <h2 className="text-sh1">What We Do</h2>
          </div>
          <h3 className="text-h3-regular">
            Every successful project starts with a great concept. We transform
            your <br className="hidden lg:inline" /> concept into a vision of
            total clarity - presented in one seamless, beautifully{" "}
            <br className="hidden lg:inline" /> packaged experience.
          </h3>
        </div>

        <div className="flex flex-col gap-11 py-0">
          <div className="flex items-center gap-2">
            <span className="hidden lg:block absolute left-[3.5px] -translate-x-full w-2 h-2 rounded-full bg-[#E8E8E8]"></span>
            <h2 className="text-sh1">JÜNN&apos;S solution</h2>
          </div>
          <h1 className="text-h1 uppercase">WHAT WE DO</h1>
          <p className="text-b3-regular text-[#8C8C8C] mt-5">
            Every successful project starts with a great concept. We transform{" "}
            <br className="hidden lg:inline" />
            your concept into a vision of total clarity - presented in one{" "}
            <br className="hidden lg:inline" />
            seamless, beautifully packaged experience.
          </p>
        </div>

        <div className="lg:hidden -mx-6 md:-mx-10 mt-4 overflow-x-auto no-scrollbar snap-x snap-mandatory">
          <div className="flex gap-4 px-6 md:px-10 items-end">
            {services.map((service) => (
              <TransitionLink
                key={service.label}
                href="/home"
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

      <div
        ref={wrapperRef}
        className="hidden lg:flex absolute bottom-0 max-w-screen"
        style={{ left: -leftOffset, width: "100vw" }}
      >
        <div className="container mx-auto flex relative">
          <div className="flex-1"></div>

          <div ref={spacerRef} className="w-full max-w-[239px] px-11"></div>
        </div>

        <div
          className="absolute bottom-0 left-0 flex max-[2000px]:justify-between justify-end gap-10 items-end"
          style={{ width: rowWidth }}
        >
          <div className="relative group/card w-[200px] h-[265px] lg:w-[240px] lg:h-[318px] xl:w-[286px] xl:h-[379px] bg-[#FDFDFD] translate-y-1/2">
            <Image
              src={thumbnailRenders}
              alt="Jünn"
              objectFit={"cover"}
              className="h-full"
            />
            <TransitionLink
              href="/home"
              className="absolute left-1/2 bottom-4 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none group-hover/card:pointer-events-auto opacity-0 group-hover/card:opacity-100 transition-all duration-500 ease-out group flex w-[197px] h-[41px] py-4 px-4 items-center justify-center uppercase tracking-widest text-b3-regular text-white backdrop-blur-[7.5px] bg-[rgba(255,255,255,0.35)] hover:bg-[rgba(255,255,255,0.45)]"
            >
              <span className="w-0 h-2 rounded-full bg-white opacity-0 scale-0 mr-0 group-hover:w-2 group-hover:opacity-100 group-hover:scale-100 group-hover:mr-2 transition-all duration-500 ease-out"></span>
              View
            </TransitionLink>
            <div className="w-full text-b2 text-end text-black uppercase mt-4">
              Renders
            </div>
          </div>
          <div className="relative group/card w-[240px] h-[383px] lg:w-[290px] lg:h-[463px] xl:w-[347px] xl:h-[554px] bg-[#FDFDFD]">
            <Image
              src={thumbnailAnimation}
              alt="Jünn"
              objectFit={"cover"}
              className="h-full"
            />
            <TransitionLink
              href="/home"
              className="absolute left-1/2 bottom-4 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none group-hover/card:pointer-events-auto opacity-0 group-hover/card:opacity-100 transition-all duration-500 ease-out group flex w-[197px] h-[41px] py-4 px-4 items-center justify-center uppercase tracking-widest text-b3-regular text-white backdrop-blur-[7.5px] bg-[rgba(255,255,255,0.35)] hover:bg-[rgba(255,255,255,0.45)]"
            >
              <span className="w-0 h-2 rounded-full bg-white opacity-0 scale-0 mr-0 group-hover:w-2 group-hover:opacity-100 group-hover:scale-100 group-hover:mr-2 transition-all duration-500 ease-out"></span>
              View
            </TransitionLink>
            <div className="w-full text-b2 text-black uppercase mt-4">
              3D Animation
            </div>
          </div>
          <div className="relative group/card w-[120px] h-[157px] lg:w-[145px] lg:h-[190px] xl:w-[166px] xl:h-[217px] bg-[#FDFDFD]">
            <Image
              src={thumbnailBranding}
              alt="Jünn"
              objectFit={"cover"}
              className="h-full"
            />
            <TransitionLink
              href="/home"
              className="absolute left-1/2 bottom-4 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none group-hover/card:pointer-events-auto opacity-0 group-hover/card:opacity-100 transition-all duration-500 ease-out group flex py-4 px-4 items-center justify-center uppercase tracking-widest text-b3-regular text-white backdrop-blur-[7.5px] bg-[rgba(255,255,255,0.35)] hover:bg-[rgba(255,255,255,0.45)]"
            >
              <span className="w-0 h-2 rounded-full bg-white opacity-0 scale-0 mr-0 group-hover:w-2 group-hover:opacity-100 group-hover:scale-100 group-hover:mr-2 transition-all duration-500 ease-out"></span>
              View
            </TransitionLink>
            <div className="w-full text-b2 text-black uppercase mt-4">
              Branding
            </div>
          </div>
          <div className="relative group/card w-[120px] h-[157px] lg:w-[145px] lg:h-[190px] xl:w-[166px] xl:h-[217px] bg-[#FDFDFD]">
            <Image
              src={thumbnailWebsite}
              alt="Jünn"
              objectFit={"cover"}
              className="h-full"
            />
            <TransitionLink
              href="/home"
              className="absolute left-1/2 bottom-4 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none group-hover/card:pointer-events-auto opacity-0 group-hover/card:opacity-100 transition-all duration-500 ease-out group flex py-4 px-4 items-center justify-center uppercase tracking-widest text-b3-regular text-white backdrop-blur-[7.5px] bg-[rgba(255,255,255,0.35)] hover:bg-[rgba(255,255,255,0.45)]"
            >
              <span className="w-0 h-2 rounded-full bg-white opacity-0 scale-0 mr-0 group-hover:w-2 group-hover:opacity-100 group-hover:scale-100 group-hover:mr-2 transition-all duration-500 ease-out"></span>
              View
            </TransitionLink>
            <div className="w-full text-b2 text-black uppercase mt-4">
              Websites
            </div>
          </div>
          <div className="relative group/card w-[120px] h-[157px] lg:w-[145px] lg:h-[190px] xl:w-[166px] xl:h-[217px] bg-[#FDFDFD]">
            <Image
              src={thumbnailBrochure}
              alt="Jünn"
              objectFit={"cover"}
              className="h-full"
            />
            <TransitionLink
              href="/home"
              className="absolute left-1/2 bottom-4 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none group-hover/card:pointer-events-auto opacity-0 group-hover/card:opacity-100 transition-all duration-500 ease-out group flex py-4 px-4 items-center justify-center uppercase tracking-widest text-b3-regular text-white backdrop-blur-[7.5px] bg-[rgba(255,255,255,0.35)] hover:bg-[rgba(255,255,255,0.45)]"
            >
              <span className="w-0 h-2 rounded-full bg-white opacity-0 scale-0 mr-0 group-hover:w-2 group-hover:opacity-100 group-hover:scale-100 group-hover:mr-2 transition-all duration-500 ease-out"></span>
              View
            </TransitionLink>
            <div className="w-full text-b2 text-black uppercase mt-4">
              Brochure
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
