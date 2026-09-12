import ProjectList from "@/components/ProjectList";
const projects = [
  {
    title: "CodeFlow-Coach",
    description:
      "An intelligent productivity and well-being coach for VS Code, designed to help you write better code, improve your workflow, and maintain good coding habits. ",
    technologies: ["Javascript", "TypeScript", "Tailwind CSS"],
    link: "https://github.com/asha-nephi/codeflow-coach",
  },
  {
    title: "Pulse Emitter",
    description:
      "A small, strongly-typed event emitter built from scratch — no dependency on Node's built-in EventEmitter. Built as a deliberate exercise in the mechanics that make an emitter work: closures for private state, the prototype chain for shared methods, explicit this-binding, and the listener-leak problem Node's own emitter warns about.",
    technologies: ["React", "JavaScript", "CSS"],
    link: "https://github.com/asha-nephi/pulse-emitter",
  },
];

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">My Portfolio</h1>
        <p className="text-lg text-gray-700">
          I'm a full-stack developer learning Next.js and React. Here are some
          of my recent projects.
        </p>
      </section>
      <ProjectList projects={projects} />
    </main>
  );
}
