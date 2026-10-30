"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  Github,
  Linkedin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

export function Contact() {
  // Replace these example values with your actual contact details later.
  const email = "mohosenatjahan@gmail.com";
  const phone = "+8801941379952";
  const whatsapp = "8801941379952";

  const contacts = [
    {
      label: "Email me",
      value: email,
      href: `mailto:${email}`,
      icon: Mail,
    },
    {
      label: "Phone",
      value: phone,
      href: `tel:${phone}`,
      icon: Phone,
    },
    {
      label: "WhatsApp",
      value: "Chat with me on WhatsApp",
      href: `https://wa.me/${whatsapp}`,
      icon: MessageCircle,
    },
  ];

  return (
    <section
      id="contact"
      className="section-space relative scroll-mt-20 overflow-hidden"
    >
      <div className="soft-glow pointer-events-none absolute inset-0 opacity-70" />

      <div className="container-width relative">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="gradient-border overflow-hidden rounded-[2rem] bg-[var(--surface)] p-7 sm:p-12 lg:p-16"
        >
          <div className="grid gap-10 lg:grid-cols-[1fr_.7fr] lg:items-end">
            <div>
              <SectionHeading
                kicker="Get in touch"
                title={
                  <>
                    Let&apos;s build something{" "}
                    <span className="gradient-text">meaningful.</span>
                  </>
                }
                description="Have a project idea, an opportunity, or simply want to connect? I’d be happy to hear from you."
              />

            <div className="flex flex-wrap items-center gap-3">
  {/* Say Hello Button */}
  <a
    href={`mailto:${email}`}
    className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#9303C5] to-[#D946EF] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#9303C5]/20 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#9303C5]/30"
  >
    	Let's Talk
    <ArrowUpRight
      size={17}
      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
    />
  </a>

  {/* GitHub */}
  <a
    href="https://github.com/mohosenat"
    target="_blank"
    rel="noreferrer"
    aria-label="GitHub"
    className="grid h-12 w-12 place-items-center rounded-full border border-[var(--border)] text-[var(--foreground)] transition duration-300 hover:-translate-y-1 hover:border-[#9303C5] hover:bg-[#9303C5]/10 hover:text-[#b026e8]"
  >
    <Github size={20} />
  </a>

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/in/mohosenatjahan/"
    target="_blank"
    rel="noreferrer"
    aria-label="LinkedIn"
    className="grid h-12 w-12 place-items-center rounded-full border border-[var(--border)] text-[var(--foreground)] transition duration-300 hover:-translate-y-1 hover:border-[#9303C5] hover:bg-[#9303C5]/10 hover:text-[#b026e8]"
  >
    <Linkedin size={20} />
  </a>
</div>
            </div>

            <div className="space-y-3">
              {contacts.map((contact) => {
                const Icon = contact.icon;

                return (
                  <a
                    key={contact.label}
                    href={contact.href}
                    target={
                      contact.label === "GitHub" ||
                      contact.label === "LinkedIn" ||
                      contact.label === "WhatsApp"
                        ? "_blank"
                        : undefined
                    }
                    rel={
                      contact.label === "GitHub" ||
                      contact.label === "LinkedIn" ||
                      contact.label === "WhatsApp"
                        ? "noreferrer"
                        : undefined
                    }
                    className="flex items-center gap-4 rounded-2xl border border-[var(--border)] p-4 transition hover:border-[#9303C5]"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[#9303C5]/20 to-[#F472B6]/10 text-[#b026e8]">
                      <Icon size={19} />
                    </span>

                    <span className="min-w-0">
                      <span className="block text-xs muted">
                        {contact.label}
                      </span>
                      <span className="mt-1 block break-all text-sm font-medium">
                        {contact.value}
                      </span>
                    </span>

                    <ArrowUpRight
                      className="ml-auto shrink-0 muted"
                      size={16}
                    />
                  </a>
                );
              })}

              <p className="px-1 pt-1 text-xs muted">
                I’m always happy to connect and discuss new opportunities.
              </p>
            </div>
          </div>
     
        </motion.div>

        {/* Send Me a Message Card */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="gradient-border mt-8 rounded-[2rem] bg-[var(--surface)] p-7 sm:p-12"
        >
          <div className="mx-auto max-w-3xl">
            <div className="mb-8 text-center">
              <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-[#b026e8]">
                Have a question?
              </span>

              <h3 className="text-2xl font-bold sm:text-3xl">
                Send Me a{" "}
                <span className="gradient-text">Message.</span>
              </h3>

              <p className="muted mx-auto mt-3 max-w-xl text-sm leading-7">
                Have a project idea or want to work together?
                I'd love to hear from you.
              </p>
            </div>

            <form
              action="https://formsubmit.co/mohosenatjahan@gmail.com"
              method="POST"
              className="space-y-5"
            >
              <input
                type="hidden"
                name="_subject"
                value="New message from your portfolio!"
              />

              <input
                type="hidden"
                name="_captcha"
                value="false"
              />

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="sender-name" className="mb-2 block text-sm font-medium">
                    Your Name
                  </label>
                  <input
                    id="sender-name"
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    required
                    className="w-full rounded-xl border border-[var(--border)] bg-transparent px-4 py-3.5 text-sm outline-none transition placeholder:text-[var(--muted)] focus:border-[#b026e8] focus:ring-2 focus:ring-[#9303C5]/10"
                  />
                </div>

                <div>
                  <label htmlFor="sender-email" className="mb-2 block text-sm font-medium">
                    Your Email
                  </label>
                  <input
                    id="sender-email"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                    className="w-full rounded-xl border border-[var(--border)] bg-transparent px-4 py-3.5 text-sm outline-none transition placeholder:text-[var(--muted)] focus:border-[#b026e8] focus:ring-2 focus:ring-[#9303C5]/10"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="sender-message" className="mb-2 block text-sm font-medium">
                  Your Message
                </label>
                <textarea
                  id="sender-message"
                  name="message"
                  rows={6}
                  placeholder="Write your message here..."
                  required
                  className="w-full resize-none rounded-xl border border-[var(--border)] bg-transparent px-4 py-3.5 text-sm outline-none transition placeholder:text-[var(--muted)] focus:border-[#b026e8] focus:ring-2 focus:ring-[#9303C5]/10"
                />
              </div>

              <div className="flex justify-center pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#9303C5] to-[#D946EF] px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#9303C5]/20 transition hover:-translate-y-1"
                >
                  Send Message
                  <Send size={17} />
                </button>
              </div>
            </form>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

