"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useMemo } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const memoizedNavItems = useMemo(() => navItems, []);

  return (
    <header className="fixed top-0 z-50 w-full">
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-transparent" />
      <div className="relative container mx-auto flex h-28 items-center justify-between px-8">
        <div className="flex items-center gap-12">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-3xl font-bold tracking-tight bg-gradient-to-r from-primary via-primary/90 to-primary/80 bg-clip-text text-transparent">
              Startup
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            {memoizedNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-all duration-200 hover:scale-105"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" className="font-medium hover:bg-primary/10" asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button size="sm" className="font-medium bg-primary hover:bg-primary/90" asChild>
            <Link href="/signup">Get Started</Link>
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
} 