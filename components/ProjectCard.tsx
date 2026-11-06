interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  sourceUrl?: string;
  highlights?: string[];
  category?: string;
}

const linkClassName =
  "font-semibold text-accent underline-offset-4 hover:underline";

export default function ProjectCard({
  title,
  description,
  technologies,
  link,
  sourceUrl,
  highlights = [],
  category,
}: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-border bg-surface p-6 transition-all hover:-translate-y-0.5 hover:border-accent hover:shadow-lg">
      {category && (
        <p className="text-xs font-semibold uppercase tracking-widest text-accent">
          {category}
        </p>
      )}
      <h3 className="mt-2 text-xl font-bold tracking-tight">{title}</h3>
      <p className="mt-3 leading-relaxed text-muted">{description}</p>
      {highlights.length > 0 && (
        <ul className="mt-4 space-y-2 text-sm">
          {highlights.map((highlight) => (
            <li key={highlight} className="flex gap-2">
              <span aria-hidden="true" className="mt-0.5 text-accent">
                &rarr;
              </span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      )}
      <ul
        aria-label={`${title} technologies`}
        className="mt-5 flex flex-wrap gap-2"
      >
        {technologies.map((technology) => (
          <li
            key={technology}
            className="rounded-md bg-accent-soft px-2 py-1 font-mono text-xs text-accent"
          >
            {technology}
          </li>
        ))}
      </ul>
      {(link || sourceUrl) && (
        <div className="mt-auto flex gap-5 pt-6 text-sm">
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${title}`}
              className={linkClassName}
            >
              View project <span aria-hidden="true">&#8599;</span>
            </a>
          )}
          {sourceUrl && (
            <a
              href={sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title} source code on GitHub`}
              className={linkClassName}
            >
              Source <span aria-hidden="true">&#8599;</span>
            </a>
          )}
        </div>
      )}
    </article>
  );
}
