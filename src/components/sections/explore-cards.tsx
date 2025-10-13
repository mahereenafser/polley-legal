import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

type CardData = {
  type: 'video';
  videoUrl: string;
  title: string;
  subtitle: string;
  href: string;
} | {
  type: 'image';
  imageUrl: string;
  title: string;
  subtitle: string;
  href: string;
};

const cardData: CardData[] = [
  {
    type: 'video',
    videoUrl: "/videos/video-1.mp4",
    title: "Services",
    subtitle: "Comprehensive IP solutions",
    href: "/services",
  },
  {
    type: 'image',
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6391a347-8b69-465a-b4c4-00b44bb608af-lynford-framer-website/assets/images/qOaIdbeCmsxTXr2UUj7TRajLFU-11.jpg",
    title: "About",
    subtitle: "Our story and values",
    href: "/about",
  },
];

const ExploreCards = () => {
  return (
    <section id="explore-cards" className="bg-background-primary text-foreground py-20 px-6 md:px-12">
      <div className="container mx-auto max-w-[1440px]">
        <div className="flex flex-col items-center gap-16">
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

          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
            {cardData.map((card) => (
              <a
                key={card.title}
                href={card.href}
                className="group block bg-card rounded-xl shadow-[0px_4px_10px_0px_rgba(0,0,0,0.05)] overflow-hidden transition-transform duration-300 ease-in-out will-change-transform hover:-translate-y-1"
              >
                <div className="overflow-hidden relative aspect-[3/2]">
                  {card.type === 'video' ? (
                    <video
                      src={card.videoUrl}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-105"
                    />
                  ) : card.type === 'image' ? (
                    <Image
                      src={card.imageUrl}
                      alt={card.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-105"
                    />
                  ) : null}
                </div>
                <div className="p-6 flex flex-col gap-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-display text-[32px] font-normal text-foreground">
                        {card.title}
                      </h4>
                      <p className="font-body text-lg text-muted-foreground leading-[1.6]">
                        {card.subtitle}
                      </p>
                    </div>
                    <div className="mt-1 flex-shrink-0 w-14 h-14 bg-primary rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out">
                      <ArrowRight className="w-6 h-6 text-primary-foreground" />
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreCards;
