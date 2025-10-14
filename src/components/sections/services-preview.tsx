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
    <section className="bg-white text-text-primary pt-[120px] pb-32 min-h-[800px]">
      <div className="max-w-[1440px] mx-auto">
        <header className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-48 pb-24">
          {/* Left Column - aligned with previous section */}
          <div className="flex flex-col gap-8 pl-4 md:pl-8 pr-4 md:pr-8 lg:pr-12">
            <div className="flex flex-col gap-3">
              <p className="text-sm text-text-secondary tracking-[0.1em] uppercase">Services</p>
              <p className="text-base text-text-primary leading-relaxed max-w-md">
                Comprehensive intellectual property protection services to secure your innovations and creative works.
              </p>
            </div>

            {/* Single Featured Card */}
            <Link
              href="/patents"
              className="group block bg-gradient-to-br from-[#1E3432] to-[#2D4745] text-white p-8 rounded-xl transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] animate-float relative overflow-hidden"
            >
              {/* Subtle texture overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.1),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="flex justify-between items-start gap-4 mb-4">
                  <div className="flex-1">
                    <h4 className="font-display text-2xl md:text-3xl font-normal mb-2 text-white">Patent Protection Services</h4>
                    <p className="text-sm text-white/80 mb-4">Expert guidance from provisional applications to PCT filing</p>
                  </div>
                  <ArrowRight className="w-6 h-6 text-white/80 transition-transform duration-300 group-hover:translate-x-2 group-hover:scale-110 flex-shrink-0 mt-1" />
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs px-3 py-1.5 bg-white/15 backdrop-blur-sm rounded-full text-white border border-white/20">Software Patents</span>
                  <span className="text-xs px-3 py-1.5 bg-white/15 backdrop-blur-sm rounded-full text-white border border-white/20">Biotech & Medical</span>
                  <span className="text-xs px-3 py-1.5 bg-white/15 backdrop-blur-sm rounded-full text-white border border-white/20">AI & Blockchain</span>
                </div>

                <div className="text-xs text-white/60 font-medium uppercase tracking-wider">
                  Click to explore all patent services →
                </div>
              </div>
            </Link>
          </div>
          {/* Right Column - pushed to extreme right */}
          <div className="flex flex-col gap-16 pr-4 md:pr-8">
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

        <div className="border-b border-border-light hidden">
          {serviceItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="group block relative border-t border-border-light"
            >
              <div
                className="absolute top-[-1px] left-0 w-full h-[1px] bg-foreground origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"
              ></div>
              <div className="flex justify-between items-center py-8">
                <div className="flex flex-col gap-1 transition-transform duration-300 ease-in-out group-hover:translate-x-2">
                  <h3 className="font-display text-3xl md:text-[48px] leading-[1.2] font-normal">{item.title}</h3>
                  <p className="text-lg leading-[1.6] text-text-primary">{item.description}</p>
                </div>
                <div className="transform transition-transform duration-300 ease-in-out group-hover:translate-x-3 ml-4">
                  <ArrowRight className="w-8 h-8 md:w-10 md:h-10 text-text-primary shrink-0" />
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <footer className="flex flex-col items-start mt-16 gap-8 px-4 md:px-8">
          <div className="flex flex-col sm:flex-row items-start gap-6">
            <Image
              src="/images/Daniel+S.+Polley+Website+Photo.webp"
              alt="Daniel Polley"
              width={80}
              height={80}
              className="flex-shrink-0 object-cover"
            />
            <div className="max-w-md">
              <p className="font-body text-sm sm:text-base leading-[1.5]">
                "At Polley IP Law, we're committed to delivering exceptional IP protection through personalized service and strategic insight. Our mission is to empower innovators and creators with the legal tools they need to succeed."
              </p>
              <div className="mt-4">
                <p className="font-body text-sm sm:text-base font-semibold leading-[1.4] text-text-primary">Daniel Polley</p>
                <p className="font-body text-sm sm:text-base leading-[1.4] text-text-secondary">Managing Shareholder</p>
              </div>
            </div>
          </div>

          <Link
            href="/services"
            className="group inline-flex items-center justify-center gap-2 text-button bg-primary text-primary-foreground px-8 py-4 rounded-full transition-colors hover:bg-accent-secondary whitespace-nowrap self-center"
          >
            View All Services
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </footer>
      </div>
    </section>
  );
};

export default ServicesPreview;