"use client";

import {
  useState,
  useEffect,
  useRef,
  type MouseEvent as ReactMouseEvent,
  type FocusEvent as ReactFocusEvent,
} from "react";
import Link from "next/link";
import { Menu, ChevronDown, X, Search, Phone, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";

type NavigationProps = {
  forceScrolled?: boolean;
};

export default function Navigation({ forceScrolled = false }: NavigationProps) {
  const [scrolled, setScrolled] = useState(forceScrolled);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();
  const servicesRef = useRef<HTMLDivElement | null>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isServicesActive = [
    "/services",
    "/patents",
    "/trademarks",
    "/copyrights",
  ].some((route) => pathname?.startsWith(route));

  const isActivePath = (route: string) => pathname === route;

  useEffect(() => {
    const handleScroll = () => {
      if (forceScrolled) {
        setScrolled(true);
        return;
      }
      setScrolled(window.scrollY > 10);
    };

    if (forceScrolled) {
      setScrolled(true);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [forceScrolled]);

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
        closeTimeoutRef.current = null;
      }
    };
  }, []);

  const handleServicesMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setServicesOpen(true);
  };

  const handleServicesMouseLeave = (event: ReactMouseEvent<HTMLDivElement>) => {
    const relatedTarget = event.relatedTarget as Node | null;

    if (relatedTarget && servicesRef.current?.contains(relatedTarget)) {
      return;
    }

    closeTimeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
      closeTimeoutRef.current = null;
    }, 120);
  };

  const handleServicesBlur = (event: ReactFocusEvent<HTMLElement>) => {
    const relatedTarget = event.relatedTarget as Node | null;

    if (relatedTarget && servicesRef.current?.contains(relatedTarget)) {
      return;
    }

    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setServicesOpen(false);
  };

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
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6",
          scrolled
            ? "bg-gradient-to-r from-[#081615] via-[#1E3432] to-[#0B1A18] backdrop-blur-lg shadow-lg"
            : "bg-gradient-to-r from-[#081615]/80 via-[#1E3432]/80 to-[#0B1A18]/80"
        )}
      >
        <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between">
          {/* Left Section - Navigation Items */}
          <nav className="hidden lg:flex items-center gap-x-6">
            <Link
              href="/"
              className={cn(
                "group relative font-body text-[15px] font-normal uppercase tracking-wide text-white transition-opacity",
                "hover:opacity-80"
              )}
            >
              <span>Home</span>
              <span
                className={cn(
                  "pointer-events-none absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 bg-[#F4D9C3] transition-transform duration-300",
                  "group-hover:scale-x-100",
                  isActivePath("/") && "scale-x-100"
                )}
              />
            </Link>

            {/* Services Dropdown */}
            <div
              ref={servicesRef}
              className="relative"
              onMouseEnter={handleServicesMouseEnter}
              onMouseLeave={handleServicesMouseLeave}
              onFocus={handleServicesMouseEnter}
              onBlur={handleServicesBlur}
            >
              <button
                className={cn(
                  "group relative font-body text-[15px] font-normal text-white uppercase tracking-wide transition-opacity flex items-center gap-1",
                  "hover:opacity-80"
                )}
              >
                <span>Services</span>
                <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", servicesOpen && "rotate-180")} />
                <span
                  className={cn(
                    "pointer-events-none absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 bg-[#F4D9C3] transition-transform duration-300",
                    "group-hover:scale-x-100",
                    isServicesActive && "scale-x-100"
                  )}
                />
              </button>

              {/* Dropdown Menu */}
              <div
                className={cn(
                  "absolute top-full left-0 w-56 pt-2 transition-all duration-200 origin-top",
                  servicesOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"
                )}
                onMouseEnter={handleServicesMouseEnter}
              >
                <div
                  className="rounded-lg shadow-lg overflow-hidden"
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
            </div>

            <Link
              href="/about"
              className={cn(
                "group relative font-body text-[15px] font-normal uppercase tracking-wide text-white transition-opacity",
                "hover:opacity-80"
              )}
            >
              <span>About Us</span>
              <span
                className={cn(
                  "pointer-events-none absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 bg-[#F4D9C3] transition-transform duration-300",
                  "group-hover:scale-x-100",
                  pathname?.startsWith("/about") && "scale-x-100"
                )}
              />
            </Link>
            <Link
              href="/blog"
              className={cn(
                "group relative font-body text-[15px] font-normal uppercase tracking-wide text-white transition-opacity",
                "hover:opacity-80"
              )}
            >
              <span>Blog</span>
              <span
                className={cn(
                  "pointer-events-none absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 bg-[#F4D9C3] transition-transform duration-300",
                  "group-hover:scale-x-100",
                  pathname?.startsWith("/blog") && "scale-x-100"
                )}
              />
            </Link>
            <Link
              href="/contact"
              className={cn(
                "group relative font-body text-[15px] font-normal uppercase tracking-wide text-white transition-opacity",
                "hover:opacity-80"
              )}
            >
              <span>Contact</span>
              <span
                className={cn(
                  "pointer-events-none absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 bg-[#F4D9C3] transition-transform duration-300",
                  "group-hover:scale-x-100",
                  pathname?.startsWith("/contact") && "scale-x-100"
                )}
              />
            </Link>
          </nav>

          {/* Center Section - Logo */}
          <Link
            href="/"
            className="font-display text-2xl font-normal text-white absolute left-1/2 transform -translate-x-1/2 hidden lg:block"
          >
            Polley IP Law, P.A.
          </Link>

          {/* Mobile Logo - Left Aligned */}
          <Link
            href="/"
            className="font-display text-2xl font-normal text-white lg:hidden"
          >
            Polley IP Law, P.A.
          </Link>

          {/* Right Section - Phone Number & Free Consultation */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href="/contact#contact-form"
              className="flex items-center gap-2 text-white hover:opacity-75 transition-opacity"
            >
              <Phone className="h-4 w-4" />
              <span className="font-body text-sm">Call our Tampa office</span>
            </a>
            <button
              onClick={() => window.open("https://calendly.com/polleylaw", "_blank", "noopener,noreferrer")}
              className="flex items-center gap-2 font-body text-sm text-white hover:opacity-75 transition-opacity uppercase"
            >
              Free Consultation
              <ArrowRight className="h-4 w-4" />
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
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden",
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setMobileMenuOpen(false)}
      />

      <div
        className={cn(
          "fixed top-0 right-0 bottom-0 z-50 w-[340px] max-w-full transition-transform duration-300 lg:hidden",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex h-full flex-col overflow-y-auto bg-gradient-to-br from-[#071412] via-[#12302C] to-[#071412] text-white shadow-2xl">
          <div className="flex items-center justify-between px-6 pt-8 pb-4">
            <div className="space-y-1">
              <p className="text-xs uppercase tracking-[0.3em] text-white/60">Polley IP Law</p>
              <p className="text-sm text-white/70">Protecting trademarks, patents, and creative works across Florida.</p>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
              <X className="h-6 w-6 text-white" />
            </Button>
          </div>

          <div className="px-6 pb-6">
            <div className="mb-6 rounded-3xl border border-white/10 bg-white/5 p-5 text-sm text-white/80">
              <p className="font-semibold text-white">Urgent IP support?</p>
              <p className="mt-2 leading-relaxed">
                Same-day trademark search Florida and emergency IP lawyer near me consultations are available by phone.
              </p>
            </div>

            <nav className="flex flex-col gap-3">
              <Link
                href="/"
                className="inline-flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm font-semibold uppercase tracking-[0.2em] transition-colors duration-300 hover:bg-white/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>Home</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              {/* Services Accordion */}
              <div className="flex flex-col">
                <button
                  className="inline-flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm font-semibold uppercase tracking-[0.2em] transition-colors duration-300 hover:bg-white/10"
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
                className="inline-flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm font-semibold uppercase tracking-[0.2em] transition-colors duration-300 hover:bg-white/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>About Us</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/blog"
                className="inline-flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm font-semibold uppercase tracking-[0.2em] transition-colors duration-300 hover:bg-white/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>Blog</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm font-semibold uppercase tracking-[0.2em] transition-colors duration-300 hover:bg-white/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>Contact</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              {/* Phone Number */}
              <a
                href="/contact#contact-form"
                className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm tracking-[0.1em] text-white transition-colors duration-300 hover:bg-white/10"
              >
                <Phone className="h-4 w-4" />
                <span>Call our Tampa office</span>
              </a>

              {/* Free Consultation Button */}
              <div className="mt-6">
                <button
                  onClick={() => {
                    window.open("https://calendly.com/polleylaw", "_blank", "noopener,noreferrer");
                    setMobileMenuOpen(false);
                  }}
                className="w-full inline-flex items-center justify-center gap-3 rounded-full bg-[#F4D9C3] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#1E3432] transition-transform duration-300 hover:scale-[1.02]"
                >
                  Free Consultation
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

