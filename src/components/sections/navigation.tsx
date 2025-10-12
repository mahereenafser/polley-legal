"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, ChevronDown, X } from "lucide-react";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { HoverButton } from "@/components/ui/hover-button";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

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
              className="font-body font-normal text-sm text-white uppercase"
            >
              Free Consultation
            </HoverButton>
        </div>

        <div className="lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="h-6 w-6 text-white" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden",
          mobileMenuOpen ? "opacity-100 z-50" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Menu Drawer */}
      <div
        className={cn(
          "fixed top-0 right-0 bottom-0 w-[280px] bg-[#1E3432] shadow-2xl transition-transform duration-300 lg:hidden z-50",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Close Button */}
          <div className="flex justify-end p-6">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="h-6 w-6 text-white" />
            </Button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col px-6 pb-6 gap-2">
            <Link
              href="/"
              className="font-body text-base font-medium text-white py-3 px-4 rounded-lg hover:bg-white/10 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="font-body text-base font-medium text-white py-3 px-4 rounded-lg hover:bg-white/10 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>

            {/* Services Accordion */}
            <div className="flex flex-col">
              <button
                className="font-body text-base font-medium text-white py-3 px-4 rounded-lg hover:bg-white/10 transition-colors flex items-center justify-between"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              >
                Services
                <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", mobileServicesOpen && "rotate-180")} />
              </button>

              <div
                className={cn(
                  "flex flex-col overflow-hidden transition-all duration-200",
                  mobileServicesOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
                )}
              >
                <Link
                  href="/patents"
                  className="font-body text-sm font-medium text-white/90 py-2 px-8 hover:bg-white/10 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Patents
                </Link>
                <Link
                  href="/trademarks"
                  className="font-body text-sm font-medium text-white/90 py-2 px-8 hover:bg-white/10 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Trademarks
                </Link>
                <Link
                  href="/copyrights"
                  className="font-body text-sm font-medium text-white/90 py-2 px-8 hover:bg-white/10 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Copyrights
                </Link>
                <div className="border-t border-white/10 my-2 mx-4"></div>
                <Link
                  href="/services"
                  className="font-body text-sm font-medium text-white/90 py-2 px-8 hover:bg-white/10 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  View All Services
                </Link>
              </div>
            </div>

            <Link
              href="/contact"
              className="font-body text-base font-medium text-white py-3 px-4 rounded-lg hover:bg-white/10 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>

            {/* Free Consultation Button */}
            <div className="mt-4">
              <HoverButton
                onClick={() => {
                  window.open("https://calendly.com/polleylaw", "_blank", "noopener,noreferrer");
                  setMobileMenuOpen(false);
                }}
                className="w-full font-body font-normal text-sm text-white uppercase"
              >
                Free Consultation
              </HoverButton>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}