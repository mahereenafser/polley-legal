"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, Phone, Mail, Clock } from "lucide-react";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import LiveChatWidget from "@/components/sections/live-chat-widget";

const contactHighlights = [
  {
    title: "Call",
    value: "(813) 555-7000",
    icon: Phone,
    description: "Fast answers for emergency trademark filing Florida, rush patent filing Florida, and urgent copyright protection Florida needs.",
    href: "tel:+18135557000",
  },
  {
    title: "Email",
    value: "hello@polleylaw.com",
    icon: Mail,
    description: "Share documents, infringement evidence, or questions and an attorney will respond within one business day.",
    href: "mailto:hello@polleylaw.com",
  },
  {
    title: "Office Hours",
    value: "Mon – Fri, 8:30am – 6:00pm ET",
    icon: Clock,
    description: "After-hours support available for emergency cease and desist Florida actions and investor due diligence.",
  },
];

const initialFormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  company: "",
  message: "",
};

export default function ContactPage() {
  const [formData, setFormData] = useState(initialFormState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Contact form submitted", formData);
    setFormData(initialFormState);
  };

  return (
    <main className="min-h-screen bg-white text-[#1E3432]">
      <Navigation />

      {/* Hero */}
      <section className="relative h-[90vh] min-h-[720px] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/videos/explore-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-black/75" />

        <div className="relative z-10 mx-auto flex h-full w-full max-w-[1200px] flex-col justify-center gap-10 px-6 sm:px-8 md:px-12 lg:px-20 text-white">
          <div className="max-w-3xl space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">Connect With Polley IP Law</p>
            <h1 className="font-display text-[42px] sm:text-[60px] md:text-[76px] lg:text-[88px] leading-[1.04] text-white">
              Talk with Florida&apos;s emergency IP team.
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/85 leading-relaxed max-w-2xl">
              Whether you&apos;re facing urgent infringement, preparing for investment, or building a long-term IP portfolio, our attorneys respond with strategic clarity.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="tel:+18135557000"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-[#f8d0b3] px-8 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#1E3432] transition-all duration-300 hover:bg-[#EDC2A4]"
            >
              Call Now
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="#contact-form"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-white/40 px-8 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-white/10"
            >
              Send a Message
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <a
          href="#contact-details"
          aria-label="Scroll down"
          className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 md:flex"
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/30 transition-all duration-300 hover:scale-105 hover:bg-white/10">
            <ArrowDown className="h-5 w-5 text-white" />
          </div>
        </a>
      </section>

      {/* Contact Highlights */}
      <section id="contact-details" className="py-20 md:py-24">
        <div className="mx-auto max-w-[1200px] px-6 md:px-12 grid gap-6 md:grid-cols-3">
          {contactHighlights.map(({ title, value, icon: Icon, description, href }) => (
            <div key={title} className="flex h-full flex-col justify-between rounded-3xl border border-[#E8E9E6] bg-[#F8FAF9] p-6 shadow-sm">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#7A8380]">
                  <Icon className="h-4 w-4" />
                  <span>{title}</span>
                </div>
                {href ? (
                  <a href={href} className="font-display text-2xl text-[#1E3432] transition-colors duration-300 hover:text-[#f8d0b3]">
                    {value}
                  </a>
                ) : (
                  <p className="font-display text-2xl text-[#1E3432]">{value}</p>
                )}
                <p className="text-sm text-[#4B5553] leading-relaxed">{description}</p>
              </div>
              <div className="mt-4 h-1 w-16 rounded-full bg-[#f8d0b3]" />
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="bg-[#F0F5F4] py-20 md:py-28">
        <div className="mx-auto grid max-w-[1200px] gap-12 px-6 md:px-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-stretch">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 rounded-[32px] border border-[#E8E9E6] bg-white p-8 md:p-12 shadow-xl">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#7A8380]">Start a Conversation</p>
              <h2 className="font-display text-3xl sm:text-4xl text-[#1E3432]">Tell us about your IP goals.</h2>
              <p className="text-sm text-[#4B5553] leading-relaxed">
                Share the challenge. We&apos;ll respond with next steps for emergency trademark filing Florida, trademark dispute attorney Florida defenses, or long-term strategy.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="firstName" className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7A8380]">First Name *</label>
                <input
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-[#D6DDD9] bg-white px-4 py-3 text-sm text-[#1E3432] focus:border-[#1E3432] focus:outline-none focus:ring-2 focus:ring-[#f8d0b3]/60"
                  placeholder="Jane"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="lastName" className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7A8380]">Last Name *</label>
                <input
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-[#D6DDD9] bg-white px-4 py-3 text-sm text-[#1E3432] focus:border-[#1E3432] focus:outline-none focus:ring-2 focus:ring-[#f8d0b3]/60"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="email" className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7A8380]">Email *</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-[#D6DDD9] bg-white px-4 py-3 text-sm text-[#1E3432] focus:border-[#1E3432] focus:outline-none focus:ring-2 focus:ring-[#f8d0b3]/60"
                  placeholder="you@company.com"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7A8380]">Phone *</label>
                <input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-[#D6DDD9] bg-white px-4 py-3 text-sm text-[#1E3432] focus:border-[#1E3432] focus:outline-none focus:ring-2 focus:ring-[#f8d0b3]/60"
                  placeholder="(813) 555-7000"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="company" className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7A8380]">Company / Project</label>
              <input
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full rounded-xl border border-[#D6DDD9] bg-white px-4 py-3 text-sm text-[#1E3432] focus:border-[#1E3432] focus:outline-none focus:ring-2 focus:ring-[#f8d0b3]/60"
                placeholder="Startup, brand, or product name"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7A8380]">How can we help? *</label>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full rounded-xl border border-[#D6DDD9] bg-white px-4 py-3 text-sm text-[#1E3432] focus:border-[#1E3432] focus:outline-none focus:ring-2 focus:ring-[#f8d0b3]/60"
                placeholder="Tell us about timelines, goals, or any urgent issues."
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-[#1E3432] px-8 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-colors duration-300 hover:bg-[#2C4A47]"
            >
              Submit Inquiry
              <ArrowRight className="h-4 w-4" />
            </button>
            <p className="text-xs text-[#7A8380]">
              *Submission of this request does not establish an attorney-client relationship.
            </p>
          </form>

          <div className="relative overflow-hidden rounded-[32px]">
            <video
              autoPlay
              muted
              loop
              playsInline
              poster="/images/contact-form.jpg"
              className="absolute inset-0 h-full w-full object-cover"
            >
              <source src="/videos/explore-video.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-[#081615]/20 via-[#081615]/60 to-[#081615]" />
            <div className="relative z-10 flex h-full flex-col justify-end gap-4 p-8 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/70">Why founders call us</p>
              <h3 className="font-display text-3xl leading-tight text-white">Emergency trademark and patent filing within hours.</h3>
              <p className="text-sm text-white/80">
                We maintain pre-drafted filings, USPTO access, and international partner firms so you can secure rights before investor pitches, product launches, or trade shows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-[1200px] px-6 md:px-12">
          <div className="overflow-hidden rounded-3xl border border-[#E8E9E6] bg-[#102220] text-white">
            <div className="grid gap-12 p-8 md:p-12 lg:grid-cols-[minmax(0,1fr)_340px] lg:p-16">
              <div className="space-y-5">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#f8d0b3]">Working Together</p>
                <h2 className="font-display text-3xl sm:text-4xl leading-tight text-white">Let&apos;s develop a protection plan that moves as fast as you do.</h2>
                <p className="text-sm text-white/80 leading-relaxed">
                  From trademark dilution lawyer Florida enforcement to patent lawsuit lawyer Florida defense, Polley IP Law builds strategies that withstand scrutiny from competitors, investors, and regulators.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="https://calendly.com/polleylaw"
                    className="inline-flex items-center justify-center gap-3 rounded-full bg-[#f8d0b3] px-8 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#1E3432] transition-all duration-300 hover:bg-[#EDC2A4]"
                  >
                    Book a Call
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center gap-3 rounded-full border border-white/30 px-8 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-white/10"
                  >
                    View Services
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
              <div className="relative hidden min-h-[220px] overflow-hidden rounded-2xl border border-white/10 bg-white/5 lg:block">
                <Image
                  src="/images/image-6.jpg"
                  alt="Conference room"
                  fill
                  className="object-cover opacity-80"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <LiveChatWidget />
    </main>
  );
}
