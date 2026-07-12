"use client"

import { TransitionLink } from "./components/TransitionLink"
import Image from "next/image"
import junnLogo from "@/public/images/junn-logo-thin.png"
import { ContactFooter } from "@/components/home/ContactFooter"

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="px-16 py-12 w-full flex justify-center items-center">
        <Image
          src={junnLogo}
          alt="Jünn"
          objectFit={"cover"}
          className="w-[91px] h-[62px]"
        />
      </header>

      <main className="grow flex flex-col items-center justify-center py-16 px-4">
        <div className="text-center flex flex-col items-center">
          <h1 className="text-h1 text-black mb-2">404</h1>
          <h2 className="text-h4 uppercase text-stone-500 mb-16 tracking-[0.2em]">
            Page Not Found
          </h2>

          <TransitionLink
            href="/home"
            className="group flex w-[197px] h-[45px] py-4 px-4 items-center justify-center uppercase tracking-widest transition-all duration-500 ease-out text-b3-regular text-black border border-black backdrop-blur-[7.5px] bg-[rgba(255,255,255,0.35)] hover:bg-[rgba(255,255,255,0.45)] mb-16"
          >
            <span className="w-0 h-2 rounded-full bg-black opacity-0 scale-0 mr-0 group-hover:w-2 group-hover:opacity-100 group-hover:scale-100 group-hover:mr-2 transition-all duration-500 ease-out"></span>
            Return
          </TransitionLink>
        </div>
      </main>

      <ContactFooter />
    </div>
  )
}
