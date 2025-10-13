import { Quote } from "lucide-react";
import Image from "next/image";

const TestimonialPrimary = () => {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-[1000px] px-6 md:px-12">
        <div className="flex flex-col gap-12">
          {/* Quote Icon */}
          <div className="flex justify-center md:justify-start">
            <div className="w-16 h-16 rounded-full bg-[#1E3432] flex items-center justify-center">
              <Quote className="w-8 h-8 text-[#f8d0b3]" />
            </div>
          </div>

          {/* Testimonial Text */}
          <blockquote className="text-center md:text-left">
            <p className="font-display text-2xl md:text-3xl lg:text-4xl text-[#1E3432] leading-tight mb-8 font-light">
              "Working at Polley IP Law means being part of a team that values precision, innovation, and client success. Every day, we help protect the ideas that shape the future."
            </p>
          </blockquote>

          {/* Author Info with Image */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 pt-6 border-t border-gray-200">
            <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
              <Image
                src="/images/Miles-polley.webp"
                alt="Miles Polley"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col items-center md:items-start gap-2">
              <p className="font-display text-2xl text-[#1E3432]">
                Miles Polley
              </p>
              <p className="text-base font-medium text-gray-500 uppercase tracking-widest">
                Associate
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialPrimary;
