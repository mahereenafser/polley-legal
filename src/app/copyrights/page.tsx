"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, Check, Phone, FileText } from "lucide-react";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import LiveChatWidget from "@/components/sections/live-chat-widget";
import ContactForm from "@/components/sections/contact-form";

export default function CopyrightsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] overflow-hidden" style={{ backgroundColor: '#1f3130' }}>
        <div className="absolute inset-0 opacity-30">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6391a347-8b69-465a-b4c4-00b44bb608af-lynford-framer-website/assets/images/XpBU0aa8iF6J3llpZtjaN0hJo-3.jpg"
            alt="Copyright attorney Florida providing creative works protection"
            fill
            className="object-cover"
            priority
            quality={85}
            sizes="100vw"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-[1200px] h-full flex flex-col justify-center px-6 md:px-12 py-24">
          <div className="max-w-3xl">
            <h1 className="font-display text-white text-[60px] md:text-[90px] lg:text-[110px] leading-[0.9] -tracking-[0.02em] mb-6">
              Copyright Attorney Florida
            </h1>
            <p className="text-white/90 text-xl md:text-2xl leading-relaxed mb-8">
              Expert copyright protection for music, software, books, artwork, and creative works. Copyright registration, infringement defense, and fair use guidance available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded transition-all"
                style={{ backgroundColor: '#f8d0b3', color: '#1f3130' }}
              >
                Free Copyright Consultation
              </Link>
              <a
                href="tel:+1234567890"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-medium rounded transition-all border-2 text-white"
                style={{ borderColor: 'rgba(255, 255, 255, 0.3)' }}
              >
                <Phone className="h-5 w-5" />
                Urgent Copyright Help
              </a>
            </div>
          </div>
        </div>

        <a
          href="#content"
          aria-label="Scroll down"
          className="absolute bottom-8 left-1/2 z-20 hidden -translate-x-1/2 md:block"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 transition-all duration-300 hover:scale-105">
            <ArrowDown className="h-5 w-5 text-white" />
          </div>
        </a>
      </section>

      {/* Introduction */}
      <section id="content" className="py-20 bg-white">
        <div className="mx-auto max-w-[1000px] px-6 md:px-12">
          <p className="text-xl leading-relaxed text-gray-700 mb-6">
            As a premier <strong>copyright attorney in Florida</strong>, Polley IP Law protects the creative works of authors, artists, musicians, software developers, and content creators. Our <strong>copyright registration lawyer Florida</strong> team specializes in securing copyright protection for diverse creative works including <strong>music copyright attorney Florida</strong> services for composers and recording artists, <strong>software copyright lawyer Florida</strong> protection for developers, and <strong>book copyright attorney Florida</strong> services for authors and publishers.
          </p>
          <p className="text-xl leading-relaxed text-gray-700">
            Whether you need <strong>copyright infringement defense Florida</strong>, guidance on <strong>fair use attorney Florida</strong> matters, protection for <strong>derivative works lawyer Florida</strong>, or <strong>work for hire attorney Florida</strong> agreements, we provide comprehensive copyright legal services. From initial copyright registration to enforcement and licensing, we safeguard your creative intellectual property throughout its lifecycle.
          </p>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20" style={{ backgroundColor: '#e5ebea' }}>
        <div className="mx-auto max-w-[1200px] px-6 md:px-12">
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl mb-12" style={{ color: '#1f3130' }}>
            What's Included in Our Copyright Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded">
              <FileText className="h-12 w-12 mb-4" style={{ color: '#f8d0b3' }} />
              <h3 className="font-display text-3xl mb-4" style={{ color: '#1f3130' }}>Copyright Registration</h3>
              <p className="text-lg text-gray-700 mb-4">
                Comprehensive <strong>copyright registration lawyer Florida</strong> services to secure federal copyright protection for your creative works.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 flex-shrink-0 mt-1" style={{ color: '#f8d0b3' }} />
                  <span className="text-gray-700">U.S. Copyright Office filing</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 flex-shrink-0 mt-1" style={{ color: '#f8d0b3' }} />
                  <span className="text-gray-700">Deposit copy preparation</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 flex-shrink-0 mt-1" style={{ color: '#f8d0b3' }} />
                  <span className="text-gray-700">Application completion and filing</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 flex-shrink-0 mt-1" style={{ color: '#f8d0b3' }} />
                  <span className="text-gray-700">Certificate of registration</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded">
              <FileText className="h-12 w-12 mb-4" style={{ color: '#f8d0b3' }} />
              <h3 className="font-display text-3xl mb-4" style={{ color: '#1f3130' }}>Music Copyright Protection</h3>
              <p className="text-lg text-gray-700 mb-4">
                Specialized <strong>music copyright attorney Florida</strong> services for songwriters, composers, recording artists, and music publishers.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 flex-shrink-0 mt-1" style={{ color: '#f8d0b3' }} />
                  <span className="text-gray-700">Musical composition registration</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 flex-shrink-0 mt-1" style={{ color: '#f8d0b3' }} />
                  <span className="text-gray-700">Sound recording copyright</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 flex-shrink-0 mt-1" style={{ color: '#f8d0b3' }} />
                  <span className="text-gray-700">Music licensing agreements</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 flex-shrink-0 mt-1" style={{ color: '#f8d0b3' }} />
                  <span className="text-gray-700">Sampling and clearance advice</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded">
              <FileText className="h-12 w-12 mb-4" style={{ color: '#f8d0b3' }} />
              <h3 className="font-display text-3xl mb-4" style={{ color: '#1f3130' }}>Software Copyright Protection</h3>
              <p className="text-lg text-gray-700 mb-4">
                Expert <strong>software copyright lawyer Florida</strong> protecting source code, applications, and digital products.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 flex-shrink-0 mt-1" style={{ color: '#f8d0b3' }} />
                  <span className="text-gray-700">Source code copyright registration</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 flex-shrink-0 mt-1" style={{ color: '#f8d0b3' }} />
                  <span className="text-gray-700">Application and user interface protection</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 flex-shrink-0 mt-1" style={{ color: '#f8d0b3' }} />
                  <span className="text-gray-700">Software licensing strategies</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 flex-shrink-0 mt-1" style={{ color: '#f8d0b3' }} />
                  <span className="text-gray-700">Open source compliance</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded">
              <FileText className="h-12 w-12 mb-4" style={{ color: '#f8d0b3' }} />
              <h3 className="font-display text-3xl mb-4" style={{ color: '#1f3130' }}>Book & Literary Works</h3>
              <p className="text-lg text-gray-700 mb-4">
                Comprehensive <strong>book copyright attorney Florida</strong> services for authors, publishers, and content creators.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 flex-shrink-0 mt-1" style={{ color: '#f8d0b3' }} />
                  <span className="text-gray-700">Manuscript copyright registration</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 flex-shrink-0 mt-1" style={{ color: '#f8d0b3' }} />
                  <span className="text-gray-700">Publishing agreements review</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 flex-shrink-0 mt-1" style={{ color: '#f8d0b3' }} />
                  <span className="text-gray-700">E-book and digital content protection</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 flex-shrink-0 mt-1" style={{ color: '#f8d0b3' }} />
                  <span className="text-gray-700">Rights reversion and termination</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Common Problems We Solve */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-[1200px] px-6 md:px-12">
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl mb-12" style={{ color: '#1f3130' }}>
            Common Copyright Problems We Solve
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 border-l-4" style={{ borderColor: '#f8d0b3' }}>
              <h3 className="font-display text-2xl mb-3" style={{ color: '#1f3130' }}>Copyright Infringement</h3>
              <p className="text-gray-700">
                Need <strong>copyright infringement defense Florida</strong>? We stop unauthorized copying, distribution, and display of your protected works through aggressive legal action.
              </p>
            </div>
            <div className="p-6 border-l-4" style={{ borderColor: '#f8d0b3' }}>
              <h3 className="font-display text-2xl mb-3" style={{ color: '#1f3130' }}>Fair Use Analysis</h3>
              <p className="text-gray-700">
                Our <strong>fair use attorney Florida</strong> provides guidance on educational use, commentary, criticism, parody, and transformative works under fair use doctrine.
              </p>
            </div>
            <div className="p-6 border-l-4" style={{ borderColor: '#f8d0b3' }}>
              <h3 className="font-display text-2xl mb-3" style={{ color: '#1f3130' }}>Derivative Works Rights</h3>
              <p className="text-gray-700">
                <strong>Derivative works lawyer Florida</strong> guidance on adaptations, translations, modifications, and transformative uses of copyrighted material.
              </p>
            </div>
            <div className="p-6 border-l-4" style={{ borderColor: '#f8d0b3' }}>
              <h3 className="font-display text-2xl mb-3" style={{ color: '#1f3130' }}>Work for Hire Agreements</h3>
              <p className="text-gray-700">
                <strong>Work for hire attorney Florida</strong> services to draft agreements clarifying ownership of works created by employees and contractors.
              </p>
            </div>
            <div className="p-6 border-l-4" style={{ borderColor: '#f8d0b3' }}>
              <h3 className="font-display text-2xl mb-3" style={{ color: '#1f3130' }}>DMCA Takedowns</h3>
              <p className="text-gray-700">
                Send effective DMCA takedown notices to remove infringing content from websites, social media platforms, and online marketplaces.
              </p>
            </div>
            <div className="p-6 border-l-4" style={{ borderColor: '#f8d0b3' }}>
              <h3 className="font-display text-2xl mb-3" style={{ color: '#1f3130' }}>Copyright Licensing</h3>
              <p className="text-gray-700">
                Draft and negotiate copyright licenses for commercial use, distribution rights, performance rights, and reproduction rights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20" style={{ backgroundColor: '#e5ebea' }}>
        <div className="mx-auto max-w-[1000px] px-6 md:px-12">
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl mb-12" style={{ color: '#1f3130' }}>
            Our Copyright Registration Process
          </h2>
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold text-white" style={{ backgroundColor: '#1f3130' }}>
                1
              </div>
              <div>
                <h3 className="font-display text-2xl mb-3" style={{ color: '#1f3130' }}>Free Copyright Consultation</h3>
                <p className="text-lg text-gray-700">
                  Discuss your creative work with our <strong>copyright attorney Florida</strong>. We assess copyright eligibility, discuss registration benefits, and develop a protection strategy. Available by phone, video, or in-person.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold text-white" style={{ backgroundColor: '#1f3130' }}>
                2
              </div>
              <div>
                <h3 className="font-display text-2xl mb-3" style={{ color: '#1f3130' }}>Work Classification & Strategy</h3>
                <p className="text-lg text-gray-700">
                  We classify your work as literary, musical, dramatic, artistic, or other category. Determine if you need <strong>music copyright attorney Florida</strong>, <strong>software copyright lawyer Florida</strong>, or <strong>book copyright attorney Florida</strong> services.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold text-white" style={{ backgroundColor: '#1f3130' }}>
                3
              </div>
              <div>
                <h3 className="font-display text-2xl mb-3" style={{ color: '#1f3130' }}>Application Preparation & Filing</h3>
                <p className="text-lg text-gray-700">
                  Our <strong>copyright registration lawyer Florida</strong> prepares deposit copies, completes applications, and files with the U.S. Copyright Office. Electronic filing for faster processing.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold text-white" style={{ backgroundColor: '#1f3130' }}>
                4
              </div>
              <div>
                <h3 className="font-display text-2xl mb-3" style={{ color: '#1f3130' }}>Copyright Office Correspondence</h3>
                <p className="text-lg text-gray-700">
                  We handle all U.S. Copyright Office communications, respond to examiner questions, and address any issues that arise during the registration process.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold text-white" style={{ backgroundColor: '#1f3130' }}>
                5
              </div>
              <div>
                <h3 className="font-display text-2xl mb-3" style={{ color: '#1f3130' }}>Registration & Enforcement</h3>
                <p className="text-lg text-gray-700">
                  Receive your copyright registration certificate! We provide ongoing enforcement support including <strong>copyright infringement defense Florida</strong> and licensing guidance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-[1200px] px-6 md:px-12">
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl mb-12" style={{ color: '#1f3130' }}>
            Why Choose Polley IP Law for Copyright Protection
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-display text-3xl mb-4" style={{ color: '#1f3130' }}>Creative Industry Experience</h3>
              <p className="text-lg text-gray-700 mb-6">
                Our <strong>copyright attorney Florida</strong> team understands the unique challenges facing musicians, authors, software developers, and artists. We speak your language and protect your creative vision.
              </p>
            </div>
            <div>
              <h3 className="font-display text-3xl mb-4" style={{ color: '#1f3130' }}>Specialized Copyright Knowledge</h3>
              <p className="text-lg text-gray-700 mb-6">
                From <strong>music copyright attorney Florida</strong> to <strong>software copyright lawyer Florida</strong> to <strong>book copyright attorney Florida</strong>—we provide industry-specific expertise for your creative work.
              </p>
            </div>
            <div>
              <h3 className="font-display text-3xl mb-4" style={{ color: '#1f3130' }}>Fast Registration Services</h3>
              <p className="text-lg text-gray-700 mb-6">
                Need <strong>urgent copyright protection Florida</strong>? We offer expedited filing for time-sensitive matters including publishing deadlines, infringement situations, and commercial launches.
              </p>
            </div>
            <div>
              <h3 className="font-display text-3xl mb-4" style={{ color: '#1f3130' }}>Comprehensive Copyright Solutions</h3>
              <p className="text-lg text-gray-700 mb-6">
                From registration to <strong>fair use attorney Florida</strong> guidance to <strong>copyright infringement defense Florida</strong>—we handle all aspects of copyright law under one roof.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20" style={{ backgroundColor: '#e5ebea' }}>
        <div className="mx-auto max-w-[1000px] px-6 md:px-12">
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl mb-12" style={{ color: '#1f3130' }}>
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="font-display text-2xl mb-3" style={{ color: '#1f3130' }}>How much does copyright registration cost?</h3>
              <p className="text-lg text-gray-700">
                <strong>Copyright registration lawyer Florida</strong> fees typically range from $500-$1,000 including attorney fees and Copyright Office filing fees. Single work registrations are less expensive than collections. We provide flat-fee pricing.
              </p>
            </div>

            <div>
              <h3 className="font-display text-2xl mb-3" style={{ color: '#1f3130' }}>How long does copyright registration take?</h3>
              <p className="text-lg text-gray-700">
                Electronic applications typically take 3-8 months for processing. Paper applications take longer, 8-12 months. Expedited service available for urgent cases reduces time to 5-10 business days with additional fees.
              </p>
            </div>

            <div>
              <h3 className="font-display text-2xl mb-3" style={{ color: '#1f3130' }}>Do I need to register my copyright?</h3>
              <p className="text-lg text-gray-700">
                Copyright protection exists automatically upon creation, but registration with the U.S. Copyright Office provides important legal benefits including the ability to sue for infringement, statutory damages, and public record of ownership. Our <strong>copyright attorney Florida</strong> recommends registration for commercially valuable works.
              </p>
            </div>

            <div>
              <h3 className="font-display text-2xl mb-3" style={{ color: '#1f3130' }}>Can you protect my music?</h3>
              <p className="text-lg text-gray-700">
                Absolutely! Our <strong>music copyright attorney Florida</strong> registers musical compositions (songs, lyrics, melodies) and sound recordings (specific recordings). We also handle sampling clearances, mechanical licenses, and performance rights.
              </p>
            </div>

            <div>
              <h3 className="font-display text-2xl mb-3" style={{ color: '#1f3130' }}>Is my software code protected by copyright?</h3>
              <p className="text-gray-700">
                Yes. Our <strong>software copyright lawyer Florida</strong> protects source code, object code, user interfaces, and documentation. Copyright complements patent protection for software inventions.
              </p>
            </div>

            <div>
              <h3 className="font-display text-2xl mb-3" style={{ color: '#1f3130' }}>What is fair use and when does it apply?</h3>
              <p className="text-lg text-gray-700">
                Fair use allows limited use of copyrighted material without permission for criticism, commentary, news, teaching, or research. Our <strong>fair use attorney Florida</strong> evaluates the four fair use factors to determine if your use qualifies.
              </p>
            </div>

            <div>
              <h3 className="font-display text-2xl mb-3" style={{ color: '#1f3130' }}>What if someone copied my work?</h3>
              <p className="text-lg text-gray-700">
                Our <strong>copyright infringement defense Florida</strong> team takes immediate action through cease and desist letters, DMCA takedown notices, and litigation when necessary. We pursue damages and injunctions to stop infringement.
              </p>
            </div>

            <div>
              <h3 className="font-display text-2xl mb-3" style={{ color: '#1f3130' }}>Who owns work created by my employees?</h3>
              <p className="text-lg text-gray-700">
                Under work for hire doctrine, employers typically own works created by employees within their employment scope. Our <strong>work for hire attorney Florida</strong> drafts agreements to clarify ownership for contractors and freelancers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas & Emergency CTA */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-[1200px] px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-4xl md:text-5xl mb-6" style={{ color: '#1f3130' }}>
                Florida Creative Community Copyright Services
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Our <strong>copyright attorney Florida</strong> serves musicians, authors, software developers, artists, and content creators throughout Florida including Miami, Orlando, Tampa, Jacksonville, and statewide. We also work with creators nationwide for federal copyright matters.
              </p>
              <p className="text-lg text-gray-700">
                Virtual consultations available anywhere in Florida or across the United States. In-person meetings by appointment at our Tampa office.
              </p>
            </div>
            <div className="p-10 rounded" style={{ backgroundColor: '#1f3130' }}>
              <h3 className="font-display text-3xl md:text-4xl text-white mb-4">
                Need Urgent Copyright Protection?
              </h3>
              <p className="text-white/80 text-lg mb-6">
                <strong>Expedited copyright registration available.</strong> If you're facing an infringement situation, publishing deadline, or commercial launch, contact us for <strong>urgent copyright protection Florida</strong>.
              </p>
              <div className="flex flex-col gap-4">
                <a
                  href="tel:+1234567890"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-medium rounded transition-all"
                  style={{ backgroundColor: '#f8d0b3', color: '#1f3130' }}
                >
                  <Phone className="h-5 w-5" />
                  Call for Urgent Help
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded transition-all border-2 text-white"
                  style={{ borderColor: 'rgba(255, 255, 255, 0.3)' }}
                >
                  Schedule Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-[#E8E9E6]">
        <div className="container max-w-3xl">
          <ContactForm />
        </div>
      </section>

      <Footer />
      <LiveChatWidget />
    </main>
  );
}
