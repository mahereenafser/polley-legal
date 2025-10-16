import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative h-[90vh] min-h-[720px] overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-black/80" />

      <div className="relative z-10 mx-auto flex h-full w-full max-w-[960px] flex-col items-center justify-center gap-14 px-6 text-center sm:px-8 md:px-12">
        <div className="space-y-6 text-white">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">Florida Intellectual Property Attorneys</p>
          <h1 className="font-display text-[42px] sm:text-[58px] md:text-[74px] lg:text-[88px] leading-[1.03] text-white">
            Protect the ideas that define your business.
          </h1>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-white/85 sm:text-lg md:text-xl">
            We deliver emergency trademark filing Florida support, rush patent filing Florida counsel, and long-term brand protection strategies for innovators across every industry.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <Link
            href="https://calendly.com/polleylaw"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#1E3432] transition-colors duration-300 hover:bg-[#F4D9C3]"
          >
            Schedule Consultation
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-3 rounded-full border border-white/40 px-8 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-colors duration-300 hover:bg-white/10"
          >
            Explore Services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll down"
        className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 md:flex"
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/30 transition-all duration-300 hover:scale-105 hover:bg-white/10">
          <ArrowDown className="h-5 w-5 text-white" />
        </div>
      </a>
    </section>
  );
};

export default HeroSection;
