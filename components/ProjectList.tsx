import ProjectCard from "@/components/ProjectCard";
import type { Project } from "@/types";

interface ProjectListProps {
  projects: Project[];
}

export default function ProjectList({ projects }: ProjectListProps) {
  return (
    <ul className="grid gap-6 md:grid-cols-2">
      {projects.map(({ slug, ...project }) => (
        <li key={slug}>
          <ProjectCard {...project} />
        </li>
      ))}
    </ul>
  );
}
