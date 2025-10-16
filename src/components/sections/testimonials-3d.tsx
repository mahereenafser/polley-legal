'use client';

import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Marquee } from '@/components/ui/3d-testimonials';

// Testimonials from the existing slider, repeated for multiple columns
const testimonials = [
  {
    name: 'Sarah Johnson',
    username: '@sarah',
    body: 'Polley IP Law provided exceptional service, guiding us through every step of protecting our intellectual property. Their expertise is unmatched!',
    initials: 'SJ',
    role: 'CEO, Tech Innovations Inc.',
    img: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Michael Chen',
    username: '@michael',
    body: 'Working with Polley IP Law was a game-changer for our business. They helped us secure critical patents that positioned us ahead of our competitors.',
    initials: 'MC',
    role: 'Founder, BioTech Solutions',
    img: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Jennifer Martinez',
    username: '@jennifer',
    body: 'The team at Polley IP Law combines deep legal expertise with a genuine understanding of our business needs. Highly recommended!',
    initials: 'JM',
    role: 'VP of Legal, Creative Studios',
    img: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
  {
    name: 'David Thompson',
    username: '@david',
    body: 'From trademark registration to patent prosecution, Polley IP Law has been our trusted partner. Their attention to detail is remarkable.',
    initials: 'DT',
    role: 'CTO, Innovation Labs',
    img: 'https://randomuser.me/api/portraits/men/46.jpg',
  },
];

function TestimonialCard({ initials, name, username, body, role, img }: typeof testimonials[number]) {
  return (
    <Card className="w-80 hover:shadow-xl transition-shadow duration-300">
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <Avatar className="h-12 w-12">
            <AvatarImage src={img} alt={name} />
            <AvatarFallback className="bg-[#1E3432] text-white font-display text-base">
              {initials}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <figcaption className="text-base font-medium text-foreground">
              {name}
            </figcaption>
            <p className="text-sm font-normal text-muted-foreground">{username}</p>
          </div>
        </div>
        <blockquote className="text-sm text-foreground leading-relaxed mb-3">
          {body}
        </blockquote>
        <p className="text-xs text-muted-foreground">{role}</p>
      </CardContent>
    </Card>
  );
}

export default function Testimonials3D() {
  return (
    <section className="relative w-full py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        {/* Heading and Body Text */}
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-[#1E3432] mb-4" style={{ fontWeight: 300 }}>
            Success stories from our clients
          </h2>
          <p className="font-body text-base md:text-lg text-gray-600 max-w-2xl mx-auto" style={{ fontWeight: 300 }}>
            Hear from the innovators and creators we've helped protect their intellectual property and achieve their business goals.
          </p>
        </div>

        {/* 3D Marquee Container */}
        <div
          className="relative flex h-[600px] w-full max-w-[1200px] mx-auto flex-row items-center justify-center overflow-hidden rounded-2xl border border-border bg-background/50"
          style={{
            perspective: '1000px',
            perspectiveOrigin: 'center center',
          }}
        >
          <div
            className="flex flex-row items-center gap-4"
            style={{
              transformStyle: 'preserve-3d',
              transform:
                'translateX(-50px) translateY(0px) translateZ(-50px) rotateX(15deg) rotateY(-12deg) rotateZ(8deg)',
            }}
          >
            {/* Vertical Marquee (downwards) - Column 1 */}
            <Marquee vertical pauseOnHover repeat={3} className="[--duration:40s]">
              {testimonials.map((review, idx) => (
                <TestimonialCard key={`col1-${review.username}-${idx}`} {...review} />
              ))}
            </Marquee>

            {/* Vertical Marquee (upwards) - Column 2 */}
            <Marquee vertical pauseOnHover reverse repeat={3} className="[--duration:40s]">
              {testimonials.map((review, idx) => (
                <TestimonialCard key={`col2-${review.username}-${idx}`} {...review} />
              ))}
            </Marquee>

            {/* Vertical Marquee (downwards) - Column 3 */}
            <Marquee vertical pauseOnHover repeat={3} className="[--duration:40s]">
              {testimonials.map((review, idx) => (
                <TestimonialCard key={`col3-${review.username}-${idx}`} {...review} />
              ))}
            </Marquee>

            {/* Vertical Marquee (upwards) - Column 4 */}
            <Marquee vertical pauseOnHover reverse repeat={3} className="[--duration:40s]">
              {testimonials.map((review, idx) => (
                <TestimonialCard key={`col4-${review.username}-${idx}`} {...review} />
              ))}
            </Marquee>

            {/* Gradient overlays */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-white"></div>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-white"></div>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
