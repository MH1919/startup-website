import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { WavyBackground } from "@/components/ui/wavy-background";
import { Testimonials } from "@/components/testimonials";
import { TechStack } from "@/components/tech-stack";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#18181b] text-zinc-100 flex flex-col font-sans">
      {/* Hero Section with WavyBackground */}
      <section className="relative flex-1 flex flex-col items-center justify-center px-0 pt-32 pb-0 text-center bg-transparent overflow-hidden">
        <WavyBackground className="max-w-4xl mx-auto pb-40">
          <h1 className="relative z-10 text-5xl md:text-7xl font-extrabold mb-6 text-yellow-400 drop-shadow-[0_2px_24px_rgba(250,202,21,0.25)] tracking-tight leading-tight">
            Build with AI
          </h1>
          <p className="relative z-10 max-w-2xl mx-auto text-xl md:text-2xl text-zinc-300 mb-10 font-light">
            Welcome to <span className="text-yellow-400 font-semibold">Switch Dimension</span> — your partner in AI training, web app & agent development, and a thriving AI community. Empower your business and skills with the latest in AI technology.
          </p>
          <Link href="#signup" className="relative z-10 inline-flex items-center gap-2 px-10 py-5 rounded-xl bg-yellow-400 text-zinc-900 font-extrabold text-xl shadow-xl hover:bg-yellow-300 transition-all focus:ring-4 focus:ring-yellow-500/40">
            Sign Up Now <ArrowRight size={26} />
          </Link>
        </WavyBackground>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 bg-[#232323]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-yellow-400 tracking-tight text-center">
            Why Choose Switch Dimension?
          </h2>
          <p className="text-zinc-300 text-lg text-center max-w-2xl mx-auto mb-16">
            We provide comprehensive solutions for AI development and implementation
          </p>
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="bg-gradient-to-b from-[#232323] to-[#18181b] rounded-2xl p-10 shadow-xl border border-zinc-800 hover:border-yellow-400 transition-all">
              <h2 className="text-2xl font-bold mb-3 text-yellow-300 tracking-tight">AI Training</h2>
              <p className="text-zinc-300 text-lg font-light">
                Hands-on courses and workshops to master AI development, from fundamentals to advanced topics. Learn from industry experts and work on real-world projects.
              </p>
            </div>
            <div className="bg-gradient-to-b from-[#232323] to-[#18181b] rounded-2xl p-10 shadow-xl border border-zinc-800 hover:border-yellow-400 transition-all">
              <h2 className="text-2xl font-bold mb-3 text-yellow-300 tracking-tight">Web Apps & Agents</h2>
              <p className="text-zinc-300 text-lg font-light">
                Build, deploy, and scale AI-powered web apps and intelligent agents with expert guidance. From concept to production, we've got you covered.
              </p>
            </div>
            <div className="bg-gradient-to-b from-[#232323] to-[#18181b] rounded-2xl p-10 shadow-xl border border-zinc-800 hover:border-yellow-400 transition-all">
              <h2 className="text-2xl font-bold mb-3 text-yellow-300 tracking-tight">Community</h2>
              <p className="text-zinc-300 text-lg font-light">
                Join a vibrant community of AI enthusiasts, developers, and innovators. Share, learn, and grow together in our collaborative environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <TechStack />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Signup Section */}
      <section id="signup" className="py-24 px-4 bg-[#18181b] border-t border-zinc-800 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-yellow-400 tracking-tight">Ready to get started?</h2>
        <p className="text-zinc-300 mb-10 text-lg font-light max-w-2xl mx-auto">
          Join our community of AI innovators and start building the future today. Get access to exclusive training, tools, and support.
        </p>
        <a href="#" className="inline-flex items-center gap-2 px-10 py-5 rounded-xl bg-yellow-400 text-zinc-900 font-extrabold text-xl shadow-xl hover:bg-yellow-300 transition-all focus:ring-4 focus:ring-yellow-500/40">
          Join Switch Dimension <ArrowRight size={26} />
        </a>
      </section>
    </div>
  );
}
