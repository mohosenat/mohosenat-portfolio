import Link from "next/link";
import { ArrowUpRight, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-7">
      <div className="container-width flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <Link href="#home" className="text-sm font-semibold">Mohosenat <span className="gradient-text">Jahan</span></Link>
        <p className="text-xs muted">Designed with curiosity and <Heart className="mx-1 inline text-[#D946EF]" size={12} fill="currentColor" /> built with Next.js.</p>
        <a href="#home" className="inline-flex items-center gap-1 text-xs muted transition hover:text-[#b026e8]">Back to top <ArrowUpRight size={13} /></a>
      </div>
    </footer>
  );
}
