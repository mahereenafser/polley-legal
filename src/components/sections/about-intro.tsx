'use client';

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useInView } from "react-intersection-observer";

const AboutIntro = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section className="bg-white overflow-hidden">
      <div className="mx-auto max-w-[1440px] relative pt-[120px]">
        <div className="relative min-h-[700px] lg:min-h-[900px] flex flex-col">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 flex-1">
            {/* Left Column - Text with space for content */}
            <div className="flex flex-col pl-4 md:pl-8 pr-4 md:pr-8 lg:pr-12">
              <div className="flex flex-col gap-4 mb-12">
                <p className="text-label text-text-primary">About us</p>
                <p className="text-base text-text-secondary max-w-md">
                  As Florida's leading intellectual property attorney, Polley IP Law specializes in comprehensive IP protection, guiding inventors and creators through patents, trademarks, and copyrights with expert legal representation.
                </p>
              </div>
            </div>

            {/* Right Column - Large image filling right side to edge */}
            <div className="relative -mr-4 md:-mr-8 lg:mr-0 lg:absolute lg:right-0 lg:top-0 lg:w-1/2 h-[700px] lg:h-[900px] p-2">
              <div ref={ref} className="relative h-full w-full rounded-xl overflow-hidden">
                <Image
                  src="/images/about-us.jpg"
                  alt="Professionals reviewing documents"
                  fill
                  className="object-cover"
                />
                {/* Animated text overlay at bottom of image */}
                <div className="absolute bottom-0 left-0 right-0 flex flex-col md:flex-row items-start md:items-end gap-4 md:gap-6 p-6 bg-gradient-to-t from-black/70 via-black/50 to-transparent">
                  <div
                    className={`flex flex-col transition-all duration-700 ease-out ${
                      inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                    style={{ transitionDelay: '200ms' }}
                  >
                    <h3 className="text-white text-3xl md:text-4xl font-display leading-tight mb-2">
                      Comprehensive IP Protection
                    </h3>
                    <p className="text-base font-medium text-white/90">
                      Trusted legal expertise across Florida
                    </p>
                  </div>
                  <div className="hidden md:block h-12 w-px bg-white/30" />
                  <div
                    className={`flex flex-col transition-all duration-700 ease-out ${
                      inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                    style={{ transitionDelay: '400ms' }}
                  >
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

          {/* "Protecting Innovation" positioned right above Services section */}
          <div className="pl-4 md:pl-8 pr-4 md:pr-8 lg:pr-12 lg:w-1/2 pb-0">
            <h2 className="text-text-primary">
              Protecting
              <br />
              Innovation
            </h2>
          </div>
        </div>

        {/* Team Members Section */}
        <div className="px-4 md:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full">
            {/* Left Column - Daniel Polley */}
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <Image
                src="/images/Daniel+S.+Polley+Website+Photo.webp"
                alt="Daniel Polley"
                width={80}
                height={80}
                className="flex-shrink-0 object-cover"
              />
              <div className="max-w-md">
                <p className="font-body text-sm sm:text-base leading-[1.5] text-text-primary">
                  "At Polley IP Law, we're committed to delivering exceptional IP protection through personalized service and strategic insight. Our mission is to empower innovators and creators with the legal tools they need to succeed."
                </p>
                <div className="mt-4">
                  <p className="font-body text-sm sm:text-base font-semibold leading-[1.4] text-text-primary">Daniel Polley</p>
                  <p className="font-body text-sm sm:text-base leading-[1.4] text-text-secondary">Managing Shareholder</p>
                </div>
              </div>
            </div>

            {/* Right Column - Miles Polley */}
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <Image
                src="/images/Miles-polley.webp"
                alt="Miles Polley"
                width={80}
                height={80}
                className="flex-shrink-0 object-cover"
              />
              <div className="max-w-md">
                <p className="font-body text-sm sm:text-base leading-[1.5] text-text-primary">
                  "Working at Polley IP Law means being part of a team that values precision, innovation, and client success. Every day, we help protect the ideas that shape the future."
                </p>
                <div className="mt-4">
                  <p className="font-body text-sm sm:text-base font-semibold leading-[1.4] text-text-primary">Miles Polley</p>
                  <p className="font-body text-sm sm:text-base leading-[1.4] text-text-secondary">Associate</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <Link
              href="/about"
              className="group inline-flex items-center justify-center gap-2 text-button bg-primary text-primary-foreground px-8 py-4 rounded-full transition-colors hover:bg-accent-secondary whitespace-nowrap"
            >
              Read More
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;