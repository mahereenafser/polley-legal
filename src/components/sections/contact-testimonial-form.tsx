"use client";

import { useState, useEffect, FormEvent } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

// IP Law Client Testimonials
const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Founder & CEO",
    company: "TechFlow AI",
    rating: 5,
    text: "Polley IP Law helped us secure critical patents for our AI algorithms. Their expertise in software patents was invaluable to our Series A funding.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop",
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    role: "Chief Innovation Officer",
    company: "BioMed Solutions",
    rating: 5,
    text: "Outstanding trademark protection for our biotech brand. Daniel and his team navigated complex international filings with precision and care.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop",
  },
  {
    id: 3,
    name: "Emily Thompson",
    role: "Creative Director",
    company: "Artisan Studios",
    rating: 5,
    text: "The copyright protection they provided for our creative works gave us peace of mind. Professional, responsive, and truly understands creators' needs.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop",
  },
  {
    id: 4,
    name: "James Patterson",
    role: "Managing Partner",
    company: "InnovateTech Holdings",
    rating: 5,
    text: "Miles handled our patent portfolio with exceptional attention to detail. Their strategic approach helped us secure competitive advantages in our market.",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=500&fit=crop",
  },
];

const companySizes = [
  "1-10 employees",
  "11-50 employees",
  "51-200 employees",
  "201-500 employees",
  "500+ employees",
];

const countries = [
  "United States",
  "Canada",
  "United Kingdom",
  "Australia",
  "Germany",
  "France",
  "Japan",
  "Other",
];

const ipServices = [
  "Patent Protection (Utility, Design, Provisional)",
  "Trademark Registration & Defense",
  "Copyright Protection",
  "PCT International Filing",
  "IP Portfolio Management",
  "Infringement Defense & Litigation",
];

export default function ContactTestimonialForm() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    companySize: "",
    country: "",
    services: [] as string[],
    message: "",
    consent: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5500);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  // Touch handlers for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Replace with actual API call
    console.log("Form submitted:", formData);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    alert("Thank you! We'll contact you within 24 hours to discuss protecting your intellectual property.");
    setIsSubmitting(false);
  };

  const handleCheckboxChange = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? "text-[#F4D9C3]" : "text-gray-400"}>
        ⭐
      </span>
    ));
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center bg-[#1E3432] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/contact-form.jpg"
          alt="Intellectual Property Law Office"
          fill
          className="object-cover"
          priority
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#1E3432]/95 via-[#1E3432]/90 to-[#2D4745]/85" />
      </div>

      {/* Main Card Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div
          className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden
                     transform transition-all duration-700 ease-out
                     animate-[fadeIn_0.8s_ease-out]"
          style={{
            animation: "fadeIn 0.8s ease-out, slideUp 0.8s ease-out",
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-8 p-6 md:p-8">
            {/* Left Column - Testimonial Carousel */}
            <div
              className="relative rounded-xl overflow-hidden transform transition-all duration-500 ease-out delay-200"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              style={{
                animation: "slideInLeft 0.8s ease-out 0.2s both",
              }}
            >
              {/* Carousel Images */}
              <div className="relative h-[450px] md:h-[550px] lg:h-[600px]">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={testimonial.id}
                    className={`absolute inset-0 transition-all duration-500 ${
                      index === currentSlide
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-95 pointer-events-none"
                    }`}
                  >
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover rounded-xl"
                    />

                    {/* Overlay Content */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1E3432]/95 via-[#1E3432]/60 to-transparent">
                      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                        <Quote className="w-8 h-8 mb-4 text-[#F4D9C3]" />
                        <p className="text-base md:text-lg leading-relaxed mb-4 font-light">
                          "{testimonial.text}"
                        </p>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-semibold text-lg">{testimonial.name}</p>
                            <p className="text-sm text-white/80">{testimonial.role}</p>
                            <p className="text-sm text-[#F4D9C3]">{testimonial.company}</p>
                          </div>
                          <div className="flex gap-1">{renderStars(testimonial.rating)}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm
                         flex items-center justify-center hover:bg-white/30 transition-all focus:outline-none focus:ring-2 focus:ring-[#F4D9C3]"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm
                         flex items-center justify-center hover:bg-white/30 transition-all focus:outline-none focus:ring-2 focus:ring-[#F4D9C3]"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>

              {/* Dot Indicators */}
              <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 focus:outline-none ${
                      index === currentSlide
                        ? "bg-[#F4D9C3] w-8"
                        : "bg-white/50 hover:bg-white/70"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div
              className="transform transition-all duration-500 ease-out delay-400"
              style={{
                animation: "slideInRight 0.8s ease-out 0.4s both",
              }}
            >
              <div className="mb-6">
                <h2 className="font-display text-4xl md:text-5xl text-[#1E3432] mb-3">
                  Protect Your Innovation
                </h2>
                <p className="text-[#7A8380] text-base">
                  Schedule a free consultation with Florida's leading IP attorneys. We'll help secure your patents, trademarks, and copyrights.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-[#1E3432] mb-1.5">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full px-4 py-2.5 border border-[#E0E2DF] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F4D9C3] focus:border-transparent transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-[#1E3432] mb-1.5">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full px-4 py-2.5 border border-[#E0E2DF] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F4D9C3] focus:border-transparent transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                {/* Email and Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#1E3432] mb-1.5">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 border border-[#E0E2DF] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F4D9C3] focus:border-transparent transition-all"
                      placeholder="john@company.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[#1E3432] mb-1.5">
                      Work Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 border border-[#E0E2DF] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F4D9C3] focus:border-transparent transition-all"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                {/* Company Size and Country */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="companySize" className="block text-sm font-medium text-[#1E3432] mb-1.5">
                      Company Size
                    </label>
                    <select
                      id="companySize"
                      value={formData.companySize}
                      onChange={(e) => setFormData({ ...formData, companySize: e.target.value })}
                      className="w-full px-4 py-2.5 border border-[#E0E2DF] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F4D9C3] focus:border-transparent transition-all bg-white"
                    >
                      <option value="">Select size</option>
                      {companySizes.map((size) => (
                        <option key={size} value={size}>
                          {size}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-[#1E3432] mb-1.5">
                      Country
                    </label>
                    <select
                      id="country"
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full px-4 py-2.5 border border-[#E0E2DF] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F4D9C3] focus:border-transparent transition-all bg-white"
                    >
                      <option value="">Select country</option>
                      {countries.map((country) => (
                        <option key={country} value={country}>
                          {country}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* IP Services Checkboxes */}
                <div>
                  <label className="block text-sm font-medium text-[#1E3432] mb-2">
                    Which IP services do you need? *
                  </label>
                  <div className="grid grid-cols-1 gap-2">
                    {ipServices.map((service) => (
                      <label key={service} className="flex items-start gap-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          checked={formData.services.includes(service)}
                          onChange={() => handleCheckboxChange(service)}
                          className="mt-1 w-4 h-4 text-[#F4D9C3] border-[#E0E2DF] rounded focus:ring-2 focus:ring-[#F4D9C3] focus:ring-offset-0 cursor-pointer"
                        />
                        <span className="text-sm text-[#1E3432] group-hover:text-[#2D4745] transition-colors">
                          {service}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#1E3432] mb-1.5">
                    Tell us about your IP needs
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 border border-[#E0E2DF] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F4D9C3] focus:border-transparent transition-all resize-none"
                    placeholder="Describe your invention, brand, or creative work..."
                  />
                </div>

                {/* Consent */}
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    className="mt-1 w-4 h-4 text-[#F4D9C3] border-[#E0E2DF] rounded focus:ring-2 focus:ring-[#F4D9C3] focus:ring-offset-0 cursor-pointer"
                  />
                  <span className="text-xs text-[#7A8380]">
                    You can contact me about Polley IP Law services and news. I can unsubscribe at any time.
                  </span>
                </label>

                {/* Submit Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 bg-[#1E3432] text-white px-8 py-3.5 rounded-lg font-medium
                             hover:bg-[#2D4745] focus:outline-none focus:ring-2 focus:ring-[#F4D9C3] focus:ring-offset-2
                             disabled:opacity-50 disabled:cursor-not-allowed transition-all
                             transform hover:scale-[1.02] active:scale-[0.98]"
                  >
                    {isSubmitting ? "Submitting..." : "Schedule Consultation"}
                  </button>
                  <a
                    href="tel:+18135557000"
                    className="sm:flex-none px-8 py-3.5 rounded-lg font-medium text-center
                             text-[#1E3432] hover:text-[#2D4745] focus:outline-none focus:ring-2 focus:ring-[#F4D9C3] focus:ring-offset-2
                             transition-all underline decoration-2 underline-offset-4"
                  >
                    Call (813) 555-7000
                  </a>
                </div>

                <p className="text-xs text-[#7A8380] italic text-center pt-2">
                  *Submission does not establish an attorney-client relationship
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideUp {
          from {
            transform: translateY(20px);
          }
          to {
            transform: translateY(0);
          }
        }
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}
