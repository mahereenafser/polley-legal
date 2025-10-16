"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, ShieldCheck } from "lucide-react";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import LiveChatWidget from "@/components/sections/live-chat-widget";
import ContactSection from "@/components/sections/contact-section";
import { PlaceCard } from "@/components/ui/card-22";

const serviceHighlights = [
  {
    title: "Patent Services",
    badge: "Innovation Protection",
    description:
      "End-to-end support from provisional patent lawyer Florida filings to patent infringement attorney Florida enforcement.",
    bullets: [
      "Utility, design, and provisional applications",
      "Fast track patent attorney Florida support for same-day submissions",
      "Patent search attorney Florida diligence for investors and inventors",
      "International PCT patent filing Florida strategy",
    ],
    image: "/images/image-6.jpg",
    href: "/patents",
  },
  {
    title: "Trademark Services",
    badge: "Brand Protection",
    description:
      "From trademark clearance search Florida to emergency cease and desist Florida, we strengthen and defend brands across every channel.",
    bullets: [
      "Federal trademark filing Florida and state trademark registration Florida",
      "Trademark monitoring service Florida with watch alerts",
      "Trademark infringement lawyer Florida enforcement, opposition, and dispute resolution",
      "Urgent trademark search Florida for launch deadlines",
    ],
    image: "/images/image-7.jpg",
    href: "/trademarks",
  },
  {
    title: "Copyright Services",
    badge: "Creative Works",
    description:
      "Rapid protection for content creators, software teams, musicians, publishers, and digital brands.",
    bullets: [
      "Music copyright attorney Florida and software copyright lawyer Florida filings",
      "DMCA takedown lawyer Florida enforcement and licensing",
      "Work for hire attorney Florida agreements and derivative works guidance",
      "Urgent copyright protection Florida for launches and investment rounds",
    ],
    image: "/images/image-8.jpg",
    href: "/copyrights",
  },
];

const blogPreviews = [
  {
    image: "/images/image-4.jpg",
    tags: ["Urgent"],
    insightLabel: "Widely read feature",
    title: "Emergency Services",
    dateRange: "Always Available Support",
    hostType: "Rapid Response",
    isTopRated: true,
    description:
      "Emergency IP protection Florida checklist for founders facing infringement, leaks, or investor diligence.",
    href: "/blog/emergency-ip-protection-without-panic",
  },
  {
    image: "/images/image-2.jpg",
    tags: ["Strategy"],
    insightLabel: "Strategic spotlight",
    title: "IP Strategy",
    dateRange: "Long-term",
    hostType: "Business Growth",
    isTopRated: false,
    description:
      "Startup IP attorney Florida roadmap to align patents, trademarks, and copyrights with funding rounds.",
    href: "/blog/designing-ip-strategy-before-launch",
  },
  {
    image: "/images/image-5.jpg",
    tags: ["Branding"],
    insightLabel: "Brand protection favorite",
    title: "Trademark Law",
    dateRange: "Complete",
    hostType: "Brand Protection",
    isTopRated: true,
    description:
      "Avoid trademark opposition lawyer Florida battles with smarter clearance, monitoring, and enforcement.",
    href: "/blog/building-licensing-programs-that-work",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white text-[#1E3432]">
      <Navigation />

      {/* Hero */}
      <section className="relative h-[92vh] min-h-[820px] overflow-hidden">
        <Image
          src="/images/services-hero.jpg"
          alt="Polley IP Law services overview"
          fill
          className="absolute inset-0 h-full w-full object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 mx-auto flex h-full w-full max-w-[960px] flex-col items-center justify-center gap-8 px-6 text-center sm:px-8 md:px-12">
          <div className="space-y-6 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">Comprehensive IP Counsel</p>
            <h1 className="font-display text-[44px] sm:text-[60px] md:text-[78px] lg:text-[90px] leading-[1.04] text-white">Integrated Services for Patents, Trademarks & Copyrights</h1>
            <p className="mx-auto max-w-3xl text-base leading-relaxed text-white/85 sm:text-lg md:text-xl">
              Boutique attention with national reach—delivering patent attorney Florida precision, trademark attorney Florida brand protection, and copyright registration lawyer Florida experience when you need it.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="#services-overview"
                className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-white px-8 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#1E3432] transition-colors duration-300 hover:bg-[#F4D9C3] sm:w-auto"
              >
                Explore Services
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-white/40 px-8 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-colors duration-300 hover:bg-white/10 sm:w-auto"
              >
                Schedule Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        <a
          href="#services-overview"
          aria-label="Scroll down"
          className="absolute bottom-16 left-1/2 hidden -translate-x-1/2 md:flex"
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/30 transition-all duration-300 hover:scale-105 hover:bg-white/10">
            <ArrowDown className="h-5 w-5 text-white" />
          </div>
        </a>
      </section>

      {/* Introduction */}
      <section id="services-overview" className="py-20 md:py-28">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-6 md:px-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="space-y-6">
            <h2 className="font-display text-3xl sm:text-4xl leading-tight">Full-spectrum Intellectual Property Services</h2>
            <p className="text-base md:text-lg text-[#4B5553] leading-relaxed">
              Partner with a team that moves quickly when you face IP theft attorney Florida concerns, provides strategic direction when you need trade dress infringement Florida protection, and delivers ongoing support for inventor patent attorney Florida goals. Polley IP Law covers every stage of innovation.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {["Emergency trademark filing Florida", "Fast track patent attorney Florida", "Work for hire attorney Florida", "Counterfeiting attorney Florida actions"].map((keyword) => (
                <div key={keyword} className="flex items-center gap-3 rounded-2xl border border-[#E8E9E6] bg-white px-5 py-4 text-sm text-[#1E3432] shadow-sm">
                  <ShieldCheck className="h-4 w-4 text-[#f8d0b3]" />
                  <span>{keyword}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-5 rounded-3xl border border-[#E8E9E6] bg-[#F8FAF9] p-8 text-sm text-[#4B5553] shadow-inner">
            <h3 className="font-display text-2xl text-[#1E3432]">When clients call us</h3>
            <ul className="space-y-3">
              {[
                "Emergency cease and desist Florida support against counterfeiters and stolen trademark Florida problems.",
                "Trademark dispute attorney Florida representation for oppositions, cancellations, and UDRP claims.",
                "Patent invalidity defense Florida strategies when lawsuits target your products.",
                "Software copyright lawyer Florida guidance for SaaS, fintech, and app developer IP lawyer Florida compliance.",
              ].map((item) => (
                <li key={item} className="leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Service Highlights */}
      <section className="bg-[#F0F5F4] py-20 md:py-28">
        <div className="mx-auto max-w-[1200px] px-6 md:px-12 space-y-12">
          <div className="space-y-4 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#7A8380]">Core Services</p>
            <h2 className="font-display text-3xl sm:text-4xl leading-tight">What We Deliver</h2>
            <p className="mx-auto max-w-2xl text-base md:text-lg text-[#4B5553]">
              Every engagement combines proactive monitoring, strategic filings, and decisive enforcement so your IP portfolio keeps pace with growth.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-3">
            {serviceHighlights.map((service) => (
              <div key={service.title} className="flex h-full flex-col overflow-hidden rounded-[28px] border border-white shadow-xl bg-white/90">
                <div className="relative h-56">
                  <Image src={service.image} alt={service.title} fill className="object-cover" />
                  <span className="absolute left-4 top-4 inline-flex rounded-full bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#1E3432]">
                    {service.badge}
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-6 p-8">
                  <div className="space-y-3">
                    <h3 className="font-display text-2xl text-[#1E3432]">{service.title}</h3>
                    <p className="text-sm text-[#4B5553] leading-relaxed">{service.description}</p>
                  </div>
                  <ul className="space-y-2 text-sm text-[#1E3432] leading-relaxed">
                    {service.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#f8d0b3]" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#1E3432] transition-colors duration-300 hover:text-[#f8d0b3]"
                  >
                    View Service
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Support */}
      <section className="py-20 md:py-24">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-12 px-6 md:px-12 lg:flex-row lg:items-center">
          <div className="lg:w-1/2 space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#7A8380]">Industry Insight</p>
            <h2 className="font-display text-3xl sm:text-4xl leading-tight">Tailored to Every Sector</h2>
            <p className="text-base md:text-lg text-[#4B5553] leading-relaxed">
              From tech company patent lawyer Florida guidance to e-commerce trademark attorney Florida enforcement, we align deliverables with industry pressures so your IP works as hard as you do.
            </p>
            <div className="grid gap-3 text-sm text-[#1E3432] sm:grid-cols-2">
              {[
                "Startup IP attorney Florida support for founders and accelerators",
                "Fashion IP attorney Florida protection for apparel, accessories, and licensing",
                "Restaurant trademark lawyer Florida counsel for franchises and hospitality groups",
                "Medical device patent attorney Florida filings for regulated innovations",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-[#E8E9E6] bg-white px-5 py-4 shadow-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 space-y-6 rounded-[32px] bg-[#102220] p-8 text-white">
            <h3 className="font-display text-2xl text-[#f8d0b3]">Rapid Response, Real Results</h3>
            <p className="text-sm text-white/80 leading-relaxed">
              Need emergency IP lawyer near me support? We maintain protocols for emergency trademark filing Florida, urgent trademark search Florida, and fast track patent attorney Florida submissions so you never miss a deadline, demo, or investor opportunity.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-white transition-colors duration-300 hover:text-[#F4D9C3]"
            >
              Talk with an attorney
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Previews */}
      <section className="bg-[#F8FAF9] py-20 md:py-28">
        <div className="mx-auto max-w-[1200px] space-y-10 px-6 md:px-12">
          <div className="flex flex-col gap-4 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#7A8380]">Insights</p>
            <h2 className="font-display text-3xl">Latest IP Strategies</h2>
            <p className="mx-auto max-w-2xl text-base text-[#4B5553]">
              Practical advice on patent prosecution lawyer Florida updates, trademark dilution lawyer Florida tactics, and copyright infringement defense Florida case trends.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {blogPreviews.map((post) => (
              <Link key={post.title} href={post.href}>
                <PlaceCard {...post} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <div className="bg-white">
        <ContactSection />
      </div>

      <Footer />
      <LiveChatWidget />
    </main>
  );
}

