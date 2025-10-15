'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calendar, Clock, Tag } from 'lucide-react';
import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';
import LiveChatWidget from '@/components/sections/live-chat-widget';
import { blogPosts } from '@/data/blog-posts';

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

      {/* Blog Grid - Cards with Images and Hover Effects */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {filteredPosts.slice(1).map((post, index) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group block"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                <article className="h-full flex flex-col bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                  {/* Image with Overlay */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm" style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', color: '#1f3130' }}>
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col p-6">
                    {/* Meta Info */}
                    <div className="flex flex-wrap items-center gap-4 mb-4 text-sm" style={{ color: '#7A8380' }}>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-xl md:text-2xl mb-3 leading-tight transition-colors duration-300 group-hover:opacity-80" style={{ color: '#1f3130' }}>
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-base mb-4 leading-relaxed flex-1" style={{ color: '#7A8380' }}>
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1 px-2 py-1 rounded text-xs"
                          style={{ backgroundColor: '#fbe7d9', color: '#1f3130' }}
                        >
                          <Tag className="w-3 h-3" />
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Read More Link */}
                    <div className="flex items-center gap-2 text-sm font-semibold transition-all duration-300 group-hover:gap-4" style={{ color: '#1f3130' }}>
                      Read Article
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
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
