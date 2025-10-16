"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, Check, Phone } from "lucide-react";
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
                className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#1E3432] transition-colors duration-300 hover:bg-[#F4D9C3]"
              >
                Schedule Free Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact#contact-form"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/40 px-8 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-colors duration-300 hover:bg-white/10"
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
                Step
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
                Step
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
                Step
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
                Step
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
                Step
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
      <section className="py-20" style={{ backgroundColor: '#e5ebea' }}>
        <div className="mx-auto max-w-[1000px] px-6 md:px-12">
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl mb-12" style={{ color: '#1f3130' }}>
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="font-display text-2xl mb-3" style={{ color: '#1f3130' }}>How much does a patent attorney in Florida cost?</h3>
              <p className="text-lg text-gray-700">
                <strong>Provisional patent lawyer Florida</strong> fees adjust according to invention complexity and desired pace. <strong>Utility patent attorney Florida</strong> engagements require deeper drafting and prosecution, while design patents typically involve a more streamlined scope. We provide detailed quotes after your complimentary consultation so you understand every investment before moving forward.
              </p>
            </div>

            <div>
              <h3 className="font-display text-2xl mb-3" style={{ color: '#1f3130' }}>How long does the patent process take?</h3>
              <p className="text-lg text-gray-700">
                Provisional patents file within days. Utility patents typically take multiple years from filing to grant. Design patents are faster, usually roughly a year. Our <strong>patent prosecution lawyer Florida</strong> team expedites where possible and keeps you informed throughout.
              </p>
            </div>

            <div>
              <h3 className="font-display text-2xl mb-3" style={{ color: '#1f3130' }}>Do you offer same-day patent filing?</h3>
              <p className="text-lg text-gray-700">
                Yes! As a <strong>same day patent attorney Florida</strong> firm, we can file provisional patent applications within within a day for urgent situations. This is critical when facing public disclosure deadlines, competitive threats, or investor meetings.
              </p>
            </div>

            <div>
              <h3 className="font-display text-2xl mb-3" style={{ color: '#1f3130' }}>What types of inventions can you patent?</h3>
              <p className="text-lg text-gray-700">
                Our <strong>software patent attorney Florida</strong> protects algorithms and applications. Our <strong>biotech patent lawyer Florida</strong> handles pharmaceutical and medical device patents. Our <strong>mechanical patent attorney Florida</strong> covers machines, tools, and devices. We also handle business methods, chemical processes, and more.
              </p>
            </div>

            <div>
              <h3 className="font-display text-2xl mb-3" style={{ color: '#1f3130' }}>Can you help with international patents?</h3>
              <p className="text-lg text-gray-700">
                Absolutely. Our <strong>PCT patent filing Florida</strong> services provide international patent protection through the Patent Cooperation Treaty. We coordinate filings in specific countries based on your market strategy and budget.
              </p>
            </div>

            <div>
              <h3 className="font-display text-2xl mb-3" style={{ color: '#1f3130' }}>What if someone is infringing my patent?</h3>
              <p className="text-lg text-gray-700">
                Our <strong>patent infringement attorney Florida</strong> team evaluates infringement claims, sends cease and desist letters, negotiates licensing agreements, and litigates when necessary. We protect your patent rights aggressively and strategically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas & Emergency CTA */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-[1200px] px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-4xl md:text-5xl mb-6" style={{ color: '#1f3130' }}>
                Serving All of Florida
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                While based in Tampa, our <strong>patent attorney Florida</strong> services are available statewide including Miami, Orlando, Jacksonville, Fort Lauderdale, West Palm Beach, Tallahassee, and beyond. We serve clients nationwide and internationally for patent matters.
              </p>
              <p className="text-lg text-gray-700">
                Virtual consultations available for clients anywhere in Florida or across the United States. In-person meetings by appointment at our Tampa office.
              </p>
            </div>
            <div className="p-10 rounded" style={{ backgroundColor: '#1f3130' }}>
              <h3 className="font-display text-3xl md:text-4xl text-white mb-4">
                Need Urgent Patent Protection?
              </h3>
              <p className="text-white/80 text-lg mb-6">
                <strong>Same-day patent filing available.</strong> If you're facing a deadline, public disclosure, or competitive threat, contact us immediately for <strong>emergency patent filing Florida</strong> services.
              </p>
              <div className="flex flex-col gap-4">
                <a
                  href="/contact#contact-form"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-medium rounded transition-all"
                  style={{ backgroundColor: '#f8d0b3', color: '#1f3130' }}
                >
                  <Phone className="h-5 w-5" />
                  Call for Emergency Filing
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded transition-all border-2 text-white"
                  style={{ borderColor: 'rgba(255, 255, 255, 0.3)' }}
                >
                  Schedule Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <LiveChatWidget />
    </main>
  );
}

