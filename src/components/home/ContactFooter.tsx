import Link from "next/link"
import Image from "next/image"
import junnLogo from "@/public/junn-images/junn-logo-large.png"

export function ContactFooter() {
  return (
    <footer
      id="contact-us"
      className="flex flex-col border-t border-[#E8E8E8] divide-y divide-[#E8E8E8]"
    >
      <div className="relative">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
          <div className="flex-1 h-full"></div>
          <div className="flex-9 flex flex-col md:flex-row items-start md:items-center gap-10 md:gap-5 px-6 md:px-10 lg:px-14 py-20 lg:py-40 lg:border-x border-[#E8E8E8]">
            <div className="flex flex-col gap-8 items-start">
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

          <div className="max-w-[239px] w-full flex flex-col items-start md:items-end gap-12"></div>
        </div>
      </div>

      <div className="relative">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-start">
          <div className="hidden md:flex flex-1 self-stretch flex items-center w-full text-[#8C8C8C] text-2xs font-urbanist px-6 pt-8 md:px-0 md:pt-0 order-last md:order-none md:text-justify md:[text-align-last:justify]">
            © JUNN 2026
          </div>
          <div className="flex-9 flex flex-col md:flex-row items-center justify-between gap-5 px-6 md:px-10 lg:px-14 pt-10 lg:pt-16 relative lg:border-x border-[#E8E8E8]">
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
                href="#"
                className="group flex items-center text-b2 text-black hover:opacity-70 transition-opacity"
              >
                <span className="w-2 h-2 mr-2 rounded-full bg-[#E8E8E8] opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out"></span>
                What We Do
              </Link>
              <Link
                href="#"
                className="group flex items-center text-b2 text-black hover:opacity-70 transition-opacity"
              >
                <span className="w-2 h-2 mr-2 rounded-full bg-[#E8E8E8] opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out"></span>
                How It Works
              </Link>
              <Link
                href="#"
                className="group flex items-center text-b2 text-black hover:opacity-70 transition-opacity"
              >
                <span className="w-2 h-2 mr-2 rounded-full bg-[#E8E8E8] opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out"></span>
                About Us
              </Link>
            </div>
          </div>

          <div className="max-w-[239px] mx-auto md:mx-0 w-full flex flex-col items-center md:items-start self-stretch justify-end p-6 md:p-12 gap-12">
            <Link
              href="/contact-us"
              className="group relative flex items-center text-b3-bold text-black uppercase hover:opacity-70 transition-opacity"
            >
              <span className="absolute -left-2 -translate-x-full w-2 h-2 mr-2 rounded-full bg-black opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out"></span>
              Let&apos;s Talk
            </Link>
          </div>
        </div>
        <div className="w-full flex items-start">
          <Image
            src={junnLogo}
            alt="Jünn"
            objectFit={"cover"}
            className="w-[240px] md:w-[361px] h-full"
          />
          <div className="md:hidden flex-1 self-stretch flex items-center w-full text-[#8C8C8C] text-2xs font-urbanist px-6 pt-8 md:px-0 md:pt-0 order-last md:order-none md:text-justify md:[text-align-last:justify]">
            © JUNN 2026
          </div>
        </div>
      </div>
    </footer>
  )
}
