import Link from "next/link";
import { ArrowUpRight, Github, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-6">
      <div className="container-width flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:gap-4 sm:text-left">
        {/* Logo & Name */}
        <Link
          href="#home"
          aria-label="Mohosenat Jahan - Back to home"
          className="group inline-flex items-center gap-2 text-sm font-semibold"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#9303C5]/30 bg-[#9303C5]/10 text-xs font-bold text-[#D946EF] transition-colors duration-300 group-hover:border-[#b026e8]/60 group-hover:bg-[#9303C5]/20">
            M<span className="text-[#b026e8]">J</span>
          </span>

          <span>
            Mohosenat <span className="gradient-text">Jahan</span>
          </span>
        </Link>

        {/* Copyright */}
        <p className="text-xs leading-5 muted">
          © {new Date().getFullYear()} Mohosenat Jahan. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/mohosenat"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] text-[var(--foreground)] transition-all duration-300 hover:-translate-y-1 hover:border-[#b026e8]/60 hover:bg-[#9303C5]/10 hover:text-[#D946EF]"
          >
            <Github size={17} />
          </a>

          <a
            href="https://linkedin.com/in/mohosenatjahan/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] text-[var(--foreground)] transition-all duration-300 hover:-translate-y-1 hover:border-[#b026e8]/60 hover:bg-[#9303C5]/10 hover:text-[#D946EF]"
          >
            <Linkedin size={17} />
          </a>

          {/* Back to top */}
          <a
            href="#home"
            aria-label="Back to top"
            title="Back to top"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] text-[var(--foreground)] transition-all duration-300 hover:-translate-y-1 hover:border-[#b026e8]/60 hover:bg-[#9303C5]/10 hover:text-[#D946EF]"
          >
            <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </footer>
  );
}