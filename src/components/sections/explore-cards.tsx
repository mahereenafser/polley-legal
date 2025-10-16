import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const exploreCards = [
  {
    title: 'Services Overview',
    description: 'Explore our full suite of intellectual property services engineered to support innovators at every stage.',
    href: '/services',
    tag: 'Services',
    image: '/images/paper-contract.jpg',
  },
  {
    title: 'Latest Insights',
    description: 'Stay ahead with our analysis on trademarks, emergency filings, and long-term IP strategy.',
    href: '/blog',
    tag: 'Blog',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6391a347-8b69-465a-b4c4-00b44bb608af-lynford-framer-website/assets/images/qOaIdbeCmsxTXr2UUj7TRajLFU-11.jpg',
  },
];

const ExploreCard = ({ title, description, href, tag, image }: typeof exploreCards[number]) => (
  <Link
    href={href}
    className="group block w-full max-w-[360px] overflow-hidden rounded-3xl border border-white/10 bg-white shadow-xl transition-transform duration-500 hover:-translate-y-2"
  >
    <div className="relative h-48">
      <Image src={image} alt={title} fill className="object-cover" />
      <span className="absolute left-4 top-4 inline-flex rounded-full bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#1E3432] backdrop-blur-sm">
        {tag}
      </span>
    </div>
    <div className="space-y-4 p-6">
      <h4 className="font-display text-2xl text-[#1E3432]">{title}</h4>
      <p className="text-sm text-[#5F6764] leading-relaxed">{description}</p>
      <div className="pt-2">
        <span className="inline-flex items-center gap-2 rounded-full bg-[#1E3432] px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-colors duration-300 group-hover:bg-[#152623]">
          View All
          <ArrowRight className="h-4 w-4" />
        </span>
      </div>
    </div>
  </Link>
);

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

          {/* Video Container - responsive layouts */}
          <div className="w-full">
            {/* Desktop Layout (md and up) */}
            <div className="hidden md:block relative p-8 md:p-12">
              <div className="relative aspect-video overflow-hidden rounded-3xl shadow-2xl">
                <video
                  src="/videos/explore-video.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-0 bottom-[8%] pointer-events-auto">
                  <ExploreCard {...exploreCards[0]} />
                </div>
                <div className="absolute right-0 top-[8%] pointer-events-auto">
                  <ExploreCard {...exploreCards[1]} />
                </div>
              </div>
            </div>

            {/* Mobile Layout (below md) - stacked cards */}
            <div className="md:hidden">
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
                {exploreCards.map((card, index) => (
                  <ExploreCard key={card.title} {...card} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreCards;
