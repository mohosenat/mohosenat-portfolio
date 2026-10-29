"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Github, Linkedin, MessageCircle } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

export function Contact() {
  return (
    <section id="contact" className="section-space relative scroll-mt-20 overflow-hidden">
      <div className="soft-glow pointer-events-none absolute inset-0 opacity-70" />
      <div className="container-width relative">
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="gradient-border overflow-hidden rounded-[2rem] bg-[var(--surface)] p-7 sm:p-12 lg:p-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_.7fr] lg:items-end">
            <div>
              <SectionHeading kicker="Get in touch" title={<>Let&apos;s build something <span className="gradient-text">meaningful.</span></>} description="Have a project idea, an opportunity, or simply want to connect? I’d be happy to hear from you." />
              <a href="mailto:mohosenatjahan@gmail.com" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#9303C5] to-[#D946EF] px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5">
                Say hello <ArrowUpRight size={17} />
              </a>
            </div>
            <div className="space-y-3">
              <a href="mailto:mohosenatjahan@gmail.com" className="flex items-center gap-4 rounded-2xl border border-[var(--border)] p-4 transition hover:border-[#9303C5]">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-[#9303C5]/20 to-[#F472B6]/10 text-[#b026e8]"><Mail size={19} /></span>
                <span className="min-w-0"><span className="block text-xs muted">Email me</span><span className="mt-1 block break-all text-sm font-medium">mohosenatjahan@gmail.com</span></span>
                <ArrowUpRight className="ml-auto shrink-0 muted" size={16} />
              </a>
              <a href="https://github.com/mohosenat" target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-2xl border border-[var(--border)] p-4 transition hover:border-[#9303C5]">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-[#9303C5]/20 to-[#F472B6]/10 text-[#b026e8]"><Github size={19} /></span>
                <span><span className="block text-xs muted">GitHub</span><span className="mt-1 block text-sm font-medium">github.com/mohosenat</span></span>
                <ArrowUpRight className="ml-auto shrink-0 muted" size={16} />
              </a>
              <a href="https://www.linkedin.com/in/mohosenatjahan/" target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-2xl border border-[var(--border)] p-4 transition hover:border-[#9303C5]">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-[#9303C5]/20 to-[#F472B6]/10 text-[#b026e8]"><Linkedin size={19} /></span>
                <span><span className="block text-xs muted">LinkedIn</span><span className="mt-1 block text-sm font-medium">linkedin.com/in/mohosenatjahan</span></span>
                <ArrowUpRight className="ml-auto shrink-0 muted" size={16} />
              </a>
              <p className="flex items-center gap-2 px-1 pt-1 text-xs muted"><MessageCircle size={14} /> Phone and WhatsApp can be added when you share the number you want public.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
