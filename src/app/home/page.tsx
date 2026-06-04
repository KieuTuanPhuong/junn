import Image from "next/image";
import Header from "../components/Header";

export default function HomeContent() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow pt-28">
        {/* Numbered Content Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 h-[80vh] w-full bg-background">
          {/* 01 The Brief */}
          <div className="relative group overflow-hidden border-r border-stone-400/20 last:border-r-0 cursor-pointer">
             <Image src="/images/project-intro-video.png" alt="The Brief" fill className="object-cover opacity-0 group-hover:opacity-100 transition-all duration-700 scale-105 group-hover:scale-100" />
             <div className="absolute inset-0 p-8 flex flex-col justify-between text-foreground mix-blend-difference group-hover:text-stone-200 transition-colors duration-500 pointer-events-none z-10">
                <span className="text-2xl font-serif">01</span>
                <span className="text-lg font-sans uppercase tracking-widest">The Brief</span>
             </div>
             <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          </div>

          {/* 02 Render */}
          <div className="relative group overflow-hidden border-r border-stone-400/20 last:border-r-0 cursor-pointer">
             <Image src="/images/luxury-villa-exterior.png" alt="Render" fill className="object-cover opacity-0 group-hover:opacity-100 transition-all duration-700 scale-105 group-hover:scale-100" />
             <div className="absolute inset-0 p-8 flex flex-col justify-between text-foreground mix-blend-difference group-hover:text-stone-200 transition-colors duration-500 pointer-events-none z-10">
                <span className="text-2xl font-serif">02</span>
                <span className="text-lg font-sans uppercase tracking-widest">Render</span>
             </div>
             <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          </div>

          {/* 03 Explore | Finishes */}
          <div className="relative group overflow-hidden border-r border-stone-400/20 last:border-r-0 cursor-pointer">
             <Image src="/images/kitchen-counter-decor.png" alt="Explore Finishes" fill className="object-cover opacity-0 group-hover:opacity-100 transition-all duration-700 scale-105 group-hover:scale-100" />
             <div className="absolute inset-0 p-8 flex flex-col justify-between text-foreground mix-blend-difference group-hover:text-stone-200 transition-colors duration-500 pointer-events-none z-10">
                <span className="text-2xl font-serif">03</span>
                <span className="text-lg font-sans uppercase tracking-widest">Explore | Finishes</span>
             </div>
             <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          </div>

          {/* 04 Animation */}
          <div className="relative group overflow-hidden border-r border-stone-400/20 last:border-r-0 cursor-pointer">
             <Image src="/images/coastal-neighborhood-aerial.png" alt="Animation" fill className="object-cover opacity-0 group-hover:opacity-100 transition-all duration-700 scale-105 group-hover:scale-100" />
             <div className="absolute inset-0 p-8 flex flex-col justify-between text-foreground mix-blend-difference group-hover:text-stone-200 transition-colors duration-500 pointer-events-none z-10">
                <span className="text-2xl font-serif">04</span>
                <span className="text-lg font-sans uppercase tracking-widest">Animation</span>
             </div>
             <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          </div>

          {/* 05 Brochure */}
          <div className="relative group overflow-hidden border-r border-stone-400/20 last:border-r-0 cursor-pointer">
             <Image src="/images/aurum-brand-book.png" alt="Brochure" fill className="object-cover opacity-0 group-hover:opacity-100 transition-all duration-700 scale-105 group-hover:scale-100" />
             <div className="absolute inset-0 p-8 flex flex-col justify-between text-foreground mix-blend-difference group-hover:text-stone-200 transition-colors duration-500 pointer-events-none z-10">
                <span className="text-2xl font-serif">05</span>
                <span className="text-lg font-sans uppercase tracking-widest">Brochure</span>
             </div>
             <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-brown-900 text-stone-400 px-12 py-24 flex flex-col lg:flex-row justify-between gap-16 font-sans">

        {/* Left / Enquiries */}
        <div className="flex flex-col gap-12 max-w-md w-full">
           <div className="flex flex-col gap-4">
              <h3 className="text-gold-500 text-sm tracking-widest uppercase mb-2">Enquiries</h3>
              <div className="grid grid-cols-[30px_1fr] gap-x-4 gap-y-3 text-sm">
                 <div className="text-stone-600 col-span-2 text-xs uppercase tracking-widest mb-1">Sale</div>
                 <div className="col-span-2">
                    <p className="text-stone-200">Sotheby's International</p>
                    <p>Kelly Brown</p>
                 </div>

                 <div className="text-stone-600">M/</div>
                 <div>+64 9 21 471 661</div>

                 <div className="text-stone-600">E/</div>
                 <div>kelly.brown@northnzsir.com</div>
              </div>
           </div>

           <div className="flex flex-col gap-4">
              <div className="grid grid-cols-[30px_1fr] gap-x-4 gap-y-3 text-sm">
                 <div className="text-stone-600 col-span-2 text-xs uppercase tracking-widest mb-1">Developer</div>
                 <div className="col-span-2">
                    <p className="text-stone-200">Blue Sky Ltd</p>
                 </div>

                 <div className="text-stone-600">M/</div>
                 <div>+64 9 21 471 661</div>

                 <div className="text-stone-600">E/</div>
                 <div>kelly.brown@northnzsir.com</div>
              </div>
           </div>
        </div>

        {/* Center / Logo */}
        <div className="flex flex-col items-center justify-center gap-6 w-full lg:w-auto mt-12 lg:mt-0 order-last lg:order-none">
           <div className="font-serif text-5xl tracking-widest text-gold-500">AURUM</div>
           <div className="text-center text-xs tracking-widest uppercase flex flex-col gap-1">
              <p className="text-stone-200">Visual Communications</p>
              <p className="opacity-60">junnagency.com</p>
           </div>
        </div>

        {/* Right / Project Details */}
        <div className="flex flex-col gap-12 max-w-md w-full">
           <h3 className="text-gold-500 text-sm tracking-widest uppercase mb-2">Project Details</h3>

           <div className="flex flex-col gap-10 text-sm">
              <div className="grid grid-cols-[30px_1fr] gap-x-4 gap-y-3">
                 <div className="text-stone-600 col-span-2 text-xs uppercase tracking-widest mb-1">Developer</div>
                 <div className="col-span-2">
                    <p className="text-stone-200">Blue Sky Ltd</p>
                 </div>
                 <div className="text-stone-600">M/</div>
                 <div>+64 9 21 471 661</div>
                 <div className="text-stone-600">E/</div>
                 <div>kelly.brown@northnzsir.com</div>
              </div>

              <div className="grid grid-cols-[30px_1fr] gap-x-4 gap-y-3">
                 <div className="text-stone-600 col-span-2 text-xs uppercase tracking-widest mb-1">Interior Design</div>
                 <div className="col-span-2">
                    <p className="text-stone-200">OneIdea</p>
                 </div>
                 <div className="text-stone-600">M/</div>
                 <div>+64 9 21 471 661</div>
                 <div className="text-stone-600">E/</div>
                 <div>kelly.brown@northnzsir.com</div>
              </div>

              <div className="grid grid-cols-[30px_1fr] gap-x-4 gap-y-3">
                 <div className="text-stone-600 col-span-2 text-xs uppercase tracking-widest mb-1">Architect</div>
                 <div className="col-span-2">
                    <p className="text-stone-200">Alchemy</p>
                 </div>
                 <div className="text-stone-600">P/</div>
                 <div>+64 9 216 8118</div>
                 <div className="text-stone-600">E/</div>
                 <div>studio@alchemy.co.nz</div>
              </div>
           </div>
        </div>
      </footer>
    </div>
  );
}
