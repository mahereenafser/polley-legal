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
import CtaContact from "@/components/sections/cta-contact";
import Footer from "@/components/sections/footer";
import LiveChatWidget from "@/components/sections/live-chat-widget";
import ContactForm from "@/components/sections/contact-form";

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

      {/* Other sections */}
      <ValuesMarquee />
      <ExpertiseSections />
      <ClientCentric />
      <ExploreCards />
      <TestimonialsSlider />
      <ValuesAccordion />

      {/* Contact Form Section */}
      <section className="py-16 bg-[#E8E9E6]">
        <div className="container max-w-3xl">
          <ContactForm />
        </div>
      </section>

      <CtaContact />
      <Footer />
      <LiveChatWidget />
    </main>
  );
}