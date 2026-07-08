export default function Footer() {
  return (
    <footer className="bg-brand-4 relative flex flex-col items-center overflow-hidden font-mona mt-10">
      {/* Top Section */}
      <div className="container w-full mx-auto flex flex-col lg:flex-row gap-[120px] lg:gap-[120px] px-[78px] md:px-0 py-[100px]">
        {/* Enquiries */}
        <div className="flex-1 flex flex-col gap-10">
          <h2 className="font-serif text-3xl md:text-[32px] font-semibold uppercase text-brand-6">
            Enquiries
          </h2>

          <div className="flex flex-col sm:flex-row gap-6">
            {/* Sale */}
            <div className="flex flex-col">
              <div className="text-sh3 text-brand-5">Sale</div>
              <div className="font-serif text-lg font-semibold uppercase text-brand-6 whitespace-pre-line leading-snug">
                {"Sotheby's International\nKelly Brown"}
              </div>
              <div className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-b1 text-brand-5 mt-1">
                <div>M/</div>
                <div>+64 9 21 471 661</div>
                <div>E/</div>
                <div>kelly.brown@northnzsir.com</div>
              </div>
            </div>

            {/* Developer */}
            <div className="flex flex-col">
              <div className="text-sh3 text-brand-5">Developer</div>
              <div className="font-serif text-lg font-semibold uppercase text-brand-6 whitespace-pre-line leading-snug">
                {"Blue Sky Ltd\n\u00A0"}
              </div>
              <div className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-b1 text-brand-5 mt-1">
                <div>M/</div>
                <div>+64 9 21 471 661</div>
                <div>E/</div>
                <div>kelly.brown@northnzsir.com</div>
              </div>
            </div>
          </div>
        </div>

        {/* Project Details */}
        <div className="flex-1 flex flex-col gap-10">
          <h2 className="font-serif text-3xl md:text-[32px] font-semibold uppercase text-brand-6">
            Project Details
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 lg:gap-x-[120px] gap-y-10">
            {/* Developer */}
            <div className="flex flex-col">
              <div className="text-sh3 text-brand-5">Developer</div>
              <div className="font-serif text-lg font-semibold uppercase text-brand-6">
                Blue Sky Ltd
              </div>
              <div className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-b1 text-brand-5 mt-1">
                <div>M/</div>
                <div>+64 9 21 471 661</div>
                <div>E/</div>
                <div>kelly.brown@northnzsir.com</div>
              </div>
            </div>

            {/* Interior Design */}
            <div className="flex flex-col">
              <div className="text-sh3 text-brand-5">Interior Design</div>
              <div className="font-serif text-lg font-semibold uppercase text-brand-6">
                OneIdea
              </div>
              <div className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-b1 text-brand-5 mt-1">
                <div>M/</div>
                <div>+64 9 21 471 661</div>
                <div>E/</div>
                <div>kelly.brown@northnzsir.com</div>
              </div>
            </div>

            {/* Architect */}
            <div className="flex flex-col">
              <div className="text-sh3 text-brand-5">Architect</div>
              <div className="font-serif text-lg font-semibold uppercase text-brand-6">
                Alchemy
              </div>
              <div className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-b1 text-brand-5 mt-1">
                <div>P/</div>
                <div>+64 9 216 8118</div>
                <div>M/</div>
                <div>+64 22 677 5695</div>
                <div>E/</div>
                <div>sean.pinfold@alchemybespoke.co.nz</div>
              </div>
            </div>

            {/* Builder */}
            <div className="flex flex-col">
              <div className="text-sh3 text-brand-5">Builder</div>
              <div className="font-serif text-lg font-semibold uppercase text-brand-6">
                Lewis Build
              </div>
              <div className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-b1 text-brand-5 mt-1">
                <div>P/</div>
                <div>+64 9 888 0725</div>
                <div>M/</div>
                <div>+64 22 539 4725</div>
                <div>E/</div>
                <div>ben@lewisbuild.co.nz</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full border-b border-brand-3"></div>

      {/* Bottom Section */}
      <div className="w-full flex flex-col items-center gap-6 px-16 md:px-0 py-[100px] container mx-auto">
        {/* Addresses */}
        <div className="w-full flex flex-col items-center gap-1 text-white text-h3! text-center font-mona!">
          <div>97 Ahumoana Drive &nbsp;|&nbsp; Weiti Bay</div>
          <div>Okura Bush &nbsp;|&nbsp; Auckland &nbsp;|&nbsp; New Zealand</div>
        </div>

        {/* Vertical Line */}
        <div className="w-[2px] h-[100px] bg-brand-3 my-2"></div>

        <div className="w-full">
          {/* AURUM */}
          <div className="font-serif text-[20vw] xl:text-hero leading-[0.9] text-white text-center uppercase">
            AURUM
          </div>

          {/* Visual Comms */}
          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 text-white text-h3! font-mona! mt-2">
            <div className="text-center md:text-left w-full md:w-auto">
              Visual Communications
            </div>
            <div className="text-center md:text-right w-full md:w-auto">
              junnagency.com
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
