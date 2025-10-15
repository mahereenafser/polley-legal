"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import LiveChatWidget from "@/components/sections/live-chat-widget";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section - Lynford Style */}
      <section className="relative py-32 md:py-40 overflow-hidden" style={{ backgroundColor: '#fbe7d9' }}>
        <div className="mx-auto max-w-[1200px] px-6 md:px-12">
          <div className="text-center">
            <h1 className="font-display text-[80px] md:text-[120px] lg:text-[160px] leading-[0.9] -tracking-[0.02em] mb-8" style={{ color: '#1f3130' }}>
              Get in Touch
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: '#1f3130', opacity: 0.8 }}>
              Schedule your free consultation to secure your intellectual property today
            </p>
          </div>
        </div>

        <a
          href="#contact-content"
          aria-label="Scroll down"
          className="absolute bottom-12 left-1/2 z-20 hidden -translate-x-1/2 md:block"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-full border transition-all duration-300 hover:scale-105" style={{ borderColor: 'rgba(31, 49, 48, 0.3)', backgroundColor: 'transparent' }}>
            <ArrowDown className="h-6 w-6" style={{ color: '#1f3130' }} />
          </div>
        </a>
      </section>

      {/* Explore Our Services Section */}
      <section className="py-32 bg-white">
        <div className="mx-auto max-w-[1200px] px-6 md:px-12">
          <div className="text-center mb-20">
            <h2 className="font-display text-6xl md:text-7xl lg:text-8xl mb-6 leading-tight" style={{ color: '#1f3130' }}>
              Explore Our Services
            </h2>
            <p className="text-lg md:text-xl max-w-2xl mx-auto" style={{ color: '#1f3130', opacity: 0.7 }}>
              Comprehensive intellectual property protection tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Patents */}
            <Link href="/services#patents" className="group">
              <div className="relative aspect-[4/5] overflow-hidden mb-6">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6391a347-8b69-465a-b4c4-00b44bb608af-lynford-framer-website/assets/images/fvb9alQqu0RnQpJt7fyXnVHf4-5.jpg"
                  alt="Patents"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  quality={75}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="mb-3">
                <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: '#f8d0b3' }}>
                  Innovation Protection
                </span>
              </div>
              <h3 className="font-display text-4xl md:text-5xl mb-4 leading-tight" style={{ color: '#1f3130' }}>
                Patents
              </h3>
              <p className="text-base leading-relaxed" style={{ color: '#1f3130', opacity: 0.7 }}>
                Navigate the complex world of patents with expert guidance from concept to protection.
              </p>
            </Link>

            {/* Trademarks */}
            <Link href="/services#trademarks" className="group">
              <div className="relative aspect-[4/5] overflow-hidden mb-6">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6391a347-8b69-465a-b4c4-00b44bb608af-lynford-framer-website/assets/images/qczjTcTGhNr04QiZO8QMBftMhg-6.jpg"
                  alt="Trademarks"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  quality={75}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="mb-3">
                <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: '#f8d0b3' }}>
                  Brand Protection
                </span>
              </div>
              <h3 className="font-display text-4xl md:text-5xl mb-4 leading-tight" style={{ color: '#1f3130' }}>
                Trademarks
              </h3>
              <p className="text-base leading-relaxed" style={{ color: '#1f3130', opacity: 0.7 }}>
                Protect your brand with dedicated guidance through trademark law complexities.
              </p>
            </Link>

            {/* Copyrights */}
            <Link href="/services#copyrights" className="group">
              <div className="relative aspect-[4/5] overflow-hidden mb-6">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6391a347-8b69-465a-b4c4-00b44bb608af-lynford-framer-website/assets/images/XpBU0aa8iF6J3llpZtjaN0hJo-3.jpg"
                  alt="Copyrights"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  quality={75}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="mb-3">
                <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: '#f8d0b3' }}>
                  Creative Works
                </span>
              </div>
              <h3 className="font-display text-4xl md:text-5xl mb-4 leading-tight" style={{ color: '#1f3130' }}>
                Copyrights
              </h3>
              <p className="text-base leading-relaxed" style={{ color: '#1f3130', opacity: 0.7 }}>
                Safeguard your creative works with clear, accessible copyright protection.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-32" style={{ backgroundColor: '#fbe7d9' }}>
        <div className="mx-auto max-w-[800px] px-6 md:px-12 text-center">
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight" style={{ color: '#1f3130' }}>
            Inside IP
          </h2>
          <p className="text-lg md:text-xl mb-10" style={{ color: '#1f3130', opacity: 0.7 }}>
            Receive the latest intellectual property updates
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-6">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded focus:outline-none focus:ring-2 text-lg"
              style={{
                backgroundColor: 'rgba(31, 49, 48, 0.1)',
                border: '1px solid rgba(31, 49, 48, 0.2)',
                color: '#1f3130'
              }}
              required
            />
            <button
              type="submit"
              className="px-8 py-4 text-lg font-medium rounded transition-all hover:opacity-90"
              style={{
                backgroundColor: '#1f3130',
                color: '#ffffff'
              }}
            >
              Subscribe
            </button>
          </form>
          <p className="text-sm" style={{ color: '#1f3130', opacity: 0.6 }}>
            By signing up for Inside IP, you agree to receive marketing communications
          </p>
        </div>
      </section>

      <Footer />
      <LiveChatWidget />
    </main>
  );
}
