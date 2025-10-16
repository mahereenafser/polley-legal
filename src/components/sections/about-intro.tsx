import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const teamMembers = [
  {
    name: "Daniel Polley",
    role: "Managing Shareholder",
    quote:
      "At Polley IP Law, we're committed to delivering exceptional IP protection through personalized service and strategic insight. Our mission is to empower innovators and creators with the legal tools they need to succeed.",
    image: "/images/Daniel+S.+Polley+Website+Photo.webp",
  },
  {
    name: "Miles Polley",
    role: "Associate",
    quote:
      "Working at Polley IP Law means being part of a team that values precision, innovation, and client success. Every day, we help protect the ideas that shape the future.",
    image: "/images/Miles-polley.webp",
  },
];

const AboutIntro = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">
      <div className="pointer-events-none absolute -left-12 top-10 hidden h-[380px] w-[380px] rounded-full bg-[#f8d0b3]/20 blur-3xl md:block" />
      <div className="pointer-events-none absolute right-[-120px] bottom-[-120px] h-[420px] w-[420px] rounded-full bg-[#12302C]/15 blur-3xl" />

      <div className="relative mx-auto flex w-full max-w-[1200px] flex-col gap-16 px-6 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_minmax(0,0.9fr)] lg:items-center">
          <div className="space-y-7">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#F0F5F4] px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#1E3432]">
              About us
            </span>
            <h2 className="font-display text-[2.5rem] leading-tight text-[#0F201F] sm:text-[3rem] md:text-[3.5rem]">
              Florida IP counsel shaping resilient, future-ready brands.
            </h2>
            <p className="max-w-[620px] font-body text-base leading-relaxed text-[#3B4D4A] sm:text-lg">
              Polley IP Law specializes in comprehensive intellectual property protection, guiding inventors, founders, and creative teams through patents, trademarks, and copyrights with trusted legal representation tailored to fast-moving businesses.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Rapid emergency filings with clear action plans",
                "Portfolio strategies aligned with funding milestones",
                "Litigation-ready documentation and enforcement tools",
                "Partners who translate legal nuance into business language",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-[#E3EAE8] bg-[#F8FAF9] px-4 py-4 text-sm font-medium text-[#1E3432] shadow-sm"
                >
                  <span className="mt-1 block h-2 w-2 rounded-full bg-[#f8d0b3]" aria-hidden />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <Link
              href="/about"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-[#1E3432] px-7 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition-transform duration-300 hover:-translate-y-1 hover:bg-[#26413E]"
            >
              Discover our story
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="relative h-[420px] overflow-hidden rounded-[36px] bg-[#102220] shadow-[0_40px_90px_-45px_rgba(10,32,30,0.7)] sm:h-[480px]">
            <Image
              src="/images/about-us.jpg"
              alt="Polley IP Law attorneys collaborating in a conference room"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F201F] via-[#0F201F]/50 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 space-y-4 rounded-2xl bg-white/10 p-6 backdrop-blur-md">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                Dedicated legal partnership
              </p>
              <h3 className="font-display text-2xl text-white">
                Comprehensive IP protection anchored in clarity and momentum.
              </h3>
              <p className="font-body text-sm text-white/80 leading-relaxed">
                From investor diligence to launch-day confidence, we prepare filings, enforcement strategies, and education that keep your innovations securely in motion.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          {teamMembers.map((member) => (
            <article
              key={member.name}
              className="group relative overflow-hidden rounded-[32px] border border-[#E5EBE9] bg-white shadow-[0_24px_60px_-40px_rgba(15,32,31,0.5)] transition-transform duration-500 hover:-translate-y-2"
            >
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F201F]/75 via-transparent to-transparent" />
              </div>
              <div className="space-y-5 px-7 py-8 md:px-9">
                <blockquote className="font-body text-base leading-relaxed text-[#3B4D4A] sm:text-lg">
                  “{member.quote}”
                </blockquote>
                <div className="space-y-1">
                  <p className="font-display text-2xl text-[#0F201F]">{member.name}</p>
                  <p className="font-body text-sm uppercase tracking-[0.2em] text-[#76837F]">{member.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
