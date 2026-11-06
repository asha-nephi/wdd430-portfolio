import type { Profile, SkillGroup } from "@/types";

export const profile: Profile = {
  name: "Nephi Asha",
  role: "Backend Engineer",
  headline: "I build the systems behind the interface.",
  intro:
    "Backend engineer working in Node.js, TypeScript and AWS. I care about system design, distributed systems and business-logic-heavy services, and I learn best by building the hard parts from scratch.",
  email: "nephiasha2017@gmail.com",
  employer: "eAssist Dental Solutions",
  focusAreas: [
    {
      title: "Distributed systems",
      description:
        "Leader election, work queues, leases, idempotency and failure recovery that keep working when nodes do not.",
    },
    {
      title: "APIs and services",
      description:
        "Typed, well-documented REST services and event-driven backends with clear boundaries and observability built in.",
    },
    {
      title: "Data and search",
      description:
        "Relational modelling, caching, and information retrieval, from inverted indexes to multi-tenant schemas.",
    },
  ],
  socials: [
    { label: "GitHub", href: "https://github.com/asha-nephi" },
    { label: "Email", href: "mailto:nephiasha2017@gmail.com" },
  ],
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    skills: ["TypeScript", "JavaScript", "Java", "Python", "SQL"],
  },
  {
    label: "Backend",
    skills: ["Node.js", "Fastify", "Express", "Spring Boot", "REST", "WebSockets"],
  },
  {
    label: "Data and messaging",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Kafka", "RabbitMQ"],
  },
  {
    label: "Infrastructure",
    skills: ["AWS", "Docker", "Vercel", "Prometheus"],
  },
  {
    label: "Frontend",
    skills: ["Next.js", "React", "Tailwind CSS"],
  },
];
