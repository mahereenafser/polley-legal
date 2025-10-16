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
            <div className="flex flex-col gap-3 pl-4 md:pl-8 pr-4 md:pr-8 lg:pr-12">
              <p className="text-sm text-text-secondary tracking-[0.1em] uppercase">Services</p>
              <p className="text-base text-text-primary leading-relaxed max-w-md">
                Comprehensive intellectual property protection services to secure your innovations and creative works.
              </p>
            </div>

            {/* Image and Card Container - No padding */}
            <div className="relative">
              {/* Background Image - Full width, no padding */}
              <div className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full">
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
                className="group absolute left-0 top-[calc(60%+60px)] md:top-[calc(65%+70px)] w-[85%] sm:w-[75%] md:w-[80%] lg:w-[85%] bg-gradient-to-br from-[#1E3432] to-[#2D4745] text-white p-4 sm:p-6 md:p-8 rounded-r-xl transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] animate-float overflow-hidden"
              >
                {/* Subtle texture overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.1),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="flex justify-between items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="flex-1">
                      <h4 className="font-display text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal mb-1 sm:mb-2 text-white">Patent Protection Services</h4>
                      <p className="text-xs sm:text-sm text-white/80 mb-2 sm:mb-4">Expert guidance from provisional applications to PCT filing</p>
                    </div>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white/80 transition-transform duration-300 group-hover:translate-x-2 group-hover:scale-110 flex-shrink-0 mt-1" />
                  </div>

                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-2 sm:mb-4">
                    <span className="text-[10px] sm:text-xs px-2 sm:px-3 py-1 sm:py-1.5 bg-white/15 backdrop-blur-sm rounded-full text-white border border-white/20">Software Patents</span>
                    <span className="text-[10px] sm:text-xs px-2 sm:px-3 py-1 sm:py-1.5 bg-white/15 backdrop-blur-sm rounded-full text-white border border-white/20">Biotech & Medical</span>
                    <span className="text-[10px] sm:text-xs px-2 sm:px-3 py-1 sm:py-1.5 bg-white/15 backdrop-blur-sm rounded-full text-white border border-white/20">AI & Blockchain</span>
                  </div>

                  <div className="text-[10px] sm:text-xs text-white/60 font-medium uppercase tracking-wider">
                    Click to explore all patent services →
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
