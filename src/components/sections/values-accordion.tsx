"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const valuesData = [
  {
    title: "Integrity",
    subtitle: "Trust",
    description:
      "We maintain absolute transparency and ethical clarity so every client trusts our advice, fees, and long-term intellectual property roadmap.",
    keywords: "integrity • trust • ethical IP counsel",
    image: "/images/image-6.jpg",
  },
  {
    title: "Innovation",
    subtitle: "Forward-thinking",
    description:
      "From emergency trademark filing Florida to rush patent filing Florida, we combine creative legal strategy with technology to respond the second opportunity or risk appears.",
    keywords: "innovation • emergency IP protection • rush filings",
    image: "/images/image-7.jpg",
  },
  {
    title: "Excellence",
    subtitle: "Best-in-class",
    description:
      "Our team delivers best-in-class patent attorney Florida, trademark attorney Florida, and copyright attorney Florida representation—meticulous filings, decisive enforcement, and proactive monitoring.",
    keywords: "excellence • patent attorney Florida • trademark attorney Florida",
    image: "/images/image-8.jpg",
  },
];

const ValuesAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#081615] via-[#102220] to-[#081615] py-20 md:py-32 text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.6) 1px, transparent 0)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="container relative z-10">
        <div className="max-w-3xl space-y-4 mb-16">
          <p className="text-[#f8d0b3] text-sm font-semibold uppercase tracking-[0.3em]">Our Values</p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-tight">What Drives Us</h2>
          <p className="text-base md:text-lg text-white/80 max-w-2xl">
            We combine uncompromising ethics, innovative thinking, and elite execution so every emergency IP protection Florida request or long-term portfolio strategy receives white-glove guidance.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {valuesData.map((item, index) => {
            const isActive = activeIndex === index;

            return (
              <motion.button
                key={item.title}
                type="button"
                onMouseEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
                className="group relative overflow-hidden rounded-[32px] border border-white/10 text-left focus:outline-none"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                aria-pressed={isActive}
              >
                <motion.div
                  animate={{ scale: isActive ? 1 : 0.95, opacity: isActive ? 1 : 0.75 }}
                  transition={{ type: "spring", stiffness: 200, damping: 22 }}
                  className="relative h-full min-h-[420px]"
                >
                  <Image
                    src={item.image}
                    alt={`${item.title} at Polley IP Law`}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/85" />

                  <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-8">
                    <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.3em] text-white/60">
                      <span>{item.subtitle}</span>
                      <span className="hidden sm:block text-right">{item.keywords}</span>
                    </div>

                    <div className="space-y-5">
                      <h3 className="font-display text-3xl sm:text-4xl leading-tight text-[#f8d0b3]">{item.title}</h3>
                      <p className="text-sm sm:text-base text-white/85 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValuesAccordion;
