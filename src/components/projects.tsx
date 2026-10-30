
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  ExternalLink,
  Github,
} from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section
      id="projects"
      className="section-space scroll-mt-20"
    >
      <div className="container-width">
        <SectionHeading
          kicker="Selected work"
          title={
            <>
              Projects built with{" "}
              <span className="gradient-text">purpose.</span>
            </>
          }
          description="A selection of projects built through experimentation, problem-solving, and continuous learning."
           centered
        />

        {/* Project Cards */}
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.45,
                delay: (index % 2) * 0.08,
              }}
              className="group gradient-border flex min-w-0 flex-col overflow-hidden rounded-2xl bg-[var(--surface)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-950/10"
            >
              {/* Project Screenshot */}
              <Link
                href={`/projects/${project.slug}`}
                aria-label={`View ${project.name} details`}
                className="relative block aspect-[1.85/1] overflow-hidden border-b border-[var(--border)]"
              >
                <Image
                  src={project.image}
                  alt={`${project.name} website screenshot`}
                  fill
                  sizes="(max-width: 639px) 100vw, 50vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.035]"
                />

                {/* Browser Dots */}
                <div className="absolute left-4 top-4 z-10 flex gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-white/50" />
                  <span className="h-1.5 w-1.5 rounded-full bg-white/50" />
                  <span className="h-1.5 w-1.5 rounded-full bg-white/50" />
                </div>

                {/* Project Number */}
                <span className="absolute right-3 top-3 z-10 rounded-full border border-white/20 bg-black/50 px-2.5 py-1.5 text-[9px] font-medium tracking-wider text-white backdrop-blur-sm">
                  {project.number}
                </span>
              </Link>

              {/* Project Information */}
              <div className="flex flex-1 flex-col p-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#b026e8]">
                  {project.label}
                </p>

                <h3 className="mt-2 text-lg font-semibold tracking-tight sm:text-xl">
                  {project.name}
                </h3>

                <p className="muted mt-2 min-h-[48px] text-sm leading-6">
                  {project.description}
                </p>

                {/* Technology Stack */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-[var(--border)] bg-[var(--background)] px-2.5 py-1.5 text-[10px] font-medium transition-colors duration-200 hover:border-[#9303C5]/60 hover:text-[#b026e8]"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Footer Actions */}
                <div className="mt-auto mt-5 flex items-center justify-between gap-3 border-t border-[var(--border)] pt-4">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex min-w-0 items-center gap-1.5 text-xs font-semibold transition-colors hover:text-[#b026e8]"
                  >
                    <span>Project details</span>
                    <ArrowUpRight
                      size={15}
                      className="shrink-0 text-[#b026e8]"
                    />
                  </Link>

                  <div className="flex shrink-0 items-center gap-3">
                    {/* GitHub */}
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.name} source code on GitHub`}
                      title="View source code"
                      className="grid h-9 w-9 place-items-center rounded-full border border-[var(--border)] text-current transition-all hover:border-[#9303C5] hover:bg-[#9303C5]/10 hover:text-[#b026e8]"
                    >
                      <Github size={16} strokeWidth={1.7} />
                    </a>

                    {/* Live Demo */}
                    {project.live ? (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.name} live demo`}
                        title="View live demo"
                        className="grid h-9 w-9 place-items-center rounded-full border border-[var(--border)] text-current transition-all hover:border-[#9303C5] hover:bg-[#9303C5]/10 hover:text-[#b026e8]"
                      >
                        <ExternalLink size={16} strokeWidth={1.7} />
                      </a>
                    ) : (
                      <span
                        aria-label={`${project.name} has no live demo available`}
                        title="Live demo not available yet"
                        className="grid h-9 w-9 cursor-not-allowed place-items-center rounded-full border border-[var(--border)] text-current opacity-30"
                      >
                        <ExternalLink size={16} strokeWidth={1.7} />
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom Footer */}
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="muted text-sm">
            More experiments, more things to learn.
          </p>

          <Link
            href="/projects"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[var(--border)] px-5 py-3 text-sm font-semibold transition-all hover:border-[#9303C5] hover:text-[#b026e8] sm:w-auto"
          >
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}


