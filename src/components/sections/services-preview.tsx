import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const serviceItems = [
  {
    title: 'Patents',
    description: 'Navigate the complex world of patents with ease. Our expert guidance supports your ideas from concept to protection.',
    href: '/services#patents',
  },
  {
    title: 'Trademarks',
    description: 'Protect your brand with our dedicated team, leading you through the complexities of trademark law.',
    href: '/services#trademarks',
  },
  {
    title: 'Copyrights',
    description: 'Discover peace of mind knowing your works are safeguarded by experts who truly care about your creative output.',
    href: '/services#copyrights',
  },
];

const ServicesPreview = () => {
  return (
    <section className="bg-secondary text-text-primary py-20 px-6 md:px-0">
      <div className="max-w-[1200px] mx-auto px-0 md:px-12">
        <header className="flex flex-col md:flex-row md:gap-8 pb-16">
          <div className="flex-1">
            <p className="text-label text-text-secondary tracking-[0.1em]">Services</p>
          </div>
          <div className="flex-[2_1_0%] pt-4 md:pt-0">
            <p className="text-body-large text-text-primary">
              Comprehensive intellectual property protection services to secure your innovations and creative works.
            </p>
          </div>
        </header>

        <div className="border-b border-border-light">
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
                <div className="flex flex-col gap-1">
                  <h3 className="font-display text-3xl md:text-[48px] leading-[1.2] font-normal">{item.title}</h3>
                  <p className="text-lg leading-[1.6] text-text-primary">{item.description}</p>
                </div>
                <div className="transform transition-transform duration-300 ease-in-out group-hover:translate-x-2.5 ml-4">
                  <ArrowRight className="w-8 h-8 md:w-10 md:h-10 text-text-primary shrink-0" />
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <footer className="flex flex-col md:flex-row justify-between items-start md:items-center mt-16 gap-8 md:gap-4">
          <div className="flex items-center gap-6">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6391a347-8b69-465a-b4c4-00b44bb608af-lynford-framer-website/assets/images/C8lenn1fyhQXk44X9WHkW8hgMQ-4.webp"
              alt="Tech Startup Founder"
              width={80}
              height={80}
              className="rounded-full flex-shrink-0 object-cover"
            />
            <div className="max-w-md">
              <p className="font-display italic text-2xl leading-[1.5]">
                "Polley IP Law made the patent process seamless. Their expertise helped us secure protection for our core technology quickly and effectively."
              </p>
              <div className="mt-4">
                <p className="text-sm font-semibold leading-[1.4] text-text-primary">Sarah Chen</p>
                <p className="text-sm leading-[1.4] text-text-secondary">Founder, TechVenture</p>
              </div>
            </div>
          </div>

          <Link
            href="/services"
            className="group shrink-0 inline-flex items-center justify-center gap-2 text-button bg-primary text-primary-foreground px-8 py-4 rounded-full transition-colors hover:bg-accent-secondary whitespace-nowrap"
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