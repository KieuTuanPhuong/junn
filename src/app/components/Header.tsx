import { TransitionLink } from "./TransitionLink";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-16 py-4 fixed top-0 w-full z-50 bg-stone-200 border-b border-stone-400">
      <div className="flex gap-14 uppercase tracking-widest font-mona text-xs text-b1! text-[#876E3D]">
        <TransitionLink
          href="#"
          className="hover:opacity-70 transition-opacity"
        >
          The brief
        </TransitionLink>
        <TransitionLink
          href="#"
          className="hover:opacity-70 transition-opacity"
        >
          Renders
        </TransitionLink>
        <TransitionLink
          href="#"
          className="hover:opacity-70 transition-opacity"
        >
          Brochure
        </TransitionLink>
      </div>
      <div className="text-h1 font-medium! text-black">AURUM</div>
      <div className="flex gap-14 uppercase tracking-widest font-mona text-xs text-b1! text-[#876E3D]">
        <TransitionLink
          href="#"
          className="hover:opacity-70 transition-opacity"
        >
          Ezplore | Finished
        </TransitionLink>
        <TransitionLink
          href="#"
          className="hover:opacity-70 transition-opacity"
        >
          Animation
        </TransitionLink>
      </div>
    </header>
  );
}
