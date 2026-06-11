"use client";

import Footer from "./components/Footer";
import { TransitionLink } from "./components/TransitionLink";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-stone-200">
      <header className="px-16 py-12 w-full flex justify-center items-center">
        <div className="text-h1 font-medium! text-black leading-none">
          AURUM
        </div>
      </header>

      <main className="grow flex flex-col items-center justify-center py-16 px-4">
        <div className="text-center flex flex-col items-center">
          <h1 className="text-[120px] md:text-[180px] leading-none font-serif uppercase tracking-wider text-black mb-2">
            404
          </h1>
          <h2 className="text-h4 uppercase text-stone-500 mb-16 tracking-[0.2em]">
            Page Not Found
          </h2>
          
          <TransitionLink
            href="/"
            className="inline-flex items-center justify-center uppercase tracking-widest transition-all duration-500 ease-out border border-stone-400 text-b1 text-black bg-transparent hover:bg-stone-300 rounded-full aspect-square h-[140px]"
          >
            Return
          </TransitionLink>
        </div>
      </main>

      <Footer />
    </div>
  );
}
