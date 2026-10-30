"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

const links = [
  { label: "Home", href: "/#home" },
  { label: "Skills", href: "/#skills" },
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Education", href: "/#education" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--border)] bg-[var(--header)] backdrop-blur-xl">
      <div className="container-width flex h-[76px] items-center justify-between gap-5">
        {/* Logo */}
        <Link
          href="/#home"
          onClick={closeMenu}
          className="group flex shrink-0 items-center gap-2.5"
        >
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-[#9303C5] to-[#F472B6] text-sm font-black text-white shadow-lg shadow-purple-900/20">
            MJ
          </span>

          <span className="text-sm font-semibold tracking-tight sm:text-base">
            mohosenat<span className="gradient-text">.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden items-center gap-6 lg:flex"
          aria-label="Main navigation"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13px] font-medium muted transition-colors duration-200 hover:text-[#b026e8]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex shrink-0 items-center gap-2">
          <ThemeToggle />

          <Link
            href="/#contact"
            className="hidden items-center gap-1.5 rounded-full bg-gradient-to-r from-[#9303C5] to-[#D946EF] px-4 py-2.5 text-xs font-semibold text-white transition hover:-translate-y-0.5 sm:inline-flex"
          >
            Let&apos;s talk
            <ArrowUpRight size={14} />
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setOpen((previous) => !previous)}
            className="grid h-10 w-10 place-items-center rounded-full border border-[var(--border)] transition hover:border-[#9303C5] hover:text-[#b026e8] lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <nav
          id="mobile-navigation"
          className="border-t border-[var(--border)] bg-[var(--background)] px-5 py-4 lg:hidden"
          aria-label="Mobile navigation"
        >
          <div className="container-width flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="rounded-xl px-3 py-3 text-sm muted transition-colors hover:bg-[var(--surface)] hover:text-[#b026e8]"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/#contact"
              onClick={closeMenu}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#9303C5] to-[#D946EF] px-4 py-3 text-sm font-semibold text-white"
            >
              Let&apos;s talk
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
