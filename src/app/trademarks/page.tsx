"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, Check, Phone, Shield } from "lucide-react";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";

export default function TrademarksPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] overflow-hidden" style={{ backgroundColor: '#1f3130' }}>
        <div className="absolute inset-0 opacity-30">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6391a347-8b69-465a-b4c4-00b44bb608af-lynford-framer-website/assets/images/qczjTcTGhNr04QiZO8QMBftMhg-6.jpg"
            alt="Trademark attorney Florida providing brand protection services"
            fill
            className="object-cover"
            priority
            quality={85}
            sizes="100vw"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-[1200px] h-full flex flex-col justify-center px-6 md:px-12 py-24">
          <div className="max-w-3xl">
            <h1 className="font-display text-white text-[60px] md:text-[90px] lg:text-[110px] leading-[0.9] -tracking-[0.02em] mb-6">
              Trademark Attorney Florida
            </h1>
            <p className="text-white/90 text-xl md:text-2xl leading-relaxed mb-8">
              Protect your brand with expert trademark registration, federal trademark filing, and trademark monitoring services. Rush trademark search and same-day filing available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded transition-all"
                style={{ backgroundColor: '#f8d0b3', color: '#1f3130' }}
              >
                Free Trademark Consultation
              </Link>
              <a
                href="tel:+1234567890"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-medium rounded transition-all border-2 text-white"
                style={{ borderColor: 'rgba(255, 255, 255, 0.3)' }}
              >
                <Phone className="h-5 w-5" />
                Urgent Trademark Help
              </a>
            </div>
          </div>
        </div>

        <a
          href="#content"
          aria-label="Scroll down"
          className="absolute bottom-8 left-1/2 z-20 hidden -translate-x-1/2 md:block"
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
            As a premier <strong>trademark attorney in Florida</strong>, Polley IP Law provides comprehensive brand protection services for businesses of all sizes. Our <strong>trademark registration lawyer Florida</strong> team specializes in <strong>federal trademark filing Florida</strong>, <strong>state trademark registration Florida</strong>, and strategic brand protection planning. Whether you need a <strong>logo trademark lawyer Florida</strong> or comprehensive <strong>brand name protection Florida</strong>, we guide you through every step of the trademark process.
          </p>
          <p className="text-xl leading-relaxed text-gray-700">
            From initial <strong>trademark clearance search Florida</strong> to <strong>trademark monitoring service Florida</strong> and <strong>trademark renewal attorney Florida</strong> support, we protect what makes your business unique. Our experience includes handling <strong>trademark infringement lawyer Florida</strong> cases, opposition proceedings, and cancellation actions. We serve startups, e-commerce businesses, restaurants, professional services, and established brands across Florida and nationwide.
          </p>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20" style={{ backgroundColor: '#e5ebea' }}>
        <div className="mx-auto max-w-[1200px] px-6 md:px-12">
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl mb-12" style={{ color: '#1f3130' }}>
            What's Included in Our Trademark Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded">
              <Shield className="h-12 w-12 mb-4" style={{ color: '#f8d0b3' }} />
              <h3 className="font-display text-3xl mb-4" style={{ color: '#1f3130' }}>Trademark Clearance Search</h3>
              <p className="text-lg text-gray-700 mb-4">
                Comprehensive <strong>trademark clearance search Florida</strong> to identify conflicts before filing. Our <strong>trademark search attorney Florida</strong> reviews federal, state, and common law marks.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 flex-shrink-0 mt-1" style={{ color: '#f8d0b3' }} />
                  <span className="text-gray-700">USPTO database search</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 flex-shrink-0 mt-1" style={{ color: '#f8d0b3' }} />
                  <span className="text-gray-700">State trademark database review</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 flex-shrink-0 mt-1" style={{ color: '#f8d0b3' }} />
                  <span className="text-gray-700">Common law trademark search</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 flex-shrink-0 mt-1" style={{ color: '#f8d0b3' }} />
                  <span className="text-gray-700">Domain name and social media analysis</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded">
              <Shield className="h-12 w-12 mb-4" style={{ color: '#f8d0b3' }} />
              <h3 className="font-display text-3xl mb-4" style={{ color: '#1f3130' }}>Federal Trademark Registration</h3>
              <p className="text-lg text-gray-700 mb-4">
                Full <strong>federal trademark filing Florida</strong> services with our experienced <strong>trademark registration lawyer Florida</strong>. Nationwide protection for your brand.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 flex-shrink-0 mt-1" style={{ color: '#f8d0b3' }} />
                  <span className="text-gray-700">Strategic class selection</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 flex-shrink-0 mt-1" style={{ color: '#f8d0b3' }} />
                  <span className="text-gray-700">Specimen preparation and filing</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 flex-shrink-0 mt-1" style={{ color: '#f8d0b3' }} />
                  <span className="text-gray-700">Office action responses</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 flex-shrink-0 mt-1" style={{ color: '#f8d0b3' }} />
                  <span className="text-gray-700">Publication and registration</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded">
              <Shield className="h-12 w-12 mb-4" style={{ color: '#f8d0b3' }} />
              <h3 className="font-display text-3xl mb-4" style={{ color: '#1f3130' }}>State Trademark Registration</h3>
              <p className="text-lg text-gray-700 mb-4">
                <strong>State trademark registration Florida</strong> for businesses operating primarily within Florida or needing supplemental state protection.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 flex-shrink-0 mt-1" style={{ color: '#f8d0b3' }} />
                  <span className="text-gray-700">Florida state trademark filing</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 flex-shrink-0 mt-1" style={{ color: '#f8d0b3' }} />
                  <span className="text-gray-700">Faster and more affordable than federal</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 flex-shrink-0 mt-1" style={{ color: '#f8d0b3' }} />
                  <span className="text-gray-700">Local business protection</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded">
              <Shield className="h-12 w-12 mb-4" style={{ color: '#f8d0b3' }} />
              <h3 className="font-display text-3xl mb-4" style={{ color: '#1f3130' }}>Logo & Brand Name Protection</h3>
              <p className="text-lg text-gray-700 mb-4">
                Specialized <strong>logo trademark lawyer Florida</strong> and <strong>brand name protection Florida</strong> services for visual identities and business names.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 flex-shrink-0 mt-1" style={{ color: '#f8d0b3' }} />
                  <span className="text-gray-700">Logo design trademark registration</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 flex-shrink-0 mt-1" style={{ color: '#f8d0b3' }} />
                  <span className="text-gray-700">Business name trademark filing</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 flex-shrink-0 mt-1" style={{ color: '#f8d0b3' }} />
                  <span className="text-gray-700">Tagline and slogan registration</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 flex-shrink-0 mt-1" style={{ color: '#f8d0b3' }} />
                  <span className="text-gray-700">Product name protection</span>
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
            Common Trademark Problems We Solve
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 border-l-4" style={{ borderColor: '#f8d0b3' }}>
              <h3 className="font-display text-2xl mb-3" style={{ color: '#1f3130' }}>Trademark Infringement</h3>
              <p className="text-gray-700">
                Need a <strong>trademark infringement lawyer Florida</strong>? We stop unauthorized use of your brand through cease and desist letters, negotiation, and litigation when necessary.
              </p>
            </div>
            <div className="p-6 border-l-4" style={{ borderColor: '#f8d0b3' }}>
              <h3 className="font-display text-2xl mb-3" style={{ color: '#1f3130' }}>USPTO Office Actions</h3>
              <p className="text-gray-700">
                Our <strong>trademark attorney Florida</strong> team expertly responds to likelihood of confusion rejections, descriptiveness issues, and specimen deficiencies.
              </p>
            </div>
            <div className="p-6 border-l-4" style={{ borderColor: '#f8d0b3' }}>
              <h3 className="font-display text-2xl mb-3" style={{ color: '#1f3130' }}>Trademark Opposition</h3>
              <p className="text-gray-700">
                Defend your trademark application against opposition proceedings or file oppositions to protect your existing marks from confusingly similar applications.
              </p>
            </div>
            <div className="p-6 border-l-4" style={{ borderColor: '#f8d0b3' }}>
              <h3 className="font-display text-2xl mb-3" style={{ color: '#1f3130' }}>Trademark Renewal</h3>
              <p className="text-gray-700">
                Don't lose your trademark! Our <strong>trademark renewal attorney Florida</strong> manages Section 8, 9, and 15 declarations to keep your registration active.
              </p>
            </div>
            <div className="p-6 border-l-4" style={{ borderColor: '#f8d0b3' }}>
              <h3 className="font-display text-2xl mb-3" style={{ color: '#1f3130' }}>Brand Monitoring</h3>
              <p className="text-gray-700">
                Continuous <strong>trademark monitoring service Florida</strong> to detect confusingly similar applications and unauthorized use of your brand.
              </p>
            </div>
            <div className="p-6 border-l-4" style={{ borderColor: '#f8d0b3' }}>
              <h3 className="font-display text-2xl mb-3" style={{ color: '#1f3130' }}>Trademark Disputes</h3>
              <p className="text-gray-700">
                Resolve trademark conflicts through negotiation, coexistence agreements, licensing arrangements, or litigation as a last resort.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20" style={{ backgroundColor: '#e5ebea' }}>
        <div className="mx-auto max-w-[1000px] px-6 md:px-12">
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl mb-12" style={{ color: '#1f3130' }}>
            Our Trademark Registration Process
          </h2>
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold text-white" style={{ backgroundColor: '#1f3130' }}>
                1
              </div>
              <div>
                <h3 className="font-display text-2xl mb-3" style={{ color: '#1f3130' }}>Free Trademark Consultation</h3>
                <p className="text-lg text-gray-700">
                  Discuss your brand protection needs with our <strong>trademark attorney Florida</strong>. We review your mark, assess registrability, and develop a strategic filing plan. Available by phone, video, or in-person.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold text-white" style={{ backgroundColor: '#1f3130' }}>
                2
              </div>
              <div>
                <h3 className="font-display text-2xl mb-3" style={{ color: '#1f3130' }}>Comprehensive Trademark Search</h3>
                <p className="text-lg text-gray-700">
                  Our <strong>trademark clearance search Florida</strong> identifies potential conflicts in federal, state, and common law databases. We provide a detailed report with recommendations for moving forward or modifying your mark.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold text-white" style={{ backgroundColor: '#1f3130' }}>
                3
              </div>
              <div>
                <h3 className="font-display text-2xl mb-3" style={{ color: '#1f3130' }}>Strategic Filing & Classification</h3>
                <p className="text-lg text-gray-700">
                  We prepare and file your <strong>federal trademark filing Florida</strong> or <strong>state trademark registration Florida</strong> application. Proper class selection and specimen preparation maximize approval chances.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold text-white" style={{ backgroundColor: '#1f3130' }}>
                4
              </div>
              <div>
                <h3 className="font-display text-2xl mb-3" style={{ color: '#1f3130' }}>Trademark Prosecution & Defense</h3>
                <p className="text-lg text-gray-700">
                  Our <strong>trademark registration lawyer Florida</strong> team manages USPTO communications, responds to office actions, and defends against oppositions. We keep you informed throughout the 8-12 month process.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold text-white" style={{ backgroundColor: '#1f3130' }}>
                5
              </div>
              <div>
                <h3 className="font-display text-2xl mb-3" style={{ color: '#1f3130' }}>Registration & Ongoing Protection</h3>
                <p className="text-lg text-gray-700">
                  Celebrate your trademark registration! We provide <strong>trademark monitoring service Florida</strong>, renewal reminders, and enforcement support to protect your brand long-term.
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
            Why Choose Polley IP Law for Trademark Protection
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-display text-3xl mb-4" style={{ color: '#1f3130' }}>Extensive Brand Protection Experience</h3>
              <p className="text-lg text-gray-700 mb-6">
                Our <strong>trademark attorney Florida</strong> team has successfully registered hundreds of trademarks across diverse industries. From startups to established brands, we understand the unique challenges businesses face in protecting their identity.
              </p>
            </div>
            <div>
              <h3 className="font-display text-3xl mb-4" style={{ color: '#1f3130' }}>Rush Trademark Services Available</h3>
              <p className="text-lg text-gray-700 mb-6">
                Need <strong>urgent trademark search Florida</strong> or <strong>emergency trademark filing Florida</strong>? We expedite searches and filings when you're facing deadlines, product launches, or competitive threats.
              </p>
            </div>
            <div>
              <h3 className="font-display text-3xl mb-4" style={{ color: '#1f3130' }}>Comprehensive Trademark Services</h3>
              <p className="text-lg text-gray-700 mb-6">
                From initial clearance search to registration, monitoring, renewal, and enforcement—we're your complete <strong>brand name protection Florida</strong> solution. One attorney relationship for all trademark needs.
              </p>
            </div>
            <div>
              <h3 className="font-display text-3xl mb-4" style={{ color: '#1f3130' }}>Transparent Pricing & Clear Communication</h3>
              <p className="text-lg text-gray-700 mb-6">
                Flat-fee trademark registration pricing with no hidden costs. Regular updates throughout the process. Direct attorney access for questions and strategy discussions.
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
              <h3 className="font-display text-2xl mb-3" style={{ color: '#1f3130' }}>How much does a trademark attorney in Florida cost?</h3>
              <p className="text-lg text-gray-700">
                <strong>Trademark registration lawyer Florida</strong> fees typically range from $1,500-$2,500 per class for federal registration, including attorney fees and USPTO filing fees. <strong>Trademark clearance search Florida</strong> costs $500-$1,000. State trademark registration is generally $800-$1,200.
              </p>
            </div>

            <div>
              <h3 className="font-display text-2xl mb-3" style={{ color: '#1f3130' }}>How long does trademark registration take?</h3>
              <p className="text-lg text-gray-700">
                <strong>Federal trademark filing Florida</strong> typically takes 8-12 months from application to registration. <strong>State trademark registration Florida</strong> is faster, usually 2-4 months. Rush processing available for urgent cases.
              </p>
            </div>

            <div>
              <h3 className="font-display text-2xl mb-3" style={{ color: '#1f3130' }}>Do I need federal or state trademark registration?</h3>
              <p className="text-lg text-gray-700">
                <strong>Federal trademark filing Florida</strong> provides nationwide protection and is recommended for most businesses. <strong>State trademark registration Florida</strong> works for local businesses operating only in Florida. We help you determine the best strategy.
              </p>
            </div>

            <div>
              <h3 className="font-display text-2xl mb-3" style={{ color: '#1f3130' }}>Can you protect my logo and business name?</h3>
              <p className="text-lg text-gray-700">
                Yes! Our <strong>logo trademark lawyer Florida</strong> specializes in protecting visual identities, business names, taglines, and product names. We handle both word marks and design marks through <strong>brand name protection Florida</strong> services.
              </p>
            </div>

            <div>
              <h3 className="font-display text-2xl mb-3" style={{ color: '#1f3130' }}>What if someone is using my trademark?</h3>
              <p className="text-lg text-gray-700">
                Our <strong>trademark infringement lawyer Florida</strong> team takes immediate action. We send cease and desist letters, negotiate settlements, file USPTO opposition or cancellation proceedings, and litigate when necessary to stop infringement.
              </p>
            </div>

            <div>
              <h3 className="font-display text-2xl mb-3" style={{ color: '#1f3130' }}>Do you offer trademark monitoring?</h3>
              <p className="text-lg text-gray-700">
                Absolutely. Our <strong>trademark monitoring service Florida</strong> watches for confusingly similar applications and unauthorized use. We alert you to potential conflicts and take action to protect your brand.
              </p>
            </div>

            <div>
              <h3 className="font-display text-2xl mb-3" style={{ color: '#1f3130' }}>When do I need to renew my trademark?</h3>
              <p className="text-lg text-gray-700">
                Trademarks require maintenance filings at years 5-6, 9-10, and every 10 years thereafter. Our <strong>trademark renewal attorney Florida</strong> tracks deadlines and handles all filings to keep your registration active.
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
                Florida Statewide Trademark Services
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Our <strong>trademark attorney Florida</strong> serves businesses throughout the state including Miami, Orlando, Tampa, Jacksonville, Fort Lauderdale, St. Petersburg, Tallahassee, and beyond. We also assist clients nationwide and internationally for federal trademark matters.
              </p>
              <p className="text-lg text-gray-700">
                Whether you're a <strong>startup IP attorney Florida</strong> client launching a new brand or an <strong>e-commerce trademark attorney Florida</strong> client expanding online, we provide tailored brand protection strategies.
              </p>
            </div>
            <div className="p-10 rounded" style={{ backgroundColor: '#1f3130' }}>
              <h3 className="font-display text-3xl md:text-4xl text-white mb-4">
                Need Urgent Trademark Protection?
              </h3>
              <p className="text-white/80 text-lg mb-6">
                <strong>Rush trademark services available.</strong> If you're launching a product, facing a competitor conflict, or need immediate brand protection, contact us for <strong>urgent trademark search Florida</strong> and expedited filing.
              </p>
              <div className="flex flex-col gap-4">
                <a
                  href="tel:+1234567890"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-medium rounded transition-all"
                  style={{ backgroundColor: '#f8d0b3', color: '#1f3130' }}
                >
                  <Phone className="h-5 w-5" />
                  Call for Urgent Filing
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
    </main>
  );
}
