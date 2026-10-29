"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Github, ExternalLink, MoveUpRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section id="projects" className="section-space scroll-mt-20">
      <div className="container-width">
        <SectionHeading kicker="Selected work" title={<>Projects built with <span className="gradient-text">purpose.</span></>} description="Explore selected projects, the technologies I used, the challenges I worked through, and what I would improve next." />
        <div className="grid gap-5 lg:grid-cols-2">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.article key={project.slug} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .15 }} transition={{ duration: .5, delay: index * .08 }} className={`gradient-border group flex flex-col overflow-hidden rounded-3xl bg-[var(--surface)] ${index === 0 ? "lg:col-span-2 lg:grid lg:grid-cols-[.8fr_1.2fr]" : ""}`}>
                <Link href={`/projects/${project.slug}`} aria-label={`View ${project.name} project details`} className="relative flex min-h-[240px] items-center justify-center overflow-hidden bg-[#0b0711] p-8">
                  <div className="soft-glow absolute inset-0 opacity-90 transition duration-500 group-hover:scale-125" />
                  <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
                  <div className="relative grid h-24 w-24 place-items-center rounded-[1.7rem] border border-white/15 bg-white/[.04] text-[#e879f9] shadow-2xl shadow-purple-950/40 transition duration-500 group-hover:-translate-y-2 group-hover:rotate-3"><Icon size={42} strokeWidth={1.3} /></div>
                  <span className="absolute left-5 top-5 text-xs tracking-[.2em] text-white/50">{project.number} / SELECTED PROJECT</span>
                  <span className="absolute bottom-5 right-5 inline-flex items-center gap-2 text-xs font-medium text-white/75 group-hover:text-white">Explore project <MoveUpRight size={15} /></span>
                </Link>
                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[.15em] text-[#b026e8]">{project.label}</p>
                  <h3 className="mt-2 text-2xl font-semibold">{project.name}</h3>
                  <p className="mt-3 flex-1 text-sm leading-7 muted">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">{project.stack.map((item) => <span key={item} className="rounded-full border border-[var(--border)] px-3 py-1.5 text-xs muted">{item}</span>)}</div>
                  <div className="mt-7 flex flex-wrap items-center gap-3">
                    <Link href={`/projects/${project.slug}`} className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#9303C5] to-[#D946EF] px-4 py-2.5 text-xs font-semibold text-white transition hover:-translate-y-0.5">Project details <ArrowUpRight size={14} /></Link>
                    {project.live && <a href={project.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-4 py-2.5 text-xs font-semibold transition hover:border-[#9303C5] hover:text-[#b026e8]">Live demo <ExternalLink size={14} /></a>}
                    <a href={project.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-4 py-2.5 text-xs font-semibold transition hover:border-[#9303C5] hover:text-[#b026e8]"><Github size={14} /> Source code <ArrowUpRight size={13} /></a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
