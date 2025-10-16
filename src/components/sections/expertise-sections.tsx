"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const ExpertiseSections = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Transform values for layered sliding effect
  // Section 1 (Deep Knowledge) - fades out as section 2 comes in
  const section1Opacity = useTransform(scrollYProgress, [0, 0.25, 0.33], [1, 1, 0]);

  // Section 2 slides up over section 1
  const section2Y = useTransform(scrollYProgress, [0, 0.33], ["100vh", "0vh"]);
  const section2Scale = useTransform(scrollYProgress, [0, 0.33], [0.8, 1]);
  const section2Opacity = useTransform(scrollYProgress, [0, 0.1, 0.33, 0.58, 0.66], [0, 0, 1, 1, 0]);

  // Section 3 slides up over section 2 and stays locked
  const section3Y = useTransform(scrollYProgress, [0.33, 0.66], ["100vh", "0vh"]);
  const section3Scale = useTransform(scrollYProgress, [0.33, 0.66], [0.8, 1]);
  const section3Opacity = useTransform(scrollYProgress, [0.33, 0.45, 0.66, 1], [0, 0, 1, 1]);

  return (
    <section
      ref={containerRef}
      className="relative bg-white"
      style={{ height: "300vh" }} // Extended height for scroll-based animation
    >
      <div className="sticky top-0 h-screen flex items-center justify-center px-6 md:px-12 overflow-hidden">
        <div className="container mx-auto max-w-[1440px] relative h-[550px]">
          {/* Deep Knowledge Expertise - Video Background (Base Layer) */}
          <motion.div
            className="absolute inset-0 w-full h-full z-10"
            style={{ opacity: section1Opacity }}
          >
            <div className="relative h-full rounded-3xl overflow-hidden">
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

              {/* Content container */}
              <div className="relative z-10 h-full flex flex-col px-8 md:px-16 py-12">
                {/* Top-left label */}
                <div className="flex-shrink-0">
                  <p className="font-body text-white text-base uppercase tracking-wider mb-2">
                    Deep Knowledge Focus
                  </p>
                  {/* Thin decorative line */}
                  <div className="w-full h-px bg-white/20" />
                </div>

                {/* Card on the right side - vertically centered */}
                <div className="flex-1 flex items-center justify-end">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 md:p-10 max-w-md w-full md:w-auto shadow-2xl">
                    <h3 className="font-display text-3xl md:text-4xl text-text-primary mb-4">
                      Expertise
                    </h3>
                    <p className="font-body text-base md:text-lg text-text-primary leading-relaxed mb-6">
                      Our specialized knowledge in intellectual property law ensures your innovations are protected with precision and care. We stay current with evolving IP regulations.
                    </p>
                    <a
                      href="/services"
                      className="inline-flex items-center gap-2 font-body text-sm font-bold uppercase tracking-wider text-text-primary hover:text-text-accent transition-colors duration-300 group"
                    >
                      Learn More
                      <svg
                        className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Client-Focused Accessibility - Image Background (Layer 2) */}
          <motion.div
            className="absolute inset-0 w-full h-full z-20"
            style={{
              y: section2Y,
              scale: section2Scale,
              opacity: section2Opacity,
            }}
          >
            <div className="relative h-full rounded-3xl overflow-hidden shadow-2xl">
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

              {/* Content container */}
              <div className="relative z-10 h-full flex flex-col px-8 md:px-16 py-12">
                {/* Top-left label */}
                <div className="flex-shrink-0">
                  <p className="font-body text-white text-base uppercase tracking-wider mb-2">
                    Client-Focused Accessibility
                  </p>
                  {/* Thin decorative line */}
                  <div className="w-full h-px bg-white/20" />
                </div>

                {/* Card on the right side - vertically centered */}
                <div className="flex-1 flex items-center justify-end">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 md:p-10 max-w-md w-full md:w-auto shadow-2xl">
                    <h3 className="font-display text-3xl md:text-4xl text-text-primary mb-4">
                      Accessibility
                    </h3>
                    <p className="font-body text-base md:text-lg text-text-primary leading-relaxed mb-6">
                      We make complex IP law clear and accessible. Our team is dedicated to guiding you through every step, ensuring you understand and own your intellectual property rights.
                    </p>
                    <a
                      href="/services"
                      className="inline-flex items-center gap-2 font-body text-sm font-bold uppercase tracking-wider text-text-primary hover:text-text-accent transition-colors duration-300 group"
                    >
                      Learn More
                      <svg
                        className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Proven Success Results - Image Background (Layer 3) */}
          <motion.div
            className="absolute inset-0 w-full h-full z-30"
            style={{
              y: section3Y,
              scale: section3Scale,
              opacity: section3Opacity,
            }}
          >
            <div className="relative h-full rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/signing.jpg"
                alt="Proven success results"
                fill
                className="object-cover"
                quality={90}
                priority
              />
              {/* Dark overlay for readability */}
              <div className="absolute inset-0 bg-black/50" />

              {/* Content container */}
              <div className="relative z-10 h-full flex flex-col px-8 md:px-16 py-12">
                {/* Top-left label */}
                <div className="flex-shrink-0">
                  <p className="font-body text-white text-base uppercase tracking-wider mb-2">
                    Proven Success Stories
                  </p>
                  {/* Thin decorative line */}
                  <div className="w-full h-px bg-white/20" />
                </div>

                {/* Card on the right side - vertically centered */}
                <div className="flex-1 flex items-center justify-end">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 md:p-10 max-w-md w-full md:w-auto shadow-2xl">
                    <h3 className="font-display text-3xl md:text-4xl text-text-primary mb-4">
                      Results
                    </h3>
                    <p className="font-body text-base md:text-lg text-text-primary leading-relaxed mb-6">
                      We deliver results that protect your creative assets and build lasting value for your business. Our services ensure that your intellectual property is well-protected and your brand is safeguarded against infringement.
                    </p>
                    <a
                      href="/services"
                      className="inline-flex items-center gap-2 font-body text-sm font-bold uppercase tracking-wider text-text-primary hover:text-text-accent transition-colors duration-300 group"
                    >
                      Learn More
                      <svg
                        className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSections;
