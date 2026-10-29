"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

export function Education() {
  return (
    <section id="education" className="section-space scroll-mt-20 bg-[var(--surface)]">
      <div className="container-width">
        <SectionHeading kicker="Learning & growth" title="Education and continuous learning" description="Building a strong foundation through formal education, guided learning, and hands-on practice." />
        <div className="grid gap-4 md:grid-cols-2">
          <motion.article initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="gradient-border rounded-2xl bg-[var(--background)] p-6 sm:p-8">
            <div className="flex gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[#9303C5]/20 to-[#F472B6]/10 text-[#b026e8]"><GraduationCap size={23} /></div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[.14em] text-[#b026e8]">Formal education</p>
                <h3 className="mt-2 text-lg font-semibold">Honours in English</h3>
                <p className="mt-2 text-sm leading-6 muted">Currently pursuing undergraduate studies. Add your university name and expected graduation year before publishing.</p>
              </div>
            </div>
          </motion.article>
          <motion.article initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: .08 }} className="gradient-border rounded-2xl bg-[var(--background)] p-6 sm:p-8">
            <div className="flex gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[#9303C5]/20 to-[#F472B6]/10 text-[#b026e8]"><BookOpen size={23} /></div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[.14em] text-[#b026e8]">Web development</p>
                <h3 className="mt-2 text-lg font-semibold">Self-directed & structured learning</h3>
                <p className="mt-2 text-sm leading-6 muted">Started by learning independently, then continued with structured courses and practical projects to strengthen development skills.</p>
              </div>
            </div>
          </motion.article>
        </div>
        <div className="mt-5 flex items-start gap-3 rounded-2xl border border-[var(--border)] p-5">
          <Sparkles className="mt-0.5 shrink-0 text-[#b026e8]" size={18} />
          <p className="text-sm leading-6 muted">Currently exploring AI Automation and AI Agents alongside ongoing web development practice.</p>
        </div>
      </div>
    </section>
  );
}
