import { profile } from "@/data/profile";

export default async function Footer() {
  "use cache";

  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-muted sm:flex-row sm:px-6">
        <p>
          &copy; {year} {profile.name}. All rights reserved.
        </p>
        <ul className="flex items-center gap-5">
          {profile.socials.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="transition-colors hover:text-foreground"
                {...(href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
