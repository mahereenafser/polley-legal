import Navigation from "@/components/sections/navigation";
import HeroSection from "@/components/sections/hero";
import AboutIntro from "@/components/sections/about-intro";
import ServicesPreview from "@/components/sections/services-preview";
import ExpertiseSections from "@/components/sections/expertise-sections";
import ValuesMarquee from "@/components/sections/values-marquee";
import ClientCentric from "@/components/sections/client-centric";
import ExploreCards from "@/components/sections/explore-cards";
import Testimonials3D from "@/components/sections/testimonials-3d";
import ValuesAccordion from "@/components/sections/values-accordion";
import ContactSection from "@/components/sections/contact-section";
import CtaContact from "@/components/sections/cta-contact";
import Footer from "@/components/sections/footer";
import LiveChatWidget from "@/components/sections/live-chat-widget";
import BlogHighlights from "@/components/sections/blog-highlights";

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
      {/* Add spacing after Expertise Sections for visual separation */}
      <div className="mt-16 md:mt-24 lg:mt-32">
        <ContactSection />
      </div>

      <BlogHighlights />

      {/* 7. Our Approach Protecting Creators */}
      <ClientCentric />

      <ValuesAccordion />

      {/* Other sections */}
      <ExploreCards />
      <Testimonials3D />


      <CtaContact />
      <Footer />
      <LiveChatWidget />
    </main>
  );
}
