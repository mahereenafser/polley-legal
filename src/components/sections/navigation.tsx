"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, ChevronDown, X, Search } from "lucide-react";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { HoverButton } from "@/components/ui/hover-button";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

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
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-2 px-6",
          scrolled ? "bg-[#1E3432]/95 backdrop-blur-md shadow-lg" : "bg-transparent"
        )}
      >
        <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between">
          {/* Left Section - Navigation Items */}
          <nav className="hidden lg:flex items-center gap-x-6">
            <Link
              href="/"
              className="font-body text-[15px] font-normal text-white transition-opacity hover:opacity-75 uppercase"
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className="font-body text-[15px] font-normal text-white transition-opacity hover:opacity-75 flex items-center gap-1 uppercase"
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
                    className="block px-4 py-3 font-body text-[15px] font-normal text-white hover:bg-white/10 transition-colors uppercase"
                  >
                    Patents
                  </Link>
                  <Link
                    href="/trademarks"
                    className="block px-4 py-3 font-body text-[15px] font-normal text-white hover:bg-white/10 transition-colors uppercase"
                  >
                    Trademarks
                  </Link>
                  <Link
                    href="/copyrights"
                    className="block px-4 py-3 font-body text-[15px] font-normal text-white hover:bg-white/10 transition-colors uppercase"
                  >
                    Copyrights
                  </Link>
                  <div className="border-t border-white/10 my-2"></div>
                  <Link
                    href="/services"
                    className="block px-4 py-3 font-body text-[15px] font-normal text-white hover:bg-white/10 transition-colors uppercase"
                  >
                    View All Services
                  </Link>
                </div>
              </div>
            </div>

            <Link
              href="/about"
              className="font-body text-[15px] font-normal text-white transition-opacity hover:opacity-75 uppercase"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="font-body text-[15px] font-normal text-white transition-opacity hover:opacity-75 uppercase"
            >
              Contact
            </Link>
          </nav>

          {/* Center Section - Logo */}
          <Link
            href="/"
            className="font-display text-2xl font-normal text-white absolute left-1/2 transform -translate-x-1/2 hidden lg:block"
          >
            Polley IP Law
          </Link>

          {/* Mobile Logo - Left Aligned */}
          <Link
            href="/"
            className="font-display text-2xl font-normal text-white lg:hidden"
          >
            Polley IP Law
          </Link>

          {/* Right Section - Free Consultation & Search */}
          <div className="hidden lg:flex items-center gap-4">
            <HoverButton
              onClick={() => window.open("https://calendly.com/polleylaw", "_blank", "noopener,noreferrer")}
              className="font-body font-normal text-[13px] text-white uppercase"
            >
              Free Consultation
            </HoverButton>
            <button
              onClick={() => setSearchOpen(true)}
              className="text-white hover:opacity-75 transition-opacity"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(true)}
              className={cn(
                "transition-colors duration-300",
                scrolled && mobileMenuOpen && "bg-green-600 hover:bg-green-700"
              )}
            >
              <Menu className="h-6 w-6 text-white" />
            </Button>
          </div>
        </div>
      </header>

      {/* Search Modal */}
      {searchOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60] flex items-start justify-center pt-32 px-4">
          <div className="w-full max-w-2xl">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-2xl">
              <div className="flex items-center gap-4 mb-4">
                <Search className="h-6 w-6 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  autoFocus
                  className="flex-1 bg-transparent border-none outline-none text-xl text-gray-800 placeholder-gray-400"
                  onKeyDown={(e) => {
                    if (e.key === 'Escape') {
                      setSearchOpen(false);
                    }
                  }}
                />
                <button
                  onClick={() => setSearchOpen(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <div className="text-sm text-gray-500">
                Press ESC to close
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden",
          mobileMenuOpen ? "opacity-100 z-50" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Menu Drawer - Glassmorphic */}
      <div
        className={cn(
          "fixed top-0 right-0 bottom-0 w-[320px] shadow-2xl transition-all duration-300 lg:hidden z-50",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full",
          "bg-[#1E3432]/95",
          "backdrop-blur-xl"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Close Button & Search */}
          <div className="flex justify-between items-center p-6">
            <button
              onClick={() => setSearchOpen(true)}
              className="text-white hover:opacity-75 transition-opacity"
              aria-label="Search"
            >
              <Search className="h-6 w-6" />
            </button>
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
              className="font-body text-[15px] font-normal text-white py-3 px-4 rounded-lg hover:bg-white/10 transition-colors uppercase"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>

            {/* Services Accordion */}
            <div className="flex flex-col">
              <button
                className="font-body text-[15px] font-normal text-white py-3 px-4 rounded-lg hover:bg-white/10 transition-colors flex items-center justify-between uppercase"
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
                  className="font-body text-[15px] font-normal text-white/90 py-2 px-8 hover:bg-white/10 transition-colors uppercase"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Patents
                </Link>
                <Link
                  href="/trademarks"
                  className="font-body text-[15px] font-normal text-white/90 py-2 px-8 hover:bg-white/10 transition-colors uppercase"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Trademarks
                </Link>
                <Link
                  href="/copyrights"
                  className="font-body text-[15px] font-normal text-white/90 py-2 px-8 hover:bg-white/10 transition-colors uppercase"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Copyrights
                </Link>
                <div className="border-t border-white/10 my-2 mx-4"></div>
                <Link
                  href="/services"
                  className="font-body text-[15px] font-normal text-white/90 py-2 px-8 hover:bg-white/10 transition-colors uppercase"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  View All Services
                </Link>
              </div>
            </div>

            <Link
              href="/about"
              className="font-body text-[15px] font-normal text-white py-3 px-4 rounded-lg hover:bg-white/10 transition-colors uppercase"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>

            <Link
              href="/contact"
              className="font-body text-[15px] font-normal text-white py-3 px-4 rounded-lg hover:bg-white/10 transition-colors uppercase"
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
                className="w-full font-body font-normal text-[13px] text-white uppercase"
              >
                Free Consultation
              </HoverButton>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
