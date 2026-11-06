import { profile } from "@/data/profile";

export default function ContactCta() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="mx-auto mt-24 max-w-5xl px-4 sm:px-6"
    >
      <div className="rounded-3xl border border-border bg-accent-soft px-6 py-12 text-center sm:px-12">
        <h2
          id="contact-title"
          className="text-3xl font-bold tracking-tight sm:text-4xl"
        >
          Let&apos;s build something reliable
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-lg text-muted">
          I&apos;m open to backend roles and interesting engineering
          conversations. The fastest way to reach me is by email.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
          >
            {profile.email}
          </a>
          <a
            href="https://github.com/asha-nephi"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
          >
            GitHub profile
          </a>
        </div>
      </div>
    </section>
  );
}
