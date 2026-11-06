import type { Metadata } from "next";
import ContactCta from "@/components/ContactCta";
import SectionHeading from "@/components/SectionHeading";
import SkillGroups from "@/components/SkillGroups";
import { profile, skillGroups } from "@/data/profile";

export const metadata: Metadata = {
  title: "About",
  description: `About ${profile.name}: background, focus areas and technical skills.`,
};

export default function About() {
  return (
    <main>
      <section
        aria-labelledby="about-title"
        className="mx-auto max-w-5xl px-4 pt-16 sm:px-6 sm:pt-24"
      >
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">
          About
        </p>
        <h1
          id="about-title"
          className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl"
        >
          {profile.role} focused on systems that keep working under failure.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          {profile.intro} I currently work at {profile.employer}, and outside of
          work I build small, focused projects to understand how the tools I
          depend on actually work.
        </p>
      </section>

      <section
        aria-labelledby="focus-title"
        className="mx-auto mt-20 max-w-5xl px-4 sm:px-6"
      >
        <SectionHeading
          id="focus-title"
          eyebrow="What I do"
          title="Focus areas"
        />
        <ul className="grid gap-6 md:grid-cols-3">
          {profile.focusAreas.map(({ title, description }) => (
            <li
              key={title}
              className="rounded-2xl border border-border bg-surface p-6"
            >
              <h3 className="text-lg font-bold tracking-tight">{title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section
        aria-labelledby="skills-title"
        className="mx-auto mt-20 max-w-5xl px-4 sm:px-6"
      >
        <SectionHeading
          id="skills-title"
          eyebrow="Toolbox"
          title="Skills"
          description="The languages and tools I reach for most often."
        />
        <SkillGroups groups={skillGroups} />
      </section>

      <ContactCta />
    </main>
  );
}
