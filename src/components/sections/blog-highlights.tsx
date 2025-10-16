'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { PlaceCard } from '@/components/ui/card-22';

type BlogCard = {
  title: string;
  image: string;
  tags: string[];
  reads: number;
  dateRange: string;
  hostType: string;
  isTopRated: boolean;
  description: string;
  href: string;
};

const blogCards: BlogCard[] = [
  {
    title: 'Trademark Law',
    image: '/images/image-5.jpg',
    tags: ['Branding'],
    reads: 2678,
    dateRange: 'Complete',
    hostType: 'Brand Protection',
    isTopRated: true,
    description: 'Protect your brand identity with trademark registration and enforcement services.',
    href: '/blog/trademark-registration-cost-florida',
  },
  {
    title: 'Emergency Services',
    image: '/images/image-4.jpg',
    tags: ['Urgent'],
    reads: 3120,
    dateRange: '24/7 Available',
    hostType: 'Rapid Response',
    isTopRated: true,
    description: 'Fast-track IP protection when time is critical. Same-day filing and emergency cease & desist.',
    href: '/blog/emergency-ip-protection-florida-guide',
  },
  {
    title: 'IP Strategy',
    image: '/images/image-2.jpg',
    tags: ['Strategy'],
    reads: 1890,
    dateRange: 'Long-term',
    hostType: 'Business Growth',
    isTopRated: false,
    description: 'Build a robust IP portfolio aligned with your business goals. Expert guidance for startups.',
    href: '/blog/spring-ip-preparation-guide',
  },
];

const useRotatingIndices = (length: number, intervalMs = 6000) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % length);
    }, intervalMs);

    return () => clearInterval(interval);
  }, [length, intervalMs]);

  const indices = useMemo(() => {
    const previous = (activeIndex + length - 1) % length;
    const next = (activeIndex + 1) % length;
    return [previous, activeIndex, next];
  }, [activeIndex, length]);

  return { activeIndex, indices, setActiveIndex };
};

const BlogHighlights = () => {
  const { activeIndex, indices, setActiveIndex } = useRotatingIndices(blogCards.length);

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-text-secondary mb-3">Blog</p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-tight text-text-primary mb-4">
              Insights From Our IP Team
            </h2>
            <p className="text-base md:text-lg text-text-secondary">
              Discover practical guidance on trademark protection, emergency enforcement, and long-term IP strategy curated by Polley IP Law.
            </p>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="space-y-6 md:hidden">
          {blogCards.map((card) => (
            <Link key={card.title} href={card.href} className="block">
              <PlaceCard
                image={card.image}
                tags={card.tags}
                reads={card.reads}
                title={card.title}
                dateRange={card.dateRange}
                hostType={card.hostType}
                isTopRated={card.isTopRated}
                description={card.description}
              />
            </Link>
          ))}
        </div>

        {/* Desktop Carousel */}
        <div className="hidden md:flex items-center justify-center gap-6">
          {indices.map((cardIndex, position) => {
            const card = blogCards[cardIndex];
            const isActive = position === 1;
            return (
              <div
                key={`${card.title}-${position}`}
                onMouseEnter={() => setActiveIndex(cardIndex)}
                className={`group relative transition-all duration-500 ease-out ${
                  isActive ? 'scale-100 z-30 opacity-100' : 'scale-95 z-20 opacity-75'
                }`}
                style={{
                  transformOrigin: 'center',
                }}
              >
                <Link
                  href={card.href}
                  className="block w-[280px] lg:w-[320px] xl:w-[360px]"
                  onFocus={() => setActiveIndex(cardIndex)}
                >
                  <PlaceCard
                    image={card.image}
                    tags={card.tags}
                    reads={card.reads}
                    title={card.title}
                    dateRange={card.dateRange}
                    hostType={card.hostType}
                    isTopRated={card.isTopRated}
                    description={card.description}
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BlogHighlights;
