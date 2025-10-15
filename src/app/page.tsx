import Navigation from "@/components/sections/navigation";
import HeroSection from "@/components/sections/hero";
import AboutIntro from "@/components/sections/about-intro";
import ServicesPreview from "@/components/sections/services-preview";
import ExpertiseSections from "@/components/sections/expertise-sections";
import ValuesMarquee from "@/components/sections/values-marquee";
import ClientCentric from "@/components/sections/client-centric";
import ExploreCards from "@/components/sections/explore-cards";
import TestimonialsSlider from "@/components/sections/testimonials-slider";
import ValuesAccordion from "@/components/sections/values-accordion";
import ContactSection from "@/components/sections/contact-section";
import CtaContact from "@/components/sections/cta-contact";
import Footer from "@/components/sections/footer";
import LiveChatWidget from "@/components/sections/live-chat-widget";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Services Section */}
      <ServicesPreview />

      {/* 3. About Us */}
      <AboutIntro />

      {/* 4. Our Values Carousel */}
      <ValuesMarquee />

      {/* 5. Deep Knowledge, Client-Focused, Proven Success */}
      <ExpertiseSections />

      {/* 6. Contact Form with Testimonials */}
      <ContactSection />

      {/* 7. Our Approach Protecting Creators */}
      <ClientCentric />

      {/* Other sections */}
      <ExploreCards />
      <TestimonialsSlider />
      <ValuesAccordion />

      <CtaContact />
      <Footer />
      <LiveChatWidget />
    </main>
  );
}