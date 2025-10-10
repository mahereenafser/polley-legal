import Navigation from "@/components/sections/navigation";
import HeroSection from "@/components/sections/hero";
import AboutIntro from "@/components/sections/about-intro";
import ServicesPreview from "@/components/sections/services-preview";
import ValuesMarquee from "@/components/sections/values-marquee";
import ValuesDetail from "@/components/sections/values-detail";
import TestimonialPrimary from "@/components/sections/testimonial-primary";
import ClientCentric from "@/components/sections/client-centric";
import TestimonialSecondary from "@/components/sections/testimonial-secondary";
import RetentionMarquee from "@/components/sections/retention-marquee";
import TrustedLeadersSection from "@/components/sections/trusted-leaders";
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
      <ValuesMarquee />
      <ValuesDetail />
      <TestimonialPrimary />
      <ClientCentric />
      <TestimonialSecondary />
      <RetentionMarquee />
      <TrustedLeadersSection />
      <ExploreCards />
      <ValuesAccordion />
      <CtaContact />
      <Footer />
    </main>
  );
}