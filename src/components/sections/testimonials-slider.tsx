'use client';

import React, { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  image?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Polley IP Law provided exceptional service, guiding us through every step of protecting our intellectual property. Their expertise is unmatched!",
    author: "Sarah Johnson",
    role: "CEO, Tech Innovations Inc.",
  },
  {
    id: 2,
    quote: "Working with Polley IP Law was a game-changer for our business. They helped us secure critical patents that positioned us ahead of our competitors.",
    author: "Michael Chen",
    role: "Founder, BioTech Solutions",
  },
  {
    id: 3,
    quote: "The team at Polley IP Law combines deep legal expertise with a genuine understanding of our business needs. Highly recommended!",
    author: "Jennifer Martinez",
    role: "VP of Legal, Creative Studios",
  },
  {
    id: 4,
    quote: "From trademark registration to patent prosecution, Polley IP Law has been our trusted partner. Their attention to detail is remarkable.",
    author: "David Thompson",
    role: "CTO, Innovation Labs",
  },
];

const TestimonialsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  const handleNext = () => {
    setDirection('right');
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection('left');
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative w-full py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        {/* Heading and Body Text */}
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h2 className="font-body text-3xl md:text-4xl text-[#1E3432] mb-4" style={{ fontWeight: 300 }}>
            Success stories from our clients
          </h2>
          <p className="font-body text-base md:text-lg text-gray-600 max-w-2xl mx-auto" style={{ fontWeight: 300 }}>
            Hear from the innovators and creators we've helped protect their intellectual property and achieve their business goals.
          </p>
        </div>

        {/* Background Image Container */}
        <div className="relative w-full h-[600px] md:h-[600px] lg:h-[700px] rounded-[32px] overflow-hidden">
          <Image
            src="/images/testimonials-bg.jpg"
            alt="Testimonials background"
            fill
            className="object-cover"
            priority
          />

          {/* Dark Overlay for better text contrast */}
          <div className="absolute inset-0 bg-black/30" />

          {/* Testimonial Card Container */}
          <div className="absolute inset-0 flex items-center justify-center p-6 md:p-12">
            <div className="relative w-full max-w-3xl">
              {/* Card */}
              <div
                key={currentIndex}
                className={`bg-white rounded-3xl p-8 md:p-12 shadow-2xl transform transition-all duration-500 ease-out ${
                  direction === 'right'
                    ? 'animate-slideInRight'
                    : 'animate-slideInLeft'
                }`}
              >
                {/* Quote Icon */}
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#1E3432] flex items-center justify-center">
                    <Quote className="w-6 h-6 text-[#f8d0b3]" />
                  </div>
                </div>

                {/* Testimonial Text */}
                <blockquote className="mb-6">
                  <p className="text-base md:text-lg text-[#1E3432] leading-relaxed" style={{ fontWeight: 300 }}>
                    "{testimonials[currentIndex].quote}"
                  </p>
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                    {testimonials[currentIndex].image ? (
                      <Image
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].author}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-[#1E3432] text-white text-lg font-display">
                        {testimonials[currentIndex].author.charAt(0)}
                      </div>
                    )}
                  </div>
                  <div>
                    <p className="font-body text-base text-[#1E3432]" style={{ fontWeight: 300 }}>
                      {testimonials[currentIndex].author}
                    </p>
                    <p className="text-sm text-gray-600" style={{ fontWeight: 300 }}>
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex items-center justify-center gap-4 mt-8">
                <button
                  onClick={handlePrev}
                  className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#1E3432] focus:ring-offset-2"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-6 h-6 text-[#1E3432]" />
                </button>

                {/* Dots Indicator */}
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setDirection(index > currentIndex ? 'right' : 'left');
                        setCurrentIndex(index);
                      }}
                      className={`w-2 h-2 rounded-full transition-all duration-300 focus:outline-none ${
                        index === currentIndex
                          ? 'bg-white w-8'
                          : 'bg-white/50 hover:bg-white/75'
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={handleNext}
                  className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#1E3432] focus:ring-offset-2"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-6 h-6 text-[#1E3432]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-slideInRight {
          animation: slideInRight 0.5s ease-out;
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.5s ease-out;
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSlider;
