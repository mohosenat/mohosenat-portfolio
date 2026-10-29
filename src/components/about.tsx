"use client";

import { motion } from "framer-motion";
import { Palette, BookOpen, Bot, Heart } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

const interests = [
  { icon: Palette, title: "Art & creativity", text: "Sketching, painting, and exploring digital creativity." },
  { icon: BookOpen, title: "Reading", text: "Enjoying books and discovering fresh perspectives." },
  { icon: Bot, title: "AI exploration", text: "Currently learning about AI Automation and AI Agents." }
];

export function About() {
  return (
    <section id="about" className="section-space scroll-mt-20 bg-[var(--surface)]">
      <div className="container-width grid items-start gap-12 lg:grid-cols-[.8fr_1.2fr]">
        <div>
          <SectionHeading kicker="A little about me" title={<>Curiosity drives <span className="gradient-text">my journey.</span></>} description="A developer with a creative side and a habit of asking how things work." />
          <div className="gradient-border inline-flex items-center gap-3 rounded-2xl bg-[var(--background)] p-4">
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-[#9303C5]/20 to-[#F472B6]/20 text-[#b026e8]"><Heart size={20} /></div>
            <div><p className="text-sm font-semibold">Build with purpose</p><p className="mt-1 text-xs muted">Learn, create, and improve.</p></div>
          </div>
        </div>
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .55 }} className="space-y-5 text-[15px] leading-8 muted">
          <p className="text-lg leading-8" style={{ color: "var(--foreground)" }}>
            Hi, I&apos;m <span className="font-semibold">Mohosenat Jahan</span>, a Full-Stack Web Developer passionate about building modern, responsive, and user-friendly web applications.
          </p>
          <p>
            My programming journey began with self-directed learning and curiosity about how technology works. Through structured learning and hands-on projects, I&apos;ve been developing my skills in React, Next.js, TypeScript, and MongoDB—turning ideas into functional digital experiences.
          </p>
          <p>
            I enjoy building intuitive user interfaces, solving problems, and creating applications that balance thoughtful design with practical functionality. I&apos;m also exploring AI Automation and AI Agents to understand how AI can simplify workflows and create smarter solutions.
          </p>
          <p>
            Beyond programming, I enjoy sketching, painting, digital creativity, and reading books. These interests inspire me to think visually, stay curious, and approach challenges from different perspectives.
          </p>
          <div className="grid gap-3 pt-3 sm:grid-cols-3">
            {interests.map((item) => {
              const Icon = item.icon;
              return <div key={item.title} className="rounded-2xl border border-[var(--border)] bg-[var(--background)] p-4">
                <Icon className="mb-3 text-[#b026e8]" size={20} />
                <h3 className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>{item.title}</h3>
                <p className="mt-2 text-xs leading-5 muted">{item.text}</p>
              </div>;
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
