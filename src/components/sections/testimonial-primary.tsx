import { Quote } from "lucide-react";

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
            <p className="font-display text-3xl md:text-4xl lg:text-5xl text-[#1E3432] leading-tight mb-8 font-light">
              "Polley IP Law secured our trademark portfolio across multiple jurisdictions. Their attention to detail and strategic guidance gave us the confidence to expand globally."
            </p>
          </blockquote>

          {/* Author Info */}
          <div className="flex flex-col items-center md:items-start gap-3 pt-6 border-t border-gray-200">
            <p className="font-display text-2xl text-[#1E3432]">
              Miles Polley
            </p>
            <p className="text-base font-medium text-gray-500 uppercase tracking-widest">
              Associate
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialPrimary;
