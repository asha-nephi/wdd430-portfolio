import ContactCta from "@/components/ContactCta";
import Hero from "@/components/Hero";
import ProjectList from "@/components/ProjectList";
import SectionHeading from "@/components/SectionHeading";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <main>
      <Hero />
      <section
        id="projects"
        aria-labelledby="projects-title"
        className="mx-auto max-w-5xl px-4 sm:px-6"
      >
        <SectionHeading
          id="projects-title"
          eyebrow="Selected work"
          title="Projects"
          description="Backend systems built from first principles, plus full-stack apps shipped for real users."
        />
        <ProjectList projects={projects} />
      </section>
      <ContactCta />
    </main>
  );
}
