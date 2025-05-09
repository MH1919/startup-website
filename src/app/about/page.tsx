import React from "react";
import Image from "next/image";
import { Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const team = [
  {
    name: "Alex Chen",
    role: "CEO & Co-founder",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    bio: "Former AI researcher at Google, passionate about making AI accessible to everyone.",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#"
    }
  },
  {
    name: "Sarah Johnson",
    role: "CTO & Co-founder",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    bio: "Full-stack developer with 10+ years of experience in building scalable applications.",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#"
    }
  },
  {
    name: "Michael Rodriguez",
    role: "Head of AI",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    bio: "PhD in Machine Learning, specializing in natural language processing and computer vision.",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#"
    }
  },
  {
    name: "Emma Thompson",
    role: "Head of Product",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    bio: "Product leader with experience at top tech companies, focused on user-centric design.",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#"
    }
  }
];

const milestones = [
  {
    year: "2020",
    title: "Company Founded",
    description: "Started with a vision to democratize AI development"
  },
  {
    year: "2021",
    title: "First Product Launch",
    description: "Released our AI development platform with basic features"
  },
  {
    year: "2022",
    title: "Series A Funding",
    description: "Raised $10M to expand our team and product offerings"
  },
  {
    year: "2023",
    title: "Global Expansion",
    description: "Expanded to 50+ countries with 100,000+ active users"
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#18181b] text-zinc-100 pt-32 pb-24">
      <div className="max-w-6xl mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-24">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-yellow-400 tracking-tight">
            Our Story
          </h1>
          <p className="text-zinc-300 text-lg max-w-3xl mx-auto">
            We're on a mission to democratize AI development and make it accessible to everyone. 
            Our platform combines cutting-edge technology with user-friendly tools to help developers 
            and businesses build the future of AI.
          </p>
        </div>

        {/* Mission Section */}
        <div className="mb-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-yellow-300">Our Mission</h2>
              <p className="text-zinc-300 mb-6">
                We believe that AI should be accessible to everyone. Our mission is to empower 
                developers and businesses with the tools and knowledge they need to build 
                innovative AI solutions.
              </p>
              <p className="text-zinc-300">
                Through our platform, we're creating a community of AI enthusiasts and 
                professionals who are shaping the future of technology.
              </p>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b"
                alt="AI Development"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </div>
        </div>

        {/* Milestones Section */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold mb-12 text-yellow-300 text-center">Our Journey</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="bg-gradient-to-b from-[#232323] to-[#18181b] rounded-2xl p-6 border border-zinc-800"
              >
                <div className="text-yellow-400 font-bold mb-2">{milestone.year}</div>
                <h3 className="text-xl font-semibold mb-2 text-zinc-100">{milestone.title}</h3>
                <p className="text-zinc-400">{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div>
          <h2 className="text-3xl font-bold mb-12 text-yellow-300 text-center">Meet Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-gradient-to-b from-[#232323] to-[#18181b] rounded-2xl p-6 border border-zinc-800 text-center"
              >
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1 text-zinc-100">{member.name}</h3>
                <p className="text-yellow-400 mb-3">{member.role}</p>
                <p className="text-zinc-400 mb-4">{member.bio}</p>
                <div className="flex justify-center gap-4">
                  <Button variant="ghost" size="icon" asChild>
                    <a href={member.social.twitter} target="_blank" rel="noopener noreferrer">
                      <Twitter className="w-5 h-5" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon" asChild>
                    <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon" asChild>
                    <a href={member.social.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-5 h-5" />
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 