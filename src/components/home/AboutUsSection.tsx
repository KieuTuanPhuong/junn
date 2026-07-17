"use client"

import { useRef } from "react"
import Image from "next/image"
import aboutUsThumbnail from "@/public/images/aboutus-thumbnail.png"
import { useScrollReveal } from "@/lib/useScrollReveal"

export function AboutUsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  useScrollReveal(sectionRef)

  return (
    <section
      ref={sectionRef}
      id="about-us"
      className="flex flex-col lg:flex-row relative container mx-auto max-[2000px]:mr-0 px-6 md:px-10"
    >
      <div className="hidden lg:block flex-1"></div>

      <div className="flex-9 min-w-0 flex flex-col justify-between gap-8 relative lg:border-l border-[#E8E8E8] py-10 lg:py-20 pt-[200px]!">
        <div data-reveal className="flex flex-col gap-8 p-6 md:p-10 lg:p-14">
          <div className="flex items-center gap-2">
            <span className="hidden lg:block absolute left-[4.5px] -translate-x-full w-[10px] h-[10px] rounded-full bg-[#E8E8E8]"></span>
            <h2 className="text-sh1">About us</h2>
          </div>
          <h1 className="text-h1 uppercase">
            We built JüNN <br className="hidden lg:inline" /> around a simple
            idea
          </h1>

          <p className="text-b3-regular text-[#8C8C8C] max-w-md">
            We built JÜNN around a simple idea — that high quality, fast
            turnaround, and a straightforward process are not mutually
            exclusive. The right team, the right systems, and a genuine passion
            for the work can deliver great outcomes without the complexity.
          </p>
        </div>

        <div className="relative min-h-[438px] w-full hidden md:block"></div>

        <div data-reveal className="w-full flex justify-end">
          <div className="flex flex-col gap-3 max-w-[400px] pb-20">
            <p className="text-b3-regular text-[#8C8C8C] mt-5">
              We understand that getting great creative work produced is rarely
              as simple as it should be. So we made it a point to change that.
              <br />
              <br />
              We built a system that captures every detail and keeps the
              complexity off your desk. We dedicate a project manager to every
              project — someone who starts by understanding exactly what success
              looks like to you. Your goals, your vision, your standard of
              perfect. That&apos;s what guides everything we do, and we work
              until we get it there.
              <br />
              <br />
              Think of us as your dedicated in-house studio, embedded in your
              project from first brief to final file. Renders, 3D animation,
              brochures, branding, websites — whatever you need.
            </p>
            <p className="text-b3-regular text-[#8C8C8C] mt-5">
              Tell us. We handle everything else.
            </p>
          </div>
        </div>

        <div className="relative -mx-6 md:-mx-10 lg:mx-0 lg:absolute lg:translate-y-[35%] lg:left-0 lg:-right-10 lg:inset-y-0 lg:w-auto">
          <Image
            src={aboutUsThumbnail}
            alt="About Us"
            className="w-full h-auto lg:h-[400px] object-cover"
          />
        </div>
      </div>
    </section>
  )
}
