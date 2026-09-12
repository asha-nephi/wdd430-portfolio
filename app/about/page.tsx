import DetailedProfile from "@/components/DetailedProfile";
export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-lg text-gray-700">
        This about page shares more information about my background and work.
      </p>
      <DetailedProfile
        role="Backend Engineer"
        stack={[
          "Node.js",
          "TypeScript",
          "AWS Serverless",
          "Distributed Systems",
        ]}
        summary="I build backend systems: APIs, event-driven services, and the infrastructure underneath them. Right now I'm deepening Postgres, Redis, Kafka, and BullMQ on top of a Node.js/Express/TypeScript/AWS/MongoDB foundation. Focus is system design, distributed systems, and business-logic-heavy backend work. No frontend."
        project={{
          name: "ChessForge",
          description: "A real-time multiplayer chess platform backend.",
          features: [
            "Rules engine",
            "WebSocket game server",
            "Redis pub/sub for horizontal scaling across instances",
            "ELO-based matchmaking queue",
            "Postgres persistence",
          ],
          status:
            "Still in progress. The repo goes up when the core is playable.",
        }}
        closingNote="This profile fills in with small, focused repos as I work through backend fundamentals and build real systems along the way: distributed systems patterns like leader election and idempotent job processing, real-time sync with CRDTs and WebSockets, information retrieval built from scratch, and a running log of how I actually reason through problems."
      />
    </main>
  );
}
