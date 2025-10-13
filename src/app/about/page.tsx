"use client";

import Image from "next/image";
import { ArrowDown } from "lucide-react";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import { useInView } from "react-intersection-observer";

export default function AboutPage() {
  const [danielRef, danielInView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [milesRef, milesInView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen min-h-[720px] lg:min-h-[800px] text-text-inverse overflow-hidden">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6391a347-8b69-465a-b4c4-00b44bb608af-lynford-framer-website/assets/images/Es1kU20wiKwPNdeByqxmWS50F6g-2.jpg"
          alt="Two professionals in a modern office setting"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(75deg, rgba(30, 52, 50, 0.9) 0%, rgba(30, 52, 50, 0) 60%), linear-gradient(180deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.15) 100%)",
          }}
        />

        <div className="relative z-10 container mx-auto h-full flex flex-col justify-between pt-32 pb-16 lg:pb-24 px-6 sm:px-8 md:px-12">
          <div className="w-full flex justify-end">
            <p className="text-base text-white/90 max-w-[200px] lg:max-w-none lg:w-[440px] text-right">
              Meet the dedicated team protecting your intellectual property
            </p>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-end gap-8">
            <div className="flex-1 w-full lg:pl-0">
              <h1 className="font-display text-white text-[70px] sm:text-[90px] lg:text-[120px] leading-[0.9] -tracking-[0.02em]">
                About
                <br />
                Us
              </h1>
            </div>

            <div className="hidden lg:flex flex-col items-end gap-6 text-right w-[440px] flex-shrink-0">
              <p className="text-lg max-w-[360px] text-white/90">
                Experienced intellectual property attorneys committed to protecting your innovations
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start gap-4 lg:hidden">
            <p className="text-lg max-w-sm text-white/90">
              Experienced intellectual property attorneys committed to protecting your innovations
            </p>
          </div>
        </div>

        <a
          href="#about-content"
          aria-label="Scroll down"
          className="absolute bottom-10 left-1/2 z-20 hidden -translate-x-1/2 md:block"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/20 transition-all duration-300 hover:scale-105 hover:bg-white/10">
            <ArrowDown className="h-6 w-6 text-white" />
          </div>
        </a>
      </section>

      {/* Intro Section - Two Column */}
      <section id="about-content" className="bg-white overflow-hidden">
        <div className="mx-auto max-w-[1440px] relative pt-[120px]">
          <div className="relative min-h-[700px] lg:min-h-[900px] flex flex-col">
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
              <div className="relative -mr-4 md:-mr-8 lg:mr-0 lg:absolute lg:right-0 lg:top-0 lg:w-1/2 h-[700px] lg:h-[900px]">
                <div className="relative h-full w-full">
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6391a347-8b69-465a-b4c4-00b44bb608af-lynford-framer-website/assets/images/XpBU0aa8iF6J3llpZtjaN0hJo-3.jpg"
                    alt="Professionals reviewing documents"
                    fill
                    className="object-cover"
                  />
                  {/* Stats overlay */}
                  <div className="absolute bottom-0 left-0 right-0 flex flex-col md:flex-row items-start md:items-end gap-4 md:gap-6 p-6 bg-gradient-to-t from-black/70 via-black/50 to-transparent">
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
      <section className="bg-background-tertiary overflow-hidden">
        <div className="mx-auto max-w-[1440px] relative pt-[120px] pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-16 lg:gap-x-24 items-center px-6 md:px-12">
            {/* Left - Image */}
            <div ref={danielRef} className="relative w-full aspect-[4/5]">
              <Image
                src="/images/daniel-polley.webp"
                alt="Daniel Polley - Managing Shareholder"
                fill
                className="object-cover"
              />
            </div>

            {/* Right - Text */}
            <div className="flex flex-col justify-center">
              <header className="flex justify-between items-center mb-8">
                <span className="font-body text-base font-medium text-text-primary">01</span>
                <span className="font-body text-sm font-semibold uppercase tracking-[0.05em] text-text-accent">
                  Managing Shareholder
                </span>
              </header>
              <div className="max-w-xl">
                <h2 className="font-display text-6xl sm:text-7xl lg:text-8xl leading-none text-text-primary mb-6">
                  Daniel Polley
                </h2>
                <p className="font-body text-lg text-text-primary leading-relaxed">
                  Daniel Polley is the Managing Shareholder at Polley IP Law, P.A. With extensive experience in intellectual property law, he specializes in patents, trademarks, and copyrights. Daniel is dedicated to helping clients protect their innovations and creative works with personalized legal strategies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Miles Polley - Two Column Layout (Text Left) */}
      <section className="bg-background-tertiary overflow-hidden">
        <div className="mx-auto max-w-[1440px] relative pb-[120px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-16 lg:gap-x-24 items-center px-6 md:px-12">
            {/* Left - Text */}
            <div className="flex flex-col justify-center">
              <header className="flex justify-between items-center mb-8">
                <span className="font-body text-base font-medium text-text-primary">02</span>
                <span className="font-body text-sm font-semibold uppercase tracking-[0.05em] text-text-accent">
                  Associate
                </span>
              </header>
              <div className="max-w-xl">
                <h2 className="font-display text-6xl sm:text-7xl lg:text-8xl leading-none text-text-primary mb-6">
                  Miles Polley
                </h2>
                <p className="font-body text-lg text-text-primary leading-relaxed">
                  Miles Polley is an Associate at Polley IP Law, P.A. He brings a fresh perspective and keen attention to detail to intellectual property matters. Miles works closely with clients to ensure their IP assets are properly protected and strategically managed.
                </p>
              </div>
            </div>

            {/* Right - Image */}
            <div ref={milesRef} className="relative w-full aspect-[4/5]">
              <Image
                src="/images/miles-polley.webp"
                alt="Miles Polley - Associate"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
