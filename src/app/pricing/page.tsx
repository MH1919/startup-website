import React from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const plans = [
  {
    name: "Starter",
    price: "Free",
    description: "Perfect for individuals and small projects",
    features: [
      "Basic AI Model Training",
      "Community Support",
      "Limited API Access",
      "Basic Templates",
      "1 Project",
      "100 API Calls/month"
    ],
    buttonText: "Get Started",
    buttonVariant: "outline" as const,
    href: "/signup"
  },
  {
    name: "Pro",
    price: "$49",
    period: "/month",
    description: "Ideal for growing businesses and teams",
    features: [
      "Advanced AI Model Training",
      "Priority Support",
      "Full API Access",
      "Premium Templates",
      "10 Projects",
      "10,000 API Calls/month",
      "Team Collaboration",
      "Custom Integrations"
    ],
    buttonText: "Start Free Trial",
    buttonVariant: "default" as const,
    href: "/signup?plan=pro",
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations with custom needs",
    features: [
      "Custom AI Solutions",
      "24/7 Dedicated Support",
      "Unlimited API Access",
      "Custom Templates",
      "Unlimited Projects",
      "Unlimited API Calls",
      "Advanced Security",
      "SLA Guarantee",
      "Custom Training"
    ],
    buttonText: "Contact Sales",
    buttonVariant: "outline" as const,
    href: "/contact"
  }
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#18181b] text-zinc-100 pt-32 pb-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-yellow-400 tracking-tight">
            Simple, Transparent Pricing
          </h1>
          <p className="text-zinc-300 text-lg max-w-2xl mx-auto">
            Choose the perfect plan for your needs. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-gradient-to-b from-[#232323] to-[#18181b] rounded-2xl p-8 shadow-xl border ${
                plan.popular ? 'border-yellow-400' : 'border-zinc-800'
              } hover:border-yellow-400 transition-all relative`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-zinc-900 px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2 text-yellow-300">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-zinc-100">{plan.price}</span>
                  {plan.period && (
                    <span className="text-zinc-400">{plan.period}</span>
                  )}
                </div>
                <p className="text-zinc-400 mt-2">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-zinc-300">
                    <Check className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.buttonVariant}
                className="w-full"
                asChild
              >
                <Link href={plan.href}>
                  {plan.buttonText}
                </Link>
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4 text-yellow-300">Need a custom solution?</h2>
          <p className="text-zinc-300 mb-8">
            Contact our sales team for a tailored plan that fits your specific requirements.
          </p>
          <Button variant="outline" size="lg" asChild>
            <Link href="/contact">Contact Sales</Link>
          </Button>
        </div>
      </div>
    </div>
  );
} 