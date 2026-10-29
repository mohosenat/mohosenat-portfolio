import { Hero } from "@/components/hero";
import { Skills } from "@/components/skills";
import { About } from "@/components/about";
import { Projects } from "@/components/projects";
import { Education } from "@/components/education";
import { Contact } from "@/components/contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Skills />
      <About />
      <Projects />
      <Education />
      <Contact />
    </>
  );
}
