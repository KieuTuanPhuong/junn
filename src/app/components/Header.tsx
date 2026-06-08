"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { TransitionLink } from "./TransitionLink";

export default function Header() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [200, 400], [0, 1]);
  const pointerEvents = useTransform(scrollY, [200, 201], ["none", "auto"]);
  const textY = useTransform(scrollY, [200, 400], ["100%", "0%"]);

  return (
    <motion.header 
      style={{ opacity, pointerEvents }}
      className="flex justify-between items-center px-16 py-4 fixed top-0 left-0 w-full z-50 bg-stone-200 border-b border-stone-400"
    >
      <div className="flex gap-14 uppercase tracking-widest font-mona text-xs text-b1! text-[#876E3D]">
        <TransitionLink
          href="#"
          className="hover:opacity-70 transition-opacity"
        >
          The brief
        </TransitionLink>
        <TransitionLink
          href="#"
          className="hover:opacity-70 transition-opacity"
        >
          Renders
        </TransitionLink>
        <TransitionLink
          href="#"
          className="hover:opacity-70 transition-opacity"
        >
          Brochure
        </TransitionLink>
      </div>
      <div className="overflow-hidden pt-1 pb-1">
        <motion.div style={{ y: textY }} className="text-h1 font-medium! text-black leading-none">AURUM</motion.div>
      </div>
      <div className="flex gap-14 uppercase tracking-widest font-mona text-xs text-b1! text-[#876E3D]">
        <TransitionLink
          href="#"
          className="hover:opacity-70 transition-opacity"
        >
          Ezplore | Finished
        </TransitionLink>
        <TransitionLink
          href="#"
          className="hover:opacity-70 transition-opacity"
        >
          Animation
        </TransitionLink>
      </div>
    </motion.header>
  );
}
