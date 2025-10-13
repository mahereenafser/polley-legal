import Navigation from "@/components/sections/navigation";
import HeroSection from "@/components/sections/hero";
import AboutIntro from "@/components/sections/about-intro";
import ExpertiseSections from "@/components/sections/expertise-sections";
import ServicesPreview from "@/components/sections/services-preview";
import ValuesMarquee from "@/components/sections/values-marquee";
import TestimonialPrimary from "@/components/sections/testimonial-primary";
import ClientCentric from "@/components/sections/client-centric";
import ExploreCards from "@/components/sections/explore-cards";
import ValuesAccordion from "@/components/sections/values-accordion";
import CtaContact from "@/components/sections/cta-contact";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutIntro />
      <ServicesPreview />
      <TestimonialPrimary />
      <ValuesMarquee />
      <ExpertiseSections />
      <ClientCentric />
      <ExploreCards />
      <ValuesAccordion />
      <CtaContact />
      <Footer />
    </main>
  );
}