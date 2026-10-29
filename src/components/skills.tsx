"use client";

import { motion } from "framer-motion";
import { Code2, Layers3, Database, Palette, GitBranch, Bot } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

const skills = [
  { title: "Frontend", icon: Code2, items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js"] },
  { title: "Styling & UI", icon: Palette, items: ["Tailwind CSS", "Responsive Design", "Accessible UI"] },
  { title: "Backend & Data", icon: Database, items: ["Node.js", "MongoDB", "REST APIs"] },
  { title: "Tools & Workflow", icon: GitBranch, items: ["Git", "GitHub", "VS Code", "Vercel"] },
  { title: "App Architecture", icon: Layers3, items: ["Reusable Components", "App Router", "State Management"] },
  { title: "Currently Exploring", icon: Bot, items: ["AI Automation", "AI Agents", "Emerging AI Tools"] }
];

export function Skills() {
  return (
    <section id="skills" className="section-space relative scroll-mt-20">
      <div className="container-width">
        <SectionHeading kicker="What I work with" title="Skills & technologies" description="A growing toolkit for building responsive interfaces and useful web experiences. I keep learning, experimenting, and improving through hands-on projects." centered />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.article key={skill.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .45, delay: index * .06 }} className="gradient-border rounded-2xl bg-[var(--surface)] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-950/10">
                <div className="mb-5 grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-[#9303C5]/20 to-[#F472B6]/10 text-[#b026e8]"><Icon size={21} /></div>
                <h3 className="text-base font-semibold">{skill.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {skill.items.map((item) => <span key={item} className="rounded-full border border-[var(--border)] px-3 py-1.5 text-xs muted">{item}</span>)}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
