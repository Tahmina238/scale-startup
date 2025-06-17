"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ModeToggle } from "../toggle/Mode-toggle";
import { ScaleStartupLogo } from "../scale-logo/ScaleStartupLogo";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Solution", href: "/solution" },
  { name: "Technology", href: "/technology" },
  { name: "Company", href: "/company" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 w-full h-20 border-b  text-white border-border/40 bg-black  ">
      <div className="flex  items-center">
        <div className="mr-8">
          <Link href="/" className="flex items-center space-x-2">
            <ScaleStartupLogo />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white">
                Scale Startup
              </span>
              <span className="text-xs text-muted-foreground">
                Vision to Reality
              </span>
            </div>
          </Link>
        </div>
        <nav className="hidden md:flex flex-1 text-2xl  items-center justify-center text-white space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-xl font-medium transition-colors hover:text-primary",
                pathname === item.href
                  ? "text-foreground"
                  : "text-muted-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="flex items-center justify-center space-x-4">
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
