"use client";

import Image from "next/image";
import { useInView } from "react-intersection-observer";

export default function TeamMiles() {
  const [milesRef, milesInView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section className="bg-background-tertiary overflow-hidden">
      <div className="mx-auto max-w-[1440px] relative pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-16 lg:gap-x-24 items-center px-6 md:px-12">
          {/* Left - Text */}
          <div className="flex flex-col justify-center">
            <header className="flex justify-between items-center mb-8">
              <span className="font-body text-base font-medium text-text-primary">02</span>
              <span className="font-body text-sm font-semibold uppercase tracking-[0.05em] text-text-accent">
                Associate
              </span>
            </header>
            <div className="max-w-xl">
              <h2 className="font-display text-6xl sm:text-7xl lg:text-8xl leading-none text-text-primary mb-6">
                Miles Polley
              </h2>
              <p className="font-body text-lg text-text-primary leading-relaxed">
                Miles Polley is an Associate at Polley IP Law, P.A. He brings a fresh perspective and keen attention to detail to intellectual property matters. Miles works closely with clients to ensure their IP assets are properly protected and strategically managed.
              </p>
            </div>
          </div>

          {/* Right - Image */}
          <div ref={milesRef} className="relative w-full aspect-[4/5]">
            <Image
              src="/images/miles-polley.webp"
              alt="Miles Polley - Associate"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
