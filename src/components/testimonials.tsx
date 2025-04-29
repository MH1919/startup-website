import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "AI Developer",
    company: "TechCorp",
    image: "/testimonials/sarah.jpg",
    content: "The AI training program transformed my career. The hands-on approach and real-world projects helped me land my dream job in AI development.",
    rating: 5
  },
  {
    name: "Michael Rodriguez",
    role: "Startup Founder",
    company: "AI Solutions",
    image: "/testimonials/michael.jpg",
    content: "Building our AI-powered web app with Switch Dimension's guidance was a game-changer. Their expertise in AI agents helped us scale rapidly.",
    rating: 5
  },
  {
    name: "Emma Thompson",
    role: "Data Scientist",
    company: "InnovateAI",
    image: "/testimonials/emma.jpg",
    content: "The community support and resources available here are unmatched. I've grown both professionally and personally through this platform.",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section className="py-24 px-4 bg-[#232323]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-yellow-400 tracking-tight text-center">
          What Our Community Says
        </h2>
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gradient-to-b from-[#232323] to-[#18181b] rounded-2xl p-8 shadow-xl border border-zinc-800 hover:border-yellow-400 transition-all">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-yellow-400/20 flex items-center justify-center">
                  <span className="text-yellow-400 font-bold text-lg">{testimonial.name.charAt(0)}</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-yellow-300">{testimonial.name}</h3>
                  <p className="text-zinc-400 text-sm">{testimonial.role} at {testimonial.company}</p>
                </div>
              </div>
              <p className="text-zinc-300 mb-4">{testimonial.content}</p>
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 