import Link from "next/link";

interface ProjectHighlight {
  name: string;
  description: string;
  features: string[];
  status: string;
}

export interface DetailedProfileProps {
  role: string;
  stack: string[];
  summary: string;
  project: ProjectHighlight;
  closingNote: string;
  projectsHref?: string;
}

export default function DetailedProfile({
  role,
  stack,
  summary,
  project,
  closingNote,
  projectsHref = "/projects",
}: DetailedProfileProps) {
  return (
    <div className="mx-auto max-w-2xl px-6 py-16 text-gray-200">
      <p className="text-sm font-medium uppercase tracking-wide text-emerald-400">
        {role}
      </p>

      <h1 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
        {stack.join(" · ")}
      </h1>

      <p className="mt-8 text-base leading-relaxed text-gray-300">{summary}</p>

      <section className="mt-10 rounded-lg border border-gray-700 bg-gray-800/40 p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-emerald-400">
          Currently building
        </p>
        <h2 className="mt-1 text-xl font-semibold text-white">
          {project.name}
        </h2>
        <p className="mt-2 text-sm text-gray-400">{project.description}</p>

        <ul className="mt-4 space-y-2 text-sm text-gray-300">
          {project.features.map((feature) => (
            <li key={feature} className="flex gap-2">
              <span className="text-emerald-400">→</span>
              {feature}
            </li>
          ))}
        </ul>

        <p className="mt-4 text-xs italic text-gray-500">{project.status}</p>
      </section>

      <p className="mt-10 text-base leading-relaxed text-gray-300">
        {closingNote}
      </p>

      <div className="mt-10">
        <Link
          href={projectsHref}
          className="text-sm font-medium text-emerald-400 hover:text-emerald-300"
        >
          View my projects →
        </Link>
      </div>
    </div>
  );
}

// Answer to question:
// DetailedProfile.tsx: displays my backend engineer's detailed bio for the About page, including my role, tech stack, a summary, a highlighted current project (ChessForge) with its features and status, and a closing note, all passed in as typed props.

// Answer to Question asked:

// 1. The Purpose of app/layout.tsx: It defines the shared root layout (HTML/body structure, global styles, fonts, metadata, and any persistent UI like a nav bar or footer) that wraps every page in the App Router, so common markup doesn't have to be repeated on each page.
// 2. Why these are Server Components: They only render static/props-driven content — no state, effects, event handlers, or browser-only APIs. So there's no need to ship JS to the client or opt into "use client"; rendering them on the server keeps the client bundle smaller and lets Next.js render the HTML upfront.
