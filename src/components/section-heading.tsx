import type { ReactNode } from "react";

type SectionHeadingProps = { kicker: string; title: ReactNode; description?: string; centered?: boolean };

export function SectionHeading({ kicker, title, description, centered = false }: SectionHeadingProps) {
  return (
    <div className={`mb-12 max-w-2xl ${centered ? "mx-auto text-center" : ""}`}>
      <span className={`section-kicker ${centered ? "justify-center" : ""}`}>{kicker}</span>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">{title}</h2>
      {description && (<p className={`mt-4 max-w-xl leading-7 muted ${centered ? "mx-auto text-center" : ""}`}>{description}</p>)}
    </div>
  );
}
