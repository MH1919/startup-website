import React from "react";
import { Brain, Code2, Database, Globe, Layers, Zap, Users, BookOpen, Rocket, Shield } from "lucide-react";

const features = [
  {
    icon: <Brain className="w-8 h-8 text-yellow-400" />,
    title: "AI Development",
    description: "Build and deploy AI models with our comprehensive development tools and frameworks.",
    benefits: ["TensorFlow & PyTorch Integration", "Model Training Pipeline", "AutoML Capabilities"]
  },
  {
    icon: <Code2 className="w-8 h-8 text-yellow-400" />,
    title: "Web Development",
    description: "Create modern, responsive web applications with our AI-powered development tools.",
    benefits: ["React & Next.js Templates", "TypeScript Support", "Component Library"]
  },
  {
    icon: <Database className="w-8 h-8 text-yellow-400" />,
    title: "Data Management",
    description: "Efficiently manage and process your data with our advanced database solutions.",
    benefits: ["Vector Database Support", "Real-time Processing", "Data Visualization"]
  },
  {
    icon: <Globe className="w-8 h-8 text-yellow-400" />,
    title: "Cloud Deployment",
    description: "Deploy your applications seamlessly to any cloud provider with our deployment tools.",
    benefits: ["Multi-cloud Support", "Auto-scaling", "CI/CD Pipeline"]
  },
  {
    icon: <Layers className="w-8 h-8 text-yellow-400" />,
    title: "API Integration",
    description: "Connect your applications with powerful APIs and services.",
    benefits: ["REST & GraphQL Support", "WebSocket Integration", "API Documentation"]
  },
  {
    icon: <Zap className="w-8 h-8 text-yellow-400" />,
    title: "Performance Optimization",
    description: "Optimize your applications for maximum performance and efficiency.",
    benefits: ["Caching Solutions", "Load Balancing", "Performance Monitoring"]
  },
  {
    icon: <Users className="w-8 h-8 text-yellow-400" />,
    title: "Community Support",
    description: "Join our vibrant community of developers and AI enthusiasts.",
    benefits: ["Discussion Forums", "Code Reviews", "Collaboration Tools"]
  },
  {
    icon: <BookOpen className="w-8 h-8 text-yellow-400" />,
    title: "Learning Resources",
    description: "Access comprehensive learning materials and documentation.",
    benefits: ["Video Tutorials", "Interactive Guides", "Best Practices"]
  },
  {
    icon: <Rocket className="w-8 h-8 text-yellow-400" />,
    title: "Rapid Development",
    description: "Accelerate your development process with our AI-powered tools.",
    benefits: ["Code Generation", "Template Library", "Development Workflow"]
  },
  {
    icon: <Shield className="w-8 h-8 text-yellow-400" />,
    title: "Security & Compliance",
    description: "Ensure your applications are secure and compliant with industry standards.",
    benefits: ["Security Best Practices", "Compliance Tools", "Audit Logging"]
  }
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-[#18181b] text-zinc-100 pt-32 pb-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-yellow-400 tracking-tight">
            Powerful Features for AI Development
          </h1>
          <p className="text-zinc-300 text-lg max-w-2xl mx-auto">
            Discover the comprehensive suite of tools and features designed to accelerate your AI and web development journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-[#232323] to-[#18181b] rounded-2xl p-8 shadow-xl border border-zinc-800 hover:border-yellow-400 transition-all"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-yellow-300">{feature.title}</h3>
              <p className="text-zinc-300 mb-4">{feature.description}</p>
              <ul className="space-y-2">
                {feature.benefits.map((benefit, i) => (
                  <li key={i} className="text-zinc-400 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 