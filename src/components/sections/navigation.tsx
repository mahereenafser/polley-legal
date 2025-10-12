"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { HoverButton } from "@/components/ui/hover-button";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

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

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className="font-body text-[15px] font-medium text-white transition-opacity hover:opacity-75 flex items-center gap-1"
            >
              Services
              <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", servicesOpen && "rotate-180")} />
            </button>

            {/* Dropdown Menu */}
            <div
              className={cn(
                "absolute top-full left-0 mt-2 w-56 rounded-lg shadow-lg overflow-hidden transition-all duration-200 origin-top",
                servicesOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
              )}
              style={{ backgroundColor: '#1E3432' }}
            >
              <div className="py-2">
                <Link
                  href="/patents"
                  className="block px-4 py-3 font-body text-[15px] font-medium text-white hover:bg-white/10 transition-colors"
                >
                  Patents
                </Link>
                <Link
                  href="/trademarks"
                  className="block px-4 py-3 font-body text-[15px] font-medium text-white hover:bg-white/10 transition-colors"
                >
                  Trademarks
                </Link>
                <Link
                  href="/copyrights"
                  className="block px-4 py-3 font-body text-[15px] font-medium text-white hover:bg-white/10 transition-colors"
                >
                  Copyrights
                </Link>
                <div className="border-t border-white/10 my-2"></div>
                <Link
                  href="/services"
                  className="block px-4 py-3 font-body text-[15px] font-medium text-white hover:bg-white/10 transition-colors"
                >
                  View All Services
                </Link>
              </div>
            </div>
          </div>

          <Link href="/contact" className="font-body text-[15px] font-medium text-white transition-opacity hover:opacity-75">
            Contact
          </Link>
        </nav>

        <div className="hidden lg:flex">
            <HoverButton
              onClick={() => window.open("https://calendly.com/polleylaw", "_blank", "noopener,noreferrer")}
              className="font-body font-semibold text-white uppercase"
            >
              Free Consultation
            </HoverButton>
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