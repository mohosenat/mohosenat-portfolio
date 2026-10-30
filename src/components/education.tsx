
"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  BookOpen,
  CalendarDays,
  School,
  Code2,
  Sparkles,
} from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

const academicEducation = [
  {
    institute: "Lalmatia Govt. Mohila College",
    qualification: "BA (Honours) in English",
    duration: "2025 – Ongoing",
    icon: GraduationCap,
    current: true,
  },
  {
    institute: "Motijheel Model School & College",
    qualification: "Higher Secondary Certificate (HSC) – Science",
    icon: School,
  },
  {
    institute: "A.K. School and College",
    qualification: "Secondary School Certificate (SSC) – Science",
    icon: School,
  },
];

const courses = [
  {
    institute: "Programming Hero",
    course: "AI-Driven Full Stack Web Engineer",
    duration: "June 2026 – Ongoing",
    icon: Code2,
    current: true,
  },
  {
    institute: "Hablu Programmer",
    course: "AI Agent Mastery",
    icon: Code2,
  },
];

export function Education() {
  return (
    <section
      id="education"
      className="section-space scroll-mt-20 bg-[var(--surface)]"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-0 top-20 h-72 w-72 rounded-full bg-[#9303C5]/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#D946EF]/10 blur-[120px]" />

      <div className="container-width relative z-10">
        <SectionHeading
          kicker="Learning & Growth"
          title="Education and Learning Journey"
          description="My academic background and continuous learning journey in technology."
        />

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">

          {/* Academic Education */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="gradient-border rounded-2xl p-[1px]"
          >
            <div className="h-full rounded-2xl bg-[var(--background)] p-5 sm:p-7">

              {/* Card Heading */}
              <div className="mb-7 flex items-center gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[#9303C5]/20 to-[#F472B6]/10 text-[#b026e8]">
                  <GraduationCap size={25} />
                </div>

                <div>
                  <h3 className="text-xl font-bold">
                    Academic Education
                  </h3>
                  <p className="muted mt-1 text-sm">
                    My educational qualifications
                  </p>
                </div>
              </div>

              {/* Education List */}
              <div className="space-y-4">
                {academicEducation.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.institute}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.1,
                      }}
                      className="group rounded-xl border border-[var(--border)] p-4 transition-all duration-300 hover:border-[#b026e8]/50 hover:bg-[#9303C5]/[0.04] sm:p-5"
                    >
                      <div className="flex items-start gap-4">
                        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[#9303C5]/10 text-[#b026e8] transition-colors group-hover:bg-[#9303C5]/20">
                          <Icon size={20} />
                        </div>

                        <div className="min-w-0 flex-1">
                          <h4 className="text-base font-semibold leading-6 sm:text-lg">
                            {item.institute}
                          </h4>

                          <p className="muted mt-2 text-sm leading-6">
                            {item.qualification}
                          </p>

                          {item.duration && (
                            <div className="mt-3 flex flex-wrap items-center gap-3">
                              <span className="flex items-center gap-1.5 text-xs font-medium text-[#b026e8]">
                                <CalendarDays size={14} />
                                {item.duration}
                              </span>

                              {item.current && (
                                <span className="rounded-full border border-green-500/20 bg-green-500/10 px-2.5 py-1 text-[11px] font-medium text-green-500">
                                  Currently Studying
                                </span>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.article>

          {/* Courses */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="gradient-border rounded-2xl p-[1px]"
          >
            <div className="h-full rounded-2xl bg-[var(--background)] p-5 sm:p-7">

              {/* Card Heading */}
              <div className="mb-7 flex items-center gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[#9303C5]/20 to-[#F472B6]/10 text-[#b026e8]">
                  <BookOpen size={25} />
                </div>

                <div>
                  <h3 className="text-xl font-bold">
                    Courses
                  </h3>
                  <p className="muted mt-1 text-sm">
                    My professional learning journey
                  </p>
                </div>
              </div>

              {/* Course List */}
              <div className="space-y-4">
                {courses.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.course}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.1,
                      }}
                      className="group rounded-xl border border-[var(--border)] p-4 transition-all duration-300 hover:border-[#b026e8]/50 hover:bg-[#9303C5]/[0.04] sm:p-5"
                    >
                      <div className="flex items-start gap-4">
                        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[#9303C5]/10 text-[#b026e8] transition-colors group-hover:bg-[#9303C5]/20">
                          <Icon size={20} />
                        </div>

                        <div className="min-w-0 flex-1">
                          <h4 className="text-base font-semibold leading-6 sm:text-lg">
                            {item.institute}
                          </h4>

                          <p className="muted mt-2 text-sm leading-6">
                            {item.course}
                          </p>

                          {(item.duration || item.current) && (
  <div className="mt-3 flex flex-wrap items-center gap-3">
    {item.duration && (
      <span className="flex items-center gap-1.5 text-xs font-medium text-[#b026e8]">
        <CalendarDays size={14} />
        {item.duration}
      </span>
    )}

    {item.current && (
      <span className="rounded-full border border-green-500/20 bg-green-500/10 px-2.5 py-1 text-[11px] font-medium text-green-500">
        Currently Learning
      </span>
    )}
  </div>
)}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Learning Note */}
              <div className="mt-6 rounded-xl border border-[#9303C5]/20 bg-[#9303C5]/[0.06] p-5">
                <div className="flex items-center gap-2 text-[#b026e8]">
                  <Sparkles size={17} />
                  <span className="text-sm font-semibold">
                    Always Learning
                  </span>
                </div>

                <p className="muted mt-2 text-sm leading-6">
                  Continuously learning new technologies and
                  improving my skills to build modern web applications.
                </p>
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}

