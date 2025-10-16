"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, Check, Phone, Wallet, Clock3, Zap, Globe2, Cpu, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import LiveChatWidget from "@/components/sections/live-chat-widget";

export default function PatentsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[700px] md:min-h-[760px] overflow-hidden">
        <Image
          src="/images/patents-hero.jpg"
          alt="Patent attorney Florida providing expert patent services"
          fill
          className="absolute inset-0 h-full w-full object-cover"
          priority
          quality={90}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 mx-auto flex h-full w-full max-w-[960px] flex-col items-center justify-center px-6 text-center sm:px-8 md:px-12">
          <div className="space-y-6">
            <h1 className="font-display text-white text-[44px] sm:text-[56px] md:text-[72px] lg:text-[86px] leading-[1.02] -tracking-[0.01em]">
              Patent Attorney Florida
            </h1>
            <p className="mx-auto max-w-3xl text-base leading-relaxed text-white/90 sm:text-lg md:text-xl">
              Expert patent protection for utility patents, design patents, and provisional patent applications. Same-day emergency patent filing available.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-white px-8 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#1E3432] transition-colors duration-300 hover:bg-[#F4D9C3] sm:w-auto"
              >
                Schedule Free Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact#contact-form"
                className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-white/40 px-8 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-colors duration-300 hover:bg-white/10 sm:w-auto"
              >
                Emergency Filing Available
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        <a
          href="#content"
          aria-label="Scroll down"
          className="absolute bottom-10 left-1/2 z-20 hidden -translate-x-1/2 md:block"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 transition-all duration-300 hover:scale-105">
            <ArrowDown className="h-5 w-5 text-white" />
          </div>
        </a>
      </section>

      {/* Introduction */}
      <section id="content" className="py-20 bg-white">
        <div className="mx-auto max-w-[1000px] px-6 md:px-12">
          <p className="text-xl leading-relaxed text-gray-700 mb-6">
            As a leading <strong>patent attorney in Florida</strong>, Polley IP Law provides comprehensive patent services for inventors, startups, and established businesses. Whether you need a <strong>provisional patent lawyer in Florida</strong> for quick protection or a <strong>utility patent attorney in Florida</strong> for full patent prosecution, our experienced team guides you through every step of the patent process.
          </p>
          <p className="text-xl leading-relaxed text-gray-700">
            From <strong>patent search attorney services in Florida</strong> to <strong>PCT patent filing in Florida</strong>, we specialize in protecting mechanical inventions, software innovations, biotech discoveries, and design concepts. Our <strong>patent prosecution lawyer Florida</strong> team has successfully secured patents across diverse industries including technology, healthcare, manufacturing, and consumer products.
          </p>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20" style={{ backgroundColor: '#e5ebea' }}>
        <div className="mx-auto max-w-[1200px] px-6 md:px-12">
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl mb-12" style={{ color: '#1f3130' }}>
            What's Included in Our Patent Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded">
              <h3 className="font-display text-3xl mb-4" style={{ color: '#1f3130' }}>Provisional Patent Applications</h3>
              <p className="text-lg text-gray-700 mb-4">
                Secure your invention date quickly with our <strong>provisional patent lawyer Florida</strong> services. File within within a day for urgent protection.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 flex-shrink-0 mt-1" style={{ color: '#f8d0b3' }} />
                  <span className="text-gray-700">Same-day emergency filing available</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 flex-shrink-0 mt-1" style={{ color: '#f8d0b3' }} />
                  <span className="text-gray-700">Cost-effective initial protection</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 flex-shrink-0 mt-1" style={{ color: '#f8d0b3' }} />
                  <span className="text-gray-700">year-long window to file utility patent</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded">
              <h3 className="font-display text-3xl mb-4" style={{ color: '#1f3130' }}>Utility Patent Applications</h3>
              <p className="text-lg text-gray-700 mb-4">
                Full patent protection with our <strong>utility patent attorney Florida</strong> team. Comprehensive claims drafting and prosecution.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 flex-shrink-0 mt-1" style={{ color: '#f8d0b3' }} />
                  <span className="text-gray-700">Detailed patent specification writing</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 flex-shrink-0 mt-1" style={{ color: '#f8d0b3' }} />
                  <span className="text-gray-700">Strategic claims drafting</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 flex-shrink-0 mt-1" style={{ color: '#f8d0b3' }} />
                  <span className="text-gray-700">USPTO prosecution and office action responses</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded">
              <h3 className="font-display text-3xl mb-4" style={{ color: '#1f3130' }}>Design Patent Applications</h3>
              <p className="text-lg text-gray-700 mb-4">
                Protect product appearance and ornamental designs with our <strong>design patent lawyer Florida</strong> services.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 flex-shrink-0 mt-1" style={{ color: '#f8d0b3' }} />
                  <span className="text-gray-700">Professional patent drawings</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 flex-shrink-0 mt-1" style={{ color: '#f8d0b3' }} />
                  <span className="text-gray-700">Ornamental design protection</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 flex-shrink-0 mt-1" style={{ color: '#f8d0b3' }} />
                  <span className="text-gray-700">Faster and more affordable than utility patents</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded">
              <h3 className="font-display text-3xl mb-4" style={{ color: '#1f3130' }}>Specialized Patent Services</h3>
              <p className="text-lg text-gray-700 mb-4">
                Industry-specific expertise from our <strong>software patent attorney Florida</strong>, <strong>biotech patent lawyer Florida</strong>, and <strong>mechanical patent attorney Florida</strong> specialists.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 flex-shrink-0 mt-1" style={{ color: '#f8d0b3' }} />
                  <span className="text-gray-700">Software and algorithm patents</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 flex-shrink-0 mt-1" style={{ color: '#f8d0b3' }} />
                  <span className="text-gray-700">Biotechnology and pharmaceutical patents</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 flex-shrink-0 mt-1" style={{ color: '#f8d0b3' }} />
                  <span className="text-gray-700">Mechanical and electrical device patents</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Common Problems We Solve */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-[1200px] px-6 md:px-12">
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl mb-12" style={{ color: '#1f3130' }}>
            Common Patent Problems We Solve
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 border-l-4" style={{ borderColor: '#f8d0b3' }}>
              <h3 className="font-display text-2xl mb-3" style={{ color: '#1f3130' }}>Patent Infringement Defense</h3>
              <p className="text-gray-700">
                Need a <strong>patent infringement attorney Florida</strong>? We defend against infringement claims and protect your business from costly litigation.
              </p>
            </div>
            <div className="p-6 border-l-4" style={{ borderColor: '#f8d0b3' }}>
              <h3 className="font-display text-2xl mb-3" style={{ color: '#1f3130' }}>USPTO Office Action Responses</h3>
              <p className="text-gray-700">
                Our <strong>patent prosecution lawyer Florida</strong> team expertly handles office action rejections to move your application forward.
              </p>
            </div>
            <div className="p-6 border-l-4" style={{ borderColor: '#f8d0b3' }}>
              <h3 className="font-display text-2xl mb-3" style={{ color: '#1f3130' }}>Prior Art Searches</h3>
              <p className="text-gray-700">
                Comprehensive <strong>patent search attorney Florida</strong> services to identify prior art and assess patentability before filing.
              </p>
            </div>
            <div className="p-6 border-l-4" style={{ borderColor: '#f8d0b3' }}>
              <h3 className="font-display text-2xl mb-3" style={{ color: '#1f3130' }}>Patent Invalidity Defense</h3>
              <p className="text-gray-700">
                Defend against patent invalidity challenges with strategic legal arguments and expert technical analysis.
              </p>
            </div>
            <div className="p-6 border-l-4" style={{ borderColor: '#f8d0b3' }}>
              <h3 className="font-display text-2xl mb-3" style={{ color: '#1f3130' }}>International Patent Protection</h3>
              <p className="text-gray-700">
                <strong>PCT patent filing Florida</strong> services for international patent protection across multiple countries.
              </p>
            </div>
            <div className="p-6 border-l-4" style={{ borderColor: '#f8d0b3' }}>
              <h3 className="font-display text-2xl mb-3" style={{ color: '#1f3130' }}>Rush Patent Filings</h3>
              <p className="text-gray-700">
                Need <strong>same day patent attorney Florida</strong>? We offer expedited filing for time-sensitive inventions and competitive situations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20" style={{ backgroundColor: '#e5ebea' }}>
        <div className="mx-auto max-w-[1000px] px-6 md:px-12">
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl mb-12" style={{ color: '#1f3130' }}>
            Our Patent Process
          </h2>
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold text-white" style={{ backgroundColor: '#1f3130' }}>
                1
              </div>
              <div>
                <h3 className="font-display text-2xl mb-3" style={{ color: '#1f3130' }}>Free Initial Consultation</h3>
                <p className="text-lg text-gray-700">
                  Meet with our <strong>patent attorney Florida</strong> team to discuss your invention, assess patentability, and develop a strategic protection plan. Available in-person, by phone, or video conference.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold text-white" style={{ backgroundColor: '#1f3130' }}>
                2
              </div>
              <div>
                <h3 className="font-display text-2xl mb-3" style={{ color: '#1f3130' }}>Patent Search & Analysis</h3>
                <p className="text-lg text-gray-700">
                  Our <strong>patent search attorney Florida</strong> conducts comprehensive prior art searches to identify potential obstacles and strengthen your application strategy.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold text-white" style={{ backgroundColor: '#1f3130' }}>
                3
              </div>
              <div>
                <h3 className="font-display text-2xl mb-3" style={{ color: '#1f3130' }}>Application Preparation & Filing</h3>
                <p className="text-lg text-gray-700">
                  We draft detailed patent specifications, claims, and drawings. Choose provisional filing for immediate protection or utility patent for comprehensive coverage. <strong>Same-day filing available</strong> for urgent cases.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold text-white" style={{ backgroundColor: '#1f3130' }}>
                4
              </div>
              <div>
                <h3 className="font-display text-2xl mb-3" style={{ color: '#1f3130' }}>Patent Prosecution</h3>
                <p className="text-lg text-gray-700">
                  Our <strong>patent prosecution lawyer Florida</strong> team manages all USPTO communications, responds to office actions, and negotiates with examiners to secure your patent grant.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold text-white" style={{ backgroundColor: '#1f3130' }}>
                5
              </div>
              <div>
                <h3 className="font-display text-2xl mb-3" style={{ color: '#1f3130' }}>Patent Grant & Maintenance</h3>
                <p className="text-lg text-gray-700">
                  Celebrate your patent grant! We provide ongoing maintenance support, monitoring services, and enforcement assistance to protect your intellectual property rights.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-[1200px] px-6 md:px-12">
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl mb-12" style={{ color: '#1f3130' }}>
            Why Choose Polley IP Law for Your Patent Needs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-display text-3xl mb-4" style={{ color: '#1f3130' }}>Technical Expertise Across Industries</h3>
              <p className="text-lg text-gray-700 mb-6">
                Our team includes specialists in <strong>software patent attorney Florida</strong>, <strong>biotech patent lawyer Florida</strong>, and <strong>mechanical patent attorney Florida</strong> disciplines. We understand complex technical concepts and translate them into strong patent protection.
              </p>
            </div>
            <div>
              <h3 className="font-display text-3xl mb-4" style={{ color: '#1f3130' }}>Rapid Response for Urgent Needs</h3>
              <p className="text-lg text-gray-700 mb-6">
                When you need an <strong>emergency patent filing Florida</strong> or <strong>urgent patent protection Florida</strong>, we're available. Same-day provisional patent applications and expedited utility patent filings when time is critical.
              </p>
            </div>
            <div>
              <h3 className="font-display text-3xl mb-4" style={{ color: '#1f3130' }}>Proven Track Record</h3>
              <p className="text-lg text-gray-700 mb-6">
                Hundreds of patents successfully prosecuted and granted across diverse technologies. High allowance rates and effective office action responses demonstrate our expertise.
              </p>
            </div>
            <div>
              <h3 className="font-display text-3xl mb-4" style={{ color: '#1f3130' }}>Transparent Pricing & Communication</h3>
              <p className="text-lg text-gray-700 mb-6">
                Clear fee structures with no hidden costs. Regular updates throughout the patent process. Direct access to your assigned attorney for questions and strategy discussions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[#081513] via-[#102220] to-[#07110f]" />
        <div className="absolute -top-32 right-10 h-72 w-72 rounded-full bg-[#F4D9C3]/20 blur-3xl" />
        <div className="absolute -bottom-24 left-10 h-72 w-72 rounded-full bg-[#F4D9C3]/10 blur-3xl" />

        <div className="relative mx-auto max-w-[1200px] px-6 md:px-12">
          <div className="grid gap-12 lg:grid-cols-[0.55fr_1.45fr]">
            <div className="space-y-6 text-white">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
                FAQ & Support
              </span>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-tight" style={{ color: '#F4D9C3' }}>
                Frequently Asked Questions
              </h2>
              <p className="text-base md:text-lg text-white/80 leading-relaxed">
                We tailor every engagement to the urgency, complexity, and goals of your invention. Explore the most common questions founders and product teams ask when partnering with our <strong>patent attorney Florida</strong> team.
              </p>
              <div className="space-y-3">
                {[
                  "Transparent pricing aligned with the stage of your innovation",
                  "Expedited filings and prosecution updates so you never lose momentum",
                  "Strategic enforcement that safeguards the value of your IP assets",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-white/75">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15">
                      <Check className="h-4 w-4 text-[#F4D9C3]" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-xs font-semibold uppercase tracking-[0.26em] text-white transition-colors duration-300 hover:bg-white/20"
              >
                Talk with our team
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {faqItems.map((faq) => {
                const Icon = faq.icon;
                return (
                  <div
                    key={faq.question}
                    className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/10"
                  >
                    <div className="flex items-center gap-3 text-[#F4D9C3]">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F4D9C3]/10">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-[0.28em] text-white/70">
                        FAQ
                      </span>
                    </div>
                    <h3 className="mt-5 font-display text-xl text-white leading-snug">
                      {faq.question}
                    </h3>
                    <p
                      className="mt-3 text-sm leading-relaxed text-white/80"
                      dangerouslySetInnerHTML={{ __html: faq.answer }}
                    />
                    <div className="absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-[#F4D9C3]/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas & Emergency CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#F8FAF9] via-[#EFF4F3] to-[#F8FAF9] py-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(248,208,179,0.25),_transparent_60%)]" />
          <div className="absolute -top-36 right-10 h-64 w-64 rounded-full bg-[#1f3130]/10 blur-3xl" />
          <div className="absolute -bottom-24 left-10 h-56 w-56 rounded-full bg-[#1f3130]/10 blur-3xl" />
        </div>
        <div className="relative mx-auto flex max-w-[1100px] flex-col gap-10 px-6 text-center md:px-10">
          <span className="mx-auto inline-flex items-center gap-2 rounded-full border border-[#1f3130]/15 bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#1f3130]">
            Florida Patent Support
          </span>
          <h2 className="font-display text-3xl leading-tight text-[#1f3130] sm:text-4xl md:text-[44px]">
            Wherever you&apos;re building, we keep innovation protected.
          </h2>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-[#4B5553]">
            From Tampa to Miami and beyond, we provide same-day filings, ongoing strategy, and direct access to a <strong>patent attorney Florida</strong> when decisions can&apos;t wait.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {floridaCities.map((city) => (
              <span
                key={city}
                className="rounded-full border border-[#E5EBE9] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#1f3130]"
              >
                {city}
              </span>
            ))}
          </div>
          <div className="mx-auto grid w-full max-w-3xl gap-4 md:grid-cols-2">
            <a
              href="/contact#contact-form"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#1f3130] bg-[#1f3130] px-6 py-3 text-xs font-semibold uppercase tracking-[0.26em] text-white transition-transform duration-300 hover:scale-[1.02]"
            >
              <Phone className="h-4 w-4" />
              Call For Emergency Filing
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#1f3130]/30 bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.26em] text-[#1f3130] transition-colors duration-300 hover:bg-[#F4D9C3]/40"
            >
              Schedule A Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <p className="text-xs uppercase tracking-[0.3em] text-[#4B5553]">
            Evenings and weekends available for urgent matters.
          </p>
        </div>
      </section>

      <Footer />
      <LiveChatWidget />
    </main>
  );
}

type FAQItem = {
  icon: LucideIcon;
  question: string;
  answer: string;
};

const faqItems: FAQItem[] = [
  {
    icon: Wallet,
    question: "How much does a patent attorney in Florida cost?",
    answer:
      "<strong>Provisional patent lawyer Florida</strong> fees adjust according to invention complexity and desired pace. <strong>Utility patent attorney Florida</strong> engagements require deeper drafting and prosecution, while design patents typically involve a more streamlined scope. We provide detailed quotes after your complimentary consultation so you understand every investment before moving forward.",
  },
  {
    icon: Clock3,
    question: "How long does the patent process take?",
    answer:
      "Provisional patents file within days. Utility patents typically take multiple years from filing to grant. Design patents are faster, usually roughly a year. Our <strong>patent prosecution lawyer Florida</strong> team expedites where possible and keeps you informed throughout.",
  },
  {
    icon: Zap,
    question: "Do you offer same-day patent filing?",
    answer:
      "Yes! As a <strong>same day patent attorney Florida</strong> firm, we can file provisional patent applications within a day for urgent situations. This is critical when facing public disclosure deadlines, competitive threats, or investor meetings.",
  },
  {
    icon: Cpu,
    question: "What types of inventions can you patent?",
    answer:
      "Our <strong>software patent attorney Florida</strong> protects algorithms and applications. Our <strong>biotech patent lawyer Florida</strong> handles pharmaceutical and medical device patents. Our <strong>mechanical patent attorney Florida</strong> covers machines, tools, and devices. We also handle business methods, chemical processes, and more.",
  },
  {
    icon: Globe2,
    question: "Can you help with international patents?",
    answer:
      "Absolutely. Our <strong>PCT patent filing Florida</strong> services provide international patent protection through the Patent Cooperation Treaty. We coordinate filings in specific countries based on your market strategy and budget.",
  },
  {
    icon: ShieldCheck,
    question: "What if someone is infringing my patent?",
    answer:
      "Our <strong>patent infringement attorney Florida</strong> team evaluates infringement claims, sends cease and desist letters, negotiates licensing agreements, and litigates when necessary. We protect your patent rights aggressively and strategically.",
  },
];

const floridaCities = [
  "Tampa",
  "Miami",
  "Orlando",
  "Jacksonville",
  "Fort Lauderdale",
  "West Palm Beach",
  "Tallahassee",
  "Sarasota",
];

const emergencyHighlights: Array<{ icon: LucideIcon; title: string; description: string }> = [
  {
    icon: Zap,
    title: "Rapid Provisional Filing",
    description:
      "Lock in your priority date with same-day provisional applications and expedited utility filings.",
  },
  {
    icon: ShieldCheck,
    title: "Enforcement-Ready Strategy",
    description:
      "Monitor competitors, prepare licensing pathways, and respond decisively to infringement.",
  },
];
