import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const CtaContact = () => {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-[#071412] via-[#12302C] to-[#071412]" />
      <div
        className="absolute inset-y-0 right-[-20%] hidden w-[60%] translate-y-6 rotate-6 overflow-hidden rounded-full bg-white/5 blur-3xl md:block"
      />

      <div className="container relative">
        <div className="grid gap-12 overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl text-white shadow-[0_40px_80px_-40px_rgba(0,0,0,0.6)] lg:grid-cols-[minmax(0,1fr)_320px] xl:grid-cols-[minmax(0,1fr)_360px]">
          <div className="flex flex-col gap-8 p-8 md:p-12 lg:p-16">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">Get Started</p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-tight">
                Ready to Protect Your IP?
              </h2>
              <p className="font-body text-base md:text-lg text-white/80 leading-relaxed max-w-xl">
                Schedule your free 30-minute consultation today. We guide emergency trademark filing Florida, fast track patent attorney Florida requests, and long-term IP strategy for innovators, startups, and established brands.
              </p>
            </div>

            <div className="grid gap-4 text-sm text-white/70 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
                <p className="font-semibold text-white">Rapid Response</p>
                <p>Emergency cease and desist Florida actions and urgent trademark search Florida support on demand.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
                <p className="font-semibold text-white">Strategic Counsel</p>
                <p>Comprehensive IP litigation attorney Florida guidance aligned with your business milestones.</p>
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="https://calendly.com/polleylaw"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#1E3432] transition-all duration-300 hover:bg-[#F4D9C3]"
              >
                Free Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/40 px-8 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-white/10"
              >
                Get a Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="relative hidden min-h-[280px] overflow-hidden lg:block">
            <Image
              src="/images/image-7.jpg"
              alt="Client consultation"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071412] via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaContact;
