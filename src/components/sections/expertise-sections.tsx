"use client";

import Image from "next/image";

const ExpertiseSections = () => {
  return (
    <section className="bg-white py-24 px-6 md:px-12">
      <div className="container mx-auto max-w-[1440px] space-y-8">
        {/* Deep Knowledge Expertise - Video Background */}
        <div className="relative h-[700px] rounded-3xl overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/videos/deep-knowledge.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Text content */}
          <div className="relative z-10 h-full flex items-center justify-center px-8 md:px-16">
            <div className="max-w-4xl text-center">
              <h2 className="font-display text-white text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
                01 Deep Knowledge Expertise
              </h2>
              <p className="font-body text-white/90 text-lg md:text-xl leading-relaxed">
                Our specialized knowledge in intellectual property law ensures your innovations are protected with precision and care. We stay current with evolving IP regulations.
              </p>
            </div>
          </div>
        </div>

        {/* Client-Focused Accessibility - Image Background */}
        <div className="relative h-[700px] rounded-3xl overflow-hidden">
          <Image
            src="/images/client-focused.jpg"
            alt="Client-focused accessibility"
            fill
            className="object-cover"
            quality={90}
            priority
          />
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Text content */}
          <div className="relative z-10 h-full flex items-center justify-center px-8 md:px-16">
            <div className="max-w-4xl text-center">
              <h2 className="font-display text-white text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
                02 Client-Focused Accessibility
              </h2>
              <p className="font-body text-white/90 text-lg md:text-xl leading-relaxed">
                We make complex IP law clear and accessible. Our team is dedicated to guiding you through every step, ensuring you understand and own your intellectual property rights.
              </p>
            </div>
          </div>
        </div>

        {/* Proven Success Results - Image Background */}
        <div className="relative h-[700px] rounded-3xl overflow-hidden">
          <Image
            src="/images/proven-success.jpg"
            alt="Proven success results"
            fill
            className="object-cover"
            quality={90}
            priority
          />
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Text content */}
          <div className="relative z-10 h-full flex items-center justify-center px-8 md:px-16">
            <div className="max-w-4xl text-center">
              <h2 className="font-display text-white text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
                03 Proven Success Results
              </h2>
              <p className="font-body text-white/90 text-lg md:text-xl leading-relaxed">
                With over 500 successful IP filings and a 98% client satisfaction rate, we deliver results that protect your creative assets and build lasting value for your business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSections;
