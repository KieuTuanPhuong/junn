"use client";

import Image, { type StaticImageData } from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import zenStones from "../../../public/images/zen-stones.png";
import luxuryVilla from "../../../public/images/luxury-villa-exterior.png";
import kitchenCounter from "../../../public/images/kitchen-counter-decor.png";
import projectIntro from "../../../public/images/project-intro-video.png";
import aurumBrand from "../../../public/images/aurum-brand-book.png";
import { TransitionLink } from "../components/TransitionLink";

const TIMELINE_ITEMS = [
  {
    id: "01",
    title: "The Brief",
    image: zenStones,
  },
  {
    id: "02",
    title: "Render",
    image: luxuryVilla,
  },
  {
    id: "03",
    title: "Explore | Finishes",
    image: kitchenCounter,
  },
  {
    id: "04",
    title: "Animation",
    image: projectIntro,
  },
  {
    id: "05",
    title: "Brochure",
    image: aurumBrand,
  },
];

interface TimelineItemProps {
  item: {
    id: string;
    title: string;
    image: StaticImageData;
  };
  index: number;
}

const TimelineItem = ({ item, index }: TimelineItemProps) => {
  const isEven = index % 2 === 0;
  const itemRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start center", "end center"],
  });

  // Hold in place through the item, then slide up out of view as the next item enters.
  const titleY = useTransform(scrollYProgress, [0.7, 1], ["0%", "100%"]);

  return (
    <div
      ref={itemRef}
      className={`relative flex items-stretch w-full gap-8 z-10 py-6 overflow-visible ${
        isEven ? "flex-row" : "flex-row-reverse"
      }`}
    >
      <div
        className={`w-1/3 relative flex ${isEven ? "justify-end" : "justify-start"}`}
      >
        <div className="sticky top-1/2 h-fit overflow-hidden">
          <motion.div
            className="tracking-widest uppercase text-b2 flex flex-col items-start gap-4"
            style={{ y: titleY }}
          >
            <span className="text-sh1 text-neutral-60">{item.id}</span>
            <span
              className="text-h2 text-black"
              style={{
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
              }}
            >
              {item.title}
            </span>
          </motion.div>
        </div>
      </div>

      <div className="w-2/3 flex flex-col justify-center">
        <div className="relative aspect-4/5 max-h-[80vh] overflow-hidden bg-stone-300 cursor-pointer group">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover transition-transform h-full duration-700 group-hover:scale-115"
          />

          <div className="group flex justify-center items-center h-full">
            <TransitionLink
              href="/home"
              className="opacity-0 scale-75 h-[200px] group-hover:opacity-100 p-10 group-hover:scale-100 inline-flex items-center justify-center uppercase tracking-widest transition-all duration-500 ease-out border border-[#CEC7BF] text-h4 text-white backdrop-blur-[7.5px] bg-[rgba(0,0,0,0.35)] rounded-full  hover:bg-[rgba(0,0,0,0.45)] text-center"
            >
              View detail
            </TransitionLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function HomeContent() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const rightTextY = useTransform(scrollYProgress, [0, 1], ["0vh", "80vh"]);

  const { scrollY } = useScroll();
  const heroTextScale = useTransform(scrollY, [0, 400], [1, 0.3]);
  const heroTextOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const heroTextY = useTransform(scrollY, [0, 400], ["0vh", "-45vh"]);

  const section1Ref = useRef<HTMLElement>(null);
  const { scrollYProgress: s1Progress } = useScroll({
    target: section1Ref,
    offset: ["start start", "end end"],
  });

  const imagesY = useTransform(s1Progress, [0, 1], ["100vh", "-100vh"]);

  return (
    <div className="flex flex-col min-h-screen bg-stone-200">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex flex-col justify-between p-12 pb-12 text-stone-200">
        <header className="flex justify-between items-center top-0 w-full z-50 text-stone-100 font-mona">
          <div className="flex gap-14 uppercase tracking-widest text-sm">
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
          <div className="flex gap-14 uppercase tracking-widest text-sm">
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
        </header>

        <div className="absolute inset-0 z-0">
          <Image
            src="/images/luxury-villa-hero.png"
            alt="Luxury Villa"
            fill
            className="object-cover"
            priority
          />
        </div>

        <motion.div
          className="relative z-10 flex justify-center gap-8 items-center font-sans text-sm tracking-wide"
          style={{
            scale: heroTextScale,
            opacity: heroTextOpacity,
            y: heroTextY,
          }}
        >
          <div className="flex flex-col gap-1 text-end font-mona">
            <p className="text-b1">97 Ahumoana Drive, Weiti Bay</p>
            <p className="text-b1">Okura Bush | Auckland | New Zealand</p>
          </div>

          <div className="uppercase text-h0 text-white text-center">AURUM</div>

          <div className="flex flex-col items-end gap-6 font-mona">
            <p className="text-b1">
              House and Land &nbsp;&nbsp;|&nbsp;&nbsp; 2026
            </p>
          </div>
        </motion.div>
      </section>

      <Header />

      <main className="grow py-16">
        {/* Section 1: Introduction, Address + Images */}
        <section ref={section1Ref} className="relative h-[350vh] w-full">
          <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
            {/* Top Left Image */}
            <motion.div
              style={{ y: imagesY }}
              className="absolute top-0 left-0 w-[35vw] md:w-[25vw] h-[35vh] md:h-[30vh]"
            >
              <Image
                src="/images/tropical-beach-aerial.png"
                alt="Aerial Beach"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Middle Left Image */}
            <motion.div
              style={{ y: imagesY }}
              className="absolute bottom-[3%] left-[10%] lg:left-[20%] w-[40vw] md:w-[20vw] h-[25vh] md:h-[25vh]"
            >
              <Image
                src="/images/seaside-promenade-running.png"
                alt="Promenade Running"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Bottom Left Image */}
            <motion.div
              style={{ y: imagesY }}
              className="absolute bottom-[-80%] left-[5%] lg:left-[3%] w-[40vw] md:w-[20vw] h-[45vh] md:h-[55vh]"
            >
              <Image
                src="/images/pool_lounge.png"
                alt="Pool Lounge"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Top Right Image */}
            <motion.div
              style={{ y: imagesY }}
              className="absolute top-[15%] lg:top-[20%] right-0 w-[25vw] md:w-[25vw] h-[55vh] md:h-[60vh]"
            >
              <Image
                src="/images/coastal-neighborhood-aerial.png"
                alt="Coastal Neighborhood"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Bottom Right Image */}
            <motion.div
              style={{ y: imagesY }}
              className="absolute bottom-[-100%] right-[5%] lg:right-[10%] w-[20vw] md:w-[25vw] h-[55vh] md:h-[60vh]"
            >
              <Image
                src="/images/champagne_glasses.png"
                alt="Champagne Glasses"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Center Text */}
            <div className="flex flex-col items-center justify-center text-center gap-16 md:gap-20 z-10 max-w-4xl px-4 mt-8">
              <h4 className="uppercase text-neutral-60 text-h4">
                House and Land
              </h4>

              <h1 className="text-h1 font-serif uppercase tracking-wider">
                97 Ahumoana Drive, Weiti Bay <br />
                Okura Bush | Auckland | New Zealand
              </h1>

              <h4 className="uppercase text-neutral-60 text-h4">2026</h4>
            </div>
          </div>
        </section>

        {/* Section 2: Scrolling Progress */}
        <section
          ref={containerRef}
          className="relative w-full bg-stone-200 py-[200px]"
        >
          {/* Global Left and Right Sticky Text */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <div className="sticky top-20 h-screen w-full flex justify-between px-8 md:px-0">
              {/* Left side */}
              <div className="relative h-full flex items-center">
                <motion.div
                  className="absolute left-0 lg:left-6 top-1/2 -translate-y-1/2 bg-stone-200 whitespace-nowrap text-brand-5/50 tracking-widest uppercase text-b2"
                  style={{
                    writingMode: "vertical-lr",
                    rotate: 180,
                  }}
                >
                  97 Ahumoana Drive, Weiti Bay | Okura Bush | Auckland | New
                  Zealand
                </motion.div>
              </div>

              {/* Right side */}
              <div className="relative h-full flex justify-end">
                <div className="w-px h-[90vh] bg-brand-4 relative right-6 lg:right-8">
                  <motion.div
                    className="absolute left-1/2 -translate-x-1/2 top-0 bg-stone-200 p-[10px] whitespace-nowrap  text-brand-5/50 tracking-widest uppercase text-b2"
                    style={{
                      writingMode: "vertical-lr",
                      rotate: 180,
                      y: rightTextY,
                    }}
                  >
                    House and Land &nbsp;&nbsp;|&nbsp;&nbsp; 2026
                  </motion.div>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline Content */}
          <div className="relative z-10 max-w-5xl mx-auto pt-[20vh] pb-[20vh] flex flex-col pointer-events-auto">
            {/* Center Line spanning entire timeline content */}
            <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-brand-3 -translate-x-1/2 z-0">
              {/* Top Dot */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-brand-4" />

              <motion.div
                className="w-full bg-brand-4 origin-top"
                style={{ height: lineHeight }}
              />

              {/* Bottom Dot */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-brand-4" />
            </div>

            {/* Timeline Items */}
            {TIMELINE_ITEMS.map((item, i) => (
              <TimelineItem key={item.id} item={item} index={i} />
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
