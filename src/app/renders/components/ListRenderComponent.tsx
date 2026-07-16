"use client"

import { useEffect, useLayoutEffect, useRef, useState } from "react"
import Image from "next/image"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import mcgrathResidence from "@/public/images/renders/mcgrath_residence.png"
import solace from "@/public/images/renders/solace.png"
import malibu from "@/public/images/renders/malibu.png"
import aurum from "@/public/images/renders/aurum.png"
import mcgrathResidence2 from "@/public/images/renders/mcgrath_residence_2.png"
import { cn } from "@/lib/utils"

// aside is max-w-[239px] + 1px divide border, visible from the xl breakpoint (1280px) up
const SIDEBAR_WIDTH = 240
const XL_BREAKPOINT = 1280

const rendersData = [
  {
    id: "1",
    location: "New Zealand",
    title: "McGrath Residence",
    image: mcgrathResidence,
    slug: "mcgrath-residence",
  },
  {
    id: "2",
    location: "New Zealand",
    title: "Solace",
    image: solace,
    slug: "solace",
  },
  {
    id: "3",
    location: "New Zealand",
    title: "Malibu",
    image: malibu,
    slug: "malibu",
  },
  {
    id: "4",
    location: "New Zealand",
    title: "Aurum",
    image: aurum,
    slug: "aurum",
  },
  {
    id: "5",
    location: "New Zealand",
    title: "McGrath Residence",
    image: mcgrathResidence2,
    slug: "mcgrath-residence-2",
  },
]

// clone of the last slide prepended and the first slide appended so the
// slider can animate straight through the boundary and snap back invisibly
const extendedRendersData = [
  rendersData[rendersData.length - 1],
  ...rendersData,
  rendersData[0],
]

export function ListRenderComponent() {
  const anchorRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])
  const trackRef = useRef<HTMLDivElement>(null)
  const prevSelectedIndexRef = useRef<number | null>(null)
  const [bleed, setBleed] = useState<{ left: number; width: number }>({
    left: 0,
    width: 0,
  })
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [selectedIndex])

  useLayoutEffect(() => {
    const el = trackRef.current
    const total = rendersData.length
    const prevSelected = prevSelectedIndexRef.current

    if (selectedIndex === null || !el) {
      prevSelectedIndexRef.current = selectedIndex
      return
    }

    if (prevSelected === null) {
      gsap.set(el, { xPercent: -(selectedIndex + 1) * 100 })
      prevSelectedIndexRef.current = selectedIndex
      return
    }

    const wrapForward = prevSelected === total - 1 && selectedIndex === 0
    const wrapBackward = prevSelected === 0 && selectedIndex === total - 1
    const targetPos = wrapForward
      ? total + 1
      : wrapBackward
        ? 0
        : selectedIndex + 1

    gsap.to(el, {
      xPercent: -targetPos * 100,
      duration: 0.6,
      ease: "power3.inOut",
      onComplete: () => {
        if (wrapForward || wrapBackward) {
          gsap.set(el, { xPercent: -(selectedIndex + 1) * 100 })
        }
      },
    })

    prevSelectedIndexRef.current = selectedIndex
  }, [selectedIndex])

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation()
    setSelectedIndex((prev) =>
      prev === null ? null : (prev + 1) % rendersData.length,
    )
  }

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation()
    setSelectedIndex((prev) =>
      prev === null
        ? null
        : (prev - 1 + rendersData.length) % rendersData.length,
    )
  }

  useEffect(() => {
    function updateBleed() {
      const rect = anchorRef.current?.getBoundingClientRect()
      if (!rect) return
      const isXl = window.innerWidth >= XL_BREAKPOINT
      setBleed({
        left: -rect.left,
        width: window.innerWidth - (isXl ? SIDEBAR_WIDTH : 0),
      })
    }
    updateBleed()
    window.addEventListener("resize", updateBleed)
    return () => window.removeEventListener("resize", updateBleed)
  }, [])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const items = itemRefs.current.filter(
      (el): el is HTMLDivElement => el !== null,
    )
    const frames = items
      .map((el) => el.querySelector<HTMLElement>("[data-reveal-frame]"))
      .filter((el): el is HTMLElement => el !== null)

    gsap.set(items, { opacity: 0, y: 60 })
    gsap.set(frames, { scale: 1.15 })

    const batches = ScrollTrigger.batch(items, {
      start: "top 85%",
      once: true,
      onEnter: (batch) =>
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.15,
          overwrite: true,
        }),
    })

    const scaleTweens = frames.map((frame) =>
      gsap.to(frame, {
        scale: 1,
        ease: "none",
        scrollTrigger: {
          trigger: frame,
          start: "top bottom",
          end: "top 40%",
          scrub: true,
        },
      }),
    )

    return () => {
      batches.forEach((batch) => batch.kill())
      scaleTweens.forEach((tween) => tween.scrollTrigger?.kill())
    }
  }, [])

  return (
    <div className="w-full mt-16">
      <div className="md:hidden flex flex-col gap-12">
        {rendersData.map((item, index) => (
          <div
            key={index}
            data-reveal
            onClick={() => setSelectedIndex(index)}
            className="flex flex-col gap-4 cursor-pointer"
          >
            <div className="flex flex-col gap-2">
              <span className="text-sh1 text-black">{item.location}</span>
              <h3 className="text-h3 text-black">{item.title}</h3>
            </div>
            <div className="relative w-full h-[260px] overflow-hidden bg-[#E8E8E8]">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="hidden md:block">
        {rendersData.map((item, index) => {
          const layoutType = index % 4

          if (layoutType === 0) {
            return (
              <div
                key={index}
                ref={(el) => {
                  itemRefs.current[index] = el
                }}
                onClick={() => setSelectedIndex(index)}
                className="flex group w-full cursor-pointer"
              >
                <div
                  className={cn(
                    "flex-1",
                    index !== 0 && "border-r border-[#E8E8E8]",
                  )}
                ></div>
                <div
                  ref={index === 0 ? anchorRef : undefined}
                  className={cn(
                    "flex-9 flex flex-col gap-12 relative",
                    index === 0 ? "pt-12" : "pt-[150px]",
                  )}
                >
                  <div className="flex gap-[48px]">
                    <span className="z-10 w-[10px] h-[10px] rounded-full bg-[#E8E8E8] translate-x-[-5px] translate-y-[3px] group-hover:bg-black transition-colors duration-300"></span>

                    <div className="flex flex-col gap-3">
                      <span className="text-sh1 text-black">
                        {item.location}
                      </span>
                      <h3 className="text-h3 text-black">{item.title}</h3>
                    </div>
                  </div>

                  <div className="relative min-h-[550px] w-full hidden md:block"></div>

                  <div
                    data-reveal-frame
                    className={cn(
                      "absolute bottom-0 h-[550px] overflow-hidden bg-[#E8E8E8]",
                    )}
                    style={{ left: bleed.left, width: bleed.width }}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            )
          }

          if (layoutType === 1) {
            return (
              <div
                key={index}
                ref={(el) => {
                  itemRefs.current[index] = el
                }}
                onClick={() => setSelectedIndex(index)}
                className="flex group w-full cursor-pointer"
              >
                <div className="flex-1 border-r border-[#E8E8E8]"></div>
                <div className="flex-3 relative">
                  <span className="absolute top-1/2 left-0 translate-x-[-5px] translate-y-[-4px] z-10 w-[10px] h-[10px] rounded-full bg-[#E8E8E8] group-hover:bg-black transition-colors duration-300"></span>
                </div>
                <div className="flex-6 flex flex-col gap-12 pt-[150px] relative">
                  <div className="flex flex-col gap-3 ml-10">
                    <span className="text-sh1 text-black">{item.location}</span>
                    <h3 className="text-h3 text-black">{item.title}</h3>
                  </div>

                  <div className="relative min-h-[473px] w-full hidden md:block"></div>

                  <div
                    className={`hidden lg:block z-0 absolute w-screen right-0 top-1/2 max-w-[2000px]:right-[600px] translate-x-[15%] h-px bg-[#E8E8E8]`}
                  ></div>

                  <div
                    data-reveal-frame
                    className={cn(
                      "absolute bottom-0 left-10 w-full h-[473px] overflow-hidden bg-[#E8E8E8]",
                    )}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            )
          }

          if (layoutType === 2) {
            return (
              <div
                key={index}
                ref={(el) => {
                  itemRefs.current[index] = el
                }}
                onClick={() => setSelectedIndex(index)}
                className="flex group w-full cursor-pointer"
              >
                <div className="flex-1 border-r border-[#E8E8E8]"></div>
                <div className="flex-9 flex flex-col gap-12 pt-[150px] relative">
                  <div className="flex gap-[48px]">
                    <span className="z-10 w-[10px] h-[10px] rounded-full bg-[#E8E8E8] translate-x-[-5px] translate-y-[3px] group-hover:bg-black transition-colors duration-300"></span>

                    <div className="flex flex-col gap-3">
                      <span className="text-sh1 text-black">
                        {item.location}
                      </span>
                      <h3 className="text-h3 text-black">{item.title}</h3>
                    </div>
                  </div>

                  <div className="relative min-h-[381px] w-full hidden md:block"></div>

                  <div
                    data-reveal-frame
                    className={cn(
                      "absolute bottom-0 left-0 w-full max-w-[646px] h-[381px] overflow-hidden bg-[#E8E8E8]",
                    )}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            )
          }

          if (layoutType === 3) {
            return (
              <div
                key={index}
                ref={(el) => {
                  itemRefs.current[index] = el
                }}
                onClick={() => setSelectedIndex(index)}
                className="flex group w-full cursor-pointer"
              >
                <div className="flex-1 border-r border-[#E8E8E8]"></div>
                <div className="flex-1 relative">
                  <span className="absolute top-1/2 left-0 translate-x-[-5px] translate-y-[-4px] z-10 w-[10px] h-[10px] rounded-full bg-[#E8E8E8] group-hover:bg-black transition-colors duration-300"></span>
                </div>
                <div className="flex-8 flex flex-col gap-12 pt-[150px] relative">
                  <div className="flex flex-col gap-3">
                    <span className="text-sh1 text-black">{item.location}</span>
                    <h3 className="text-h3 text-black">{item.title}</h3>
                  </div>

                  <div className="relative min-h-[611px] w-full hidden md:block"></div>

                  <div
                    className={`hidden lg:block z-0 absolute w-screen right-0 top-1/2 max-w-[2000px]:right-[600px] translate-x-[15%] h-px bg-[#E8E8E8]`}
                  ></div>

                  <div
                    data-reveal-frame
                    className={cn(
                      "absolute bottom-0 left-0 mx-auto w-full max-w-[757px] h-[611px] overflow-hidden bg-[#E8E8E8]",
                    )}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            )
          }

          return null
        })}
      </div>

      {selectedIndex !== null && (
        <div
          className="fixed top-0 left-0 z-50 bg-white flex flex-col cursor-default animate-in fade-in duration-300 h-screen overflow-hidden translate-x-px"
          style={{ width: bleed.width ? `${bleed.width}px` : "100vw" }}
        >
          <button
            onClick={() => setSelectedIndex(null)}
            className="absolute top-6 right-6 md:top-10 md:right-10 z-30 p-3 -m-3 text-[#8C8C8C] md:text-[#D1D1D1] hover:text-black transition-colors"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          <div className="flex-1 flex">
            <div className="flex-1 relative flex items-center justify-center pt-8 pb-20 mr-6 md:mr-40 overflow-hidden z-10">
              <div ref={trackRef} className="flex w-full h-full">
                {extendedRendersData.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="w-full h-full shrink-0 flex items-center justify-start"
                    >
                      <div className="relative h-full max-w-[80%] inline-block">
                        <Image
                          src={item.image}
                          alt={item.title}
                          className="h-full w-auto object-cover"
                        />
                        <span className="absolute right-0 -bottom-10 text-[#8C8C8C] text-sh1 tracking-widest">
                          {index} / {rendersData.length}
                        </span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="absolute right-0 bottom-1/5 translate-y-[12px] flex flex-col items-end gap-6 z-5">
              <div className="flex items-center relative z-5">
                <div className="flex gap-2 px-10">
                  <button
                    onClick={handlePrev}
                    className="w-[48px] h-[48px] rounded-full border border-[#E8E8E8] flex items-center justify-center text-[#8C8C8C] hover:text-black hover:border-black transition-colors bg-white"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M19 12H5M12 19l-7-7 7-7" />
                    </svg>
                  </button>

                  <button
                    onClick={handleNext}
                    className="w-[48px] h-[48px] rounded-full border border-[#E8E8E8] flex items-center justify-center text-[#8C8C8C] hover:text-black hover:border-black transition-colors bg-white"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>

              <div
                className={`hidden lg:block -z-10 absolute w-screen right-0 top-6 max-w-[2000px]:right-[600px] translate-x-[15%] h-px bg-[#E8E8E8]`}
              ></div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
