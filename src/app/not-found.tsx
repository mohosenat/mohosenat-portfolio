import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[82vh] items-center justify-center overflow-hidden px-6 py-24 text-center">
      <div className="soft-glow pointer-events-none absolute inset-0 opacity-80" />
      <div className="relative z-10 max-w-2xl">
        <p className="section-kicker justify-center">Lost in the digital space</p>
        <h1 className="gradient-text mt-5 text-[clamp(6rem,22vw,13rem)] font-black leading-none tracking-[-.09em]">404</h1>
        <h2 className="mt-5 text-2xl font-semibold sm:text-3xl">Oops! Page not found.</h2>
        <p className="mx-auto mt-4 max-w-md leading-7 muted">
          The page you are looking for may have moved, been removed, or never existed.
          Let’s get you back to somewhere useful.
        </p>
        <Link href="/" className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#9303C5] to-[#D946EF] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-purple-950/20 transition hover:-translate-y-0.5 hover:shadow-purple-500/25">
          <Home size={17} /> Back to home <ArrowLeft className="rotate-180" size={16} />
        </Link>
      </div>
    </section>
  );
}
