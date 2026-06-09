"use client";

import { motion } from "framer-motion";
import { TransitionLink } from "./components/TransitionLink";

export default function Home() {
  return (
    <main className="relative h-screen w-screen overflow-hidden flex items-end justify-center py-16">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-10"
      >
        <source src="/videos/home_demo.mp4" type="video/mp4" />
      </video>

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
          className="inline-flex items-center justify-center uppercase tracking-widest transition-all duration-500 ease-out border border-[#CEC7BF] text-h4 text-white backdrop-blur-[7.5px] bg-[rgba(0,0,0,0.35)] rounded-full aspect-square hover:bg-[rgba(0,0,0,0.45)] h-[140px] mb-16"
        >
          Enter
        </TransitionLink>
      </motion.div>
    </main>
  );
}
