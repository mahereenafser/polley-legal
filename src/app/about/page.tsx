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

        <div className="relative z-10 mx-auto flex h-full w-full max-w-[960px] flex-col items-center justify-center px-6 text-center sm:px-8 md:px-12">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/70">
              Meet the Team
            </p>
            <h1 className="font-display text-white text-[44px] sm:text-[56px] md:text-[72px] lg:text-[86px] leading-[1.04] -tracking-[0.01em]">
              About Polley IP Law
            </h1>
            <p className="mx-auto max-w-3xl text-base leading-relaxed text-white/90 sm:text-lg md:text-xl">
              Experienced IP attorneys dedicated to protecting innovators, creators, and businesses across Florida with tailored intellectual property strategies.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="#about-content"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#1E3432] transition-colors duration-300 hover:bg-[#F4D9C3]"
              >
                Explore Our Story
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/40 px-8 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-colors duration-300 hover:bg-white/10"
              >
                Schedule A Consultation
                <ArrowRight className="h-4 w-4" />
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

      {/* Intro Section */}
      <section id="about-content" className="bg-white py-20 md:py-28">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-16 px-6 sm:px-8 lg:px-10">
          <div className="grid gap-10 rounded-[40px] border border-[#E5EBE9] bg-[#F8FAF9] p-8 shadow-[0_30px_80px_-60px_rgba(15,32,31,0.7)] md:p-12 lg:grid-cols-[1.1fr_minmax(0,0.9fr)] lg:items-center">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#1E3432]">
                Polley IP Law
              </span>
              <h2 className="font-display text-[2.4rem] leading-tight text-[#102220] sm:text-[2.8rem] md:text-[3.1rem]">
                Comprehensive IP protection powered by strategic counsel and close partnership.
              </h2>
              <p className="max-w-[620px] font-body text-base leading-relaxed text-[#3B4D4A] sm:text-lg">
                As Florida&apos;s leading intellectual property attorney, Polley IP Law guides inventors, founders, and established brands through patents, trademarks, and copyrights with a calm, proactive approach that keeps business momentum intact.
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  {
                    title: "Comprehensive IP Protection",
                    description: "Trusted legal expertise across Florida, from emergency filings to global portfolio strategy.",
                  },
                  {
                    title: "Client-Focused Service",
                    description: "Personalized guidance that translates complex IP questions into confident decisions.",
                  },
                  {
                    title: "Forward-looking partnerships",
                    description: "We align filings, enforcement, and licensing with your go-to-market and investor goals.",
                  },
                  {
                    title: "Clear communication",
                    description: "Every engagement comes with transparent updates, timelines, and next-steps checklists.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-[#E0E7E4] bg-white px-5 py-4 shadow-sm transition-transform duration-300 hover:-translate-y-1"
                  >
                    <h3 className="font-display text-xl text-[#1E3432]">{item.title}</h3>
                    <p className="mt-2 font-body text-sm leading-relaxed text-[#4F615D]">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-[420px] overflow-hidden rounded-[32px] bg-[#0F201F] shadow-[0_40px_90px_-50px_rgba(10,32,30,0.75)] sm:h-[480px]">
              <Image
                src="/images/about-us-1.jpg"
                alt="Polley IP Law team reviewing strategies"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F201F] via-[#0F201F]/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/10 p-6 backdrop-blur-lg">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                  Strategic IP leadership
                </p>
                <p className="mt-3 font-display text-2xl text-white">
                  Measurable protection for the ideas shaping tomorrow’s products and services.
                </p>
                <p className="mt-4 font-body text-sm text-white/75 leading-relaxed">
                  From first filing to multi-jurisdictional enforcement, we equip clients with responsive counsel and airtight documentation so innovation keeps its pace.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#76837F]">Our Team</p>
            <h2 className="font-display text-[2.6rem] leading-tight text-[#102220] sm:text-[3rem]">
              Legal partners invested in your growth
            </h2>
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
