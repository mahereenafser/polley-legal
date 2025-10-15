"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-[#1E3432] rounded-lg p-8 shadow-lg">
      <h3 className="font-display text-3xl text-white mb-4">Contact Us</h3>
      <p className="text-white/70 mb-6 text-sm">
        Fill out the form and we'll get back to you within 24 hours.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name *"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#F4D9C3] transition-all text-sm"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.14)',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name *"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#F4D9C3] transition-all text-sm"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.14)',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}
          />
        </div>

        <input
          type="email"
          name="email"
          placeholder="Email *"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#F4D9C3] transition-all text-sm"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.14)',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#F4D9C3] transition-all text-sm"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.14)',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}
        />

        <textarea
          name="message"
          placeholder="How can we help you? *"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          className="w-full px-4 py-3 rounded text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#F4D9C3] resize-none transition-all text-sm"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.14)',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}
        />

        <button
          type="submit"
          className="w-full px-6 py-3 text-base font-medium rounded transition-all hover:opacity-90"
          style={{
            backgroundColor: '#F4D9C3',
            color: '#1E3432'
          }}
        >
          Send Message
        </button>

        <p className="text-xs text-white/60 italic mt-1">
          *Submission does not establish an attorney-client relationship
        </p>
      </form>
    </div>
  );
}
