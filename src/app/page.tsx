import Image from "next/image";
import { TransitionLink } from "./components/TransitionLink";

export default function Home() {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <header className="flex justify-between items-center px-16 py-8 fixed top-0 w-full z-50 text-stone-100 font-mona">
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

      <main className="grow h-full">
        {/* Hero Section */}
        <section className="relative h-full w-full flex flex-col justify-end p-12 pb-0 text-stone-200">
          <div className="absolute inset-0 -z-10">
            <Image
              src="/images/luxury-villa-hero.png"
              alt="Luxury Villa"
              fill
              className="object-cover"
              priority
            />
            {/* Overlay for better text readability */}
            {/* <div className="absolute inset-0 bg-black/30"></div> */}
          </div>

          <div className="group flex justify-center items-center">
            <TransitionLink
              href="/home"
              className="opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 inline-flex items-center justify-center uppercase tracking-widest transition-all duration-500 ease-out border border-[#CEC7BF] text-h4 text-white backdrop-blur-[7.5px] bg-[rgba(0,0,0,0.35)] rounded-full aspect-square hover:bg-[rgba(0,0,0,0.45)] h-[140px]"
            >
              Enter
            </TransitionLink>
          </div>

          <div className="flex justify-center gap-8 items-center font-sans text-sm tracking-wide">
            <div className="flex flex-col gap-1 text-end font-mona">
              <p className="text-b1">97 Ahumoana Drive, Weiti Bay</p>
              <p className="text-b1">Okura Bush | Auckland | New Zealand</p>
            </div>

            <div className="uppercase text-h0 text-white">AURUM</div>

            <div className="flex flex-col items-end gap-6 font-mona">
              <p className="text-b1">
                House and Land &nbsp;&nbsp;|&nbsp;&nbsp; 2026
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
