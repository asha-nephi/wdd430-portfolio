import type { Project, ProjectCategory } from "@/types";

export const projectCategories: ProjectCategory[] = [
  "Backend",
  "Full-stack",
  "Tools & Practice",
];

export const projects: Project[] = [
  {
    slug: "pathwayclash",
    title: "PathwayClash",
    summary:
      "A skill-based career platform where people compete in timed Clashes, earn verified badges and get discovered by employers who hire on proof instead of resumes.",
    highlights: [
      "Timed battles across typing, math and writing",
      "Public profiles with verified skill badges",
      "Marketplace and recruiter views for employers",
    ],
    technologies: ["React", "TypeScript", "Supabase"],
    category: "Full-stack",
    liveUrl: "https://pathwayclash.com/",
  },
  {
    slug: "realtime-collab-editor",
    title: "Real-Time Collaboration Editor",
    summary:
      "A collaborative editing backend built from scratch around a sequence CRDT, with a resilient WebSocket sync protocol and Redis fan-out across stateless nodes.",
    highlights: [
      "RGA CRDT with causal delivery, so concurrent edits converge without OT",
      "Reconnection with resume deltas or snapshot rebuilds",
      "Durable op log, presence tracking and Prometheus metrics",
    ],
    technologies: ["TypeScript", "Fastify", "WebSockets", "Redis", "Docker"],
    category: "Backend",
    repoUrl: "https://github.com/asha-nephi/realtime-collab-editor",
  },
  {
    slug: "distributed-job-scheduler",
    title: "Distributed Job Scheduler",
    summary:
      "A scheduler that stays correct when nodes fail: leader election, a Postgres work queue, lease-based failure detection and idempotent execution.",
    highlights: [
      "Fencing-token leader election with automatic failover",
      "SKIP LOCKED single-claim dequeue, retries with jittered backoff",
      "Hand-written cron engine with DST-aware scheduling",
    ],
    technologies: ["TypeScript", "PostgreSQL", "Redis", "Docker"],
    category: "Backend",
    repoUrl: "https://github.com/asha-nephi/distributed-job-scheduler",
  },
  {
    slug: "mini-search-engine",
    title: "Mini Search Engine",
    summary:
      "A full-text search engine with no database: a custom analysis pipeline, positional inverted index, query parser and BM25 ranking, persisted on disk.",
    highlights: [
      "Hand-written tokenizer and Porter stemmer",
      "Boolean, phrase and field-scoped queries",
      "Write-ahead log, immutable segments and background merge",
    ],
    technologies: ["TypeScript", "Fastify", "Zod", "Pino", "Jest"],
    category: "Backend",
    repoUrl: "https://github.com/asha-nephi/mini-search-engine",
  },
  {
    slug: "mydeseret",
    title: "MyDeseret ERP API",
    summary:
      "A multi-tenant ERP backend with strict data isolation through a schema-per-tenant architecture, covering inventory, manufacturing, sales, HR and payroll.",
    highlights: [
      "Schema-per-tenant isolation with JWT-based dynamic routing",
      "Stateless auth with RBAC and two-factor authentication",
      "Async processing via RabbitMQ and circuit breakers",
    ],
    technologies: ["Java", "Spring Boot", "PostgreSQL", "Redis", "RabbitMQ"],
    category: "Backend",
    repoUrl: "https://github.com/asha-nephi/mydeseret",
    liveUrl: "https://mydeseret.onrender.com/swagger-ui/index.html",
  },
  {
    slug: "conference-tracker",
    title: "Conference Check-in Tracker",
    summary:
      "An event headcount tracker where a staff form, self-serve QR codes and a fingerprint scanner all feed a single running total.",
    highlights: [
      "Offline-first staff station that syncs to a cloud database",
      "QR self check-in that prevents double counting per device",
      "Separate member and guest flows tuned for speed at the gate",
    ],
    technologies: ["TypeScript", "Node.js", "Supabase", "QR codes"],
    category: "Full-stack",
    repoUrl: "https://github.com/asha-nephi/conference-tracker",
    liveUrl: "https://conference-tracker-nine.vercel.app",
  },
  {
    slug: "dfm",
    title: "Deseret Facility Management",
    summary:
      "A facility management web app backed by Supabase, with schema-validated input and production error monitoring.",
    highlights: [
      "Supabase integration through server-side clients",
      "Schema validation with Zod",
      "Error tracking with Sentry",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Supabase", "Sentry"],
    category: "Full-stack",
    repoUrl: "https://github.com/asha-nephi/dfm",
    liveUrl: "https://deseretfacilities.com/",
  },
  {
    slug: "sacrament-meetings",
    title: "Sacrament Meetings",
    summary:
      "A web app for publishing ward sacrament meeting schedules and agendas, with a current-meeting view and a JSON API.",
    highlights: [
      "Next.js App Router with nested layouts and loading states",
      "Route handlers for listing and fetching meetings",
      "Individual meeting detail pages",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    category: "Full-stack",
    repoUrl: "https://github.com/asha-nephi/sacrament-meetings",
    liveUrl: "https://sacrament-meetings-chi-seven.vercel.app",
  },
  {
    slug: "codeflow-coach",
    title: "Codeflow Coach",
    summary:
      "A VS Code extension for focus and well-being: Pomodoro-style sessions, ergonomics reminders and a stats dashboard.",
    highlights: [
      "Status bar countdown and one-click menu",
      "Idle-aware break reminders with snooze",
      "Webview dashboard for streaks and focus minutes",
    ],
    technologies: ["TypeScript", "VS Code API"],
    category: "Tools & Practice",
    repoUrl: "https://github.com/asha-nephi/codeflow-coach",
  },
  {
    slug: "pulse-emitter",
    title: "Pulse Emitter",
    summary:
      "A strongly typed event emitter written from scratch to explore closures, prototypes, this-binding and listener leaks.",
    highlights: [
      "Compile-time checked event names and payloads",
      "Private state with class fields, bound public methods",
      "Node-style max listener leak guard",
    ],
    technologies: ["TypeScript", "Node.js"],
    category: "Tools & Practice",
    repoUrl: "https://github.com/asha-nephi/pulse-emitter",
  },
  {
    slug: "problem-log",
    title: "Problem Log",
    summary:
      "A running log of data structure and algorithm problems, each written up with the same seven-step reasoning framework.",
    highlights: [
      "Brute force, bottleneck and alternatives for every entry",
      "Emphasis on the pattern, not just the solution",
    ],
    technologies: ["JavaScript", "Algorithms"],
    category: "Tools & Practice",
    repoUrl: "https://github.com/asha-nephi/problem-log",
  },
  {
    slug: "digitype",
    title: "Digitype Dojo",
    summary:
      "A typing speed and accuracy trainer with progress charts, custom text, difficulty modes and milestones.",
    highlights: [
      "Timed, practice and custom-text modes",
      "Progress and history charts by date range",
    ],
    technologies: ["Python"],
    category: "Tools & Practice",
    repoUrl: "https://github.com/asha-nephi/digitype",
  },
];
