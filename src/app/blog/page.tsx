'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calendar, Clock, Tag } from 'lucide-react';
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
      <section className="relative py-32 md:py-40 overflow-hidden" style={{ backgroundColor: '#fbe7d9' }}>
        <div className="mx-auto max-w-[1200px] px-6 md:px-12">
          <div className="text-center">
            <h1 className="font-display text-[80px] md:text-[120px] lg:text-[160px] leading-[0.9] -tracking-[0.02em] mb-8" style={{ color: '#1f3130' }}>
              IP Insights
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: '#1f3130', opacity: 0.8 }}>
              Expert guidance on patents, trademarks, copyrights, and intellectual property strategy from Florida's leading IP attorneys
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post - Large with Floating Card Effect */}
      <section className="py-20 bg-white">
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
                src={featuredPost.image}
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
      <section className="py-12 bg-white border-b" style={{ borderColor: '#E8E9E6' }}>
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
      <section className="py-20" style={{ backgroundColor: '#1f3130' }}>
        <div className="mx-auto max-w-[1000px] px-6 md:px-12 text-center">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            Need Expert IP Guidance?
          </h2>
          <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
            Whether you need emergency trademark filing Florida, same day patent attorney Florida services, or comprehensive IP litigation attorney Florida support, our team is ready to protect your intellectual property.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
            style={{ backgroundColor: '#f8d0b3', color: '#1f3130' }}
          >
            Schedule Free Consultation
            <ArrowRight className="w-5 h-5" />
          </Link>
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
