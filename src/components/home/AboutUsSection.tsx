import Image from "next/image"
import aboutUsThumbnail from "@/public/junn-images/aboutus-thumbnail.png"

export function AboutUsSection() {
  return (
    <section
      id="about-us"
      className="flex flex-col lg:flex-row relative h-auto lg:h-[160vh]"
    >
      <div className="hidden lg:block flex-1"></div>

      <div className="flex-9 flex flex-col justify-between gap-8 p-6 md:p-10 lg:p-14 relative lg:border-l border-[#E8E8E8]">
        <div className="flex flex-col gap-11 py-16 lg:py-40">
          <div className="flex items-center gap-2">
            <span className="hidden lg:block absolute left-[3.5px] -translate-x-full w-2 h-2 rounded-full bg-[#E8E8E8]"></span>
            <h2 className="text-sh1">About us</h2>
          </div>
          <h1 className="text-h1 uppercase">
            We built JüNN <br className="hidden lg:inline" /> around a simple
            idea
          </h1>

          <p className="text-b3-regular text-[#8C8C8C] max-w-md">
            We built JÜNN around a simple idea — that high quality, fast
            turnaround, and a straightforward process are not mutually
            exclusive. The right team, the right systems, and a genuine passion
            for the work can deliver great outcomes without the complexity.
          </p>
        </div>

        <div className="w-full flex justify-end">
          <div className="flex flex-col gap-3 max-w-[400px]">
            <p className="text-b3-regular text-[#8C8C8C] mt-5">
              We understand that getting great creative work produced is rarely
              as simple as it should be. So we made it a point to change that.
              <br />
              <br />
              We built a system that captures every detail and keeps the
              complexity off your desk. We dedicate a project manager to every
              project — someone who starts by understanding exactly what success
              looks like to you. Your goals, your vision, your standard of
              perfect. That&apos;s what guides everything we do, and we work
              until we get it there.
              <br />
              <br />
              Think of us as your dedicated in-house studio, embedded in your
              project from first brief to final file. Renders, 3D animation,
              brochures, branding, websites — whatever you need.
            </p>
            <p className="text-b3-regular text-[#8C8C8C] mt-5">
              Tell us. We handle everything else.
            </p>
          </div>
        </div>
      </div>

      <div className="relative lg:absolute lg:translate-y-[40%] lg:inset-0">
        <Image
          src={aboutUsThumbnail}
          alt="About Us"
          objectFit="contain"
          className="w-full h-auto lg:h-[400px]"
        />
      </div>
    </section>
  )
}
