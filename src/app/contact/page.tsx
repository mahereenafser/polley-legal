"use client";

import Image from "next/image";
import { ArrowDown } from "lucide-react";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="relative h-screen min-h-[720px] lg:min-h-[800px] text-text-inverse overflow-hidden">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6391a347-8b69-465a-b4c4-00b44bb608af-lynford-framer-website/assets/images/Es1kU20wiKwPNdeByqxmWS50F6g-2.jpg"
          alt="Two professionals in a modern office setting"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(75deg, rgba(30, 52, 50, 0.9) 0%, rgba(30, 52, 50, 0) 60%), linear-gradient(180deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.15) 100%)",
          }}
        />

        <div className="relative z-10 container mx-auto h-full flex flex-col justify-between pt-32 pb-16 lg:pb-24 px-6 sm:px-8 md:px-12">
          <div className="w-full flex justify-end">
            <p className="text-base text-white/90 max-w-[200px] lg:max-w-none lg:w-[440px] text-right">
              Get in touch to protect your latest invention or creative idea
            </p>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-end gap-8">
            <div className="flex-1 w-full lg:pl-0">
              <h1 className="font-display text-white text-[70px] sm:text-[90px] lg:text-[120px] leading-[0.9] -tracking-[0.02em]">
                Contact
                <br />
                Us
              </h1>
            </div>

            <div className="hidden lg:flex flex-col items-end gap-6 text-right w-[440px] flex-shrink-0">
              <p className="text-lg max-w-[360px] text-white/90">
                Schedule your free consultation to secure your intellectual property today
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start gap-4 lg:hidden">
            <p className="text-lg max-w-sm text-white/90">
              Schedule your free consultation to secure your intellectual property today
            </p>
          </div>
        </div>

        <a
          href="#contact-content"
          aria-label="Scroll down"
          className="absolute bottom-10 left-1/2 z-20 hidden -translate-x-1/2 md:block"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/20 transition-all duration-300 hover:scale-105 hover:bg-white/10">
            <ArrowDown className="h-6 w-6 text-white" />
          </div>
        </a>
      </section>

      <section id="contact-content" className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6 sm:px-8 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 max-w-6xl mx-auto">

            <div>
              <h2 className="font-display text-5xl lg:text-6xl text-text-primary mb-8">
                Get in Touch
              </h2>
              <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-text-primary mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border-light focus:outline-none focus:ring-2 focus:ring-ring bg-background"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-text-primary mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border-light focus:outline-none focus:ring-2 focus:ring-ring bg-background"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border-light focus:outline-none focus:ring-2 focus:ring-ring bg-background"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-border-light focus:outline-none focus:ring-2 focus:ring-ring bg-background resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-4 bg-accent-primary text-text-primary font-medium hover:bg-accent-secondary transition-colors text-lg"
                >
                  Send Message
                </button>

                <p className="text-sm text-text-secondary italic">
                  **Submission Of This Request Does Not Establish An Attorney Client Relationship**
                </p>
              </form>
            </div>

            <div className="bg-background-secondary p-8 lg:p-12 flex flex-col justify-center">
              <h3 className="font-display text-4xl lg:text-5xl text-text-primary mb-6">
                Schedule a Time with Us
              </h3>
              <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                Book a free consultation to discuss protecting your intellectual property.
              </p>
              <a
                href="https://calendly.com/polleylaw"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-accent-primary text-text-primary font-medium hover:bg-accent-secondary transition-colors text-lg"
              >
                Schedule Free Consultation
              </a>
            </div>

          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 sm:px-8 md:px-12 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-display text-5xl lg:text-6xl text-text-primary mb-6">
              Inside IP
            </h2>
            <p className="text-lg text-text-secondary mb-8">
              Receive the latest intellectual property updates
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 border border-border-light focus:outline-none focus:ring-2 focus:ring-ring"
                required
              />
              <button
                type="submit"
                className="px-8 py-3 bg-accent-primary text-text-primary font-medium hover:bg-accent-secondary transition-colors"
              >
                Subscribe
              </button>
            </form>
            <p className="text-sm text-text-secondary mt-4">
              By signing up for Inside IP, you agree to receive marketing communications
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
