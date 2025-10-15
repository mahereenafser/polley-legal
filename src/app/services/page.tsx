"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import LiveChatWidget from "@/components/sections/live-chat-widget";
import ContactForm from "@/components/sections/contact-form";
import { useInView } from "react-intersection-observer";

export default function ServicesPage() {
  const [patentsRef, patentsInView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [trademarksRef, trademarksInView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [copyrightsRef, copyrightsInView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section - Lynford Style */}
      <section className="relative h-screen min-h-[800px] overflow-hidden" style={{ backgroundColor: '#1f3130' }}>
        <div className="absolute inset-0 opacity-30">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6391a347-8b69-465a-b4c4-00b44bb608af-lynford-framer-website/assets/images/Es1kU20wiKwPNdeByqxmWS50F6g-2.jpg"
            alt="Background"
            fill
            className="object-cover"
            priority
            quality={85}
            sizes="100vw"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-[1200px] h-full flex flex-col justify-center px-6 md:px-12 py-32">
          <div className="text-center">
            <h1 className="font-display text-white text-[80px] md:text-[120px] lg:text-[160px] leading-[0.9] -tracking-[0.02em] mb-8">
              Our Services
            </h1>
            <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Expert intellectual property protection tailored to your unique needs
            </p>
          </div>
        </div>

        <a
          href="#services-content"
          aria-label="Scroll down"
          className="absolute bottom-12 left-1/2 z-20 hidden -translate-x-1/2 md:block"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/30 transition-all duration-300 hover:scale-105 hover:bg-white/10">
            <ArrowDown className="h-6 w-6 text-white" />
          </div>
        </a>
      </section>

      {/* Patents - Two Column Layout */}
      <section id="services-content" className="bg-white overflow-hidden">
        <div className="mx-auto max-w-[1200px] py-32 px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left - Text */}
            <div className="flex flex-col justify-center">
              <div className="mb-6">
                <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: '#f8d0b3' }}>
                  Innovation Protection
                </span>
              </div>
              <h2 className="font-display text-6xl md:text-7xl lg:text-8xl leading-[0.95] mb-8" style={{ color: '#1f3130' }}>
                Patents
              </h2>
              <p className="text-lg leading-relaxed text-gray-700 max-w-lg mb-8">
                Navigate the complex world of patents with ease. Our expert guidance supports your ideas from concept to protection, ensuring your innovations are safely secured.
              </p>
              <Link
                href="/patents"
                className="group inline-flex items-center gap-2 text-base font-semibold rounded-full px-6 py-3 transition-all duration-300 self-start"
                style={{ backgroundColor: '#f8d0b3', color: '#1f3130' }}
              >
                Learn More
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Right - Image */}
            <div ref={patentsRef} className="relative w-full aspect-[3/4] overflow-hidden">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6391a347-8b69-465a-b4c4-00b44bb608af-lynford-framer-website/assets/images/fvb9alQqu0RnQpJt7fyXnVHf4-5.jpg"
                alt="Patents service"
                fill
                className="object-cover"
                loading="lazy"
                quality={75}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trademarks - Two Column Layout (Image Left) */}
      <section className="overflow-hidden bg-white">
        <div className="mx-auto max-w-[1200px] py-32 px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left - Image */}
            <div ref={trademarksRef} className="relative w-full aspect-[3/4] overflow-hidden order-2 lg:order-1">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6391a347-8b69-465a-b4c4-00b44bb608af-lynford-framer-website/assets/images/qczjTcTGhNr04QiZO8QMBftMhg-6.jpg"
                alt="Trademarks service"
                fill
                className="object-cover"
                loading="lazy"
                quality={75}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Right - Text */}
            <div className="flex flex-col justify-center order-1 lg:order-2">
              <div className="mb-6">
                <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: '#f8d0b3' }}>
                  Brand Protection
                </span>
              </div>
              <h2 className="font-display text-6xl md:text-7xl lg:text-8xl leading-[0.95] mb-8" style={{ color: '#1f3130' }}>
                Trademarks
              </h2>
              <p className="text-lg leading-relaxed text-gray-700 max-w-lg mb-8">
                Protect your brand with our dedicated team, leading you through the complexities of trademark law. Let us be your trusted partner in safeguarding what matters most to your business.
              </p>
              <Link
                href="/trademarks"
                className="group inline-flex items-center gap-2 text-base font-semibold rounded-full px-6 py-3 transition-all duration-300 self-start"
                style={{ backgroundColor: '#f8d0b3', color: '#1f3130' }}
              >
                Learn More
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Copyrights - Two Column Layout */}
      <section className="bg-white overflow-hidden">
        <div className="mx-auto max-w-[1200px] py-32 px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left - Text */}
            <div className="flex flex-col justify-center">
              <div className="mb-6">
                <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: '#f8d0b3' }}>
                  Creative Works
                </span>
              </div>
              <h2 className="font-display text-6xl md:text-7xl lg:text-8xl leading-[0.95] mb-8" style={{ color: '#1f3130' }}>
                Copyrights
              </h2>
              <p className="text-lg leading-relaxed text-gray-700 max-w-lg mb-8">
                Discover peace of mind knowing your works are safeguarded by experts who truly care. Our team makes copyright law clear and accessible so you can focus on what you do best: creating.
              </p>
              <Link
                href="/copyrights"
                className="group inline-flex items-center gap-2 text-base font-semibold rounded-full px-6 py-3 transition-all duration-300 self-start"
                style={{ backgroundColor: '#f8d0b3', color: '#1f3130' }}
              >
                Learn More
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Right - Image */}
            <div ref={copyrightsRef} className="relative w-full aspect-[3/4] overflow-hidden">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6391a347-8b69-465a-b4c4-00b44bb608af-lynford-framer-website/assets/images/XpBU0aa8iF6J3llpZtjaN0hJo-3.jpg"
                alt="Copyrights service"
                fill
                className="object-cover"
                loading="lazy"
                quality={75}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-[#E8E9E6]">
        <div className="container max-w-3xl">
          <ContactForm />
        </div>
      </section>

      <Footer />
      <LiveChatWidget />
    </main>
  );
}
