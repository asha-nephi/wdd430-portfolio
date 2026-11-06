interface SectionHeadingProps {
  id?: string;
  eyebrow: string;
  title: string;
  description?: string;
}

export default function SectionHeading({
  id,
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-8 max-w-2xl">
      <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">
        {eyebrow}
      </p>
      <h2 id={id} className="text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {description && <p className="mt-3 text-lg text-muted">{description}</p>}
    </div>
  );
}
