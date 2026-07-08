import Image from "next/image"
import heroImage from "@/public/junn-images/home-here-image.png"

export function HeroSection() {
  return (
    <section className="flex flex-col gap-12 py-12 px-6 md:px-10 lg:px-0">
      {/* Hero Content */}
      <div className="flex flex-col gap-8 mt-12 lg:min-h-screen">
        <h2 className="text-h2 text-black font-medium uppercase">
          We create cinematic 3D visuals <br className="hidden lg:inline" /> and
          refined property marketing <br className="hidden lg:inline" />
          that bring unbuilt spaces to life, <br className="hidden lg:inline" />{" "}
          capturing attention and <br className="hidden lg:inline" /> inspiring
          people to look closer.
        </h2>

        <div className="relative lg:absolute z-10 lg:left-0 lg:bottom-0 lg:translate-y-[50%] 2xl:translate-y-[20%] w-full h-auto lg:h-[60vh] bg-neutral-100 mt-8 flex items-center justify-center text-neutral-400">
          <Image
            src={heroImage}
            alt="Hero banner"
            objectFit="cover"
            className="w-full"
          />
        </div>
      </div>
    </section>
  )
}
