import { Code2, Cpu, Database, Globe, Layers, Zap } from "lucide-react";

const techStack = [
  {
    icon: <Cpu className="w-8 h-8 text-yellow-400" />,
    title: "AI & ML",
    description: "TensorFlow, PyTorch, OpenAI, LangChain"
  },
  {
    icon: <Code2 className="w-8 h-8 text-yellow-400" />,
    title: "Development",
    description: "React, Next.js, TypeScript, Node.js"
  },
  {
    icon: <Database className="w-8 h-8 text-yellow-400" />,
    title: "Data & Storage",
    description: "PostgreSQL, MongoDB, Redis, Vector DBs"
  },
  {
    icon: <Globe className="w-8 h-8 text-yellow-400" />,
    title: "Deployment",
    description: "AWS, Vercel, Docker, Kubernetes"
  },
  {
    icon: <Layers className="w-8 h-8 text-yellow-400" />,
    title: "APIs & Services",
    description: "REST, GraphQL, WebSockets, Serverless"
  },
  {
    icon: <Zap className="w-8 h-8 text-yellow-400" />,
    title: "Performance",
    description: "CDN, Caching, Optimization, Monitoring"
  }
];

export function TechStack() {
  return (
    <section className="py-24 px-4 bg-[#18181b]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-yellow-400 tracking-tight text-center">
          Our Tech Stack
        </h2>
        <p className="text-zinc-300 text-lg text-center max-w-2xl mx-auto mb-16">
          We leverage cutting-edge technologies to build powerful AI solutions and web applications
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {techStack.map((tech, index) => (
            <div key={index} className="bg-gradient-to-b from-[#232323] to-[#18181b] rounded-2xl p-8 shadow-xl border border-zinc-800 hover:border-yellow-400 transition-all">
              <div className="mb-4">{tech.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-yellow-300">{tech.title}</h3>
              <p className="text-zinc-300">{tech.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 