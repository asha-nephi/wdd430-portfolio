import { profile } from "@/data/profile";

const stack = ["Node.js", "TypeScript", "AWS", "PostgreSQL", "Redis"];

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="mx-auto max-w-5xl px-4 pb-16 pt-16 sm:px-6 sm:pt-24"
    >
      <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-sm text-muted">
        <span aria-hidden="true" className="h-2 w-2 rounded-full bg-accent" />
        {profile.role} at {profile.employer}
      </p>
      <h1
        id="hero-title"
        className="max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl"
      >
        {profile.headline}
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
        {profile.intro}
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="#projects"
          className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
        >
          View projects
        </a>
        <a
          href={`mailto:${profile.email}`}
          className="rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
        >
          Get in touch
        </a>
      </div>
      <ul
        aria-label="Core stack"
        className="mt-10 flex flex-wrap gap-2 text-sm text-muted"
      >
        {stack.map((item) => (
          <li
            key={item}
            className="rounded-md bg-accent-soft px-2.5 py-1 font-mono text-xs text-accent"
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
