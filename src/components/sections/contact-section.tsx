'use client';

import { useState, useEffect } from 'react';
import { Star, ArrowLeft, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Chen',
    role: 'Founder & CEO, TechFlow AI',
    rating: 5,
    review: 'Polley IP Law helped us secure critical patents for our AI algorithms. Their expertise in software patents and strategic guidance was invaluable for protecting our innovations.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=1000&fit=crop&q=80',
  },
  {
    id: 2,
    name: 'Marcus Rodriguez',
    role: 'Chief Innovation Officer, BioMed Innovations',
    rating: 5,
    review: 'The team at Polley IP Law expertly navigated our biotech trademark registration and defense. Their attention to detail and proactive approach gave us complete confidence.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&h=1000&fit=crop&q=80',
  },
  {
    id: 3,
    name: 'Emily Thompson',
    role: 'Creative Director, Artisan Studios',
    rating: 5,
    review: 'Outstanding copyright protection services. They helped us safeguard our creative portfolio and provided clear guidance on IP strategy for our digital content.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&h=1000&fit=crop&q=80',
  },
  {
    id: 4,
    name: 'James Patterson',
    role: 'VP of Engineering, InnovateTech',
    rating: 5,
    review: 'Polley IP Law managed our entire patent portfolio with precision. Their comprehensive approach to IP protection has been crucial to our company\'s growth and competitive advantage.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&h=1000&fit=crop&q=80',
  },
];

const ContactSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="relative min-h-[600px] md:min-h-[calc(100vh-220px)] py-12 md:py-16 overflow-hidden">
      {/* Full Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/contact-form.jpg')",
        }}
      >
        {/* Dark overlay for better contrast */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1400px] px-4 md:px-8 lg:px-12 h-full flex items-center">
        {/* Two-Column Form Card */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 rounded-3xl overflow-hidden shadow-2xl">

          {/* Left Column - Testimonials Carousel */}
          <div className="relative min-h-[360px] lg:min-h-[520px]">
            {/* Testimonial Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-all duration-700"
              style={{
                backgroundImage: `url('${currentTestimonial.image}')`,
              }}
            >
              {/* Gradient Overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            </div>

            {/* Testimonial Content - Bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-5 md:p-7 lg:p-9">
              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#F4D9C3] text-[#F4D9C3]" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-white text-base md:text-lg leading-relaxed mb-6 font-body">
                "{currentTestimonial.review}"
              </p>

              {/* Client Info */}
              <div className="mb-6">
                <p className="text-white font-semibold text-lg font-display">
                  {currentTestimonial.name}
                </p>
                <p className="text-white/80 text-sm font-body">
                  {currentTestimonial.role}
                </p>
              </div>

              {/* Carousel Controls */}
              <div className="flex items-center gap-3 md:gap-4">
                <button
                  onClick={handlePrev}
                  className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-all"
                  aria-label="Previous testimonial"
                >
                  <ArrowLeft className="w-5 h-5 text-white" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-all"
                  aria-label="Next testimonial"
                >
                  <ArrowRight className="w-5 h-5 text-white" />
                </button>
                {/* Dot Indicators */}
                <div className="flex gap-2 ml-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentIndex ? 'bg-white w-6' : 'bg-white/40'
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - White Contact Form */}
          <div className="bg-white p-5 md:p-7 lg:p-10 flex flex-col justify-center">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-2" style={{ color: '#1E3432' }}>
              Get Started Today
            </h2>
            <p className="text-base md:text-lg mb-6" style={{ color: '#7A8380' }}>
              Schedule your free consultation to protect your intellectual property
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Name Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium mb-1.5" style={{ color: '#1E3432' }}>
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1E3432] transition-all"
                    style={{ color: '#1E3432' }}
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium mb-1.5" style={{ color: '#1E3432' }}>
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1E3432] transition-all"
                    style={{ color: '#1E3432' }}
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1.5" style={{ color: '#1E3432' }}>
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1E3432] transition-all"
                  style={{ color: '#1E3432' }}
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1.5" style={{ color: '#1E3432' }}>
                  Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1E3432] transition-all"
                  style={{ color: '#1E3432' }}
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1.5" style={{ color: '#1E3432' }}>
                  How can we help you? *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1E3432] resize-none transition-all"
                  style={{ color: '#1E3432' }}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 rounded-lg font-semibold text-lg transition-all hover:opacity-90"
                style={{
                  backgroundColor: '#1E3432',
                  color: '#FFFFFF',
                }}
              >
                Schedule a Consultation
              </button>

              <p className="text-xs text-center mt-1.5" style={{ color: '#7A8380' }}>
                *Submission of this request does not establish an attorney-client relationship*
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
