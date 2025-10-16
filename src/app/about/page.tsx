"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import LiveChatWidget from "@/components/sections/live-chat-widget";
import { useInView } from "react-intersection-observer";

export default function AboutPage() {
  const [danielRef, danielInView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [milesRef, milesInView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[700px] md:min-h-[760px] overflow-hidden">
        <Image
          src="/images/about-hero.jpg"
          alt="Polley IP Law team collaborating"
          fill
          className="absolute inset-0 h-full w-full object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 mx-auto flex h-full w-full max-w-[1280px] flex-col justify-center px-6 sm:px-8 md:px-12 lg:px-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/70 mb-4">
              Meet the Team
            </p>
            <h1 className="font-display text-white text-[44px] sm:text-[56px] md:text-[72px] lg:text-[86px] leading-[1.04] -tracking-[0.01em] mb-6">
              About Polley IP Law
            </h1>
            <p className="text-white/90 text-base sm:text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
              Experienced IP attorneys dedicated to protecting innovators, creators, and businesses across Florida with tailored intellectual property strategies.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <Link
                href="#about-content"
                className="group inline-flex items-center gap-2 font-body text-xs sm:text-sm md:text-base font-light uppercase tracking-[0.08em] text-white transition-all hover:underline"
              >
                <span>Explore Our Story</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 font-body text-xs sm:text-sm md:text-base font-light uppercase tracking-[0.08em] text-white transition-all hover:underline"
              >
                <span>Schedule A Consultation</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>

        <a
          href="#about-content"
          aria-label="Scroll down"
          className="absolute bottom-10 left-1/2 z-20 hidden -translate-x-1/2 md:block"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/30 transition-all duration-300 hover:scale-105 hover:bg-white/10">
            <ArrowDown className="h-6 w-6 text-white" />
          </div>
        </a>
      </section>

      {/* Intro Section - Two Column */}
      <section id="about-content" className="bg-white overflow-hidden">
        <div className="mx-auto max-w-[1440px] relative pt-10 md:pt-[120px]">
          <div className="relative min-h-[500px] lg:min-h-[700px] flex flex-col">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 flex-1">
              {/* Left Column - Text */}
              <div className="flex flex-col pl-4 md:pl-8 pr-4 md:pr-8 lg:pr-12">
                <div className="flex flex-col gap-4 mb-12">
                  <p className="text-label text-text-primary">About us</p>
                  <p className="text-base text-text-secondary max-w-md">
                    Polley IP Law specializes in comprehensive intellectual property protection, guiding inventors and creators through patents, trademarks, and copyrights.
                  </p>
                </div>
              </div>

              {/* Right Column - Large image */}
              <div className="relative -mr-4 md:-mr-8 lg:mr-0 lg:absolute lg:right-0 lg:top-0 lg:w-1/2 h-[500px] lg:h-[700px]">
                <div className="relative h-full w-full rounded-3xl overflow-hidden">
                  <Image
                    src="/images/about-us-1.jpg"
                    alt="Professionals reviewing documents"
                    fill
                    className="object-cover"
                  />
                  {/* Stats overlay */}
                  <div className="absolute bottom-0 left-0 right-0 flex flex-col md:flex-row items-start md:items-end gap-4 md:gap-6 p-6 bg-gradient-to-t from-black/70 via-black/45 to-transparent">
                    <div className="flex flex-col">
                      <h3 className="text-white text-3xl md:text-4xl font-display leading-tight mb-2">
                        Comprehensive IP Protection
                      </h3>
                      <p className="text-base font-medium text-white/90">
                        Trusted legal expertise across Florida
                      </p>
                    </div>
                    <div className="hidden md:block h-12 w-px bg-white/30" />
                    <div className="flex flex-col">
                      <h3 className="text-white text-3xl md:text-4xl font-display leading-tight mb-2">
                        Client-Focused Service
                      </h3>
                      <p className="text-base font-medium text-white/90">
                        Personalized strategies for your innovations
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Title positioned above next section */}
            <div className="pl-4 md:pl-8 pr-4 md:pr-8 lg:pr-12 lg:w-1/2 pb-0">
              <h2 className="text-text-primary">
                Our
                <br />
                Team
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Daniel Polley - Two Column Layout */}
      <section className="bg-white overflow-hidden">
        <div className="mx-auto max-w-[1440px] relative pt-20 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-16 lg:gap-x-24 items-center px-6 md:px-12">
            {/* Left - Image */}
            <div ref={danielRef} className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden">
              <Image
                src="/images/Daniel+S.+Polley+Website+Photo.webp"
                alt="Daniel Polley - Managing Shareholder"
                fill
                className="object-cover"
              />
            </div>

            {/* Right - Text */}
            <div className="flex flex-col justify-center">
              <div className="bg-white border border-[#E8E9E6] shadow-xl rounded-3xl p-8 md:p-10 lg:p-12 max-w-xl">
                <header className="flex justify-between items-center mb-6">
                  <span className="font-body text-base font-medium text-text-primary">Leadership</span>
                  <span className="font-body text-xs sm:text-sm font-semibold uppercase tracking-[0.12em] text-text-secondary">
                    Managing Shareholder
                  </span>
                </header>
                <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-tight text-text-primary mb-4">
                  Daniel Polley
                </h2>
                <p className="font-body text-base sm:text-lg text-text-secondary leading-relaxed">
                  Daniel Polley is the Managing Shareholder at Polley IP Law, P.A. With extensive experience in intellectual property law, he specializes in patents, trademarks, and copyrights. Daniel is dedicated to helping clients protect their innovations and creative works with personalized legal strategies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Miles Polley - Two Column Layout (Text Left) */}
      <section className="bg-white overflow-hidden">
        <div className="mx-auto max-w-[1440px] relative pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-16 lg:gap-x-24 items-center px-6 md:px-12">
            {/* Left - Text */}
            <div className="flex flex-col justify-center">
              <div className="bg-white border border-[#E8E9E6] shadow-xl rounded-3xl p-8 md:p-10 lg:p-12 max-w-xl">
                <header className="flex justify-between items-center mb-6">
                  <span className="font-body text-base font-medium text-text-primary">Collaboration</span>
                  <span className="font-body text-xs sm:text-sm font-semibold uppercase tracking-[0.12em] text-text-secondary">
                    Associate
                  </span>
                </header>
                <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-tight text-text-primary mb-4">
                  Miles Polley
                </h2>
                <p className="font-body text-base sm:text-lg text-text-secondary leading-relaxed">
                  Miles Polley is an Associate at Polley IP Law, P.A. He brings a fresh perspective and keen attention to detail to intellectual property matters. Miles works closely with clients to ensure their IP assets are properly protected and strategically managed.
                </p>
              </div>
            </div>

            {/* Right - Image */}
            <div ref={milesRef} className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden">
              <Image
                src="/images/Miles-polley.webp"
                alt="Miles Polley - Associate"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <LiveChatWidget />
    </main>
  );
}
