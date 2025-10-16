'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowDown, ArrowRight, Calendar, Clock, Tag } from 'lucide-react';
import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';
import LiveChatWidget from '@/components/sections/live-chat-widget';
import { blogPosts } from '@/data/blog-posts';
import { PlaceCard } from '@/components/ui/card-22';

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...new Set(blogPosts.map(post => post.category))];

  const filteredPosts = selectedCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = blogPosts[0];

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[700px] md:min-h-[760px] overflow-hidden">
        <Image
          src="/images/blog-hero.jpg"
          alt="Polley IP Law blog hero"
          fill
          className="absolute inset-0 h-full w-full object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 mx-auto flex h-full w-full max-w-[1280px] flex-col justify-center px-6 sm:px-8 md:px-12 lg:px-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/70 mb-4">
              Insights & Analysis
            </p>
            <h1 className="font-display text-white text-[44px] sm:text-[56px] md:text-[72px] lg:text-[86px] leading-[1.04] -tracking-[0.01em] mb-6">
              IP Insights
            </h1>
            <p className="text-white/90 text-base sm:text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
              Expert commentary on patents, trademarks, emergency filings, and the strategies shaping intellectual property protection for innovators.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <Link
                href="#featured"
                className="group inline-flex items-center gap-2 font-body text-xs sm:text-sm md:text-base font-light uppercase tracking-[0.08em] text-white transition-all hover:underline"
              >
                <span>Browse Articles</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="#categories"
                className="group inline-flex items-center gap-2 font-body text-xs sm:text-sm md:text-base font-light uppercase tracking-[0.08em] text-white transition-all hover:underline"
              >
                <span>View Categories</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>

        <a
          href="#featured"
          aria-label="Scroll down"
          className="absolute bottom-10 left-1/2 z-20 hidden -translate-x-1/2 md:block"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/30 transition-all duration-300 hover:scale-105 hover:bg-white/10">
            <ArrowDown className="h-6 w-6 text-white" />
          </div>
        </a>
      </section>

      {/* Featured Post - Large with Floating Card Effect */}
      <section id="featured" className="py-20 bg-white">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold" style={{ backgroundColor: '#fbe7d9', color: '#1f3130' }}>
              Featured Article
            </span>
          </div>

          <div className="relative">
            {/* Background Image */}
            <div className="relative h-[500px] md:h-[600px] w-full overflow-hidden rounded-2xl">
              <Image
                src="/images/copyright-claim.jpg"
                alt={featuredPost.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            </div>

            {/* Floating Card */}
            <Link
              href={`/blog/${featuredPost.slug}`}
              className="group absolute left-0 bottom-0 translate-y-1/3 w-[90%] md:w-[70%] lg:w-[60%] bg-white p-6 md:p-8 lg:p-10 rounded-2xl shadow-2xl transition-all duration-500 hover:shadow-3xl hover:scale-[1.02] animate-float"
            >
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: '#fbe7d9', color: '#1f3130' }}>
                  {featuredPost.category}
                </span>
                <div className="flex items-center gap-2 text-sm" style={{ color: '#7A8380' }}>
                  <Calendar className="w-4 h-4" />
                  {new Date(featuredPost.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                </div>
                <div className="flex items-center gap-2 text-sm" style={{ color: '#7A8380' }}>
                  <Clock className="w-4 h-4" />
                  {featuredPost.readTime}
                </div>
              </div>

              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl mb-4 leading-tight transition-colors duration-300 group-hover:opacity-80" style={{ color: '#1f3130' }}>
                {featuredPost.title}
              </h2>

              <p className="text-base md:text-lg mb-6 leading-relaxed" style={{ color: '#7A8380' }}>
                {featuredPost.excerpt}
              </p>

              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold transition-all duration-300 group-hover:translate-x-2" style={{ color: '#1f3130' }}>
                  Read Full Article
                </span>
                <ArrowRight className="w-5 h-5 transition-all duration-300 group-hover:translate-x-2" style={{ color: '#1f3130' }} />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Spacer for floating card */}
      <div className="h-32 md:h-40 lg:h-48 bg-white" />

      {/* Category Filter */}
      <section id="categories" className="py-12 bg-white border-b" style={{ borderColor: '#E8E9E6' }}>
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'shadow-lg'
                    : 'hover:shadow-md'
                }`}
                style={{
                  backgroundColor: selectedCategory === category ? '#1f3130' : '#fbe7d9',
                  color: selectedCategory === category ? '#ffffff' : '#1f3130',
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid - New Card Design */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {/* Patent Law Card */}
            <Link href="/blog/what-to-do-trademark-infringement-florida" className="block">
              <PlaceCard
                image="/images/image-1.jpg"
                tags={['Legal']}
                reads={2345}
                title="Patent Law"
                dateRange="Comprehensive"
                hostType="IP Protection"
                isTopRated={true}
                description="Secure your innovations with expert patent services. We guide you through the entire process."
              />
            </Link>

            {/* Emergency Services Card */}
            <Link href="/blog/emergency-ip-protection-florida-guide" className="block">
              <PlaceCard
                image="/images/image-4.jpg"
                tags={['Urgent']}
                reads={3120}
                title="Emergency Services"
                dateRange="24/7 Available"
                hostType="Rapid Response"
                isTopRated={true}
                description="Fast-track IP protection when time is critical. Same-day filing and emergency cease & desist."
              />
            </Link>

            {/* IP Strategy Card */}
            <Link href="/blog/spring-ip-preparation-guide" className="block">
              <PlaceCard
                image="/images/image-2.jpg"
                tags={['Strategy']}
                reads={1890}
                title="IP Strategy"
                dateRange="Long-term"
                hostType="Business Growth"
                isTopRated={false}
                description="Build a robust IP portfolio aligned with your business goals. Expert guidance for startups."
              />
            </Link>

            {/* Trademark Law Card */}
            <Link href="/blog/trademark-registration-cost-florida" className="block">
              <PlaceCard
                image="/images/image-5.jpg"
                tags={['Branding']}
                reads={2678}
                title="Trademark Law"
                dateRange="Complete"
                hostType="Brand Protection"
                isTopRated={true}
                description="Protect your brand identity with trademark registration and enforcement services."
              />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-[1200px] px-6 md:px-12">
          <div className="overflow-hidden rounded-3xl border border-[#E8E9E6] bg-[#102220] text-white">
            <div className="flex flex-col gap-12 p-8 md:p-12 lg:p-16 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-xl space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/60">Support</p>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-tight">
                  Need Expert IP Guidance?
                </h2>
                <p className="text-base md:text-lg text-white/80 leading-relaxed">
                  Whether you&apos;re racing against launch deadlines or building a long-term portfolio, our attorneys respond with rapid action and strategic clarity.
                </p>
                <div className="grid gap-3 text-sm text-white/70 md:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                    <p className="font-semibold text-white">Emergency Filings</p>
                    <p>Same-day trademark and patent support when time is critical.</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                    <p className="font-semibold text-white">Strategic Counsel</p>
                    <p>Comprehensive IP strategy tailored to your business goals.</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#1E3432] transition-colors duration-300 hover:bg-[#F4D9C3]"
                >
                  Schedule Consultation
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="tel:+1234567890"
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-white/30 px-8 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-colors duration-300 hover:bg-white/10"
                >
                  Call Us Directly
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <LiveChatWidget />

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </main>
  );
}
