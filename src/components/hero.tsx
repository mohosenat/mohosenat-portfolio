"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, ArrowDownToLine, ArrowUpRight, Github, Linkedin, Mail, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-[760px] scroll-mt-20 items-center overflow-hidden pb-16 pt-32 sm:min-h-[820px]">
      <div className="grid-pattern pointer-events-none absolute inset-x-0 top-0 h-[620px] opacity-50" />
      <div className="soft-glow pointer-events-none absolute -right-32 top-16 h-[580px] w-[580px] opacity-80" />
      <div className="soft-glow pointer-events-none absolute -left-48 bottom-0 h-[340px] w-[440px] opacity-40" />

      <div className="container-width relative z-10 grid items-center gap-14 lg:grid-cols-[1.15fr_.85fr]">
        <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, ease: "easeOut" }}>

          <p className="mb-3 text-sm font-medium tracking-wide muted">Hello, I&apos;m</p>
          <h1 className="max-w-3xl text-5xl font-bold leading-[1.06] tracking-[-.055em] sm:text-6xl xl:text-7xl">
            <span className="gradient-text"> Mohosenat Jahan</span>
          </h1>
          <h2 className="mt-5 text-xl font-medium sm:text-2xl">Full-Stack Web Developer</h2>
          <p className="mt-5 max-w-xl text-base leading-8 muted sm:text-lg">
            Building modern, responsive web applications with React, Next.js, TypeScript, and MongoDB.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="#projects" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#9303C5] to-[#D946EF] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-purple-950/25 transition hover:-translate-y-0.5 hover:shadow-purple-500/20">
              Explore my work <ArrowUpRight size={17} />
            </Link>
            <a
  href="/resume.pdf"
  download="Mohosenat-Jahan-Resume.pdf"
  className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-6 py-3.5 text-sm font-semibold transition hover:border-[#9303C5] hover:text-[#b026e8]"
>
  Download Resume <ArrowDownToLine size={16} />
</a>
          </div>
          <div className="mt-9 flex items-center gap-3">
            <span className="text-xs muted">FIND ME ON</span>
            <span className="ml-1 h-px w-5 bg-[var(--border)]" />
            <a aria-label="GitHub profile" href="https://github.com/mohosenat" target="_blank" rel="noreferrer" className="grid h-11 w-11 place-items-center rounded-full border border-[var(--border)] transition hover:border-[#9303C5] hover:text-[#b026e8]"><Github size={18} /></a>
            <a aria-label="LinkedIn profile" href="https://www.linkedin.com/in/mohosenatjahan/" target="_blank" rel="noreferrer" className="grid h-11 w-11 place-items-center rounded-full border border-[var(--border)] transition hover:border-[#9303C5] hover:text-[#b026e8]"><Linkedin size={18} /></a>
            <a aria-label="Send email" href="mailto:mohosenatjahan@gmail.com" className="grid h-11 w-11 place-items-center rounded-full border border-[var(--border)] transition hover:border-[#9303C5] hover:text-[#b026e8]"><Mail size={18} /></a>
          </div>
          <a href="#skills" className="mt-12 inline-flex items-center gap-2 text-xs muted transition hover:text-[#b026e8]">
            <ArrowDown size={15} /> Scroll to explore
          </a>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: .96, y: 16 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: .8, delay: .12, ease: "easeOut" }} className="relative mx-auto w-full max-w-[420px]">
          <div className="soft-glow absolute -inset-8 opacity-90" />
          <div className="gradient-border relative overflow-hidden rounded-[2rem] bg-[var(--surface)] p-2 shadow-2xl shadow-purple-950/20">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.55rem] bg-[var(--surface-strong)]">
              <Image src="/images/profile.png" alt="Portrait of Mohosenat Jahan" fill priority sizes="(max-width: 1024px) 80vw, 420px" className="object-cover object-center" />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/55 to-transparent" />
              {/* <div className="absolute bottom-5 left-5 right-5 text-white">
                <p className="text-lg font-semibold gradient-text">Mohosenat Jahan</p>
                <p className="mt-1 text-sm text-white/75">Developer · Creative thinker · Lifelong learner</p>
              </div> */}
            </div>
          </div>
          <div className="absolute -bottom-5 -left-6 hidden rounded-2xl border border-[var(--border)] bg-[var(--background)]/90 p-4 shadow-xl backdrop-blur sm:block">
            <p className="text-xs muted">Mohosenat Jahan </p>
            <p className="mt-1 text-sm font-semibold"><span className="gradient-text">Developer · Creative thinker</span></p>
          </div>
          {/* <div className="absolute -bottom-5 -left-6 hidden rounded-2xl border border-[var(--border)] bg-[var(--background)]/90 p-4 shadow-xl backdrop-blur sm:block">
            <p className="text-xs muted">Currently exploring</p>
            <p className="mt-1 text-sm font-semibold"><span className="gradient-text">AI Automation & Agents</span></p>
          </div> */}
          <div className="absolute -right-4 top-12 hidden rounded-2xl border border-[var(--border)] bg-[var(--background)]/90 p-3 shadow-xl backdrop-blur sm:block">
            <Sparkles className="text-[#b026e8]" size={20} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
