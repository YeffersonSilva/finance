"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Flame, BarChart3, Calculator, Lightbulb, Trophy } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  {
    name: "Dashboard",
    href: "/",
    icon: <BarChart3 className="h-5 w-5" />,
  },
  {
    name: "FIRE Calculator",
    href: "/calculator",
    icon: <Calculator className="h-5 w-5" />,
  },
  {
    name: "Strategies",
    href: "/strategies",
    icon: <Flame className="h-5 w-5" />,
  },
  {
    name: "Recommendations",
    href: "/recommendations",
    icon: <Lightbulb className="h-5 w-5" />,
  },
  {
    name: "Achievements",
    href: "/achievements",
    icon: <Trophy className="h-5 w-5" />,
  },
];

export function MainNav() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center space-x-4 lg:space-x-6">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "flex items-center text-sm font-medium transition-colors hover:text-primary",
            pathname === item.href
              ? "text-primary"
              : "text-muted-foreground"
          )}
        >
          {item.icon}
          <span className="ml-2">{item.name}</span>
        </Link>
      ))}
    </nav>
  );
}