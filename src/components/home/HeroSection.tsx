"use client"

import { useRef, useState } from "react"
import MuxVideo from "@mux/mux-video/react"
import { useScrollReveal } from "@/lib/useScrollReveal"

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [videoReady, setVideoReady] = useState(false)
  useScrollReveal(sectionRef)

  return (
    <section
      ref={sectionRef}
      className="flex flex-col gap-12 py-12 container mx-auto max-[2000px]:mr-0 px-6 md:px-10"
    >
      {/* Hero Content */}
      <div className="flex flex-col gap-8 mt-12 lg:min-h-screen">
        <h2 data-reveal className="text-h2 text-black font-medium! uppercase">
          We create cinematic 3D visuals <br className="hidden lg:inline" /> and
          refined property marketing <br className="hidden lg:inline" />
          that bring unbuilt spaces to life, <br className="hidden lg:inline" />{" "}
          capturing attention and <br className="hidden lg:inline" /> inspiring
          people to look closer.
        </h2>

        <div className="relative min-h-[550px] w-full hidden md:block"></div>
      </div>

      <div
        data-reveal
        className="relative -mx-6 md:-mx-10 lg:mx-0 lg:absolute z-10 lg:left-0 lg:bottom-0 top-[8%] w-screen h-auto lg:h-[60vh] bg-neutral-100 mt-8 flex items-center justify-center text-neutral-400"
      >
        <MuxVideo
          playbackId="01E102I00wo013nV014vC00Xckt4g00UE800XYYA4Nm5MkoaHj8"
          streamType="on-demand"
          autoplay
          muted
          loop
          playsInline
          preload="auto"
          onPlaying={() => setVideoReady(true)}
          className={`w-full h-full transition-opacity duration-1000 ease-out ${
            videoReady ? "opacity-100" : "opacity-0"
          }`}
          style={{ "--media-object-fit": "cover" } as React.CSSProperties}
        />
      </div>
    </section>
  )
}
