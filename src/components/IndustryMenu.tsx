import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { INDUSTRIES } from "@/pages/industries";

export default function IndustryMenu() {
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const outside = (event: PointerEvent) => {
      if (!root.current?.contains(event.target as Node)) setOpen(false);
    };
    const keyboard = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", outside);
    document.addEventListener("keydown", keyboard);
    return () => {
      document.removeEventListener("pointerdown", outside);
      document.removeEventListener("keydown", keyboard);
    };
  }, []);
  return (
    <div ref={root} className="relative">
      <button type="button" aria-expanded={open} aria-controls="industry-links" onClick={() => setOpen(value => !value)} className="inline-flex min-h-11 items-center gap-1 rounded-lg px-2 text-sm font-semibold text-gray-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
        Industries<ChevronDown aria-hidden="true" className="size-4" />
      </button>
      {open ? <nav id="industry-links" aria-label="Industries" className="absolute right-0 top-full z-[70] min-w-52 rounded-2xl border border-primary/30 bg-white p-2 shadow-xl">
        {INDUSTRIES.map(industry => <a key={industry.id} href={`/industries/${industry.id}`} className="block rounded-xl px-4 py-3 text-sm font-semibold text-gray-950 hover:bg-primary/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">{industry.label}</a>)}
      </nav> : null}
    </div>
  );
}
