import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const ExploreCards = () => {
  return (
    <section id="explore-cards" className="bg-background-primary text-foreground py-20 px-6 md:px-12">
      <div className="container mx-auto max-w-[1440px]">
        <div className="flex flex-col items-center gap-16">
          {/* Header Text */}
          <div className="w-full flex flex-col lg:flex-row lg:gap-32">
            <div className="lg:w-64 flex-shrink-0 mb-4 lg:mb-0">
              <p className="font-body text-sm font-semibold uppercase tracking-[0.05em] text-muted-foreground">
                Explore
              </p>
            </div>
            <p className="font-body text-2xl leading-9 text-foreground max-w-lg">
              Protecting your innovations with integrity, forward-thinking strategies, and unwavering commitment to excellence.
            </p>
          </div>

          {/* Video Container with stacked cards */}
          <div className="w-full">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <div className="aspect-[16/9] w-full">
                <video
                  src="/videos/explore-video.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="mt-12 flex flex-col items-center gap-8">
              <Link
                href="/services"
                className="group w-full max-w-[520px] bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] animate-float"
              >
                <div className="relative h-[180px] overflow-hidden">
                  <Image
                    src="/images/paper-contract.jpg"
                    alt="Services"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 bg-white">
                  <div className="flex justify-between items-start gap-3">
                    <div>
                      <h4 className="font-display text-3xl font-normal text-foreground mb-1">
                        Services
                      </h4>
                      <p className="font-body text-base text-muted-foreground">
                        Comprehensive IP solutions
                      </p>
                    </div>
                    <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-10deg]">
                      <ArrowRight className="w-6 h-6 text-primary-foreground" />
                    </div>
                  </div>
                </div>
              </Link>

              <Link
                href="/blog"
                className="group w-full max-w-[520px] bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] animate-float"
                style={{ animationDelay: '0.4s' }}
              >
                <div className="relative h-[180px] overflow-hidden">
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6391a347-8b69-465a-b4c4-00b44bb608af-lynford-framer-website/assets/images/qOaIdbeCmsxTXr2UUj7TRajLFU-11.jpg"
                    alt="Blog"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 bg-white">
                  <div className="flex justify-between items-start gap-3">
                    <div>
                      <h4 className="font-display text-3xl font-normal text-foreground mb-1">
                        Blog
                      </h4>
                      <p className="font-body text-base text-muted-foreground">
                        Insights and updates
                      </p>
                    </div>
                    <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-10deg]">
                      <ArrowRight className="w-6 h-6 text-primary-foreground" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreCards;
