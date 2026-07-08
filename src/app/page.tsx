"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import MuxVideo from "@mux/mux-video/react"
import { TransitionLink } from "./components/TransitionLink"
import Image from "next/image"
import junnLogo from "@/public/junn-images/junn-logo-thin.png"

export default function Home() {
  const [videoReady, setVideoReady] = useState(false)

  return (
    <main className="relative h-screen w-screen overflow-hidden flex flex-col items-center justify-between py-16">
      <MuxVideo
        playbackId="01E102I00wo013nV014vC00Xckt4g00UE800XYYA4Nm5MkoaHj8"
        streamType="on-demand"
        autoplay
        muted
        loop
        playsInline
        preload="auto"
        onPlaying={() => setVideoReady(true)}
        className={`absolute inset-0 w-full h-full -z-10 scale-110 transition-opacity duration-1000 ease-out ${
          videoReady ? "opacity-100" : "opacity-0"
        }`}
        style={{ "--media-object-fit": "cover" } as React.CSSProperties}
      />

      <div className="w-full flex justify-center items-center ">
        <Image
          src={junnLogo}
          alt="Jünn"
          objectFit={"cover"}
          className="w-[91px] h-[62px]"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 1.2,
          delay: 0.6,
          ease: [0.16, 1, 0.3, 1], // premium custom easeOutExpo/easeOutQuart
        }}
        className="z-10"
      >
        <TransitionLink
          href="/home"
          className="group flex w-[197px] h-[41px] py-4 px-4 items-center justify-center uppercase tracking-widest transition-all duration-500 ease-out text-b3-regular text-white backdrop-blur-[7.5px] bg-[rgba(255,255,255,0.35)] hover:bg-[rgba(255,255,255,0.45)] mb-16"
        >
          <span className="w-0 h-2 rounded-full bg-white opacity-0 scale-0 mr-0 group-hover:w-2 group-hover:opacity-100 group-hover:scale-100 group-hover:mr-2 transition-all duration-500 ease-out"></span>
          Enter
        </TransitionLink>
      </motion.div>
    </main>
  )
}
