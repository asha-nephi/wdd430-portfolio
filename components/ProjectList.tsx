"use client";

import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import { projectCategories } from "@/data/projects";
import type { Project, ProjectCategory } from "@/types";

interface ProjectListProps {
  projects: Project[];
}

type Filter = ProjectCategory | "All";

const filters: Filter[] = ["All", ...projectCategories];

export default function ProjectList({ projects }: ProjectListProps) {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");

  const visibleProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <div>
      <div
        role="group"
        aria-label="Filter projects by category"
        className="mb-8 flex flex-wrap gap-2"
      >
        {filters.map((filter) => {
          const isActive = filter === activeFilter;

          return (
            <button
              key={filter}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                isActive
                  ? "border-accent bg-accent text-accent-foreground"
                  : "border-border bg-surface text-muted hover:border-accent hover:text-foreground"
              }`}
            >
              {filter}
            </button>
          );
        })}
      </div>
      <p className="sr-only" role="status">
        Showing {visibleProjects.length} projects
      </p>
      <ul className="grid gap-6 md:grid-cols-2">
        {visibleProjects.map(({ slug, ...project }) => (
          <li key={slug}>
            <ProjectCard {...project} />
          </li>
        ))}
      </ul>
    </div>
  );
}
