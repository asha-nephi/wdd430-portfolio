import type { SkillGroup } from "@/types";

interface SkillGroupsProps {
  groups: SkillGroup[];
}

export default function SkillGroups({ groups }: SkillGroupsProps) {
  return (
    <dl className="grid gap-6 sm:grid-cols-2">
      {groups.map(({ label, skills }) => (
        <div
          key={label}
          className="rounded-2xl border border-border bg-surface p-5"
        >
          <dt className="text-sm font-semibold uppercase tracking-widest text-accent">
            {label}
          </dt>
          <dd className="mt-3">
            <ul className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-md bg-accent-soft px-2.5 py-1 font-mono text-xs text-accent"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </dd>
        </div>
      ))}
    </dl>
  );
}
