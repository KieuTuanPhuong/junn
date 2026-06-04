import { TransitionLink } from "./TransitionLink";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-12 py-8 fixed top-0 w-full z-50 mix-blend-difference text-stone-200">
      <div className="flex gap-12 font-sans uppercase tracking-widest text-sm">
        <TransitionLink href="/home" className="hover:opacity-70 transition-opacity">
          Explore | Finishes
        </TransitionLink>
        <TransitionLink href="/demo" className="hover:opacity-70 transition-opacity">
          Design System
        </TransitionLink>
      </div>
      <TransitionLink href="/" className="font-serif text-3xl tracking-widest">
        AURUM
      </TransitionLink>
    </header>
  );
}
