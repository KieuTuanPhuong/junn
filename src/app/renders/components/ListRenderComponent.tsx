"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { AnimatePresence, motion } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import mcgrathResidence from "@/public/images/renders/mcgrath_residence.png"
import solace from "@/public/images/renders/solace.png"
import malibu from "@/public/images/renders/malibu.png"
import aurum from "@/public/images/renders/aurum.png"
import mcgrathResidence2 from "@/public/images/renders/mcgrath_residence_2.png"
import { cn } from "@/lib/utils"

import aboutUsThumbnail from "@/public/images/aboutus-thumbnail.png"
import homeHereImage from "@/public/images/home-here-image.png"
import stepBrief from "@/public/images/step-brief.png"
import stepDelivery from "@/public/images/step-delivery.png"
import stepFirstLook from "@/public/images/step-first-look.png"
import stepMeet from "@/public/images/step-meet.png"
import stepYourFiles from "@/public/images/step-your-files.png"
import thumbnailAnimation from "@/public/images/thumbnail-animation.png"
import thumbnailBranding from "@/public/images/thumbnail-branding.png"
import thumbnailBrochure from "@/public/images/thumbnail-brochure.png"
import thumbnailRenders from "@/public/images/thumbnail-renders.png"
import thumbnailWebsite from "@/public/images/thumbnail-website.png"

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
    detailImages: [aboutUsThumbnail, homeHereImage],
  },
  {
    id: "2",
    location: "New Zealand",
    title: "Solace",
    image: solace,
    slug: "solace",
    detailImages: [
      stepBrief,
      stepDelivery,
      thumbnailAnimation,
      stepFirstLook,
      thumbnailBranding,
    ],
  },
  {
    id: "3",
    location: "New Zealand",
    title: "Malibu",
    image: malibu,
    slug: "malibu",
    detailImages: [
      stepMeet,
      thumbnailBrochure,
      thumbnailRenders,
      stepBrief,
      thumbnailWebsite,
    ],
  },
  {
    id: "4",
    location: "New Zealand",
    title: "Aurum",
    image: aurum,
    slug: "aurum",
    detailImages: [
      aboutUsThumbnail,
      stepBrief,
      thumbnailAnimation,
      homeHereImage,
      stepDelivery,
    ],
  },
  {
    id: "5",
    location: "New Zealand",
    title: "McGrath Residence",
    image: mcgrathResidence2,
    slug: "mcgrath-residence-2",
    detailImages: [stepFirstLook, thumbnailBranding, stepMeet],
  },
]

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({
    x: direction > 0 ? "-100%" : "100%",
    opacity: 0,
  }),
}

export function ListRenderComponent() {
  const anchorRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])
  const [bleed, setBleed] = useState<{ left: number; width: number }>({
    left: 0,
    width: 0,
  })
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [imageIndex, setImageIndex] = useState(0)
  // 1 = next, -1 = prev; drives the slide-in direction of the image animation
  const [direction, setDirection] = useState(1)

  const selectedItem =
    selectedIndex !== null ? rendersData[selectedIndex] : null

  const openViewer = (index: number) => {
    setImageIndex(0)
    setSelectedIndex(index)
  }

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

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (selectedIndex === null) return
    setDirection(1)
    const total = rendersData[selectedIndex].detailImages.length
    setImageIndex((prev) => (prev + 1) % total)
  }

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (selectedIndex === null) return
    setDirection(-1)
    const total = rendersData[selectedIndex].detailImages.length
    setImageIndex((prev) => (prev - 1 + total) % total)
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
      <div className="md:hidden flex flex-col gap-24">
        {rendersData.map((item, index) => (
          <div
            key={index}
            data-reveal
            onClick={() => openViewer(index)}
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
                onClick={() => openViewer(index)}
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
                onClick={() => openViewer(index)}
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
                onClick={() => openViewer(index)}
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
                onClick={() => openViewer(index)}
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

          <div className="flex-1 flex flex-col min-h-0">
            <div className="flex-1 relative flex items-center justify-center md:justify-start pt-24 pb-16 md:pt-8 md:pb-20 md:mr-40 overflow-hidden z-10 min-h-0">
              <AnimatePresence
                mode="popLayout"
                custom={direction}
                initial={false}
              >
                <motion.div
                  key={imageIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    duration: 0.5,
                    ease: [0.32, 0.72, 0, 1],
                  }}
                  className="relative w-full h-full md:w-auto md:h-full md:max-w-full"
                >
                  <div className="w-full h-full overflow-hidden px-6 lg:px-0">
                    <Image
                      src={selectedItem!.detailImages[imageIndex]}
                      alt={`${selectedItem!.title} detail ${imageIndex + 1}`}
                      className="w-auto h-full md:w-auto md:max-w-none object-cover"
                    />
                  </div>
                  <div className="w-full flex lg:justify-end justify-center mt-9 lg:absolute lg:right-4 md:right-0 lg:-bottom-10">
                    <span className="text-[#8C8C8C] text-sh1 tracking-widest">
                      {imageIndex + 1} / {selectedItem!.detailImages.length}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex md:hidden items-center justify-center gap-2 py-7">
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

            <div className="hidden md:flex absolute right-0 bottom-1/5 translate-y-[12px] flex-col items-end gap-6 z-5">
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
