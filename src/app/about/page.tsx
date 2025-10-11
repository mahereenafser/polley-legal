import Image from "next/image";
import { ArrowDown } from "lucide-react";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section - Exactly matching homepage structure */}
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
              Meet the dedicated team protecting your intellectual property
            </p>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-end gap-8">
            <div className="flex-1 w-full lg:pl-0">
              <h1 className="font-display text-white text-[70px] sm:text-[90px] lg:text-[120px] leading-[0.9] -tracking-[0.02em]">
                About
                <br />
                Us
              </h1>
            </div>

            <div className="hidden lg:flex flex-col items-end gap-6 text-right w-[440px] flex-shrink-0">
              <p className="text-lg max-w-[360px] text-white/90">
                Experienced intellectual property attorneys committed to protecting your innovations
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start gap-4 lg:hidden">
            <p className="text-lg max-w-sm text-white/90">
              Experienced intellectual property attorneys committed to protecting your innovations
            </p>
          </div>
        </div>

        <a
          href="#about-content"
          aria-label="Scroll down"
          className="absolute bottom-10 left-1/2 z-20 hidden -translate-x-1/2 md:block"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/20 transition-all duration-300 hover:scale-105 hover:bg-white/10">
            <ArrowDown className="h-6 w-6 text-white" />
          </div>
        </a>
      </section>

      {/* About Content */}
      <section id="about-content" className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6 sm:px-8 md:px-12">
          <div className="max-w-4xl mx-auto mb-20 text-center">
            <h2 className="font-display text-5xl lg:text-6xl text-text-primary mb-8">
              Our Team
            </h2>
            <p className="text-xl text-text-secondary leading-relaxed">
              At Polley IP Law, P.A., we are dedicated to providing exceptional intellectual property services. Our experienced team is committed to protecting your innovations and helping you navigate the complexities of IP law.
            </p>
          </div>

          {/* Team Members */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-20 max-w-5xl mx-auto">

            {/* Daniel Polley */}
            <div className="flex flex-col gap-6">
              <div className="relative w-full h-[400px] overflow-hidden">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6391a347-8b69-465a-b4c4-00b44bb608af-lynford-framer-website/assets/images/Es1kU20wiKwPNdeByqxmWS50F6g-2.jpg"
                  alt="Daniel Polley - Managing Shareholder"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-display text-4xl text-text-primary mb-2">
                  Daniel Polley
                </h3>
                <p className="text-lg text-accent-primary font-medium mb-4">
                  Managing Shareholder
                </p>
                <p className="text-lg text-text-secondary leading-relaxed">
                  Daniel Polley is the Managing Shareholder at Polley IP Law, P.A. With extensive experience in intellectual property law, he specializes in patents, trademarks, and copyrights. Daniel is dedicated to helping clients protect their innovations and creative works with personalized legal strategies.
                </p>
              </div>
            </div>

            {/* Miles Polley */}
            <div className="flex flex-col gap-6">
              <div className="relative w-full h-[400px] overflow-hidden">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6391a347-8b69-465a-b4c4-00b44bb608af-lynford-framer-website/assets/images/Es1kU20wiKwPNdeByqxmWS50F6g-2.jpg"
                  alt="Miles Polley - Associate"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-display text-4xl text-text-primary mb-2">
                  Miles Polley
                </h3>
                <p className="text-lg text-accent-primary font-medium mb-4">
                  Associate
                </p>
                <p className="text-lg text-text-secondary leading-relaxed">
                  Miles Polley is an Associate at Polley IP Law, P.A. He brings a fresh perspective and keen attention to detail to intellectual property matters. Miles works closely with clients to ensure their IP assets are properly protected and strategically managed.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-background-secondary">
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
              By signing up for Inside IP, you agree to receive other marketing, advertising, and promotional communication
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
