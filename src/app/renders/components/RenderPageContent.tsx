"use client"

import { useRef } from "react"
import { ContactFooter } from "@/components/home/ContactFooter"
import { MobileNav } from "@/components/home/MobileNav"
import { Sidebar } from "@/components/home/Sidebar"
import { ListRenderComponent } from "./ListRenderComponent"
import { useScrollReveal } from "@/lib/useScrollReveal"

export default function RenderPageContent() {
  const contentRef = useRef<HTMLDivElement>(null)
  useScrollReveal(contentRef)

  return (
    <div className="w-full flex flex-col overflow-x-clip">
      <MobileNav />

      <div className="flex">
        <div
          ref={contentRef}
          className="flex-1 min-w-0 relative bg-white container mx-auto max-[2000px]:mr-0 px-6 md:px-10"
        >
          <div
            data-reveal
            className="w-full flex flex-col gap-5 max-xl:pt-10 py-12 my-10"
          >
            <h1 className="text-h1 text-black uppercase">Renders</h1>
            <p className="text-b1 text-[#8C8C8C] max-w-3xl">
              Crafted renderings that translate architectural vision into
              compelling visual narratives for investors and buyers.
            </p>
          </div>

          <ListRenderComponent />
        </div>

        <Sidebar />
      </div>

      <ContactFooter />
    </div>
  )
}
