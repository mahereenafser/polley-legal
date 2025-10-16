import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const serviceItems = [
  {
    title: 'Patents',
    description: 'Expert patent services including provisional patent applications, expedited filing, patent searches, PCT applications, and office action responses. Specializing in software, mobile app, AI, blockchain, biotech, medical device, pharmaceutical, and product design patents.',
    href: '/patents',
  },
  {
    title: 'Trademarks',
    description: 'Comprehensive trademark protection with international registration, infringement defense, opposition services, and cease and desist representation. Serving fashion, food & beverage, cosmetics, cannabis, NFT, CBD, and esports industries.',
    href: '/trademarks',
  },
  {
    title: 'Copyrights',
    description: 'Strategic copyright protection for creative works, digital content, and original expressions. Safeguarding your artistic, literary, and digital innovations with expert legal guidance and comprehensive registration services.',
    href: '/copyrights',
  },
];

const featuredServices = [
  {
    title: 'Patent Protection',
    subtitle: 'Provisional Applications & PCT Filing',
    href: '/patents',
    keywords: ['Software Patents', 'Biotech Patents', 'AI & Blockchain']
  },
  {
    title: 'Trademark Services',
    subtitle: 'International Registration & Defense',
    href: '/trademarks',
    keywords: ['Brand Protection', 'Cannabis & NFT', 'Fashion & Cosmetics']
  },
  {
    title: 'Copyright Law',
    subtitle: 'Creative Works & Digital Content',
    href: '/copyrights',
    keywords: ['Digital Protection', 'DMCA Services', 'Fair Use Analysis']
  }
];

const ServicesPreview = () => {
  return (
    <section className="bg-white text-text-primary pt-6 md:pt-[120px] pb-6 md:pb-24 lg:pb-32 md:min-h-[800px]">
      <div className="max-w-[1440px] mx-auto">
        <header className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-48 pb-6 md:pb-24">
          {/* Left Column - aligned with previous section */}
          <div className="flex flex-col gap-8">
            {/* Text with padding for alignment */}
            <div className="flex flex-col gap-3 pl-0 md:pl-8 pr-4 md:pr-8 lg:pr-12">
              <p className="text-sm text-text-secondary tracking-[0.1em] uppercase">Services</p>
              <p className="text-base text-text-primary leading-relaxed max-w-md">
                Comprehensive intellectual property protection services to secure your innovations and creative works.
              </p>
            </div>

            {/* Image and Card Container - No padding */}
            <div className="relative">
              {/* Background Image - Full width, no padding */}
              <div className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full overflow-hidden rounded-3xl pr-4 sm:pr-0">
                <Image
                  src="/images/services.jpg"
                  alt="Services"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Floating Card - Positioned to overlap image (tape effect) */}
              <Link
                href="/patents"
                className="group absolute left-0 top-[calc(60%+60px)] md:top-[calc(65%+70px)] w-[70%] sm:w-[85%] md:w-[80%] lg:w-[85%] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#081615] via-[#12302C] to-[#081615] text-white shadow-[0_40px_80px_-40px_rgba(0,0,0,0.8)] transition-all duration-500 hover:shadow-[0_45px_90px_-35px_rgba(12,24,22,0.9)] hover:scale-[1.02]"
              >
                <div className="absolute inset-0 opacity-40 mix-blend-overlay" style={{
                  backgroundImage: 'radial-gradient(circle at 30% 30%, rgba(248,208,179,0.4), transparent 55%)'
                }} />

                <div className="relative z-10 space-y-4 p-5 sm:p-8">
                  <div className="flex items-start justify-between gap-3 sm:gap-4">
                    <div className="flex-1 space-y-2">
                      <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#f8d0b3]">Highlighted</span>
                      <h4 className="font-display text-xl sm:text-2xl md:text-3xl text-white">Patent Protection Services</h4>
                      <p className="text-xs sm:text-sm text-white/75">
                        Expert guidance from provisional patent lawyer Florida filings to patent infringement attorney Florida enforcement strategies.
                      </p>
                    </div>
                    <ArrowRight className="mt-1 h-6 w-6 flex-shrink-0 text-[#f8d0b3] transition-transform duration-300 group-hover:translate-x-2 group-hover:scale-110" />
                  </div>

                  <div className="grid grid-cols-1 gap-2 text-[11px] uppercase tracking-[0.2em] text-white/70 sm:grid-cols-3">
                    <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-center">Software Patents</span>
                    <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-center">Biotech & Medical</span>
                    <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-center">AI & Blockchain</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          {/* Right Column - pushed to extreme right */}
          <div className="flex flex-col pl-4 md:pl-0 pr-4 md:pr-8 mt-10 md:mt-0 space-y-6 md:space-y-16">
            {serviceItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="group block py-4"
              >
                <div className="flex justify-between items-start gap-4">
                  <div className="flex flex-col gap-3 transition-transform duration-300 ease-in-out group-hover:translate-x-2">
                    <h3 className="font-display text-[36px] sm:text-[42px] md:text-[48px] lg:text-[54px] leading-[1.1] font-normal">{item.title}</h3>
                    <p className="text-sm sm:text-base leading-relaxed text-text-secondary">{item.description}</p>
                  </div>
                  <div className="transform transition-transform duration-300 ease-in-out group-hover:translate-x-3 flex-shrink-0 pt-4">
                    <ArrowRight className="w-6 h-6 sm:w-8 sm:h-8 text-text-primary" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </header>
      </div>
    </section>
  );
};

export default ServicesPreview;

