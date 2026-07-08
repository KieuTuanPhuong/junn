import { Button } from "@/components/ui/button"

export default function DesignSystemDemo() {
  const colors = [
    {
      name: "Gold 500",
      class: "bg-gold-500",
      hex: "#826C41",
      textClass: "text-white",
    },
    {
      name: "Gold 600",
      class: "bg-gold-600",
      hex: "#876E3D",
      textClass: "text-white",
    },
    {
      name: "Brown 800",
      class: "bg-brown-800",
      hex: "#39240D",
      textClass: "text-white",
    },
    {
      name: "Brown 900",
      class: "bg-brown-900",
      hex: "#1A1003",
      textClass: "text-white",
    },
    {
      name: "Stone 100",
      class: "bg-stone-100",
      hex: "#FFF6E5",
      textClass: "text-brown-900 border border-stone-200",
    },
    {
      name: "Stone 200",
      class: "bg-stone-200",
      hex: "#EEEBE6",
      textClass: "text-brown-900",
    },
    {
      name: "Stone 300",
      class: "bg-stone-300",
      hex: "#E5E0DA",
      textClass: "text-brown-900",
    },
    {
      name: "Stone 400",
      class: "bg-stone-400",
      hex: "#CEC7BF",
      textClass: "text-brown-900",
    },
    {
      name: "Stone 500",
      class: "bg-stone-500",
      hex: "#BFBFBF",
      textClass: "text-brown-900",
    },
    {
      name: "Stone 600",
      class: "bg-stone-600",
      hex: "#A1A1A1",
      textClass: "text-white",
    },
    {
      name: "Stone 700",
      class: "bg-stone-700",
      hex: "#8A7D69",
      textClass: "text-white",
    },
  ]

  return (
    <div className="min-h-screen bg-stone-100 text-brown-900 selection:bg-gold-500 selection:text-white p-8 md:p-16 lg:p-24 overflow-x-hidden">
      {/* Header Section */}
      <header className="mb-24 flex flex-col items-center justify-center text-center">
        <p className="font-sans uppercase tracking-[0.3em] text-gold-600 mb-4 text-sm font-medium">
          Design System
        </p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-[100px] leading-none mb-6">
          Aurum
        </h1>
        <p className="font-display text-xl text-stone-600 max-w-2xl mx-auto">
          A luxury real estate aesthetic defined by warm stones, deep rich
          browns, and striking gold accents.
        </p>
      </header>

      {/* Colors Section */}
      <section className="mb-32 max-w-6xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl border-b border-stone-300 pb-4 mb-12 flex items-center justify-between">
          <span>Color Palette</span>
          <span className="font-sans text-sm tracking-widest text-stone-500 uppercase">
            01
          </span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {colors.map((color, index) => (
            <div key={index} className="group relative">
              <div
                className={`w-full aspect-square rounded-2xl shadow-sm transition-transform duration-500 ease-out group-hover:scale-105 group-hover:shadow-xl flex flex-col justify-end p-4 ${color.class} ${color.textClass}`}
              >
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-sans font-semibold text-sm">
                    {color.name}
                  </p>
                  <p className="font-mono text-xs opacity-80">{color.hex}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Typography Section */}
      <section className="mb-32 max-w-6xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl border-b border-stone-300 pb-4 mb-12 flex items-center justify-between">
          <span>Typography</span>
          <span className="font-sans text-sm tracking-widest text-stone-500 uppercase">
            02
          </span>
        </h2>

        <div className="space-y-20">
          {/* Serif */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
            <div className="md:col-span-1">
              <h3 className="font-sans text-stone-500 uppercase tracking-widest text-xs mb-2">
                Display Serif
              </h3>
              <p className="font-serif text-2xl">Cinzel</p>
            </div>
            <div className="md:col-span-3 space-y-6">
              <p className="font-serif text-6xl md:text-8xl truncate">
                Aa Ee Rr
              </p>
              <p className="font-serif text-2xl md:text-4xl leading-tight">
                House and Land | 2026
              </p>
              <p className="font-serif text-xl md:text-2xl text-stone-600">
                The epitome of elegant living in Weiti Bay, Auckland.
              </p>
            </div>
          </div>

          {/* Display */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
            <div className="md:col-span-1">
              <h3 className="font-sans text-stone-500 uppercase tracking-widest text-xs mb-2">
                Primary Display
              </h3>
              <p className="font-display text-2xl">Faculty Glyphic</p>
            </div>
            <div className="md:col-span-3 space-y-6">
              <p className="font-display text-5xl md:text-7xl truncate">
                Gg Qq Ww
              </p>
              <p className="font-display text-2xl md:text-4xl leading-tight">
                97 Ahumoana Drive, Weiti Bay
              </p>
              <p className="font-display text-lg text-stone-600">
                Exceptional design meeting timeless architecture.
              </p>
            </div>
          </div>

          {/* Sans */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
            <div className="md:col-span-1">
              <h3 className="font-sans text-stone-500 uppercase tracking-widest text-xs mb-2">
                Body Sans
              </h3>
              <p className="font-sans text-2xl font-light">Mona Sans</p>
            </div>
            <div className="md:col-span-3 space-y-6">
              <p className="font-sans text-4xl md:text-6xl font-light truncate">
                Aa Bb Cc Dd
              </p>
              <p className="font-sans text-xl md:text-2xl font-light leading-relaxed">
                A seamless blend of contemporary design and natural
                surroundings. Experience unparalleled tranquility with
                state-of-the-art finishes.
              </p>
              <div className="flex gap-4">
                <span className="font-sans font-light">Light 300</span>
                <span className="font-sans font-normal">Regular 400</span>
                <span className="font-sans font-semibold">Semi 600</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Components Section */}
      <section className="mb-20 max-w-6xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl border-b border-stone-300 pb-4 mb-12 flex items-center justify-between">
          <span>UI Components</span>
          <span className="font-sans text-sm tracking-widest text-stone-500 uppercase">
            03
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Buttons */}
          <div className="space-y-8 bg-stone-200/50 p-10 rounded-3xl border border-stone-200">
            <h3 className="font-sans text-stone-600 uppercase tracking-widest text-xs mb-6">
              Interactive Elements
            </h3>

            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <Button className="h-auto px-8 py-4 bg-brown-900 text-white font-sans text-sm tracking-widest uppercase hover:bg-gold-600 transition-colors duration-300 flex items-center gap-3 group rounded-none">
                Explore Finishes
                <span className="block transform transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Button>

              <Button className="h-auto px-8 py-4 border border-brown-900 text-brown-900 font-sans text-sm tracking-widest uppercase hover:bg-brown-900 hover:text-white transition-all duration-300 bg-transparent rounded-none">
                View Brochure
              </Button>
            </div>

            <div className="pt-4">
              <div className="inline-flex items-center gap-4 cursor-pointer group">
                <div className="w-12 h-12 rounded-full border border-gold-500 flex items-center justify-center text-gold-500 group-hover:bg-gold-500 group-hover:text-white transition-all duration-500">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <span className="font-serif text-lg group-hover:text-gold-600 transition-colors">
                  Play Animation
                </span>
              </div>
            </div>

            {/* Glassmorphism Variants */}
            <div className="pt-4 border-t border-stone-300/50 mt-4">
              <h4 className="font-sans text-stone-600 uppercase tracking-widest text-xs mb-6 mt-4">
                Glassmorphism Variants
              </h4>
              <div className="p-10 rounded-2xl bg-brown-900 relative overflow-hidden flex flex-col sm:flex-row gap-6 items-center justify-start shadow-inner">
                {/* Background shapes to demonstrate the blur effect */}
                <div className="absolute top-0 right-10 w-40 h-40 bg-gold-500 rounded-full blur-3xl opacity-60"></div>
                <div className="absolute bottom-10 left-10 w-32 h-32 bg-stone-300 rounded-full blur-2xl opacity-40"></div>

                <Button
                  variant="glass-rectangle"
                  className="relative z-10 px-8 py-6"
                >
                  View Details
                </Button>

                <Button
                  variant="glass-circle"
                  className="relative z-10 w-14 h-14"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </Button>
              </div>
            </div>
          </div>

          {/* Cards */}
          <div className="bg-brown-900 text-stone-200 p-10 rounded-3xl relative overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 bg-gold-600 opacity-0 group-hover:opacity-10 transition-opacity duration-700"></div>
            <h3 className="font-sans text-gold-500 uppercase tracking-widest text-xs mb-6">
              Project Card
            </h3>

            <div className="space-y-4 relative z-10">
              <div className="font-sans text-sm tracking-widest text-stone-400">
                01
              </div>
              <h4 className="font-serif text-3xl text-white">The Brief</h4>
              <p className="font-sans font-light text-stone-400 leading-relaxed max-w-sm mt-4">
                Redefining the standard of coastal living with uncompromising
                quality and spectacular vistas.
              </p>
              <div className="mt-8 inline-block border-b border-gold-500 pb-1 text-gold-500 font-sans text-sm uppercase tracking-wider group-hover:pr-4 transition-all duration-300">
                Read More
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto py-12 border-t border-stone-300 mt-20 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="font-serif text-2xl">Aurum</div>
        <div className="font-sans font-light text-sm text-stone-500">
          Generated from Figma Design System
        </div>
      </footer>
    </div>
  )
}
