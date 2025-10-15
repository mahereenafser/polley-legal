"use client";

import Image from "next/image";
import { useInView } from "react-intersection-observer";

export default function TeamDaniel() {
  const [danielRef, danielInView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section className="bg-background-tertiary overflow-hidden">
      <div className="mx-auto max-w-[1440px] relative py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-16 lg:gap-x-24 items-center px-6 md:px-12">
          {/* Left - Image */}
          <div ref={danielRef} className="relative w-full aspect-[4/5]">
            <Image
              src="/images/daniel-polley.webp"
              alt="Daniel Polley - Managing Shareholder"
              fill
              className="object-cover"
            />
          </div>

          {/* Right - Text */}
          <div className="flex flex-col justify-center">
            <header className="flex justify-between items-center mb-8">
              <span className="font-body text-base font-medium text-text-primary">01</span>
              <span className="font-body text-sm font-semibold uppercase tracking-[0.05em] text-text-accent">
                Managing Shareholder
              </span>
            </header>
            <div className="max-w-xl">
              <h2 className="font-display text-6xl sm:text-7xl lg:text-8xl leading-none text-text-primary mb-6">
                Daniel Polley
              </h2>
              <p className="font-body text-lg text-text-primary leading-relaxed">
                Daniel Polley is the Managing Shareholder at Polley IP Law, P.A. With extensive experience in intellectual property law, he specializes in patents, trademarks, and copyrights. Daniel is dedicated to helping clients protect their innovations and creative works with personalized legal strategies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
