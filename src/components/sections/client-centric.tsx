import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const ClientCentric = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F7F9F8] via-white to-[#EEF3F1] py-24 pb-36 md:pb-40">
      <div className="pointer-events-none absolute -left-24 top-12 h-[360px] w-[360px] rounded-full bg-[#f8d0b3]/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-[420px] w-[420px] rounded-full bg-[#1E3432]/10 blur-3xl" />
      <div className="relative mx-auto flex w-full max-w-[1200px] flex-col-reverse items-center gap-16 px-6 md:px-12 lg:flex-row lg:items-center lg:gap-20">
        <div className="flex w-full max-w-[520px] flex-col gap-10 lg:flex-1">
          <span className="inline-flex items-center gap-2 self-start rounded-full border border-[#D6DDD9] bg-white/70 px-4 py-2 font-body text-xs font-semibold uppercase tracking-[0.3em] text-[#4D5E5A]">
            Our Approach
          </span>
          <div className="space-y-6">
            <h2 className="font-display text-[42px] leading-snug text-[#0F201F] sm:text-[56px] lg:text-[64px]">
              Protecting creators with dedication, clarity, and momentum.
            </h2>
            <p className="max-w-[520px] font-body text-base leading-relaxed text-[#3B4D4A]">
              We help inventors, entrepreneurs, and creators secure their intellectual property rights with expert guidance through every step of the process.
            </p>
          </div>

          <div className="grid w-full gap-4 sm:grid-cols-2">
            <div className="group relative overflow-hidden rounded-2xl border border-[#D6DDD9] bg-white/80 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-[#f8d0b3]/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative z-10 space-y-2">
                <p className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-[#A28C7D]">
                  Dedicated Legal Support
                </p>
                <p className="font-body text-base leading-relaxed text-[#1E3432]">
                  Comprehensive IP protection across Florida
                </p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl border border-[#D6DDD9] bg-white/80 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1E3432]/15 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative z-10 space-y-2">
                <p className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-[#4D5E5A]">
                  Strategic Guidance
                </p>
                <p className="font-body text-base leading-relaxed text-[#1E3432]">
                  Expert counsel for your innovations
                </p>
              </div>
            </div>
          </div>

          <Link
            href="/services"
            className="inline-flex w-fit items-center gap-3 rounded-full bg-[#1E3432] px-7 py-4 font-body text-base font-semibold uppercase tracking-[0.18em] text-white shadow-lg transition-transform duration-300 hover:-translate-y-0.5 hover:bg-[#26413E]"
          >
            Explore All Services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="relative w-full max-w-[520px] flex-1">
          <div className="relative h-[520px] overflow-hidden rounded-[40px] border border-white/60 shadow-[0_40px_90px_-45px_rgba(15,32,31,0.55)]">
            <Image
              src="/images/client-focused.jpg"
              alt="Client collaboration at Polley IP Law"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F201F]/80 via-[#0F201F]/40 to-transparent" />
          </div>

          <div className="absolute -bottom-10 left-6 right-6 rounded-3xl border border-white/50 bg-white/90 p-6 shadow-xl backdrop-blur-sm">
            <p className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-[#4D5E5A]">
              Why founders trust us
            </p>
            <p className="mt-3 font-display text-2xl leading-snug text-[#0F201F]">
              Tailored strategies that keep launches, funding, and enforcement on schedule.
            </p>
            <p className="mt-3 font-body text-sm leading-relaxed text-[#3B4D4A]">
              From emergency filings to long-term portfolio development, our team adapts to the exact pace of your business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientCentric;
