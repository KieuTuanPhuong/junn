"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import junnLogo from "@/public/images/junn-logo-large.png"
import { useScrollReveal } from "@/lib/useScrollReveal"

export function ContactFooter() {
  const footerRef = useRef<HTMLElement>(null)
  useScrollReveal(footerRef)

  return (
    <footer
      ref={footerRef}
      id="contact-us"
      className="flex flex-col border-t border-[#E8E8E8] divide-y divide-[#E8E8E8]"
    >
      <div className="relative flex">
        <div className="flex relative container mx-auto max-[2000px]:mr-0 px-6 md:px-10 flex-1">
          <div className="flex-1 h-full"></div>
          <div className="flex-9 py-10 lg:py-20 lg:border-l border-[#E8E8E8]">
            <div
              data-reveal
              className="flex flex-col md:flex-row items-start md:items-center gap-10 md:gap-5 p-6 md:p-10 lg:p-14"
            >
              <div className="flex flex-col gap-8 items-start">
                <span className="hidden lg:block absolute left-[4.5px] -translate-x-full w-[10px] h-[10px] mt-1 rounded-full bg-[#E8E8E8]"></span>
                <Link href={"/contact-us"} className="text-sh1 text-black">
                  Contact us
                </Link>
                <h1 className="text-h1 text-black uppercase w-full min-w-0 lg:min-w-[483px]">
                  We handle <br /> everything else
                </h1>
              </div>

              <div className="flex flex-col gap-10 items-start">
                <Link
                  href="mailto:jun123@gmail.com"
                  className="text-b2 text-black hover:opacity-70 transition-opacity"
                >
                  jun123@gmail.com
                </Link>
                <Link
                  href="tel:0987654321"
                  className="text-b2 text-black hover:opacity-70 transition-opacity"
                >
                  098 765 4321
                </Link>
                <p className="text-b2 text-black">
                  1-9 Seaview St Dulwich Hill NSW 2203 Australia
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-[239px] w-full hidden md:flex flex-col items-start md:items-end gap-12 border-l border-[#E8E8E8]"></div>
      </div>

      <div className="relative flex flex-col md:flex-row">
        <div className="flex relative container mx-auto max-[2000px]:mr-0 px-6 md:px-10 flex-1">
          <div className="flex-1 hidden md:flex justify-end self-stretch items-center w-full text-[#8C8C8C] text-2xs font-urbanist px-6 pt-8 md:px-0 md:pt-0 order-last md:order-0 md:text-justify md:[text-align-last:justify]">
            © JUNN 2026
          </div>

          <div className="flex-9 relative">
            <div
              data-reveal
              className="flex flex-col md:flex-row items-center justify-between gap-5 px-6 md:px-10 lg:px-14 pt-10 lg:pt-16"
            >
              <div className="hidden md:flex items-center md:-translate-x-10 lg:-translate-x-14">
                <Image
                  src={junnLogo}
                  alt="Jünn"
                  objectFit={"cover"}
                  className="w-[240px] md:w-[361px] h-full"
                />
              </div>

              <div className="flex flex-col md:flex-row gap-4 justify-between pb-12 pt-0">
                <Link
                  href="/home#what-we-do"
                  className="group flex items-center text-b2 text-black hover:opacity-70 transition-opacity"
                >
                  <span className="w-2 h-2 mr-2 rounded-full bg-[#E8E8E8] opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out"></span>
                  What We Do
                </Link>
                <Link
                  href="/home#how-it-works"
                  className="group flex items-center text-b2 text-black hover:opacity-70 transition-opacity"
                >
                  <span className="w-2 h-2 mr-2 rounded-full bg-[#E8E8E8] opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out"></span>
                  How It Works
                </Link>
                <Link
                  href="/home#about-us"
                  className="group flex items-center text-b2 text-black hover:opacity-70 transition-opacity"
                >
                  <span className="w-2 h-2 mr-2 rounded-full bg-[#E8E8E8] opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out"></span>
                  About Us
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-[239px] mx-auto md:mx-0 w-full flex flex-col items-center md:items-start self-stretch justify-center px-6 md:px-10 lg:px-14 pt-10 lg:pt-16 gap-12 md:border-l border-[#E8E8E8] pb-12">
          <Link
            href="/contact-us"
            className="group relative flex items-center text-b3-bold text-black uppercase hover:opacity-70 transition-opacity"
          >
            <span className="absolute -left-[51.55px] -translate-x-full w-2.5 h-2.5 mr-2 rounded-full bg-black opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out"></span>
            Let&apos;s Talk
          </Link>
        </div>

        <div className="w-full flex items-start md:hidden">
          <Image
            src={junnLogo}
            alt="Jünn"
            objectFit={"cover"}
            className="w-[240px] md:w-[361px] h-full"
          />
          <div className="flex-1 self-stretch flex items-center w-full text-[#8C8C8C] text-2xs font-urbanist px-6 pt-8 md:px-0 md:pt-0 order-last md:order-0 md:text-justify md:[text-align-last:justify]">
            © JUNN 2026
          </div>
        </div>
      </div>
    </footer>
  )
}
