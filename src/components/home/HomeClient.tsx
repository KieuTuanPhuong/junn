"use client"

import { HeroSection } from "@/components/home/HeroSection"
import { WhatWeDoSection } from "@/components/home/WhatWeDoSection"
import { HowItWorksSection } from "@/components/home/HowItWorksSection"
import { AboutUsSection } from "@/components/home/AboutUsSection"
import { ContactFooter } from "@/components/home/ContactFooter"
import { MobileNav } from "@/components/home/MobileNav"
import { Sidebar } from "@/components/home/Sidebar"

export function HomeClient() {
  return (
    <div className="w-full flex flex-col overflow-x-clip">
      <MobileNav />

      <div className="flex">
        <div className="relative flex-1 min-w-0 bg-white">
          <HeroSection />
          <WhatWeDoSection />
          <HowItWorksSection />
          <AboutUsSection />
        </div>

        <Sidebar />
      </div>

      <ContactFooter />
    </div>
  )
}
