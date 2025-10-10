"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-colors duration-300 py-4 px-6",
        scrolled ? "bg-[#1E3432]/90 backdrop-blur-md" : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between">
        <Link
          href="/"
          className="font-display text-3xl font-normal text-white"
        >
          Polley IP Law
        </Link>

        <nav className="hidden lg:flex items-center gap-x-8">
          <Link href="/" className="font-body text-[15px] font-medium text-white transition-opacity hover:opacity-75">
            Home
          </Link>
          <Link href="/about" className="font-body text-[15px] font-medium text-white transition-opacity hover:opacity-75">
            About
          </Link>
          <Link href="/services" className="font-body text-[15px] font-medium text-white transition-opacity hover:opacity-75">
            Services
          </Link>
          <Link href="/contact" className="font-body text-[15px] font-medium text-white transition-opacity hover:opacity-75">
            Contact
          </Link>
        </nav>

        <div className="hidden lg:flex">
            <Button asChild style={{ backgroundColor: "#F4CCBA" }} className="rounded-full px-5 py-3 font-body font-semibold text-base text-text-primary transition-colors hover:bg-[#eabfAc]">
                <a href="https://calendly.com/polleylaw" target="_blank" rel="noopener noreferrer">
                    Free Consultation
                </a>
            </Button>
        </div>

        <div className="lg:hidden">
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6 text-white" />
          </Button>
        </div>
      </div>
    </header>
  );
}