import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative h-screen min-h-[720px] lg:min-h-[800px] text-text-inverse overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
      </video>
      <div
        className="absolute inset-0 bg-black/40"
      />

      <div className="relative z-10 container mx-auto h-full flex flex-col justify-between pt-32 pb-16 lg:pb-24 px-6 sm:px-8 md:px-12">
        <div className="w-full flex justify-end">
          <p className="text-base text-white/90 max-w-[200px] lg:max-w-none lg:w-[440px] text-right">
            Florida's trusted IP attorney for protecting innovations and securing intellectual property rights
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-end gap-8">
          <div className="flex-1 w-full lg:pl-0">
            <h1 className="text-white text-[60px] sm:text-[80px] lg:text-[100px] leading-[0.9] -tracking-[0.02em]" style={{ fontFamily: "'LTC Caslon Pro', serif", fontWeight: 400 }}>
              Own What
              <br />
              You
              <br />
              Create
            </h1>
          </div>

          <div className="hidden lg:flex flex-col items-end gap-6 text-right w-[440px] flex-shrink-0">
            <p className="text-lg max-w-[360px] text-white/90">
              Schedule your free 30-minute consultation to discuss protecting your intellectual property
            </p>
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-2 text-base font-medium text-white"
            >
              <span>Get Started</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              <div className="absolute bottom-[-2px] left-0 h-[1px] w-full origin-left scale-x-0 transform bg-white transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          </div>
        </div>

         <div className="flex flex-col items-start gap-4 lg:hidden">
            <p className="text-lg max-w-sm text-white/90">
                Schedule your free 30-minute consultation to discuss protecting your intellectual property
            </p>
            <Link href="/contact" className="group relative inline-flex items-center gap-2 text-base font-medium text-white">
              <span>Get Started</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              <div className="absolute bottom-[-2px] left-0 h-[1px] w-full origin-left scale-x-0 transform bg-white transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll down"
        className="absolute bottom-10 left-1/2 z-20 hidden -translate-x-1/2 md:block"
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/20 transition-all duration-300 hover:scale-105 hover:bg-white/10">
          <ArrowDown className="h-6 w-6 text-white" />
        </div>
      </a>
    </section>
  );
};

export default HeroSection;