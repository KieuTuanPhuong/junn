"use client"

import { useState } from "react"
import Image from "next/image"
import stepMeet from "@/public/junn-images/step-meet.png"
import stepBrief from "@/public/junn-images/step-brief.png"
import stepYourFiles from "@/public/junn-images/step-your-files.png"
import stepFirstLook from "@/public/junn-images/step-first-look.png"
import stepDelivery from "@/public/junn-images/step-delivery.png"

const steps = [
  {
    num: "01",
    title: "Meet",
    desc: "We meet online or at your office. We talk through the project, what you need, and what great looks like to you.",
    image: stepMeet,
  },
  {
    num: "02",
    title: "Brief",
    desc: "We guide you through our structured brief — built to capture every detail we need, whatever the deliverable. We get it right early, nothing is left to chance",
    image: stepBrief,
  },
  {
    num: "03",
    title: "Setup",
    desc: "We set up a private project folder and you drop everything in. We take it from there.",
    image: stepYourFiles,
  },
  {
    num: "04",
    title: "Review",
    desc: "Before we go into full production, we prepare mock-ups and you see exactly where we're headed. Your feedback, our refinement — then we're aligned.",
    image: stepFirstLook,
  },
  {
    num: "05",
    title: "Delivery",
    desc: "Final files in your format, ready to use. No chasing. No surprises.",
    image: stepDelivery,
  },
]

export function HowItWorksSection() {
  const [active, setActive] = useState(0)

  return (
    <section id="how-it-works" className="flex">
      <div className="hidden lg:block flex-1"></div>

      <div className="flex-9 flex flex-col gap-8 p-6 pt-24 md:p-10 md:pt-28 lg:p-14 lg:pt-40 relative lg:border-l border-[#E8E8E8]">
        <div className="flex flex-col gap-11 py-16 lg:py-40">
          <div className="flex items-center gap-2">
            <span className="hidden lg:block absolute left-[3.5px] -translate-x-full w-2 h-2 rounded-full bg-[#E8E8E8]"></span>
            <h2 className="text-sh1">How it works</h2>
          </div>
          <h1 className="text-h1 uppercase">
            A clear path from concept to delivery
          </h1>

          <div className="flex flex-col gap-3">
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

        <div className="flex flex-col lg:flex-row gap-16 mt-8">
          <div
            className="flex-1 flex flex-col gap-12 group/steps"
            onMouseLeave={() => setActive(0)}
          >
            {steps.map((step, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setActive(idx)}
                className="flex gap-4 md:gap-8 items-start group relative cursor-pointer min-h-30"
              >
                <div className="flex flex-col gap-2 w-16 md:w-32 shrink-0">
                  <span className="text-[#8C8C8C] text-sh2">{step.num}</span>
                  <h3 className="text-h3 text-black font-gabarito max-lg:[writing-mode:vertical-rl]">
                    {step.title}
                  </h3>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-[#8C8C8C] text-sh2 invisible">
                    {step.num}
                  </span>
                  <p className="text-b3-regular text-[#4B4B4B] max-w-md">
                    {step.desc}
                  </p>

                  <div className="lg:hidden relative w-full aspect-[4/3] mt-4 overflow-hidden bg-neutral-100">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      sizes="100vw"
                      className="object-cover"
                    />
                  </div>
                </div>

                <span className="hidden lg:block absolute z-10 w-2 h-2 -bottom-[27.5px] -left-[60.5px] rounded-full bg-[#E8E8E8] opacity-0 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:scale-100"></span>

                <div
                  className={`hidden lg:block z-0 absolute w-screen right-80 max-w-[2000px]:right-[600px] translate-x-1/2 -bottom-6 h-px bg-[#E8E8E8] opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${
                    idx === 0 ? "group-not-[&:hover]/steps:opacity-100" : ""
                  }`}
                ></div>
              </div>
            ))}
          </div>

          <div className="hidden lg:block lg:w-1/3 h-full bg-neutral-100 sticky top-8 overflow-hidden">
            {steps.map((step, idx) => (
              <Image
                key={idx}
                src={step.image}
                alt={step.title}
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className={`object-cover transition-all duration-700 ease-out ${
                  active === idx
                    ? "opacity-100 translate-y-0 z-10"
                    : "opacity-0 translate-y-full z-0"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
