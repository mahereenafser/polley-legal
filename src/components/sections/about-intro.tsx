'use client';

import Image from "next/image";
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
                <div className="absolute bottom-0 left-0 right-0 flex flex-col items-start gap-4 p-6 bg-gradient-to-t from-black/70 via-black/50 to-transparent">
                  <div
                    className={`flex flex-col transition-all duration-700 ease-out ${
                      inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                    style={{ transitionDelay: '200ms' }}
                  >
                    <p className="text-lg font-medium text-white">
                      Extensive experience protecting intellectual property across Florida
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
      </div>
    </section>
  );
};

export default AboutIntro;